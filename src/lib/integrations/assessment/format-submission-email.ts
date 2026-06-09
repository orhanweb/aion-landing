// src/lib/integrations/assessment/format-submission-email.ts
import type { AssessmentSubmission } from '@/lib/assessment/schema';

type EmailField = {
  label: string;
  value: string;
};

const topicLabels: Record<AssessmentSubmission['topic'], string> = {
  iso27001: 'ISO 27001',
  iso42001: 'ISO 42001',
  euAiAct: 'EU AI Act',
  general: 'General inquiry'
};

const employeeCountLabels = {
  '1-10': '1–10',
  '11-50': '11–50',
  '51-250': '51–250',
  '250+': '250+'
} as const;

const itModelLabels = {
  inHouse: 'In-house',
  outsource: 'Outsourced',
  basic: 'Basic / minimal IT'
} as const;

const motivationLabels = {
  contracts: 'Customer / contract requirements',
  regulation: 'Regulatory compliance',
  maturity: 'Security / AI maturity'
} as const;

const sectorLabels = {
  finance: 'Finance',
  healthcare: 'Healthcare',
  technology: 'Technology',
  manufacturing: 'Manufacturing',
  public: 'Public sector',
  other: 'Other'
} as const;

const isoSystemLabels = {
  iso27001: 'ISO 27001',
  iso42001: 'ISO 42001',
  iso22301: 'ISO 22301',
  iso9001: 'ISO 9001',
  none: 'None'
} as const;

const aiRoleLabels = {
  developer: 'Developer',
  provider: 'Provider',
  deployer: 'Deployer'
} as const;

const valueChainRoleLabels = {
  provider: 'Provider',
  deployer: 'Deployer',
  importer: 'Importer'
} as const;

const riskClassificationLabels = {
  minimal: 'Minimal risk',
  limited: 'Limited risk',
  high: 'High risk',
  unacceptable: 'Unacceptable risk',
  unsure: 'Unsure'
} as const;

const transparencyLabels = {
  yes: 'Yes',
  no: 'No',
  partial: 'Partial'
} as const;

const provenanceLabels = {
  documented: 'Documented',
  partial: 'Partially documented',
  none: 'Not documented',
  unsure: 'Unsure'
} as const;

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

function formatList(values: readonly string[]): string {
  return values.length > 0 ? values.join(', ') : '—';
}

function formatIsoSystems(values: readonly (keyof typeof isoSystemLabels)[]): string {
  return formatList(values.map(value => isoSystemLabels[value]));
}

function getBranchFields(payload: AssessmentSubmission): EmailField[] {
  switch (payload.topic) {
    case 'iso27001':
      return [
        { label: 'Employee count', value: employeeCountLabels[payload.employeeCount] },
        { label: 'IT model', value: itModelLabels[payload.itModel] },
        { label: 'Primary motivation', value: motivationLabels[payload.primaryMotivation] },
        { label: 'Existing ISO systems', value: formatIsoSystems(payload.existingIsoSystems) }
      ];
    case 'iso42001':
      return [
        { label: 'Sector', value: sectorLabels[payload.sector] },
        { label: 'AI roles', value: formatList(payload.aiRoles.map(role => aiRoleLabels[role])) },
        { label: 'AI use case', value: payload.aiUseCase },
        { label: 'Existing ISO systems', value: formatIsoSystems(payload.existingIsoSystems) },
        { label: 'Primary motivation', value: motivationLabels[payload.primaryMotivation] }
      ];
    case 'euAiAct':
      return [
        { label: 'Value chain role', value: valueChainRoleLabels[payload.valueChainRole] },
        { label: 'Risk classification', value: riskClassificationLabels[payload.riskClassification] },
        { label: 'Transparency oversight', value: transparencyLabels[payload.transparencyOversight] },
        { label: 'Training data provenance', value: provenanceLabels[payload.trainingDataProvenance] },
        { label: 'Existing management systems', value: formatIsoSystems(payload.existingManagementSystems) }
      ];
    case 'general':
      return [{ label: 'Need description', value: payload.needDescription }];
  }
}

function getSharedFields(payload: AssessmentSubmission): EmailField[] {
  const fields: EmailField[] = [
    { label: 'Topic', value: topicLabels[payload.topic] },
    { label: 'Company', value: payload.company },
    { label: 'Contact name', value: payload.name },
    { label: 'Email', value: payload.email },
    { label: 'Phone', value: payload.phone },
    { label: 'Job title', value: payload.title }
  ];

  if (payload.topic !== 'iso42001') {
    fields.splice(2, 0, { label: 'Sector', value: sectorLabels[payload.sector] });
  }

  return fields;
}

function renderTextSection(title: string, fields: EmailField[]): string {
  const lines = fields.map(field => `${field.label}: ${field.value}`);
  return `${title}\n${lines.join('\n')}`;
}

function renderHtmlSection(title: string, fields: EmailField[]): string {
  const rows = fields
    .map(
      field => `
        <tr>
          <th style="padding:8px 12px 8px 0;text-align:left;vertical-align:top;color:#475569;font-weight:600;width:180px;">${escapeHtml(field.label)}</th>
          <td style="padding:8px 0;vertical-align:top;color:#0f172a;white-space:pre-wrap;">${escapeHtml(field.value)}</td>
        </tr>`
    )
    .join('');

  return `
    <h2 style="margin:24px 0 12px;font-size:16px;color:#0f172a;">${escapeHtml(title)}</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${rows}</table>`;
}

export type AssessmentSubmissionEmail = {
  subject: string;
  text: string;
  html: string;
};

export function formatAssessmentSubmissionEmail(payload: AssessmentSubmission, siteName: string, submittedAt: string): AssessmentSubmissionEmail {
  const branchFields = getBranchFields(payload);
  const sharedFields = getSharedFields(payload);
  const subject = `[${siteName} Assessment] ${topicLabels[payload.topic]} — ${payload.company}`;

  const text = [
    `New assessment submission for ${siteName}.`,
    `Submitted at: ${submittedAt}`,
    '',
    renderTextSection('Assessment details', branchFields),
    '',
    renderTextSection('Contact & company', sharedFields)
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0f172a;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;">
      <p style="margin:0 0 8px;font-size:14px;color:#64748b;">New assessment submission</p>
      <h1 style="margin:0 0 8px;font-size:22px;line-height:1.3;">${escapeHtml(siteName)}</h1>
      <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Submitted at ${escapeHtml(submittedAt)} (UTC)</p>
      ${renderHtmlSection('Assessment details', branchFields)}
      ${renderHtmlSection('Contact & company', sharedFields)}
    </div>
  </body>
</html>`;

  return { subject, text, html };
}

// src/lib/mock/content/services/en.ts
import type { ServiceContent } from '@/lib/content/services/types';

export const mockServicesEn: ServiceContent[] = [
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    subtitle: 'ISO 42001: From Risk to Value',
    standard: 'ISO 42001',
    shortDescription:
      'We build ISO/IEC 42001-based AI management systems and bring AI risks, decision processes, and lifecycle under institutional control.',
    intro: [
      'The first step in AI governance is a clear picture of where you stand today. Before certification or system setup, we assess the AI systems you use or develop against operational, technical, and regulatory risk.',
      'We compare your current practices with ISO/IEC 42001 through gap analysis, identify weaknesses, and deliver a detailed report. This surfaces obstacles early, saves time and cost, and gives you a practical roadmap.'
    ],
    outcomes: [
      'ISO/IEC 42001-aligned AI management system',
      'Gap analysis report and strategic roadmap',
      'Risk architecture and statement of applicability',
      'Audit readiness and certification guidance',
      'Continuous improvement (CAPA) framework'
    ],
    sections: {
      layout: 'process',
      label: 'Process',
      title: 'How We Work'
    },
    steps: [
      {
        title: 'Goal Setting',
        description:
          'We align AI objectives with your strategic vision and existing policies. The aim is measurable outcomes: concrete value, regulatory readiness, and systems you can sustain.'
      },
      {
        title: 'Policies and Procedures',
        description:
          'We draft the policies and documentation your organisation needs to develop and use AI responsibly. Your ISO/IEC 42001 AI policy covers ethical use, data security, transparency, and fair decision-making, and aligns with your quality, information security, and privacy policies.'
      },
      {
        title: 'Training and Awareness',
        description:
          'AI governance depends on people as much as process. We train staff and leadership on AI policies, ethical responsibilities, risks, and their roles. We close competency gaps and embed Trust by Design across the organisation.'
      },
      {
        title: 'Risk Architecture and Controls',
        description:
          'We identify AI-specific risks such as algorithmic bias, data poisoning, and lack of transparency, and run AI System Impact Assessments. Under ISO/IEC 42001 Annex A we prepare a Statement of Applicability and implement controls to reduce unacceptable risk.'
      },
      {
        title: 'Performance Measurement',
        description:
          'We define what to measure (accuracy, transparency, security), how often, and who reviews results. AI systems are monitored against defined goals and ethical rules, with clear reporting to leadership.'
      },
      {
        title: 'Certification Audit',
        description:
          'We prepare your organisation for accredited certification audits. Before external audits (BSI, TÜV, and others) we run internal audits, close findings, and support you through the certification process for ISO 42001.'
      },
      {
        title: 'Continuous Improvement',
        description:
          'AI systems change as models learn and data evolves. We run root cause analysis on nonconformities, plan corrective actions (CAPA), and keep your AI management system effective as you scale.'
      }
    ],
    relatedSlugs: ['regulatory-compliance', 'human-oversight']
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    subtitle: 'EU AI Act-Ready AI',
    standard: 'EU AI Act',
    shortDescription:
      'We assess your AI systems under the EU AI Act and international regulations, and structure risk classification and compliance processes.',
    intro: [
      'AI systems bring ethical, security, transparency, and regulatory risk. ISO 42001 helps organisations manage these risks in a structured, auditable way. We align your AI solutions with the EU AI Act and international standards: risk classification, controls, and governance from end to end.'
    ],
    outcomes: [
      'Correct EU AI Act risk classification',
      'Transparency and explainability framework',
      'Data governance and human oversight alignment',
      'Provider/deployer responsibility map',
      'Audit-ready compliance documentation'
    ],
    sections: {
      layout: 'gaps',
      label: 'Compliance Gaps',
      title: 'What Are EU AI Act Compliance Gaps?'
    },
    steps: [
      {
        title: 'Incorrect Risk Classification and Missing Impact Assessments',
        highlight: 'Up to €35M or 7% of global turnover',
        description:
          'Many organisations misclassify AI systems under the EU AI Act or skip mandatory impact assessments for high-risk use cases. Fines can reach €35 million or 7% of global turnover. We audit and classify your systems against international standards so you know your obligations before regulators ask.'
      },
      {
        title: 'Insufficient Transparency and Explainability',
        description:
          'The EU AI Act requires users to know when they interact with AI, for example chatbots or synthetic media. Opaque model decisions erode trust and create regulatory exposure. We help you document and explain decision processes so your systems meet transparency requirements.'
      },
      {
        title: 'Data Governance and Human Oversight Violations',
        description:
          'Training data must be managed responsibly, and automated decisions need effective human oversight. Gaps in data quality, bias control, or review processes create both legal and security risk. We secure data governance and integrate the oversight architecture regulators expect.'
      },
      {
        title: 'Neglect of Provider and Deployer Responsibilities',
        highlight: 'Indirect fines up to €15M',
        description:
          'Roles in the AI value chain must be clear, especially when using third-party models or platforms. Missing supplier due diligence and undocumented responsibilities can trigger fines up to €15 million. We map provider and deployer obligations and align contracts and controls with ISO 42001 and the EU AI Act.'
      }
    ],
    relatedSlugs: ['ai-governance', 'information-security']
  },
  {
    slug: 'information-security',
    title: 'Information Security',
    subtitle: 'Data Security Starts with People',
    standard: 'ISO 27001',
    shortDescription: 'We build information security architecture for data protection, access control, and secure AI operations under ISO 27001.',
    intro: [
      'Sensitive data in AI training and inference needs protection against leaks and AI-specific attacks such as data poisoning.',
      'We integrate ISO/IEC 27001 (Information Security) and ISO/IEC 42001 (AI Management) so your data stays confidential and intact, in line with international regulation.'
    ],
    outcomes: [
      'ISO 27001 + 42001 integrated security architecture',
      'AI penetration testing and threat analysis',
      'Secure model operations (Trust by Design)',
      'Incident response and monitoring mechanisms',
      'Continuous security improvement cycle'
    ],
    sections: {
      layout: 'topics',
      label: 'Depth',
      title: 'Security Topic Areas'
    },
    steps: [
      {
        title: 'Secure Model Operations',
        description:
          'Production AI models face prompt injection, evasion, and manipulation attacks. We protect algorithms throughout their lifecycle so outputs stay fair, transparent, and resistant to external interference.'
      },
      {
        title: 'Risk Architecture and Threat Analysis',
        description:
          'Organisation-specific AI penetration tests and impact assessments find security gaps before attackers do. Using OWASP guidance and ISO/IEC 42001, we build a risk architecture and controls that limit operational, legal, and reputational damage.'
      },
      {
        title: 'Monitoring and Incident Management',
        description:
          'Anomalies, performance drift, and security deviations in AI models need fast detection. We set up monitoring, incident response plans, and recovery procedures, including legal notification where required.'
      },
      {
        title: 'Continuous Security Improvement',
        description:
          'Threats and regulations change continuously. Through internal audits, root cause analysis, and PDCA cycles we keep your security posture current against evolving risks, including the EU AI Act.'
      }
    ],
    relatedSlugs: ['ai-governance', 'operational-resilience']
  },
  {
    slug: 'operational-resilience',
    title: 'Operational Resilience',
    subtitle: 'AI Designed for Continuity',
    standard: 'ISO 22301',
    shortDescription: 'Using ISO 22301 business continuity, we ensure critical AI and data systems keep running safely through disruptions.',
    intro: [
      'We help you keep critical AI and data systems running, make interruption risks visible, and build operational resilience tailored to your sector. Under ISO 22301 we strengthen availability, business continuity, and recovery capability.'
    ],
    outcomes: [
      'Critical AI process inventory and risk analysis',
      'RTO/RPO targets and resilience metrics',
      'ISO 22301-aligned continuity policies',
      'Disaster recovery and redundant architecture',
      'Audit-ready business continuity system'
    ],
    sections: {
      layout: 'topics',
      label: 'Depth',
      title: 'Resilience Topic Areas'
    },
    steps: [
      {
        title: 'Critical System and Process Analysis',
        description:
          'We analyse AI integrations, ML models, and data sources to identify critical processes and threats. The result is a risk strategy aligned with ISO 22301 and ISO 42001, with Trust by Design at the centre.'
      },
      {
        title: 'Setting Resilience Targets',
        description:
          'We define RTO and RPO targets suited to your operations so AI services recover within acceptable windows. Recovery plans protect customer experience and critical business functions during outages.'
      },
      {
        title: 'Continuity Policies and Procedures',
        description:
          'We prepare business continuity and crisis procedures aligned with regulations including the EU AI Act. AI model behaviour during outages is defined in advance, with clear steps for safe degradation and recovery.'
      },
      {
        title: 'Training and Awareness',
        description:
          'People remain the critical link in resilience. We train teams on AI governance, data security, incident response, and human oversight so autonomous errors do not go unchecked.'
      },
      {
        title: 'Resilience Architecture and Controls',
        description:
          'We design redundant architecture that activates during outages or attacks. ISO 27001 and ISO 42001 controls are integrated to block threats such as data poisoning or model drift at source.'
      },
      {
        title: 'Performance Measurement and Testing',
        description:
          'Business continuity is tested, not just documented. AI penetration tests and disaster recovery exercises validate performance, surface vulnerabilities, and improve resilience capacity.'
      },
      {
        title: 'Verification and Audit Readiness',
        description:
          'We verify and document AI processes for independent certification audits. Internal audits close compliance gaps before external assessment and reduce legal and financial exposure.'
      },
      {
        title: 'Continuous Improvement',
        description: 'We run PDCA cycles on continuity systems so your AI governance stays current as threats and regulations evolve.'
      }
    ],
    relatedSlugs: ['information-security', 'human-oversight']
  },
  {
    slug: 'human-oversight',
    title: 'Human Oversight in AI',
    subtitle: 'AI Power Under Human Oversight',
    standard: 'Human Oversight',
    shortDescription: 'We build accountable risk management infrastructure that centres human oversight through a Trust by Design approach.',
    intro: [
      'Human oversight ensures AI systems are used responsibly, ethically, and transparently. ISO/IEC 42001 and the EU AI Act treat it as a core requirement for accountability and transparency.'
    ],
    outcomes: [
      'Oversight plan based on AI System Impact Assessment',
      'Human reviewer structure with override authority',
      'Staff training and competency program',
      'Performance monitoring and feedback mechanism',
      'Full automation suitability assessment'
    ],
    sections: {
      layout: 'topics',
      label: 'Depth',
      title: 'Human Oversight Topic Areas'
    },
    steps: [
      {
        title: 'Determining Oversight Needs Through Impact Assessment',
        description:
          'Oversight objectives and lifecycle touchpoints are planned in advance. The required level follows AI System Impact Assessment results. When systems may affect real people, oversight processes and tools must be defined explicitly.'
      },
      {
        title: 'Assigning Human Reviewers Who Can Intervene in Decisions',
        description: 'Human overseers must do more than watch outputs. They need authority to override AI decisions when required.'
      },
      {
        title: 'Staff Training and Competency',
        description:
          'Oversight staff must understand system instructions, documentation, oversight goals, and their specific responsibilities. Training and competency checks are part of the design.'
      },
      {
        title: 'Performance Monitoring and Feedback Mechanisms',
        description:
          'Oversight includes monitoring system performance and output accuracy. Overseers need a clear channel to raise concerns about stakeholder impact or performance drift.'
      },
      {
        title: 'Questioning Full Automation and Suitability Control',
        description:
          'Not every process should be fully automated. We assess whether full automation fits the use case and responsible AI principles, and retain manual controls where accountability or transparency requires them.'
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];

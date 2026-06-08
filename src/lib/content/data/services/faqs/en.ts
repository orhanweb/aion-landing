// src/lib/content/data/services/faqs/en.ts
import type { ServiceFaq, ServiceSlug } from '@/lib/content/services/types';

export const serviceFaqsEn = {
  'ai-governance': [
    {
      id: 'iso-42001-overview',
      question: 'What is ISO/IEC 42001 and why should my organization adopt it?',
      answer:
        'ISO/IEC 42001 is the international standard for AI management systems. It gives you a structured way to govern how AI is developed, deployed, monitored, and improved. Adoption reduces regulatory and operational risk, builds stakeholder trust, and creates an auditable foundation for responsible AI.'
    },
    {
      id: 'certification-timeline',
      question: 'How long does ISO 42001 certification typically take?',
      answer:
        'Timelines depend on organisational maturity, system complexity, and existing management system integrations. Most organisations complete gap analysis, system design, implementation, and internal audit within 6–12 months. AION uses a phased roadmap that prioritises high-risk AI systems and audit-critical controls first.'
    },
    {
      id: 'iso-42001-eu-ai-act-relation',
      question: 'How does ISO 42001 relate to the EU AI Act?',
      answer:
        'ISO 42001 defines how to run an AI management system. The EU AI Act sets legal obligations for specific AI use cases. Implementing ISO 42001 helps you meet Act requirements for risk management, documentation, human oversight, and monitoring through a certification-ready structure.'
    },
    {
      id: 'certification-audit-support',
      question: 'Does AION support us through the certification audit?',
      answer:
        'Yes. We prepare your organisation from gap analysis and policy design through internal audits and corrective actions. We guide you through accredited certification body audits (BSI, TÜV, and others) and help close findings before and during external assessment.'
    }
  ],
  'regulatory-compliance': [
    {
      id: 'high-risk-classification',
      question: 'Which AI systems are classified as high-risk under the EU AI Act?',
      answer:
        'High-risk AI systems include applications in employment decisions, credit scoring, law enforcement, critical infrastructure, education assessment, and certain biometric identification. Classification depends on intended purpose, deployment context, and whether the system affects fundamental rights. AION runs structured impact assessments to determine the correct category for each system.'
    },
    {
      id: 'non-compliance-penalties',
      question: 'What penalties apply for EU AI Act non-compliance?',
      answer:
        'Administrative fines vary by violation type. Prohibited AI practices can reach up to €35 million or 7% of global annual turnover. Supply-chain and provider obligations carry penalties up to €15 million or 3% of turnover. Correct risk classification, documentation, and human oversight controls reduce these exposures.'
    },
    {
      id: 'third-party-ai-compliance',
      question: 'Do we need EU AI Act compliance if we only use third-party AI tools?',
      answer:
        'In most cases, yes. Deployers remain responsible for how AI systems are used, even when models or platforms come from third parties. You must verify provider documentation, run conformity assessments where required, and ensure transparency, data governance, and human oversight fit your use case.'
    },
    {
      id: 'ai-act-classification-process',
      question: 'How does AION classify our AI systems under the EU AI Act?',
      answer:
        'We audit each AI system against Annex III criteria and applicable exceptions, document intended purpose and deployment context, and map obligations to concrete controls. The output is a risk classification register, responsibility matrix, and compliance roadmap aligned with ISO 42001 and EU AI Act requirements.'
    }
  ],
  'information-security': [
    {
      id: 'iso-27001-ai-risks',
      question: 'How does ISO 27001 address AI-specific security risks?',
      answer:
        'ISO 27001 secures information assets through access control, encryption, incident management, and supplier security. AI adds threats such as model evasion, prompt injection, training data poisoning, and inference-time data leaks. AION integrates ISO 27001 controls with ISO 42001 AI governance to cover both traditional and AI-native attack surfaces.'
    },
    {
      id: 'data-poisoning-protection',
      question: 'What is AI data poisoning and how do you protect against it?',
      answer:
        'Data poisoning happens when adversaries inject malicious samples into training or fine-tuning datasets, causing models to behave incorrectly or leak information. Protection requires data provenance tracking, integrity validation, access controls on training pipelines, anomaly detection, and regular model performance monitoring.'
    },
    {
      id: 'iso-27001-42001-integration',
      question: 'Can ISO 27001 and ISO 42001 be implemented together?',
      answer:
        'Yes, and they should be. Both standards share risk assessment, control selection, monitoring, and continuous improvement structures. A unified implementation avoids duplicate documentation, reduces audit overhead, and keeps information security and AI governance aligned.'
    },
    {
      id: 'ai-penetration-testing',
      question: 'What does AI penetration testing cover?',
      answer:
        'AI penetration testing evaluates model inputs, API endpoints, training pipelines, and deployment environments against OWASP LLM Top 10 and organisation-specific threat models. Tests include prompt injection, jailbreak attempts, data exfiltration via model outputs, adversarial input crafting, and supply-chain vulnerability assessment.'
    }
  ],
  'operational-resilience': [
    {
      id: 'ai-business-continuity',
      question: 'Why is business continuity critical for AI systems?',
      answer:
        'AI systems often support customer-facing decisions, fraud detection, logistics, and compliance workflows. An outage or model failure can halt operations, damage trust, and trigger regulatory reporting obligations. Business continuity planning ensures AI infrastructure recovers within defined timeframes and keeps operating safely during disruptions.'
    },
    {
      id: 'rto-rpo-ai-operations',
      question: 'What are RTO and RPO in the context of AI operations?',
      answer:
        'Recovery Time Objective (RTO) is the maximum acceptable downtime for an AI service. Recovery Point Objective (RPO) is the maximum acceptable data loss window. For AI systems, RTO/RPO must account for model retraining time, inference failover, and data pipeline recovery, not just infrastructure uptime.'
    },
    {
      id: 'iso-22301-ml-infrastructure',
      question: 'How does ISO 22301 apply to machine learning infrastructure?',
      answer:
        'ISO 22301 requires identifying critical processes, setting continuity objectives, and implementing recovery procedures. For ML infrastructure this includes redundant inference endpoints, backup model versions, disaster recovery for training data, documented failover runbooks, and regular recovery testing aligned with business impact analysis.'
    },
    {
      id: 'disaster-recovery-models',
      question: 'What happens to AI models during a disaster recovery scenario?',
      answer:
        'AION designs recovery procedures that specify which model versions to activate, how to validate outputs post-failover, and when human oversight must intervene. Pre-approved fallback models, cached predictions, and manual override workflows keep AI decisions safe and auditable during partial recovery.'
    }
  ],
  'human-oversight': [
    {
      id: 'eu-ai-act-oversight',
      question: 'What is human oversight under the EU AI Act?',
      answer:
        'Human oversight means qualified personnel monitor, interpret, and can override AI system outputs, especially for high-risk applications. The EU AI Act requires effective oversight before deployment, including the ability to stop or reverse automated decisions that could harm individuals or violate rights.'
    },
    {
      id: 'mandatory-oversight-cases',
      question: 'When is human oversight mandatory for AI systems?',
      answer:
        'Human oversight is mandatory for high-risk AI systems under the EU AI Act and strongly recommended under ISO 42001 for any system affecting people, safety, or legal outcomes. The required level depends on impact assessment results, automation scope, and whether decisions produce legal or similarly significant effects.'
    },
    {
      id: 'full-automation-compliance',
      question: 'Can fully automated AI decision-making be compliant?',
      answer:
        'Full automation may be acceptable for low-risk use cases, but high-risk systems require meaningful human review with override authority. AION evaluates each process against responsible AI principles and regulatory requirements, keeping manual controls where automation alone cannot meet accountability and transparency standards.'
    },
    {
      id: 'human-in-the-loop-design',
      question: 'How does AION design human-in-the-loop controls?',
      answer:
        'We start with AI System Impact Assessment to define oversight scope, assign reviewers with override authority, establish escalation paths, and integrate monitoring dashboards. Training ensures overseers understand system limits, documentation requirements, and their legal responsibilities under applicable regulations.'
    }
  ]
} satisfies Record<ServiceSlug, ServiceFaq[]>;

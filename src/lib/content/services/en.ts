// src/lib/content/services/en.ts
import type { Service } from '@/lib/content/services/types';

export const servicesEn: Service[] = [
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    subtitle: 'ISO 42001: From Risk to Value',
    standard: 'ISO 42001',
    shortDescription:
      'We build ISO/IEC 42001-based AI management systems. We bring AI system risks, decision processes, and lifecycle under institutional control.',
    intro: [
      'The first step in your AI governance journey is a clear picture of where you stand today. We assess AI systems in use or under development against operational, technical, and regulatory risks — before formal certification.',
      'We compare your current practices with ISO/IEC 42001 requirements through gap analysis, identify weak points, and deliver a detailed report. This surfaces obstacles early and prevents wasted time and cost on the certification path.'
    ],
    outcomes: [
      'ISO/IEC 42001-aligned AI management system',
      'Gap analysis report and strategic roadmap',
      'Risk architecture and statement of applicability',
      'Audit readiness and certification guidance',
      'Continuous improvement (CAPA) framework'
    ],
    steps: [
      {
        title: 'Goal Setting',
        description:
          'We define measurable, trackable AI objectives aligned with your strategic vision — a starting point for regulation-ready, sustainable outcomes.'
      },
      {
        title: 'Policies and Procedures',
        description:
          'We establish ISO/IEC 42001 AI policy and documentation covering ethical use, data security, transparency, and fair decision-making.'
      },
      {
        title: 'Training and Awareness',
        description:
          'We raise awareness among staff and leadership on AI policies, ethical responsibilities, and roles — building a Trust by Design culture.'
      },
      {
        title: 'Risk Architecture and Controls',
        description:
          'We identify risks such as algorithmic bias, data poisoning, and lack of transparency; we prepare AI System Impact Assessments and Statements of Applicability.'
      },
      {
        title: 'Performance Measurement',
        description:
          'We continuously monitor AI systems against accuracy, transparency, and security metrics and provide transparent reporting to leadership.'
      },
      {
        title: 'Certification Audit',
        description:
          'Before external audits (BSI, TÜV, etc.) we run internal audits, close findings, and guide you through the ISO 42001 certification process.'
      },
      {
        title: 'Continuous Improvement',
        description:
          'Through root cause analysis and corrective actions (CAPA) we continuously improve the suitability and resilience of your AI management system.'
      }
    ],
    relatedSlugs: ['regulatory-compliance', 'human-oversight']
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    subtitle: 'EU AI Act–Ready AI',
    standard: 'EU AI Act',
    shortDescription:
      'We assess your AI systems under the EU AI Act and international regulations, structuring risk classification and compliance processes.',
    intro: [
      'AI systems introduce new ethical, security, transparency, and regulatory risks. We align your AI solutions with the EU AI Act and international standards.',
      'We structure risk classification, control mechanisms, and governance end to end — minimizing heavy administrative fines and legal exposure.'
    ],
    outcomes: [
      'Correct EU AI Act risk classification',
      'Transparency and explainability framework',
      'Data governance and human oversight alignment',
      'Provider/deployer responsibility map',
      'Audit-ready compliance documentation'
    ],
    steps: [
      {
        title: 'Risk Classification and Impact Assessment',
        description: 'We determine your systems’ risk category under the EU AI Act and structure mandatory impact assessments for high-risk systems.'
      },
      {
        title: 'Transparency and Explainability',
        description:
          'We design explainable AI architecture that meets mandatory transparency requirements for chatbots, deepfakes, and automated decisions.'
      },
      {
        title: 'Data Governance and Human Oversight',
        description: 'We manage bias risks in training data and integrate effective human oversight against automated decisions.'
      },
      {
        title: 'Value Chain Responsibilities',
        description: 'We clarify provider, deployer, and importer roles and align supplier contracts with regulatory requirements.'
      },
      {
        title: 'Control Mechanisms and Documentation',
        description: 'We define and document technical and administrative controls aligned with ISO 42001 and EU AI Act requirements.'
      },
      {
        title: 'Internal Audit and Compliance Testing',
        description: 'We run internal audits to detect compliance gaps and prepare you for external scrutiny.'
      },
      {
        title: 'Ongoing Regulatory Monitoring',
        description: 'We track updates to the EU AI Act and international rules so your compliance framework stays current.'
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
      'We protect sensitive data processed during AI model training and operation against leaks and data poisoning attacks — end to end.',
      'By integrating ISO/IEC 27001 and ISO/IEC 42001 we safeguard confidentiality and integrity of corporate data in line with international regulation.'
    ],
    outcomes: [
      'ISO 27001 + 42001 integrated security architecture',
      'AI penetration testing and threat analysis',
      'Secure model operations (Trust by Design)',
      'Incident response and monitoring mechanisms',
      'Continuous security improvement cycle'
    ],
    steps: [
      {
        title: 'Secure Model Operations',
        description: 'We protect your models across their lifecycle against prompt injection, model evasion, and manipulation attacks.'
      },
      {
        title: 'Risk Architecture and Threat Analysis',
        description:
          'Through AI penetration tests and system impact assessments we find vulnerabilities and build risk architecture under OWASP and ISO 42001.'
      },
      {
        title: 'Monitoring and Incident Management',
        description: 'We set up continuous monitoring for model drift, anomalies, and cyber deviations and activate incident response plans.'
      },
      {
        title: 'Access Control and Data Lifecycle',
        description: 'From collection to disposal we apply access control, encryption, and data classification policies for sensitive data.'
      },
      {
        title: 'ISMS Integration',
        description: 'We integrate ISO 27001 information security management with your AI operations for a unified corporate security framework.'
      },
      {
        title: 'Security Performance Measurement',
        description: 'We regularly measure infrastructure effectiveness through security metrics, internal audits, and compliance tests.'
      },
      {
        title: 'Continuous Security Improvement',
        description: 'Through PDCA we keep security infrastructure current and resilient against the EU AI Act and emerging threats.'
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
      'We secure continuity of critical AI and data systems and make interruption risks visible. Under ISO 22301 we strengthen systems with high availability, business continuity, and recovery capability.',
      'With a tailored operational resilience approach we turn AI operations into a sustainable, resilient, and controllable structure.'
    ],
    outcomes: [
      'Critical AI process inventory and risk analysis',
      'RTO/RPO targets and resilience metrics',
      'ISO 22301-aligned continuity policies',
      'Disaster recovery and redundant architecture',
      'Audit-ready business continuity system'
    ],
    steps: [
      {
        title: 'Critical System and Process Analysis',
        description:
          'We analyze AI integrations, ML models, and data sources to identify the most critical processes and build a proactive risk strategy.'
      },
      {
        title: 'Resilience Target Setting',
        description: 'We set RTO/RPO metrics against corporate goals and optimize recovery speed in crisis scenarios.'
      },
      {
        title: 'Continuity Policies and Procedures',
        description: 'We prepare EU AI Act–aligned business continuity policies and crisis management procedures.'
      },
      {
        title: 'Training and Awareness',
        description: 'We deliver awareness training focused on AI governance and data security and prepare teams for crisis response.'
      },
      {
        title: 'Resilience Architecture and Controls',
        description: 'We deploy redundant architecture for outages or cyber attacks and integrate ISO 27001 and 42001 controls.'
      },
      {
        title: 'Performance Measurement and Testing',
        description: 'We regularly stress-test business continuity through AI penetration tests and disaster recovery scenarios.'
      },
      {
        title: 'Verification and Continuous Improvement',
        description: 'Internal audits and gap analysis prepare you for certification; PDCA keeps systems up to date.'
      }
    ],
    relatedSlugs: ['information-security', 'human-oversight']
  },
  {
    slug: 'human-oversight',
    title: 'Human Oversight in AI',
    subtitle: 'AI Power Under Human Oversight',
    standard: 'Human Oversight',
    shortDescription: 'We build accountable risk management infrastructure that centers human oversight through a Trust by Design approach.',
    intro: [
      'Human oversight ensures responsible, ethical, and transparent use of AI systems. ISO/IEC 42001 and the EU AI Act position human oversight as a core requirement for accountability.',
      'We integrate the human-in-the-loop architecture regulations demand — building reliable AI operations free from unchecked autonomous errors.'
    ],
    outcomes: [
      'Oversight plan based on AI System Impact Assessment',
      'Human reviewer structure with override authority',
      'Staff training and competency program',
      'Performance monitoring and feedback mechanism',
      'Full automation suitability assessment'
    ],
    steps: [
      {
        title: 'Determining Oversight Needs',
        description: 'Based on AI System Impact Assessment results we plan where human oversight is required across the lifecycle.'
      },
      {
        title: 'Assigning Human Reviewers',
        description: 'We establish roles and responsibilities giving overseers authority to override AI decisions.'
      },
      {
        title: 'Staff Training and Competency',
        description: 'We train oversight personnel on system instructions, documentation, and specific duties.'
      },
      {
        title: 'Performance Monitoring and Feedback',
        description: 'We set up transparent reporting on output accuracy and performance deviations.'
      },
      {
        title: 'Full Automation Assessment',
        description: 'We evaluate whether each process may be fully automated and retain manual control steps where needed.'
      },
      {
        title: 'Lifecycle Integration',
        description: 'We embed human oversight from model development through live operations across the full AI lifecycle.'
      },
      {
        title: 'Ongoing Oversight Effectiveness',
        description: 'We regularly measure oversight mechanism effectiveness and keep them current through improvement cycles.'
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];

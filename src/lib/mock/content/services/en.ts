// src/lib/mock/content/services/en.ts
import type { Service } from '@/lib/content/services/types';

export const mockServicesEn: Service[] = [
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    subtitle: 'ISO 42001: From Risk to Value',
    standard: 'ISO 42001',
    shortDescription:
      'We build ISO/IEC 42001-based AI management systems. We bring AI system risks, decision processes, and lifecycle under institutional control.',
    intro: [
      "The first and most critical step in your AI governance journey is taking a clear snapshot of your organisation's current state. Before formal certification and system setup, we assess AI systems already in use or under development at your organisation against operational, technical, and regulatory risks.",
      'We compare your current practices with ISO/IEC 42001 requirements through gap analysis, identify weak points open to improvement, and deliver a detailed report. This current-state assessment surfaces obstacles and risks at the very start — preventing wasted time and cost and producing a strategic, goal-oriented roadmap tailored to your organisation.'
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
          'We clarify your route on the AI journey. At AION we define measurable, trackable AI objectives aligned with your strategic vision and integrated with your corporate AI policies. We design your starting point not merely to use technology, but to deliver concrete value, stay regulation-ready, and achieve sustainable outcomes.'
      },
      {
        title: 'Policies and Procedures',
        description:
          'We write your corporate constitution for developing and using AI systems. We establish a robust ISO/IEC 42001 AI policy and documentation infrastructure that embeds ethical use, data security, transparency, and fair decision-making — and speaks to your other policies (quality, information security, privacy).'
      },
      {
        title: 'Training and Awareness',
        description:
          'AI transformation starts with people, not technology. We raise awareness among staff and leadership on AI policies, ethical responsibilities, potential risks, and their own roles. We identify competency gaps, plan required training, and build a Trust by Design culture across the organisation.'
      },
      {
        title: 'Risk Architecture and Controls',
        description:
          'We systematically identify unique AI risks such as algorithmic bias, data poisoning, and lack of transparency, and perform AI System Impact Assessments. Under ISO/IEC 42001 Annex A we prepare an organisation-specific Statement of Applicability and implement technical, legal, and administrative controls to minimise unacceptable risk.'
      },
      {
        title: 'Performance Measurement',
        description:
          'We ensure the system we build and your AI models do not remain on paper but work in the field. We define what, when, and how to measure — accuracy, transparency, security — and continuously monitor whether AI systems stay true to defined goals and ethical rules, providing transparent reporting to leadership.'
      },
      {
        title: 'Certification Audit',
        description:
          'We prepare your organisation end to end for internationally accredited certification audits. Before official external audits (BSI, TÜV, etc.) our expert team runs planned internal audits, identifies findings and weak points, and closes gaps quickly. We guide you through external audit and certification to successfully obtain ISO 42001.'
      },
      {
        title: 'Continuous Improvement',
        description:
          'AI systems are not static software — they learn and change with new data continuously. To keep this dynamic structure under control we perform root cause analysis on nonconformities and plan corrective actions (CAPA). We continuously improve the suitability, effectiveness, and resilience of your AI management system so you can scale innovation safely.'
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
      'AI systems introduce new ethical, security, transparency, and regulatory risks. ISO 42001 helps control these risks and gives organisations trustworthy, sustainable, auditable AI management. We make your AI solutions compliant and responsible under the EU AI Act and international standards — structuring risk classification, control mechanisms, and governance end to end.'
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
          'Many organisations fail to correctly determine the risk category of their AI systems under the EU AI Act and skip mandatory impact assessments for high-risk systems. This gap can expose companies to heavy administrative fines of up to €35 million or 7% of global turnover. At AION we audit and correctly classify your systems to international standards, eliminating these serious financial and legal risks. Our strategic risk assessment approach lets you prove corporate authority and trustworthiness in regulatory scrutiny beyond doubt.'
      },
      {
        title: 'Insufficient Transparency and Explainability',
        description:
          'The EU AI Act requires users to clearly know when they interact with AI — for example chatbots or deepfake content — as a mandatory transparency principle. When model decisions remain a black box, it not only erodes customer trust but counts as a direct violation with regulators. Failing to make decision processes explainable directly affects brand reputation and market share. With AION we transparentise your AI architecture so search engines and AI assistants reference you as a trustworthy authority.'
      },
      {
        title: 'Data Governance and Human Oversight Violations',
        description:
          'One of the strictest rules is that training data must be free of bias and there must be effective human oversight against automated decisions. Processes open to data poisoning, carrying discrimination, and lacking human review are major operational and legal compliance violations. Gaps here leave your organisation exposed not only to legal penalties but also to cybersecurity vulnerabilities. AION expertise secures data quality and flawlessly integrates the human oversight architecture regulations demand.'
      },
      {
        title: 'Neglect of Provider and Deployer Responsibilities',
        highlight: 'Indirect fines up to €15M',
        description:
          'Failure to clarify roles in the AI value chain leads to contractual and legal responsibility violations in third-party services. Especially when risk analyses of externally sourced AI services are not performed, this critical compliance gap makes your company an indirect target of fines up to €15 million. Uncontrolled supply chains can cost you trusted partner status and block entry to global markets. With AION we audit supplier relationships end to end and align responsibility distribution with international law and ISO 42001 requirements.'
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
      'How is data security ensured in AI systems? We protect sensitive data processed during AI model training and operation end to end against data leaks and AI-specific data poisoning attacks.',
      'By integrating ISO/IEC 27001 (Information Security) and ISO/IEC 42001 (AI Management) requirements we safeguard confidentiality and integrity of corporate data in full compliance with international regulation.'
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
          'Secure AI model operations mean your algorithms are continuously protected in production against next-generation cyber attacks such as prompt injection, model evasion, and manipulation. With AION expertise we ensure models produce fair, transparent results throughout their lifecycle, closed to external interference — building trustworthy AI infrastructure through Trust by Design.'
      },
      {
        title: 'Risk Architecture and Threat Analysis',
        description:
          'Through organisation-specific AI penetration tests and AI system impact assessments we detect black-box security gaps in your infrastructure before cyber attackers do. Under OWASP guidelines and the ISO/IEC 42001 framework we build a risk architecture tailored to your organisation and develop proactive defence and control mechanisms to prevent operational, legal, and reputational loss.'
      },
      {
        title: 'Monitoring and Incident Management',
        description:
          'Instant detection of anomalies, performance drift, and cybersecurity deviations in AI models is vital for operational resilience and business continuity. At AION we establish monitoring mechanisms that continuously audit your AI infrastructure and activate fast, effective incident response plans in cyber events — professionally managing legal notification processes and system recovery.'
      },
      {
        title: 'Continuous Security Improvement',
        description:
          'While AI technologies self-learn and change and the cyber threat landscape constantly evolves, security infrastructure cannot remain static. Through regular internal audits, root cause analysis, and performance measurement (PDCA cycle) we keep your system current — ensuring you stay prepared and resilient against rapidly changing global regulations such as the EU AI Act and future autonomous threats.'
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
      'We secure continuity of critical AI and data systems, make interruption risks visible, and transform your AI operations into a sustainable, resilient, and controllable structure with a tailored operational resilience approach. With a bespoke approach for each organisation — considering sector and institutional requirements — we strengthen your systems under the ISO 22301 framework with high availability, business continuity, and recovery capability.'
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
          'To ensure business continuity we subject all AI integrations, machine learning models, and data sources in your organisation to detailed risk analysis. We identify your most critical processes against possible cyber threats or operational outages and build a proactive AI risk management strategy. Thus we design an uninterrupted business model fully aligned with ISO 22301 and ISO 42001, centring Trust by Design.'
      },
      {
        title: 'Setting Resilience Targets',
        description:
          'For AI operations to run with minimum disruption in unexpected crises we define operational resilience metrics (RTO/RPO) best suited to your corporate goals. We optimise recovery speed in crisis moments to protect critical values such as search visibility and uninterrupted customer experience. This lets you build sustainable, reliable AI infrastructure without losing market share and competitive advantage.'
      },
      {
        title: 'Continuity Policies and Procedures',
        description:
          'We prepare business continuity policies and crisis management procedures tailored to your organisation, fully compliant with global regulations including the EU AI Act. By pre-designing how AI models behave in a possible outage we turn black-box risks into transparent, traceable, manageable steps. These constitutions guarantee data security and transparency principles in crisis moments and legally secure your brand reputation.'
      },
      {
        title: 'Training and Awareness',
        description:
          'To strengthen the human factor — the most important link in operational resilience — we deliver awareness training focused on AI governance and data security. We practically prepare your teams for potential cyber attacks, leak risks, and crisis incident response processes. We build a proactive security culture organisation-wide and ensure AI infrastructure runs free from autonomous errors through human oversight.'
      },
      {
        title: 'Resilience Architecture and Controls',
        description:
          'We design redundant, secure resilience architecture that activates instantly in outage or external cyber attack for your AI systems. We integrate technical and administrative control mechanisms required by ISO 27001 information security and ISO 42001 AI standards end to end into your systems. Thus we build uninterrupted service infrastructure that blocks threats such as data poisoning or model drift at source.'
      },
      {
        title: 'Performance Measurement and Testing',
        description:
          'We do not leave business continuity on paper — we regularly stress-test it in production through AI penetration tests and disaster recovery scenarios. With collected data we continuously measure AI model performance, detect security vulnerabilities, and increase operational resilience capacity. These customer-focused measurement and test processes guarantee high-performance, reliable results even in crisis moments.'
      },
      {
        title: 'Verification and Audit Readiness',
        description:
          'We verify and document your AI processes to pass rigorous independent audits by internationally accredited certification bodies. Through comprehensive internal audits (gap analysis) we detect compliance gaps and ensure complete preparation before external audits. This process makes you a trusted authority not only locally but in global markets and minimises all legal and financial penalty risks.'
      },
      {
        title: 'Continuous Improvement',
        description:
          'To keep pace with the continuously evolving AI ecosystem we continuously improve business continuity systems through data-driven PDCA (Plan-Do-Check-Act). We keep your AI governance framework agile and current against new cyber threats and constantly updated global regulations. The sustainable growth model we offer with AION expertise maximises long-term ROI of your digital investments while increasing innovation speed.'
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
      'Human oversight in AI is a critical mechanism designed to ensure responsible, ethical, and transparent use of AI systems. Frameworks such as the ISO/IEC 42001 AI Management System standard and the EU AI Act position human oversight as a fundamental requirement to meet accountability and transparency expectations.'
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
          'Human oversight objectives and the lifecycle stages where oversight is activated must be planned in advance. The level of oversight required should be determined based on AI System Impact Assessment results. Especially when the system may affect real persons, human oversight requirements — including processes and tools — must be defined.'
      },
      {
        title: 'Assigning Human Reviewers Who Can Intervene in Decisions',
        description:
          'Human overseers integrated into the system must not merely observe AI outputs. These individuals must be given authority to override decisions taken by AI.'
      },
      {
        title: 'Staff Training and Competency',
        description:
          'Competency of personnel performing human oversight activities is vital. This personnel must be informed, trained, and fully understand system instructions, documentation, and the specific tasks they will perform to meet human oversight objectives.'
      },
      {
        title: 'Performance Monitoring and Feedback Mechanisms',
        description:
          'Human oversight includes continuous monitoring of system performance, including the accuracy of AI outputs. A transparent mechanism must be established so overseers can report concerns about effects of system outputs on stakeholders or deviations in system performance.'
      },
      {
        title: 'Questioning Full Automation and Suitability Control',
        description:
          "Not every process should be fully delegated to AI. Whether a fully automated decision mechanism is appropriate for the system's purpose and responsible AI use principles must be carefully evaluated, and manual control steps retained where needed. It must also be guaranteed that the system meets human oversight standards required for acceptable use according to usage instructions."
      }
    ],
    relatedSlugs: ['ai-governance', 'regulatory-compliance']
  }
];

import { EngineItem, BuildStage, ProductItem, IncubationStep, StakeholderItem } from '../types';

export const ENGINES_DATA: EngineItem[] = [
  {
    id: 'engine-01',
    number: 'ENGINE 01',
    category: 'TALENT',
    title: 'Ibadan Digital Academy',
    description: 'Future-ready digital skills, AI, technology education and workforce development designed for global and regional competitiveness.',
    pipeline: 'Workforce Pipeline',
    borderColor: 'border-secondary-container',
    details: [
      'Applied Artificial Intelligence & Machine Learning',
      'Full-Stack Software Engineering cohorts',
      'Enterprise cloud infrastructure & DevSecOps',
      'Workforce placement with pan-African employers'
    ]
  },
  {
    id: 'engine-02',
    number: 'ENGINE 02',
    category: 'CONTENT',
    title: 'DigitalBridge Publishing Studio',
    description: 'Future-ready textbooks, digital literacy resources, vocational learning and EdTech-enabled educational content for institutions.',
    pipeline: 'Publishing & Curriculum',
    borderColor: 'border-secondary',
    details: [
      'Accredited STEM & computing curricula',
      'Interactive digital courseware for schools',
      'Vocational training handbooks & guides',
      'Institutional e-library & learning distribution'
    ]
  },
  {
    id: 'engine-03',
    number: 'ENGINE 03',
    category: 'PLATFORMS',
    title: 'AFRINOVERSE Products',
    description: 'Practical software and digital solutions designed to solve real operational bottlenecks across African industries and enterprises.',
    pipeline: 'Enterprise Software',
    borderColor: 'border-on-tertiary-container',
    details: [
      'FairwayPro: Sports & club administration',
      'StitchPro: Fashion & apparel production',
      'Digital ToolPro: Business productivity suite',
      'Resilient offline-first mobile and web architectures'
    ]
  },
  {
    id: 'engine-04',
    number: 'ENGINE 04',
    category: 'RESEARCH',
    title: 'AFRINOVERSE Innovation Lab',
    description: 'Building products, ventures and emerging-technology initiatives that address real African challenges through experimentation.',
    pipeline: 'R&D & Prototypes',
    borderColor: 'border-secondary-container',
    details: [
      'Edge AI and hardware prototyping',
      'Agricultural & logistics sensor networks',
      'Rapid validation sprints for founders',
      'Cross-disciplinary technology cohorts'
    ]
  },
  {
    id: 'engine-05',
    number: 'ENGINE 05',
    category: 'TRANSFORMATION',
    title: 'Business & Digital Transformation',
    description: 'Helping SMEs and institutions modernise operations, streamline bookkeeping, improve efficiency and embrace digital tools.',
    pipeline: 'Institutional Delivery',
    borderColor: 'border-secondary',
    details: [
      'End-to-end legacy workflow modernization',
      'Cloud accounting and inventory deployment',
      'Staff digital capability training',
      'Executive performance dashboards'
    ]
  },
  {
    id: 'engine-06',
    number: 'ENGINE 06',
    category: 'INCUBATION',
    title: 'Startup Growth & Incubation',
    description: 'Supporting early-stage founders and emerging ventures from raw concepts through structured mentorship, governance, and market access.',
    pipeline: 'Venture Velocity',
    borderColor: 'border-on-tertiary-container',
    details: [
      'Structured founder residency programs',
      'Institutional governance & legal readiness',
      'Pan-African market expansion advisory',
      'Seed capital connection & syndication'
    ]
  }
];

export const BUILD_STAGES: BuildStage[] = [
  {
    step: 1,
    label: 'LEARN',
    summary: 'Applied digital skills, AI literacy & technical fundamentals.',
    deliverables: ['Accredited cohorts', 'Hands-on project work', 'Industry mentorship']
  },
  {
    step: 2,
    label: 'CREATE',
    summary: 'Publishing rich curricula, creative assets & code repositories.',
    deliverables: ['Custom courseware', 'Open-source libraries', 'Digital publications']
  },
  {
    step: 3,
    label: 'INNOVATE',
    summary: 'R&D lab testing practical emerging technologies.',
    deliverables: ['Hardware/AI prototypes', 'Bandwidth-adapted tools', 'Pilot field tests']
  },
  {
    step: 4,
    label: 'BUILD',
    summary: 'Production-grade enterprise platforms & specialized software.',
    deliverables: ['Multi-tenant SaaS', 'Enterprise integrations', 'High-uptime infra']
  },
  {
    step: 5,
    label: 'GROW',
    summary: 'Accelerating revenue, venture scaling, and institutional adoption.',
    deliverables: ['Commercialization', 'Channel distribution', 'Cross-border rollouts']
  },
  {
    step: 6,
    label: 'IMPACT',
    summary: 'Sustained economic mobility and systemic African growth.',
    deliverables: ['Employment creation', 'Institutional resilience', 'Global tech export']
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'fairwaypro',
    name: 'FairwayPro',
    badge: 'SPORTS MANAGEMENT',
    version: 'V 2.4 • ACTIVE DEPLOYMENT',
    category: 'Facility & Club Operations',
    metrics: 'Active across premier clubs in West & East Africa',
    status: 'Production Enterprise',
    description:
      'Comprehensive golf club and recreational facility management platform. Streamlines membership directories, real-time tee-time booking grids, tournament brackets, pro-shop billing, and executive board reporting.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj-euWQlLT55yavaUWYxI3x8zD7CvOPkoViGwq4_fraNSvwe0Go6sxTGxIwswOPXGcpTreoM-9DqtXpVu1A-BXd84WP9pVyCDJuyYXXYobKrJd73TqcqrjSoxh44vu1KGFoc0Z8XcefzLp-5667mwBxAflD9pWlrLRtBSKYVh8bbEw750Y9ngo_u1jQl-xFjPwf1XRIPWCBqt5pFUFvpAaLxfWynuBLGCdiX4WVe8PXQvvna21ZuPTaA',
    imageAlt: 'FairwayPro desktop application showing golf tee-time booking grid and member metrics',
    features: [
      {
        title: 'Dynamic Grid',
        description: 'Automated handicap tracking and real-time tee-sheet allocation.'
      },
      {
        title: 'Unified Billing',
        description: 'Multi-currency member ledgers, pro-shop sales, and fee collection.'
      }
    ],
    highlights: [
      'Interactive visual tee sheet with real-time flight bookings',
      'USGA / WHS compliant automated handicap calculation engine',
      'Pro-shop integrated point of sale & inventory management',
      'Automated tournament flight generation and live leaderboard',
      'Executive governance financial audit reports'
    ]
  },
  {
    id: 'stitchpro',
    name: 'StitchPro',
    badge: 'CREATIVE ECONOMY',
    version: 'ENTERPRISE CLOUD',
    category: 'Textile & Apparel Manufacturing',
    metrics: 'Managing multi-line bespoke & production operations',
    status: 'Production Enterprise',
    description:
      'A purpose-built operational platform empowering fashion entrepreneurs, vocational apparel hubs, and textile producers. Integrates cutting-table schedules, fabric stock audits, pattern digitization tracking, and bespoke order queues.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gdoEtp1P9LcDPBcjC0Mq-0JVfVuPHL-SeWiLykMTTvHskr5BI_CfeW7grCskqWC34KN6WoHxHwv-1otmZfUbph_sbU5z__M_BD4wLR26FsRngUWKEOK1X3W8vqo0xUSWERYThNV6Rsyn-1X10YvKd3PC52-uZdZ2tHYaEWG6oytiCfPlqQ_n6FMsoLZUn-z6jCSgb3BVNPoIqi7iaqG4X0MePO5i-LhmI2BP9sb1k-UiAuhmi6Uv9w',
    imageAlt: 'StitchPro desktop application dashboard showing fabric inventory and vocational order workflows',
    features: [
      {
        title: 'Material Ledger',
        description: 'Real-time fabric wastage control and precise inventory yields.'
      },
      {
        title: 'Workflow Kanban',
        description: 'Pattern to stitch tracking through staged quality checkpoints.'
      }
    ],
    highlights: [
      'Accurate yardage estimation engine minimizing fabric offcuts',
      'Digital client measurement repository with sizing versioning',
      'Batch production scheduling for vocational workshops & factories',
      'Real-time job ticketing with tailor incentive tracking',
      'Client delivery SMS/WhatsApp notification automation'
    ]
  }
];

export const TOOLPRO_MODULES = [
  {
    id: 'ops-automation',
    icon: 'tune',
    title: 'Operations Automation',
    summary: 'Replaces manual paper manifests and redundant spreadsheets with rule-based digital workflows and verifiable audit trails.',
    capabilities: [
      'Multi-tier approval workflows with electronic sign-offs',
      'Automated voucher and invoice routing',
      'Offline-capable fieldwork data synchronization',
      'Customizable business rules and escalation triggers'
    ]
  },
  {
    id: 'workflow-intel',
    icon: 'insights',
    title: 'Workflow Intelligence',
    summary: 'Real-time resource allocation telemetry, task throughput monitoring, and instant automated cross-department handoffs.',
    capabilities: [
      'Visual process throughput analytics and bottlenecks identification',
      'Team capacity balancing and workload distribution',
      'Automated task delegation based on shift schedules',
      'SLA monitoring with proactive delay warnings'
    ]
  },
  {
    id: 'inst-reporting',
    icon: 'analytics',
    title: 'Institutional Reporting',
    summary: 'Executive-grade balance sheets, donor compliance documentation, and multi-facility performance dashboards exportable with one click.',
    capabilities: [
      'Pre-formatted audit documentation for multilateral partners',
      'Consolidated multi-branch performance views',
      'Real-time cash flow and commitment monitoring',
      'One-click PDF/Excel executive brief exports'
    ]
  }
];

export const INCUBATION_STEPS: IncubationStep[] = [
  {
    stepNumber: '01',
    title: 'IDEA • Problem Validation',
    phase: 'DISCOVERY',
    description: 'Identifying structural inefficiencies across agriculture, trade logistics, local governance, and vocational learning.',
    keyOutputs: ['Ethnographic field interviews', 'Root cause mapping', 'Feasibility assessment']
  },
  {
    stepNumber: '02',
    title: 'PROTOTYPE • Rapid Build',
    phase: 'LAB ACCELERATION',
    description: 'Fast-loop engineering sprints, hardware assembly, UI architecture, and field trials under low-bandwidth constraints.',
    keyOutputs: ['Functional MVP deployment', 'Hardware test benches', 'Latency-tolerant user testing']
  },
  {
    stepNumber: '03',
    title: 'PRODUCT • Production Hardening',
    phase: 'BETA COMMERCIAL',
    description: 'Refining codebases into secure, high-uptime commercial grade software ready for live pilot partners.',
    keyOutputs: ['Security audits & Pen testing', 'Database optimization', 'Pilot customer SLA agreements']
  },
  {
    stepNumber: '04',
    title: 'VENTURE • Corporate Formation',
    phase: 'SPINOUT',
    description: 'Structuring cap tables, intellectual property ownership, founding executive talent, and commercial agreements.',
    keyOutputs: ['Entity incorporation', 'IP assignment treaties', 'Core leadership recruitment']
  },
  {
    stepNumber: '05',
    title: 'GROWTH • Scale Across Africa',
    phase: 'PAN-AFRICAN SCALE',
    description: 'Connecting early ventures with cross-border channel partners, institutional capital, and continental distribution networks.',
    keyOutputs: ['Regional licensing', 'Strategic investor roadshows', 'Continental distribution channels']
  }
];

export const STAKEHOLDERS_DATA: StakeholderItem[] = [
  {
    number: 'STAKEHOLDER 01',
    title: 'Learners & Students',
    description: 'Equipping ambitious youth with in-demand AI, code, design, and digital literacy skills.',
    offerings: ['Scholarships & bootcamps', 'Industry-certified programs', 'Career pathing']
  },
  {
    number: 'STAKEHOLDER 02',
    title: 'Educational Institutions',
    description: 'Modernising curriculum, textbooks, academic portals, and institutional assessments.',
    offerings: ['DigitalBridge curricula', 'Institutional LMS platforms', 'Educator upskilling']
  },
  {
    number: 'STAKEHOLDER 03',
    title: 'Entrepreneurs & Startups',
    description: 'Incubating early ideas through technical architecture, mentorship, and commercial launches.',
    offerings: ['Lab prototyping credits', 'Go-to-market advisory', 'Capital readiness']
  },
  {
    number: 'STAKEHOLDER 04',
    title: 'SMEs & Enterprises',
    description: 'Automating inventory, booking grids, client billing, and operational workflows.',
    offerings: ['SaaS product adoption', 'Custom system integrations', 'Operational audits']
  },
  {
    number: 'STAKEHOLDER 05',
    title: 'Professionals & Creators',
    description: 'Providing digital toolkits, publishing platforms, and monetizable vocational ecosystems.',
    offerings: ['Vocational certifications', 'Creative tooling access', 'Professional networks']
  },
  {
    number: 'STAKEHOLDER 06',
    title: 'Innovation Communities',
    description: 'Hosting hackathons, open research sprints, and localized developer collectives.',
    offerings: ['Hackathon sponsorship', 'Open compute clusters', 'Hub partnerships']
  },
  {
    number: 'STAKEHOLDER 07',
    title: 'Industry Partners',
    description: 'Co-developing sector-specific software and sponsoring vocational training cohorts.',
    offerings: ['Tailored R&D initiatives', 'Talent pipeline sponsorship', 'Pilot testbeds']
  },
  {
    number: 'STAKEHOLDER 08',
    title: 'Governments & Development',
    description: 'Deploying large-scale digital transformation initiatives, policy testbeds, and public skills programmes.',
    offerings: ['National digital literacy', 'Regional economic policy inputs', 'Public tech frameworks']
  }
];

export const WHY_DOMAINS = [
  {
    number: '01',
    title: 'Education',
    role: 'Talent incubator',
    description: 'Building the foundational human capital pipeline for high-tech industries.',
    accent: 'text-secondary-container'
  },
  {
    number: '02',
    title: 'Publishing',
    role: 'Institutional texts',
    description: 'Distributing localized curriculum and learning materials across schools.',
    accent: 'text-secondary'
  },
  {
    number: '03',
    title: 'Technology',
    role: 'Production stacks',
    description: 'Developing proprietary SaaS and resilient digital tools tailored to Africa.',
    accent: 'text-on-tertiary-container'
  },
  {
    number: '04',
    title: 'Enterprise',
    role: 'Digitalization',
    description: 'Modernizing small and medium businesses to boost formal economic productivity.',
    accent: 'text-secondary-container'
  },
  {
    number: '05',
    title: 'Innovation',
    role: 'Applied ventures',
    description: 'Transforming ground-level research and ideas into sustainable commercial spinouts.',
    accent: 'text-secondary'
  },
  {
    number: '06',
    title: 'Partnerships',
    role: 'Global alliances',
    description: 'Connecting regional talent with international capital, institutions, and markets.',
    accent: 'text-on-surface'
  }
];

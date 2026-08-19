import type {
  EducationEntry,
  ExperienceEntry,
  PreviousRole,
  ProjectCase,
  ServiceOffering,
  SkillGroup,
} from "@/lib/types";

export const person = {
  name: "Arockia Arulnathan A",
  role: "Cybersecurity Leader & CISO",
  location: "Bengaluru, India",
  objective:
    "To drive enterprise cybersecurity strategy, governance, and digital transformation by leveraging 13+ years of leadership experience in building resilient security programs, managing cyber risk, and aligning security initiatives with business objectives.",
  yearsExperience: 13,
};

export const contact = {
  email: "arockia.arulnathan@live.in",
  phone: "+91 9789862971",
  linkedin: "https://www.linkedin.com/in/arockia-arulnathan/",
  location: "Bengaluru, India",
};

export const summary = [
  "Results-driven Cybersecurity Leader with 13+ years of experience driving enterprise security strategy, governance, and digital transformation across manufacturing, SaaS, technology consulting, and global enterprise environments.",
  "Proven expertise in developing cybersecurity roadmaps, implementing Zero Trust architectures, leading ISO 27001, TISAX, GDPR, and regulatory compliance initiatives, and securing complex IT/OT infrastructures, cloud platforms, and enterprise applications.",
  "Demonstrated success in building and leading high-performing cybersecurity teams, advising executive leadership and Boards on cyber risk, and delivering enterprise-wide security programs that strengthen resilience, reduce business risk, and align security investments with organizational objectives.",
  "Experienced in architecting secure SaaS platforms, modernizing Security Operations through SIEM, EDR, IAM/PAM, DevSecOps, and cloud security technologies across AWS and GCP.",
  "Brings a unique combination of multinational enterprise, technology consulting, and product leadership experience with a strong track record of delivering measurable business outcomes through strategic governance, risk management, vendor leadership, security automation, and innovation.",
  "Recognized for establishing scalable cybersecurity frameworks, driving successful security transformations, improving operational maturity, and enabling secure business growth through proactive leadership and customer-focused execution.",
];

export const coreCompetencies = [
  "Cybersecurity Strategy & Leadership",
  "Governance, Risk & Compliance (GRC)",
  "Enterprise Security Architecture",
  "Cloud & IT/OT Security",
  "Zero Trust, IAM & PAM",
  "Security Operations",
  "Cyber Risk & Vulnerability Management",
  "Program & Portfolio Management",
  "DevSecOps & Security Automation",
  "Board & Executive Stakeholder Management",
  "ISO 27001, TISAX & Regulatory Compliance",
  "Cross-Functional Leadership & Digital Transformation",
];

export const softSkills = [
  "Collaborator",
  "Leadership",
  "Problem Solving",
  "Team Management",
  "Result Oriented",
];

export const technicalSkills: SkillGroup[] = [
  {
    category: "Cybersecurity",
    items: [
      "Enterprise Security",
      "Zero Trust Architecture",
      "Security Operations",
      "Threat Detection & Response",
      "Incident Management",
      "Vulnerability Management",
      "Risk Assessment",
      "Security Architecture",
      "Network Security",
      "Endpoint Security",
      "Application Security",
      "Security Awareness",
    ],
  },
  {
    category: "Governance & Compliance",
    items: [
      "ISO 27001:2022",
      "TISAX",
      "PCI DSS",
      "GDPR",
      "DPDP",
      "ISMS",
      "Third-Party Risk Management",
      "Internal & External Audits",
      "Security Governance",
      "Policy Development",
      "Business Continuity Planning (BCP)",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Azure",
      "Google Cloud Platform (GCP)",
      "Cloud Security",
      "IT/OT Security",
      "Industrial Cybersecurity",
    ],
  },
  {
    category: "Identity & Security Platforms",
    items: ["IAM", "PAM", "JumpCloud", "Sectona", "SIEM", "EDR", "DLP", "MDR"],
  },
  {
    category: "Development & Automation",
    items: [
      "Python",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "Linux",
      "DevSecOps",
      "CI/CD Security Automation",
    ],
  },
];

export const certifications = [
  "ISO 27001:2022 Lead Auditor (Exemplar Global - 2026)",
  "CISM - Certified Information Security Manager",
  "CEH - Certified Ethical Hacker",
  "OpenEDG Python Institute: Programming with Python Professional Certificate",
];

export const awards = [
  {
    title: "Best Performance Recognition",
    org: "Exide Energy Solutions Limited",
    description:
      "Awarded for outstanding leadership and contributions to enterprise cybersecurity initiatives.",
  },
  {
    title: "Dream Team Award",
    org: "Addverb Technologies Limited",
    description:
      "Recognized for exceptional collaboration, leadership, and organizational impact.",
  },
  {
    title: "Cyber Resilience Recognition",
    org: "Enterprise Security Program",
    description:
      "Acknowledged for implementing enterprise cybersecurity strategies that significantly strengthened organizational cyber resilience and security maturity.",
  },
  {
    title: "SaaS GRC Platform Architecture",
    org: "Product Security Leadership",
    description:
      "Acknowledged for architecting an innovative SaaS Governance, Risk & Compliance platform that streamlined compliance management and accelerated secure digital transformation.",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications",
    school: "Bharathidasan University, India",
    year: "2013",
  },
  {
    degree: "Bachelor of Science in Physics",
    school: "Bharathidasan University, India",
    year: "2010",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Assistant General Manager – Cybersecurity",
    company: "Exide Energy Solutions Limited",
    location: "Bengaluru, India",
    start: "Apr 2026",
    end: "Present",
    bullets: [
      "Provide strategic leadership for the enterprise cybersecurity function, aligning security strategy, governance, and operational resilience with business objectives across corporate and manufacturing environments.",
      "Developed and executed an enterprise-wide Cybersecurity Roadmap integrating governance, security architecture, risk management, and operations to strengthen organizational cyber resilience and security maturity.",
      "Spearheaded cybersecurity strategy for a Greenfield Lithium-ion Gigafactory by implementing Zero Trust security architecture across critical IT/OT environments, strengthening protection of industrial control systems and manufacturing operations.",
      "Serve as a trusted advisor to Executive Leadership and the Board by translating complex cyber risks into business-focused metrics, enabling informed investment decisions, governance oversight, and risk prioritization.",
      "Directed enterprise-wide Information Security Management System (ISMS) initiatives, regulatory compliance, third-party risk governance, and audit readiness aligned with ISO 27001 and industry best practices.",
      "Led global evaluation, Proof of Concept (POC), procurement, and deployment of enterprise security technologies including EDR, DLP, MDR, and Business Continuity solutions to strengthen organizational security posture.",
      "Established security governance frameworks, enterprise policies, risk registers, and executive reporting mechanisms to improve cybersecurity visibility, accountability, and regulatory compliance.",
      "Champion cybersecurity awareness initiatives, promoting a security-first culture through leadership engagement, employee training, and cross-functional collaboration.",
    ],
  },
  {
    role: "Senior Manager – Cybersecurity",
    company: "Exide Energy Solutions Limited",
    location: "Bengaluru, India",
    start: "Aug 2024",
    end: "Mar 2026",
    bullets: [
      "Directed enterprise cybersecurity transformation initiatives by integrating governance, security architecture, and operational controls into a unified enterprise security program.",
      "Led end-to-end implementation of Zero Trust security architecture across IT and Operational Technology (OT) environments, significantly improving cyber resilience for critical manufacturing infrastructure.",
      "Designed executive cybersecurity dashboards and Board reporting frameworks that translated technical risk into measurable business impact, enabling strategic governance and investment planning.",
      "Managed end-to-end security procurement lifecycle including vendor evaluation, RFPs, Proof of Concepts (POCs), commercial negotiations, and enterprise deployment of EDR, DLP, and Business Continuity platforms.",
      "Strengthened organizational compliance posture by institutionalizing ISMS governance, risk assessment methodologies, audit frameworks, and security controls aligned with international standards.",
      "Collaborated with Engineering, Infrastructure, Manufacturing, Compliance, Procurement, and Executive Leadership to embed cybersecurity into enterprise-wide digital transformation initiatives.",
      "Designed and executed enterprise-wide cybersecurity awareness and capability-building programs, improving security culture and stakeholder engagement across business functions.",
    ],
  },
  {
    role: "Chief Information Security Officer (CISO)",
    company: "Max Conformance Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    start: "May 2023",
    end: "Aug 2024",
    bullets: [
      "Defined and executed the enterprise cybersecurity vision, aligning security architecture, governance, product development, and business strategy to support organizational growth.",
      "Architected and led the development of a secure multi-tenant SaaS Governance, Risk & Compliance (GRC) platform leveraging Python, Django, AWS ECS, Amazon S3, and REST APIs, successfully delivering 85% of the core product roadmap.",
      "Integrated DevSecOps principles into the software development lifecycle by embedding automated security controls, secure coding standards, and CI/CD security validation, significantly strengthening application resilience.",
      "Enhanced cloud security posture and global application performance through secure deployment and optimization of cloud infrastructure and edge security services.",
      "Directed cross-functional Product, Engineering, Infrastructure, and Security teams, aligning technology execution with business expansion, product innovation, and customer requirements.",
      "Established secure software development governance, security architecture standards, and risk-based design principles to improve product scalability and regulatory compliance.",
    ],
  },
  {
    role: "Chief Information Security Officer (CISO)",
    company: "Addverb Technologies Limited",
    location: "Noida, India",
    start: "May 2022",
    end: "May 2023",
    bullets: [
      "Established the enterprise cybersecurity function by defining security strategy, governance frameworks, policies, and risk management processes aligned with business growth objectives.",
      "Led the organization-wide implementation and certification of ISO 27001:2013 by establishing a comprehensive Information Security Management System (ISMS), strengthening governance and regulatory compliance.",
      "Developed an enterprise-wide cybersecurity governance framework that embedded security awareness, accountability, and risk ownership across business and technology functions.",
      "Directed enterprise incident response, Managed Detection & Response (MDR), threat hunting, and cyber resilience initiatives, improving organizational preparedness against evolving cyber threats.",
      "Managed customer security assessments, regulatory audits, and third-party risk reviews, ensuring continued compliance with international security standards and strengthening customer trust.",
      "Acted as a strategic advisor to executive leadership by aligning cybersecurity investments with organizational risk appetite, operational priorities, and long-term business objectives.",
    ],
  },
  {
    role: "Senior Manager – Cybersecurity",
    company: "Addverb Technologies Limited",
    location: "Noida, India",
    start: "Jul 2020",
    end: "May 2022",
    bullets: [
      "Led enterprise cybersecurity operations by designing and implementing Zero Trust security architecture across corporate infrastructure and business-critical systems.",
      "Spearheaded enterprise Identity & Access Management (IAM) and Privileged Access Management (PAM) transformation using JumpCloud and Sectona, significantly strengthening identity governance and privileged access controls.",
      "Architected advanced endpoint protection strategies through enterprise-wide deployment and optimization of Endpoint Detection & Response (EDR) technologies, improving proactive threat detection and mitigation capabilities.",
      "Enhanced Security Operations Centre (SOC) effectiveness by governing outsourced SIEM operations, optimizing incident monitoring, accelerating threat detection, and improving incident response capabilities.",
      "Collaborated with Infrastructure, Network, Cloud, and Engineering teams to secure enterprise systems, data, and network architecture while embedding cybersecurity into infrastructure modernization initiatives.",
      "Successfully executed enterprise ISO 27001 implementation, strengthening governance, audit readiness, operational resilience, and enterprise-wide information security practices.",
    ],
  },
];

export const previousExperience: PreviousRole[] = [
  {
    role: "Senior Automation Professional",
    company: "K7 Computing Private Limited",
    location: "Chennai, India",
    start: "Jun 2017",
    end: "Jul 2020",
  },
  {
    role: "Tech Lead",
    company: "Cognizant Technology Services",
    location: "Chennai, India",
    start: "Jul 2016",
    end: "May 2017",
  },
  {
    role: "Solution Lead - IT",
    company: "Asian Paints Limited",
    location: "Mumbai, India",
    start: "May 2015",
    end: "Jan 2016",
  },
  {
    role: "Programmer Analyst - IT",
    company: "Asian Paints Limited",
    location: "Mumbai, India",
    start: "Dec 2012",
    end: "May 2015",
  },
];

export const projects: ProjectCase[] = [
  {
    slug: "enterprise-cybersecurity-transformation",
    title: "Enterprise Cybersecurity Transformation",
    summary:
      "An enterprise-wide roadmap unifying governance, architecture, and operations across corporate and manufacturing environments.",
    challenge:
      "A multinational manufacturing enterprise needed a single, coherent cybersecurity strategy spanning corporate IT and industrial operations, rather than fragmented point solutions and reactive controls.",
    approach:
      "Developed and executed an enterprise-wide Cybersecurity Roadmap that integrated governance, security architecture, risk management, and operations into one program, backed by executive-level risk reporting and cross-functional collaboration with Engineering, Infrastructure, and Compliance.",
    outcome:
      "Strengthened organizational cyber resilience and security maturity, giving the Board and executive leadership a clear, business-focused view of cyber risk and investment priorities.",
    stack: ["ISO 27001", "ISMS", "Zero Trust", "Risk Governance", "Executive Reporting"],
  },
  {
    slug: "google-workspace-to-m365-security-migration",
    title: "Google Workspace to Microsoft 365 Security Transformation",
    summary:
      "Enterprise-wide identity and productivity platform migration executed with advanced threat protection built in from day one.",
    challenge:
      "Migrating an entire enterprise's collaboration and identity platform is high-risk by nature — any gap in threat protection or identity configuration during cutover directly exposes the business.",
    approach:
      "Led the enterprise migration from Google Workspace to Microsoft 365, implementing advanced threat protection and identity security controls in parallel with the migration, while optimizing licensing for cost and coverage.",
    outcome:
      "Improved security posture and operational efficiency post-migration, with no loss of protection during the transition and better license utilization.",
    stack: ["Microsoft 365", "Identity Security", "Threat Protection", "Licensing Optimization"],
  },
  {
    slug: "enterprise-iam-pam",
    title: "Enterprise Identity & Access Management (IAM)",
    summary:
      "Organization-wide Zero Trust identity program built on JumpCloud IAM and Sectona PAM.",
    challenge:
      "Decentralized identity and privileged access practices created inconsistent governance and elevated insider- and credential-based risk across the organization.",
    approach:
      "Spearheaded organization-wide deployment of JumpCloud for identity and access management and Sectona for privileged access management, implementing Zero Trust principles and centralizing identity governance.",
    outcome:
      "Significantly strengthened identity governance and privileged access controls, giving security teams centralized visibility and policy enforcement across the enterprise.",
    stack: ["JumpCloud", "Sectona", "Zero Trust", "PAM", "IAM"],
  },
  {
    slug: "multi-tenant-saas-grc-platform",
    title: "Multi-Tenant SaaS GRC Platform",
    summary:
      "A cloud-native Governance, Risk & Compliance platform built from the ground up as Lead Security Architect.",
    challenge:
      "Organizations needed a scalable way to run compliance workflows — including DPIAs and third-party risk assessments — without relying on spreadsheets and manual tracking.",
    approach:
      "Served as Lead Security Architect for a multi-tenant SaaS GRC platform built on Python, Django, PostgreSQL, REST APIs, and AWS (ECS, S3), embedding DevSecOps practices — automated security controls, secure coding standards, and CI/CD security validation — into the SDLC.",
    outcome:
      "Delivered 85% of the core product roadmap and automated compliance workflows including DPIA and Third-Party Risk Management, improving operational efficiency and customer confidence.",
    stack: ["Python", "Django", "PostgreSQL", "AWS ECS", "Amazon S3", "REST APIs", "DevSecOps"],
  },
  {
    slug: "malware-research-threat-intel-platform",
    title: "Malware Research & Threat Intelligence Platform",
    summary:
      "A scalable malware replication and research environment built to improve analysis accuracy and automation.",
    challenge:
      "Manual malware analysis workflows were slow and difficult to scale, limiting the speed and depth of threat intelligence the team could produce.",
    approach:
      "Designed and developed a scalable malware replication and research platform leveraging VMware PowerCLI and Python to automate environment provisioning and analysis workflows.",
    outcome:
      "Improved malware analysis accuracy, automation, and overall threat intelligence capability for the security team.",
    stack: ["Python", "VMware PowerCLI", "Threat Intelligence", "Automation"],
  },
];

export const services: ServiceOffering[] = [
  {
    slug: "vciso-advisory",
    title: "vCISO & Cybersecurity Strategy Advisory",
    description:
      "Fractional CISO leadership for organizations that need executive-level security direction without a full-time hire — cybersecurity roadmaps, Board reporting, and risk-based investment guidance.",
    icon: "shield",
    deliverables: [
      "Enterprise cybersecurity roadmap & maturity assessment",
      "Board and executive risk reporting frameworks",
      "Security investment prioritization and vendor strategy",
      "Cyber risk translated into business-focused metrics",
    ],
  },
  {
    slug: "grc-compliance",
    title: "Governance, Risk & Compliance",
    description:
      "End-to-end GRC program design and execution — from ISMS build-out to certification — aligned to ISO 27001, TISAX, GDPR, and DPDP requirements.",
    icon: "scale",
    deliverables: [
      "ISO 27001:2022 ISMS design, implementation & audit readiness",
      "TISAX, GDPR & DPDP compliance programs",
      "Policy development and security governance frameworks",
      "Third-party risk management and audit management",
    ],
  },
  {
    slug: "zero-trust-iam-pam",
    title: "Zero Trust Architecture & IAM/PAM",
    description:
      "Design and rollout of Zero Trust security architecture, centralized identity, and privileged access management across enterprise and industrial environments.",
    icon: "lock",
    deliverables: [
      "Zero Trust architecture design for IT and OT environments",
      "IAM/PAM platform selection, deployment & governance",
      "Privileged access controls and identity lifecycle management",
      "Network segmentation and least-privilege access models",
    ],
  },
  {
    slug: "cloud-it-ot-security",
    title: "Cloud & IT/OT Security",
    description:
      "Securing cloud platforms (AWS, Azure, GCP) alongside industrial control systems and manufacturing environments — including greenfield facility security design.",
    icon: "cloud",
    deliverables: [
      "Cloud security architecture and posture management",
      "IT/OT security for manufacturing & industrial environments",
      "Greenfield facility cybersecurity design",
      "Cloud infrastructure and edge security optimization",
    ],
  },
  {
    slug: "security-operations",
    title: "Security Operations Modernization",
    description:
      "Modernizing detection and response capability through SIEM, EDR, DLP, and MDR — with governance for outsourced SOC operations.",
    icon: "radar",
    deliverables: [
      "SIEM/EDR/DLP/MDR evaluation, POC & deployment",
      "SOC governance for outsourced operations",
      "Incident response and threat-hunting program design",
      "Security technology procurement & vendor management",
    ],
  },
  {
    slug: "devsecops",
    title: "DevSecOps & Secure SaaS Architecture",
    description:
      "Embedding security into the SDLC for SaaS and product engineering teams — secure coding standards, CI/CD security automation, and secure architecture review.",
    icon: "code",
    deliverables: [
      "DevSecOps pipeline design & CI/CD security automation",
      "Secure SaaS/multi-tenant architecture review",
      "Secure coding standards and developer enablement",
      "Application security testing strategy",
    ],
  },
];

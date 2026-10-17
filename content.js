/* Public summaries only. Private source documents and unapproved media stay outside this project. */
const portfolio = {
cybersecurity: {
    label: 'Cybersecurity', title: 'Security starts with accountability.',
    description: 'Four years of academic study across security, networking, risk management, cryptography, and law. My focus is governance, risk, and compliance — connecting technical decisions to organizational responsibility.',
    section: 'Areas of Concentration',
    cards: [
      ['Core security courses', 'Threat modeling, attack/defense strategies, cybercrime investigation techniques, information assurance frameworks, red/blue team operations, security policy development, governance structures, and evaluation criteria for security controls.'],
      ['Networking & infrastructure', 'Network protocols and architecture, system hardening across Windows/Linux environments, secure configuration management, intermediate computer concepts, network security fundamentals, OS security controls, firewall rules, and traffic analysis.'],
      ['Cryptography & data protection', 'Symmetric/asymmetric encryption algorithms, key management and PKI, hash functions and digital signatures, cryptographic protocols for secure communications, applied cryptography in real-world systems, and data classification strategies.'],
      ['Risk management & assurance', 'Risk assessment methodologies (qualitative/quantitative), business impact analysis, threat/vulnerability analysis, controls selection and implementation, risk treatment planning, continuous monitoring practices, security metrics, compliance auditing.'],
      ['Legal & compliance framework', 'Cyber law fundamentals, legal liability in infosec, digital evidence handling and chain of custody, regulatory frameworks (NIST CSF, ISO 27001), privacy regulations, intellectual property protection, intersection of law with security policy.'],
      ['Ethics & professional responsibility', 'Moral reasoning frameworks, ethical decision-making in cybersecurity, codes of conduct (ACM/IEEE), accountability and transparency in security practices, the human element as both vulnerability and safeguard, ethics in surveillance and data collection, balancing security with civil liberties.'],
      ['Database & systems management', 'Data integrity controls, access control models (DAC/MAC/RBAC), SQL security and injection prevention, database encryption techniques, MIS architecture for enterprise environments, system lifecycle management, information governance.'],
      ['Programming & application security', 'Secure coding principles across languages, SDLC, software integration patterns, input validation and authentication mechanisms, OWASP Top 10 vulnerabilities, secure deployment practices.'],
      ['Analytics & AI foundations', 'Data analysis methods for security operations, algorithmic thinking for threat detection, machine learning fundamentals, security implications of AI systems, adversarial AI concepts, data-driven decision making in GRC.'],
      ['Supporting coursework', 'E-Business principles, professional IT writing/documentation standards, IT project management methodologies, human relations in technical teams, communication under pressure, business context for security decisions, human factors that drive security culture.']
    ]
  },
  homelab: {
    images: [
        ['homelab-wall-rack.jpg', 'Wall-mounted HomeLAB shelving with Mac Pro systems, networking equipment, and cabling.', 510, 680],
        ['icons.png', 'HomeLAB infrastructure icons.', 577, 55]
      ],
    label: 'HomeLAB', title: 'Understanding the systems we protect.',
    description: 'A company-style practice environment for building, configuring, testing, and documenting infrastructure. This is a capabilities portfolio, not a live operations dashboard.',
    section: 'Built, configured, and explored',
    cards: [
      ['Virtualization and workloads', 'Multi-node Proxmox environment with Linux and Windows virtual machines and containers, including a Windows domain controller running Active Directory. Docker workloads include n8n and Homepage.'],
      ['Networking and remote access', 'Configured networking and routing, a virtualized pfSense firewall, OpenVPN, Tailscale, and Pi-hole DNS filtering.'],
      ['Identity and storage', 'Active Directory, a Windows file server, access control, Group Policy practice, and private NAS storage.'],
      ['Monitoring and automation', 'Grafana and Prometheus for monitoring and visualization, with Pi-hole for DNS monitoring and filtering. n8n workflows and the Homepage dashboard are under development.'],
      ['Local AI', 'Distributed local-model work across five machines, supported by LM Studio and AI-assisted development with VS Code and Hermes. Amuse image generation is functional but rudimentary.'],
      ['Next development work', 'Eros: an agent orchestration application designed to run multiple agents in parallel on tasks and projects. LLM Distributor: an application designed to connect applications to available, active LLMs while minimizing downtime and disruption. Planned NAS-hosted agent memory provides a centralized location for remote agent access. Additional work includes Markdown-managed agents, knowledge management, and Kali-based AI-agent security practice.']
    ]
  },
  projects: {
    label: 'Projects', title: 'Practical application.',
    description: 'Putting academic knowledge into practice through public study resources, hands-on infrastructure, and applications in development. The focus is on understanding systems, connecting services, and improving how work gets done.',
    section: 'Selected work',
    cards: [
      ['Security+ Study Site', 'A public resource supporting my CompTIA Security+ preparation. This project connects continued security study with the practical work of building and maintaining a web-based learning resource.', 'https://bacano19.github.io/security-plus-study/', 'Visit study site'],
      ['HomeLAB', 'A multi-node Proxmox environment for Linux and Windows workloads, including a Windows domain controller running Active Directory. Hands-on practice spans networking, storage, Docker services, DNS filtering, monitoring, and automation.', '#/homelab', 'Explore the lab'],
      ['Eros AI Orchestration App', 'An application in development designed to coordinate multiple AI agents working in parallel on tasks and projects. Related development explores Markdown-managed agents and planned centralized, NAS-hosted memory for remote agent access.'],
      ['LLM Distributor', 'An application in development designed to connect applications to available, active LLMs for ongoing utilization. The goal is to keep model resources useful while minimizing downtime and disruption when availability changes.'],
      ['n8n automation workflows', 'Workflows in development connecting local services and AI-assisted processes within the HomeLAB. This work explores repeatable automation alongside the Homepage dashboard and the wider monitoring environment.']
    ]
  },
  experience: {
    images: [
        ['image5.png', 'Randy Bautista in U.S. Army dress uniform.', 768, 1024],
        ['military group photo.jpg', 'Group photo with military unit.', 1680, 1242]
      ],
    label: 'Experience', title: 'Accountability. Process. Follow-through.',
    description: 'Military logistics and civilian operations shaped the way I Approach documentation, responsibility, and risk.',
    section: 'Transferable strengths',
    cards: [
      ['U.S. Army', 'Company Supply Sergeant / S4 Clerk at Fort Bliss, Texas, with Operation New Dawn support. Managed government property, sensitive equipment, and operational readiness procedures. Developed a deep understanding of accountability, documentation standards, and chain-of-command communication under pressure.'],
      ['Drafter & CAD work', 'Produced 2D technical drawings and schematics using computer-aided design tools. Focused on precise line work, dimensioning, layer management, and drafting standards. Translated engineering concepts into clear, buildable documentation.'],
      ['Culinary operations', 'Professional kitchen experience from prep to service. Managed inventory rotation, food safety protocols, station organization, and high-volume production under tight deadlines. Developed discipline in consistency, timing, and working efficiently in fast-paced environments.'],
      ['HVAC & construction', 'Hands-on mechanical systems work including installation, maintenance, and troubleshooting of heating, ventilation, and air conditioning equipment. Construction experience spanning framing, finishing, and site preparation — building a practical understanding of how physical infrastructure operates.'],
      ['Emergency road service', 'Field-based emergency response work requiring rapid diagnostics, customer communication under stress, and reliable execution in unpredictable conditions. Developed the ability to assess situations quickly, prioritize safety, and deliver results with limited resources.'],
      ['Civilian operations & dispatch', 'Inventory accuracy, safety compliance, customer communication under pressure, dispatch coordination, time management, and reliable execution across multiple operational environments.'],
      ['A practical GRC mindset', 'Follow the standard, document clearly, protect assets, and communicate issues. These strengths from military logistics, technical drafting, culinary operations, mechanical work, and field service support my transition toward cybersecurity; they are not presented as prior cybersecurity employment.']
    ]
  },
  credentials: {
    images: [
        ['culinary-graduation-group.jpg', 'Culinary graduation group photograph.', 1086, 724],
        ['Deans List Q4 2025.png', "Dean's List — Fall 2025.", 288, 288],
        ['Deans List Q1 2026.png', "Dean's List — Spring 2026 (Q1).", 288, 288],
        ['Deans List Q2 2026.png', "Dean's List — Fall 2026 (Q2).", 288, 288]
      ],
    label: 'Credentials', title: 'A foundation. A continued commitment.',
    description: 'Completed education, current studies, training, and honors, with a clear distinction between earned credentials and work in progress.',
    section: 'Education and professional development',
    cards: [
      ['B.S. Cybersecurity Management', 'American Military University. Expected completion: December 31, 2026. Current GPA: 3.8.'],
      ['A.S. Cybersecurity', 'American Military University.', 'assets/Associate of Science, Cybersecurity.pdf', 'View diploma →'],
      ['CompTIA Security+ preparation', 'Bootcamp recently started through CED Solutions with instructor Eduardo Garcia. Certification not yet earned; class end and exam dates have not been provided.'],
      ['Microsoft Project 2021 Part A', 'Completed ITMG221 Microsoft Project 2021 Part A training, with a certificate of completion available below.', 'assets/Certificate of completion for certificate ITMG221 - Microsoft Project 2021 (Part A).pdf', 'View certificate →'],
      ['Technical and military training', 'Army logistics/supply training. Mechanical Drafter/Designer training completed in 2005.'],
      ['Culinary Arts Certification', 'International Culinary Center, completed in 2019.'],
      ['Golden Key International Honour Society', 'Inducted for academic achievement.', 'assets/Golden Key International Honour Society.pdf', 'View certificate →'],
      ['National Society of Collegiate Scholars', 'Recognizing scholarly achievement.', 'assets/The National Society of Collegiate Scholars (NSCS).pdf', 'View certificate →'],
      ['Military honors', 'Army Achievement Medal, Army Good Conduct Medal, and Iraq Campaign Medal with Campaign Star.']
    ]
  },
  contact: {
    label: 'Contact', title: 'Let’s start a conversation.',
    description: 'Open to cybersecurity, GRC, IT support, and junior security opportunities.',
    section: 'Get in touch',
    cards: [
      ['Email', '', 'mailto:randybautista@yahoo.com', 'randybautista@yahoo.com'],
      ['Location', 'Johnstown, Pennsylvania'],
      ['LinkedIn', 'Professional background and connections.', 'https://www.linkedin.com/in/randyebautista', 'View LinkedIn'],
      ['Security+ Study Site', 'Explore my public study project.', 'https://bacano19.github.io/security-plus-study/', 'Visit study site']
    ]
  }
};

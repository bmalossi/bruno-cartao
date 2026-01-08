
export const PROFILE = {
    name: "BRUNO MALOSSI",
    role: "Fundador Automab",
    headline: "Automação de processos & IA para consórcios, fintechs e serviços financeiros",
    whatsapp: "https://wa.me/5511944477528?text=Oi%20Bruno,%20vi%20seu%20cart%C3%A3o%20e%20gostaria%20de%20saber%20mais.",
    portfolio: "https://automab.dev", // Using main site as portfolio for now
    email: "contato@automab.dev",
    linkedin: "https://linkedin.com/in/bmalossi", // Placeholder
    github: "https://github.com/bmalossi", // Inferred from workspace
};

export const EXPERTISE = {
    title: "QUEM SOU",
    description: "Gestor de Pós-venda com 5+ anos transformando operações manuais em sistemas automatizados que geram resultados mensuráveis.",
    specialties: "Especialista em automação com n8n, make, manychat e Python.",
    proof: "Provo valor através de números: 990h/mês → 690h, 49% → 78% adimplência, 50.000+ clientes gerenciados.",
    stack: ["n8n", "Supabase", "LLMs", "Python", "Make", "ManyChat", "Evolution API", "WhatsApp API", "CRM", "Github"],
};

export const SERVICES = [
    {
        id: "automation",
        shortTitle: "Automação Vendas (990h→690h)",
        title: "Automação de Pré-vendas, Vendas & Pós-vendas",
        description: "Transformação completa do fluxo de vendas, eliminando tarefas manuais repetitivas e garantindo que nenhum lead seja perdido.",
        benefits: [
            "Redução de 990h para 690h mensais em gestão",
            "Qualificação automática de leads",
            "Follow-up infinito sem intervenção humana"
        ],
        stack: ["n8n", "Evolution API", "CRM"],
        cta: "Quero automatizar vendas"
    },
    {
        id: "chatbots",
        shortTitle: "Chatbots IA (50k clientes)",
        title: "Chatbots Inteligentes (Melissa)",
        description: "Assistentes virtuais capazes de gerenciar carteiras massivas de clientes, realizando cobrança, negociação e suporte nível 1.",
        benefits: [
            "50.000+ clientes atendidos",
            "Recuperação de crédito humanizada",
            "Disponibilidade 24/7 sem fila de espera"
        ],
        stack: ["OpenAI", "Supabase", "WhatsApp"],
        cta: "Ver demo do Chatbot"
    },
    {
        id: "reports",
        shortTitle: "Relatórios (Weekly)",
        title: "Business Intelligence & Relatórios",
        description: "Dashboards em tempo real que mostram a saúde da operação, permitindo tomadas de decisão baseadas em dados e não em achismos.",
        benefits: [
            "Relatórios automáticos toda segunda-feira",
            "Visão clara de ROI e conversão",
            "Alertas de anomalias na operação"
        ],
        stack: ["Supabase", "Python", "Dashboard"],
        cta: "Ver exemplo de relatório"
    }
];

export const CASE_STUDY = {
    client: "Valoriza Capital",
    stats: [
        { label: "Consorciados", value: "1.000+", type: "text" },
        { label: "Redução de horas", value: 30, type: "percent" },
        { label: "Adimplência", value: "49% → 78%", type: "text" } // Custom handling for progress bar
    ],
    stack: "n8n • Evolution API • Supabase • OpenAI",
    impact: "990h/mês → 690h, 99.8% uptime"
};

export const CTA_CONTENT = {
    title: "QUER CONVERSAR COMIGO?",
    buttonText: "Falar no WhatsApp",
    subtext: "LinkedIn • GitHub • Email"
};
export const FOOTER_CONTENT = {
    text: "Feito por Bruno Malossi © 2026. Todos os direitos reservados.",
    resumeButton: "Baixar Currículo (PDF)",
    resumeLink: "/curriculo-bruno-malossi.pdf"
};

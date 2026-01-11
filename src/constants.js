
export const PROFILE = {
    name: "BRUNO MALOSSI",
    role: "Especialista em Retenção | IA & Automações",
    headline: "Especialista em Retenção de Clientes | Automação Pós-Venda + Content Marketing",
    whatsapp: "https://wa.me/5511944477528?text=Oi%20Bruno,%20vi%20seu%20CV%20e%20gostaria%20de%20falar%20sobre%20reten%C3%A7%C3%A3o.",
    portfolio: "https://automab.dev", // Using main site as portfolio for now
    email: "contato@automab.dev",
    linkedin: "https://linkedin.com/in/bmalossi", // Placeholder
    github: "https://github.com/bmalossi", // Inferred from workspace
};

export const EXPERTISE = {
    title: "QUEM SOU",
    description: "Gestor de Pós-venda com 5+ anos transformando operações manuais em sistemas automatizados que geram resultados mensuráveis.",
    specialties: "Automação Pós-Venda (Cobrança/Retenção) e Content Marketing Educativo.",
    proof: "Resultados: 300h/mês → 10h/mês (94% off), +R$ 348k/ano recuperados, 49% → 78% adimplência.",
    stack: ["n8n", "Supabase", "OpenAI/LLMs", "Python", "Make", "CRM", "Evolution API", "WhatsApp", "SEO", "Copywriting"],
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
    },
    {
        id: "content-marketing",
        shortTitle: "Content & Retenção (250+ arts)",
        title: "Content Marketing & Retenção",
        description: "Estratégia de conteúdo educativo focado em aquisição orgânica e retenção de clientes (churn reduction), transformando dúvidas em autoridade e engajamento.",
        benefits: [
            "250+ artigos publicados e gestão de blog",
            "Retenção de clientes via educação contínua",
            "SEO + Lead Nurturing para ciclo de vida"
        ],
        stack: ["SEO", "Copywriting", "Blog", "Email Mkt", "CRM"],
        cta: "Ver estratégias de conteúdo"
    }
];

export const CASE_STUDY = {
    client: "Valoriza Capital",
    stats: [
        { label: "Consorciados", value: "1.000+", type: "text" },
        { label: "Redução de horas", value: "94", type: "percent" },
        { label: "Adimplência", value: "49% → 78%", type: "text" }
    ],
    stack: "N8N • WhatsApp API • Supabase • LLMs diversas • CRM",
    impact: "300h manuais → 10h (automático), +R$ 348k/ano receita"
};

export const CTA_CONTENT = {
    title: "QUER CONVERSAR COMIGO?",
    buttonText: "Falar no WhatsApp",
    subtext: "LinkedIn • GitHub • Email"
};
export const FOOTER_CONTENT = {
    text: "Desenvolvido por Bruno Malossi © 2026. Todos os direitos reservados.",
    resumeButton: "Baixar Currículo (PDF)",
    resumeLink: "/curriculo-bruno-malossi.pdf"
};

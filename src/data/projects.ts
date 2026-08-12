
interface IProject {
    title: string;
    description: string;

    cover: string;
    screenshots?: string[];

    period?: string;

    technologies?: string[][][];
    responsibilities?: string[];

    architecture?: string;


    link: {
        name: string;
        href: string;
    };
    links?: {
        article?: string;
        figma?: string;
        docs?: string;
    };
};

export const projects: IProject[] = [
    {
        cover: "atomcode_sshot.png",
        title: "atomcode",
        description: "atomcode_desc",
        screenshots: [
            "atomcode_sshot.png",
            "atomcode_1.png"
        ],
        technologies: [
            [
                ["HTML", "CSS", "SCSS", "JS", "TS"],
                ["React", "MUI", "MobX", "GraphQL"],
                ["Webpack"],
                ["i18n", "bpmn.js"]
            ],
            [
                ["Nest.js"],
                ["PostgreSQL"],
                ["Prisma", "Swagger"],
                ["REST API"]
            ],
            [
                ["Git", "Jenkins", "Docker"],
                ["Linux", "Bash"],
                ["Figma", "Jira"],
                ["Scrum", "Lean"]
            ]
        ],
        responsibilities: [
            "OpenAPI parser (yaml, json)",
            "Swagger-like actions list",
            "BPMN Editor"
        ],
        architecture: "",
        link: {
            name: "https://atomkod.ru",
            href: "https://atomkod.ru"
        },
        links: {
            article: "https://www.tadviser.ru/index.php/Статья:Олег_Покровский%2C_Росатом:_low-code_платформа_Атомкод_ускоряет_реализацию_промышленных_проектов",
            figma: "https://www.figma.com/design/RhgMJkkioqVpmiyvNGzOPh/DS--DevTools-?node-id=0-1&p=f&t=dePAnotMdJyPPjq0-0",
            docs: "https://docs-atomkod-ru.translate.goog/О-цифровой-платформе/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp&_x_tr_hist=true",
        }
    },
    {
        cover: "dtwin_sshot.png",
        title: "dt",
        description: "dt_desc",
        screenshots: [
            "dtwin_sshot.png",
        ],
        technologies: [
            []
        ],
        responsibilities: [
            ""
        ],
        architecture: "",
        link: {
            name: "article",
            href: "https://itrussia.media/ru/article/tsifrovoy-dvoynik-ot-rosatoma-revolyutsiya-v-atomnom-mashino"
        },
        links: {
            article: "",
            figma: "",
            docs: "",
        }
    },
    {
        cover: "kit_sshot.png",
        title: "kit",
        description: "kit_desc",
        screenshots: [
            "kit_sshot.png",
        ],
        technologies: [
            [
                ["HTML", "CSS", "SCSS", "TS"],
                ["React", "Virtualized", "MUI", "MobX"],
                ["Webpack"],
                ["i18n", "C3D Toolkit"]
            ]
        ],
        responsibilities: [
            "3D-Viewer",
            "Gantt",
            "Calendar",
            "Datagrid"
        ],
        architecture: "",
        link: {
            name: "doc",
            href: "https://docs-atomkod-ru.translate.goog/Справочник-компонентов-экранных-форм/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp&_x_tr_hist=true"
        },
        links: {
            article: "",
            figma: "",
            docs: "",
        }
    },
    {
        cover: "bim_sshot.png",
        title: "bim",
        description: "bim_desc",
        screenshots: [
            "bim_sshot.png",
        ],
        technologies: [
            []
        ],
        responsibilities: [
            "Collisions",
            "Initial data",
            "Color and transparency",
        ],
        architecture: "",
        link: {
            name: "article",
            href: "https://c3dlabs.ru/blog/customer-stories/primenenie-c3d-web-vision-kompaniey-tsifrum-v-produkte-na-baze-platformy-atomkod/"
        },
        links: {
            article: "https://c3dlabs.ru/blog/customer-stories/primenenie-c3d-web-vision-kompaniey-tsifrum-v-produkte-na-baze-platformy-atomkod/",
            figma: "https://www.figma.com/design/WY9y8AIoRFZdG9mdhSZdP9/BIM?node-id=33-90940&p=f&t=XTqDH7uuUs77SYpx-0",
            docs: "",
        }
    },
    {
        cover: "bpmn_sshot.png",
        title: "bpmn",
        description: "bpmn_desc",
        screenshots: [
            "bpmn_sshot.png",
        ],
        technologies: [
            []
        ],
        responsibilities: [
            ""
        ],
        architecture: "",
        link: {
            name: "doc",
            href: "https://docs-atomkod-ru.translate.goog/Справочник-API/mdcamundaproxy/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp"
        },
        links: {
            article: "",
            figma: "https://www.figma.com/design/LcISvnXmErkt2evmx6996n/BPMS?node-id=1-133988&p=f&t=zXDxG0WBFG2MwOWK-0",
            docs: "https://docs-atomkod-ru.translate.goog/Справочник-API/mdcamundaproxy/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp",
        }
    }
];
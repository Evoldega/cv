
interface IProject {
    title: string;
    description: string;

    cover: string;
    screenshots?: string[];

    period?: string;

    technologies?: string[][][];
    responsibilities?: string[]; // Что было сделано мной

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
        technologies: [
            []
        ],
        responsibilities: [
            ""
        ],
        architecture: "",
        link: {
            name: "dt_link",
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
        technologies: [
            []
        ],
        responsibilities: [
            ""
        ],
        architecture: "",
        link: {
            name: "kit_link",
            href: "https://docs-atomkod-ru.translate.goog/Справочник-компонентов-экранных-форм/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp&_x_tr_hist=true"
        },
        links: {
            article: "",
            figma: "",
            docs: "",
        }
    }
];
import apacheIcon from "@/assets/technologies/backend/apache.svg?no-inline"
import springBootIcon from "@/assets/technologies/backend/spring-boot.svg?no-inline"
import springSecurityIcon from "@/assets/technologies/backend/spring-security.svg?no-inline"
import postgresqlIcon from "@/assets/technologies/database/postgresql.svg?no-inline"
import css3Icon from "@/assets/technologies/frontend/css3.svg?no-inline"
import html5Icon from "@/assets/technologies/frontend/html5.svg?no-inline"
import materialUiIcon from "@/assets/technologies/frontend/material-ui.svg?no-inline"
import nextjsOnDarkIcon from "@/assets/technologies/frontend/nextjs-on-dark.svg?no-inline"
import nextjsOnLightIcon from "@/assets/technologies/frontend/nextjs-on-light.svg?no-inline"
import tailwindCssIcon from "@/assets/technologies/frontend/tailwindcss.svg?no-inline"
import cIcon from "@/assets/technologies/language/c.svg?no-inline"
import javaIcon from "@/assets/technologies/language/java.svg?no-inline"
import javascriptIcon from "@/assets/technologies/language/javascript.svg?no-inline"
import sqlIcon from "@/assets/technologies/language/sql.svg?no-inline"
import typescriptIcon from "@/assets/technologies/language/typescript.svg?no-inline"
import cloudflareIcon from "@/assets/technologies/service/cloudflare.svg?no-inline"
import renderIcon from "@/assets/technologies/service/render.svg?no-inline"
import supabaseIcon from "@/assets/technologies/service/supabase.svg?no-inline"
import vercelOnDarkIcon from "@/assets/technologies/service/vercel-on-dark.svg?no-inline"
import vercelOnLightIcon from "@/assets/technologies/service/vercel-on-light.svg?no-inline"
import reactIcon from "@/assets/technologies/shared/react.svg?no-inline"
import swiftIcon from "@/assets/technologies/shared/swift.svg?no-inline"
import clickUpIcon from "@/assets/technologies/tool/clickup.svg?no-inline"
import dockerIcon from "@/assets/technologies/tool/docker.svg?no-inline"
import drawIoIcon from "@/assets/technologies/tool/drawio.svg?no-inline"
import figmaIcon from "@/assets/technologies/tool/figma.svg?no-inline"
import gitIcon from "@/assets/technologies/tool/git.svg?no-inline"
import githubOnDarkIcon from "@/assets/technologies/tool/github-on-dark.svg?no-inline"
import githubOnLightIcon from "@/assets/technologies/tool/github-on-light.svg?no-inline"
import intellijIcon from "@/assets/technologies/tool/intellij.svg?no-inline"
import linearOnDarkIcon from "@/assets/technologies/tool/linear-on-dark.svg?no-inline"
import linearOnLightIcon from "@/assets/technologies/tool/linear-on-light.svg?no-inline"
import linuxIcon from "@/assets/technologies/tool/linux.svg?no-inline"
import postmanIcon from "@/assets/technologies/tool/postman.svg?no-inline"
import prettierIcon from "@/assets/technologies/tool/prettier.png?no-inline"
import vscodeIcon from "@/assets/technologies/tool/vscode.svg?no-inline"

const backend = [
  {
    name: "Spring Boot",
    image: springBootIcon
  },
  {
    name: "Spring Security",
    image: springSecurityIcon,
    invertOnDark: true
  },
  {
    name: "Apache HTTP Server",
    image: apacheIcon
  }
]

const frontend = [
  {
    name: "HTML5",
    image: html5Icon
  },
  {
    name: "CSS3",
    image: css3Icon
  },
  {
    name: "React",
    image: reactIcon
  },
  {
    name: "Next.js",
    image: nextjsOnLightIcon,
    imageDark: nextjsOnDarkIcon
  },
  {
    name: "Tailwind CSS",
    image: tailwindCssIcon
  },
  {
    name: "Material UI",
    image: materialUiIcon
  }
]

const mobile = [
  {
    name: "React Native",
    image: reactIcon
  },
  {
    name: "SwiftUI",
    image: swiftIcon
  }
]

const database = [
  {
    name: "PostgreSQL",
    image: postgresqlIcon
  }
]

const service = [
  {
    name: "Supabase",
    image: supabaseIcon
  },
  {
    name: "Vercel",
    image: vercelOnLightIcon,
    imageDark: vercelOnDarkIcon
  },
  {
    name: "Render",
    image: renderIcon,
    invertOnDark: true
  },
  {
    name: "Cloudflare",
    image: cloudflareIcon
  }
]

const language = [
  {
    name: "SQL",
    image: sqlIcon
  },
  {
    name: "Java",
    image: javaIcon
  },
  {
    name: "C",
    image: cIcon
  },
  {
    name: "JavaScript",
    image: javascriptIcon
  },
  {
    name: "TypeScript",
    image: typescriptIcon
  },
  {
    name: "Swift",
    image: swiftIcon
  }
]

const tool = [
  {
    name: "Prettier",
    image: prettierIcon
  },
  {
    name: "Linux",
    image: linuxIcon
  },
  {
    name: "GitHub",
    image: githubOnLightIcon,
    imageDark: githubOnDarkIcon
  },
  {
    name: "Git",
    image: gitIcon
  },
  {
    name: "IntelliJ IDEA",
    image: intellijIcon
  },
  {
    name: "VSCode",
    image: vscodeIcon
  },
  {
    name: "Postman",
    image: postmanIcon
  },
  {
    name: "Docker",
    image: dockerIcon
  },
  {
    name: "Figma",
    image: figmaIcon
  },
  {
    name: "Draw.io",
    image: drawIoIcon,
    invertOnDark: true
  },
  {
    name: "ClickUp",
    image: clickUpIcon,
    invertOnDark: true
  },
  {
    name: "Linear",
    image: linearOnLightIcon,
    imageDark: linearOnDarkIcon
  }
]

/**
 * @type {Array<{name: string, image: string, imageDark?: string, invertOnDark?: boolean, area: "Backend" | "Frontend" | "Mobile" | "Database" | "Service" | "Language" | "Tool"}>}
 */
export const dataTechnologies = [
  ...backend.map(e => ({ ...e, area: "Backend" })),
  ...frontend.map(e => ({ ...e, area: "Frontend" })),
  ...mobile.map(e => ({ ...e, area: "Mobile" })),
  ...database.map(e => ({ ...e, area: "Database" })),
  ...service.map(e => ({ ...e, area: "Service" })),
  ...language.map(e => ({ ...e, area: "Language" })),
  ...tool.map(e => ({ ...e, area: "Tool" }))
]

const backend = [
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "Spring Security",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/springsecurity.svg",
    invertOnDark: true
  },
  {
    name: "Apache HTTP Server",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
  }
]

const frontend = [
  {
    name: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Material UI",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  }
]

const mobile = [
  {
    name: "React Native",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "SwiftUI",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  }
]

const database = [
  {
    name: "PostgreSQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }
]

const service = [
  {
    name: "Supabase",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/supabase.svg"
  },
  {
    name: "Vercel",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg",
    invertOnDark: true
  },
  {
    name: "Render",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg",
    invertOnDark: true
  },
  {
    name: "Cloudflare",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg"
  }
]

const language = [
  {
    name: "SQL",
    image: "/sql.svg"
  },
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "C",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Swift",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  }
]

const tool = [
  {
    name: "Prettier",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prettier.svg"
  },
  {
    name: "Linux",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invertOnDark: true
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "IntelliJ IDEA",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
  },
  {
    name: "VSCode",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },
  {
    name: "Postman",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
  },
  {
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  },
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "Draw.io",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/diagramsdotnet.svg",
    invertOnDark: true
  },
  {
    name: "ClickUp",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clickup.svg",
    invertOnDark: true
  }
]

/**
 * @type {Array<{name: string, image: string, invertOnDark?: boolean, area: "Backend" | "Frontend" | "Mobile" | "Database" | "Service" | "Language" | "Tool"}>}
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

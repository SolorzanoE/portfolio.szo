import inventoryImage from "@/assets/inventory-image.png";
import serviicyImage from "@/assets/serviicy-image.png"
import cacaoImage from "@/assets/cacao-image.png"

export const dataProject = [
  {
    title: "Inventory-Qi",
    description: "Sistema de consulta y monitoreo de existencias, diseñado para la visualización de datos provenientes de CONTPAQi® Comercial.",
    image: inventoryImage,
    technologies: ["React", "JavaScript", "MUI", "Vite", "C#", "ASP.NET"],
    repoUrl: "https://github.com/SolorzanoE/inventory-qi"
  },
  {
    title: "Serviicy",
    description: "Sistema gestor de pólizas de usuarios, orientado al soporte de servicios.",
    image: serviicyImage,
    technologies: ["Spring Boot", "PostgreSQL", "TypeScript", "React", "Vite"],
    //demoUrl: "1",
    repoUrl: ""
  },
  {
    title: "Data tracking Cacao",
    description: "",
    image: cacaoImage,
    technologies: ["Java", "PostgreSQL"],
    repoUrl: ""
  }
]
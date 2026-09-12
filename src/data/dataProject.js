import inventoryImage from "@/assets/projects/inventory-image.webp";
import serviicyImage from "@/assets/projects/serviicy-image.webp"
import cacaoImage from "@/assets/projects/cacao-image.webp"

export const dataProject = [
  {
    title: "Serviicy",
    description: "Sistema gestor de pólizas de usuarios, orientado al soporte de servicios.",
    image: serviicyImage,
    technologies: ["Spring Boot", "PostgreSQL", "TypeScript", "React", "Vite"],
  },
  {
    title: "Inventory-Qi",
    description: "Sistema de consulta y monitoreo de existencias, diseñado para la visualización de datos provenientes de CONTPAQi® Comercial.",
    image: inventoryImage,
    technologies: ["React", "JavaScript", "MUI", "Vite", "C#", "ASP.NET"],
    repoUrl: "https://github.com/SolorzanoE/inventory-qi"
  },
  {
    title: "Data tracking Cacao",
    description: "Sistema de gestión de variables para la trazabilidad del proceso de poscosecha del cacao.",
    image: cacaoImage,
    technologies: ["Java", "PostgreSQL"],
  }
]

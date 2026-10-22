import fractureTool from "../assets/img-projects/fracture-tool.webp";
import mate4k from "../assets/img-projects/mate4k.webp"
import airBomb from "../assets/img-projects/air-bomb.webp";
import brickBreaker from "../assets/img-projects/brick-breaker.webp";

export const proyectos = [
  {
    titulo: "Brick Breaker Mobile",
    descripcion: "Arkanoid-style brick breaker for mobile, playable in the browser",
    imagen: brickBreaker.src,
    tecnologias: ["Unity", "C#", "Android", "WebGL"],
    demo: "https://nixonbit3.itch.io/brick-breaker-mobile",
  },
  {
    titulo: "Air Bomb",
    descripcion: "Space Invaders-style arcade shooter for Android",
    imagen: airBomb.src,
    tecnologias: ["Unity", "C#", "Android", "DOTween"],
    demo: "https://nixonbit3.itch.io/air-bomb",
  },
  {
    titulo: "Fracture Tool (Naxo Studios)",
    descripcion: "Unity Asset Store tool that breaks any mesh into real physics fragments",
    imagen: fractureTool.src,
    tecnologias: ["Unity", "C#", "Editor tools", "Asset Store"],
    demo: "https://assetstore.unity.com/packages/tools/physics/fracture-tool-free-410372",
    demoLabel: "Get Free",
    codigo: "https://assetstore.unity.com/packages/tools/physics/fracture-tool-pro-410486",
    codigoLabel: "Get Pro",
  },
  {
    titulo: "Realistic 3D Mate Gourd",
    imagen:
      mate4k.src,
    tecnologias: ["Blender", "Substance painter", "Adobe"],
    demo: "https://www.artstation.com/artwork/8wnkNQ",
    //codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
  },

];

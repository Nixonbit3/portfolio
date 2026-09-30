import fractureTool from "../assets/img-projects/TFG.webp";
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
    titulo: "Fracture Tool for Unity (TFG)",
    descripcion: "Real-Time 3D Fragmentation System",
    imagen: fractureTool.src,
    tecnologias: ["Unity", "C#", "Github"],
    demo: "https://nixonbit3.github.io/FractureTool/",
    codigo: "https://github.com/Nixonbit3/FractureTool",
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

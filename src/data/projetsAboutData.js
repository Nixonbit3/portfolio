import imgNote from "../assets/img-projects/note-app.png";
import fractureTool from "../assets/img-projects/TFG.png";
import mate4k from "../assets/img-projects/mate4k.png"
import airBomb from "../assets/img-projects/air-bomb.jpg";

export const proyectos = [
  {
    titulo: "Air Bomb",
    descripcion: "Shooter arcade para Android al estilo Space Invaders",
    imagen: airBomb.src,
    tecnologias: ["Unity", "C#", "Android", "DOTween"],
    demo: "https://nixonbit3.itch.io/air-bomb",
  },
  {
    titulo: "Fracture Tool for Unity (TFG)",
    descripcion: "Sistema de Fragmentación 3D en Tiempo Real",
    imagen: fractureTool.src,
    tecnologias: ["Unity", "C#", "Github"],
    demo: "https://nixonbit3.github.io/FractureTool/",
    codigo: "https://github.com/Nixonbit3/FractureTool",
  },
  {
    titulo: "Mate 3D realista",
    imagen:
      mate4k.src,
    tecnologias: ["Blender", "Substance painter", "Adobe"],
    demo: "https://www.artstation.com/artwork/8wnkNQ",
    //codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
  },

];

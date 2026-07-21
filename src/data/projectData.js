import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import fractureTool from "../assets/img-projects/TFG.png";
import mate4k from "../assets/img-projects/mate4k.png"
import airBomb from "../assets/img-projects/air-bomb.jpg";

export const proyectos = [

    {
      titulo: "Air Bomb",
      descripcion: "Shooter arcade para Android al estilo Space Invaders: defiende la galaxia superando oleadas y persigue la puntuación máxima.",
      imagen: airBomb.src,
      tecnologias: ["Unity", "C#", "Android"],
      demo: "https://nixonbit3.itch.io/air-bomb",
      codigo: "",
      categoria: "Code",
    },
  {
      titulo: "Fracture Tool for Unity (TFG)",
      descripcion: "Sistema de Fragmentación 3D en Tiempo Real",
      imagen: fractureTool.src,
      tecnologias: ["Unity", "C#", "Github"],
      demo: "https://nixonbit3.github.io/FractureTool/",
      codigo: "https://github.com/Nixonbit3/FractureTool",
      categoria: "Code",
    },
    {
      titulo: "Mate 3D realista",
      descripcion: "Mate realista hecho en blender",
      imagen:
        mate4k.src,
      tecnologias: ["Blender", "Substance painter", "Adobe"],
      demo: "https://www.artstation.com/artwork/8wnkNQ",
      codigo: "",
      categoria: "Art",
    },
];

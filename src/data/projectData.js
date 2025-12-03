import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import fractureTool from "../assets/img-projects/TFG.png";
import mate4k from "../assets/img-projects/mate4k.png"

export const proyectos = [

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

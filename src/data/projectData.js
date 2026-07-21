import fractureTool from "../assets/img-projects/TFG.webp";
import mate4k from "../assets/img-projects/mate4k.webp"
import airBomb from "../assets/img-projects/air-bomb.webp";

export const proyectos = [

    {
      titulo: "Air Bomb",
      descripcion: "My first shipped game: a Space Invaders-style arcade shooter for Android, built solo from start to finish. View/Controller architecture, data-driven levels with ScriptableObjects, event-based communication, DOTween for game feel, JSON persistence and cross-scene audio.",
      imagen: airBomb.src,
      tecnologias: ["Unity", "C#", "Android", "DOTween"],
      demo: "https://nixonbit3.itch.io/air-bomb",
      codigo: "",
      categoria: "Code",
    },
  {
      titulo: "Fracture Tool for Unity (TFG)",
      descripcion: "Real-Time 3D Fragmentation System",
      imagen: fractureTool.src,
      tecnologias: ["Unity", "C#", "Github"],
      demo: "https://nixonbit3.github.io/FractureTool/",
      codigo: "https://github.com/Nixonbit3/FractureTool",
      categoria: "Code",
    },
    {
      titulo: "Realistic 3D Mate Gourd",
      descripcion: "Realistic yerba mate gourd modeled in Blender",
      imagen:
        mate4k.src,
      tecnologias: ["Blender", "Substance painter", "Adobe"],
      demo: "https://www.artstation.com/artwork/8wnkNQ",
      codigo: "",
      categoria: "Art",
    },
];

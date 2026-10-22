import fractureTool from "../assets/img-projects/fracture-tool.webp";
import mate4k from "../assets/img-projects/mate4k.webp"
import airBomb from "../assets/img-projects/air-bomb.webp";
import brickBreaker from "../assets/img-projects/brick-breaker.webp";

export const proyectos = [
    {
      titulo: "Brick Breaker Mobile",
      descripcion: "Arkanoid-style brick breaker rebuilt for mobile, playable in the browser and on Android. 5 procedurally generated levels, lives, high score, pause, music and SFX with volume control, analytics and rewarded ads. View/Controller architecture, event-driven gameplay and data-driven levels with ScriptableObjects.",
      imagen: brickBreaker.src,
      tecnologias: ["Unity", "C#", "Android", "WebGL", "DOTween"],
      demo: "https://nixonbit3.itch.io/brick-breaker-mobile",
      codigo: "",
      categoria: "Code",
    },

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
      titulo: "Fracture Tool (Naxo Studios)",
      descripcion: "Unity Asset Store tool, published under my brand Naxo Studios, that breaks any mesh into real physics fragments. Five fracture modes, material presets and baked fractures: a 4,000-triangle column breaks in ~3 ms instead of ~490 ms. Free and Pro editions built from one codebase. It started as my final degree project.",
      imagen: fractureTool.src,
      tecnologias: ["Unity", "C#", "Editor tools", "Asset Store"],
      demo: "https://assetstore.unity.com/packages/tools/physics/fracture-tool-free-410372",
      demoLabel: "Get Free",
      codigo: "https://assetstore.unity.com/packages/tools/physics/fracture-tool-pro-410486",
      codigoLabel: "Get Pro",
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

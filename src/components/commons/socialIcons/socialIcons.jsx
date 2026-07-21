import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaItchIo,
} from "react-icons/fa6";
import { SiSketchfab } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/nixon-correa-818388244/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/Nixonbit3"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="https://x.com/nixon_correa3/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Twitter"
      >
        <FaXTwitter className="h-7 w-7" />
      </a>

      <a
        href="https://nixonbit3.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Itch.io"
      >
        <FaItchIo className="h-7 w-7" />
      </a>

      <a
        href="https://sketchfab.com/nixoncorrea"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Sketchfab"
      >
        <SiSketchfab className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;

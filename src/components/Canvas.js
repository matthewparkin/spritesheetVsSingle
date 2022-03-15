import { useEffect } from "react";
import PixiGame from "../gameComponents/PixiGame";

export default function Canvas() {
  useEffect(() => {
    PixiGame();
  }, []);
  return (
    <div>
      <div className="canvas" />
    </div>
  );
}

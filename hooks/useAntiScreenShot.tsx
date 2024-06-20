import { useEffect } from "react";
const useAntiScreenshot = () => {
  useEffect(() => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "none";

    document.body.appendChild(overlay);

    const handleBlur = () => {
      overlay.style.display = "block";
    };

    const handleFocus = () => {
      overlay.style.display = "none";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.body.removeChild(overlay);
    };
  }, []);
};

export default useAntiScreenshot;

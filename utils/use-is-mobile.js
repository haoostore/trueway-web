import { useState, useEffect } from "react";
import useWindowSize from "./use-resize";

export default () => {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 1120;
    setIsMobile(isMobile);
  }, [width]);
  return isMobile;
};

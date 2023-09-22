"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiSunDimFill } from "react-icons/pi";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      className="flex h-10 w-10 items-center justify-center"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? (
        <PiSunDimFill className=" text-3xl text-yellow-400" />
      ) : (
        <BsFillMoonStarsFill className="text-xl text-gray-700" />
      )}
    </button>
  );
};
export default ToggleTheme;

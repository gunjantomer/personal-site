// "use client";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";

// export default function ThemeSwitcher() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", darkMode.toString());
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div
//       className="block text-xl absolute right-0 content-center text-slate-500
//         hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200
//         cursor-pointer"
//     >
//       <div className="dark:hidden" onClick={toggleDarkMode}>
//         <FontAwesomeIcon icon={faMoon} />
//       </div>
//       <div className="hidden dark:block" onClick={toggleDarkMode}>
//         <FontAwesomeIcon icon={faSun} />
//       </div>
//     </div>
//   );
// }

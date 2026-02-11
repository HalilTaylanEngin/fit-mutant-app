import React from "react";
import { useTheme } from "../hooks/useTheme";
import {
  MdOutlineLightMode,
  MdOutlineModeNight,
  MdChevronLeft,
  MdBolt,
  MdNotificationsNone,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({
  title,
  showBack = false,
  showThemeToggle = true,
  showBrand = false,
  showNotifications = false,
  className = "",
}) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header
      className={`flex items-center justify-between px-6  py-4 sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 ${className}`}
    >
      <div className="flex items-center gap-4">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 text-primary shadow-xs dark:shadow-none hover:bg-primary/10 transition-colors"
            aria-label="Geri dön"
          >
            <MdChevronLeft className="text-3xl" />
          </button>
        )}

        {showBrand ? (
          <div className="flex items-center gap-2">
            <div className="w-8  bg-primary rounded-lg flex items-center justify-center">
              <MdBolt className="text-background-dark font-bold text-xl" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter italic text-slate-900 dark:text-white">
              FIT MUTANT
            </span>
          </div>
        ) : (
          title && (
            <h1 className="font-bold tracking-tight text-lg uppercase italic text-slate-900 dark:text-white">
              {title}
            </h1>
          )
        )}
      </div>

      <div className="flex items-center gap-2">
        {showNotifications && (
          <button
            className="flex items-center justify-center rounded-full h-10 w-10 bg-white dark:bg-white/10 text-primary shadow-xs dark:shadow-none hover:bg-primary/10 transition-colors"
            aria-label="Bildirimler"
          >
            <MdNotificationsNone className="text-xl" />
          </button>
        )}

        {showThemeToggle && (
          <button
            className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-primary hover:bg-primary/10 transition-colors"
            onClick={toggleTheme}
            aria-label="Temayı değiştir"
            title="Tema değiştir"
          >
            {theme === "dark" ? (
              <MdOutlineLightMode size={24} />
            ) : (
              <MdOutlineModeNight size={24} />
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

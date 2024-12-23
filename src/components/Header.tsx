// src/components/Header.tsx
import React from "react";
import { GraduationCap, Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="header">
      {/* Left brand + search */}
      <div className="header__left">
        

        {/* Search */}
        <div className="header__search">
          <Search className="header__search-icon h-4 w-4" />
          <input
            type="text"
            placeholder="Search your course"
            className="header__search-input"
          />
        </div>
      </div>

      {/* Right side: notifications + profile */}
      <div className="header__actions">
        <button className="header__bell-btn">
          <Bell className="h-5 w-5" />
          <span className="header__badge">3</span>
        </button>

        <div className="header__profile">
          <div className="header__profile-text">
            <span className="header__profile-name">Adeline H. Dancy</span>
            <span className="header__profile-title">Lead Teacher</span>
          </div>
          <img
            className="header__avatar"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80"
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
}

// src/components/Sidebar.tsx
import React from "react";
import {
  Home,
  Users,
  BookOpen,
  HelpCircle,
  BarChart2,
  Settings as SettingsIcon,
} from "lucide-react";
import Vector from '../assets/Vector.png';
interface NavLink {
  label: string;
  icon: JSX.Element;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Dashboard", icon: <Home className="sidebar__icon" />, href: "#" },
  { label: "Students", icon: <Users className="sidebar__icon" />, href: "#" },
  { label: "Chapter", icon: <BookOpen className="sidebar__icon" />, href: "#" },
  { label: "Help", icon: <HelpCircle className="sidebar__icon" />, href: "#" },
  { label: "Reports", icon: <BarChart2 className="sidebar__icon" />, href: "#" },
  {
    label: "Settings",
    icon: <SettingsIcon className="sidebar__icon" />,
    href: "#",
  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={Vector} alt="Quyl Logo" className="sidebar__logo" style={{ width: '98px', height: 'auto' }} />
      <nav className="sidebar__nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="sidebar__link">
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

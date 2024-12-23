// src/pages/StudentsPage.tsx
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { StudentsTable } from "../components/StudentsTable";

export default function StudentsPage() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="flex-1">
          <StudentsTable />
        </main>
      </div>
    </div>
  );
}

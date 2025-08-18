"use client";

import { useState } from "react";
import { Home, FileText, Pen, Users, User, Settings, LogOut, Moon } from "lucide-react";

export default function SideNav() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="h-screen w-75 bg-red-clear flex flex-col items-center py-8 px-2 shadow-md">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-50 h-30 flex items-center justify-center">
                    <img src="/intern-flow-no-text.png" alt="Intern Flow Logo" className="w-full" />
                </div>
                <h1 className="text-xl font-bold text-red-700 mb-2">INTERN FLOW</h1>
            </div>

            {/* Menu */}
            <nav className="flex flex-col space-y-3 w-full px-6">
                <button className="flex items-center space-x-4 mb-6 text-primary font-bold">
                    <Home size={20} />
                    <span>Tableau de bord</span>
                </button>

                <button className="flex items-center space-x-4 mb-6 text-gray-500">
                    <Pen size={20} />
                    <span>Écrire un compte rendu</span>
                </button>

                <button className="flex items-center space-x-4 mb-6 text-gray-500">
                    <FileText size={20} />
                    <span>Liste des comptes rendus</span>
                </button>

                <button className="flex items-center space-x-4 mb-6 text-gray-500">
                    <Users size={20} />
                    <span>Liste d’élèves</span>
                </button>

                <button className="flex items-center space-x-4 mb-6 text-gray-500">
                    <Settings size={20} />
                    <span>Paramètres</span>
                </button>

                <button className="flex items-center space-x-4 mb-6 text-gray-500">
                    <User size={20} />
                    <span>Profil</span>
                </button>

                {/* Profil */}
                {/* <button className="flex items-center space-x-4 mb-6 text-white bg-gray-500 rounded-lg py-2 px-3 mt-4">
                    <User size={20} />
                    <span>Profil</span>
                </button> */}

            {/* Spacer */}

            {/* Dark Mode */}
            {/* <div className="flex items-center space-x-4 mb-6 text-gray-600 px-6 w-full">
                <Moon size={20} />
                <span>Dark Mode</span>
                <div className="ml-auto">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className="sr-only"
                        />
                        <div
                            className={`w-10 h-5 rounded-full ${darkMode ? "bg-red-600" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`h-5 w-5 bg-white rounded-full shadow transform transition ${darkMode ? "translate-x-5" : "translate-x-0"
                                    }`}
                            />
                        </div>
                    </label>
                </div>
            </div> */}

            <div className="flex-grow" />

            {/* Logout */}
            <button className="flex items-center space-x-4 mb-6 text-gray-500">
                <LogOut size={20} />
                <span>Se déconnecter</span>
            </button>
            </nav>
        </div>
    );
}

"use client";

import { useState } from "react";
import { Home, FileText, Pen, Users, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
    const [darkMode, setDarkMode] = useState(true);
    const pathname = usePathname();

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
                <Link 
                    href="/" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <Home size={20} />
                    <span>Tableau de bord</span>
                </Link>

                <Link 
                    href="/write-report" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/write-report" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <Pen size={20} />
                    <span>Écrire un compte rendu</span>
                </Link>

                <Link 
                    href="/reports-list" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/reports-list" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <FileText size={20} />
                    <span>Liste des comptes rendus</span>
                </Link>

                {/* <Link 
                    href="/students-list" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/students-list" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <Users size={20} />
                    <span>Liste d&apos;élèves</span>
                </Link> */}

                <Link 
                    href="/settings" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/settings" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <Settings size={20} />
                    <span>Paramètres</span>
                </Link>

                <Link 
                    href="/profile" 
                    className={`flex items-center space-x-4 mb-6 ${
                        pathname === "/profile" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                    }`}
                >
                    <User size={20} />
                    <span>Profil</span>
                </Link>

                {/* Spacer */}
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

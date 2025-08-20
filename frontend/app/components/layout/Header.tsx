"use client";

import { useState } from "react";

export default function Header() {

    // Nom de l'utilisateur connecté (données simples pour l'instant)
    const [userName, setUserName] = useState("Ilias");

    return (
        <h1 className="text-2xl text-gray-800 mb-6 p-3">Bienvenue {userName}</h1>

    );

}

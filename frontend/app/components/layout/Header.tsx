"use client";

import { useState } from "react";

export default function Header() {

    // Nom de l'utilisateur connecté (données simples pour l'instant)
    const [userName, setUserName] = useState("Ilias");

    return (
        <h1>Bienvenue {userName}</h1>
    
    );

}

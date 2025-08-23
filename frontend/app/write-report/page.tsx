"use client";

import { useState } from "react";
import Header from '@/components/layout/Header';
import InputField from "@/components/ui/InputField";
import TextAreaField from "@/components/ui/TextAreaField";
import DateField from "@/components/ui/DateField";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function WriteReportPage() {
  const [formData, setFormData] = useState({
    date: "",
    titre: "",
    texte: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Écrire un compte rendu</h1>
      
      <div className="bg-white rounded-lg p-3 animate-fadeInFromTop">
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <DateField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
          <InputField
            label="Titre"
            name="titre"
            placeholder="Titre du compte rendu"
            value={formData.titre}
            onChange={handleChange}
          />
          <TextAreaField
            label="Texte"
            name="texte"
            placeholder="Texte de votre compte rendu"
            value={formData.texte}
            onChange={handleChange}
          />

          <ButtonPrimary type="submit" className="w-full mt-3">
            Envoyer
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
}

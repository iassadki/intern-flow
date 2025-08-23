// GridCard.tsx
import { FileText, LucideIcon } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary"; // Assure-toi que le chemin est correct

interface Project {
    icon: LucideIcon;
    title: string;
    date: string;
    text: string;
}

const projects: Project[] = [
    {
        icon: FileText,
        title: "Premier jour",
        date: "2023-10-01",
        text: "Premier jour dans le monde du travail très enrichissant. On prend de l’expérience et on continue d’avancer...",
    },
    {
        icon: FileText,
        title: "Deuxième jour",
        date: "2023-10-02",
        text: "Deuxième jour dans le monde du travail très enrichissant. On prend de l’expérience et on continue d’avancer...",
    },
    {
        icon: FileText,
        title: "Troisième jour",
        date: "2023-10-03",
        text: "Troisième jour dans le monde du travail très enrichissant. On prend de l’expérience et on continue d’avancer...",
    },
];

const GridCard = () => {
    return (
        <div className="max-w-7xl mx-auto p-3">
            {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <div
                            key={`${index}`}
                            className="bg-rose-50 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition animate-fadeInFromTop cursor-pointer"
                        >

                            {/* Contenu de la card */}
                            <div className="p-8">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white mb-4">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-sm font-bold text-primary mb-2 block">
                                    {item.date}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <h3 className="text-sm text-gray-400 mb-6">
                                    {item.text}
                                </h3>
                                <div className="w-full grid grid-cols-2 gap-4">
                                    <ButtonPrimary
                                        // href={item.text}
                                        target="_blank"
                                        className="w-full block text-center"
                                    >
                                        Modifier
                                    </ButtonPrimary>
                                    <ButtonPrimary
                                        // href={item.text}
                                        target="_blank"
                                        className="w-full block text-center"
                                    >
                                        Supprimer
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">
                        Aucun projet trouvé.
                    </p>
                </div>
            )}
        </div>
    );
};

export default GridCard;

// GridCard.tsx
import { LucideIcon } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";

interface GridCardProps {
    icon: LucideIcon;
    title: string;
    date: string;
    contenu: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

const GridCard = ({ icon: Icon, title, date, contenu, onEdit, onDelete }: GridCardProps) => {
    return (
        <div className="bg-rose-50 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition animate-fadeInFromTop cursor-pointer">
            <div className="p-8">
                {/* Icône */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white mb-4">
                    <Icon size={20} />
                </div>

                {/* Date */}
                <span className="text-sm font-bold text-primary mb-2 block">{date}</span>

                {/* Titre */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

                {/* Contenu */}
                <h3 className="text-sm text-gray-400 mb-6">{contenu}</h3>

                {/* Boutons */}
                <div className="w-full grid grid-cols-2 gap-4">
                    <ButtonPrimary onClick={onEdit} className="w-full block text-center">
                        Modifier
                    </ButtonPrimary>
                    <ButtonPrimary onClick={onDelete} className="w-full block text-center">
                        Supprimer
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default GridCard;

import { Pencil, List, Users, LucideIcon } from "lucide-react";
import Link from "next/link";

type CardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
};

export default function Card({ icon: Icon, title, description, href }: CardProps) {
    return (
        <Link href={href} className="block h-full">
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-rose-50 p-8 shadow-sm hover:shadow-md cursor-pointer transition h-full min-h-[200px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white">
                    <Icon size={20} />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </Link>
    );
}
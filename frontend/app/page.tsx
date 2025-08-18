import { redirect } from 'next/navigation';

export default function Home() {
  // Rediriger automatiquement vers le dashboard
  redirect('/dashboard');
}
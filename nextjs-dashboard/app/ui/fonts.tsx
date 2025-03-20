import { Inter } from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'], // Spécifiez les poids de police
  });
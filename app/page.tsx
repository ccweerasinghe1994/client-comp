import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={inter.className}>
			<h1 className="text-white text-4xl md:text-8xl flex justify-center items-center h-screen">
				Search Any Thing you want
			</h1>
		</main>
	);
}

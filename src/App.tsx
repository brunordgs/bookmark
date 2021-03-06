import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactUs from './components/Sections/ContactUs';
import Download from './components/Sections/Download';
import Faq from './components/Sections/Faq';
import Features from './components/Sections/Features';
import Hero from './components/Sections/Hero';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main className="overflow-hidden">
				<section className="relative mt-14 lg:mt-28">
					<Hero />
				</section>

				<section className="bg-zinc-100 py-20 mt-20 lg:mt-60">
					<Features />
				</section>

				<section className="py-20 mt-20">
					<Download />
				</section>

				<section className="bg-gray-100 py-20">
					<Faq />
				</section>

				<section className="bg-indigo-600 text-gray-100 py-20">
					<ContactUs />
				</section>

				<section className="bg-slate-900 py-8">
					<Footer />
				</section>
			</main>
		</>
	);
}

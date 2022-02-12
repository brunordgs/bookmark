import Button from './components/Button';
import Navbar from './components/Navbar';
import heroBackground from '../public/assets/images/hero-bg.png';
import Features from './components/Sections/Features';
import Heading from './components/Typography/Heading';

export default function App() {
	return (
		<>
			{/* Header */}
			<Navbar />

			<main className="overflow-hidden">
				{/* Hero */}
				<section className="relative">
					<div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
						<div className="flex flex-1 flex-col items-center lg:items-start">
							<Heading
								tag="h2"
								color="text-slate-800"
								size="4xl"
								weight="medium"
								className="text-center lg:text-left mb-6"
							>
								A Simple Boomark Manager
							</Heading>

							<p className="text-slate-500 text-lg text-center lg:text-left mb-6">
								A clean and simple interface to organize your favourite websites. Open a new browser
								tab and see your sites load instantly. Try it for free.
							</p>

							<div className="flex justify-center flex-wrap gap-6">
								<Button type="button">Get it on Chrome</Button>
								<Button type="button" variant="secondary">
									Get it on Firefox
								</Button>
							</div>
						</div>

						<div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
							<img
								src={heroBackground}
								className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
								alt="Hero"
							/>
						</div>
					</div>

					{/* Rounded rectangule */}
					<div className="hidden md:block bg-indigo-500 rounded-l-full absolute w-2/4 h-80 top-32 right-0 lg:-bottom-28 lg:-right-36" />
				</section>

				<Features />
			</main>
		</>
	);
}

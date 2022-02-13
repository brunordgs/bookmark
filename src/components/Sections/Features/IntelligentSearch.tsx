import featuresTab2 from '../../../../public/assets/images/illustration-features-tab-2.png';
import Button from '../../Button';
import RoundedRectangule from '../../Misc/RoundedRectangule';
import Heading from '../../Typography/Heading';

export default function IntelligentSearch() {
	return (
		<div className="relative my-20 lg:my-52">
			<div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
				{/* Image */}
				<div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
					<img
						src={featuresTab2}
						className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
						alt="Second feature"
					/>
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col items-center lg:items-start">
					<Heading tag="h1" size="3xl" color="text-slate-800" exactSize>
						Intelligent search
					</Heading>

					<p className="text-slate-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
						Our powerful search feature will help you find saved sites in no time at all. No need to
						crawl through all of your bookmarks.
					</p>

					<Button type="button">More info</Button>
				</div>
			</div>

			<RoundedRectangule position="right" />
		</div>
	);
}

import Button from '../../Button';
import featuresTab3 from '../../../../public/assets/images/illustration-features-tab-3.png';
import RoundedRectangule from '../../Misc/RoundedRectangule';

export default function ShareBookmarks() {
	return (
		<div className="relative">
			<div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
				{/* Image */}
				<div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
					<img
						src={featuresTab3}
						className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
						alt="First feature"
					/>
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col items-center lg:items-start">
					<h1 className="text-3xl text-slate-800">Share your bookmarks</h1>

					<p className="text-slate-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
						Easily share your bookmarks and collections with others. Create a shareable link that
						you can send at the click of a button.
					</p>

					<Button type="button">More info</Button>
				</div>
			</div>

			<RoundedRectangule position="left" />
		</div>
	);
}

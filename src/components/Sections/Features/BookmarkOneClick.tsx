import featuresTab1 from '../../../../public/assets/images/illustration-features-tab-1.png';
import Button from '../../Button';
import RoundedRectangule from '../../Misc/RoundedRectangule';

export default function BookmarkOneClick() {
	return (
		<div className="relative mt-20 lg:mt-24">
			<div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
				{/* Image */}
				<div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
					<img
						src={featuresTab1}
						className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
						alt="First feature"
					/>
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col items-center lg:items-start">
					<h1 className="text-3xl text-slate-800">Bookmark in one click</h1>

					<p className="text-slate-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
						Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
						complete control over how you manage your favourite sites.
					</p>

					<Button type="button">More info</Button>
				</div>
			</div>

			<RoundedRectangule position="left" />
		</div>
	);
}

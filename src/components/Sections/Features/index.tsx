import BookmarkOneClick from './BookmarkOneClick';
import IntelligentSearch from './IntelligentSearch';
import ShareBookmarks from './ShareBookmarks';

export default function Features() {
	return (
		<>
			{/* Features */}
			<section className="bg-zinc-100 py-20 mt-20 lg:mt-60">
				{/* Heading */}
				<div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
					<h1 className="text-3xl text-center text-slate-800">Features</h1>

					<p className="text-center text-slate-500 mt-4">
						Our aim is to make it quick and easy for you to access your favourite websites. Your
						bookmarks sync between your devices so you can access them on the go.
					</p>
				</div>

				{/* Feature 1 */}
				<BookmarkOneClick />

				{/* Feature 2 */}
				<IntelligentSearch />

				{/* Feature 3 */}
				<ShareBookmarks />
			</section>
		</>
	);
}

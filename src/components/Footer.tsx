import boomarkLogoWhite from '../../public/assets/images/logo-bookmark-white.png';

export default function Footer() {
	const footerLinkItems = [{ text: 'Features' }, { text: 'Pricing' }, { text: 'Contact' }];

	return (
		<div className="container flex flex-col md:flex-row items-center">
			<div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
				{/* Logo */}
				<img src={boomarkLogoWhite} alt="Bookmark logo" />

				{/* Footer link items */}
				<ul className="flex text-gray-100 uppercase gap-12 text-xs">
					{footerLinkItems.map(({ text }) => (
						<li key={text} className="cursor-pointer hover:text-slate-500">
							{text}
						</li>
					))}
				</ul>
			</div>

			{/* Social media icons */}
			<div className="flex gap-10 mt-12 md:mt-0 text-2xl text-white">
				<i className="fab fa-facebook-square cursor-pointer"/>
				<i className="fab fa-twitter cursor-pointer"/> 
			</div>
		</div>
	);
}

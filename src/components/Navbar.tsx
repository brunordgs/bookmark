import bookmarkLogo from '../../public/assets/images/logo-bookmark.svg';
import Button from './Button';

export default function Navbar() {
	return (
		<header>
			<nav className="container flex items-center py-4 mt-4 sm:mt-12">
				{/* Logo */}
				<div className="py-1">
					<img src={bookmarkLogo} alt="Bookmark" />
				</div>

				<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-800 uppercase text-xs">
					<li className="cursor-pointer hover:text-slate-500">Features</li>
					<li className="cursor-pointer hover:text-slate-500">Pricing</li>
					<li className="cursor-pointer hover:text-slate-500">Contact</li>

					<Button type="button" variant="danger" className="uppercase px-7">
						Login
					</Button>
				</ul>

				{/* Hamburger menu */}
				<div className="sm:hidden flex flex-1 justify-end">
					<i className="text-2xl fas fa-bars" />
				</div>
			</nav>
		</header>
	);
}

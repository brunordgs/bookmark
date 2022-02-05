import React from 'react';
import bookmarkLogo from '../public/assets/images/logo-bookmark.svg';

export default function App() {
	return (
		<header>
			<nav className="container flex items-center py-4 mt-4 sm:mt-12">
				{/* Logo */}
				<div className="py-1">
					<img src={bookmarkLogo} alt="Bookmark" />
				</div>

				<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
					<li className="cursor-pointer hover:text-bookmark-gray">Features</li>
					<li className="cursor-pointer hover:text-bookmark-gray">Pricing</li>
					<li className="cursor-pointer hover:text-bookmark-gray">Contact</li>

					<button
						type="button"
						className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
					>
						Login
					</button>
				</ul>

				{/* Hamburger menu */}
				<div className="sm:hidden flex flex-1 justify-end">
					<i className="fas fa-bars" />
				</div>
			</nav>
		</header>
	);
}

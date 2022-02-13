import Card from './Card';
import logoChrome from '../../../../../public/assets/images/logo-chrome.svg';
import logoFirefox from '../../../../../public/assets/images/logo-firefox.svg';
import logoOpera from '../../../../../public/assets/images/logo-opera.svg';

export default function Cards() {
	const cards = [
		{
			name: 'chrome',
			logo: logoChrome,
			title: 'Add to Chrome',
			description: 'Minimum version 62',
		},
		{
			name: 'firefox',
			logo: logoFirefox,
			title: 'Add to Firefox',
			description: 'Minimum version 62',
		},
		{
			name: 'opera',
			logo: logoOpera,
			title: 'Add to Opera',
			description: 'Minimum version 62',
		},
	];

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
			{cards.map(({ name, logo, title, description }) => (
				<Card key={name} name={name} logo={logo} title={title} description={description} />
			))}
		</div>
	);
}

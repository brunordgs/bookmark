import Button from '../../../Button';
import Heading from '../../../Typography/Heading';

type Props = {
	logo: string & React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	name: string;
	title: string;
	description: string;
};

export default function Card({ logo, name, title, description }: Props) {
	const formattedName = name.split('')[0].toUpperCase() + name.substring(1, name.length);

	return (
		<div className="flex flex-col rounded-md shadow-md">
			<div className="p-6 flex flex-col items-center">
				{/* Logo */}
				<img src={logo} alt={`${formattedName} logo`} />

				<Heading tag="h3" size="lg" color="text-slate-800" className="mt-5 mb-2" exactSize>
					{title}
				</Heading>

				<p className="mb-2 text-slate-500 font-light">{description}</p>
			</div>

			{/* Divider */}
			<hr className="border-b border-gray-100" />

			<div className="flex p-6">
				<Button className="flex-1">Add &amp; install extension</Button>
			</div>
		</div>
	);
}

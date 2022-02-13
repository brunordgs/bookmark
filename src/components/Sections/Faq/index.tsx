import Button from '../../Button';
import Heading from '../../Typography/Heading';
import FaqItem from './FaqItem';

export default function Faq() {
	const faqItems = [
		{ title: 'What is a Bookmark?' },
		{ title: 'How can I request a new browser?' },
		{ title: 'Is there a mobile app?' },
		{ title: 'What about other Chromium browsers?' },
	];

	return (
		<div className="container">
			<div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
				<Heading tag="h1" color="text-slate-800" size="3xl" className="text-center" exactSize>
					Frequently Asked Questions
				</Heading>

				<p className="text-center text-slate-500 mt-4">
					Here are some of our FAQs. If you have any other questions you'd like answered please feel
					free to email us.
				</p>
			</div>

			<div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
				{faqItems.map(({ title }) => (
					<FaqItem key={title} title={title} />
				))}

				<Button className="flex self-center mt-12">More info</Button>
			</div>
		</div>
	);
}

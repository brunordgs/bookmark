import Button from "../Button";
import Heading from "../Typography/Heading";

export default function ContactUs() {
	return (
		<div className="container">
			<div className="sm:w-3/4 lg:w-2/4 mx-auto text-center">
				<p className="uppercase font-light mb-8">35,000+ already joined</p>

				<Heading tag="h1" size="3xl" color="text-gray-100" exactSize>
					Stay up-to-date with what we're doing
				</Heading>

				<div className="flex flex-col sm:flex-row gap-6 mt-8">
					<input
						type="text"
						placeholder="Enter your email address"
						className="focus:outline-none flex-1 p-3 rounded-md text-slate-900"
					/>

					<Button variant="danger">Contact us</Button>
				</div>
			</div>
		</div>
	);
}

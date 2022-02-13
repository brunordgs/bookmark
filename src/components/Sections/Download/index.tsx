import Heading from '../../../components/Typography/Heading';
import Cards from './Cards';

export default function Download() {
	return (
		<>
			<div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
				<Heading tag="h1" color="text-slate-800" size="3xl" className="text-center" exactSize>
					Download the extension
				</Heading>

				<p className="text-center text-slate-500 mt-4">
					We've got more browsers in the pipeline. Please do let us know if you've got a favourite
					you'd like us to prioritize.
				</p>
			</div>

			{/* Cards */}
			<div className="mt-16">
				<Cards />
			</div>
		</>
	);
}

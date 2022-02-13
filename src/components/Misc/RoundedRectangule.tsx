import clsx from 'clsx';

export default function RoundedRectangule({ position }: { position: 'left' | 'right' }) {
	return (
		<div
			className={clsx(
				position === 'right' ? 'rounded-l-full -right-36' : 'rounded-r-full -left-36',
				'hidden lg:block bg-indigo-500',
				'absolute w-2/4 h-80 top-32 -bottom-24',
			)}
		/>
	);
}

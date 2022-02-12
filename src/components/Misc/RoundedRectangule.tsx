export default function RoundedRectangule({ position = 'right' }: { position?: 'left' | 'right' }) {
	return (
		<div
			className={`hidden lg:block bg-indigo-500 rounded-${
				position === 'right' ? 'l' : 'r'
			}-full absolute w-2/4 h-80 top-32 -bottom-24 -${position}-36`}
		/>
	);
}

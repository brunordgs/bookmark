import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { FontWeights } from '../../services/enums/FontWeights';
import { Headings } from '../../services/enums/Headings';

// NOTE: Do not insert into enums folder because you can not access it from other file
enum FontSizes {
	'xs',
	'sm',
	'base',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
	'9xl',
}

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	tag: keyof typeof Headings;
	size: keyof typeof FontSizes;
	weight?: keyof typeof FontWeights;
	exactSize?: boolean;
	color: string;
}

export default function Heading({
	tag: Tag,
	size,
	color,
	weight = 'normal',
	exactSize,
	children,
	className,
	...props
}: Props) {
	const smallSize = size !== 'xs' ? FontSizes[FontSizes[size] - 1] : 'xs';
	const largeSize = FontSizes[FontSizes[size] + 1];

	return (
		<Tag
			className={clsx(
				exactSize
					? `text-${size}`
					: `text-${smallSize ?? size} md:text-${size} lg:text-${largeSize ?? size}`,
				color,
				`font-${weight}`,
				className,
			)}
			{...props}
		>
			{children}
		</Tag>
	);
}

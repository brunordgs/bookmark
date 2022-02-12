import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { FontWeights } from '~/services/enums/FontWeights';
import { Headings } from '~/services/enums/Headings';

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
	weight: keyof typeof FontWeights;
	color: string;
}

export default function Heading({ tag: Tag, size, color, weight, children, className }: Props) {
	return (
		<Tag
			className={clsx(
				`text-${size !== 'xs' ? FontSizes[FontSizes[size] - 1] : 'xs'} md:text-${size} lg:text-${
					FontSizes[FontSizes[size] + 1]
				} ${color} font-${weight}`,
				className,
			)}
		>
			{children}
		</Tag>
	);
}

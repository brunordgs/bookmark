import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const VARIANTS = {
	primary: {
		base: 'bg-indigo-600 text-gray-100 hover:bg-indigo-500 hover:text-white',
	},
	secondary: {
		base: 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-black',
	},
	danger: {
		base: 'bg-red-500 text-gray-100 hover:bg-red-400 hover:text-white',
	},
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof VARIANTS;
	children: ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: Props) {
	const variantStyles = VARIANTS[variant] || VARIANTS.primary;

	return (
		<button
			className={clsx(variantStyles.base, 'shadow-md py-3 px-6 rounded-md font-medium', className)}
			{...props}
		>
			{children}
		</button>
	);
}

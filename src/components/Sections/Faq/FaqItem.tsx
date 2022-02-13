export default function FaqItem({ title }: { title: string }) {
	return (
		<div className="flex items-center border-b py-4">
			<span className="flex-1">{title}</span>
			<i className="text-indigo-600 fas fa-chevron-down" />
		</div>
	);
}

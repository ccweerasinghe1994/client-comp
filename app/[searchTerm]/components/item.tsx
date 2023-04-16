import Link from 'next/link';
import { ReactNode } from 'react';

export default function Item({ result }: { result: IResult }) {
	const { title, extract, pageid, thumbnail } = result;
	const ItemTextColumn: ReactNode = (
		<div className="flex flex-col justify-center">
			<h2 className="text-blue-500 underline">
				<Link
					href={`https://en.wikipedia.org/?curid=${pageid}`}
					target="_blank"
				>
					🚀 {title}
				</Link>
			</h2>
			<p>{extract}</p>
		</div>
	);

	const content: ReactNode = result?.thumbnail?.source ? (
		<article className="m-4 max-w-lg border-2 border-blue-200 mb-10 p-6">
			<div className="flex flex-row gap-4">
				<div className="flex flex-col justify-center">
					<img
						src={thumbnail?.source}
						alt={title}
						width={thumbnail?.width}
						height={thumbnail?.height}
						loading="lazy"
					/>
				</div>
				{ItemTextColumn}
			</div>
		</article>
	) : (
		<article className="m-4 max-w-lg border-2 border-blue-200 mb-10 p-6">
			{ItemTextColumn}
		</article>
	);
	return content;
}

import getWikiResults from '@/lib/getWikiResults';
import { ReactNode } from 'react';
import Item from './components/item';

interface ISearchPage {
	params: {
		searchTerm: string;
	};
}

// let's generate metadata for this page
export const generateMetadata = async ({
	params: { searchTerm }
}: ISearchPage) => {
	const searchResults = await getWikiResults(searchTerm);
	const data = searchResults?.query?.pages;
	const displayTerm = searchTerm.replaceAll('%20', ' ');

	if (!data) {
		return {
			title: `No results for ${displayTerm}`,
			description: `No results for ${displayTerm}`
		};
	} else {
		return {
			title: displayTerm,
			description: `search results for ${displayTerm}`
		};
	}
};

export default async function SearchResultsPage({
	params: { searchTerm }
}: ISearchPage) {
	console.log('searchTerm', searchTerm);
	const searchResults = await getWikiResults(searchTerm);
	const data = searchResults?.query?.pages;

	const content: ReactNode = (
		<main className={'bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'}>
			{data ? (
				Object.values(data).map((result) => (
					<Item key={result.pageid} result={result} />
				))
			) : (
				<h1 className={'text-4xl text-center text-slate-500'}>
					No results found
				</h1>
			)}
		</main>
	);
	return content;
}

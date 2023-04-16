export default async function getWikiResults(searchTerm: string) {

    const searchParams = new URLSearchParams({

        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        origin: '*',
        format: 'json',
    });

    const response = await fetch(`https://en.wikipedia.org/w/api.php?` + searchParams);
    const data = await response.json();
    console.log('data', data)
    return data as ISearchResults | undefined

}
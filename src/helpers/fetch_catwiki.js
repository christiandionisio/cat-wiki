const baseUrl = process.env.REACT_APP_API_CATWIKI_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const fetchCatWiki = (endpoint, method ) => {
    const url = `${baseUrl}/${endpoint}`;
    return fetch(url, {
        method,
        headers: {
            'x-api-key': apiKey
        }
    })
}

export {
    fetchCatWiki
}
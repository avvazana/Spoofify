export const fetchAllAlbums = (searchQuery) => {

  return $.ajax({
    method: 'GET',
    url: parseSearchTerms(searchQuery)
  });
};

export const fetchSingleAlbum = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: 'https://itunes.apple.com/search?',
    data: {
      country: 'US',
      media: 'podcast',
      limit: 10,
      lang: 'en_us',
      term: searchQuery
    }
  });
};

const parseSearchTerms = (searchQuery) => {

  let query = "";
  const searchString = searchQuery.search_term.split(" ").join("+");
  const searchParams = {
    country: 'US',
    media: 'podcast',
    limit: 10,
    lang: 'en_us',
    term: searchString
  };
  for (let key in searchParams)
    {
      query = query + key + "=" + searchParams[key] + "&";
    }
  return `https://itunes.apple.com/search?${query}`.slice(0, -1);
};

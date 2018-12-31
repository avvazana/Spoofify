export const fetchAllAlbums = (searchQuery) => {
  
  if (!searchQuery.search_term) {
    searchQuery.search_term = randomizeQuery();
  }
  let ex = "";
  return $.ajax({
    method: 'GET',
    url: parseSearchTerms(searchQuery)
  });
};

export const fetchSingleAlbum = (id) => {
  return $.ajax({
    method: 'GET',
    url: parseSearchId(id)
  });
};

const parseSearchId = (id) => {
  let query = "";
  const searchParams = {
    id: id,
    dataType: 'jsonp',
    entity: 'song',
    media: 'music'
  };
  for (let key in searchParams)
  {
    query = query + key + "=" + searchParams[key] + "&";
  }

  return `https://itunes.apple.com/lookup?${query}`.slice(0, -1);
};

const parseSearchTerms = (searchQuery) => {
  let query = "";
  const searchString = searchQuery.search_term.split(" ").join("+");
  const searchParams = {
    country: 'US',
    media: 'music',
    entity: 'album',
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

const randomizeQuery = () => {
  const commonWords = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
  const randomWord = commonWords[Math.floor(Math.random()*commonWords.length)];
  return randomWord;
};

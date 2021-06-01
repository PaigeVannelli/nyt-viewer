export const getAllArticles = (searchTerm) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${searchTerm}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    .then(response => response.json())
}
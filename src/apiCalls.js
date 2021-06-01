export const getAllArticles = (searchTerm) => {
  console.log(process.env.REACT_APP_NYT_KEY)
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${searchTerm}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
}
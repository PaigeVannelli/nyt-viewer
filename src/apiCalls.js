require('dotenv').config()

export const getAllArticles = (searchTerm) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${searchTerm}.json?api-key=HO3AUxbXRQMVIFSnaIMUSynEt6qPI2OH`)
    .then(response => response.json())
    .then(data => console.log(data))
}
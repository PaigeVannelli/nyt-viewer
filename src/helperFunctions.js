export const dataCleaner = (data) => {
  let cleanedData = data.results.map((article, index) => {
    let cleanedArticle = {}
    cleanedArticle.id = index
    cleanedArticle.abstract = article.abstract
    cleanedArticle.byline = article.byline
    cleanedArticle.publishedDate = article.published_date
    cleanedArticle.url = article.url
    cleanedArticle.title = article.title
    if (article.multimedia?.length >= 4) {
      cleanedArticle.photo = article.multimedia[4].url
      cleanedArticle.photoCaption = article.multimedia[4].caption
      cleanedArticle.background = article.multimedia[0].url
    }
    return cleanedArticle
  })
  return cleanedData
}
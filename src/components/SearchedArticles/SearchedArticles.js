import ArticleOverview from '../ArticleOverview/ArticleOverview'

const SearchedArticles = ({ searchedArticles, setCurrentArticle }) => {
  let articles
  let background
  let thumbnail

  if (searchedArticles) {
    articles = searchedArticles.map((article, index) => {
      if (article.multimedia) {
        background = article.multimedia?.filter(photo => {
          return photo.format === 'superJumbo'
        })
        thumbnail = article.multimedia?.filter(photo => {
          return photo.format === 'Standard Thumbnail'
        })
      }

      return (
        <ArticleOverview 
          key={index}
          title={article.title}
          abstract={article.abstract}
          url={article.url}
          byline={article.byline}
          date={article.published_date}
          background={background[0].url}
          thumbnail={thumbnail[0].url}
          setCurrentArticle={setCurrentArticle}
        />
      )
    })
  }

  return (
    <div className='all-articles'>
      {articles}
    </div>
  )
}

export default SearchedArticles;
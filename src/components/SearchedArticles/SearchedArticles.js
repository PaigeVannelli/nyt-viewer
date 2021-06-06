import ArticleOverview from '../ArticleOverview/ArticleOverview';
import './SearchedArticles.css'

const SearchedArticles = ({ searchedArticles, setCurrentArticle }) => {
  let articles
  // let background
  // let thumbnail
  // let threeByTwo

  if (searchedArticles) {
    articles = searchedArticles.map((article, index) => {
      // if (article.multimedia) {
      //   background = article.multimedia?.filter(photo => {
      //     return photo.format === 'superJumbo'
      //   })
      //   thumbnail = article.multimedia?.filter(photo => {
      //     return photo.format === 'Standard Thumbnail'
      //   })
      //   threeByTwo = article.multimedia?.filter(photo => {
      //     return photo.format === 'mediumThreeByTwo210'
      //   })
      // }

      return (
        <ArticleOverview 
          key={index}
          title={article.title}
          abstract={article.abstract}
          url={article.url}
          byline={article.byline}
          date={article.publishedDate}
          photo={article.photo}
          // thumbnail={thumbnail[0].url}
          // threeByTwo={threeByTwo[0].url}
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
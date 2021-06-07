import ArticleOverview from '../ArticleOverview/ArticleOverview';
import './SearchedArticles.css'

const SearchedArticles = ({ searchedArticles, setCurrentArticle }) => {
  let articles

  if (searchedArticles) {
    articles = searchedArticles.map(article => {
      return (
        <ArticleOverview 
          id={article.id}
          key={article.id}
          title={article.title}
          byline={article.byline}
          photo={article.photo}
          photoCaption={article.photoCaption}
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
import SearchForm from '../SearchForm/SearchForm';
import SearchedArticles from '../SearchedArticles/SearchedArticles';

const LandingPage = ({ setSearchTerm, searchedArticles, setCurrentArticle }) => {
  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <SearchedArticles searchedArticles={searchedArticles} setCurrentArticle={setCurrentArticle}/>
    </div>
  )
}

export default LandingPage;
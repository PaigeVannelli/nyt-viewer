import SearchForm from '../SearchForm/SearchForm';
import SearchedArticles from '../SearchedArticles/SearchedArticles';

const LandingPage = ({ setSearchTerm, searchedArticles }) => {
  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <SearchedArticles searchedArticles={searchedArticles}/>
    </div>
  )
}

export default LandingPage;
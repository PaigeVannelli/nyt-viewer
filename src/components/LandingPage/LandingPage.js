import SearchForm from '../SearchForm/SearchForm';
import SearchedArticles from '../SearchedArticles/SearchedArticles';

const LandingPage = ({ setSearchTerm }) => {
  return(
    <div>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <SearchedArticles />
    </div>
  )
}

export default LandingPage;
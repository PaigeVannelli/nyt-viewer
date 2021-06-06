import './DetailedArticle.css'
import { Redirect } from 'react-router-dom';

const DetailedArticle = ({ currentArticle }) => {
  if (currentArticle) {
    return (
      <div>
        <article 
          className='article' 
          style={{
            backgroundImage: `url(${currentArticle.background})`,
            backgroundSize: 'cover',
          }}>
          <div className='article-details'>
            <h1>{currentArticle.title}</h1>
            <p>{currentArticle.byline}</p>
            <p>{currentArticle.abstract}</p>
            <p>{currentArticle.date}</p>
            <a href={currentArticle.url} className='link'>Click Here for Full Article</a>
          </div>
        </article>
      </div>
    )
  } else {
    return (
      <Redirect to='/' />
    )
  }
}

export default DetailedArticle
import './DetailedArticle.css'

const DetailedArticle = ({ currentArticle }) => {
  return (
    <div>
      <article 
        className='article' 
        style={{
          backgroundImage: `url(${currentArticle.photo})`,
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
}

export default DetailedArticle
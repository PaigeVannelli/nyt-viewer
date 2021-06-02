const DetailedArticle = ({ currentArticle }) => {
  return (
    <div>
      <article >
        <img src={currentArticle.thumbnail} />
        <div>
          <h1>{currentArticle.title}</h1>
          <p>{currentArticle.byline}</p>
          <p>{currentArticle.abstract}</p>
          <p>{currentArticle.date}</p>
        </div>
      </article>
    </div>
  )
}

export default DetailedArticle
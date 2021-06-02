const ArticleOverview = ({ key, title, abstract, url, byline, date, background, thumbnail }) => {
  return (
    <article>
      <img src={thumbnail} />
      <div>
        <h1>{title}</h1>
        <p>{byline}</p>
        <p>{abstract}</p>
        <p>{date}</p>
      </div>
    </article>
  )
}

export default ArticleOverview;
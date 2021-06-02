import { Link } from 'react-router-dom'

// const ArticleOverview = ({ key, title, abstract, url, byline, date, background, thumbnail, setCurrentArticle }) => {
const ArticleOverview = (props) => {
  return (
    <Link to='/article'>
      <article onClick={() => props.setCurrentArticle(props)}>
        <img src={props.thumbnail} />
        <div>
          <h1>{props.title}</h1>
          <p>{props.byline}</p>
          <p>{props.abstract}</p>
          <p>{props.date}</p>
        </div>
      </article>
    </Link>
  )
}

export default ArticleOverview;
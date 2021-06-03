import { Link } from 'react-router-dom'
import './ArticleOverview.css'

// const ArticleOverview = ({ key, title, abstract, url, byline, date, background, thumbnail, setCurrentArticle }) => {
const ArticleOverview = (props) => {
  return (
    <Link to='/article' onClick={() => props.setCurrentArticle(props)} className='article-overview'>
      <img src={props.thumbnail} alt={props.title} className='thumbnail'/>
      <div>
        <p>{props.title}</p>
        <p>{props.byline}</p>
      </div>
    </Link>
  )
}

export default ArticleOverview;
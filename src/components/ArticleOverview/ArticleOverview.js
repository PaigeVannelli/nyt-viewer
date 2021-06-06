import { Link } from 'react-router-dom'
import './ArticleOverview.css'

const ArticleOverview = (props) => {
  return (
    <Link 
      to='/article' 
      onClick={() => props.setCurrentArticle(props)} 
      className='article-overview' 
      style={{
        backgroundImage: `url(${props.photo})`,
        backgroundSize: 'cover',
      }}
    >
      <div className='details'>
        <p>{props.title}</p>
        <p>{props.byline}</p>
      </div>
    </Link>
  )
}

export default ArticleOverview;
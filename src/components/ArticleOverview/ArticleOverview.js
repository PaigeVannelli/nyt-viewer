import { Link } from 'react-router-dom'
import './ArticleOverview.css'

const ArticleOverview = (props) => {
  return (
    <Link 
      to='/article' 
      onClick={() => props.setCurrentArticle(props)} 
      className='article-overview' 
      style={{
        backgroundImage: `url(${props.threeByTwo})`,
        backgroundSize: 'cover',
      }}
    >
      {/* <img src={props.thumbnail} alt={props.title} className='thumbnail'/> */}
      <div className='details'>
        <p>{props.title}</p>
        <p>{props.byline}</p>
      </div>
    </Link>
  )
}

export default ArticleOverview;
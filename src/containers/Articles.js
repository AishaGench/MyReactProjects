import React,{useContext} from "react"
import Article from '../components/Article/Article'
import {ArticleContext} from '../context/articleContext'

// const initialState = [
//     { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
//     { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
//   ]

const Articles = () => {
//const [article, setArticle] = useState(initialState)
const {articles}= useContext(ArticleContext)

  return (
    <div>
      {articles.map((element,index)=>{return <Article key={index} element = {element}/>})}
    </div>
  )
}

export default Articles
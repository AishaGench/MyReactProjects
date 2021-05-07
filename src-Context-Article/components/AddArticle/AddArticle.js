import React,{useState,useContext} from "react";
import "./AddArticle.css";
import {ArticleContext}  from '../../context/articleContext'

const AddArticle = () => {
 const [article, setArticle] = useState({})
 const { setArticles} = useContext(ArticleContext)

 const handleArticleData = (e) =>{
   
  //  if(e.target.id === 'body'){
  //    setArticle({...article,
  //     body: e.target.value 
  //   })
  //  }else if(e.target.id === 'title'){
  //   setArticle({...article,
  //     title: e.target.value 
  //   })
  //  }

  setArticle({...article,
    [e.target.id]:e.target.value
  })

 }
 const addNewArticle=(e)=>{
   e.preventDefault() 
   
   setArticles({ type: "ADD_ARTICLE", article })
   
 } 

  return (
    <form className="add-article" onSubmit={addNewArticle}>
      <input onChange ={handleArticleData}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input onChange ={handleArticleData}
        type="text"
        id="body"
        placeholder="Body"
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;

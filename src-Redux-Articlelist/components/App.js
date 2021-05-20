import React from "react";
import {connect} from 'react-redux'

function Articles(props){
  return(
    <div>
      <ul>
        {props.articles.filter((element)=>{return element.title.toLowerCase().includes(props.searchTerm.toLowerCase())})
        .map((item)=>{
          return <li key={item.id}><a href ={item.url}>{item.title}</a></li>
        })}
      </ul>
    </div>
  )
}
function Search(props){
  return(
    <div>
      <input onChange = {(e)=>props.onSearch(e.target.value)}/>
    </div>
  )
}

function App(props) {
  return (
    <div className="App">
      <h1>REDUX ARTİCLE LİST SEARCH APP</h1>
      <Search onSearch = {props.onSearch}/>
      <Articles {...props}/>
    </div>
  );
}
const mapStateToProps = state =>({
  articles:state.articlesState.articles,
  searchTerm:state.searchState.searchTerm,
})
const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


import React from "react";
import {connect} from 'react-redux'

function Articles(props){
  return(
    <div>
      <ul>
        <li key={item.id}><a href ={item.url}>{item.title}</a></li>
      </ul>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>REDUX ARTİCLE LİST SEARCH APP</h1>
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


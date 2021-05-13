import React from "react";
import {connect} from 'react-redux'


function App() {
  return (
    <div className="App">
      <h1>REDUX ARTİCLE LİST SEARCH APP</h1>
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


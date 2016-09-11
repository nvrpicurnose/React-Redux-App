import React from 'react';
import SearchBar from './Search-Bar';

const SearchBarContainer = React.createClass({

  // this function is called in the 'onSubmit' event of the SearchBar 'dumb' component
  searchFn: function(event) {
    event.preventDefault();

    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let query = this.refs.child.getQuery();
    console.log("Searching for " + query);
  },

  render: function() {
    return (
      <SearchBar searchFn={this.searchFn} ref="child" />
    );
  }

});

export default SearchBarContainer;

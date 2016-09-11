import React from 'react';

export default React.createClass({

  // extract the value inside the HTML5 <input type='text'>
  // this function will be called by the 'smart' container that this 'dumb' component is nested inside
  getQuery: function() {
    return this.refs.search.value;
  },

  render: function() {
    return (
      <form onSubmit={this.props.searchFn} className="search">
        <input type="text" ref="search" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }

});

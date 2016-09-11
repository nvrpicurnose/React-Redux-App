import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from './search-layout';

const mapStateToProps = function(store) {

  return {
    // query: store.searchLayoutState.query
  };

};

export default connect(mapStateToProps)(SearchLayout);

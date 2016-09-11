import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';

const HomeContainer = React.createClass({

  render: function() {
    return (
      <Home />
    );
  }

});

const mapStateToProps = function(store) {
  return {
  };
};

export default connect(mapStateToProps)(HomeContainer);

import React from 'react';
import { connect } from 'react-redux';

const MealListContainer = React.createClass({

  render: function() {
    return (
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(MealListContainer);

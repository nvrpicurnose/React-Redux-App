import React from 'react';
import { connect } from 'react-redux';
import ChefList from './Chef-List';
import {getChefs} from '../../api/get_data';
import {getChefsSuccess} from '../../actions/ChefsActions';

const ChefListContainer = React.createClass({

  componentDidMount: function() {
    this.props.dispatch(getChefsSuccess());
  },

  render: function() {
    return (
      <ChefList chefs={this.props.chefs} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    chefs: store.chefsState.chefs
  };
};

export default connect(mapStateToProps)(ChefListContainer);

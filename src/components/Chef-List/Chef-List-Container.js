import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ChefList from './Chef-List';
import {getChefs} from '../../api/get_data';
import {getChefsSuccess} from '../../actions/ChefsActions';

import configureStore from '../../rootJS/configureStore.dev';

const store = configureStore();

const ChefListContainer = React.createClass({
  propTypes: {
    chefs: PropTypes.array.isRequired
  },

  componentWillMount: function() {
    this.props.getChefsSuccess();
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

// injects onPlusClick, onMinusClick
function mapDispatchToProps(dispatch) {
  return {
    getChefsSuccess: () => dispatch(getChefsSuccess())
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChefListContainer);
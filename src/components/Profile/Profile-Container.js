import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = function(store) {

  return {
    me: store.me
  };

};

export default connect(mapStateToProps)(Profile);

import React, { Component, PropTypes } from 'react';
import Chef from '../Chef/Chef';

const ChefList = React.createClass({
  propTypes: {
    chefs: PropTypes.array.isRequired,
    //getChefs: PropTypes.func.isRequired
  },

  componentWillMount (){
    //this.props.getChefs();
  },

  render() {
    return (
      <div className="chef-list">
        {
          this.props.chefs.map(function(chef){
            return <Chef chef={chef} key={chef.id} />
          })
        }
      </div>
    );
  }
});

export default ChefList;
import React, { Component, PropTypes } from 'react';
import Chef from '../Chef/Chef';

export default class ChefList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount (){
    //this.props.getChefs();
  }

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
}

ChefList.propTypes = {
  chefs: PropTypes.array.isRequired,
  //getChefs: PropTypes.func.isRequired
};

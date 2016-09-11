import React, { Component, PropTypes } from 'react';

export default class Chef extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="chef-container">
       Check out: {this.props.chef.name}
      </div>
    );
  }
}

Chef.propTypes = {
  chef: PropTypes.object.isRequired
};

import React, { Component } from 'react';


class FirstComponent extends Component {
  render() {
    return (
      <div className="Component-1">
        New Room for Component-1 Content!
        <br />
        {this.props.test}
      </div>
    );
  }
}

export default FirstComponent;

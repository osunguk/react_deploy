<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from 'react'
>>>>>>> react-test-renderer

class NameList extends Component {
  static defaultProps = {
    names: []
  }

  renderList() {
    const { names } = this.props;
    const nameList = names.map(
      (name, i) => (<li key={i}>{name}</li>)
    );
    return nameList;
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    );
  }
}

<<<<<<< HEAD
export default NameList;
=======
export default NameList;
>>>>>>> react-test-renderer

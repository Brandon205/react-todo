import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li>{this.props.doThis}</li>
  }
}

export default ListItem;
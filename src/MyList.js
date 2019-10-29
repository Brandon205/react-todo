import React from 'react';
import ListItem from './ListItem';
import './App.css';

class MyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList = () => {
    this.setState({ toDoItemArray: [] });
  }

  newItemChange = e => {
    e.preventDefault();
    this.setState({ newItem: e.target.value });
  }

  addItem = e => {
    e.preventDefault();
    let arrCopy = [...this.state.toDoItemArray];
    arrCopy.push(this.state.newItem);
    this.setState({ toDoItemArray: arrCopy });
    this.setState({ newItem: '' });
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, id) => (
      <ListItem doThis={item} key={id} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={this.clearList}>Finished!!</button>
      </div>
    )
  }
}

export default MyList;

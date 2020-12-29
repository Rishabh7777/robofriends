import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

// in order to use State we need class
// 'state' is props given by parent to child
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    // change of syntax so that 'this' always refers to where it is created
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log("render");

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <hr />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;
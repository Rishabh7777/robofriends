import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

// in order to use State we need class
// 'state' is props given by parent to child
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // using JSONPlaceholder API to receive users as robots
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json()) // converting received response to JSON
            .then(users => this.setState({robots: users}));
    }

    // change of syntax so that 'this' always refers to where it is created
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log("render");

        // if API takes long time to return response
        if (this.state.robots.length === 0) {
            return <h1>LOADING...</h1>           
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <hr />
                    {/* making search bar fix with scroll */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;
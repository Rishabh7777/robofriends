import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField } from '../action.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

// in order to use State we need class
// 'state' is props given by parent to child
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: []
            // searchField: ''
        }
    }

    // using JSONPlaceholder API to receive users as robots
    componentDidMount() {
        // console.log(this.props.store);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json()) // converting received response to JSON
            .then(users => this.setState({robots: users}));
    }

    // change of syntax so that 'this' always refers to where it is created
    // onSearchChange = (event) => {
    //     this.setState({searchField: event.target.value});
    // }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
        // console.log("render");

        // if API takes long time to return response
        if (this.state.robots.length === 0) {
            return <h1>LOADING...</h1>           
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.props.onSearchChange} />
                    <hr />
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
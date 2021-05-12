import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../action.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// in order to use State we need class
// 'state' is props given by parent to child
class App extends React.Component {
    // no need of constructor as we are using redux

    // using JSONPlaceholder API to receive users as robots
    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    render() {
        const filteredRobots = this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
        // console.log("render");

        // if API takes long time to return response
        if (this.props.isPending === true) {
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
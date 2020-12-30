import React from 'react';

// to handle the error for user
// user will see the error messege build to show not the detailed error
class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    // a try-catch block for Javascript
    componentDidCatch() {
        this.state({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
import React, { Component } from 'react';
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    render() { 
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>

        }
        return this.props.children
    }
}
 
export default ErrorBoundry;
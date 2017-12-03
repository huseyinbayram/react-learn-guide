import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null
  };
  componentDidCatch = (error, errorInfo) => {
    this.setState({ error: error });
  };
  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

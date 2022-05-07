// React
import React from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class RedirectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirect: false
    };
  }

  redirect = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state && this.state.redirect) {
      return <Navigate to={this.props.redirectTo} />
    }

    return (
      <div onClick={this.redirect}>
          {this.props.button}
      </div>
    );
  }
}
import React, { Component } from 'react';

import LoginPage from "./components/LoginPage";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { formResponse: {} };

    this.updateFormResponse = this.updateFormResponse.bind(this);
  }

  updateFormResponse(formResponse) {
    this.setState({ formResponse });
  }

  getFormattedFormResponse() {
    const { formResponse } = this.state;

    const keys = Object.keys(formResponse);

    return keys.map(key => (
      <>
        <span>{key}: {formResponse[key].toString()}</span>
        <br />
      </>
    ))
  }

  render() {
    const formattedFormResponse = this.getFormattedFormResponse();

    return (
      <div className='app-container' >
        <LoginPage onLoginSuccess={this.updateFormResponse} onLoginFail={this.updateFormResponse} />

        <code>
          {formattedFormResponse}
        </code>
      </div>
    );
  }
}

export default App;

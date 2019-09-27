import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    this.props.auth._oktaAuth.token.getWithoutPrompt({
      sessionToken: res.session.token,
      responseType: ['token', 'id_token'],
      scopes: ['openid', 'profile'],
    }).then(async tokens => {
      for (let token of tokens) {
        if (token.idToken) {
          this.props.auth._oktaAuth.tokenManager.add('idToken', token);
        } else if (token.accessToken) {
          this.props.auth._oktaAuth.tokenManager.add('accessToken', token);
        }
      }
      this.setState({authenticated: true});
    })
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <LoginForm 
        baseUrl={this.props.baseUrl} 
        onSuccess={this.onSuccess}
        />;
  }
});
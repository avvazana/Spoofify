import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'', email: '', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
    );
  }

  render() {
    const email = (
      <div>
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="session-input"
          />
        </label>
        <br/>
      </div>

    )
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          Welcome to Spoofify!
          <br/>
          {this.renderErrors()}
          <div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />
            </label>
            <br/>
            {this.props.formType === "signup" ? email : ''}
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

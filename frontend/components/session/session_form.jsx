import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    const buttonText = this.props.formType === 'login' ? 'LOG IN' : 'SIGN UP'
    const otherButtonText = this.props.formType === 'login' ? 'SIGN UP' : 'LOG IN'
    const otherButtonLabel = this.props.formType === 'login' ? 'Don\'t have an account?' : 'Already have an account?'
    const otherFormType = this.props.formType === 'login' ? 'signup' : 'login'
    const clickType = this.props.formType === 'login' ? (<button className="session-form-other-button">SIGN UP</button>) : (<p className="session-form-other-login">Log in</p>)

    const email = (
      <div>
        <label>
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="session-input"
            placeholder="Email"
          />
        </label>
        <br/>
      </div>

    )
    return (
      <div className="session-form-container">
        <header className="session-header">
          <img className="session-logo" src={window.blackLogoURL}></img>
          <h1>Spoofify</h1>
        </header>
        <div className="demo-div">
          <button onClick={() => {this.props.login({username: 'Guest', password: 'password'})}} className="demo-button">DEMO LOGIN</button>
        </div>
        <div className="demo-form-divider">
          <h2><span>OR</span></h2>
        </div>

        <form onSubmit={this.handleSubmit} className="session-form">
          <br/>
          <div className="session-errors">{this.renderErrors()}</div>
          <div>
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
                placeholder="Username"
              />
            </label>
            <br/>
            {this.props.formType === "signup" ? email : ''}
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <button className="session-submit">{buttonText}</button>
            <hr className="divider"></hr>
          </div>
          <h2>{otherButtonLabel}</h2>
        </form>
        <Link to={`/${otherFormType}`} className="session-link">
          {clickType}
        </Link>
        <div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

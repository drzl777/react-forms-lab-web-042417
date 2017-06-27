import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  updateValues = (event) => {
    //console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
    // if (event.target.name === "username") {
    //   this.setState({
    //     username: event.target.value
    //   }, console.log(this.state))
    // } else if (event.target.name === "password") {
    //   this.setState({
    //     password: event.target.value
    //   }, console.log(this.state))
    // }
  }

  submitHandler = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateValues} name="username" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updateValues} name="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

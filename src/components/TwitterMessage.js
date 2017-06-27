import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charactersLeft: this.props.maxChars
    };
  }

  updateValue = (event) => {
    this.setState({
      value: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateValue} value={this.state.value} />
        <small>{this.state.charactersLeft} characters left</small>
      </div>
    );
  }
}

export default TwitterMessage;

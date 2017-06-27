import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: '',
      valid: false
    };
  }

  validateText = (text) => {

    if (text.length === 3){
      const line1 = text[0].trim().split(' ')
      const line2 = text[1].trim().split(' ')
      const line3 = text[2].trim().split(' ')
      if (line1.length === 5, line2.length === 3, line3.length === 5){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  setText = (event) => {
    this.setState({
      textarea: event.target.value,
      valid: this.validateText(event.target.value.trim().split('\n'))
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
        onChange={this.setText} value={this.state.textarea} />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
        {this.state.valid ? null : "This poem is not written in the right structure!"}
      </div>
      </div>
    );
  }
}

export default PoemWriter;

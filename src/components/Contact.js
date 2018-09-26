import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }
  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang lien he<br />
        <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Cho phép</button>
        <button type="button" className="btn btn-default" onClick={() => this.onClick(true)}>Không cho phép</button>
        <Prompt
          when={isChecked}
          message="Are you sure you want to leave?"
        />
      </div>
    );
  }
}

export default Contact;

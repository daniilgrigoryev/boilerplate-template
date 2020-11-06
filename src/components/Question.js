import React from "react";

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return <h3 class="main-qustion">{question}</h3>;
  }
}

export default Question;

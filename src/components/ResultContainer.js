import React from "react";
import Detail from "./Detail";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  interpretResult() {
    const resultCount = this.state.finalResult.length;
    if (resultCount > 1) {
      return "Wow! You are more than one data structure! Here's how you scored:";
    }
    return;
  }

  calculatePercent() {
    if (this.state.finalResult.length > 1) {
      return ": " + Math.round(1 / this.state.finalResult.length * 100) + "%";
    } else {
      return "";
    }
  }

  playAgain() {
    window.location.reload();
  }

  render() {
    const { playAgain } = this;
    const finalResult = this.state.finalResult;
    const percent = this.calculatePercent();
    const resultDescriptions = this.state.resultDescriptions;

    return (
      <div>
        {finalResult.map(function(type) {
          const resultDetail = resultDescriptions.find(function(element) {
            return element.type === type;
          });
          return (
            <div
              key={Math.random()
                .toString(36)
                .substring(7)}
            >
              <Detail
                percent={percent}
                resultDetail={resultDetail}
                type={type}
              />
            </div>
          );
        })}
        <div>
          <div className="again-button" onClick={playAgain}>
            Пройти еще раз
          </div>
        </div>
      </div>
    );
  }
}

export default ResultContainer;

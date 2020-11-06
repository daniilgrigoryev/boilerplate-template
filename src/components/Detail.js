import React from "react";

class Detail extends React.Component {
  render() {
    const { resultDetail, type, percent } = this.props;
    return (
      <div>
        <div
          key={Math.random()
            .toString(36)
            .substring(7)}
        >
          <div>
            <div>
              <h2 className="result">
                {resultDetail.type}
                {percent}
              </h2>
              <p className="result-description">
                {resultDetail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

import React, {Component} from 'react'
import {VictoryChart,VictoryBar} from 'victory'

class TransitionFigure extends React.Component {

  range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const bars =6+(10-6)*Math.random();
    console.log(bars);
    console.log(this.range(Math.floor(bars)));
    return this.range(Math.floor(bars)).map((bar) => {
      return {x: bar + 1, y: 2+(10-2)*Math.random()};
    });
  }

  render() {
    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{duration: 500}}
      >
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>
    );
  }
}
export default TransitionFigure
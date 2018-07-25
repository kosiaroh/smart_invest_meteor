import React, {Component} from 'react'
import {VictoryChart,VictoryScatter} from 'victory'
import * as math from 'mathjs'
class AnimatedFigure extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  getScatterData() {
    const colors =[
      "violet", "cornflowerblue", "gold", "orange",
      "turquoise", "tomato", "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp",
      "triangleDown", "diamond", "plus"
    ];
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,29,21,22,23,24,25].map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: Math.random(10, 50),
        y: Math.random(2, 100),
        size: Math.random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[Math.random(0, 6)],
        opacity: 0.6
      };
    });
  }

  render() {
    return (
      <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
        <VictoryScatter
          data={this.state.scatterData}
          style={{
            data: {
              fill: (d) => d.fill,
              opacity: (d) => d.opacity
            }
          }}
        />
      </VictoryChart>
    );
  }
}
export default AnimatedFigure
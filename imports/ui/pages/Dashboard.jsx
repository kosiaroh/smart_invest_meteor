import React, {Component} from 'react'
import BarChart from '../components/BarChart.jsx'
import WorldMap from '../components/WorldMap.jsx'
import AnimatedFigure from '../components/AnimatedFigure.jsx'
import TransitionFigure from '../components/TransitionFigure.jsx'
import {VictoryChart,VictoryVoronoiContainer,VictoryLine} from 'victory'

class Dashboard extends Component{
	round(x){
		temp = x*100;
		Math.round(temp);
		temp = temp/100.00;
		return temp.toFixed(2);
	}

	render(){
		return (
			<div className = 'App'>
				<div className = 'App-header'>
					<h2>d3ia Dashboard</h2>
				</div>
				<div>
					<AnimatedFigure/>
					<TransitionFigure/>

					<VictoryChart domainPadding={{ y: 10 }}
  							containerComponent={
    							<VictoryVoronoiContainer
      								labels={(d) => `${this.round(d.x)}, ${this.round(d.y)}`}
    							/>
  							}
					>
  							<VictoryLine
    							y={(datum) => Math.sin(2 * Math.PI * datum.x)}
  							/>
					</VictoryChart>
				</div>
			</div>)
	}
}
export default Dashboard
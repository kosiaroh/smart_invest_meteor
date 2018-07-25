import React, {Component} from 'react'
import BarChart from '../components/BarChart.jsx'
import WorldMap from '../components/WorldMap.jsx'
import AnimatedFigure from '../components/AnimatedFigure.jsx'
import TransitionFigure from '../components/TransitionFigure.jsx'

class Dashboard extends Component{
	render(){
		return (
			<div className = 'App'>
				<div className = 'App-header'>
					<h2>d3ia Dashboard</h2>
				</div>
				<div>
					<AnimatedFigure/>
					<TransitionFigure/>
				</div>
			</div>)
	}
}
export default Dashboard
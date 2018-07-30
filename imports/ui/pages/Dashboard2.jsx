import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React, {Component} from 'react';
import {Population} from '../../api/population.js'
import PopulationGraph from '../components/PopulationGraph.jsx'

class Dashboard2 extends Component{
	render () {
  	return (
      <div className="pop_graph">
      <PopulationGraph/>
      </div>
    );
  }
}
export default Dashboard2
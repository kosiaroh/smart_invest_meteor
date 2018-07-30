import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Mongo } from 'meteor/mongo';
import {Population} from '../../api/population.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


class PopulationGraph extends TrackerReact(React.Component) {
	constructor(props) {
		super(props);
		this.state = {
			subscription: {
				population: Meteor.subscribe('population'),
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.population.stop();
	}

	population(country){
		return Population.find({country}).fetch();
	}

	render(){
		const rwanda_pop = this.population("Rwanda");
		const nigeria_pop = this.population("Nigeria");
		const US_pop = this.population("United States");
		
		const all_data = [];

		if (this.state.subscription.population.ready() && typeof US_pop !== 'undefined'){
			console.log(rwanda_pop);console.log(nigeria_pop);console.log(US_pop);
			if(Array.isArray(rwanda_pop) && rwanda_pop.length){
				console.log(rwanda_pop);console.log(nigeria_pop);console.log(US_pop);
				for(i=0; i<US_pop[0].year.length; i++){
					all_data[i] = {name:rwanda_pop[0].year[i],rwanda:rwanda_pop[0].population[i],nigeria:nigeria_pop[0].population[i],united_states:US_pop[0].population[i]};
				}

				return(
					<LineChart width={600} height={300} data={all_data}
			            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       <XAxis dataKey="name"/>
			       <YAxis/>
			       <CartesianGrid strokeDasharray="3 3"/>
			       <Tooltip/>
			       <Legend />
			       <Line type="monotone" dataKey="rwanda" stroke="#8884d8" activeDot={{r: 8}}/>
			       <Line type="monotone" dataKey="nigeria" stroke="#82ca9d" />
			       <Line type="monotone" dataKey="united_states" stroke="#82ca9d" />
			      </LineChart>
			     );
			}
		}return (<div>'Loading Data'</div>);
	}
	
}

export default PopulationGraph
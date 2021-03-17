import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from './Scroll'



class App extends Component {
	constructor() {
		super();
		this.state = {
			robot:[],
			searchfield:'',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({robot:users})
		);
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}); 
		console.log(this.state.searchfield)		
	}
	render() {
		const {robot, searchfield} = this.state;
		const filteredRobots = robot.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(robot.length===0) {
			return <h1 className='tc'>Loading...</h1>
		}
		else {
		return (
		<div className = 'tc'>
			<h1 className='f1 backg'> Robofriends </h1>
			<SearchBox searchchange= {this.onSearchChange}/>
			<Scroll>
				<CardList robots = {filteredRobots}/>
			</Scroll>	
		</div>
		)
	}
	}
}

export default App;
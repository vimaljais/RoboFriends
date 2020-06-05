import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';



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
	}
	render() {
		const filteredRobots = this.state.robot.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robot.length===0) {
			return <h1 className='tc'>Loading...</h1>
		}
		return (
		<div className = 'tc'>
			<h1 className='f1 backg'> Robofriends </h1>
			<SearchBox searchchange= {this.onSearchChange}/>
			<CardList robots = {filteredRobots}/>
		</div>
		)
	}
}

export default App;
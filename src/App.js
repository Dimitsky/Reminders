import React from 'react';
import { Item } from './components/Item/Item.js';
import { LS } from './components/LS/LS.js';
import './App.css';

const ls = new LS('todo');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [], 
		};		
	}

	add(e) {
		const item = <Item key={Date.now()} id={Date.now()} text="Please enter a reminder" deleteItemsHandle={this.deleteItemHandle.bind(this)}></Item>
		
		// ls.set(item);

		this.setState(state => {
			const copyItems = state.items.slice(0);

			copyItems.push(item);

			return {
				items: copyItems, 
			};
		});
	}

	deleteItemHandle(id) {
		// ls.remove(id);

		this.setState(state => {

			const copyItems = state.items.slice(0).filter(comp => comp.props.id !== id);

			return {
				items: copyItems, 
			}
		})

	}

	render() {
		return (
			<>
				<header className="py-3 d-flex justify-content-between align-items-center header">
					<h2 className="m-0 header__title">Reminders</h2>
					<button className="btn btn-dark header__button header__button--add" type="button" onClick={this.add.bind(this)}>Add</button>
				</header>
				<main className="main">
					<ul className="list-group main__list" id="list">{this.state.items.map(com => com)}</ul>
				</main>
			</>
		);
	}
}

export default App;
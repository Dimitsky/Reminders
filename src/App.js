import React from 'react';
import { Item } from './components/Item/Item.js';
import { LS } from './components/LS/LS.js';
import './App.css';

const ls = new LS('reminders');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleAdd = this.handleAdd.bind(this);
		this.handleItemInput = this.handleItemInput.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);

		this.state = {
			items: [], 
		};

		if (ls.get().length) {
			for (let data of ls.get()) {
				this.state.items.push(data);
			}
		}
	}

	handleAdd() {
		const id = String(Date.now());
		const copyItems = this.state.items.slice(0);
		const newItem = {
			id, 
			value: '', 
		};

		copyItems.push(newItem);

		ls.set(newItem);

		this.setState({
			items: copyItems, 
		});
	}

	handleItemInput(id, value) {
		const copyItems = this.state.items.slice(0);
		const index = copyItems.findIndex(item => item.id === id);

		copyItems[index].value = value;

		ls.update(id, value);

		this.setState({
			items: copyItems, 
		})
	}

	handleItemDelete(id) {
		const copyItems = this.state.items.slice(0)
			.filter(item => item.id !== id);

		ls.remove(id);

		this.setState({
			items: copyItems, 
		})
	}

	render() {
		return (
			<>
				<header className="py-3 d-flex justify-content-between align-items-center header">
					<h2 className="m-0 header__title">Reminders</h2>
					<button 
						className="btn btn-dark header__button header__button--add" 
						type="button" 
						onClick={this.handleAdd}
					>Add</button>
				</header>
				<main className="main">
					<ul className="list-group main__list" 
						id="list"
					>
						{this.state.items.map(item => (
							<Item 
								key={item.id} 
								id={item.id}
								value={item.value}
								placeholder="Please enter a reminder"
								handleItemInput={this.handleItemInput}
								handleItemDelete={this.handleItemDelete}
							></Item>
						))}
					</ul>
				</main>
			</>
		);
	}
}

export default App;
import React, { Component } from 'react';
import './DataTable.css';

class DataTable extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			students: [
				{id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },	
				{id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
				{id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
				{id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
			]
		}
	}

	renderTableData() {
		return this.state.students.map((student, index) => {
			const { id, name, age, email } = student;	
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{age}</td>
					<td>{email}</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div>
				<h1 id='title'>React Dynamic Table</h1>
				<table id='students'>
					<tbody>
						{this.renderTableData()}
					</tbody>
			  </table>
			</div>
		)
	}

}

export default DataTable

import React, { Component } from 'react'
import axios from 'axios'

// import './styles.css'
import NewFilesFolders from './components/NewFilesFolders'
import ShowFilesFolders from './components/ShowFilesFolders'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filesAndFolders: []
		}
		this.getFilesAndFolders = this.getFilesAndFolders.bind(this)
	}

	componentDidMount() {
		this.getFilesAndFolders()
	}

	getFilesAndFolders() {
		axios.get('/api/files')
			.then(response => this.setState({filesAndFolders: response.data}))
			.catch(error => console.log("Error loading file/folder list - " + error))
	}

	render() {
		return (
			<div className="files-app">
				<NewFilesFolders
					getFilesAndFolders={this.getFilesAndFolders}
				/>
				<ShowFilesFolders
					filesAndFolders={this.state.filesAndFolders}
				/>
			</div>
		)
	}
}

export default App

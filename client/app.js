import React, { Component } from 'react'
import axios from 'axios'

// import './styles.css'
import NewFilesFolders from './components/NewFilesFolders'
import ShowFilesFolders from './components/ShowFilesFolders'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filesAndFolders: [],
			showNewFolderDialog: false
		}
		this.getFilesAndFolders = this.getFilesAndFolders.bind(this)
		this.openNewFolderDialog = this.openNewFolderDialog.bind(this)
		this.closeNewFolderDialog = this.closeNewFolderDialog.bind(this)
	}

	componentDidMount() {
		this.getFilesAndFolders()
	}

	getFilesAndFolders() {
		axios.get('/api/files')
			.then(response => {
				this.setState({filesAndFolders: response.data})
			})
			.then()
			.catch(error => console.log("Error loading file/folder list - " + error))
	}

	getSubs(folderId){
		let subFolders = axios.get(`/api/folders/${folder._id}/items`)

	}

	closeNewFolderDialog() {
		this.setState({showNewFolderDialog: false})
	}

	openNewFolderDialog() {
		this.setState({showNewFolderDialog: true})
	}


	render() {
		return (
			<div className="files-app">
				<NewFilesFolders
					getFilesAndFolders={this.getFilesAndFolders}
					showNewFolderDialog={this.state.showNewFolderDialog}
					openNewFolderDialog={this.openNewFolderDialog}
					closeNewFolderDialog={this.closeNewFolderDialog}
				/>
				<ShowFilesFolders
					filesAndFolders={this.state.filesAndFolders}
					showNewFolderDialog={this.state.showNewFolderDialog}
					openNewFolderDialog={this.openNewFolderDialog}
					closeNewFolderDialog={this.closeNewFolderDialog}
				/>
			</div>
		)
	}
}

export default App

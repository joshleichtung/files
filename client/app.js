import React, { Component } from 'react'

// import './styles.css'
import NewFilesFolders from './components/NewFilesFolders'
import ShowFilesFolders from './components/ShowFilesFolders'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filesAndFolders: [{name: "my folder", id: 1}]
		}
	}
	render() {
		return (
			<div className="files-app">
				<NewFilesFolders />
				<ShowFilesFolders filesAndFolders={this.state.filesAndFolders} />
			</div>
		)
	}
}

export default App

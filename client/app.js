import React, { Component } from 'react'

// import './styles.css'
import NewFilesFolders from './components/NewFilesFolders'
import ShowFilesFolders from './components/ShowFilesFolders'

class App extends Component {
	render() {
		return (
			<div className="files-app">
				<NewFilesFolders />
				<ShowFilesFolders />
			</div>
		)
	}
}

export default App

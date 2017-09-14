import React, { Component } from 'react'

// import './styles.css'
import NewFilesFolders from './components/NewFilesFolders'
import ShowFilesFolders from './components/ShowFilesFolders'

class App extends Component {
	constructor(props) {
		super(props)
	}
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

import React, { Component } from 'react'

import NewFolderDialog from './NewFolderDialog'

class NewFilesFolders extends Component {
	constructor(props){
		super(props)
		this.state = {
			showNewFolderDialog: false
		}

		this.openNewFolderDialog = this.openNewFolderDialog.bind(this)
		this.closeNewFolderDialog = this.closeNewFolderDialog.bind(this)
		this.createNewFolder = this.createNewFolder.bind(this)
	}

	closeNewFolderDialog() {
		this.setState({showNewFolderDialog: false})
	}

	createNewFolder(e) {
		e.preventDefault()
		console.log("create new folder")
		this.closeNewFolderDialog()
	}

	openNewFolderDialog() {
		console.log("open new folder")
		this.setState({showNewFolderDialog: true})
	}

	render() {
		let newFolderButton = (
			<button onClick={this.openNewFolderDialog}>New Folder</button>
		)

		let newFolderForm = (
        <form id="new-folder-form" onSubmit={this.createNewFolder}>
          <input placeholder="Enter File Name" />
          <button type="submit">Create Folder</button>
        </form>
		)

		return (
			<div className="new-files-folders">
			{this.state.showNewFolderDialog ? newFolderForm : newFolderButton}
			</div>
		)
	}
}

export default NewFilesFolders

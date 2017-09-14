import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal'

import NewFolderDialog from './NewFolderDialog'

class NewFilesFolders extends Component {
	constructor(props){
		super(props)
		this.state = {
			showNewFolderDialog: false
		}

		this.openNewFolderDialog = this.openNewFolderDialog.bind(this)
		this.closeNewFolderDialog = this.closeNewFolderDialog.bind(this)
	}

	closeNewFolderDialog() {
		this.setState({showNewFolderDialog: false})
	}

	openNewFolderDialog() {
		this.setState({showNewFolderDialog: true})
	}

	render() {
		let newFolderButton = (
			<button onClick={this.openNewFolderDialog}>New Folder</button>
		)

		let newFolderForm = (
			<NewFolderDialog
				closeNewFolderDialog={this.closeNewFolderDialog}
				getFilesAndFolders={this.props.getFilesAndFolders}
				parent="root"
			/>
		)

		return (
			<div className="new-files-folders">
			<button onClick={this.openNewFolderDialog}>New Folder</button>
			<Modal
				isOpen={this.state.showNewFolderDialog}
			>
			{newFolderForm}
			</Modal>
			</div>
		)
	}
}

export default NewFilesFolders

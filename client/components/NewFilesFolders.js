import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal'

import NewFolderDialog from './NewFolderDialog'

class NewFilesFolders extends Component {
	render() {
		let newFolderButton = (
			<button onClick={this.props.openNewFolderDialog}>New Folder</button>
		)

		let newFolderForm = (
			<NewFolderDialog
				closeNewFolderDialog={this.props.closeNewFolderDialog}
				getFilesAndFolders={this.props.getFilesAndFolders}
				parent="root"
			/>
		)

		return (
			<div className="new-files-folders">
			<button onClick={this.props.openNewFolderDialog}>New Folder</button>
			<Modal
				isOpen={this.props.showNewFolderDialog}
			>
			{newFolderForm}
			</Modal>
			</div>
		)
	}
}

export default NewFilesFolders

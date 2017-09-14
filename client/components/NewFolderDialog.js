import React, { Component } from 'react'
import axios from 'axios'

class NewFolderDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      newFolderName: ''
    }
    this.handleFormInput = this.handleFormInput.bind(this)
    this.createNewFolder = this.createNewFolder.bind(this)
  }

  handleFormInput(e) {
    e.preventDefault()
    this.setState({newFolderName: e.target.value})
  }

	createNewFolder(e) {
		e.preventDefault()
		console.log(this.state.newFolderName)
    let url = '/api/folders' + this.props.parent
		axios.post('/api/folders', {name: this.state.newFolderName})
      .then(response => this.props.getFilesAndFolders())
      .catch(error => console.log("Create Folder Error - " + error))
		this.props.closeNewFolderDialog()
	}


  render() {
    return (
      <div className="new-folder-dialog">
      <h2>New Folder</h2>
      <h3>Containing Folder: {this.props.parent}</h3>
        <form id="new-folder-form" onSubmit={this.createNewFolder}>
          <input placeholder="Enter Folder Name" onChange={this.handleFormInput} />
          <button type="submit">Create Folder</button>
          <button onClick={this.props.closeNewFolderDialog}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default NewFolderDialog

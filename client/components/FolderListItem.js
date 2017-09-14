import React, { Component } from 'react'
import Modal from 'react-modal'

class FolderListItem extends Component {
  openNewFolderModal(){
    this.props.openFolderModal()
    this.props.openNewFolderDialog()
  }
  render() {
    let date = new Date(this.props.folder.dateModified).toUTCString()
    return (
      <tr className={this.props.folder._id}>
      <td>F</td>
      <td>{this.props.folder.name}</td>
      <td><i>Calculate Size!</i></td>
      <td>{date}</td>
      <td>
      <button onClick={() => this.props.openNewFolderModal(this.props.folder._id)}>New Folder</button>
      </td>
      </tr>
    )
  }
}

export default FolderListItem

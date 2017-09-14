import React, { Component } from 'react'

class FolderListItem extends Component {
  render() {
    let date = new Date(this.props.folder.dateModified).toUTCString()
    return (
      <tr id={this.props.id}>
      <td>F</td>
      <td>{this.props.folder.name}</td>
      <td><i>Calculate Size!</i></td>
      <td>{date}</td>
      <td><button>New Folder</button></td>
      </tr>
    )
  }
}

export default FolderListItem

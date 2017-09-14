import React, { Component } from 'react'

class FolderListItem extends Component {
  render() {
    return (
      <li>F | {this.props.folder.name}</li>
    )
  }
}

export default FolderListItem

import React, { Component } from 'react'

import FolderListItem from './FolderListItem'

class ShowFilesFolders extends Component {
  renderFilesAndFolders() {
    if (this.props.filesAndFolders.length) {
      return (
        this.props.filesAndFolders.map(item => <FolderListItem folder={item} key={item.id} />)
      )
    }
  }
  render() {
    return (
      <div className="show-files-folders">
        <ul>
          {this.renderFilesAndFolders()}
        </ul>
      </div>
    )
  }
}

export default ShowFilesFolders

import React, { Component } from 'react'

import FolderListItem from './FolderListItem'

class ShowFilesFolders extends Component {
  renderFilesAndFolders() {
    if (this.props.filesAndFolders.length) {
      return (
        this.props.filesAndFolders.map(item => <FolderListItem folder={item} key={item.id} id={item.id} />)
      )
    }
  }
  render() {
    return (
      <div className="show-files-folders">
      <h1>Files</h1>
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>size</th>
            <th>Last Modified</th>
            <th></th>
            </tr>
          {this.renderFilesAndFolders()}
        </table>
      </div>
    )
  }
}

export default ShowFilesFolders

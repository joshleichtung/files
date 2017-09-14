import React, { Component } from 'react'

import FolderListItem from './FolderListItem'

class ShowFilesFolders extends Component {
  renderFilesAndFolders() {
    if (this.props.filesAndFolders.length) {
      return (
        this.props.filesAndFolders.map((item, index) => <FolderListItem key={item._id} folder={item}  id={item.id} />)
      )
    }
  }
  render() {
    return (
      <div className="show-files-folders">
      <h1>Files</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>size</th>
              <th>Last Modified</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderFilesAndFolders()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowFilesFolders

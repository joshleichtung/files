import React, { Component } from 'react'

class NewFolderDialog extends Component {
  render() {
    return (
      <div className="new-folder-dialog">
        <form id="new-folder-form">
          <input placeholder="Enter File Name" />
          <button type="submit">Create Folder</button>
        </form>
      </div>
    )
  }
}

export default NewFolderDialog

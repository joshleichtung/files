import React, { Component } from 'react'
import Modal from 'react-modal'

import FolderListItem from './FolderListItem'
import NewFolderDialog from './NewFolderDialog'

class ShowFilesFolders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folderModal: {
        show: false,
        parent: ''
      }
    }
    this.closeNewFolderModal = this.closeNewFolderModal.bind(this)
		this.openNewFolderModal = this.openNewFolderModal.bind(this)
  }

  closeNewFolderModal() {
    this.setState({folderModal: {
      show: false,
      parent: ''
      }
    })
  }

	openNewFolderModal(parent) {
		this.setState({
      folderModal: {
        show: true,
        parent: parent
    }
  })
	}

  renderFilesAndFolders() {
    if (this.props.filesAndFolders.length) {
      return (
        this.props.filesAndFolders.map((item, index) => {
          return (
            <FolderListItem
              key={item._id}
              folder={item}
              id={item.id}
              filesAndFolders={this.props.filesAndFolders}
    					openNewFolderModal={this.openNewFolderModal}
    					closeNewFolderModal={this.closeNewFolderModal}
            />
          )
        })
    )}
  }
  render() {
    return (
    <div className="show-files-folders">
      <Modal
        isOpen={this.state.folderModal.show}
        contentLabel="new-sub-folder-modal"
      >
        <NewFolderDialog
          closeNewFolderDialog={this.closeNewFolderModal}
          getFilesAndFolders={this.props.getFilesAndFolders}
          parent={this.state.folderModal.parent}
        />
      </Modal>
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

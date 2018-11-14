import React from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


  @observer class Modals extends React.Component {
    @observable modalOpen = false;
    @action toggle() {
      this.modalOpen = !this.modalOpen;
    }
  render() {
    let {modalOpen} = this.props.item;
    return (
      <div>
        <Button color="danger" id={'Modals-' + this.props.id} onClick={this.toggle.bind(this)}>{modalOpen}</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modals;
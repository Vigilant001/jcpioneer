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
  let {children, scope, modalBody} = this.props;
  let modalOpen = this.modalOpen;
  scope.toggle =this.toggle.bind(this);
  

return (
    <div>
      {children}
      <Modal isOpen={modalOpen} toggle={this.toggle.bind(this)} className={this.props.className}>
        <ModalHeader toggle={this.toggle.bind(this)}></ModalHeader>
        <ModalBody className="lightbox">
         {modalBody}
        </ModalBody>
      </Modal>
    </div>
  );
}
}
export default Modals;


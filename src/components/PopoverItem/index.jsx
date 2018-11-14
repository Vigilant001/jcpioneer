
//PopoverItem
import React from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

//converted this class to mobx
@observer class PopoverItem extends React.Component {
  @observable popoverOpen = false;
  @action toggle() {
    this.popoverOpen = !this.popoverOpen;
  }

  render() {
    let {placement, header, text, description} = this.props.item;
    return (<span>
      <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle.bind(this)}>
        {text}
      </Button>
      <Popover placement={placement} isOpen={this.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle.bind(this)}>
        <PopoverHeader id='centerThis'>{header}</PopoverHeader>
        <PopoverBody id='centerThis2'>{description}</PopoverBody>
      </Popover>
    </span>);
  }
}

export default PopoverItem;

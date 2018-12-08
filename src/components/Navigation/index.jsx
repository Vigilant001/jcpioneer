import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import {
  Collapse,
  Row,
  Column,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavToggle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  //import logo from 'img/acbranding2.png';
 

//this is written as a mobx class, so that mobx handles state changes.
  @inject('dataState')
  @observer class Navigation extends React.Component {

    render() {
      let {dataState} = this.props;
      let {data, navToggle} = dataState;
    return (
      <div   className='flex-row fixed-top'>
        <Navbar color="light" id="navButtons" dark expand="lg">
          <NavbarBrand onClick={dataState.setPage.bind(dataState,'Home')} className='d-block'>
            <Row>
            <strong id='homeButton' className='mt-1' style={{letterSpacing:'2px', padding: '25px', fontFamily:'./css/BebasKai.ttf'}}> JC PIONEER </strong>
            </Row>
          </NavbarBrand>
          {data.workmodes.map(workmode => {
            let active = data.workmode === workmode;
            return (
            <Button id='navbarButtons' outline style={{ fontFamily:'./css/BebasKai.ttf', letterSpacing:'2px', padding: '10px'}} color={active?'danger':'secondary'}
              onClick={dataState.setWorkmode.bind(dataState, workmode)}
            >{workmode}</Button>
            )
          })}
          <NavbarToggler onClick={navToggle} />
          
          <Collapse isOpen={data.navOpen} navbar>
            <Nav id="navbarButtons" className="ml-auto" navbar>
            {data.pages.filter(x=> !x.hideNav).map(({name: pageName}) => 
              <NavItem onClick={dataState.setPage.bind(dataState, pageName)}>
                <NavLink className='nav-button'>{pageName.toUpperCase()}</NavLink>
              </NavItem>
              )}

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  }

export default Navigation;
//your contact page here

import React from 'react';
import {PopoverItem} from 'components';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoxText } from 'components';

const Contact = (props) => {
  let {workmode} = props;
  let buttons;
  let popovers;

  switch(workmode){
    case 'Production':
      buttons = [{
        name: 'Facebook',
        href: 'facebook.com/james4411'
      },{
        name: 'Instagram',
        href: 'instagram.com/james4411'
      }]
      popovers = [
        {
          placement: 'bottom',
          text: 'text portion',
          header: 'header portion',
          description: <p id='centerThis2'> Describe here popover 1 </p>
        },
        {
          placement: 'bottom',
          text: 'text portion 2',
          header: 'header portion 2',
          description: <p id='centerThis2'> Describe here portion 2 </p>
        }];
      break;
    case '3D-Work': 
      buttons = [{
        name: 'Facebook',
        href: 'facebook.com/james4411'
      },{
        name: 'Instagram',
        href: 'instagram.com/james4411'
      }]
      popovers = [
        {
          placement: 'bottom',
          text: 'text portion',
          header: 'header portion',
          description: <p id='centerThis2'> Describe here popover 1 </p>
        },
        {
          placement: 'bottom',
          text: 'text portion 2',
          header: 'header portion 2',
          description: <p id='centerThis2'> Describe here portion 2 </p>
        }];
    break;
  }

  return (<div>
        <CardBody>
          <BoxText>Send an email at <a href="mailto:james@jcpioneer.com">HERE</a> and connect with James on these social media platforms:</BoxText>
             {buttons.map(btn=>(
                <Button color='info' outline href={btn.href && `https://${btn.href}`} target='about_blank'>
                  <FontAwesomeIcon icon={['fab', btn.name.toLowerCase()]} />{' ' + btn.name}
                </Button>
              ))}  
        </CardBody>

  </div>);
};

export default Contact;

//your contact page here

import React from 'react';
import {PopoverItem} from 'components';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoxText } from 'components';

const Contact = (props) => {
  let {workmode} = props;
  

  const buttons = [{
        name: 'Facebook',
        href: 'facebook.com/james4411'
      },{
        name: 'Instagram',
        href: 'instagram.com/james4411'
      }]
      

  return (<div className="contactdiv">
        <CardBody>
          <BoxText>Send an email at <a href="mailto:james@jcpioneer.com">HERE</a> and connect with us on these social media platforms:</BoxText>
             {buttons.map(btn=>(
                <Button color='info' outline href={btn.href && `https://${btn.href}`} target='about_blank'>
                  <FontAwesomeIcon icon={['fab', btn.name.toLowerCase()]} />{' ' + btn.name}
                </Button>
              ))}  
        </CardBody>

  </div>);
};

export default Contact;

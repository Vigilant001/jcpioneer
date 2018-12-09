//your Clientss page here

import React from 'react';
import { Button, Col, Container, Row} from 'reactstrap';
import clientwall from 'img';
import {BoxText, PopoverItem} from 'components';

import {Res} from 'img';


const Clients = () => {
  return (
  <Container id='clientSize'>
    <Row>
      <Col><div class='h1 .col'> Sumo Logic <br/> Culver-Newlin <br/> CMTC <br/> Norris Group <br/> Real Estate Cafe </div></Col>
      <Col xs="6"><div class='h1 .col'> Make Magazine <br/> Greyback Granola <br/> Thrive SM <br/> TC United <br/> Active Churches </div></Col>
    </Row>
  </Container>

    // <div>

    //   <div id='buttons2'> 
    //   <Button  className="resumediv" id='lighterbutton' color='secondary' target="about_blank" href={Res} class="btn pd-5 btn-default">View Resume</Button></div>


    // </div>
  );
};

export default Clients;


/*

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLPWKxB6Qd0X1BirihQPEr7HBUzA3ZlSJG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

*/
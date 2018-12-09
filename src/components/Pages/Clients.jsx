//your Clientss page here

import React from 'react';
import { Button, Col, Container, Row, Media} from 'reactstrap';
import clientwall from 'img';
import {BoxText, PopoverItem} from 'components';

import {Res} from 'img';
let text1 = <span>Sumo Logic <br/> Culver-Newlin <br/> CMTC <br/> Norris Group <br/> Real Estate Cafe</span>;
let text2 = <span> Make Magazine <br/> Greyback Granola <br/> Thrive SM <br/> TC United <br/> Active Churches</span>

const Clients = () => {
  return (
  <Container id='clientSize'>
    <Row>
      <Col className='d-none d-md-block h1'>{text1}</Col>
      <Col xs="6" className='d-none d-md-block h1'>{text2}</Col>
      <Col className='d-block d-md-none h4'>{text1}</Col>
      <Col xs="6" className='d-block d-md-none h4'>{text2}</Col>
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

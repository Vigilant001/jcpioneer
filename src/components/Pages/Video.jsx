//Video.jsx
import React from 'react';
import {BoxText, PopoverItem, Modals} from 'components';
import { Modal, ModalHeader, ModalBody, ModalFooter, Card, CardText, CardImg, CardTitle, CardGroup, CardBody, CardSubtitle, Button, Container, Row, Col  } from 'reactstrap';
import { Document } from 'react-pdf'
import {Res} from 'img';
import {image1, image2, image3, image4, image5, image6} from 'img';


const YouTube1 = (props) => {
  return <div width="560" height="315" src="https://www.youtube.com/embed/_aXmF2CdVnc"></div>
}
/*
const YouTube1 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/_aXmF2CdVnc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}
const YouTube = (props) => {
    return <iframe {...props} src="https://www.youtube.com/embed/vOLQyKn8BMY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  }
const YouTube2 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/ZVtqpDQYsrE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}
const YouTube3 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/i9xllP5jVV4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}
const YouTube4 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/vOLQyKn8BMY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}
const YouTube5 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/8vC4a0HOab0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}
const YouTube6 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/xdPT7OMIk9c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}

var BigPicture = require('bigpicture')

BigPicture({
  el: this,
  ytSrc: '_aXmF2CdVnc'
})

/*
<img src='/jdc_resume_2018_film_1.png'/>

Illuminate: src="https://www.youtube.com/embed/ZVtqpDQYsrE"
Real Estate Cafe: src="https://www.youtube.com/embed/i9xllP5jVV4"
Women in Manufacturing: src="https://www.youtube.com/embed/vOLQyKn8BMY"
Karina and Darren: src="https://www.youtube.com/embed/8vC4a0HOab0"
Greyback Granola: src="https://www.youtube.com/embed/xdPT7OMIk9c"
}
Playlist: https://www.youtube.com/playlist?list=PLPWKxB6Qd0X1BirihQPEr7HBUzA3ZlSJG
*/


const Video = (props) => {
  let {workmode} = props;
  let popovers;
  let modal1Obj = {};


  switch (workmode) {
    case 'Production':
      popovers = [
        {
          placement: 'bottom',
          text: 'Event Capture',
          header: 'Every Occasion',
          description:'For corporate events, weddings, or other special events, you have one chance to capture the moment right. James can work solo or with multiple cinematographers to get the best coverage and capture the heart of your event.'
        }, {
          placement: 'bottom',
          text: 'Promotional',
          header: 'Promote Your Brand',
          description: "Making a short video to share on social media is critical to keep up now in your market. It's time to get more exposure on what your company does best. James can help you script your narrative, and best describe what you can do for your customers in an engaguing video."
        }, {
          placement: 'bottom',
          text: 'Documentary',
          header: 'Award Winning',
          description: "From feature length to mini-documumentaries, James has thorough experience in writing, directing, and editing documentaries that capture true stories that resonates with the heart."
        },{
          placement: 'bottom',
          text: 'About James',
          header: 'Film Experience',
          description: "James has over 12 years experience working in writing, directing, DP, and editing for commercials, corporate videos, documentaries, and event capture. James have also spent a year developing and training professional livestreaming platforms. James has experience in 3D character animation and 3D generalist work, trained by Pixar animators. This website was also developed by James, using React Javascript framework."
        },
      ];
      break;
    case '3D-Work':
      popovers = [
        {
          placement: 'bottom',
          text: '3D Work',
          header: 'Design & Print',
          description:'James has over 6 years experience in 3D modeling, 3D CAD design, Product Design, and 3D printing in FFF, Fiber Filled and SLA machines. He has 3D printed product prototypes, drone parts, client designs, and online print fulfilment shop. James owns 2 FFF based printers and one high end SLA (laser based) printer.'
        },
      ];
      break;
  }

  return (
  
       <div id="extraspace">

      <div>
    <Modals scope={modal1Obj}>
        <Button color="danger" onClick={(x) => modal1Obj.toggle()}>Click Here</Button>
    </Modals>
      </div>

   <CardGroup className='cardgroup1'>
      <Card>
        <CardImg onClick={(x) => modal1Obj.toggle()} top width="100%" src={image1} alt="Card image cap" />
        <CardBody>
        <CardTitle>Reel 2018</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Illuminate Conference</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image3} alt="Card image cap" />
        <CardBody>
          <CardTitle>WIM 2018</CardTitle>
        </CardBody>
      </Card>
    </CardGroup>
    <CardGroup className='cardgroup2'>
      <Card>
        <CardImg top width="100%" src={image4} alt="Card image cap" />
        <CardBody>
        <CardTitle>Real Estate Cafe</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image5} alt="Card image cap" />
        <CardBody>
          <CardTitle>Karina & Darren</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image6} alt="Card image cap" />
        <CardBody>
          <CardTitle>Greyback Granola</CardTitle>
        </CardBody>
      </Card>
    </CardGroup>


    <div> <Button color='secondary' target='about_blank' href="https://www.youtube.com/playlist?list=PLPWKxB6Qd0X1BirihQPEr7HBUzA3ZlSJG" class="btn pd-5 btn-default">Video Archive</Button> 
  </div>

    {
      popovers.map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={`${props.name}-${props.workmode}-${i}`}/>;
      })
    }

  </div>);


};

export default Video;


 

 
    //return (
/*
        <Document
          file="JDC_Resume_2018_film_1.png"
          onLoadSuccess={this.onDocumentLoad}></Document>

          
        */
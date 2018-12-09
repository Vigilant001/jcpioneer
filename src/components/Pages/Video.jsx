//Video.jsx
import React from 'react';
import {BoxText, PopoverItem, Modals} from 'components';
import { Modal, ModalHeader, ModalBody, ModalFooter, Card, CardText, CardImg, CardTitle, CardGroup, CardBody, CardSubtitle, Button, Container, Row, Col  } from 'reactstrap';
import { Document } from 'react-pdf'
import {Res} from 'img';
import {image1, image2, image3, image4, image5, image6} from 'img';

/*
const YouTube1 = (props) => {
  return <div width="560" height="315" src="https://www.youtube.com/embed/_aXmF2CdVnc"></div>
}

const Video1 = (props) => {
  return <iframe {...props} width="560" height="315" src="https://www.youtube.com/embed/_aXmF2CdVnc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}

<img src='/jdc_resume_2018_film_1.png'/>

Illuminate: src="https://www.youtube.com/embed/ZVtqpDQYsrE"
Real Estate Cafe: src="https://www.youtube.com/embed/i9xllP5jVV4"
Women in Manufacturing: src="https://www.youtube.com/embed/vOLQyKn8BMY"
Karina and Darren: src="https://www.youtube.com/embed/8vC4a0HOab0"
Greyback Granola: src="https://www.youtube.com/embed/xdPT7OMIk9c"
}
Playlist: https://www.youtube.com/playlist?list=PLPWKxB6Qd0X1BirihQPEr7HBUzA3ZlSJG
----
  let VideoObj = {
    VideoOptions: function VideoOptions(props) {
      return <div> {props.videoID} </div>
    }
  }

  function Video1() {
    return <VideoObj.VideoOptions videoID='https://www.youtube.com/embed/_aXmF2CdVnc'/>
  }
*/

const Video = (props) => {
  let {workmode} = props;
  let source1 = <video src="https://www.youtube.com/embed/vOLQyKn8BMY"/>


  const popovers = [
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
          description: "James has over 12 years experience working in writing, directing, DP, and editing for commercials, corporate videos, documentaries, and event capture. James have also spent a year developing and training professional livestreaming platforms. James has experience in 3D character animation and 3D generalist work, trained by Pixar animators. This website was also developed fully custom by James, using React Javascript framework and reactstrap styling tools."
        },
      ];


  return (<div id="extraspace">

    <div>

  <CardGroup id="extraspace">
  {[
  {
   scope:{},
   src:"https://www.youtube.com/embed/_aXmF2CdVnc",
   imgSrc:image1,
   title:"Reel 2018"
  },
  {
    scope:{},
    src:"https://www.youtube.com/embed/ZVtqpDQYsrE",
    imgSrc:image2,
    title:"Sumo Logic Illuminate"
   },
   {
    scope:{},
    src:"https://www.youtube.com/embed/vOLQyKn8BMY",
    imgSrc:image3,
    title:"WIM 2018"
   },
  ].map(({scope, src, imgSrc, title,})=> (
      <Card id="modalcards">
      <Modals className="modals1"
       modalBody={<iframe className="modalvideo" src={src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}
       scope={scope}{...props}>
        <Button className='thumbbuttons' onClick={(x) => scope.toggle()}><CardImg top width="100%" src={imgSrc} alt="Card image cap" /></Button>
        <CardBody>
        <CardTitle className="modaltitle">{title}</CardTitle>
        </CardBody>
      </Modals>
      </Card>
    ))}</CardGroup>

      <CardGroup id="extraspace">
  {[
  {
  scope:{},
  src:"https://www.youtube.com/embed/i9xllP5jVV4",
  imgSrc:image4,
  title:"Real Estate Cafe"
 },
 {
   scope:{},
   src:"https://www.youtube.com/embed/8vC4a0HOab0",
   imgSrc:image5,
   title:"Karina & Darren"
  },
  {
   scope:{},
   src:"https://www.youtube.com/embed/xdPT7OMIk9c",
   imgSrc:image6,
   title:"Greyback Granola"
  },
  ].map(({scope, src, imgSrc, title})=> (
      <Card id="modalcards">
      <Modals className="modals1"
       modalBody={<iframe className="modalvideo" src={src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}
       scope={scope}{...props}>
        <Button className="thumbbuttons" onClick={(x) => scope.toggle()}><CardImg top width="100%" src={imgSrc} alt="Card image cap" /></Button>
        <CardBody>
        <CardTitle>{title}</CardTitle>
        </CardBody>
      </Modals>
      </Card>
    ))}</CardGroup>

    <Button color='secondary' target='about_blank' href="https://www.youtube.com/playlist?list=PLPWKxB6Qd0X1BirihQPEr7HBUzA3ZlSJG" class="btn pd-5 btn-default">Video Archive</Button>
    </div>


    {
      popovers.map((popover, i) =>
        <PopoverItem key={i} item={popover} id={`${props.name}-${props.workmode}-${i}`}/>
    )
  }

  </div>);

};

export default Video;

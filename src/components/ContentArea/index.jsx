import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';

import * as Pages from 'components/Pages';
import * as backgrounds from 'img';

//this class manages getting to the different sections of the app

//this is written as a mobx class, so that mobx handles state changes.
  @inject('dataState')
  @observer class ContentArea extends React.Component {
    @observable isOpen = false;

    @action toggle() {
      this.isOpen = !this.isOpen;
    }

    render() {
      let {data} = this.props.dataState;
    return (
      <div> 
        {data.pages.map(page=> {
          let Tag = Pages[page.name];
          if(!Tag) return null;
          let image = backgrounds[page.name+'_'+data.workmode] || backgrounds[page.name];
          let BodyTag = image? CardImgOverlay:CardBody;
          return (
            <div id={`section_${page.name}`}>
              <Card className='page'>
                {image &&  <CardImg backgroundPosition='center' width="100%" justifyContent='fixed' src={image} alt="" /> }
                <BodyTag>
                  <CardTitle className='page_title pb-2'>
                    {page.title || page.name}
                  </CardTitle>
                  <Tag {...page} workmode={data.workmode}/>
                </BodyTag>
              </Card>
          </div>)
        })}
      </div>
    );
  }

  }

export default ContentArea;
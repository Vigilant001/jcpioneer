import React, { Component } from 'react';

class BoxText extends Component {
  render() {
  	let {children} = this.props;
    return (
       <section style={{maxWidth: '400px', }}className='container p-inline-block pb-2'>
    		{children}

       </section>
    );
  }
}

export default BoxText;
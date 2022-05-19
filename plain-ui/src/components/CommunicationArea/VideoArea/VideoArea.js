import React from 'react';
import './video-area.css';
import Style from 'style-it';

import closeIcon from '../../../Images/cancel.png';

export default function VideoArea(props) {
  return Style.it(`
  .video-area{
    background-color: ${props.theme[1]};
  }
  .close-btn{
    background: ${props.theme[4]};
  }
  #close-icon{
    filter:${props.theme[5]};
  }
`,
    <div className='video-area'>
    <button onClick={()=> props.setComm(0)} id='close-video-btn' className='close-btn'><img id='close-icon' src={closeIcon} alt='img'/></button>
    </div>
  )
}

import React from 'react'

const SlideMenuItems = ({text, selected}) => {

      
    return <div
    className={`menu-item ${selected ? 'me-active' : ''}`}
    >{text}</div>;
};

export default SlideMenuItems

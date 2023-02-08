import React from 'react';
import blogData from "../data/blog";

function About(props) {
    return (
        <aside>
            {props.image ? 
            <img alt="blog logo" src={blogData.image}/> : 
            <img alt="blog logo" src="https://via.placeholder.com/215" />}
            <p>{props.about}</p>
        </aside>
    )
}


export default About
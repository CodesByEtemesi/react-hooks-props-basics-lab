import React from "react";


function Links(props) {

    return (

        <div id="links">
            <h3>Links</h3>
            <a href={props.linkedIn} target="_blank" rel="noopener noreferrer" >{props.linkedIn}</a>
            <a href={props.github} target="_blank" rel="noopener noreferrer" >{props.github}</a>      
        </div>
    );
}


export default Links;
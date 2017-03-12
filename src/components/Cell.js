import React, { Component } from 'react';

export default (props) => {
    const className = "fa-" + props.icon + " icon style2 major"
 return (
            <section  key={props.key}>
		        <span className={className}></span>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</section>
        )
}
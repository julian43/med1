import React, { Component } from 'react';

export default (props) => {
 return (
            <article key={props.key}>
			    <a href={props.full.img}  className="image">
				    <img src={props.thumb.img} alt="" />
				</a>
				<div className="caption">
				    <h3>{props.title}</h3>
					<p>{props.text}</p>
					<ul className="actions">
				        <li><span className="button small">{props.buttonText}</span></li>
					</ul>
				</div>
			</article>
        )
}
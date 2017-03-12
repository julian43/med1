import React, { Component } from 'react';

export default class Section extends Component{
    render(){
        const orient = this.props.orient ? "orient-" + this.props.orient : "orient-right";
        const id = this.props.id ? this.props.id : "first"
        const topClass = "banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right"
        var containerClass = this.props.top ? topClass : orient  + " spotlight style1 content-align-left image-position-center onscroll-image-fade-in"
       
        const header = this.props.header ? this.props.header : "No Header";
        var title = this.props.top ? <h1>{header}</h1> : <h2>{header}</h2>;

        if(this.props.children){
             console.log('children', this.props.children )
        }
        return (
            <section className={containerClass} id={id}>
						<div className="content">
							{title}
							<p>{this.props.text}</p>
							<ul className="actions vertical">
								<li><a href="#" className="button">{this.props.buttonText}</a></li>
							</ul>
						</div>
						<div className="image">
							<img src={this.props.imgsrc} alt="" />
						</div>
					</section>
        )
    }
}
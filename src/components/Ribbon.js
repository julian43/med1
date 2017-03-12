import React, { Component } from 'react';
import Frame from './Frame';

export default class Ribbon extends Component{
   constructor(props){
       super(props);
       this.state={
           frames:null
       }
   }
   componentWillMount(){
        if(this.props.children){
            const frames = this.props.children.map((child)=>{
                let props = {
                     title: child.props.title, 
                     text:child.props.text, 
                     buttonText: child.props.buttonText,
                     full:{img:child.props.img},
                     thumb:{img:child.props.thumbimg},
                     key: child.props.id
                }
                return Frame(props)
            })

            this.setState({
                frames:frames
            })
           // console.log('frames', frames)
        }
   }
   render(){
       return(
            <section className="wrapper style1 align-center">
						<div className="inner">
							<h2>{this.props.header}</h2>
							<p>{this.props.text}</p>
						</div>

			
						<div className="gallery style2 medium lightbox onscroll-fade-in">
                            {this.state.frames}
                        </div>
            </section>
       )
   }
}
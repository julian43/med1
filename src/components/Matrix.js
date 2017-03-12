import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component{
   constructor(props){
       super(props);
       this.state={
           cells:null
       }
   }

    componentWillMount(){
        if(this.props.children){
            const cells = this.props.children.map((child)=>{
                let props = {
                     title: child.props.title, 
                     text:child.props.text, 
                     icon:child.props.icon,
                     key: child.props.id
                }
                return Cell(props)
            })

            this.setState({
                cells:cells
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
							<div className="items style1 medium onscroll-fade-in">
                                {this.state.cells}
                            </div>
                        </div>
            </section>
       )
   }
}
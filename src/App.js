import React, { Component } from 'react';
import {Footer, Section, Ribbon, Matrix, ContactUs, Article} from './components';


class App extends Component {
  render() {
    return (
     			<div id="wrapper" className="divided">
					

					 <Section orient="left" 
					 		  top='true'
							  header="Story Board"
							  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
							  buttonText="Learn More"
							  imgsrc="images/spotlight01.jpg"
					 />

					 <Section orient="right" 
					 		  id="first"
							  header="Magna etiam feugiat"
							  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
							  buttonText="Learn More"
							  imgsrc="images/spotlight01.jpg"
					 />

					 <Section orient="left" 
					 		  id="second"
							  header="Tempus adipiscing"
							  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
							  buttonText="Learn More"
							  imgsrc="images/spotlight02.jpg"
					 />

					 <Section orient="right" 
					 		  id="third"
							  header="Pharetra etiam nulla"
							  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
							  buttonText="Learn More"
							  imgsrc="images/spotlight03.jpg"
					 />
								 
				
					 <Ribbon header="Ribbon Header" text="Ribbon Text">
						 <Article id="1" img="images/gallery/fulls/01.jpg" thumbimg="images/gallery/thumbs/01.jpg" title="SOme Title" text="Some Bloody Text" />
						 <Article id='2' img="images/gallery/fulls/02.jpg" thumbimg="images/gallery/thumbs/02.jpg" title="Yet Anoter Title" text="Even moreText" />
						 <Article id='3' img="images/gallery/fulls/03.jpg" thumbimg="images/gallery/thumbs/03.jpg" title="Yet Anoter Title" text="Even moreText" />
						 <Article id='4' img="images/gallery/fulls/04.jpg" thumbimg="images/gallery/thumbs/04.jpg" title="Yet Anoter Title" text="Even moreText" />
						 <Article id='5' img="images/gallery/fulls/05.jpg" thumbimg="images/gallery/thumbs/05.jpg" title="Yet Anoter Title" text="Even moreText" />
						 <Article id='6' img="images/gallery/fulls/06.jpg" thumbimg="images/gallery/thumbs/06.jpg" title="Yet Anoter Title" text="Even moreText" />
					 </Ribbon>
	
					 <Matrix header="Matrix Header" text="Matrix Text">
						 <Article title="A Title" text="Blah Blah Blah" icon="diamond" id="1" />
						 <Article title="Another Titie" text="Blah Blah Blah" icon="save" id="2" />
						 <Article title="A Title" text="Blah Blah Blah" icon="bar-chart" id="3" />
						 <Article title="A Title" text="Blah Blah Blah" icon="wifi" id="4" />
						 <Article title="A Title" text="Blah Blah Blah" icon="cog" id="5" />
						 <Article title="A Title" text="Blah Blah Blah" icon="paper-plane" id="6" />
						 <Article title="A Title" text="Blah Blah Blah" icon="desktop" id="7" />
						 <Article title="A Title" text="Blah Blah Blah" icon="refresh" id="8" />
						 <Article title="A Title" text="Blah Blah Blah" icon="hashtag" id="9" />
						 <Article title="Yet Another Title" text="Blah Blah Blah" icon="leaf" id="10" />
						 <Article title="A Title" text="Blah Blah Blah" icon="envelope" id="11" />
						 <Article title="A Title" text="Blah Blah Blah" icon="bolt" id="12" />
					 </Matrix>
				
					 <ContactUs title="Contact Us"/>
					 
					<Footer/>

			</div>
    );
  }
}

export default App;

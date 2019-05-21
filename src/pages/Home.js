import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from './images/macbook_and_iphone.png';
import CarouselImage2 from './images/macbook_and_iphone_percent.png';
import jumbotronbackground from './images/jumbotronbackground.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode,faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptopCode);
library.add(faBriefcase);


const styles = {
    carouselitem:{
        fontWeight:"bold",
        fontSize:"250%",
        textAlign:"center",
        minHeight:"350px",
        color:"#fff",
		//backgroundColor:"#20232a",
		backgroundColor:"#007bff"
        
    },
    carouseltext:{
        color:"#FFF",
        textShadow: "2px 0px 0px #000, -2px 0px 0px #000,0px 2px 0px #000, 0px -2px 0px #000"
	},
	jumbotron:{
		paddingLeft:"2vw",
		backgroundColor:"#000",
		color:"#fff",
		backgroundRepeat:"no-repeat",
		backgroundPosition:"center",
		backgroundSize:"70%",
		backgroundImage:"url("+jumbotronbackground+")",
		marginTop:"0",
		height:"38vh",
		//width:"98vw",
		marginLeft:"auto",
		marginRight:"auto",
		marginBottom:"0"
	},
	aboutjumbotron:{
		backgroundColor:"#fff",
		color:"#007bff",
		marginTop:"0",
		//height:"40vh",
		minHeight:"50vh",
		//width:"98vw",
		marginLeft:"auto",
		marginRight:"auto",
		marginBottom:"0"
	},
	thirdjumbotron:{
		backgroundColor:"#007bff",
		color:"#fff",
		marginTop:"0",
		//height:"40vh",
		minHeight:"50vh",
		//width:"98vw",
		marginLeft:"auto",
		marginRight:"auto",
		marginBottom:"0"
	}
}

var projects=[
        {subtitle:"This website",summary:"React website just to display a little about myself",image:CarouselImage1},
        {subtitle:"Percentage tools",summary:"Simple tool for getting percentage changes of an amount",image:CarouselImage2}
    ];

class Home extends React.Component{

    

    render() {
        return (
            <>
                
                <Jumbotron fluid style={styles.jumbotron}>
                    <h1>Hello!</h1>
                    <p>
                        I am a software developer based in Bognor Regis, West Sussex, UK with a keen interest in web and mobile applications development.
                    </p>
                    <p>
                        <Button variant="primary" href="https://github.com/TimUK" target="_blank">See my projects</Button>
                    </p>
                </Jumbotron>
                <Carousel style={{marginLeft:"auto",marginRight:"auto"}}>
                {
                    projects.map((item,index)=>{
                        return(
                        <Carousel.Item key={index}>
                            {//<div className="d-block w-100 align-middle" style={styles.carouselitem}><label style={styles.carouseltext}>{item.name}</label></div>
                            }
                            <div className="d-block w-100" style={styles.carouselitem}>
                            <img src={item.image} alt="Project screenshot" style={{maxHeight:"27vh",maxWidth:"100vw"}}/>
                            </div>
                            <Carousel.Caption style={styles.carouseltext}>
                                <h3>{item.subtitle}</h3>
                                <p>{item.summary}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )})
                }
                </Carousel>
                
				<Jumbotron fluid style={styles.aboutjumbotron}>
					<Container>
						<Row>
							<Col xs={12} md={2} style={{fontSize:"700%"}}>
								<FontAwesomeIcon icon="laptop-code"/>
							</Col>
							<Col xs={12} md={10}>
								<h1>More about me</h1>
								<p style={{marginTop:"4vh",fontWeight:"normal",fontSize:"125%"}}>
									Currently I am working as a software developer and web design developer in Rustington and Littlehampton with links to Worthing, Brighton, Portsmouth and other locations around the UK. Technologies that I use on a day to day basis include React, JavaScript, HTML, CSS, Delphi, PHP and SQL.
								</p>
							</Col>
						</Row>
					</Container>
                </Jumbotron>

				<Jumbotron fluid style={styles.thirdjumbotron}>
					<Container>
						<Row>
							<Col xs={12} md={10}>
								<h1>What I do</h1>
								<p style={{marginTop:"4vh",fontWeight:"normal",fontSize:"125%"}}>
									I create small to large websites for freelance clients as well as mobile apps and desktop applications. I have worked on ecommerce projects for online stores and small local business websites. My main goal in what I do is to see a better world of technology with accessibility for all.
								</p>
							</Col>
							<Col xs={12} md={2} style={{fontSize:"700%"}}>
								<FontAwesomeIcon icon="briefcase"/>
							</Col>
						</Row>
					</Container>
                </Jumbotron>
            </>
        );
    }
}
export default Home;
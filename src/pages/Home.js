import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from './images/macbook_and_iphone.png';
import CarouselImage2 from './images/macbook_and_iphone_percent.png';
import ReactLogo from '../logo.svg';


const styles = {
    carouselitem:{
        fontWeight:"bold",
        fontSize:"250%",
        textAlign:"center",
        minHeight:"400px",
        color:"#fff",
        backgroundColor:"#20232a",
        
    },
    carouseltext:{
        color:"#FFF"
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
                <h1 style={{marginTop:"2vh",marginBottom:"2vh",marginLeft:"1vw"}}>Home</h1>
                <Jumbotron style={{width:"98vw",marginLeft:"auto",marginRight:"auto"}}>
                    <h1>Hello!</h1>
                    <p>
                        I am a software developer based in West Sussex, UK with a keen interest in web and mobile applications development.
                    </p>
                    <p>
                        <Button variant="primary" href="https://github.com/TimUK" target="_blank">See my projects</Button>
                    </p>
                </Jumbotron>
                <Carousel style={{width:"98vw",marginLeft:"auto",marginRight:"auto"}}>
                {
                    projects.map((item,index)=>{
                        return(
                        <Carousel.Item key={index}>
                            {//<div className="d-block w-100 align-middle" style={styles.carouselitem}><label style={styles.carouseltext}>{item.name}</label></div>
                            }
                            <div className="d-block w-100" style={styles.carouselitem}>
                            <img src={item.image} style={{maxHeight:"280px",maxWidth:"100vw"}}/>
                            </div>
                            <Carousel.Caption style={styles.carouseltext}>
                                <h3>{item.subtitle}</h3>
                                <p>{item.summary}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )})
                }
                </Carousel>
                
            </>
        );
    }
}
export default Home;
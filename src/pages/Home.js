import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


const styles = {
    carouselitem:{
        fontWeight:"bold",
        fontSize:"250%",
        textAlign:"center",
        width:"800px",
        height:"400px",
        color:"#fff",
        backgroundColor:"#20232a"
    },
    carouseltext:{
        position: "absolute",
        top: "20%",
        transform: "translateX(-50%)"
    }
}

var projects=[
        {name:"Project Name",subtitle:"Project subtitle",summary:"Project description in this section"},
        {name:"Another Project Name",subtitle:"Project number two",summary:"This project is the second item in the carousel"}
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
                    projects.map((item)=>{
                        return(<Carousel.Item>
                        
                            <div className="d-block w-100 align-middle" style={styles.carouselitem}><label style={styles.carouseltext}>{item.name}</label></div>
  
                        <Carousel.Caption>
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
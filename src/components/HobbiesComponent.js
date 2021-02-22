import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';




  const Hobbies = (props) => {

     return (
        <Container htmlFor="div">
             <h2 className="hobby-title mt-5" style={{color: 'gold'}}>My Hobbies</h2> {/* Hobby Title */}
             <div className="card-group mt-5" style={{color: 'gold'}}>
            <Card className="card mr-5" style={{backgroundImage: 'linear-gradient(45deg, gold, #323edd, #4d089a, purple)'}}>
            <CardImg top width="100%" src="assets\imgs\martial-arts.jpg" alt="martial arts" />
        <CardBody>
          <CardTitle tag="h5" className="card-title">Martial Arts</CardTitle>
          <CardText className="card-text">I am a Third Degree blackbelt in Tae Kwon Do and a Third Brown in Shaolin Kung Fu.
          I like practicing my kicks and doing some sparring.</CardText>
          <CardText className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
            </Card>
            <Card className="card mr-5" style={{backgroundImage: 'linear-gradient(45deg, gold, #323edd, #4d089a, purple)'}}>
            <CardImg top width="100%" src="https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif" alt="coding" />
        <CardBody>
          <CardTitle tag="h5" className="card-title">Coding</CardTitle>
          <CardText className="card-text">I really enjoy coding right now I know HTML, CSS, Javascript, Jquery, I know a little bit
          of PHP and other programming languages.</CardText>
          <CardText className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
            </Card>
            <Card className="card mr-5" style={{backgroundImage: 'linear-gradient(45deg, gold, #323edd, #4d089a, purple)'}}>
            <CardImg top width="100%" src="assets/imgs/sebastian-pociecha-FoSF9-4xTGg-unsplash.jpg" alt="working out" />
        <CardBody>
          <CardTitle tag="h5" className="card-title">Working Out</CardTitle>
          <CardText className="card-text">I like working out and making myself stronger as a martial artist and to just be
          healthier as a person. Although I do need work on my diet unfortunately I am not very good about watching
          what I eat.</CardText>
          <CardText className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
            </Card>
            </div>
        </Container>
     );
  }

export default Hobbies;
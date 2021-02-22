import React from 'react';
import { Container } from 'reactstrap';



const About = (props) => {

    return (
 <section className="bio">                  
<Container>
<h2 className="about text-center" style={{color: 'gold'}}>About me</h2>
  <p className="info text-center" style={{color: 'gold'}}>
    I'm Greek and a Martial Artist I enjoy coding, and want to make it a full time job.
    My goal is to be a Full-Stack Developer so I can be a jack of all trades and make interactive fully functional
    websites.
    I enjoy exercising and would like to be fast and powerful as a martial artist. My skills as a coder I would like
    to do more than just make websites I want to study all of the programming languages.
    including the languages that involve artificial intelligence my goal is to learn all things tech but mostly I
    just really like learning new things.
  </p>
</Container>
</section>
    );
}

export default About;
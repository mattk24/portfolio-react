import React, {Component} from 'react';
import {Jumbotron, Container} from 'reactstrap';

class Home extends Component {

  render() {

      return (
        <Jumbotron fluid>
        <Container fluid>
            <header>
                <h1
                    className="text-center mt-4"
                    style={{
                    color: 'gold'
                }}>Matthew Koukios</h1>
                <div
                    className="mx-auto"
                    style={{
                    width: 250
                }}>
                    <img
                        src='/assets/imgs/profile.jpg'
                        className="profile-img img-thumbnail"
                        alt="profile"/>
                </div>
            </header>
        </Container>
    </Jumbotron>
      );
  }


}

export default Home
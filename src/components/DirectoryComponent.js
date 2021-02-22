import React, { Component } from 'react';
import {  
    Card, 
    CardGroup,
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Container
} from 'reactstrap';
import { PORTFOLIOS } from '../shared/portfolios';

class Directory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            portfolios: PORTFOLIOS
        };
    }
   
   render() {
      const directory = this.props.portfolios.map(portfolio => {
          return (
            <CardGroup className="card-group mt-5">
                <div key={portfolio.id}>
            <Card className="card-portfolio mr-5 mb-5">
                <CardImg top style={{width: 430}} className=" card-img img-thumbnail card-img-top " src={portfolio.image} alt={portfolio.name}/>
                <CardBody className="card-body">
                    <br/>
                    <CardTitle tag="h4" className="card-title">{portfolio.name}</CardTitle>
                    <br/>
                    <CardSubtitle tag="h6">{portfolio.subtitle}</CardSubtitle>
                    <br/>
                    <CardText className="card-text">{portfolio.description}</CardText>
                    <Button color="primary" className="btn-lg" href={portfolio.url}>{portfolio.name}</Button>
                </CardBody>
            </Card>
            </div>
            </CardGroup>
          );
      });


       return (
    <Container>
        
            {directory}
           
    </Container>
       );
   }
}

export default Directory;
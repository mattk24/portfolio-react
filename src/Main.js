import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import Rating from './components/RatingComponent';
import Hobbies from './components/HobbiesComponent';
import About from './components/AboutComponent';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    FormGroup,
    NavLink,
    Row,
    Container,
    Jumbotron
} from 'reactstrap';
import Directory from './components/DirectoryComponent';
import {PORTFOLIOS} from './shared/portfolios';

// This example show how you could create a custom <Link> that renders something
// special when the URL is the same as the one the <Link> points to.

export default function Main() {

    return (
        <Router>
            <div>

                <NavigationLink activeOnlyWhenExact={true} to="/"/>

                <NavigationLink to="/portfolio"/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function NavigationLink({label, to, activeOnlyWhenExact}) {
    useRouteMatch({path: to, exact: activeOnlyWhenExact});

    return (
        <Link to={to}>{label}</Link>
    );
}

function Home() {
    return (
        <div className="Home">
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
            <Navigation/>
            <About/>
            <Rating/>
            <Hobbies/>
        </div>
    );
}

function Portfolio() {

    return (
        <div className="portfolio">
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
            <Navigation/>
            <RenderPortfolio/>
        </div>
    );
}

class RenderPortfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolios: PORTFOLIOS
        }
    }
    render() {
        return (<Directory portfolios={this.state.portfolios}/>);
    }
}

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isResetOpen: false,
            name: '',
            email: '',
            phonNum: '',
            message: ''
        }

        this.toggleNav = this
            .toggleNav
            .bind(this);

        this.toggleModal = this
            .toggleModal
            .bind(this);

    }

    handleSubmit() {
        this.setState({redirect: true});
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    valid(item, type)
    {
        let itemValue = item.target.value;
        switch (type) {
            case 'name':
                {
                    this.setState({name: itemValue})
                }
            case 'email':
                {
                    this.setState({email: itemValue})
                }
            case 'phonNum':
                {
                    this.setState({phonNum: itemValue})
                }
            case 'message':
                {
                    this.setState({message: itemValue})
                }
        }
    }

    submit()
    {
        let obj = {}
        obj.name = this.state.name;
        obj.email = this.state.email;
        obj.phonNum = this.state.phonNum;
        obj.message = this.state.message

        console.log('submit data', obj)

        const name = document
            .getElementById('name')
            .value;
        const email = document
            .getElementById('email')
            .value;
        const tel = document
            .getElementById('tel')
            .value;
        const message = document
            .getElementById('message')
            .value;

        window.location = `mailto:lightning4@yahoo.com?&subject=Hello%20from%20${name}&body= ${name} ${email} ${tel} ${message}`;
    }

    render() {

        const header = {
            color: 'yellow',
            backgroundImage: 'linear-gradient(8deg, #323eed, #4d089a, #4d084a)',
            borderBottom: 'none'
        };

        const row = {
            textAlign: 'center',
            color: 'gold'
        };

        const groupForm = {
            paddingLeft: '0rem',
            paddingRight: '0rem'
        };

        const groupForm2 = {
            paddingLeft: '0rem',
            paddingRight: '0rem'
        };

        const groupForm3 = {
            paddingLeft: '0rem',
            paddingRight: '0rem'
        };

        const body = {
            backgroundImage: 'linear-gradient(45deg, #323eed, #4d089a, #4d084a)'
        };

        const footer = {
            backgroundImage: 'linear-gradient(50deg, #323eed, #4d089a, #4d084a)'
        };

        return (
            <React.Fragment>
                <Nav
                    className="navbar navbar-expand-sm"
                    style={{
                    backgroundImage: 'linear-gradient(20deg, #323edd, #4d089a, #4d084a)'
                }}>
                    <Navbar
                        className="collapse navbar-collapse col-xs-auto col-sm-auto col-md-5"
                        id="navigation">
                        <div
                            className="container"
                            style={{
                            marginLeft: '-2rem'
                        }}>
                            <NavbarBrand
                                className="navbar-brand col-auto col-sm-auto"
                                style={{
                                color: 'gold'
                            }}
                                href="/">Matthew's Web Acropolis LLC</NavbarBrand>

                            <div
                                className="collapse navbar-collapse col-xs-auto col-sm-auto col-md-5"
                                id="navigation">
                                <ul
                                    className="navbar-nav col-xs-auto col-sm-auto col-md-auto col-lg-auto"
                                    style={{
                                    marginleft: '20rem'
                                }}>
                                    <NavItem htmlFor="li">
                                        <NavLink className="nav-link">
                                            <a
                                                className="nav-link ml-5 btn-lg"
                                                style={{
                                                color: 'gold'
                                            }}
                                                href="/portfolio">Portfolio</a>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem htmlFor="li">
                                        <NavLink className="nav-link">
                                            <a
                                                className="nav-link ml-5 btn-lg"
                                                style={{
                                                color: 'gold'
                                            }}
                                                onClick={this.toggleModal}
                                                href='#contactForm'>Contact Me</a>
                                        </NavLink>
                                    </NavItem>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                </Nav>
                <div>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        toggle={this.toggleModal}
                        id="contactForm">
                        <ModalHeader toggle={this.toggleModal} style={header}>Contact Me</ModalHeader>
                        <ModalBody style={body}>
                            <Container fluid>
                                <form method="post" enctype="text/plain" onSubmit={this.handleSubmit}>
                                    <Row form className="form-row col-md-12 " style={row}>
                                        <Col md={7} className="mx-auto">
                                            <FormGroup style={groupForm} className="">
                                                <label htmlFor="name">Your Name:
                                                    <input
                                                        onChange={(item) => this.valid(item, "name")}
                                                        type="text"
                                                        className="form-control"
                                                        id="name"/>
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={7} className="mx-auto">
                                            <FormGroup style={groupForm2} className="">
                                                <label htmlFor="email">Email:
                                                    <input
                                                        onChange={(item) => this.valid(item, "email")}
                                                        type="email"
                                                        className="form-control"
                                                        id="email"/>
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={7} className="mx-auto">
                                            <FormGroup style={groupForm3} className="">
                                                <label htmlFor="phoneNumber">(optional) Your Phone Number:
                                                    <input
                                                        onChange={(item) => this.valid(item, "phonNum")}
                                                        type="tel"
                                                        className="form-control"
                                                        id="tel"/>
                                                </label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup className="form-group">
                                        <label
                                            htmlFor="message"
                                            style={{
                                            color: 'yellow'
                                        }}>Your Message:
                                            <Col md={30}>
                                                <textarea
                                                    onChange={(item) => this.valid(item, "message")}
                                                    model=".message"
                                                    rows="10"
                                                    cols="30"
                                                    className="form-control"
                                                    name="yourMessage"
                                                    id="message"/>
                                            </Col>
                                        </label>
                                    </FormGroup>
                                </form>
                            </Container>
                        </ModalBody>
                        <div style={footer}>
                            <ModalFooter
                                htmlFor="div"
                                style={{
                                borderTop: 'none'
                            }}
                                className="form-group col-xs col-sm col-md-4 mx-auto">
                                <div className="footer">
                                    <input
                                        onClick={() => this.submit()}
                                        type="submit"
                                        value="Submit"
                                        color="primary"
                                        className="btn btn-primary mr-4"/>
                                </div>
                            </ModalFooter>
                        </div>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}

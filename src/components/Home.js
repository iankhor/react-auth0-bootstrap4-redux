import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Container,
         Row,
         Col,
         Button, 
         ButtonGroup } from 'reactstrap'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {  data: "dummy data 1" }
    }

    renderSignInUp = () => {
        return <Button color="primary" onClick={ this.props.auth.login }>Sign In / Sign Up</Button>
    }

    renderLogOut = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <Button color="primary" onClick={ this.props.auth.logout}>Sign out</Button>
                    </Col>
                </Row>
            </div>
        )
    }

    render(){
        return(
            <Container>
                <Row className="buttons">
                    <Col>
                        <ButtonGroup vertical>
                            { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                        </ButtonGroup>
                    </Col>
                </Row> 
                <Row className="routes">
                    <Col>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/public">Public Route</NavLink>
                            </li>
                            <li>
                                <NavLink to="/private">Private Route</NavLink>
                            </li>
                            <li>
                                <NavLink to="/counter">Counter</NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home


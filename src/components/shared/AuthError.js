import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router'

const AuthError = (props) => {
        return (
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>Login error, try logging in again !</h1>
                        <p><NavLink to="/">Go Home</NavLink></p>
                    </Col> 
                </Row>   
            </Container>
        )
}

export default AuthError
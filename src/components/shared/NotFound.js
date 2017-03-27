import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class NotFound extends Component {
    render(){
        return(
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>Not Found page</h1>
                    </Col> 
                </Row>   
            </Container>
        )
    }
}

export default NotFound


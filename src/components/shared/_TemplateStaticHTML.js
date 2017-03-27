import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const StaticHTMLTemplate = (props) => {
        return (
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>This is from StaticHTMLTemplate</h1>
                    </Col> 
                </Row>   
            </Container>
        )
}

export default StaticHTMLTemplate
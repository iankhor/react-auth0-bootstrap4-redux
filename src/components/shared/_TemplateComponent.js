import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class TemplateComponent extends Component {
    render(){
        return(
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>This is a componentTemplate page</h1>
                    </Col> 
                </Row>   
            </Container>
        )
    }
}

export default TemplateComponent


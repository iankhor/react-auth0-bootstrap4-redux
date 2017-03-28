import React , { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from './App'


class Counter extends Component {
    render(){
        return(
          <App>
            <Container className="generic-center">
                <Row>   
                    <Col>
                    <p>Current Count: xxx</p>
                    </Col> 
                </Row>   
                <Row>   
                    <Col>
                      <button className="btn btn-success">Add</button>
                      <button className="btn btn-danger">Subtract</button>
                    </Col> 
                </Row>   
            </Container>
          </App>
        )
    }
}

export default Counter
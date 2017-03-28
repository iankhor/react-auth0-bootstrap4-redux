import React , { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from './App'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './../actions/counterActions'

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

function mapStateToProps(state){
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( actionCreators, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
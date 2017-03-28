import React , { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from './App'

//redux
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux' // refactored and not needed
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

// refactored and not needed
// function mapDispatchToProps(dispatch){
//   return bindActionCreators( actionCreators, dispatch )
// }

// before refactor
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default connect(mapStateToProps, actionCreators)(Counter)
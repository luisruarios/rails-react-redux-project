import React from "react"
import PropTypes from "prop-types"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"


const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'

function getThings() {
  console.log('getThings() Action!!')
  return {
    type: GET_THINGS_REQUEST
  }
}


class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Greeting: {this.props.greeting}</h1>
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>
          getThings
        </button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings }

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld)
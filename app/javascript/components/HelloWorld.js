import React from "react"
import PropTypes from "prop-types"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { List } from "semantic-ui-react"


const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS'

function getThings() {
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST })
    return fetch ('v1/things.json')
    .then(response => response.json())
    .then(json => dispatch(getThingsSuccess(json)))
    .catch(error => console.log(error))
  }
}

export function getThingsSuccess(json){
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}


class HelloWorld extends React.Component {
  render() {
    const { things } = this.props;
    const thingList = things.map((thing) => {
     
    return (
      <List.Item>
        <List.Icon name='arrow circle right' size='large'
        verticalAlign="middle"/>
        <List.Content>
          <List.Header as='a'>{thing.name}{' '}</List.Header>
          <List.Description as='a'>{thing.guid}</List.Description>
          </List.Content> 
      </List.Item>
    )
  })
    return (
      <React.Fragment>
        <p>Greeting: {this.props.greeting}</p>
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>
          getThings
        </button>
        <br />
        <ul>{thingList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings }

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld)
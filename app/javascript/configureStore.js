import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    things: [
        {
            name: "test",
            guid: "123"
        }
    ]
}

function rootReducer(state, action) {
    console.log(action.type)
    switch (action.type) {
        case "GET_THINGS_SUCCESS":
        return { things: action.json.things}
    }
    return state
}

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState,
        composeEnhancers(applyMiddleware(thunk))
        
        )
    return store
}
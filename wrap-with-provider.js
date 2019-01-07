import React from "react"
import { Provider } from "react-redux"

import configureStore from "./src/store/configureStore"

const store = configureStore()

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={store}>{element}</Provider>

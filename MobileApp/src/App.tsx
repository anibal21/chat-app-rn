console.ignoredYellowBox = ["Remote debugger"];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
])

import React, { useEffect } from "react"
import HomeScreen from './screens/HomeScreen'

const App = () => <HomeScreen />

export default App
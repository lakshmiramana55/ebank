import {Switch, Route} from 'react-router-dom'

import './App.css'
import LoginForm from './LoginForm'
import Home from './Home'
import NotFound from './NotFound'
// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Latest } from './ui/src/presentation/ui-p-top/Latest'
import { NotFound } from './ui/src/presentation/ui-p-top/NotFound'
import { Top } from './ui/src/presentation/ui-p-top/Top'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/latest" component={Latest} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Latest } from './ui/src/presentation/ui-p-top/Latest'
import { NotFound } from './ui/src/presentation/ui-p-top/NotFound'
import { DupPageTop } from './ui/src/presentation/ui-p-top/DupPageTop'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DupPageTop} />
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

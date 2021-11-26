import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DupPageLatest } from './ui/src/presentation/ui-p-page/DupPageLatest'
import { NotFound } from './ui/src/presentation/ui-p-page/NotFound'
import { DupPageTop } from './ui/src/presentation/ui-p-page/DupPageTop'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DupPageTop} />
        <Route path="/latest" component={DupPageLatest} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

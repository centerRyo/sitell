import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DupPageLatest } from './ui/src/presentation/ui-p-page/DupPageLatest'
import { NotFound } from './ui/src/presentation/ui-p-page/NotFound'
import { DupPageTop } from './ui/src/presentation/ui-p-page/DupPageTop'
import { DupPageMasterpiece } from './ui/src/presentation/ui-p-page/DupPageMasterpiece'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DupPageTop} />
        <Route path="/latest" component={DupPageLatest} />
        <Route path="/masterpiece" component={DupPageMasterpiece} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

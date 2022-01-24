import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DupPageLatest } from './ui/src/presentation/ui-p-page/DupPageLatest'
import { NotFound } from './ui/src/presentation/ui-p-page/NotFound'
import { DupPageTop } from './ui/src/presentation/ui-p-page/DupPageTop'
import { DupPageMasterpiece } from './ui/src/presentation/ui-p-page/DupPageMasterpiece'
import { DupPageRanking } from './ui/src/presentation/ui-p-page/DupPageRanking'
import { DupPageCategory } from './ui/src/presentation/ui-p-page/DupPageCategory'
import { DupPageItem } from './ui/src/presentation/ui-p-page/DupPageIitem'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DupPageTop} />
        <Route path="/latest" component={DupPageLatest} />
        <Route path="/masterpiece" component={DupPageMasterpiece} />
        <Route path="/rankings" component={DupPageRanking} />
        <Route path="/category" component={DupPageCategory} />
        <Route path="/item/:id" component={DupPageItem} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DupPageLatest } from './ui/src/presentation/ui-p-page/DupPageLatest'
import { DupPageTop } from './ui/src/presentation/ui-p-page/DupPageTop'
import { DupPageMasterpiece } from './ui/src/presentation/ui-p-page/DupPageMasterpiece'
import { DupPageRanking } from './ui/src/presentation/ui-p-page/DupPageRanking'
import { DupPageCategory } from './ui/src/presentation/ui-p-page/DupPageCategory'
import { DupPageItem } from './ui/src/presentation/ui-p-page/DupPageIitem'
import { DupScrollToTop } from './ui/src/presentation/ui-u-location/DupScrollToTop'
import { DupErrorNotFound } from './ui/src/presentation/ui-p-error/DupErrorNotFound'

const App: React.FC = () => {
  return (
    <Router>
      <DupScrollToTop />
      <Switch>
        <Route exact path="/" component={DupPageTop} />
        <Route path="/latest" component={DupPageLatest} />
        <Route path="/masterpiece" component={DupPageMasterpiece} />
        <Route path="/rankings" component={DupPageRanking} />
        <Route path="/category/:id" component={DupPageCategory} />
        <Route path="/item/:id" component={DupPageItem} />
        <Route component={DupErrorNotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DupPageLatest } from '../presentation/ui-p-page/DupPageLatest'
import { DupPageTop } from '../presentation/ui-p-page/DupPageTop'
import { DupPageMasterpiece } from '../presentation/ui-p-page/DupPageMasterpiece'
import { DupPageRanking } from '../presentation/ui-p-page/DupPageRanking'
import { DupPageCategory } from '../presentation/ui-p-page/DupPageCategory'
import { DupPageItem } from '../presentation/ui-p-page/DupPageIitem'
import { DupScrollToTop } from '../presentation/ui-u-location/DupScrollToTop'
import { DupErrorNotFound } from '../presentation/ui-p-error/DupErrorNotFound'

const App: React.FC = () => {
  return (
    <Router>
      <DupScrollToTop />
      <Switch>
        <Route exact path="/" component={DupPageTop} />
        <Route path="/latest" component={DupPageLatest} />
        {/* <<<<<<<<<<<< 初期リリースに不必要なのでコメントアウト >>>>>>>>>>>>>>> */}
        {/* <Route path="/masterpiece" component={DupPageMasterpiece} />
        <Route path="/rankings" component={DupPageRanking} /> */}
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

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DupPageLatest } from '../components/ui-p-page/DupPageLatest';
import { DupPageTop } from '../components/ui-p-page/DupPageTop';
import { DupPageMasterpiece } from '../components/ui-p-page/DupPageMasterpiece';
import { DupPageRanking } from '../components/ui-p-page/DupPageRanking';
import { DupPageCategory } from '../components/ui-p-page/DupPageCategory';
import { DupPageItem } from '../components/ui-p-page/DupPageIitem';
import { DupScrollToTop } from '../components/ui-u-location/DupScrollToTop';
import { DupErrorNotFound } from '../components/ui-p-error/DupErrorNotFound';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <DupScrollToTop />
        <Switch>
          <Route exact path='/' component={DupPageTop} />
          <Route path='/latest' component={DupPageLatest} />
          {/* <<<<<<<<<<<< 初期リリースに不必要なのでコメントアウト >>>>>>>>>>>>>>> */}
          {/* <Route path="/masterpiece" component={DupPageMasterpiece} />
        <Route path="/rankings" component={DupPageRanking} /> */}
          <Route path='/category/:id' component={DupPageCategory} />
          <Route path='/item/:id' component={DupPageItem} />
          <Route component={DupErrorNotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

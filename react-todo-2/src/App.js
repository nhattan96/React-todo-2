import './App.css';
import { Route, Switch } from 'react-router-dom'

import AllMeetupPages from './pages/AllMeetups'
import FavoriesPages from './pages/Favorites'
import NewMeetupPages from './pages/NewMeetups'
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupPages></AllMeetupPages>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPages></NewMeetupPages>
        </Route>
        <Route path='/favories'>
          <FavoriesPages></FavoriesPages>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

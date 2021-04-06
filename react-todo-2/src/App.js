import './App.css';
import { Route, Switch } from 'react-router-dom'

import AllMeetupPages from './pages/AllMeetups'
import FavoriesPages from './pages/Favorites'
import NewMeetupPages from './pages/NewMeetups'

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

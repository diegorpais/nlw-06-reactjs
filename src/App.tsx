import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

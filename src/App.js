import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./components/Header";
import {Add} from './components/Add';
import {Watchlist} from './components/Watchlist';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
    return (
        <Router>
            <Header>
                <Switch>
                    <Route exact path="/">
                        <Add />
                    </Route>

                    <Route path="/watchlist">
                        <Watchlist />
                    </Route>

                </Switch>
            </Header>
        </Router>
    )
}

export default App;

import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home"
import Kitty from "./Kitty";
import Breeds from "./Breeds"
import BreedDetails from "./BreedDetails";


function App() {
    return (

        <Router>
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/Kitty" component={Kitty} />
            <Route exact path="/breeds" component={Breeds} />
            <Route exact path="/breeds/:id" component={BreedDetails} />

        </Router>

    );
}

export default App;
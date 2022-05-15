import { Switch, Route} from "react-router-dom";
import Home from "../pages/Home/Home"

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
     );
}
 
export default Routes;
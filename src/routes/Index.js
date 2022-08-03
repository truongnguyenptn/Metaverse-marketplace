import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
function Router() {
    return (<Routes>
        <Route path='/'>
            <Route index element={<Home />}/>
            <Route></Route>
        </Route>
    </Routes>);
}

export default Router;
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Marketplace from '../pages/Marketplace/Marketplace';
import Play from '../pages/Play/Play';
function Router() {
    return (<Routes>
        <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/play' element={<Play/>}/>
            <Route path='/marketplace' element={<Marketplace/>}/>
        </Route>
    </Routes>);
}

export default Router;
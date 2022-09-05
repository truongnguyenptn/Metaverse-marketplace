import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/Index";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {DataProvider} from '../GlobalStates'
library.add(fab, fas)
function Layout() {
    return (<BrowserRouter>
    <AppRoutes></AppRoutes>
    </BrowserRouter>);
}

export default Layout;
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Index";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)
function Layout() {
    return (<BrowserRouter>
    <Router></Router>
    </BrowserRouter>);
}

export default Layout;
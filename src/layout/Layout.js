import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Index";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)
const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
      },
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
        code: 'vn',
        name: 'Vietnamese',
        country_code: 'vn',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]
function Layout() {
    return (<BrowserRouter>
    <Router></Router>
    </BrowserRouter>);
}

export default Layout;
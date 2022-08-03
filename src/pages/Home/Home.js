import { useState } from "react";
import Header from "../../components/Header/Header";
import ModalLogin from "../../components/Login/Login";
function Home() {
    const [modal,setModal] = useState(0);

    return (<div>
        <Header/>
    </div> );
}

export default Home;
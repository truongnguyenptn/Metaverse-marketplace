import {axios} from "axios";
import { useState, useEffect } from "react";
function CategoriesAPI() {
    const [levels, setLevels] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getLevels = async () =>{
            const res = await axios.get('/api/levels')
            console.log(res.dâta)
            setLevels(res.data)
        }

        getLevels()
    },[callback])
    return {
        categories: [levels, setLevels],
        callback: [callback, setCallback]
    }
}

export default CategoriesAPI;
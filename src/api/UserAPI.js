import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState([])
    const [history, setHistory] = useState([])

    const getUser = useCallback(async () => {
        if (token) {
            try {
                console.log('token');
                const res = await axios.get('/user/infor', {
                    headers: { Authorization: token }
                })

                setIsLogged(true)
                res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                setCart(res.data.cart)
                setOrder(res.data.inventory)

            } catch (err) {
                alert(err.response.data.msg)
            }
        }
    }, [token])

    useEffect(() => {
        getUser()
    }, [getUser])


    const addCart = async (product) => {
        if (!isLogged) return alert("Please login to continue buying")

        let check = cart.every(item => {
            return item._id !== product._id
        })

        if (check) {
            check = order.every(item => {
                return item._id !== product._id
            })

            if (check) {
                setCart([...cart, { ...product, quantity: 1 }])

                await axios.patch('/user/addcart', { cart: [...cart, { ...product, quantity: 1 }] }, {
                    headers: { Authorization: token }
                })

            } else {
                alert("This product has been buy")
            }
        } else {
            alert("This product has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory],
        order: [order, setOrder]
    }
}

export default UserAPI

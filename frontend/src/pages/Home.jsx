import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
import { useEffect, useState } from "react"

const urlPizzas = "http://localhost:5000/api/pizzas"

const Home = () => {

    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        fetchPizzas()
    }, [])

    const fetchPizzas = async () => {
        try {
            const response = await fetch(urlPizzas)
            if (!response.ok) {
                throw new Error('error en url')
            }
            const data = await response.json()
            console.log(data)
            setPizzas(data)

        } catch (error) {
            console.error('error', error)
        }
    }


    return (
        <>
            <section>
                <Header />
            </section>

            <section className="cards-container">
                <div className="container-items">
                    {pizzas.map((pizza) => (
                        <CardPizza key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home
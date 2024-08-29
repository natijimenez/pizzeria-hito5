import { useEffect, useState } from "react"

const urlTipoPizza = "http://localhost:5000/api/pizzas"

const Pizza = () => {
    const [tipoPizza, setTipoPizza] = useState([])
    useEffect(() => {
        fetchTipoPizza()
    }, [])

    const fetchTipoPizza = async () => {
        try {
            const response = await fetch(urlTipoPizza)
            if (!response.ok) {
                throw new Error('error en url')
            }
            const data = await response.json()
            console.log(data)
            setTipoPizza(data)

        } catch (error) {
            console.error('error', error)
        }
    }

    const pizza = tipoPizza.find(pizza => pizza.id === 'p001');

    return (
        <div className="sectionPizzaDet">
            {pizza && (
                <div className="contenedorPizzaDet colorTextDet" key={pizza.id} >
                    <img className="pizzaDetImg colorTextDet" src={pizza.img} alt={pizza.name} />
                    <div className="pizzaDetText">
                        <h2 className="pizzaDetTitle colorTextDet">Pizza {pizza.name}</h2>
                        <p className="pizzaDetDesc colorTextDet">{pizza.desc}</p>
                        <p className="pizzaDetIngredients colorTextDet">Ingredientes:</p>
                        <ul className="pizzaDetIngredient">
                            {pizza.ingredients.map((ingredient, index) => (
                                <li className="colorTextDet" key={index}><span>🍕 </span>{ingredient}</li>
                            ))}
                        </ul>
                        <div className="pizzaDetBtns">
                            <span className="pizzaDetPrice colorTextDet">Precio: ${pizza.price}</span>
                            <button className="pizzaDetBtnAdd">Añadir 🛒</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Pizza
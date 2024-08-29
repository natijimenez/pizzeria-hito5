/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const CardPizza = ({ pizza }) => {
  const { img, name, ingredients, price } = pizza

  return (
    <Card style={{ width: '18rem' }} className='item'>
      <Card.Img variant="top" src={img} alt={name} />
      <ListGroup className="list-group-flush pizzaCard">
        <ListGroup.Item className='card-name'>Pizza {name}</ListGroup.Item>
        <ListGroup.Item className="card-title-ingredients">
          Ingredientes:<br />
          <ul className='card-container-ingredients'>
            <span>🍕</span>
            <li className="card-ingredients">
              {ingredients.map((ingredient, index) => (
                <span key={index} className="card-ingredients">
                  {ingredient}
                  {index < ingredients.length - 1 && ', '}
                </span>
              ))}
            </li>
          </ul>
        </ListGroup.Item>
        <ListGroup.Item className="card-price">Precio: <span className="card-price">${price}</span></ListGroup.Item>
      </ListGroup>
      <Card.Body className='card-btns-container'>
        <Card.Link href="#" className="card-link card-btn-more">Ver más 👀</Card.Link>
        <Card.Link href="#" className="card-link card-btn-add">Añadir 🛒</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
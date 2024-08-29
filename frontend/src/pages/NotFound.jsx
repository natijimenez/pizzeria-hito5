import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src="../../public/pizza-quemada.jpg" />

            <div className="notFound">
                <h2>404</h2>
                <span>Site Not Found</span>
                <Link to="/" className="btnGoHome">ir al home</Link>
            </div>
        </div>
    )
}

export default NotFound
import { Link } from "react-router-dom"

function Header()
{
    return(  <nav className = "blue darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React Фильмы</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
        </div>
      </nav>)
}

export {Header}
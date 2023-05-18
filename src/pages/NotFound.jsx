import { Link } from "react-router-dom"

function  NotFound() {
    return <div>Данная страница не найдена. Перейти на {<Link to='/'>главну.</Link>} </div>
    
}

export { NotFound }
import { useParams } from "react-router-dom"

function  Movie() {
    const value = useParams();
    console.log(value);
    return <h1>Some move</h1>
    
}

export { Movie }
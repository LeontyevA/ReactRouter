import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { filteredCatigory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function  Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

    useEffect(() => {
        filteredCatigory(name).then((data) => setMeals(data.meals))
    }, [name])
    
    return <>
        <button onClick={goBack} className="btn">Назад</button>
        {!meals.length ? <Preloader/>:<MealList meals={meals}/>}
    </>
    
}

export { Category }
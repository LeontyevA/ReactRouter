import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
	const { idMeal } = useParams();
	const [recipe, setRecipe] = useState({});
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	useEffect(() => {
		getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
	}, [idMeal]);

	return (
		<>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className='recipe'>
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<h6>{recipe.strCategory}</h6>
					{recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
					<p>{recipe.strInstructions}</p>

					<table className='centered'>
						<thead>
							<tr>
								<th>Ингредиент</th>
								<th>Мера</th>{' '}
							</tr>
						</thead>
						<tbody>
							{Object.keys(recipe).map((key) => {
								if (key.includes('Ingredient') && recipe[key]){
									return <tr key ={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{
                                            recipe[key.replace(/strIngredient/gi, 'strMeasure')]}</td>
                                    </tr>;
                                }
                                else return null;
							})}
						</tbody>
					</table>

					{recipe.strYoutube ? (
						<div className='row'>
							<h5 style={{margin: '2rem 0 1rem'}}>Видео рецепт</h5>
							<iframe
								title={idMeal}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowfullscreen
							></iframe>
							{/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/9ACh41q7bi8" title="Экспонат - Квашеная, (cover  Ленинград)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
						</div>
					) : null}
				</div>
			)}
			<button onClick={goBack} className='btn'>
				Назад
			</button>
		</>
	);
}

export { Recipe };

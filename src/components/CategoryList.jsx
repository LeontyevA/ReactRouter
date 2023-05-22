import { CategoryItem } from './CategoryItem';

function CotegoryList({ catalog = [] }) {
	return (
		<div className='list'>
			{catalog.map((el) => (
				<CategoryItem key={el.idCategory} {...el} />
			))}
			;
		</div>
	);
}

export { CotegoryList };

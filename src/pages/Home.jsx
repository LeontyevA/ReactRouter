import { useEffect, useState } from 'react';
import { getCatigories } from '../api';
import { Preloader } from '../components/Preloader';
import { CotegoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	console.log(useLocation());
	//console.log(useNavigate());
	//const {pathname, search} = useLocation();
	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const pushPath = (str) => {
		navigate(pathname + `?search=${str}`);
	};

	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);
		pushPath(str);
	};

	useEffect(() => {
		const str = search.split('=')[1].toLowerCase();
		getCatigories().then((data) => {
			setCatalog(data.categories);
			setFilteredCatalog(
				search
					? data.categories.filter((item) =>
							item.strCategory.toLowerCase().includes(str)
					  )
					: data.categories
			);
		});
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CotegoryList catalog={filteredCatalog} />
			)}
		</>
	);
}

export { Home };

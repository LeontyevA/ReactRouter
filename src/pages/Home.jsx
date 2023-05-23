import { useEffect, useState } from 'react';
import { getCatigories } from '../api';
import { Preloader } from '../components/Preloader';
import { CotegoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);
    
	useEffect(() => {
		getCatigories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(data.categories);
		});
	}, []);

    return (
        <>
            <Search cb = {}/>
            {!catalog.length ? ( <Preloader />) : (<CotegoryList catalog={filteredCatalog}/>)}
        </>
    )
}

export { Home };

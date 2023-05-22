import { useEffect, useState } from 'react';
import { getCatigories } from '../api';
import { Preloader } from '../components/Preloader';
import { CotegoryList } from '../components/CategoryList';

function Home() {
	const [catalog, setCatalog] = useState([]);

	useEffect(() => {
		getCatigories().then(data => {
			setCatalog(data.categories);
		});
	}, []);

    return (
        <>
            {!catalog.length ? ( <Preloader />) : (<CotegoryList catalog={catalog}/>)}
        </>
    )
}

export { Home };

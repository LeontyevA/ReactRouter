import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Category } from './components/Category';
import { MealItem } from './components/MealItem';
import { Recipe } from './components/Recipe';

const App = () => {
	return (
		<>
			<Header />
			<main className='content container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
					<Route path='/category/:name' element={<Category />} />
					<Route path='/recipe/:idMeal' elsement={<Recipe />}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;

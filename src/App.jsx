import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

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
					<Route path='/meal/:idMeal' element={<Recipe />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;

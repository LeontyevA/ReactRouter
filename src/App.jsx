import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Movie } from './pages/Movie';

const App = () => {
	return (
		<>
			<Header />
			<main className='content container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
					<Route path='/movies/:id' element={<Movie />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;

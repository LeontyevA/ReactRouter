import { useState } from 'react';

function Search({ cb = Function.prototype }) {
	const [value, setValue] = useState('');

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		cb(value);
	};

	return (
		<div className='row'>
			<div className='input-field col s12'>
				<input
					type='search'
					id='search-field'
					placeholder='Поиск'
					onKeyDown={handleKeyDown}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button
					className='btn'
					style={{ position: 'absolute', top: 0, right: 0 }}
					onClick={handleSubmit}
				>
					Поиск
				</button>
			</div>
		</div>
	);
}

export { Search };

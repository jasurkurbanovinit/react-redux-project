import React from 'react';
import { useSelector } from 'react-redux';

function List() {
	const articles = useSelector((state) => state.articles);

	return (
		<>
			<ul>
				{articles.map((el) => (
					<li key={el.index}>{el}</li>
				))}
			</ul>
		</>
	);
}

export default List;

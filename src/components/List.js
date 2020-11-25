import React from 'react';
import { connect } from 'react-redux';

function List({ articles }) {
	return (
		<ul>
			{articles.map((el) => (
				<li key={el.id}>{el.title}</li>
			))}
		</ul>
	);
}

const mapStateToProps = (state) => {
	return { articles: state.articles };
};
export default connect(mapStateToProps)(List);

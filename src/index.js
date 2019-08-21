import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
	const message = 'Header Component';
	return <h1>{message}</h1>;
};

const App = () => {
	//send a default state value, returns an array
	//return value === [currentValue, functionToChangeValue]
	// const countState = useState(40);
	// const count = countState[0];
	// const updateCount = countState[1];

	//destructured version of above
	const [count, updateCount] = useState(36);

	// setTimeout(() => {
	// 	updateCount(100);
	// }, 2000);

	//update count

	return (
		<div>
			<Header />
			<h4>Current count: {count}</h4>
			<button onClick={() => updateCount(count + 1)}>Increment</button>
			<button onClick={() => updateCount(count - 1)}>Decrement</button>
			<button onClick={() => updateCount(36)}>Reset</button>
			{count === 42 ? (
				<p>
					You have found the answer to the ultimate question of life,
					the universe and everything.
				</p>
			) : null}
		</div>
	);
};

const container = document.getElementById('root');
ReactDOM.render(<App />, container);

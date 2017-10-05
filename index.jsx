import React from 'react';
import ReactDOM from 'react-dom';
import Data from './components/data';
import Phrase from './components/phrase';
import Result from './components/result';

class SimpleComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>Shakespearean Cat</h2>
				<Phrase/>
				<Data/>
				<Result/>
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<SimpleComponent />, root);
});

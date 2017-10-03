import React from 'react';
import ReactDOM from 'react-dom';

// Creates a re-usable `SimpleComponent` class.
class SimpleComponent extends React.Component {
	render() {
		return (
			<h2>I am a SimpleComponent!</h2>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<SimpleComponent />, root);
});

import React from 'react';
import { MainComponent, NavbarComponent } from './components';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<React.Fragment>
			<NavbarComponent />
			<MainComponent />
		</React.Fragment>
	);
}

export default App;

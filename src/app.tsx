import React from 'react';
import { HeaderComponent, MainComponent } from './components';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<React.Fragment>
			<HeaderComponent />
			<MainComponent />
		</React.Fragment>
	);
}

export default App;

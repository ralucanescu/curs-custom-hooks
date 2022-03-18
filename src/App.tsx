import React from 'react';
import './App.css';
import AuthenticatedApp from './AuthenticatedApp';
import Login from './components/Login';

function App() {
	const token = window.localStorage.getItem('token');
	return (
	<>
		{token
		? <AuthenticatedApp />
		: <Login />
	}

	</>
	);
}

export default App;

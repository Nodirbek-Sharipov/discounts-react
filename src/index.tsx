import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeContextProvider from './contexts/ThemeContext'
import LanguageContextProvider from './contexts/LanguageContext'

const AppWrap = () => (
	<LanguageContextProvider>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</LanguageContextProvider>
)

ReactDOM.render(
	<React.StrictMode>
		<AppWrap />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

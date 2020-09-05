import React, {
	createContext,
	Component,
} from 'react'

import {
	darken,
	lighten,
} from '../utils/themeChanger'

const initialState = {
	themeMode: localStorage.getItem('themeMode'),
	setThemeMode: (theme:string):void=> {},
}

export const ThemeContext = createContext({...initialState})


class ThemeContextProvider extends Component {

	state = {...initialState}

	componentDidMount(){

		if(this.state.themeMode === 'light'){
			lighten()
		}

		if(this.state.themeMode === 'dark'){
			darken()
		}

	}

	render() {
		return (
			<ThemeContext.Provider value={{
				...this.state,
				setThemeMode: (theme:string)=> {
					localStorage.setItem('themeMode', theme)
					this.setState({...this.state, themeMode: theme})

					if(theme === 'light'){
						lighten()
					}

					if(theme === 'dark'){
						darken()
					}
				},
			}}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
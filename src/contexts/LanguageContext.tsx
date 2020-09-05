import React, {
	createContext,
	Component,
} from 'react'

const DEFAULT_LANG = 'en'

const initialState = {
	language: localStorage.getItem('language') || DEFAULT_LANG,
	setLanguage: (lang:string):void=> {},
}

export const LanguageContext = createContext({...initialState})


class LanguageContextProvider extends Component {

	state = {...initialState}

	render() {
		return (
			<LanguageContext.Provider value={{
				...this.state,
				setLanguage: (lang:string)=> {
					localStorage.setItem('language', lang)
					this.setState({...this.state, language: lang})
				},
			}}>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}

export default LanguageContextProvider;
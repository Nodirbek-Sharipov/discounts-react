import appTheme from '../theme/appTheme';

export const darken = ()=>{
	for(let color of Object.keys(appTheme.dark)){
		let cssify = '--'+color.replace(/_/g, '-')
		document.documentElement.style.setProperty(cssify, appTheme.dark[color]);
	}
}

export const lighten = ()=>{
	for(let color of Object.keys(appTheme.light)){
		let cssify = '--'+color.replace(/_/g, '-')
		document.documentElement.style.setProperty(cssify, appTheme.light[color]);
	}
}

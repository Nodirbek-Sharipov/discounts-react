import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {

	const {themeMode, setThemeMode} = useContext(ThemeContext)

	return (
		<div className="theme-toggle-container" onClick={()=>{ setThemeMode(themeMode === 'light' ? 'dark' : 'light') }}>
			<FiSun className="icon-primary-color"/>

			<div className="theme-toggle-wrap">
				<div className={themeMode === "light" ? `theme-toggle-thumb toggle-go-light` : `theme-toggle-thumb toggle-go-dark`}></div>
			</div>

			<FiMoon className="icon-primary-color"/>
		</div>
	)
}
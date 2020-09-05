import React, { useContext } from 'react'
import { FiPlusCircle, FiUser } from 'react-icons/fi'
import LangSelect from '../fragments/LangSelect'
import Logo from '../fragments/Logo'
import ThemeToggle from '../fragments/ThemeToggle'
import Translations from '../../consts/Translations'
import { LanguageContext } from '../../contexts/LanguageContext'

export default function NavBar() {

	const { language } = useContext(LanguageContext)

	return (
		<div className="nav-row">
			<div className="nav-container">
				<div className="nav-left">
					<Logo />
				</div>

				<div className="nav-right">

					<div className="toolbox">
						<LangSelect />
						<ThemeToggle/>
					</div>

					<ul className="nav-ul">
						<li><a href="#!"><FiUser className="link-icon" title={Translations(language).sign_in}/> <span className="link-label">{Translations(language).sign_in}</span></a></li>
						<li><a href="#!"><FiPlusCircle className="link-icon"  title={Translations(language).add_business}/> <span className="link-label">{Translations(language).add_business}</span></a></li>
					</ul>

				</div>



			</div>
		</div>
	)
}

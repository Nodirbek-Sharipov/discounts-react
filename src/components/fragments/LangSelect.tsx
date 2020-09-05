import React, {
	useState,
	useContext,
	useEffect,
} from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { FiChevronDown } from "react-icons/fi"
import { AllLanguages } from "../../consts/Languages"

export default function LangSelect() {

	const { language, setLanguage } = useContext(LanguageContext)

	const [menuOpen, setMenuOpen] = useState(false)

	const [animation, setAnimation] = useState({})

	const [hovering, setHovering] = useState(false)

	const togglePopup = ():void => {
		setMenuOpen(!menuOpen)
		setAnimation({
			animationName: menuOpen ? 'FadeOut' : 'FadeIn',
			display: menuOpen ? 'none' : 'flex',
		})
	}

	const SetLang = (lang:string):void=>{
		setLanguage(lang)
		togglePopup()
	}

	const mouseEnterListener = ()=> setHovering(true)

	const mouseLeaveListener = ()=> setHovering(true)

	const documentClickListener = ()=> (menuOpen && hovering) && togglePopup()


	useEffect(() => {
		// effect
		document.querySelector('.lang-select-wrap')?.addEventListener('mouseenter', mouseEnterListener)
		document.querySelector('.lang-select-wrap')?.addEventListener('mouseleave', mouseLeaveListener)
		document.querySelector('.lang-popup-wrap')?.addEventListener('mouseenter', mouseEnterListener)
		document.querySelector('.lang-popup-wrap')?.addEventListener('mouseleave', mouseLeaveListener)
		document.addEventListener('click', documentClickListener)

		return () => {
			// cleanup
			document.querySelector('.lang-select-wrap')?.removeEventListener('mouseenter', mouseEnterListener)
			document.querySelector('.lang-select-wrap')?.removeEventListener('mouseleave', mouseLeaveListener)
			document.querySelector('.lang-popup-wrap')?.removeEventListener('mouseenter', mouseEnterListener)
			document.querySelector('.lang-popup-wrap')?.removeEventListener('mouseleave', mouseLeaveListener)
			document.removeEventListener('click', documentClickListener)
		}
	})

	const currentLanguage = AllLanguages.filter(x=>x.key === language)[0]

	return (
		<div>
			<div className="lang-select-wrap" onClick={togglePopup}>
				<div><span role='img' aria-label={currentLanguage.key}>{currentLanguage.flag}</span> {currentLanguage.value}</div>
				<FiChevronDown className="icon-chevron-down" />
			</div>
			<div
				style={animation}
				className="lang-popup-wrap"
			>
				<div className="arrow-up"></div>
				{
					AllLanguages.map(lang=>{
						return (
							<button
								onClick={()=> SetLang(lang.key)}
								key={lang.key} >
								<span
									role='img'
									aria-label={lang.key} >
									{lang.flag}
								</span>
								{lang.value}
							</button>
						)
					})
				}
			</div>
		</div>
	)
}

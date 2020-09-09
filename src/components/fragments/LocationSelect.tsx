import React, { useContext } from 'react'
import { FiMapPin, FiChevronDown } from "react-icons/fi"
import { LanguageContext } from '../../contexts/LanguageContext'
import Translations from '../../consts/Translations'

export default function LocationSelect({flipForm, formOpen}:any) {

	const { language } = useContext(LanguageContext)

	return (
		<div
			onClick={flipForm}
			className={`location-select ${formOpen ? 'selected-location' : 'normal-location'}`}>
			<div className="location-icon-wrap">
				<FiMapPin className="link-icon"/>
			</div>
			<div className="all-cities-title">
				<span>{Translations(language).cities}</span>
				<FiChevronDown />
			</div>
		</div>
	)
}

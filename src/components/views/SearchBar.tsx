import React, { useContext } from 'react'
import { FiSearch, FiFilter } from 'react-icons/fi'
import { LanguageContext } from '../../contexts/LanguageContext'
import LocationSelect from '../fragments/LocationSelect'
import Translations from '../../consts/Translations'

export default function SearchBar() {

	const { language } = useContext(LanguageContext)

	return (
		<div className="nav-row">
			<div className="nav-container">
				<div className="search-container">
					<LocationSelect />
					<div className="search-icon-placeholder-wrap">
						<FiSearch />
					</div>
					<div className="search-box">
						<input className="search-input" type="search" placeholder={Translations(language).search_discounts} spellCheck="false" name="search" autoComplete="off" autoCorrect="off"/>
					</div>
					<div className="filters-box">
						<div className="filter-icon-wrap">
							<FiFilter className="filter-icon"/>
						</div>
						<div className="filter-text">
							{Translations(language).filters}
						</div>
					</div>
					<div className="search-button">
						<span className="search-text-label">{Translations(language).search}</span>
						<FiSearch className="search-icon-label" />
					</div>
				</div>
			</div>
		</div>
	)
}

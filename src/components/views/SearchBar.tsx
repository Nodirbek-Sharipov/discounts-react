import React, { useContext, useEffect, useState } from 'react'
import { FiSearch, FiFilter, FiDelete } from 'react-icons/fi'
import { LanguageContext } from '../../contexts/LanguageContext'
import LocationSelect from '../fragments/LocationSelect'
import Translations from '../../consts/Translations'
import { regions } from '../../consts/Locations'

export default function SearchBar() {

	const { language } = useContext(LanguageContext)


	const [selectedRegion, setSelectedRegion] = useState('')

	const [selectedCity, setSelectedCity] = useState('')

	const [formOpen, setFormOpen] = useState(false)

	const [step, setStep] = useState(0) // 0-RegionSelect; 1-CitySelect

	const [animation, setAnimation] = useState({})

	const [hovering, setHovering] = useState(false)

	const flipForm = ():void => {
		setFormOpen(!formOpen)
		setAnimation({
			animationName: formOpen ? 'FadeOut' : 'FadeIn',
			display: formOpen ? 'none' : 'flex',
		})
	}

	const showCities = (regionKey:string):void => {
		setSelectedRegion(regionKey)
		setStep(1)
	}

	const view_region_text = (selectedRegion && regions.filter(reg=> reg.key === selectedRegion)[0].region) + (selectedCity && ' / ' + regions.filter(reg=> reg.key === selectedRegion)[0].cities.filter(city => city.key === selectedCity)[0].value)

	const mouseEnterListener = ()=> setHovering(true)

	const mouseLeaveListener = ()=> setHovering(false)

	const documentClickListener = ()=> (formOpen && !hovering) && flipForm()

	useEffect(() => {
		// effect
		document.querySelector('.location-select')?.addEventListener('mouseenter', mouseEnterListener)
		document.querySelector('.location-select')?.addEventListener('mouseleave', mouseLeaveListener)
		document.querySelector('.category-popup')?.addEventListener('mouseenter', mouseEnterListener)
		document.querySelector('.category-popup')?.addEventListener('mouseleave', mouseLeaveListener)
		document.addEventListener('click', documentClickListener)

		return () => {
			// cleanup
			document.querySelector('.location-select')?.removeEventListener('mouseenter', mouseEnterListener)
			document.querySelector('.location-select')?.removeEventListener('mouseleave', mouseLeaveListener)
			document.querySelector('.category-popup')?.removeEventListener('mouseenter', mouseEnterListener)
			document.querySelector('.category-popup')?.removeEventListener('mouseleave', mouseLeaveListener)
			document.removeEventListener('click', documentClickListener)
		}
	})


	return (
		<>
		<div className="nav-row">
			<div className="nav-container">
				<div className="search-container">
					<LocationSelect flipForm={flipForm} formOpen={formOpen} />
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

		<div className="category-row">
			<div className="category-wrap">



				<div style={animation} className="category-popup">

					<div className="category-angle-top"></div>

					<div className="category-actions-wrap">

						{ selectedRegion && (
							<div
								onClick={()=>{ setStep(0); setSelectedRegion(''); setSelectedCity('') }}
								className="category-back-button" >
									<FiDelete />
							</div>
						)}


						<div className="category-selcted-view">
							{ !selectedRegion ? Translations(language).select_a_region :  view_region_text}
						</div>
					</div>

					<div className="category-bottom-wrap">

						{
							step === 0 && regions.map(({region, key}, index) => (
								<div
									className={`region-name ${ selectedRegion===key && 'selected-region'}`} key={key}
									onClick={()=> showCities(key)}
								>
									{ region }
								</div>
							))
						}

						{
							step === 1 && regions.filter(region => region.key === selectedRegion)[0].cities.map(({key, value}) => (
								<div
									className={`region-name ${ selectedCity===key && 'selected-region'}`} key={key}
									onClick={()=> setSelectedCity(key)}
								>
									{ value }
								</div>
							))
						}

					</div>
				</div>

			</div>
		</div>
		</>
	)
}

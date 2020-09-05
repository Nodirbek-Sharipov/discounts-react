export const en = {
	sign_in: "Sign in",
	add_business: "Add business",
	cities: "Cities",
	search_discounts: "Search discounts...",
	filters: "Filters",
	search: "Search",
}

export const uz = {
	sign_in: "Kirish",
	add_business: "Kompaniya qo'shish",
	cities: "Shaharlar",
	search_discounts: "Chegirma izlash...",
	filters: "Filterlar",
	search: "Izlash",
}

export const ru = {
	sign_in: "Войти",
	add_business: "Добавить компанию",
	cities: "Города",
	search_discounts: "Искать скидки...",
	filters: "Фильтры",
	search: "Поиск",
}

const Translations = (lang)=>{
	return lang==='ru' ? ru : lang==='uz' ? uz : en
}

export default Translations
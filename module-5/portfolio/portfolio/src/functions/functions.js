const isInViewport = (element) => {
	const rect = element.getBoundingClientRect()
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerHeight || document.documentElement.clientWidth)
	)
}

export { isInViewport }

function toggle_submit(el) {
	let disabled = el.checked ? undefined : 'true'
	document.getElementById('btn-accept').disabled = disabled
}

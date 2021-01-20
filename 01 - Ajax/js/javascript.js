console.log('Just loaded a new page!')
let ajax
const manageLogin = () => {
	console.log("🚀 ~ file: javascript.js ~ line 3 ~ ajax", ajax)
	if (ajax) {
		document.body.innerHTML = 
		`<div class="container">
			<h1>HOME</h1>
		</div>`
	} else {
		return true
	}
}
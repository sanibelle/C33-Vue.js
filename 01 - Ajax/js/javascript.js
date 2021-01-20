console.log('Just loaded a new page!')
let redirect
const manageLogin = () => {
	if (redirect) {
		document.body.innerHTML = 
		`<div class="container">
			<h1>HOME</h1>
		</div>`
		return false
	} else {
		return true
	}
}
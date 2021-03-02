const btnsOpenModal = document.querySelectorAll('.open-modal')
const btnCloseModal = document.querySelector('.close')
const modal = document.querySelector('.modal')
const overLay = document.querySelector('.overlay')

//Function for opening the modal
function openModal() {
	modal.classList.add('show')
	overLay.classList.add('show')
}

//Function for closing the modal
function closeModal() {
	modal.classList.remove('show')
	overLay.classList.remove('show')
}

//Responses With the click
btnsOpenModal.forEach(btns => {
	btns.addEventListener('click', openModal )
})

//Responses With the click
btnCloseModal.addEventListener('click', closeModal)
overLay.addEventListener('click', closeModal)

//Will Listen For Escape Key
window.addEventListener('keydown', (e) => {
	console.log(e.key);
	if (e.key === "Escape" && modal.classList.contains('show')) closeModal()
})
	

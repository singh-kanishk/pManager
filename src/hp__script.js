const newAdditionButton = document.querySelector(".new-button");
newAdditionButton.addEventListener("click", () => {
  document.querySelector(".modal.modal-newAddition").classList.toggle("show");
});
const cancelOnAdditionForm=document.querySelector('.modal-close')
cancelOnAdditionForm.addEventListener("click", () => {
  document.querySelector(".modal.modal-newAddition").classList.toggle("show");
})
const submitAdditionForm=document.getElementById('#newAddition_save')
submitAdditionForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const formData=new FormData(submitAdditionForm);
  const data=Object.fromEntries(formData);
})
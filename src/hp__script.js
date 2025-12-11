const newAdditionButton = document.querySelector(".new-button");
newAdditionButton.addEventListener("click", () => {
  document.querySelector(".modal.modal-newAddition").classList.add("show");
});
const cancelOnAdditionForm = document.querySelector(".modal-close");
cancelOnAdditionForm.addEventListener("click", () => {
  document.querySelector(".modal.modal-newAddition").classList.remove("show");
});
const submitAdditionForm = document.querySelector('.newAddition');
submitAdditionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(submitAdditionForm);
  const data = Object.fromEntries(formData);
  try {
    const response = await fetch("http://localhost:3998/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(`Error is ${e}`);
  }
});

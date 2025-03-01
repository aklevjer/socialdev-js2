/**
 * Handles going one page backwards.
 */
function handleGoBack() {
  history.back();
}

/**
 * Sets an event listener for the go back button to trigger the go back.
 */
export function setGoBackListener() {
  const goBackBtn = document.querySelector("#go-back-btn");

  if (goBackBtn) {
    goBackBtn.addEventListener("click", handleGoBack);
  }
}

function toggleRegister(modal) {
    if(modal) {
        const target = modal.current
        target.classList.add("show");
    }
}
export default toggleRegister;
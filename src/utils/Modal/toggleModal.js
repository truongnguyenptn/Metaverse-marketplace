function toggleModal(modal) {
    if (modal) {
        const target = modal.current
        const classList = target.classList[0];
        if (classList.includes("show")) {
            target.classList.remove("show");
        } else target.classList.add("show");
    }
}
export default toggleModal;
document.addEventListener('DOMContentLoaded', () => {
    updatePageFooter();
})

function updatePageFooter() {
    const date = new Date()
    let currentYear = date.getFullYear()
    document.querySelector('#page-footer').innerHTML = `
        <p>Copyright &copy; ${currentYear} Rein Solis</p>
    `
}
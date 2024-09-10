const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function () {
        const currentlyActive = document.querySelector('.accordion-header.active');
        if (currentlyActive && currentlyActive !== this) {
            currentlyActive.classList.remove('active');
            currentlyActive.nextElementSibling.classList.remove('show');
        }

        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
});

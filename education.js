<script>
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // Close all accordion contents
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.style.maxHeight = null;
                content.previousElementSibling.style.backgroundColor = '#f7f7f7'; // Reset header color
                content.previousElementSibling.style.color = 'black'; // Reset text color
            }
        });

        // Toggle the current accordion content
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            button.style.backgroundColor = '#f7f7f7'; // Reset header color
            button.style.color = 'black'; // Reset text color
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.style.backgroundColor = 'blue'; // Change header color when opened
            button.style.color = 'white'; // Change text color to white when opened
        }
    });
});
</script>

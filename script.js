document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle button and dropdown content
    const toggleButton = document.getElementById('dropdownToggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.classList.toggle('show');
    });

    // Get the close button
    const closeButton = document.getElementById('closeButton');

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Hide the dropdown content
        dropdownContent.classList.remove('show');
    });
});
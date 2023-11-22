// Skript pro interaktivitu navigačního dropdown menu

document.addEventListener('DOMContentLoaded', function () {
    // Získání odkazu na tlačítko pro otevření dropdown menu a obsahu dropdown menu
    const toggleButton = document.getElementById('dropdownToggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Přidání posluchače událostí pro kliknutí na tlačítko
    toggleButton.addEventListener('click', function () {
        // Přepnutí viditelnosti obsahu dropdown menu
        dropdownContent.classList.toggle('show');
    });

    // Získání odkazu na tlačítko pro zavření dropdown menu
    const closeButton = document.getElementById('closeButton');

    // Přidání posluchače událostí pro kliknutí na tlačítko pro zavření
    closeButton.addEventListener('click', function () {
        // Skrytí obsahu dropdown menu
        dropdownContent.classList.remove('show');
    });
});

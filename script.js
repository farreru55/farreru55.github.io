document.addEventListener('DOMContentLoaded', function () {
    const projectContainer = document.getElementById('project-list-container');
    const projectItems = projectContainer ? projectContainer.querySelectorAll('.project-item') : [];
    const viewAllBtn = document.getElementById('view-all-projects-btn');
    const initialProjectsToShow = 6;

    if (projectItems.length > initialProjectsToShow) {
        // Hide projects beyond the initial count
        for (let i = initialProjectsToShow; i < projectItems.length; i++) {
            projectItems[i].classList.add('d-none'); // Using Bootstrap's d-none utility class
        }
        // Show the "View All Projects" button
        if (viewAllBtn) {
            viewAllBtn.style.display = 'block';
        }

        // Add event listener to the button
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', function () {
                projectItems.forEach(item => {
                    item.classList.remove('d-none');
                });
                viewAllBtn.style.display = 'none'; // Hide the button after revealing all projects
            });
        }
    }
});
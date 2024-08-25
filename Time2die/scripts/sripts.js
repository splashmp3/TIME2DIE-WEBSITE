document.addEventListener('DOMContentLoaded', () => {
  const eventBox = document.getElementById('eventBox');
  const loadEventsBtn = document.getElementById('loadEventsBtn');
  const headerContent = document.querySelector('.header-content');

  // Sample event data
  const events = [
    { date: '2024-08-30', description: 'Special PvP Event!' },
    { date: '2024-09-05', description: 'Community Gathering' },
  ];

  // Load events
  loadEventsBtn.addEventListener('click', () => {
    eventBox.innerHTML = ''; // Clear existing content

    events.forEach(event => {
      const eventElement = document.createElement('p');
      eventElement.textContent = `${event.date}: ${event.description}`;
      eventBox.appendChild(eventElement);
    });

    // Add a fade-in animation to the event box
    eventBox.classList.add('fade-in');
  });

  // Animation for the header content
  setTimeout(() => {
    headerContent.classList.add('fade-in');
  }, 500); // Delay for effect
});

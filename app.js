function updateClock() {
    const now = new Date();
    
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Get date components
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    
    // Update HTML
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}, ${date}`;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  updateClock(); 
  
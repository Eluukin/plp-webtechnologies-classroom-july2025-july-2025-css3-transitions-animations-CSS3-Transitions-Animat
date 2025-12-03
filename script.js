// --- Part 2: JS Functions with Parameters & Return Values ---

// Function to calculate area
function calculateArea(width, height) {
  return width * height;
}

// Function to show area in HTML
function showArea() {
  let width = 5;
  let height = 10;
  let area = calculateArea(width, height);
  document.getElementById('areaResult').textContent = `Area: ${area}`;
}

// --- Part 3: JS Function to Trigger CSS Animations ---
function animateElement(elementId, className) {
  const el = document.getElementById(elementId);

  // Remove class if already exists (so it can re-trigger)
  el.classList.remove(className);

  // Trigger reflow to restart animation
  void el.offsetWidth;

  el.classList.add(className);
}

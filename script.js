function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}





function sendWhatsApp() {
  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let area = document.getElementById("area").value;
  let bhk = document.getElementById("bhk").value;
  let datetime = document.getElementById("datetime").value;
  let locationText = document.getElementById("location").value.trim();

  if (!name || !mobile || !area || !bhk || !datetime || !locationText) {
    alert("Please fill all details");
    return;
  }

  // Close booking popup
  document.getElementById("popup").style.display = "none";

  // Show confirmation popup
  document.getElementById("confirmPopup").style.display = "block";

  let adminNumber = "917208139984"; // ADMIN NUMBER

  let message =
    `Booking Confirmed - Shyam Pest Control\n\n` +
    `Name: ${name}\n` +
    `Mobile: ${mobile}\n` +
    `Area: ${area}\n` +
    `House Size: ${bhk}\n` +
    `Date & Time: ${datetime}\n` +
    `Location: ${locationText}`;

  let whatsappURL =
    `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 800);

  // Refresh page AFTER confirmation
  setTimeout(() => {
    window.location.reload();
  }, 4000);
}





function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let mapLink = `https://www.google.com/maps?q=${lat},${lon}`;
      document.getElementById("location").value = mapLink;
    }, function() {
      alert("Location access denied");
    });
  } else {
    alert("Geolocation not supported");
  }
}

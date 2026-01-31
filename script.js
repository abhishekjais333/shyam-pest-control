function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let datetime = document.getElementById("datetime").value;
  let location = document.getElementById("location").value;

  if (!name || !mobile || !datetime || !location) {
    alert("Please fill all details");
    return;
  }

  let adminNumber = "91XXXXXXXXXX"; // ADMIN NUMBER
  let message =
    `New Booking - Shyam Pest Control\n\n` +
    `Name: ${name}\nMobile: ${mobile}\nDate & Time: ${datetime}\nLocation: ${location}`;

  let url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

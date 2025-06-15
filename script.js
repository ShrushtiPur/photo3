
function goToLMS() {
  window.location.href = "https://your-lms-platform.com";
}
function goToCart() {
  alert("Cart is empty! Add some courses.");
}
function toggleSupport() {
  const support = document.getElementById("support");
  support.style.display = support.style.display === "none" ? "block" : "none";
}
function sendSupport(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const issue = document.getElementById('issue').value;
  const ticketNumber = Math.floor(Math.random() * 100000);
  document.getElementById('ticketStatus').innerText =
    `Thank you, ${name}. Your ticket (#${ticketNumber}) has been submitted. We’ll contact you at ${email}.`;
}

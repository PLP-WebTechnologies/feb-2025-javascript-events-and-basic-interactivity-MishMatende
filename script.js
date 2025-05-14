const colorBtn = document.getElementById("colorButton");
const secretMsg = document.getElementById("secretMessage");

colorBtn.addEventListener("click", () => {
  colorBtn.classList.toggle("changed");
  colorBtn.textContent = colorBtn.classList.contains("changed")
    ? "Clicked!"
    : "Click Me!";
});

colorBtn.addEventListener("dblclick", () => {
  secretMsg.style.display = "block";
});

document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
  });
});

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailFeedback = document.getElementById("emailFeedback");
const passFeedback = document.getElementById("passFeedback");

email.addEventListener("input", () => {
  const pattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (pattern.test(email.value)) {
    emailFeedback.textContent = "✅ Looks good!";
    emailFeedback.className = "feedback valid";
  } else {
    emailFeedback.textContent = "Please enter a valid email.";
    emailFeedback.className = "feedback";
  }
});

password.addEventListener("input", () => {
  if (password.value.length >= 8) {
    passFeedback.textContent = "✅ Strong password!";
    passFeedback.className = "feedback valid";
  } else {
    passFeedback.textContent = "Password must be at least 8 characters.";
    passFeedback.className = "feedback";
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  if (!email.value || password.value.length < 8) {
    e.preventDefault();
    alert("Please fix the form errors before submitting.");
  }
});

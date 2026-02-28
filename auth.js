
/* ================= AUTH SYSTEM ================= */

let authSection = document.getElementById("authSection");

function updateUI(user) {
  if (!authSection) return;

  if (user) {
    const name = user.displayName || "User";
    const photo = user.photoURL;

    authSection.innerHTML = `
      <div class="user-profile">
        ${
          photo
            ? `<img src="${photo}" alt="User">`
            : `<div class="default-avatar">${name.charAt(0).toUpperCase()}</div>`
        }
        <span style="color:white;">${name}</span>
        <button class="logout-btn" onclick="logout()">Logout</button>
      </div>
    `;
  } else {
    authSection.innerHTML = `
      <button class="login-btn" onclick="openLogin()">Login</button>
    `;
  }
}

function logout() {
  localStorage.removeItem("user");
  updateUI(null);
}

function fakeLogin() {
  const user = {
    displayName: "Ahteshaam",
    photoURL: null
  };

  localStorage.setItem("user", JSON.stringify(user));
  updateUI(user);
}

function openLogin() {
  fakeLogin(); // temporary for testing
}

/* Restore user on refresh */
window.onload = function () {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    updateUI(JSON.parse(savedUser));
  }
};


export function registerUser(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("Email sudah terdaftar.");
      return null;
    }
  
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    window.location.href = "/login";
  
    return newUser;
  }
  
  
  export function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
  
      window.location.href = "/home";
      return user;
    }
  
    alert("Email atau password salah.");
    return null;
  }
  
  
  export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  }
  
  export function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
  }
  
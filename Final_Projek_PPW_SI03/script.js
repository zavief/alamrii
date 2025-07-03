// Validasi form login dan redirect ke halaman utama jika berhasil
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim ke server

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Email dan password harus diisi!");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Email tidak valid!");
        return;
    }

    // Jika semua valid → redirect ke halaman_utama.html
    window.location.href = "halaman_utama.html";
});

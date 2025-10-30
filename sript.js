const buttons = document.querySelectorAll(".card button");

// Loop semua tombol dan tambahkan event klik
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("followed")) {
      // Jika sudah mengikuti, ubah kembali ke awal
      button.classList.remove("followed");
      button.textContent = "Ikuti";
    } else {
      // Jika belum mengikuti, ubah status dan teks
      button.classList.add("followed");
      button.textContent = "Mengikuti ✓";
    }
  });
});

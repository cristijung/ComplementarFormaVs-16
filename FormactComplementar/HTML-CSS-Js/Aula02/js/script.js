document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("cta-button");
  const profileName = document.querySelector(".profile-name");

  const imageUpload = document.getElementById("image-upload");
  const profileImg = document.getElementById("profile-img");

  ctaButton.addEventListener("click", () => {
    const newName = prompt("Digite o novo nome para o perfil:");

    if (newName && newName.trim() !== "") {
      profileName.textContent = newName;
    } else {
      alert("Nenhum nome válido foi inserido.");
    }
  });

  imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        profileImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});

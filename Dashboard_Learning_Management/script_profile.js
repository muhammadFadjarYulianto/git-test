// script.js

document.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const profileInfo = document.getElementById('profile-info');
    const profileEdit = document.getElementById('profile-edit');
    const backToProfileBtn = document.getElementById('edit-btn'); // Reusing edit button to show edit form
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('custom-popup');
    const popupMessage = document.getElementById('popup-message');

    // Fungsi untuk mengedit profil
    editBtn.addEventListener('click', () => {
        profileInfo.classList.add('hidden');
        profileEdit.classList.remove('hidden');
    });

    // Fungsi untuk menyimpan perubahan profil
    saveBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('name').value.trim();
        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        if (nameInput === "" || usernameInput === "" || emailInput === "") {
            alert("Semua bidang harus diisi!");
            return;
        }

        // Update tampilan profil
        document.getElementById('name-display').textContent = nameInput;
        document.getElementById('username-display').textContent = usernameInput;
        document.getElementById('email-display').textContent = emailInput;

        // Simpan ke localStorage
        const profileData = {
            name: nameInput,
            username: usernameInput,
            email: emailInput
        };
        localStorage.setItem('profileData', JSON.stringify(profileData));

        // Tampilkan profil dan sembunyikan form edit
        profileEdit.classList.add('hidden');
        profileInfo.classList.remove('hidden');

        // Tampilkan popup konfirmasi
        popupMessage.textContent = 'Profil telah diperbarui!';
        popup.classList.remove('hidden');
    });

    // Fungsi untuk batal mengedit
    cancelBtn.addEventListener('click', () => {
        // Kembali menampilkan informasi profil tanpa perubahan
        profileEdit.classList.add('hidden');
        profileInfo.classList.remove('hidden');

        // Reset nilai input ke data yang ada
        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {
            document.getElementById('name').value = savedProfile.name;
            document.getElementById('username').value = savedProfile.username;
            document.getElementById('email').value = savedProfile.email;
        }
    });

    // Fungsi untuk menutup popup
    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Load profil dari localStorage saat halaman dimuat
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfile) {
        document.getElementById('name-display').textContent = savedProfile.name;
        document.getElementById('username-display').textContent = savedProfile.username;
        document.getElementById('email-display').textContent = savedProfile.email;

        // Set nilai input form edit
        document.getElementById('name').value = savedProfile.name;
        document.getElementById('username').value = savedProfile.username;
        document.getElementById('email').value = savedProfile.email;
    }
});

// Ganti alert dengan SweetAlert
saveBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value.trim();
    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();

    if (nameInput === "" || usernameInput === "" || emailInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Semua bidang harus diisi!',
        });
        return;
    }

    if (!isValidEmail(emailInput)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email tidak valid!',
        });
        return;
    }

    // Update tampilan profil
    document.getElementById('name-display').textContent = nameInput;
    document.getElementById('username-display').textContent = usernameInput;
    document.getElementById('email-display').textContent = emailInput;

    // Simpan ke localStorage
    const profileData = {
        name: nameInput,
        username: usernameInput,
        email: emailInput
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Tampilkan profil dan sembunyikan form edit
    profileEdit.classList.add('hidden');
    profileInfo.classList.remove('hidden');

    // Tampilkan SweetAlert konfirmasi
    Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Profil telah diperbarui!',
        confirmButtonText: 'Tutup'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navigate-btn").addEventListener("click", function() {
        window.location.href = "index.html";  // Pastikan file 'dashboard.html' ada di direktori yang benar
    });
});


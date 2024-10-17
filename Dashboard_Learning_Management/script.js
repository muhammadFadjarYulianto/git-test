const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggle-btn");
const mainContent = document.querySelector(".main-content");
const header = document.querySelector(".header");
const menuResponsive = document.getElementById("menu-responsive");

// sidebar desktop
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("minimized");
  mainContent.classList.toggle("minimized");
  header.classList.toggle("minimized");
  toggleBtn.classList.toggle("minimized");
});

// sidebar responsive
menuResponsive.addEventListener("click", function () {
  menuResponsive.classList.toggle("open");
  sidebar.classList.toggle("open");
});

// Navigasi modul
const navModulDipelajari = document.getElementById("nav-modul-dipelajari");
const navModulSelesai = document.getElementById("nav-modul-selesai");
const courseDetail = document.querySelector(".course-detail");
const courseDetailSelesai = document.querySelector(".course-detail-selesai");

// Event listener ketika button 1 diklik
navModulDipelajari.addEventListener("click", function () {
  // Tambahkan kelas ke button 1
  navModulDipelajari.classList.add("active");
  courseDetailSelesai.classList.add("no-active");
  if (courseDetail.classList.contains("no-active")) {
    courseDetail.classList.remove("no-active");
  }
  // Jika button 2 memiliki kelas 'active2', hapus kelas tersebut
  if (navModulSelesai.classList.contains("active")) {
    navModulSelesai.classList.remove("active");
  }
});

// Event listener ketika button 2 diklik
navModulSelesai.addEventListener("click", function () {
  // Tambahkan kelas ke button 2
  navModulSelesai.classList.add("active");
  courseDetail.classList.add("no-active");
  if (courseDetailSelesai.classList.contains("no-active")) {
    courseDetailSelesai.classList.remove("no-active");
  }
  // Jika button 1 memiliki kelas 'active1', hapus kelas tersebut
  if (navModulDipelajari.classList.contains("active")) {
    navModulDipelajari.classList.remove("active");
  }
});

// navigasi materi
const navMateri = document.getElementById("nav-materi");
const navTugas = document.getElementById("nav-tugas");
const materiModul = document.getElementById("materi-modul");
const tugasModul = document.getElementById("tugas-modul");

// Event listener ketika button 1 diklik
navMateri.addEventListener("click", function () {
  // Tambahkan kelas ke button 1
  navMateri.classList.add("active");
  tugasModul.classList.add("no-active");
  if (materiModul.classList.contains("no-active")) {
    materiModul.classList.remove("no-active");
  }
  // Jika button 2 memiliki kelas 'active2', hapus kelas tersebut
  if (navTugas.classList.contains("active")) {
    navTugas.classList.remove("active");
  }
});

// Event listener ketika button 2 diklik
navTugas.addEventListener("click", function () {
  // Tambahkan kelas ke button 2
  navTugas.classList.add("active");
  materiModul.classList.add("no-active");
  if (tugasModul.classList.contains("no-active")) {
    tugasModul.classList.remove("no-active");
  }
  // Jika button 1 memiliki kelas 'active1', hapus kelas tersebut
  if (navMateri.classList.contains("active")) {
    navMateri.classList.remove("active");
  }
});

// Event listeners for "Lanjutkan" buttons
document
  .getElementById("lanjutkan-frontend")
  .addEventListener("click", function () {
    showContent2(
      "Front-End Development",
      "HTML Fundamental",
      "CSS Framework",
      "Javascript DOM"
    );
  });
document
  .getElementById("lanjutkan-backend")
  .addEventListener("click", function () {
    showContent2(
      "Back-End Development",
      "Javascript Fundamental Programming",
      "NodeJS Fundamental",
      "Express Framework"
    );
  });
document
  .getElementById("lanjutkan-devops")
  .addEventListener("click", function () {
    showContent2(
      "DevOps",
      "Bahasa pemrograman dan scripting",
      "Arsitektur sistem",
      "Perangkat dan praktik pengembang"
    );
  });

const buttons = document.querySelectorAll('[data-action="kembali-ke-content"]'); // Pilih semua elemen dengan atribut data-action="click"

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    showContent();
  });
});

function showContent2(moduleName, materi_1, materi_2, materi_3) {
  // Hide content and show content-2
  document.getElementById("content").style.display = "none";
  document.getElementById("content-2").style.display = "block";
  document.getElementById("nav-content-2").classList.remove("hidden");

  // Set the module name in content-2
  document.getElementById("module-name").textContent = moduleName;
  document.getElementById("materi-1").textContent = materi_1;
  document.getElementById("materi-2").textContent = materi_2;
  document.getElementById("materi-3").textContent = materi_3;
  document.getElementById("tugas-1").textContent = materi_1;
  document.getElementById("tugas-2").textContent = materi_2;
  document.getElementById("tugas-3").textContent = materi_3;

  // Update progress bar, if necessary
  updateProgressBar();
}

function showContent() {
  // Hide content-2 and show content
  document.getElementById("content").style.display = "block";
  document.getElementById("content-2").style.display = "none";
  document.getElementById("nav-content-2").classList.add("hidden");
}

// Function to save progress in localStorage
function saveProgress() {
  const lessons = document.querySelectorAll(".lesson-checkbox");
  const progressData = Array.from(lessons).map((lesson) => lesson.checked);
  localStorage.setItem("lessonProgress", JSON.stringify(progressData));
  updateProgressBar();
  updateLessonStatus();
}

// Function to update the progress bar dynamically
function updateProgressBar() {
  const lessons = JSON.parse(localStorage.getItem("lessonProgress")) || [];
  const completedLessons = lessons.filter(Boolean).length;
  const totalLessons = lessons.length;
  const progressPercent = totalLessons
    ? (completedLessons / totalLessons) * 100
    : 0;

  // Update progress bar width and text
  document.getElementById("progress").style.width = progressPercent + "%";
  document.getElementById("progress-percent").textContent =
    Math.round(progressPercent) + "% Complete";
}

// Function to update lesson status (Complete/Belum Selesai)
function updateLessonStatus() {
  const lessons = document.querySelectorAll(".lesson-checkbox");
  lessons.forEach((lesson, index) => {
    const statusSpan = document.getElementById(`status-${index}`);
    if (lesson.checked) {
      statusSpan.textContent = "Complete";
      statusSpan.classList.add("complete");
    } else {
      statusSpan.textContent = "Belum Selesai";
      statusSpan.classList.remove("complete");
    }
  });
}

// Load progress on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedProgress = JSON.parse(localStorage.getItem("lessonProgress"));
  if (savedProgress) {
    const lessons = document.querySelectorAll(".lesson-checkbox");
    lessons.forEach((checkbox, index) => {
      checkbox.checked = savedProgress[index];
    });
  }
  updateProgressBar();
  updateLessonStatus();
});

// Add event listener to save progress on checkbox change
const lessonCheckboxes = document.querySelectorAll(".lesson-checkbox");
lessonCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", saveProgress);
});

function completeTask(taskIndex) {
  // Ambil elemen checkbox dan task item berdasarkan index
  const taskCheckbox = document.getElementById(`task-${taskIndex}`);
  const taskItem = taskCheckbox.closest(".task-item");

  // Centang checkbox secara otomatis
  taskCheckbox.checked = true;

  // Ubah status menjadi complete
  taskItem.classList.add("complete");

  // Tampilkan custom popup
  const popup = document.getElementById("custom-popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = "Selamat! Anda telah menyelesaikan tugas ini.";
  popup.classList.remove("hidden");

  // Event listener untuk menutup popup
  document.getElementById("close-popup").addEventListener("click", function () {
    popup.classList.add("hidden");
  });
}

function belajarLagi(){
    // Tampilkan custom popup
  const popup = document.getElementById("custom-popup");
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = "Mohon Maaf Saat ini Course Sedang Dalam Perbaikan";
  popup.classList.remove("hidden");

  // Event listener untuk menutup popup
  document.getElementById("close-popup").addEventListener("click", function () {
    popup.classList.add("hidden");
  });
}
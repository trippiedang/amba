document.getElementById('fileInput').addEventListener('change', function(event) {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = ''; // Bersihkan tampilan sebelumnya

  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  } else {
    previewContainer.textContent = 'Silakan pilih file gambar.';
  }
});

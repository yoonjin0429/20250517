document.getElementById("drawButton").addEventListener("click", () => {
  const total = 25;
  const count = 4;
  let selected = [];

  while (selected.length < count) {
    const rand = Math.floor(Math.random() * total) + 1;
    if (!selected.includes(rand)) {
      selected.push(rand);
    }
  }

  selected.sort((a, b) => a - b); // 오름차순 정렬

  Swal.fire({
    title: '🎉 청소당번 발표!',
    html: `<div class="text-xl font-semibold text-indigo-700">당번 번호: ${selected.join(", ")}번</div>`,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#4CAF50',
    backdrop: true,
    customClass: {
      popup: 'rounded-xl shadow-lg'
    }
  });
});

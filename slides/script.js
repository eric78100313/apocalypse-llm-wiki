'use strict';

const slides = [...document.querySelectorAll('.slide')];
const controls = document.querySelector('#controls');
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
const indicator = document.querySelector('#page-number');
const progress = document.querySelector('#progress');
const sourceDialog = document.querySelector('#source-dialog');
const sourceRecords = document.querySelector('#source-records').content;
const quiz = document.querySelector('#quiz');
const feedback = document.querySelector('#feedback');
let current = 0;

function indexFromHash() {
  const index = slides.findIndex(slide => '#' + slide.id === location.hash);
  return Math.max(0, index);
}

function showSlide(index, moveFocus = false) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, position) => { slide.hidden = position !== current; });
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
  progress.value = current + 1;
  const format = number => String(number).padStart(2, '0');
  indicator.textContent = format(current + 1) + ' / ' + format(slides.length);

  if (moveFocus) {
    slides[current].querySelector('h1, h2').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

function navigate(index) {
  if (index < 0 || index >= slides.length || index === current) return;
  history.pushState(null, '', '#' + slides[index].id);
  showSlide(index, true);
}

previous.addEventListener('click', () => navigate(current - 1));
next.addEventListener('click', () => navigate(current + 1));
window.addEventListener('hashchange', () => showSlide(indexFromHash(), true));
document.querySelectorAll('.masthead a').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(slides.findIndex(slide => '#' + slide.id === link.hash));
  });
});
document.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || sourceDialog.open) return;
  if (event.target instanceof HTMLElement && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  navigate(current + (event.key === 'ArrowRight' ? 1 : -1));
});

document.querySelectorAll('[data-source]').forEach(button => {
  button.addEventListener('click', () => {
    const record = sourceRecords.querySelector('[data-record="' + button.dataset.source + '"]');
    document.querySelector('#source-name').textContent = record.querySelector('h3').textContent;
    document.querySelector('#source-note').textContent = record.querySelector('p').textContent;
    document.querySelector('#source-path').textContent = record.querySelector('code').textContent;
    sourceDialog.showModal();
  });
});

const explanations = {
  a: '這條運送關係尚待確認。來源沒有追蹤特定補給包從醫院到避難所的批次紀錄。正確的是舊位置圖與院內封存庫存。',
  b: '正確。醫院頁記載備品櫃存有少量完整封裝的補給包，也記載林以安保留舊位置圖。',
  c: '請再比對兩份檔案。事件檔案寫 3 月 18 日白天，人物檔案寫爆發當夜。正確的是舊位置圖與院內封存庫存。'
};

quiz.addEventListener('change', () => {
  feedback.textContent = '';
  delete feedback.dataset.correct;
});
quiz.addEventListener('submit', event => {
  event.preventDefault();
  const answer = new FormData(quiz).get('answer');
  if (!Object.hasOwn(explanations, answer)) return;
  feedback.dataset.correct = String(answer === 'b');
  feedback.textContent = explanations[answer];
});

showSlide(indexFromHash());
document.documentElement.classList.add('js-ready');
controls.hidden = false;

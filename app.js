const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let visible = 0;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => {
    project.hidden = category !== 'all' && !project.dataset.category.split(' ').includes(category);
    if (!project.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `显示 ${visible} 个项目`;
}));
document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('zhuxu042@gmail.com');
    status.textContent = '已复制';
  } catch {
    status.textContent = '请选中邮箱手动复制';
  }
});

const diagramDialog = document.querySelector('.diagram-dialog');
const diagramImage = diagramDialog.querySelector('.diagram-full');
document.querySelectorAll('.diagram-open').forEach(button => {
  button.addEventListener('click', () => {
    diagramDialog.querySelector('h2').textContent = button.dataset.title;
    diagramImage.src = button.dataset.diagram;
    diagramImage.alt = button.dataset.title;
    diagramDialog.querySelector('.diagram-dialog-note').textContent = button.dataset.note || '蓝色为个人负责模块 · 小屏幕可横向滑动查看';
    diagramDialog.showModal();
    document.body.classList.add('diagram-is-open');
  });
});
diagramDialog.querySelector('.diagram-close').addEventListener('click', () => diagramDialog.close());
diagramDialog.addEventListener('click', event => {
  if (event.target !== diagramDialog) return;
  const bounds = diagramDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    diagramDialog.close();
  }
});
diagramDialog.addEventListener('close', () => document.body.classList.remove('diagram-is-open'));

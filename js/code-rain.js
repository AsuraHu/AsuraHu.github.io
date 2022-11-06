// 首页代码雨

const banner = document.getElementById('banner');
const width = banner.clientWidth;
const height = banner.clientHeight;
const isHomePage = document.getElementById('subtitle').getAttribute('data-typed-text').includes('首页');

const cvs = document.createElement('canvas');

banner.appendChild(cvs);
cvs.width = width;
cvs.height = height;

const ctx = cvs.getContext('2d'); // 获取绘制上下文
const columnWidth = 20; // 列宽
const columnCount = Math.floor(width / columnWidth); // 列数
// 记录每列写到第几个文字
const columnNextIndexes = new Array(columnCount);
columnNextIndexes.fill(1);

// 随机函数
function getRandomColor () {
  const colors = [ '#33B5E5', '#8899cc', '#AA66CC', '#9933cc', '#99ccea', '#66998e', '#FFBB33', '#FF8808', '#FF4444', '#cce888' ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 随机文字
function getRandomChar () {
  const str = '1234567890-=!@#$%^&*()_+qwertyuiop[]asdfghjklzxcvbnm<>?QWERTYUIOPLKJHGFDSAZXCVBNM';
  return str[Math.floor(Math.random() * str.length)];
};

// 绘画函数
function draw () {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, width, height);

  const fz = 20;
  ctx.fillStyle = getRandomColor();
  ctx.font = `${fz}px "Roboto Mono"`;

  for (let i = 0; i < columnCount; i ++) {
    const x = i * columnWidth;
    const y = fz * columnNextIndexes[i];
    ctx.fillText(getRandomChar(), x, y);
    if (y > height && Math.random() > 0.99) {
      columnNextIndexes[i] = 0;
    } else {
      columnNextIndexes[i]++;
    }
  }
};

if (isHomePage) {
  draw();
  setInterval(draw, 40);
}
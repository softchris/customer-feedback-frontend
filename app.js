console.log('app loaded');

const saveElem = document.getElementById('save');
const contentElem = document.getElementById('content');
const messageElem = document.getElementById('message');

$(document).ready(() => {
  let pageNo = 1;
  let pages = ['page1','page2','page3','page4'];
  let pageElems = pages.map(p => $(`.${p}`));
  pageElems.forEach(p => p.hide());
  $('.page1').show();


  console.log('jquery ready');

  $('.navigation').bind('click', () => {
    pageElems.forEach(p => p.hide());
    pageNo = pageNo -1 >=1 ? pageNo - 1 : pageNo;
    $(`.page${pageNo}`).show();
  });

  $('.action').bind('click', () => {
    pageElems.forEach(p => p.hide());
    pageNo = pageNo +1 <= pages.length ? pageNo + 1 : pageNo;
    $(`.page${pageNo}`).show();

    console.log('action clicked');
  })
});

// hookup clicks..

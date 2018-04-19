console.log('app loaded');

let selectedDay;

$(document).ready(() => {
  let pageNo = 1;
  let pages = ['page1','page2','page3','page4'];
  let pageElems = pages.map(p => $(`.${p}`));

  // hide all pages
  pageElems.forEach(p => p.hide());
  $('.page1').show();

  // clear all calendar selections
  $('.day').removeClass('selected');

  // show navigation previous?
  $('.navigation').hide();


  console.log('jquery ready');

  function getAbbr(no) {
    switch(no) {
      case '1':
        return 'st';
      case '2':
        return 'nd';
      case '3':
        return 'rd';
      default:
        return 'th';
    }
  }

  $('.navigation').bind('click', () => {
    pageElems.forEach(p => p.hide());
    pageNo = pageNo -1 >=1 ? pageNo - 1 : pageNo;
    if(pageNo > 1) {
      $('.navigation').show();
    } else {
      $('.navigation').hide();
    }

    $(`.page${pageNo}`).show();
  });

  $('.action').bind('click', () => {
    pageElems.forEach(p => p.hide());
    pageNo = pageNo +1 <= pages.length ? pageNo + 1 : pageNo;

    if(pageNo > 1) {
      $('.navigation').show();
    }

    $(`.page${pageNo}`).show();

    if(pageNo === pages.length) {
      $('.selectedDate').html(`${selectedDay}${getAbbr(selectedDay)} May`);
    }

    console.log('action clicked');
  })

  $('.day').bind('click', (evt) => {
    const elem = $(evt.target);

    selectedDay = elem.html();
    $('.day').removeClass('selected');
    elem.addClass('selected');
  });
});

// hookup clicks..

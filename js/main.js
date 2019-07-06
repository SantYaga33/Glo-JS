
let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    day = new Date(),
    currentDay = day.getDay(),
    dayOfWeek = document.querySelector('.dayOfWeek');
   
let getDayOfWeek = function() {
  for (let i = 0; i < week.length; i++ ) {
    let div = document.createElement('div');

    if (week[i] == week[currentDay] && week[i] == week[0]) {
      div.innerHTML = `<b><i>${week[i]}</i></b><br>`;
      dayOfWeek.appendChild(div);
    } else if (week[i] == week[currentDay] && week[i] == week[6]) {
      div.innerHTML = `<b><i>${week[i]}</i></b><br>`;
      dayOfWeek.appendChild(div);
    } else if (week[i] == week[currentDay]) {
      div.innerHTML = `<b>${week[i]}</b><br>`;
      dayOfWeek.appendChild(div);
    } else if (week[i] == week[0] || week[i] == week[6]) {
      div.innerHTML = `<i>${week[i]}</i><br>`;
      dayOfWeek.appendChild(div);
    } else {
      div.innerHTML = `${week[i]}<br>`;
      dayOfWeek.appendChild(div);
    }
  }
};
getDayOfWeek();



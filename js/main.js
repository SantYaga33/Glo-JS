let lang, daysWeek, ruWeek = [], enWeek = [];
ruWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

lang = prompt('Введите значение переменной lang', 'В виде ru или en');
// вариант 1
if (lang == 'ru') {
  daysWeek = ruWeek;
} else {
  daysWeek = enWeek;
}
console.log('Проверка :', daysWeek);
// вариант 2
switch (lang) {
  case 'ru':
    daysWeek = ruWeek;
    break;
  case 'en':
    daysWeek = enWeek;
    break;
  default:
    console.log('Введите значение переменной "lang"');
    break;
}
console.log('Проверка :', daysWeek);
// вариант 3
let langWeek = [ruWeek, enWeek];
daysWeek = lang === 'ru' ? langWeek[0] : langWeek[1];
console.log('Проверка :', daysWeek);


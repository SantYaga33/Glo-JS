'use strict';


let getClearRow = function(row) {
  if (typeof row !== 'string') {
    return alert('Упс! Ошибочка! Введите данные ввиде строки');
  }
  let rowTrim = row.trim(), rowSliced;
  if (rowTrim.length > 30) {
    rowSliced = rowTrim.slice(0, 30);
    return rowSliced += '...';
  } else {
    return rowTrim;
  }
};
getClearRow(33);
console.log( getClearRow('  Тест: Bootstrap vs Grid CSS: что выбрать в 2019 году?  ') );

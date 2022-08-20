const exclude = ',';

function solution(text, keyword) {
  let html = text;
  let commaString = '';

  for (let i = 1; i < keyword.length; i++) {
    let stringArr = Array.from(keyword);
    stringArr.splice(i, 0, ',');
    commaString = stringArr.join('');

    const regEx1 = new RegExp(commaString, 'g');

    html = html.replace(regEx1, `<mark>${commaString}</mark>`);
  }

  const regEx2 = new RegExp(keyword, 'g');

  html = html.replace(regEx2, `<mark>${keyword}</mark>`);

  console.log(html);

  return html;
}

solution('커피 3,500원', '350');
// '커피 <mark>3,50</mark>0원'

solution('샌드위치 2,350원', '350');
// '샌드위치 2,<mark>350</mark>원'

function solution(ings, menu, sell) {
  let answer = 0;
  const ingsPrice = [];
  const menuPrice = [];

  ings.forEach((v) => {
    let ingsArr = v.split(' ');
    ingsPrice[ingsArr[0]] = parseInt(ingsArr[1]);
  });

  menu.forEach((v) => {
    let menuTotal = 0;
    let menuArr = v.split(' ');
    for (let i = 0; i < menuArr[1].length; i++) {
      menuTotal += ingsPrice[menuArr[1][i]];
    }
    menuPrice[menuArr[0]] = parseInt(menuArr[2]) - menuTotal;
  });

  sell.forEach((v) => {
    let sellArr = v.split(' ');
    answer += menuPrice[sellArr[0]] * parseInt(sellArr[1]);
  });

  return answer;
}

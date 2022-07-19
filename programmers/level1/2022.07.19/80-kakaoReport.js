function solution(id_list, report, k) {
  // 맨처음에는 전부 배열을 사용해서 풀었는데, 시간 사용초과가 떠서 객체를 이용해서 풀었다.

  // set을 통해 중복 신고를 먼저 없앤다.
  const setReport = new Set(report);

  // key는 신고자, value는 신고한 사람 list
  const reportList = {};

  // key는 신고당한사람, value는 신고당한 횟수
  const reportCount = {};

  // key는 신고자, value는 신고 메일 받은 횟수
  const answerObj = {};

  id_list.forEach((name) => {
    reportList[name] = [];
    reportCount[name] = 0;
    answerObj[name] = 0;
  });

  setReport.forEach((reportNameList) => {
    const [name, reportName] = reportNameList.split(' ');
    reportList[name].push(reportName);
    reportCount[reportName]++;
  });

  for (const name in reportCount) {
    reportList[name].forEach((reporter) => {
      if (reportCount[reporter] >= k) {
        answerObj[name]++;
      }
    });
  }

  return Object.values(answerObj);
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

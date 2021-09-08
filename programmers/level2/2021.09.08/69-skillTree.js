function solution(skill, skill_trees) {
  let result = 0;

  let filteredTrees = skill_trees.map((tree) => {
    return tree.split('').filter((ele) => skill.includes(ele));
  });

  console.log(filteredTrees);

  for (let i = 0; i < filteredTrees.length; i++) {
    let isValid = true;
    for (let j = 0; j < filteredTrees[i].length; j++) {
      if (skill[j] !== filteredTrees[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }

  return result;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

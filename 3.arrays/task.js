function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
  function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(user => user.gender === gender);
    if (filteredUsers.length === 0) return 0;
  
    let averageAge = filteredUsers
      .map(user => user.age)
      .reduce((sum, age) => sum + age, 0) / filteredUsers.length;
    
    return averageAge;
  }
  
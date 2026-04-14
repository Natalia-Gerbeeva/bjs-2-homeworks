function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(function(user) {
        return user.gender === gender;
    });

    if (filteredUsers.length === 0) {
        return 0;
    }

    let sumAge = 0;

    for (let i = 0; i < filteredUsers.length; i++) {
        sumAge += filteredUsers[i].age;
    }

    return sumAge / filteredUsers.length;
}
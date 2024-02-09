// Sample data representing users with gender and designation
const users = [
    { name: 'User1', gender: 'male', designation: 'constable' },
    { name: 'User2', gender: 'male', designation: 'constable' },
    { name: 'User3', gender: 'male', designation: 'constable' },
    { name: 'User4', gender: 'male', designation: 'constable' },

    { name: 'User5', gender: 'male', designation: 'homeguard' },
    { name: 'User6', gender: 'male', designation: 'homeguard' },
    { name: 'User7', gender: 'male', designation: 'homeguard' },
    { name: 'User8', gender: 'male', designation: 'homeguard' },

    { name: 'User9', gender: 'female', designation: 'constable' },
    { name: 'User10', gender: 'female', designation: 'constable' },
    { name: 'User11', gender: 'female', designation: 'constable' },
    { name: 'User12', gender: 'female', designation: 'constable' },

    { name: 'User13', gender: 'female', designation: 'homeguard' },
    { name: 'User14', gender: 'female', designation: 'homeguard' },
    { name: 'User15', gender: 'female', designation: 'homeguard' },
    { name: 'User16', gender: 'female', designation: 'homeguard' },

    { name: 'User17', gender: 'female', designation: 'homeguard' },
    { name: 'User18', gender: 'female', designation: 'homeguard' },
];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to select groups of two users based on conditions
function selectGroups(users) {
    shuffleArray(users); // Shuffle users array before grouping
    const groups = [];

    // Separate users by gender and designation
    const malesConstable = users.filter(user => user.gender === 'male' && user.designation === 'constable');
    const malesHomeGuard = users.filter(user => user.gender === 'male' && user.designation === 'homeguard');
    const femalesConstable = users.filter(user => user.gender === 'female' && user.designation === 'constable');
    const femalesHomeGuard = users.filter(user => user.gender === 'female' && user.designation === 'homeguard');

    // Function to create a group and remove selected users
    const createGroup = (user1, user2) => {
        groups.push([user1, user2]);
        users.splice(users.indexOf(user1), 1);
        users.splice(users.indexOf(user2), 1);
    };

    // Pair constables and homeguards until there is a shortage
    while (malesConstable.length > 0 && malesHomeGuard.length > 0) {
        createGroup(malesConstable.pop(), malesHomeGuard.pop());
    }

    while (femalesConstable.length > 0 && femalesHomeGuard.length > 0) {
        createGroup(femalesConstable.pop(), femalesHomeGuard.pop());
    }

    // Pair remaining constables or homeguards if there is a shortage
    while (malesConstable.length >= 2) {
        createGroup(malesConstable.pop(), malesConstable.pop());
    }

    while (malesHomeGuard.length >= 2) {
        createGroup(malesHomeGuard.pop(), malesHomeGuard.pop());
    }

    while (femalesConstable.length >= 2) {
        createGroup(femalesConstable.pop(), femalesConstable.pop());
    }

    while (femalesHomeGuard.length >= 2) {
        createGroup(femalesHomeGuard.pop(), femalesHomeGuard.pop());
    }

    // If there is an odd number of female users, leave one ungrouped
    if (femalesConstable.length === 1) {
        createGroup(femalesConstable.pop(), null);
    } else if (femalesHomeGuard.length === 1) {
        createGroup(femalesHomeGuard.pop(), null);
    }

    shuffleArray(groups);

    return groups;
}

// Output the selected groups
const selectedGroups = selectGroups(users);
console.log(selectedGroups);
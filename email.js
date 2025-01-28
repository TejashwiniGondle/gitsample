//12
function createProfile({ name, email }) {
    return { name, email  };
}
const user={
    name: ' Tejashwini',
    email: 'xyz@gmail.com',
    age: 20,
}
const profile = createProfile(user);
console.log(profile)
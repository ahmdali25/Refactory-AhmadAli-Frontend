const PostsUrl = "https://jsonplaceholder.typicode.com/posts/?_limit=10";
const UsersUrl = "https://jsonplaceholder.typicode.com/users";

async function getData() {
    let arr1 = [];
    let arr2 = [];
    let response = await fetch(PostsUrl);
    let posts = await response.json();
    arr1.push(posts);
    console.log(posts);

    let res = await fetch(UsersUrl);
    let users = await res.json();
    arr2.push(users);
    console.log(users);

    const arr3 = arr1.map(t1 => ({...t1, ...arr2.find(t2 => t2.id === t1.id)}));
    console.log(arr3);
}

getData();

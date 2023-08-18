let arr = [12,2,1,4,3,2,1,2,3,4]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('-------------------------------');
let book1 = {
    title:'book1',
    pageCount:'123',
    genre: 'horror',
    authors: [
        {
            name: 'author1',
            age:23
        }
        ,{
            name: 'author2',
            age:33
        }
        ,{
            name: 'author3',
            age:19
        }
    ]
}
let book2 = {
    title:'book2',
    pageCount:'122',
    genre: 'philosophy',
    authors: [
        {
            name: 'author4',
            age:20
        }
        ,{
            name: 'author5',
            age:31
        }
        ,{
            name: 'author6',
            age:27
        }
    ]
}
let book3 = {
    title:'book3',
    pageCount:'121',
    genre: 'adventure',
    authors: [
        {
            name: 'author7',
            age:21
        }
        ,{
            name: 'author8',
            age:45
        }
        ,{
            name: 'author9',
            age:14
        }
    ]
}
console.log(book1)
console.log(book2)
console.log(book3)

console.log('-------------------------------');

let users = [
    {
        name: 'Andrey',
        username: 'user1',
        password: 'password1',
    },{
        name: 'Ruslan',
        username: 'user2',
        password: 'password2',
    },{
        name: 'Helen',
        username: 'user3',
        password: 'password3',
    },{
        name: 'Anton',
        username: 'user4',
        password: 'password4',
    },{
        name: 'Olga',
        username: 'user5',
        password: 'password5',
    },{
        name: 'Gena',
        username: 'user6',
        password: 'password6',
    },{
        name: 'Rikard',
        username: 'user7',
        password: 'password7',
    },{
        name: 'John',
        username: 'user8',
        password: 'password8',
    },{
        name: 'Hanna',
        username: 'user9',
        password: 'password9',
    },{
        name: 'Danil',
        username: 'user10',
        password: 'password10',
    }
]
for (let i = 0; i < users.length; i++) {
    console.log(users[i].password)
}

export const getUsers = (count, page) => {
    const url = `https://randomuser.me/api/?results=${count}&seeds=FM&page=${page}`; // дописать ссылку ...results... какое количество юзеров брать
    return fetch(url)
    .then((response) => response.json())
}

export const getUsersList = (number) => {
    if(Number(number) && Number(number) > 0) {
        return fetch(`https://randomuser.me/api/?results=${number}`)
        .then((response) => response.json());    
    }
    return fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json());  
}
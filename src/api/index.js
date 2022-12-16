export const getUsers = () => {
    const url = 'https://randomuser.me/api/?results=100'; // дописать ссылку ...results... какое количество юзеров брать
    return fetch(url)
    .then((response) => response.json())
}
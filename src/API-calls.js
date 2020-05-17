import request from 'superagent';

const URL = 'https://protected-woodland-24556.herokuapp.com/'

const user = JSON.parse(localStorage.getItem('user'));

export async function getTasks() {
    return await request.get(`${URL}/tasks`).set('Authorization', user.token);
}

export async function addTasks(newTodo) {
    return await request.get(`${URL}/tasks/`, newTodo).set('Authorization', user.token);
}

export async function updateTasks(todo, matchingTodo) {
    return await request.get(`${URL}/tasks/${todo.id}`, matchingTodo).set('Authorization', user.token);
}

export async function deleteTasks(todo) {
    return await request.get(`${URL}/tasks/${todo.id}`).set('Authorization', user.token);
}

export async function logInUser(param) {
    await request.post(`${URL}/auth/${param}`, {
        email: user.email,
        password: user.password
    });
}
const baseUrl = 'https://5e6b89f2d708a000160b4a7d.mockapi.io/api/v1/tasks';


export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });

export const deleteTask = taskId =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });

export const fetchTasksList = () =>
    fetch(baseUrl)
        .then(response => response.json());

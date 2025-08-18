export default defineNuxtPlugin(() => {
    const api = $fetch.create({
        baseURL: 'http://localhost:8000/api',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        provide: {
            api
        }
    }
})
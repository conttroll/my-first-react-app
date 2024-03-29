import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'ad4eb5b4-aa5b-4082-923d-68a79c6526af'
    }
})

const samuraiAPI = {
    getUsers(pageSize, currentPage) {
        return axiosInstance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },

    followAPI(id) {
        return axiosInstance
            .post(`follow/${id}`, {})
            .then(response => response.data);
    },

    unfollowAPI(id) {
        return axiosInstance
            .delete(`follow/${id}`)
            .then(response => response.data );
    },

    getProfile(userId) {
        return axiosInstance
            .get(`profile/` + userId)
            .then(response => response.data);
    },

    getLogin() {
        return axiosInstance
            .get(`auth/me`)
            .then(response => response.data);
    },

    getStatus(userId) {
        return axiosInstance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },

    updateStatus(status) {
        return axiosInstance
            .put(`profile/status`, { status: status })
            .then(response => response.data);
    },

    login(email, password, rememberMe = false) {
        return axiosInstance
            .post('auth/login', {email, password, rememberMe})
            .then(response => response.data);
    },

    logout() {
        return axiosInstance
            .delete('auth/login')
            .then(response => response.data);
    }

}

export default samuraiAPI;
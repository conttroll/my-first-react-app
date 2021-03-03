const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHED= 'TOGGLE_IS_FETCHED';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 24,
    currentPage: 1,
    isFetched: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {...elem, followed: true}
                    }
                    return elem;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.userId) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHED:
            return { ...state, isFetched: action.isFetched }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId });
export const unfollow = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetched = (isFetched) => ({type: TOGGLE_IS_FETCHED, isFetched });

export default usersReducer;
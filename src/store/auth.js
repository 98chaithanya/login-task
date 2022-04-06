import axios from "axios"

export default {
    state: {
        token: null,
        user: null,
    },
    mutations: {

    },
    actions: {
        // email: payload.email,
        // password: payload.password
        // login: function({
        //     commit,
        //     state,
        //     dispatch
        // }, payload) {
        //     axios.post(state.authApiUrl + 'https://mldesk.komerco.online:5001/', {})
        //         .then(function(response) {
        //             commit('updateToken', response.data.access_token)
        //             commit('login', response.data.user_information)
        //             router.replace({
        //                 email: 'dashboard',
        //                 params: { 'userId': state.userInfo.id }
        //             })

        //         })
        // }
    }
}
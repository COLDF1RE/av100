import api from '@/api'

export const mutation = {
    SET_LOADING: 'SET_LOADING',
    SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    // SET_PICTURES: 'SET_PICTURES',
    SET_CART: 'SET_CART',
}

let cart = window.localStorage.getItem('cart');

export default {
    state: {
        loading: false,
        activeTab: '',
        searchQuery: '',
        // pictures: [],
        cart: cart ? JSON.parse(cart) : [],
    },

    getters: {
        loading: state => state.loading,
        activeTab: state => state.activeTab,
        searchQuery: state => state.searchQuery,
        // pictures: state => state.pictures,
        cart: state => state.cart,
    },

    mutations: {
        [mutation.SET_LOADING]: (state, isLoading) => {
            state.loading = isLoading
        },
        [mutation.SET_ACTIVE_TAB]: (state, data) => {
            state.activeTab = data
        },
        [mutation.SET_SEARCH_QUERY]: (state, data) => {
            state.searchQuery = data
        },
        // [mutation.SET_PICTURES]: (state, data) => {
        //     state.pictures = data || []
        // },
        [mutation.SET_CART]: (state, data) => {
            const index = state.cart.indexOf(data);
            if (index > -1) {
                state.cart.splice(index, 1);
            } else {
                state.cart.push(data)
            }
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },

    actions: {
        setLoading: ({dispatch, commit}, value) => {
            commit(mutation.SET_LOADING, value)
        },
        setActiveTab: ({ dispatch, commit }, value) => {
            commit(mutation.SET_ACTIVE_TAB, value)
        },
        setSearchQuery: ({ dispatch, commit }, value) => {
            commit(mutation.SET_SEARCH_QUERY, value)
        },
        // setPictures: ({dispatch, commit, getters}, value) => {
        //     commit(mutation.SET_LOADING, true)
        //     api.Events.getPictures(value)
        //         .then(({data}) => {
        //             // setTimeout(() => {
        //             console.log(data)
        //             commit(mutation.SET_LOADING, false)
        //             commit(mutation.SET_PICTURES, data)
        //             // }, 4000)
        //         })
        // },
        setCart: ({ dispatch, commit }, value) => {
            commit(mutation.SET_CART, value)
        },
    }
}

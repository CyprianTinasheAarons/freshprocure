import Vuex from 'vuex'
import firebase from 'firebase'

const store = () => {
  return new Vuex.Store({
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        } ,
    
    },
    actions: {

        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenicated', false);
                });
        },
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                 
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                });
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                  
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                 
                });
        }

    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
           
        }
    }
  })
}


export default store



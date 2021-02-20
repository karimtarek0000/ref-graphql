import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

// 1) - Connect apollo client and graphql
const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql'
});

// 2) - Finaly connect vue apollo with apollo client
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
//
Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');

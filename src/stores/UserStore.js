import Reflux from 'reflux';
import UserActions from './UserActions';

var UserStore = Reflux.createStore({
  loggedInUser: {},
  users: [],

  init() {
    this.fetchUserData();
  },

  fetchUserData() {
    return this.loggedInUser;
  },

  getUserData() {
    return this.users;
  },

  setUserData( users ) {
    this.users = users;
    console.log( "Setting", this.users, users );
  },

  getLoggedInUserData() {
    return this.loggedInUser;
  },

  setLoggedInUserData( currentUser ) {
    this.loggedInUser = currentUser;
  }
});

export default UserStore;

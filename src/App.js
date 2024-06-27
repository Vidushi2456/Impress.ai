import React from "react";
import "./assets/css/style.css";
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css";
import MainComponent from "./components/mainComponent";
import { addUser, getUsers } from "./actions/userActions";

function App(props) {
  return (
    <div>
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
};

import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

const App = () => {
  return (
    <div>
      <h1>User Management</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default App;


export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { useGoogleLogout } from 'react-google-login';
// import { useNavigate } from "react-router-dom";
// import { toast} from "react-toastify";

// const clientId = '831999342823-t1e1bla0t8qtn36ko1ebmn5389hg062k.apps.googleusercontent.com';


const Dashboard = ({
  auth: { user }
}) => {

  // let history = useNavigate();


  // const onLogoutSuccess = () => {
  //   // toast.success('Logged out Successfully', {position: "top-center",autoClose: 5000,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,});
  //    console.log("Success")
  //   localStorage.removeItem('loginID');
  //   history('/');
  // };
  // const onFailure = (res) => {
  //   console.log('Login failed: res:', res);
  // };  
  // const { signOut } = useGoogleLogout({
  //   clientId,
  //   onLogoutSuccess,
  //   onFailure,
  // });






  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      { (
        <>
          <p>Add some tasks</p>
          <Link to="/tasks" className="btn btn-primary my-1">
            Goto Task
          </Link>
        </>
      )}
      {/* <div>
        <h1> Dashboard </h1>
        <h4> Insert Id : {JSON.parse(localStorage.getItem('loginID'))} </h4>
        <button onClick={signOut} className="gr__log__button">Logout</button>
      </div> */}

    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(
  Dashboard
);

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../actions/task'; 
import "./Tasks.scss";

const TaskItem = ({
  deleteTask,
  updateTask,
  auth,
  task: {_id, title, description,date,status },
  showActions
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{moment(date).format("DD/MM/YYYY")}</p>
      <p className={`status-type ${status}`}>{status}</p>
    </div>
    

    {/* <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div> */}
    
    
    <div className="margin_left_581">

      {showActions && (
        <Fragment>
          {/* <button
            onClick={() => addLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button> */}
          {/* <button
            onClick={() => removeLike(_id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down" />
          </button> */}
          {/* <Link to={`/posts/${_id}`} className="btn btn-primary">
            Discussion{' '}
            
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}


          </Link> */}
          {/* {!auth.loading && user === auth.user._id && ( */}
          {(
            <button
              onClick={() => deleteTask(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          )}
          
          { status !== "completed" && (
            <button
              onClick={() => updateTask(_id)}
              type="button"
              className="btn btn-success"
            >
              <i className="fas fa-check wd_17" />
            </button>
          )}


        </Fragment>
      )}
    </div>
  </div>
);

TaskItem.defaultProps = {
  showActions: true
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteTask, updateTask })(
  TaskItem
);

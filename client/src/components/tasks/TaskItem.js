import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../actions/task'; 
import "./Tasks.scss";




const onChange = (id) =>
{
  // e.preventDefault();
  // updateTask(id);
  window.location.reload(); 
}


const TaskItem = ({
  deleteTask,
  updateTask,
  auth,
  task: {_id, title, description,date,status },
  showActions
}) => (

  // <Link to ={`/list/${_id}`}>

  // <Link to ={`/edit-task/${_id}`} >
    <div className="post bg-white p-1 my-1">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{moment(date).format("DD/MM/YYYY")}</p>
        <p className={`status-type ${status}`}>{status}</p>
      </div>
      
      <div className="margin_left_581">
        
        {showActions && (
          <Fragment>
            {
              (
                <Link to ={`/edit-task/${_id}`}><i class="fas fa-pencil-alt" id="font_s"></i></Link>
              )
            }
            {(
              <button
                onClick={(e) => {e.stopPropagation(); deleteTask(_id); }}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
              
            )}
            
            { status !== "completed" && (
              <button
                // onClick={() => {updateTask(_id), window.location.reload() }}
                // onClick={() => onChange(_id)}
                onClick={(e) => { e.stopPropagation();  updateTask(_id); onChange(_id); }}
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
  //  </Link>
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

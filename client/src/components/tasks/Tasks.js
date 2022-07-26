import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks } from '../../actions/task';


const Tasks = ({ getTasks, task: { tasks } }) => {
        useEffect(() => {
          getTasks();
        }, [getTasks]);

    return (
      <section className="container">
        <h1 className="large text-primary">Tasks</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome to the community
        </p>
        <TaskForm />
        <div className="tasks">
            {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
            ))} 
        </div>
      </section>
    );
  };

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  task: state.task
});

export default connect(mapStateToProps, { getTasks })(Tasks);


import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getTask } from '../../actions/task';

const Task = ({ getTask, task: { task, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  return loading || task === null ? (
    <Spinner />
  ) : (
    <section className="container">
      <Link to="/tasks" className="btn">
        Back To Tasks
      </Link>
    </section>
  );
};

Task.propTypes = {
  getTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  task: state.task
});

export default connect(mapStateToProps, { getTask })(Task);

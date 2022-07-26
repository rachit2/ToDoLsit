import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  
  return (
    <div className='post-form' >
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addTask({ title, description});
          setTitle('');
          setDescription('');
        }}
      >

        <textarea
          name='title'
          cols='30'
          rows='5'
          placeholder='Create a title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <textarea
          name='description'
          cols='30'
          rows='5'
          placeholder='Create a description'
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />

      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTask }
)(TaskForm);

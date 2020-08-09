import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToDo } from '../store/reducers/toDos';

const ToDo = ({ text, id, onClickButton }) => {
  console.log(text, id);
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickButton}>DEL</button>
    </li>
  );
};

// ownProps를 활용하여 개별적인 요소를 삭제
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickButton: () => dispatch(deleteToDo(Number(ownProps.id)))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);

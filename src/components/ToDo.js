import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id, onClickButton }) => (
  <li>
    <Link to={`/${id}`}>{text}</Link>
    <button onClick={onClickButton}>DEL</button>
  </li>
);

// ownProps를 활용하여 개별적인 요소를 삭제
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickButton() {
      return dispatch(actionCreators.deleteToDo(Number(ownProps.id)));
    }
  };
};

export default connect(null, mapDispatchToProps)(ToDo);

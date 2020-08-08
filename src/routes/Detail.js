import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = ({ toDo }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created At: {toDo?.id}</h5>
    </>
  );
};

// state를 저장해놓고 그 state를 활용한다.
const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;

  return {
    toDo: state.find(toDo => toDo.id === Number(id))
  };
};

export default connect(mapStateToProps)(Detail);

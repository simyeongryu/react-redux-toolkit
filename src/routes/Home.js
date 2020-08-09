import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { addToDo, deleteToDo } from '../store/reducers/toDos';

const Home = ({ toDos, addToDo }) => {
  // console.log(toDos);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => {
          return <ToDo key={toDo.id} {...toDo} />;
        })}
      </ul>
    </>
  );
};

// state: store의 현재 state
// ownProps: 현재 컴포넌트의 props
// return 되는 객체는 해당 컴포넌트의 props에 추가된다.
const mapStateToProps = (state, ownProps) => ({
  toDos: state.toDos
});

// dispatch(action): 파라미터의 action을 reducer로 보낸다.
// ownProps: 현재 컴포넌트의 props
// return 되는 객체는 해당 컴포넌트의 props에 추가된다.
const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo: text => dispatch(addToDo(text)),
  deleteToDo: id => dispatch(deleteToDo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

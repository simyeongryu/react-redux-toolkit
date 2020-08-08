# react-redux & toolkit

getState()는 state를 얻고, dispatch는 reducer에 action을 전달한다.

## 1. 설치

```
$ yarn add redux react-redux
```

## 2. react redux 연결하기

### store.js 파일 생성 및 셋업

#### store.js
```js
import { createStore } from 'redux';

// reducer type
const ADD = 'ADD';
const DELETE = 'DELETE';

// action creator
export const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

// dispatch를 통해 전달되는 action에 따라 state를 변화 시킨다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

export default store;
```

### index.js에 store 연결하기

#### index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```

## 3. 컴포넌트에서 store의 state 가져오기

`connect()` 함수를 사용한다.

#### /routes/Home.js

```js
import React, { useState } from 'react';
import { connect } from 'react-redux';

const Home = ({ toDos }) => {
  const [text, setText] = useState();

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setText('');
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

// state: store의 현재 state
// ownProps: 현재 컴포넌트의 props
// return 되는 객체는 해당 컴포넌트의 props에 추가된다.
const mapStateToProps = (state, ownProps) => ({
  toDos: state
});

// dispatch(action): 파라미터의 action을 reducer로 보낸다.
// ownProps: 현재 컴포넌트의 props
// return 되는 객체는 해당 컴포넌트의 props에 추가된다.
const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo(text) {
    return dispatch(actionCreators.addToDo(text));
  }
});

// connect() 함수를 이용하여 store와 해당 컴포넌트를 연결한다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

state를 props로 가져와서 해당 컴포넌트에서 필요한 방식으로 가공하여 사용한다.

## 4. Redux Toolkit

Redux의 코드를 줄여주는 라이브러리

```
yarn add @reduxjs/toolkit
```

### createAction


import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add to-do</button>
      </div>
      <div className="todo__wrapper">
      <Todo title="Finish Frontend Simplified" />
      <Todo title="Finish Interview Section" />
      <Todo title="Land a 100k Job" />
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;

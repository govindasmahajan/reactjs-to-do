import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My To Do</h1>
      <Todo text='Learn React' name='Delete' />
      <Todo text='Learn React Native' name='Delete' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

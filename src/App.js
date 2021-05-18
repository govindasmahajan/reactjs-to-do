import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My To Do</h1>
      <Todo text='Learn React' name='Started'/>
      <Todo text='Learn React Native' name='Not yet'/>
    </div>
  );
}

export default App;

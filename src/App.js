import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(3) //это массив из 2 элементов:
  // 1й - это значение, которое мы объявили
  // 2й - функция, предназначенная для того, чтобы изменять состояние

  function increment () {
    setLikes(likes + 1)  // мы не изменяем функцию напрямую, мы вызываем функцию, которая для этого предназначена
    // и туда передаем значение, которое на 1 больше наших лайков
  }
  function decrement () {
    setLikes(likes - 1)
  }

  return (
      <div className="App">
        <h1>{likes}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

      </div>
  );
}

export default App;

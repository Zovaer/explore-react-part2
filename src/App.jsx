import "./App.css";
import Friend from "./Friend";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";
import Counter from "./counter";


function App() {
  function handleClick() {
    alert("button Clicked");
  }
  const handlClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      
     
      <h1>React Core Concepts part2</h1>
    
      <Friends></Friends>
      <Users></Users>

      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handlClick2}>Click Me</button>
      <button
        onClick={() => {
          alert("third click");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(3)}>four</button>
    </>
  );
}

export default App;

import Person from "./Person";
import Header from "./Header";
import List from "./List";
import Button from "./Button";
function App() {
  return (
    <>
     <Header title='My WebPage This is Person and his Age'/>
     <Person name='Aakarshit' age='20' />
     <Button text='Click Me' onClick={() => console.log('Button Clicked') } />

     <List items={[ "Hello World", "You are Alien", "I am from Another Planet","Noix" ]} />

    </>
  );
}

export default App;

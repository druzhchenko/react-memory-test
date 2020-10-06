import React from "react";

const COUNT_OF_INPUTS = 2000;

const btn = {
  padding: '10px 20px',
  fontWeight: 600,
}

const active = {
  ...btn,
  border: '2px solid black',
  outside: 'none',
  borderRadius: 4,
  color: 'green',
}

export default function App() {
  const [ view, setView ] = React.useState( 'home' );
  return (
    <div>
      <nav>
        <Button isActive={view === 'home'} view="home" onClick={setView} >Home</Button>
        <Button isActive={view === 'about'} view="about" onClick={setView} >About</Button>
        <Button isActive={view === 'users'} view="users" onClick={setView} >Users</Button>
      </nav>
      <div>
        { view === 'home' && <Home/> }
        { view === 'about' && <About/> }
        { view === 'users' && <Users/> }
      </div>
    </div>
  );
}

function Button({ isActive, view, children, onClick }) {
  return <button
      style={ isActive? active : btn }
      onClick={ () => onClick(view) }
  >
    {children}
  </button> ;
}

function Form() {
  const [ values, setValue ] = React.useState(new Array(COUNT_OF_INPUTS).fill( '' ));

  const changeValue = ( key, value ) => {
    setValue( ( currentValues ) => {
      return currentValues.map( ( v, k ) => k === key ? value : v  )
    } );
  }

  return  <form>
    { values.map( ( value, key )  => {
      return <input
        size={30}
        key={`key-${key}`}
        value={ value }
        name={`name-${key}`}
        onChange={e=>changeValue( key, e.currentTarget.value )}
        placeholder="type here and click inactive button"
    />
    }) }
  </form>
}

function Home() {
  return <div>
    <h2>Home</h2>
    <Form />
  </div> ;
}

function About() {
  return <div>
    <h2>About</h2>
    <Form />
  </div> ;
}

function Users() {
  return <div>
    <h2>Users</h2>
    <Form />
  </div>;
}

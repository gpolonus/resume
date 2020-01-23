import React from 'react';
import './App.css';
import data from './data'

const Line = ({ l: { prefix, content } }) => (
  <div className="Line">
    <strong>{ prefix }</strong><p>{ content }</p>
  </div>
)

const Role = ({ r: { title, lines } }) => (
  <div className="Role">
    <h3>
      { title }
    </h3>
    {
      lines.map(l => <Line l={l} />)
    }
  </div>
)

const Company = ({ c: { title, roles } }) => (
  <div className="Company">
    <h2>
      { title }
    </h2>
    {
      roles.map(r => <Role r={r} />)
    }
  </div>
)

const Header = () => (
  <div className="Header">
    <h1>Griffin Polonus</h1>
  </div>
)

const Objective = () => (
  <div className="Objective">
    This is where the objective goes.
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Objective />
      {
        data.companies.map(c =>
          <Company c={c} />
        )
      }
    </div>
  );
}

export default App;

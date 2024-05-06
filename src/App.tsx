import { Table } from './components/Table';
import { board } from './signals';
import './App.css';


function App() {
  return (
    <>
      <Table Board={board.value} />
    </>
  )
}

export default App

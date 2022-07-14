import logo from '../assets/Eden-logo.png';
import { OnboardingNode } from './OnboardingNode';
import { ApplicationForm } from './ApplicationForm';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [activeNode, setActiveNode] = useState([1]);
  const activeNextNode = (node: number | null) => {
    if (node) {
      setActiveNode(preState => [...preState, node])
    } else {
      setActiveNode([1])
    }
  }
  const setCurrentActiveNode = (node: number) => {
    const newNodes: number[] = []
    console.log(node)
    for (let index = 0; index < node; index++) {
      newNodes.push(index + 1)
      console.log(newNodes)
    }
    setActiveNode(newNodes)
  }
  return (
    <div className='App container'>
      <div className="row w-100">
        <div className="App-container col-xxl-12">
          <div className="row align-items-center">
            <div className="col-xxl-5 m-auto">
              <header className="App-header w-100 text-center my-5">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <OnboardingNode activeNode={activeNode} activateNextNode={activeNextNode} setCurrentActiveNode={setCurrentActiveNode} />
              <ApplicationForm activeNode={activeNode} activateNextNode={activeNextNode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

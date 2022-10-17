// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
// import Container from './Drag';
// import { DndProvider } from 'react-dnd'
// import {Backend } from 'react-dnd-html5-backend'
// import {HTML5Backend} from 'react-dnd-html5-backend'
import './App.css';
// import Drag from './Drag'
// import { DragDropContext } from 'react-dnd';
// import { DndProvider } from 'react-dnd';
// import {HTML5Backend} from 'react-dnd-html5-backend';
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <div className="App">
        	<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
     
    
    </div>
  );
}
 export default App;

//  export default DragDropContext(HTML5Backend)(App);

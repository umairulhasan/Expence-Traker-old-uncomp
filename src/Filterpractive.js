import React, { useState } from 'react';


function Filterpractive() {

    const [objects, setObjects] = useState([
        { id: 1, name: 'John', age: 28 },
        { id: 2, name: 'Jane', age: 32 },
        { id: 3, name: 'Jim', age: 40 }
      ]);
    
      const specificObject = objects.filter(object => object.id === 3);
  return (
    <div>
      <h1>Objects</h1>
      <ul>
        {objects.map(object => (
          <li key={object.id}>
           
            {object.name}, {object.age}
          </li>
          
        ))}
        
      </ul>
      <h2>Specific Object</h2>
      <p>
        {specificObject[0].name}, {specificObject[0].age}
      </p>
     
    </div>
   
   );
   
}

export default Filterpractive;

// If we dont have a id in data now use index

// function App() {
//     const [objects, setObjects] = useState([
//       { name: 'John', age: 28 },
//       { name: 'Jane', age: 32 },
//       { name: 'Jim', age: 40 }
//     ]);
  
//     const specificObject = objects.filter(object => object.name === 'Jane');
  
//     return (
//       <div>
//         <h1>Objects</h1>
//         <ul>
//           {objects.map((object, index) => (
//             <li key={index}>
//               {object.name}, {object.age}
//             </li>
//           ))}
//         </ul>
//         <h2>Specific Object</h2>
//         <p>
//           {specificObject[0].name}, {specificObject[0].age}
//         </p>
//       </div>
//     );
//   }






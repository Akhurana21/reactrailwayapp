// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function App() {
  console.log("Helloo")
  const [post, setPosts] = useState([]);
  //this.APIHOSTPORT = `${process.env.NODE_APP_APIHOSTPORT}`;
  var url = `http://${process.env.NODE_APP_APIHOSTPORT}/api/users`
  useEffect(() => {
    //var url = `http://${this.APIHOSTPORT}/languages/${this.props.id}/vote`
    //axios.get(url)
    // axios.get('http://localhost:3001/api/users')
    //   //axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => {
    //     setPosts(response.json());
    //   })
    //axios.get('http://localhost:3001/api/users')
    axios.get('http://expressapp-backend.up.railway.app/api/users')
      //axios.get('https://jsonplaceholder.typicode.com/posts')
      // .then(response => {
      //   //console.log(response);
      //   //response.json();
      // })
      .then(post => {
        //console.log(typeof (post));
        setPosts(post.data);
        //console.log(post.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>email</TableCell>
            {/* Add more headers based on your data */}
          </TableRow>
        </TableHead>
        <TableBody>
          {post.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
              {/* Add more cells based on your data */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <ul>
    //   {
    //     posts.map(post => (
    //       <li key={post.id}>{post.name}</li>
    //     ))
    //   }
    // </ul>
  );
}

export default App;

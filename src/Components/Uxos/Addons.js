import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";


const Addons = () => (
  <Container className="mt-3">
    
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th>Addon Id</th>
              <th>Valid From</th>
              <th>Valid Till</th>
              <th>Status</th>
              <th>Course Alias</th>
              
              <th>Grade</th>
              <th>Sku Id</th>
              <th>Batch Id</th>
              <th>Course Id</th>
              <th>Board</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SSO1-231218160746007237802290006</td>
              <td>2024-04-09</td>
              <td>2025-03-31</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>Math Science</td>

              <td>6</td>
              <td>SD06CB25</td>
              <td>149584</td>
              <td>13578</td>
              <td>CBSE</td>
              <td>btc_session</td>
            </tr>
            <tr>
              <td>E-SSO1-2312181607460072728103290006</td>
              <td>2024-04-09</td>
              <td>2025-05-31</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>English</td>

              <td>N/A</td>
              <td>SD06CB25</td>
              <td>65f28cc7f299fe08a175c8a0</td>
              <td>7727</td>
              <td>N/A</td>
              <td>new_neo_session</td>
            </tr>
            <tr>
              <td>E-SSO1-231218160746007261203290006</td>
              <td>2024-04-09</td>
              <td>2025-05-31</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>Social Studies</td>

              <td>N/A</td>
              <td>SD06CB25</td>
              <td>65f28d7cd0c1011c37e7083f</td>
              <td>7794</td>
              <td>N/A</td>
              <td>new_neo_session</td>
            </tr>
          </tbody>
        </Table>
      
  </Container>
);

export default Addons;

// import React from 'react'
// import {Table, Badge } from "react-bootstrap";
// function Addons() {
//   return (
//     <div className="table-wrapper">
//       <Table striped bordered>
//         <thead>
//           <tr>
//             <th>Addon Id</th>
//             <th>Valid From</th>
//             <th>Valid Till</th>
//             <th>Status</th>
//             <th>Course Alias</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <a href="#">SS01-2406101204120955000900080</a>
//             </td>
//             <td>2024-06-10</td>
//             <td>2024-06-10</td>
//             <td>
//               <Badge variant="warning">Will expire on 10-Jun-2024</Badge>
//             </td>
//             <td>NA</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default Addons

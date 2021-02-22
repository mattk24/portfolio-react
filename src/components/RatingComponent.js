import React from 'react';
import { Table } from 'reactstrap';

<div>
  <h3 className="skill mt-5 mb-5" style={{color: 'gold'}}>Skills</h3> {/* Skills */}
  <table className="table table-md" border={1}> {/* Table */}
    <tbody><tr>
        <th>HTML</th>
        <td>⭐⭐⭐⭐</td>
        <th>CSS</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Javascript</th>
        <td>⭐⭐⭐⭐</td>
        <th>Jquery</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Bootstrap</th>
        <td>⭐⭐⭐⭐</td>
        <th>Sass</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>MySQL</th>
        <td>⭐</td>
        <th>Wordpress</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>PHP</th>
        <td>⭐⭐</td>
        <th>AngularJS</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>History</th>
        <td>⭐⭐⭐⭐⭐</td>
        <th>Science</th>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Math</th>
        <td>⭐⭐⭐</td>
        <th>English</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Mythology</th>
        <td>⭐⭐⭐⭐⭐</td>
        <th>Martial Arts</th>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
    </tbody></table>
</div>

 const Rating = (props) => {

    return (
      <div>
         <h3 className="skill mt-5 mb-5" style={{color: 'gold'}}>Skills</h3> {/* Skills */}
         <Table className="table table-md" border={1}>
         <tbody><tr>
        <th>HTML</th>
        <td>⭐⭐⭐⭐</td>
        <th>CSS</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Javascript</th>
        <td>⭐⭐⭐⭐</td>
        <th>Jquery</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Bootstrap</th>
        <td>⭐⭐⭐⭐</td>
        <th>Sass</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>MySQL</th>
        <td>⭐</td>
        <th>Wordpress</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>PHP</th>
        <td>⭐⭐</td>
        <th>AngularJS</th>
        <td>⭐</td>
      </tr>
      <tr>
        <th>History</th>
        <td>⭐⭐⭐⭐⭐</td>
        <th>Science</th>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Math</th>
        <td>⭐⭐⭐</td>
        <th>English</th>
        <td>⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <th>Mythology</th>
        <td>⭐⭐⭐⭐⭐</td>
        <th>Martial Arts</th>
        <td>⭐⭐⭐⭐⭐</td>
      </tr>
    </tbody>
         </Table>
      </div>
    );
 }

 export default Rating;
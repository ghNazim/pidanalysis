import React, { useContext } from "react";
import { Table,Container} from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import { isDateInFuture,dateValidation } from "../../utility/utilityFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


const AddonItem = ({data}) => {

  const isActive = isDateInFuture(data.valid_till)
  const errorlist = {
    dateValidationError: dateValidation(data.valid_from, data.valid_till),
  };

  const filteredErrorList = Object.fromEntries(Object.entries(errorlist).filter(([key, value]) => value === true))
  const isErrored = Object.keys(filteredErrorList).length > 0;
  const errorText = Object.keys(filteredErrorList).join(" & ");
  return (
    <tr>
      <td className="tdError">
        {isErrored && (
          <>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              size="2x"
              color="gray"
            />
            <div className="errorLeft">{errorText}</div>
          </>
        )}
      </td>

      <td>{data.reference_id} </td>
      <td>{data.valid_from.split(" ")[0]}</td>
      <td>{data.valid_till.split(" ")[0]}</td>
      <td>
        <span className={`badge ${isActive ? "bg-success" : "bg-danger"}`}>
          {isActive ? "Active" : "deactive"}
        </span>
      </td>
      <td>Math Science</td>

      <td>6</td>
      <td>SD06CB25</td>
      <td>{data.batch_id}</td>
      <td>13578</td>
      <td>CBSE</td>
      <td>{data.type}</td>
    </tr>
  );
}
const Addons = () => {
  const { uxosData } = useContext(DataContext);
  const addons = uxosData.addons
  return (
  <Container className="mt-4">
    
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th> Error </th>
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
            {addons.map((item,index) => <AddonItem data={item} key={index}/>)}
          </tbody>
        </Table>
      
  </Container>
)};

export default Addons;


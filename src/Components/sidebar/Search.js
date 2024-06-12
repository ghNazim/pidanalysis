import React, { useContext, useState } from 'react'
import { Button, InputGroup, Form } from "react-bootstrap";
import { DataContext } from '../../Contexts/DataContext';
function Search() {
    const {setUxosData,setTllmsData} = useContext(DataContext)
    const [searchText,setSearchText] = useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleSearchChange = function(e){
        setSearchText(e.target.value)
    }
    const fetchUxosData = async () => {
      const url = "https://debug.byjusorders.com/list";
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": "O58PLeeL5i1HgPHFsUunD9MCE80CKTa34VaIF5rB",
      };
      const body = JSON.stringify({
        db: "byjusleado",
        collection: "premiumaccounts",
        filter: {
          premium_account_id: "1154445956",
        },
        select:
          "order_lines addons student_details studentId primaryNumber secondaryNumber premium_account identity studentAdditionalDetails",
        page: 1,
        limit: 1,
      });

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: body,
        });

        if (!response.ok) {
          setError("Error fetching from server")
          console.log("Error fetching from server");
          return
        }

        const data = await response.json();
        setUxosData(data.docs[0]);
        setLoading(false);
        
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      }
    };
    const handleClick = function(){
        
    }
  return (
    <InputGroup className="mb-3">
      <Form.Control placeholder="Search Premium Id" value={searchText} onChange={handleSearchChange}/>
      <Button variant="outline-secondary" id="search_btn" onClick={handleClick}>
        Search
      </Button>
    </InputGroup>
  );
}

export default Search

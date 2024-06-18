import React, { useContext, useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
function Search() {
  const { setUxosData, setTllmsData, setPid, setUxosLoading, setTllmsLoading } =
    useContext(DataContext);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const handleSearchChange = function (e) {
    setSearchText(e.target.value);
  };
  const fetchUxosData = async () => {
    const url = "http://localhost:3001/uxosapi";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "O58PLeeL5i1HgPHFsUunD9MCE80CKTa34VaIF5rB",
    };
    const body = JSON.stringify({
      db: "byjusleado",
      collection: "premiumaccounts",
      filter: {
        premium_account_id: searchText,
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
        setError("Error fetching from server");
        console.log("Error fetching from server");
        setUxosLoading(false)
        return;
      }

      const data = await response.json();
      setUxosData(data.docs[0]);
      setUxosLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setUxosLoading(false);
    }
  };
  const fetchTllmsData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/tllmsapi/get_tllms1?pid=1843402884&auth=hiLFlLErXjAtYhoYR/UJsA==`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            "User-Agent": "CustomUserAgent",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        console.log("response not ok", response);
        throw new Error(`Error: ${response.status}`);
      }

      try {
        const result = await response.json();
        console.log("tllms result", result);
        setTllmsData(result);
      } catch (jsonError) {
        console.log("Error parsing JSON", jsonError);
        throw new Error("Error parsing JSON");
      }
    } catch (err) {
      setError(err.message);
      console.log("Error in fetchTllmsData:", err);
    } finally {
      setTllmsLoading(false);
    }
  };






  const handleClick = function () {
    setUxosLoading(true)
    setTllmsLoading(true)
    fetchUxosData();
    fetchTllmsData();
    setPid(searchText);
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search Premium Id"
        value={searchText}
        onChange={handleSearchChange}
      />
      <Button variant="outline-secondary" id="search_btn" onClick={handleClick}>
        Search
      </Button>
    </InputGroup>
  );
}

export default Search;

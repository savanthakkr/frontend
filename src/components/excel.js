import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Excel() {
  const [file, setFile] = useState(null);

  const onChangeHandler = event => {
    setFile(event.target.files[0]);
  };


  const handleClick = (event) => {
    navigate("/getAllProducts");
   };

   const navigate = useNavigate();

  const onClickHandler = async () => {
    try {
      // Send the file to the Node.js API
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('http://localhost:5000/api/createProduct', formData);

      // Send a success message to the user
      alert('File uploaded and data inserted');
    } catch (error) {
      // Send an error message to the user
      alert(error.response.data.message);
    }
  };

  return (
    <form>
      <input type="file" accept=".xlsx" name="file" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Upload
      </button>
      <button className="btn btn-primary btn-sm" type="button" onClick={handleClick}>Add Product</button>
    </form>
  );
}

export default Excel;
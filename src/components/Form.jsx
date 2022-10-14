import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../store/reducer/TodoSlicer";

const Form = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [formDataError, setFormDataError] = useState({
    name: null,
    phone: null,
  });

  const handleFormChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random(Date.now() * 20) * 10000000;

    if (!formData.name) {
      setFormDataError((pre) => ({
        ...pre,
        name: "name is required",
      }));
    }

    if (!formData.phone) {
      setFormDataError((pre) => ({
        ...pre,
        phone: "phone is required",
      }));
    }

    if (formData.name && formData.phone) {
      const data = {
        id,
        ...formData,
      };
      dispatch(Add(data));
    }

    setFormData({
      name: "",
      phone: "",
    });
  };

  console.log(formData);

  return (
    <div style={{width:'50%', margin:'auto', marginTop:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <h1>Contact</h1>
      <form style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <label htmlFor="name">Name</label> &nbsp;
          <input
            onChange={handleFormChange}
            value={formData.name}
            type="text"
            name="name"
          /> &nbsp;
          {formDataError.name && (
            <p style={{ color: "red" }}>{formDataError.name}</p>
          )}
        </div>
        <br/>
        <div>
          <label htmlFor="phone">Phone</label> &nbsp;
          <input
            onChange={handleFormChange}
            value={formData.phone}
            type="number"
            name="phone"
          /> &nbsp;
          {formDataError.phone && (
            <p style={{ color: "red" }}>{formDataError.phone}</p>
          )}
        </div>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;

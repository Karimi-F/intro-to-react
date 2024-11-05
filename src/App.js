import logo from "./logo.svg";
import "./Bootstrap.css";
import "./App.css";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    imageUrl: "",
    price: "",
  });

  const [submittedValue, setSubmittedValue] = React.useState("");

  function handleOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    console.log(formData);
    setSubmittedValue(previousData=>[...previousData,formData]);
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className="p-4">
        <input
          placeholder="Plant name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />{" "}
        <br />
        <input
          placeholder="imageUrl"
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleOnChange}
        />{" "}
        <br />
        <input
          placeholder="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">Add to cart</button>
      </form>
      {submittedValue.length > 0 && (
        <div>
          <h2>Added plants:</h2>
          {submittedValue.map((data, index) => (
            <ul key={index}>
              {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default App;

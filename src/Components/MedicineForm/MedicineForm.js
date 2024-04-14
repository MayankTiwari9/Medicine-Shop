import React, { useContext, useState } from "react";
import ListContext from "../../Store/list-context";
import "./MedicineForm.css";
import { v4 as uuidv4 } from "uuid";

const MedicineForm = () => {
  const listContext = useContext(ListContext);

  const [medicineData, setMedicineData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMedicineData((prevData) => ({ ...prevData, [id]: value }));
  };

  const addListItemHandler = () => {
    const newItem = {
      id: uuidv4(),
      name: medicineData.name,
      description: medicineData.description,
      price: medicineData.price,
      quantity: 1,
    };

    listContext.addListItem(newItem);

    setMedicineData({
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <div className="shoeform-main">
      <div>
        <div>
          <label>Medicine Name</label>
          <input
            type="text"
            id="name"
            value={medicineData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medicine Description</label>
          <input
            type="text"
            id="description"
            value={medicineData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medicine Price</label>
          <input
            type="number"
            id="price"
            value={medicineData.price}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button className="add-btn" onClick={addListItemHandler}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default MedicineForm;

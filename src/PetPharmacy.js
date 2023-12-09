import React, { useState } from "react";
import "./app.css";

const PetPharmacy = () => {
  const petMedicines = [
    { id: 1, name: 'Simparica Trio', description: 'Heartworm prevention for dogs', price: 39.99, image: 'Simparica.jpg' },
    { id: 2, name: 'Advantage II', description: 'Flea treatment for cats', price: 29.99, image: 'advantage.png' },
    { id: 3, name: 'Rimadyl', description: 'Pain relief for dogs with arthritis', price: 45.49, image: 'rimadyl.jpg' },
    { id: 4, name: 'Revolution', description: 'Topical solution for dogs and cats', price: 34.95, image: 'rimadyl.jpg' },
    { id: 5, name: 'Nausea', description: 'Relief from Nausea', price: 25.99, image: 'nausea.jpg' },
    { id: 6, name: 'HomeoPet', description: 'For Travel Anxiety', price: 19.99, image: 'homeopet.jpg' },
    // Add more medicines as needed
  ];

  const itemsPerPage = 2; // Number of medicines to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (medicine) => {
    setCart([...cart, medicine]);
    alert(`Added ${medicine.name} to the cart!`);
  };

  const handleRemoveFromCart = (medicineId) => {
    const updatedCart = cart.filter((item) => item.id !== medicineId);
    setCart(updatedCart);
  };

  const cartTotalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageMedicines = petMedicines.slice(startIndex, endIndex);

  return (
    <div className="pet-pharmacy-container">
      <h2>Pet Pharmacy</h2>
      <div className="medicine-list">
        {currentPageMedicines.map((medicine) => (
          <div key={medicine.id} className="medicine-item">
            <img className="medicine-image" src={`/${medicine.image}`} alt={medicine.name} />
            <div className="medicine-details">
              <h3>{medicine.name}</h3>
              <p>{medicine.description}</p>
              <p>Price: ${medicine.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(medicine)}>Add to Cart</button>
              <button onClick={() => handleRemoveFromCart(medicine.id)} style={{ backgroundColor: 'red' }}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {"<"} Prev
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(petMedicines.length / itemsPerPage)))}
          disabled={currentPage === Math.ceil(petMedicines.length / itemsPerPage)}
        >
          Next {">"}
        </button>
      </div>

      <div className="cart-container">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Amount in Cart: ${cartTotalAmount}</p>
      </div>
    </div>
  );
};

export default PetPharmacy;

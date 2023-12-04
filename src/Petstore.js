import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Section = styled.section`
  margin-top: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PetCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
    color: #555;
  }

  button {
    padding: 8px;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  input,
  textarea {
    margin-bottom: 16px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
  }

  button {
    padding: 12px;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: green;
  font-weight: bold;
`;

const CartButton = styled.button`
  margin-top: 8px;
  background-color: #ff4500;
`;

const App = () => {
  const initialProducts = {
    'Pet Products': [
      { name: 'Dog Food', price: '$20', image: '/images/dog_food.jpg' },
      { name: 'Cat Toy', price: '$10', image: '/images/cat_food.jpg' },
      { name: 'Fish Tank', price: '$50', image: '/images/fish_food.jpg' },
    ],
    'Pet Clothes': [
      { name: 'Pet Sweater', price: '$15', image: '/images/dog_food.jpg' },
      { name: 'Pet Bow Tie', price: '$8', image: '/images/dog_food.jpg' },
      { name: 'Pet Hoodie', price: '$20', image: '/images/dog_food.jpg' },
    ],
    'Medicine for Pets': [
      { name: 'Pet Pain Reliever', price: '$12', image: '/images/dog_food.jpg' },
      { name: 'Pet Cough Syrup', price: '$8', image: '/images/dog_food.jpg' },
      { name: 'Pet Vitamins', price: '$15', image: '/images/dog_food.jpg' },
    ],
  };

  const [products, setProducts] = useState(initialProducts);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const {
    register: registerAppointment,
    handleSubmit: handleSubmitAppointment,
    reset: resetAppointment,
  } = useForm();

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    reset: resetContact,
  } = useForm();

  const onSubmitAppointment = (data) => {
    console.log('Appointment Form Data:', data);
    // Handle appointment form submission logic
    resetAppointment();
    setAppointmentSuccess(true);
  };

  const onSubmitContact = (data) => {
    console.log('Contact Form Data:', data);
    // Handle contact form submission logic
    resetContact();
    setContactSuccess(true);
  };

  const handleAddToCart = (productName) => {
    // Handle adding the product to the cart (You can implement this based on your needs)
    alert(`${productName} added to cart!`);
  };

  return (
    <Container>
      <h1>Welcome to the Pet Store</h1>

      {Object.entries(products).map(([category, productArray]) => (
        <Section key={category}>
          <h2>{category}</h2>
          <CardContainer>
            {productArray.map((product, index) => (
              <PetCard key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <CartButton onClick={() => handleAddToCart(product.name)}>Add to Cart</CartButton>
              </PetCard>
            ))}
          </CardContainer>
        </Section>
      ))}

      <Section>
        <FormContainer>
          <h2>Appoint a Pet Trainer</h2>
          <form onSubmit={handleSubmitAppointment(onSubmitAppointment)}>
            <input {...registerAppointment('name')} type="text" placeholder="Your Name" />
            <input {...registerAppointment('petName')} type="text" placeholder="Pet's Name" />
            <textarea {...registerAppointment('message')} placeholder="Additional Information"></textarea>
            <button type="submit">Submit Appointment Request</button>
            {appointmentSuccess && (
              <SuccessMessage>Appointment request submitted successfully!</SuccessMessage>
            )}
          </form>
        </FormContainer>
      </Section>

      <Section>
        <FormContainer>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmitContact(onSubmitContact)}>
            <input {...registerContact('name')} type="text" placeholder="Your Name" />
            <input {...registerContact('email')} type="email" placeholder="Your Email" />
            <textarea {...registerContact('message')} placeholder="Your Message"></textarea>
            <button type="submit">Submit Message</button>
            {contactSuccess && (
              <SuccessMessage>Contact message submitted successfully!</SuccessMessage>
            )}
          </form>
        </FormContainer>
      </Section>
    </Container>
  );
};

export default App;

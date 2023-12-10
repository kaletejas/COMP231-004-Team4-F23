import React, { useState } from "react";
import "./app.css";

const PetHotel = () => {
  const [availableRooms, setAvailableRooms] = useState([
    { id: 1, roomNumber: 101, type: "Standard", price: 50, booked: false, date: null },
    { id: 2, roomNumber: 102, type: "Deluxe", price: 75, booked: false, date: null },
    { id: 3, roomNumber: 103, type: "Suite", price: 100, booked: false, date: null },
    // Add more rooms as needed
  ]);

  const [bookedRooms, setBookedRooms] = useState([]);

  const handleBookRoom = (roomId, selectedDate) => {
    // Date format validation
    const isValidDate = /^\d{2}-\d{2}-\d{4}$/.test(selectedDate);

    if (!isValidDate) {
      alert("Please enter a valid date format (DD-MM-YYYY)!");
      return;
    }

    // Check if the room is already booked for the selected date
    const isAlreadyBooked = bookedRooms.some(room => room.id === roomId && room.date === selectedDate);

    if (isAlreadyBooked) {
      alert(`Room ${roomId} is already booked for ${selectedDate}!`);
      return;
    }

    const updatedAvailableRooms = availableRooms.map((room) =>
      room.id === roomId ? { ...room, booked: true, date: selectedDate } : room
    );

    const bookedRoom = availableRooms.find((room) => room.id === roomId);
    setAvailableRooms(updatedAvailableRooms);
    setBookedRooms([...bookedRooms, { ...bookedRoom, date: selectedDate }]);

    alert(`Room ${bookedRoom.roomNumber} booked successfully for ${selectedDate}!`);
  };

  const handleCancelBooking = (roomId) => {
    const updatedAvailableRooms = availableRooms.map((room) =>
      room.id === roomId ? { ...room, booked: false, date: null } : room
    );

    const cancelledRoom = bookedRooms.find((room) => room.id === roomId);
    const updatedBookedRooms = bookedRooms.filter((room) => room.id !== roomId);

    setAvailableRooms(updatedAvailableRooms);
    setBookedRooms(updatedBookedRooms);

    alert(`Booking for Room ${cancelledRoom.roomNumber} cancelled successfully!`);
  };

  const handleAddRoom = () => {
    const newRoomNumber = availableRooms.reduce(
      (max, room) => (room.roomNumber > max ? room.roomNumber : max),
      0
    ) + 1;

    const newRoom = {
      id: availableRooms.length + 1,
      roomNumber: newRoomNumber,
      type: "Standard",
      price: 50,
      booked: false,
      date: null,
    };

    setAvailableRooms([...availableRooms, newRoom]);

    alert(`Room ${newRoom.roomNumber} added successfully!`);
  };

  // Calculate total amount for booked rooms
  const totalAmount = bookedRooms.reduce((total, room) => total + room.price, 0).toFixed(2);

  return (
    <div className="pet-hotel-container">
      <h2>Pet Hotel Booking</h2>
      <div className="room-list">
        <h3>Available Rooms</h3>
        <ul>
          {availableRooms.map((room) => (
            <li key={room.id}>
              Room {room.roomNumber} - {room.type} - ${room.price.toFixed(2)}
              {(!room.booked || room.booked) && (
                <>
                  <button onClick={() => handleBookRoom(room.id, prompt("Enter booking date:"))}>
                    Book Room
                  </button>
                  <button onClick={() => handleCancelBooking(room.id)}>
                    Cancel Booking
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <button onClick={handleAddRoom}>Add Room</button>
      </div>

      <div className="booking-history">
        <h3>Booking History</h3>
        <ul>
          {bookedRooms.map((room) => (
            <li key={room.id}>
              Room {room.roomNumber} - {room.type} - ${room.price.toFixed(2)} - Booked on {room.date}
            </li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default PetHotel;

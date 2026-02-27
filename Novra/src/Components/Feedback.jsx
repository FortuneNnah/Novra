import React from "react";

const feedbacks = [
  {
    name: "Sophia Turner",
    message:
      "Absolutely love the quality and style! Novra transformed my living space into something truly special.",
    star: "★★★★★",
  },
  {
    name: "Michael Chen",
    message:
      "The customer service was fantastic and the furniture exceeded my expectations. Highly recommended!",
    star: "★★★★★",
  },
  {
    name: "Ava Williams",
    message:
      "Absolutely love the quality and style! Novra transformed my living space into something truly special.",
    star: "★★★★★",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-section">
      <div className="fh2">
          <h2 className="feedback-title">What Our Customers Say</h2>
      </div>
      <div className="feedback">
        {feedbacks.map((item, idx) => (
          <div className="feedback-item" key={idx}>
            <div className="feedback-stars">{item.star}</div>
            <p className="feedback-message">"{item.message}"</p>
            <div className="feedback-name">- {item.name}</div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Feedback;

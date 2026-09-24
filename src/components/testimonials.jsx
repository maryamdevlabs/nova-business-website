const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    text: "Amazing service! They created exactly what we needed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Ali",
    text: "Very professional and easy to work with.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    text: "Our website looks beautiful and works perfectly!",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title" >What Our Clients Say</h2>
      <div className="testimonials-container">
          {testimonials.map((testimonial)=>(
           <div className="testimonial-card" key={testimonial.id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
            <p className="testimonial-rating">⭐{testimonial.rating}/5</p>
        </div>
        ))}
        </div>
    </section>
  );
}

export default Testimonials;
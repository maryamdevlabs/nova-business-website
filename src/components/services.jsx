function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Clean and modern designs that make your business look professional."
    },
    {
      title: "Web Development",
      description: "Fast, responsive websites built to work smoothly on every device."
    },
    {
      title: "Business Solutions",
      description: "Digital experiences designed around your customers and business goals."
    }
  ]

  return (
    <section className="services" id="services">
      <p className="section-tag">OUR SERVICES</p>

      <h2>Everything you need to grow online.</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
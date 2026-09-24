function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-tag">BUILD YOUR FUTURE</p>

      <h1>
        We create digital experiences
        <br />
        that make businesses stand out.
      </h1>

      <p className="hero-text">
        Modern websites designed to help businesses grow, connect with
        customers, and make a lasting impression.
      </p>

      <div className="hero-buttons">
  <button
  className="hero-primary"
  onClick={() => document.getElementById("contact").scrollIntoView()}
>
  Get Started
</button>

<button
  className="hero-secondary"
  onClick={() => document.getElementById("services").scrollIntoView()}
>
  View Our Work
</button>
</div>
    </section>
  )
}

export default Hero
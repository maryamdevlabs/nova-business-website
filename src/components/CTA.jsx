function CTA() {
  return (
    <section className="cta">
      <h2 className="cta-title">Ready to Grow Your Business?</h2>

      <p className="cta-text">
        Let's build something amazing together.
      </p>

      <button
  className="cta-button"
  onClick={() => document.getElementById("contact").scrollIntoView()}>
  Get Started
</button>
    </section>
  );
}

export default CTA;
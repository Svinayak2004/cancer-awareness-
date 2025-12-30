function Mission() {
  return (
    <section className="mission">
      <span className="section-tag">ABOUT OUR MISSION</span>
      <h2>Fighting Cancer Together</h2>
      <p className="mission-text">
        Cancer affects millions of lives worldwide. Our mission is to provide
        resources, support, and hope to those affected while raising awareness
        in our communities.
      </p>

      <div className="mission-cards">
        {[
          {
            title: "Compassionate Care",
            text: "Providing emotional support and understanding to patients and families.",
            icon: "💙",
          },
          {
            title: "Community Support",
            text: "Building a strong network of survivors, caregivers, and advocates.",
            icon: "👥",
          },
          {
            title: "Awareness & Education",
            text: "Spreading knowledge about prevention, early detection, and treatment.",
            icon: "💡",
          },
          {
            title: "Research & Hope",
            text: "Supporting ongoing research to find better treatments and a cure.",
            icon: "🛡️",
          },
        ].map((item, index) => (
          <div className="mission-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="stats">
        <div>
          <h3>19.3M</h3>
          <p>New Cases Yearly</p>
        </div>
        <div>
          <h3>10M</h3>
          <p>Lives Lost Yearly</p>
        </div>
        <div>
          <h3>50%</h3>
          <p>Preventable Cases</p>
        </div>
        <div>
          <h3>70%</h3>
          <p>Survival Rate (Early Detection)</p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
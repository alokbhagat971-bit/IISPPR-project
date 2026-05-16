import "../styles/Different.css";

function Different() {
  const differentCard = [
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-3-e1751462943276.png",
      title: "Critical, Not Just Technical",
      description: "We go beyond definitions - unpacking power, participation, and systemic failures.",
      className: "critical"
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-4-e1751463000948.png",
      title: "Global and Local Lens",
      description: "From AI governance to grassroots movements — understand how global trends impact your everyday life.",
      className: "global"
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-5-e1751463098214.png",
      title: "Practical Skills You Can Use",
      description: "Master tools like data interpretation, ethnography, and policy brief writing to influence real change.",
      className: "practical"
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-6-e1751463150681.png",
      title: "Learn to Communicate With Impact",
      description: "From crafting persuasive briefs to writing academic research — develop skills that resonate with both policymakers and the public.",
      className: "communicate"
    }
  ];

  return (
    <div className="different-section-wrapper">
      <div className="different-container">
        <h1>What Makes This Course Different?</h1>
        <div className="different-cards">
          {differentCard.map((card, index) => {
            return (
              <div className={`different-card ${card.className}`} key={index}>
                <img src={card.pic} alt={card.title} className="different-card-image" />
                <h2 className="different-card-title">{card.title}</h2>
                <p className="different-card-description">{card.description}</p>
              </div>
            );
          })}
        </div>
        <h2 className="different-section-subtitle">
          In a world flooded with technical policy jargon and one-size-fits-all theories, most public policy courses stay trapped in outdated models, ignoring the real forces of power, exclusion, and lived experiences.
        </h2>
      </div>
    </div>
  );
}

export default Different;
function Different() {
  const differentCard = [
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-3-e1751462943276.png",
      title: "Critical, Not Just Technical",
      description: "We go beyond definitions — unpacking power, participation, and systemic failures."
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-4-e1751463000948.png",
      title: "Global and Local Lens",
      description: "From AI governance to grassroots movements — understand how global trends impact your everyday life."
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-5-e1751463098214.png",
      title: "Practical Skills You Can Use",
      description: "Master tools like data interpretation, ethnography, and policy brief writing to influence real change."
    },
    {
      pic: "https://iisppracademy.com/wp-content/uploads/2025/07/Get-Celebrity-Like-Transformation-3-6-e1751463150681.png",
      title: "Learn to Communicate With Impact",
      description: "From crafting persuasive briefs to writing academic research — develop skills that resonate with both policymakers and the public."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#030a16] text-center mb-12 tracking-tight">
        What Makes This Course Different?
      </h1>
      
      {/* Grid Layout System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
        {differentCard.map((card, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          >
            <img 
              src={card.pic} 
              alt={card.title} 
              className="w-14 h-14 object-contain mb-5 rounded-xl bg-amber-50 p-2" 
            />
            <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed mt-auto">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Footer Conclusion Statement Block */}
      <div className="max-w-3xl mx-auto bg-amber-50/50 border border-amber-100/50 p-6 md:p-8 rounded-2xl text-center">
        <h2 className="text-sm sm:text-base text-amber-900 font-normal leading-relaxed">
          In a world flooded with technical policy jargon and one-size-fits-all theories, most public policy courses stay trapped in outdated models, ignoring the real forces of power, exclusion, and lived experiences.
        </h2>
      </div>
    </div>
  );
}

export default Different;
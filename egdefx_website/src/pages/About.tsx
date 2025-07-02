import React from "react";

const About: React.FC = () => (
  <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand mb-10 text-center animate-fade-in">
      About egde-fx
    </h1>

    {/* Main About Section */}
    <section className="bg-card rounded-xl shadow-lg p-5 sm:p-8 md:p-10 mb-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in">
      <p className="text-base sm:text-lg leading-relaxed mb-6 text-black">
        At{" "}
        <span className="font-bold text-brand bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">
          egde-fx LLC
        </span>
        , we are dedicated to helping individuals and businesses achieve their
        financial goals through cutting-edge algorithmic trading services.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mb-6 text-black">
        Our team of financial consultants has extensive knowledge in Forex,
        Comex, and investment strategies. We tailor every plan to suit your
        specific goals, backed by automation and secure infrastructure.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mb-6 text-black">
        Transparency and unbiased advice are our cornerstones. We are committed
        to offering clear, honest consulting — both educational and actionable.
      </p>
      <p className="text-base sm:text-lg leading-relaxed text-black">
        Let's build a strong, trust-based relationship and help you take
        control of your financial future. Contact us to get started.
      </p>
    </section>

    {/* Mission Section */}
    <section className="bg-card rounded-xl shadow-lg p-5 sm:p-8 md:p-10 mb-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand mb-4 flex items-center">
        <span className="mr-3 text-2xl sm:text-3xl">🎯</span> Mission
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-black">
        Our mission at{" "}
        <span className="font-bold text-brand bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">
          egde-fx LLC
        </span>{" "}
        is to provide personalized, tech-driven financial guidance to help
        clients grow and secure their future.
      </p>
    </section>

    {/* Vision Section */}
    <section className="bg-card rounded-xl shadow-lg p-5 sm:p-8 md:p-10 mb-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand mb-4 flex items-center">
        <span className="mr-3 text-2xl sm:text-3xl">🔮</span> Vision
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-black">
        We envision a future where our clients feel empowered and confident in
        their financial choices. We’re committed to innovation, education, and
        trustworthy guidance.
      </p>
    </section>

    {/* Why Choose Us Section */}
    <section className="bg-card rounded-xl shadow-lg p-5 sm:p-8 md:p-10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand mb-6 flex items-center">
        <span className="mr-3 text-2xl sm:text-3xl">⭐</span> Why Choose egde-fx
      </h2>

      <p className="text-base sm:text-lg leading-relaxed mb-6 text-black">
        Here's why our clients trust us:
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: "🧠",
            title: "Expertise",
            description:
              "Our team is highly experienced, staying updated with the latest market trends and regulatory changes.",
          },
          {
            icon: "🎯",
            title: "Personalized Approach",
            description:
              "We tailor each financial plan based on the client’s specific needs and goals.",
          },
          {
            icon: "🌐",
            title: "Comprehensive Services",
            description:
              "From Forex to US Stocks, we offer a wide range of solutions under one roof.",
          },
          {
            icon: "🔍",
            title: "Transparent and Honest",
            description:
              "We don’t push products. We offer unbiased, transparent advice you can trust.",
          },
          {
            icon: "📊",
            title: "Performance Tracking",
            description:
              "Track your growth and progress with detailed and regular performance updates.",
          },
          {
            icon: "⏰",
            title: "Available Business Days",
            description:
              "Reach us Monday to Saturday, 9:00 AM to 6:30 PM — always ready to support you.",
          },
          {
            icon: "💰",
            title: "Cost-effective",
            description:
              "Affordable consulting with competitive pricing tailored to your budget.",
          },
          {
            icon: "💻",
            title: "Online and Offline Support",
            description:
              "Access us wherever you are, online or in-person — your convenience matters.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group p-4 sm:p-5 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/40 transform hover:scale-105 animate-fade-in"
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl sm:text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-brand mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-black">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-base sm:text-lg leading-relaxed mt-6 p-4 bg-gradient-to-r from-brand/10 to-blue-400/10 rounded-lg border border-brand/20 text-black">
        With egde-fx, you get more than a consultant — you get a dedicated
        partner in your financial journey.
      </p>
    </section>

    {/* Animations */}
    <style>{`
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  </div>
);

export default About;

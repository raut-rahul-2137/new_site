import React from "react";
import { Button } from "@/components/ui/button";

const Services: React.FC = () => (
  <div className="max-w-6xl mx-auto py-10 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center animate-fade-in">
      Our All Services
    </h1>
    
    <div className="space-y-8">
      {/* Detour Service */}
      <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-brand rounded-full opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand mb-6 flex items-center relative z-10">
            <span className="mr-3 text-3xl">🚀</span>
            Detour
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed relative z-10">
            <p>
              Welcome to Detour, your ultimate trading destination for Forex, Comex, and US market trading. With Detour, you gain access to high-tech algorithm-generated advice seamlessly traded in your preferred segment, equipping you with the essential tools to thrive in the fast-paced world of trading. Our advanced algorithm boasts an impressive track record of success, achieving an accuracy rate of 85-90% with a 1:2 risk and reward ratio, delivering 2 to 3 daily signals to keep you ahead of market trends and facilitate informed trading decisions.
            </p>
            <p>
              Choose from our flexible subscription plans tailored to your needs: a monthly plan for 700 USD, a quarterly plan for 1700 USD, or a half-yearly plan for 3000 USD. No matter your choice, you can rely on receiving high-quality trades and exceptional customer support. At Detour, we understand the challenges of trading in today's fast-paced markets, which is why we're dedicated to providing you with the guidance and support you need to succeed, whether you're a novice or an experienced trader.
            </p>
            <p>
              Our team of experts is always available to answer your questions and provide you with the latest insights and analysis, empowering you to make the most of your trading strategies. With Detour, trade with confidence, knowing you have the tools and support to succeed. Join us today and take the first step towards financial success. Navigate the complexities of Forex, Comex, and US market trading with ease and confidence, achieving your financial goals and realizing your dreams with Detour.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a 
            href="https://wa.me/447476934696" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 transform transition-all duration-300 hover:scale-105">
              Chat with Agent
            </Button>
          </a>
        </div>
      </div>

      {/* Destination Service */}
      <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-brand rounded-full opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand mb-6 flex items-center relative z-10">
            <span className="mr-3 text-3xl">🎯</span>
            Destination
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed relative z-10">
            <p>
              Welcome to Destination, the premium service tailored for High Net Worth Individuals (HNIs) who prioritize accuracy and substantial trades in Forex, Comex, and US market trading. With Destination, indulge in expert algorithmic automated trades and advice across all three markets, providing you with the essential tools for success in the dynamic world of trading.
            </p>
            <p>
              Our cutting-edge algorithm boasts an exceptional track record, achieving an accuracy rate of 85-90%. In every segment, we deliver substantial targets: 150 to 300 PIPS in Forex and 500 to 1000 PIPS in Comex, all with an impressive 1:3 risk and reward ratio. With 2 to 4 trades daily for each segment, you'll effortlessly stay ahead of market trends and make informed decisions.
            </p>
            <p>
              Choose from our flexible subscription plans tailored to your preferences: a quarterly plan for 3500 USD or a half-yearly plan for 6500 USD. Regardless of your choice, expect to receive top-quality signals and outstanding customer support.
            </p>
            <p>
              At egde-fx, we recognize the challenges of trading in today's fast-paced markets. That's why we're dedicated to providing you with the guidance and support you need, whether you're a novice or a seasoned trader. Our expert team is always available to address your queries and offer the latest insights and analysis, enabling you to maximize your trading strategies. With Destination, trade with confidence, knowing you have the tools and support to thrive.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a 
            href="https://wa.me/447476934696" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 transform transition-all duration-300 hover:scale-105">
              Chat with Agent
            </Button>
          </a>
        </div>
      </div>

      {/* Waypoint Service */}
      <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-brand rounded-full opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand mb-6 flex items-center relative z-10">
            <span className="mr-3 text-3xl">🔮</span>
            Waypoint – A Strategic Stop on the Path to Financial Growth
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed relative z-10">
            <p>
              Waypoint is a premier trading service tailored for High Net Worth Individuals (HNI) seeking high-accuracy trading across global markets. It combines fully automated algorithmic trading software with a high-precision signal service, ensuring consistent financial growth and strategic market insights. Covering markets in the US, Singapore, Malaysia, Forex, and Comex, Waypoint is designed to provide seamless, low-risk growth for discerning investors.
            </p>
            
            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">1. Algorithmic Trading Software</h3>
              <p className="mb-3">
                Waypoint offers sophisticated, fully automated trading software powered by advanced algorithms. It analyzes real-time market trends to ensure optimal trade execution across the following markets:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>US Markets:</strong> Trade major US indices, stocks, and ETFs with precision.</li>
                <li><strong>Singapore Markets:</strong> Algorithmic trading for SGX-listed securities in a fast-growing market.</li>
                <li><strong>Malaysia Markets:</strong> Automated trading in equities and derivatives on Bursa Malaysia.</li>
                <li><strong>Forex & Comex Markets:</strong> Precision trading in major currency pairs and commodities like gold, silver, and crude oil.</li>
              </ul>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">2. 70+ Registered CMT Experts</h3>
              <p className="mb-3">
                Waypoint features a dedicated team of over 70 Certified Market Technicians (CMTs) who monitor global markets around the clock. These experts help capture every market movement, from minor shifts to major waves, ensuring that clients maximize profits while minimizing risks.
              </p>
              <div>
                <h4 className="font-semibold text-brand mb-2">Benefits of CMT Monitoring:</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>24/7 Market Coverage:</strong> Constant supervision to seize profitable moments across global time zones.</li>
                  <li><strong>Tailored Guidance:</strong> CMTs provide expert market insights and personalized trading strategies to match your investment goals.</li>
                </ul>
              </div>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">3. High-Accuracy Signal Service</h3>
              <p>
                Waypoint includes high-accuracy, real-time signal alerts for the US, Singapore, Malaysia, Forex, and Comex markets. These signals are backed by technical and fundamental analysis, ensuring optimal trade decisions with a proven 80-90% accuracy rate.
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">4. 24/7 Automated Execution</h3>
              <p>
                Waypoint enables automated trading 24/7, especially in Forex and Comex markets, ensuring trades are executed without manual intervention even across time zones.
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">5. Dedicated Client Support</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>7 Days a Week Support:</strong> A dedicated support team and your assigned CMT provide round-the-clock assistance to ensure optimal performance of your trading software.</li>
                <li><strong>Personalized Service:</strong> Each client receives a CMT expert to monitor their account, ensuring timely adjustments to trading strategies based on market conditions.</li>
              </ul>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">6. Risk Management Tools</h3>
              <p>
                Waypoint integrates risk management features such as stop-loss orders, trailing stops, and dynamic position sizing to safeguard your capital while maximizing potential returns.
              </p>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">7. Customizable Trading Solutions</h3>
              <p>
                Clients can customize their algorithmic trading parameters to align with their risk tolerance and market focus, ensuring personalized strategies for their investment style.
              </p>
            </div>

            <div className="bg-brand/10 p-6 rounded-lg border border-brand/20">
              <h3 className="text-xl font-semibold text-brand mb-4">Exclusive for HNI Clients</h3>
              <ul className="space-y-2">
                <li><strong>Minimum Investment:</strong> This service is specially designed for HNI clients with a minimum investment of $6,000.</li>
                <li><strong>One-Time Registration Fee:</strong> To join Waypoint, clients pay a one-time fee of $4,000, which covers the cost of assigning a dedicated CMT who will monitor and manage their account and software.</li>
                <li><strong>Profit-Sharing Model:</strong> After the registration, Waypoint operates on a profit-sharing basis, allowing you to grow your investment with minimal risk. This model ensures that both your CMT and software work relentlessly to maximize your returns while protecting your capital.</li>
              </ul>
            </div>

            <div className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/30">
              <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">Why Choose Waypoint?</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Expert Monitoring:</strong> 70+ CMTs monitoring markets across the globe to capture every opportunity.</li>
                <li><strong>High Returns with Minimal Risk:</strong> Designed for HNI clients to achieve substantial growth without exposing their capital to undue risk.</li>
                <li><strong>Advanced Technology & Expertise:</strong> Benefit from automated trading and expert guidance in one comprehensive package.</li>
                <li><strong>Strategic Global Access:</strong> Tap into the world's leading markets with precision and expert-backed insights.</li>
              </ul>
            </div>
            
            <p>
              Waypoint is your key to navigating global financial markets with confidence, providing the tools, expertise, and support to grow your wealth with minimal risk. Join Waypoint today for unmatched access to elite trading opportunities.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a 
            href="https://wa.me/447476934696" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-brand hover:bg-brand-light text-white font-bold px-8 py-3 transform transition-all duration-300 hover:scale-105">
              Chat with Agent
            </Button>
          </a>
        </div>
      </div>
    </div>

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
        animation: fade-in 0.6s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  </div>
);

export default Services;

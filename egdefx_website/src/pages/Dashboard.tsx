import React, { useEffect } from "react";
import Navbar from "@/components/nav";
import TradingCategoryCard from "@/components/TradingCategoryCard";
import { toast } from "@/hooks/use-toast";
import { RefreshCcw, User, LogOut } from "lucide-react";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useNavigate } from "react-router-dom";
import { api } from "@/utils/api";

const initialInstruments = {
  FOREX: [
    { symbol: "EUR/USD", value: "0.1", enabled: true },
    { symbol: "USD/JPY", value: "0.01", enabled: true },
    { symbol: "GBP/USD", value: "0.01", enabled: true },
    { symbol: "USD/CHF", value: "0.01", enabled: true },
    { symbol: "AUD/USD", value: "0.01", enabled: false },
    { symbol: "USD/CAD", value: "0.01", enabled: true },
    { symbol: "NZD/USD", value: "0.01", enabled: true },
  ],
  COMEX: [
    { symbol: "XAU/USD", value: "0.1", enabled: true },
    { symbol: "XAG/USD", value: "0.01", enabled: true },
    { symbol: "WTI", value: "1.0", enabled: true },
    { symbol: "BRENT", value: "0.01", enabled: true },
    { symbol: "NG", value: "0.01", enabled: false },
    { symbol: "HG", value: "0.01", enabled: true },
    { symbol: "PL", value: "0.01", enabled: true },
    { symbol: "PA", value: "0.01", enabled: false },
  ],
  STOCKS: [
    { symbol: "AAPL", value: "0.01", enabled: true },
    { symbol: "MSFT", value: "0.01", enabled: true },
    { symbol: "AMZN", value: "0.01", enabled: true },
    { symbol: "TSLA", value: "0.01", enabled: true },
    { symbol: "GOOGL", value: "0.01", enabled: true },
    { symbol: "META", value: "0.01", enabled: true },
    { symbol: "BRK.B", value: "0.01", enabled: true },
    { symbol: "JPM", value: "0.01", enabled: true },
    { symbol: "V", value: "0.01", enabled: true },
    { symbol: "JNJ", value: "0.01", enabled: true },
    { symbol: "NVDA", value: "0.01", enabled: true },
    { symbol: "PG", value: "0.01", enabled: true },
  ],
  CRYPTO: [
    { symbol: "BTC/USD", value: "0.2", enabled: true },
    { symbol: "ETH/USD", value: "0.01", enabled: true },
    { symbol: "BNB/USD", value: "0.01", enabled: true },
    { symbol: "XRP/USD", value: "0.01", enabled: false },
    { symbol: "SOL/USD", value: "0.01", enabled: true },
    { symbol: "ADA/USD", value: "0.01", enabled: true },
    { symbol: "DOGE/USD", value: "0.01", enabled: false },
    { symbol: "AVAX/USD", value: "0.01", enabled: true },
    { symbol: "MATIC/USD", value: "0.01", enabled: true },
    { symbol: "DOT/USD", value: "0.01", enabled: false },
  ],
};

const categoryOrder: ("FOREX" | "COMEX" | "STOCKS" | "CRYPTO")[] = [
  "FOREX",
  "COMEX",
  "STOCKS",
  "CRYPTO",
];

const Dashboard: React.FC = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState(initialInstruments);
  const [loading, setLoading] = React.useState(true);
  const [userData, setUserData] = React.useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserData(user);
    fetchConfigurations();
  }, []);

  const fetchConfigurations = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const data = await api.get(`/trading-config/?user_id=${user.id}`);
      setCategories(Object.keys(data).length > 0 ? data : initialInstruments);
    } catch (error) {
      console.error("Error fetching configurations:", error);
      setCategories(initialInstruments);
    } finally {
      setLoading(false);
    }
  };

  const handleInstrumentChange = (
    category: keyof typeof initialInstruments,
    idx: number,
    updates: any
  ) => {
    setCategories((prev) => ({
      ...prev,
      [category]: prev[category].map((row, i) =>
        i === idx ? { ...row, ...updates } : row
      ),
    }));
  };

  const handleUpdate = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      await api.post("/trading-config/", {
        user_id: user.id,
        ...categories,
      });

      toast({
        title: "Configuration Updated!",
        description: "Your trading instruments were updated.",
        duration: 3000,
      });

      fetchConfigurations();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update configuration. Please try again.",
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      duration: 3000,
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#181818] flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#181818] text-white">
      <div className="sticky top-0 z-50 w-full shadow-md bg-[#1f1f1f]">
        <Navbar />
      </div>

      <main className="px-4 sm:px-6 md:px-8 py-6 flex flex-col items-center">
        {/* User Info */}
        <div className="w-full max-w-6xl bg-[#232323] rounded-xl p-5 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-brand/20 p-2 rounded-full">
                <User className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">{userData?.name}</h2>
                <p className="text-gray-400 text-sm">Username: {userData?.username}</p>
                <p className="text-gray-400 text-sm">Email: {userData?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center gap-2 text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* Trading Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryOrder.map((cat) => (
            <TradingCategoryCard
              key={cat}
              title={cat}
              instruments={categories[cat]}
              onInstrumentChange={(idx, updates) =>
                handleInstrumentChange(cat, idx, updates)
              }
            />
          ))}
        </div>

        {/* Update Button */}
        <div className="w-full max-w-6xl mt-10 mb-12 flex justify-center">
          <button
            onClick={handleUpdate}
            className="bg-gradient-to-r from-brand to-brand-light text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <RefreshCcw size={20} />
            Update Configuration
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

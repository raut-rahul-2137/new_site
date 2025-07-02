import React, { useEffect, useState } from "react";
import { api } from "@/utils/api";
import BottomNav from "@/components/BottomNav";

interface TradeRow {
  id?: number;
  entry_time: string;
  symbol: string;
  type: string;
  quantity: number;
  entry_price: number;
  exit_time: string;
  exit_price: number;
  pl: number;
  cpl: number;
}

const PNL: React.FC = () => {
  const [trades, setTrades] = useState<TradeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.username) {
      setError("No user logged in.");
      setLoading(false);
      return;
    }
    api
      .get(`/trade-history/${user.username}/`)
      .then((data) => {
        setTrades(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch trade history.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: 40 }}>
        Loading...
      </div>
    );
  if (error)
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        {error}
      </div>
    );

  return (
    <div
      style={{
        background: "#121212",
        color: "white",
        minHeight: "100vh",
        padding: "20px 10px",
      }}
    >
      <h1
        style={{
          color: "#3399ff",
          marginBottom: 20,
          textAlign: "center",
          fontSize: 24,
        }}
      >
        Your Trade History
      </h1>

      {/* Responsive wrapper for table */}
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table
          style={{
            minWidth: 900,
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#1e1e1e",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>ENTRY TIME</th>
              <th style={thStyle}>SYMBOL</th>
              <th style={thStyle}>TYPE</th>
              <th style={thStyle}>QUANTITY</th>
              <th style={thStyle}>ENTRY PRICE</th>
              <th style={thStyle}>EXIT TIME</th>
              <th style={thStyle}>EXIT PRICE</th>
              <th style={thStyle}>P & L</th>
              <th style={thStyle}>Cumulative P & L</th>
            </tr>
          </thead>
          <tbody>
            {trades.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  style={{
                    color: "yellow",
                    textAlign: "center",
                    padding: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  No trades found.
                </td>
              </tr>
            ) : (
              trades.map((trade, idx) => (
                <tr
                  key={trade.id}
                  style={idx % 2 === 1 ? { backgroundColor: "#141414" } : {}}
                >
                  <td style={tdStyle}>{trade.id}</td>
                  <td style={tdStyle}>
                    {new Date(trade.entry_time).toLocaleString()}
                  </td>
                  <td style={tdStyle}>{trade.symbol}</td>
                  <td style={tdStyle}>{trade.type}</td>
                  <td style={tdStyle}>{trade.quantity}</td>
                  <td style={tdStyle}>{trade.entry_price}</td>
                  <td style={tdStyle}>
                    {new Date(trade.exit_time).toLocaleString()}
                  </td>
                  <td style={tdStyle}>{trade.exit_price}</td>
                  <td
                    style={{
                      ...tdStyle,
                      color: Number(trade.pl) >= 0 ? "#00ff00" : "#ff4040",
                    }}
                  >
                    {Number(trade.pl).toFixed(2)} $
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      color: Number(trade.cpl) >= 0 ? "#00ff00" : "#ff4040",
                    }}
                  >
                    {Number(trade.cpl).toFixed(2)} $
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Cumulative P&L */}
      <div
        style={{
          textAlign: "right",
          marginTop: 15,
          fontSize: 18,
          fontWeight: "bold",
          color: "yellow",
          overflow: "auto",
        }}
      >
        Total cumulative P&amp;L:{" "}
        <span style={{ color: "#00ff00" }}>
          {trades.length > 0
            ? (Number(trades[trades.length - 1].cpl) >= 0 ? "+" : "") +
              Number(trades[trades.length - 1].cpl).toFixed(2) +
              "$"
            : "+0.00$"}
        </span>
      </div>

      {/* Bottom navigation on phones */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav />
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  backgroundColor: "#222",
  color: "yellow",
  padding: "12px 16px",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "center",
  whiteSpace: "nowrap",
};

export default PNL;

import React, { useEffect, useState } from "react";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { api } from "@/utils/api";

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
  forgingkey?: string;
  user?: {
    id: number;
    username: string;
    email?: string;
  };
}

interface User {
  id: number;
  username: string;
}

const TradeHistoryAdmin: React.FC = () => {
  useAuthGuard();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [trades, setTrades] = useState<TradeRow[]>([]);
  const [form, setForm] = useState<TradeRow>({
    entry_time: "",
    symbol: "",
    type: "",
    quantity: 0,
    entry_price: 0,
    exit_time: "",
    exit_price: 0,
    pl: 0,
    cpl: 0,
  });
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showTrades, setShowTrades] = useState(false);

  useEffect(() => {
    api.get("/users/").then(setUsers);
  }, []);

  const fetchTrades = () => {
    if (selectedUser) {
      api.get(`/trade-history/${selectedUser.username}/`).then(data => {
        setTrades(data);
        setShowTrades(true);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    const payload = {
      ...form,
      quantity: parseFloat(form.quantity as any),
      entry_price: parseFloat(form.entry_price as any),
      exit_price: parseFloat(form.exit_price as any),
      pl: parseFloat(form.pl as any),
      cpl: parseFloat(form.cpl as any),
    };
    await api.post(`/trade-history/${selectedUser.username}/`, payload);
    api.get(`/trade-history/${selectedUser.username}/`).then(setTrades);
    setForm({
      entry_time: "",
      symbol: "",
      type: "",
      quantity: 0,
      entry_price: 0,
      exit_time: "",
      exit_price: 0,
      pl: 0,
      cpl: 0,
    });
    setSuccessMsg("Trade history data saved successfully!");
    setTimeout(() => setSuccessMsg(null), 2500);
  };

  return (
    <div style={{ background: "#121212", color: "white", minHeight: "100vh", padding: 30 }}>
      <h1 style={{ color: "#3399ff", marginBottom: 20 }}>User Trade History (Admin Only)</h1>
      <div style={{ marginBottom: 20 }}>
        <select
          value={selectedUser?.username ?? ""}
          onChange={e => {
            const user = users.find(u => u.username === e.target.value) || null;
            setSelectedUser(user);
            setShowTrades(false);
          }}
          style={{ padding: 10, borderRadius: 5, minWidth: 200, background: '#000', color: '#fff' }}
        >
          <option value="">Select User</option>
          {users.map(u => (
            <option key={u.id} value={u.username}>{u.username}</option>
          ))}
        </select>
        {selectedUser && (
          <button
            onClick={fetchTrades}
            style={{ marginLeft: 16, padding: '10px 18px', borderRadius: 5, background: '#3399ff', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Show Trade History
          </button>
        )}
      </div>
      {selectedUser && showTrades && (
        <>
          <form onSubmit={handleSubmit} style={{
            background: "#1e1e1e", padding: 15, borderRadius: 8, display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20, justifyContent: "center"
          }}>
            <input type="datetime-local" name="entry_time" value={form.entry_time} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="symbol" placeholder="Symbol" value={form.symbol} onChange={handleChange} required style={inputStyle} />
            <select name="type" value={form.type} onChange={handleChange} required style={inputStyle}>
              <option value="">Type</option>
              <option>BUY</option>
              <option>SELL</option>
              <option>MARKET_BUY</option>
              <option>MARKET_SELL</option>
            </select>
            <input type="number" step="0.01" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required style={inputStyle} />
            <input type="number" step="0.01" name="entry_price" placeholder="Entry Price" value={form.entry_price} onChange={handleChange} required style={inputStyle} />
            <input type="datetime-local" name="exit_time" value={form.exit_time} onChange={handleChange} required style={inputStyle} />
            <input type="number" step="0.01" name="exit_price" placeholder="Exit Price" value={form.exit_price} onChange={handleChange} required style={inputStyle} />
            <input type="number" step="0.01" name="pl" placeholder="P & L" value={form.pl} onChange={handleChange} required style={inputStyle} />
            <input type="number" step="0.01" name="cpl" placeholder="Cumulative P & L" value={form.cpl} onChange={handleChange} required style={inputStyle} />
            <button type="submit" style={insertButtonStyle}>Insert</button>
          </form>
          {successMsg && (
            <div style={{ color: '#00ff00', textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>{successMsg}</div>
          )}
          <div style={{ width: "100%", maxWidth: 1100 }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#1e1e1e",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>User</th>
                  <th style={thStyle}>Email</th>
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
                {trades.map((trade, idx) => (
                  <tr key={trade.id} style={idx % 2 === 1 ? { backgroundColor: "#141414" } : {}}>
                    <td style={tdStyle}>{trade.id}</td>
                    <td style={tdStyle}>{trade.forgingkey || ''}</td>
                    <td style={tdStyle}></td>
                    <td style={tdStyle}>{new Date(trade.entry_time).toLocaleString()}</td>
                    <td style={tdStyle}>{trade.symbol}</td>
                    <td style={tdStyle}>{trade.type}</td>
                    <td style={tdStyle}>{trade.quantity}</td>
                    <td style={tdStyle}>{trade.entry_price}</td>
                    <td style={tdStyle}>{new Date(trade.exit_time).toLocaleString()}</td>
                    <td style={tdStyle}>{trade.exit_price}</td>
                    <td style={{ ...tdStyle, color: Number(trade.pl) >= 0 ? "#00ff00" : "#ff4040" }}>
                      {Number(trade.pl).toFixed(2)} $
                    </td>
                    <td style={{ ...tdStyle, color: Number(trade.cpl) >= 0 ? "#00ff00" : "#ff4040" }}>
                      {Number(trade.cpl).toFixed(2)} $
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: "right", marginTop: 15, fontSize: 18, fontWeight: "bold", color: "yellow" }}>
              Total cumulative P&amp;L: <span style={{ color: "#00ff00" }}>
                {trades.length > 0 ? (Number(trades[trades.length - 1].cpl) >= 0 ? "+" : "") + Number(trades[trades.length - 1].cpl).toFixed(2) + "$" : "+0.00$"}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  padding: 10,
  borderRadius: 5,
  border: "none",
  backgroundColor: "#333",
  color: "white",
  borderColor: "#444",
  borderWidth: 1,
  borderStyle: "solid",
  minWidth: 120,
};

const insertButtonStyle: React.CSSProperties = {
  padding: 10,
  borderRadius: 5,
  border: "none",
  backgroundColor: "#00b300",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  borderColor: "#444",
  borderWidth: 1,
  borderStyle: "solid",
};

const thStyle: React.CSSProperties = {
  backgroundColor: "#222",
  color: "yellow",
  padding: "12px 16px",
  textAlign: "center",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "center",
};

export default TradeHistoryAdmin; 
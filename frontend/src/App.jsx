import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [gateways, setGateways] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchGateways();
    fetchStats();
  }, []);

  const fetchGateways = async () => {
    const res = await axios.get('http://localhost:5000/api/gateways');
    setGateways(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get('http://localhost:5000/api/gateways/stats');
    setStats(res.data);
  };

  return (
    <div className="app">
      <h1>Maturix Monitor</h1>

      {/* Statistik kort */}
      <div className="stats">
        <div className="stat-card active">
          <p>Active</p>
          <h2>{stats.active}</h2>
        </div>
        <div className="stat-card inactive">
          <p>Inactive</p>
          <h2>{stats.inactive}</h2>
        </div>
        <div className="stat-card warning">
          <p>Warning</p>
          <h2>{stats.warning}</h2>
        </div>
        <div className="stat-card error">
          <p>Error</p>
          <h2>{stats.error}</h2>
        </div>
      </div>

      {/* Gateway tabel */}
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>GatewayID</th>
            <th>SimID</th>
            <th>BatchID</th>
            <th>Company</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {gateways.map((gateway) => (
            <tr key={gateway._id}>
              <td>
                <span className={`badge ${gateway.status}`}>
                  {gateway.status}
                </span>
              </td>
              <td>{gateway.gatewayId}</td>
              <td>{gateway.simId}</td>
              <td>{gateway.batchId}</td>
              <td>{gateway.company}</td>
              <td>{new Date(gateway.lastSeen).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
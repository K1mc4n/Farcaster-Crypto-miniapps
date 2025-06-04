const TopCoinsTable = ({ coins }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>24h Change</th>
      </tr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <tr key={coin.id}>
          <td>{coin.name}</td>
          <td>${coin.current_price.toLocaleString()}</td>
          <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TopCoinsTable;

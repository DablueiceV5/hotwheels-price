const hotwheels = [
  { name: "Hot Wheels Twin Mill", price: "Rp 150.000" },
  { name: "Hot Wheels Bone Shaker", price: "Rp 120.000" },
  { name: "Hot Wheels '69 Camaro", price: "Rp 180.000" },
  { name: "Hot Wheels Nissan Skyline GT-R", price: "Rp 200.000" },
  { name: "Hot Wheels Ford Mustang GT", price: "Rp 170.000" },
];

const container = document.getElementById('hotwheels-list');

hotwheels.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>Harga: ${item.price}</p>
  `;
  container.appendChild(card);
});

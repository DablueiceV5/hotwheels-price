const hotwheels = [
  { name: "Hot Wheels Twin Mill", price: "Rp 150.000" },
  { name: "Hot Wheels Bone Shaker", price: "Rp 120.000" },
  { name: "Hot Wheels '69 Camaro", price: "Rp 180.000" },
  { name: "Hot Wheels Nissan Skyline GT-R", price: "Rp 200.000" },
  { name: "Hot Wheels Ford Mustang GT", price: "Rp 170.000" },
  { name: "Hot Wheels Lamborghini Sesto Elemento", price: "Rp 250.000" },
  { name: "Hot Wheels McLaren P1", price: "Rp 210.000" },
  { name: "Hot Wheels Pagani Huayra", price: "Rp 230.000" },
  { name: "Hot Wheels Toyota Supra", price: "Rp 190.000" },
  { name: "Hot Wheels Porsche 911 GT3", price: "Rp 220.000" },
  { name: "Hot Wheels Ferrari 458 Italia", price: "Rp 240.000" },
  { name: "Hot Wheels Dodge Charger", price: "Rp 175.000" },
  { name: "Hot Wheels Corvette C7", price: "Rp 185.000" },
  { name: "Hot Wheels Tesla Cybertruck", price: "Rp 205.000" },
  { name: "Hot Wheels Mazda RX-7", price: "Rp 195.000" },
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

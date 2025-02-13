const hotwheels = [
  { name: "Twin Mill", price: "Rp 75.000" },
  { name: "Bone Shaker", price: "Rp 85.000" },
  { name: "Ford Mustang Boss 302", price: "Rp 95.000" },
  { name: "Nissan Skyline GT-R (R34)", price: "Rp 120.000" },
  { name: "Dodge Charger Daytona", price: "Rp 110.000" },
  { name: "Lamborghini Sesto Elemento", price: "Rp 150.000" },
  { name: "Tesla Roadster", price: "Rp 90.000" },
  { name: "Chevrolet Camaro ZL1", price: "Rp 80.000" }
];

const listContainer = document.getElementById('hotwheels-list');

hotwheels.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('item');
  div.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
  listContainer.appendChild(div);
});

console.log('Hot Wheels Catalog Loaded');

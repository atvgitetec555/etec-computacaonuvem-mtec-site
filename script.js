const cars = [
  {
    id: 'porsche-911', brand: 'Porsche', name: '911 Carrera S', year: '2025',
    version: 'Coupé • PDK • tração traseira', image: 'assets/cars/porsche-911.png',
    power: '480 cv', torque: '530 Nm', topSpeed: '308 km/h', zeroToHundred: '3,5 s',
    engine: 'Boxer 3.0 biturbo, 6 cilindros', transmission: 'PDK de 8 marchas',
    description: 'A evolução de um desenho clássico: motor traseiro, resposta precisa e desempenho de superesportivo em um cupê utilizável no dia a dia.',
    source: 'https://www.porsche.com/brazil/pt/models/911/carrera-models/911-carrera-s/'
  },
  {
    id: 'porsche-718', brand: 'Porsche', name: '718 Cayman GTS 4.0', year: '2025',
    version: 'Coupé • PDK • tração traseira', image: 'assets/cars/porsche-718.png',
    power: '400 cv', torque: '430 Nm', topSpeed: '288 km/h', zeroToHundred: '4,0 s',
    engine: 'Boxer 4.0 aspirado, 6 cilindros', transmission: 'PDK de 7 marchas',
    description: 'Motor central e seis cilindros aspirado formam um conjunto criado para equilíbrio, precisão e uma conexão direta com quem dirige.',
    source: 'https://www.porsche.com/brazil/pt/models/718/718-models/718-cayman-gts-4/'
  },
  {
    id: 'jetta-gli', brand: 'Volkswagen', name: 'Jetta GLI', year: '2026',
    version: 'Sedã • DSG • tração dianteira', image: 'assets/cars/jetta-gli.png',
    power: '231 cv', torque: '350 Nm', topSpeed: '249 km/h', zeroToHundred: '6,6 s',
    engine: '2.0 TSI turbo, 4 cilindros', transmission: 'DSG de 7 marchas',
    description: 'Um sedã esportivo que combina espaço, conforto e o conhecido motor EA888 com respostas rápidas e visual discreto.',
    source: 'https://www.vw.com.br/pt/carros/Jetta.html/gli'
  },
  {
    id: 'golf-r', brand: 'Volkswagen', name: 'Golf R', year: '2025',
    version: 'Hatch • DSG • 4MOTION', image: 'assets/cars/golf-r.png',
    power: '333 cv', torque: '420 Nm', topSpeed: '270 km/h*', zeroToHundred: '4,6 s',
    engine: '2.0 TSI turbo, 4 cilindros', transmission: 'DSG de 7 marchas',
    description: 'O Golf mais potente une carroceria compacta, tração integral com vetorização de torque e desempenho para diferentes condições. *Velocidade com pacote R-Performance.',
    source: 'https://www.volkswagen-newsroom.com/en/golf-r-18447'
  },
  {
    id: 'audi-rs3', brand: 'Audi', name: 'RS 3 Sedan', year: '2025',
    version: 'Sedã • S tronic • quattro', image: 'assets/cars/audi-rs3.png',
    power: '400 cv', torque: '500 Nm', topSpeed: '290 km/h*', zeroToHundred: '3,8 s',
    engine: '2.5 TFSI turbo, 5 cilindros', transmission: 'S tronic de 7 marchas',
    description: 'O motor de cinco cilindros dá ao RS 3 som e personalidade próprios, enquanto a tração quattro prioriza saída e controle. *Máxima com pacote opcional.',
    source: 'https://www.audi.com.br/pt/models/a3/rs-3-sedan/'
  },
  {
    id: 'bmw-m2', brand: 'BMW', name: 'M2', year: '2026',
    version: 'Coupé • Steptronic • tração traseira', image: 'assets/cars/bmw-m2.png',
    power: '480 cv', torque: '600 Nm', topSpeed: '250 km/h', zeroToHundred: '4,0 s',
    engine: '3.0 biturbo, 6 cilindros em linha', transmission: 'Steptronic de 8 marchas',
    description: 'Compacto nas dimensões e forte no desempenho, o M2 mantém a fórmula clássica de seis cilindros e tração traseira.',
    source: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-2-series-m-models/m2-coupe-2024-g87.html'
  },
  {
    id: 'bmw-m3', brand: 'BMW', name: 'M3 Competition', year: '2025',
    version: 'Sedã • Steptronic • tração traseira', image: 'assets/cars/bmw-m3.png',
    power: '510 cv', torque: '650 Nm', topSpeed: '250 km/h', zeroToHundred: '3,9 s',
    engine: '3.0 biturbo, 6 cilindros em linha', transmission: 'Steptronic de 8 marchas',
    description: 'Referência entre sedãs esportivos, o M3 Competition combina quatro portas, chassi apurado e força de sobra.',
    source: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-3-series-m-models/bmw-m3-seda.html'
  },
  {
    id: 'bmw-m4', brand: 'BMW', name: 'M4 Competition', year: '2025',
    version: 'Coupé • Steptronic • tração traseira', image: 'assets/cars/bmw-m4.png',
    power: '510 cv', torque: '650 Nm', topSpeed: '250 km/h', zeroToHundred: '3,9 s',
    engine: '3.0 biturbo, 6 cilindros em linha', transmission: 'Steptronic de 8 marchas',
    description: 'A versão cupê da família M traz carroceria expressiva, seis cilindros biturbo e foco na experiência de condução.',
    source: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-4-series-m-models/bmw-m4-coupe.html'
  }
];

const grid = document.querySelector('#car-grid');
const searchInput = document.querySelector('#search-input');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const dialog = document.querySelector('#car-dialog');
let activeBrand = 'Todos';

function createCard(car) {
  const card = document.createElement('button');
  card.className = 'car-card';
  card.type = 'button';
  card.dataset.carId = car.id;
  card.setAttribute('aria-label', `Ver detalhes do ${car.brand} ${car.name}`);
  card.innerHTML = `
    <span class="card-head"><span><span class="card-brand">${car.brand}</span><span class="card-name">${car.name}</span></span><span class="card-year">${car.year}</span></span>
    <span class="car-image-wrap"><img class="car-image" src="${car.image}" alt="${car.brand} ${car.name} ${car.year}" loading="lazy"></span>
    <span class="quick-specs"><span>Potência<strong>${car.power}</strong></span><span>Torque<strong>${car.torque}</strong></span><span>0–100 km/h<strong>${car.zeroToHundred}</strong></span></span>`;
  card.addEventListener('click', () => openCar(car));
  return card;
}

function renderCars() {
  const query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
  const filteredCars = cars.filter((car) => {
    const matchesBrand = activeBrand === 'Todos' || car.brand === activeBrand;
    const searchableText = `${car.brand} ${car.name} ${car.year} ${car.engine}`.toLocaleLowerCase('pt-BR');
    return matchesBrand && searchableText.includes(query);
  });
  grid.replaceChildren(...filteredCars.map(createCard));
  resultCount.textContent = String(filteredCars.length);
  emptyState.hidden = filteredCars.length !== 0;
}

function openCar(car) {
  document.querySelector('#dialog-brand').textContent = car.brand;
  document.querySelector('#dialog-title').textContent = car.name;
  document.querySelector('#dialog-version').textContent = `${car.year} • ${car.version}`;
  document.querySelector('#dialog-description').textContent = car.description;
  const image = document.querySelector('#dialog-image');
  image.src = car.image;
  image.alt = `${car.brand} ${car.name} ${car.year}`;
  document.querySelector('#dialog-source').href = car.source;
  document.querySelector('#dialog-specs').innerHTML = `
    <div><dt>Potência</dt><dd>${car.power}</dd></div><div><dt>Torque</dt><dd>${car.torque}</dd></div>
    <div><dt>Velocidade máxima</dt><dd>${car.topSpeed}</dd></div><div><dt>0–100 km/h</dt><dd>${car.zeroToHundred}</dd></div>
    <div><dt>Motor</dt><dd>${car.engine}</dd></div><div><dt>Câmbio</dt><dd>${car.transmission}</dd></div>`;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    activeBrand = button.dataset.brand;
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderCars();
  });
});

searchInput.addEventListener('input', renderCars);
document.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

const form = document.querySelector('#contact-form');
const fields = { name: document.querySelector('#name'), email: document.querySelector('#email'), message: document.querySelector('#message') };

function showError(fieldName, message) {
  fields[fieldName].classList.toggle('invalid', Boolean(message));
  fields[fieldName].setAttribute('aria-invalid', String(Boolean(message)));
  document.querySelector(`#${fieldName}-error`).textContent = message;
}

function validateForm() {
  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (fields.name.value.trim().length < 2) { showError('name', 'Digite pelo menos 2 caracteres.'); isValid = false; } else showError('name', '');
  if (!emailPattern.test(fields.email.value.trim())) { showError('email', 'Digite um e-mail válido.'); isValid = false; } else showError('email', '');
  if (fields.message.value.trim().length < 3) { showError('message', 'Digite o nome de um modelo.'); isValid = false; } else showError('message', '');
  return isValid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!validateForm()) { status.textContent = 'Revise os campos destacados.'; status.className = 'form-status'; return; }
  status.textContent = 'Sugestão validada! Este formulário é uma demonstração do projeto.';
  status.className = 'form-status success';
  form.reset();
});

renderCars();

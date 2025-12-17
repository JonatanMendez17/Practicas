// Datos de las tarjetas
const servicios = [
  {
    titulo: "Servicio 1",
    descripcion: "Descripción breve del servicio ofrecido."
  }
];

// Función para crear una tarjeta
function crearTarjeta(servicio) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const h3 = document.createElement('h3');
  h3.textContent = servicio.titulo;
  
  const p = document.createElement('p');
  p.textContent = servicio.descripcion;
  
  card.appendChild(h3);
  card.appendChild(p);
  
  return card;
}

// Función para renderizar todas las tarjetas
function renderizarTarjetas() {
  const cardsContainer = document.querySelector('.cards');
  
  if (cardsContainer) {
    servicios.forEach(servicio => {
      const tarjeta = crearTarjeta(servicio);
      cardsContainer.appendChild(tarjeta);
    });
  }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderizarTarjetas);


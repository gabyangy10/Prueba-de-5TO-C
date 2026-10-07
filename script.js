// Base de datos de posiciones tácticas
const positionsData = {
    1: {
        badge: 'Posición 1 (Zaguero)',
        title: 'Saque / Defensa Derecha',
        desc: 'Ubicado en la esquina posterior derecha. Es la posición desde la cual se ejecuta el saque inicial para poner el balón en juego. En fase defensiva, resguarda los ataques diagonales largos y cubre la zona zaguera.',
        tasks: [
            'Ejecución estratégica del saque (flotante, potencia o suspensión)',
            'Recepción de envíos cruzados lejanos',
            'Apoyo y cobertura en el contraataque por zona zaguera'
        ]
    },
    2: {
        badge: 'Posición 2 (Delantero)',
        title: 'Ataque / Salida por Derecha',
        desc: 'Ubicada en la zona delantera derecha cerca de la red. Habitualmente ocupada por el Armador (en rotaciones específicas) o el Opuesto, encargados del bloqueo en banda derecha y remates traseros o directos.',
        tasks: [
            'Bloqueo directo contra el atacante receptor rival',
            'Ataques potentes por la banda derecha',
            'Segunda opción para la distribución de juego'
        ]
    },
    3: {
        badge: 'Posición 3 (Delantero)',
        title: 'Central (Ataque y Bloqueo)',
        desc: 'Posición clave en la red. El jugador central es el pilar del sistema de bloqueo del equipo y el encargado de ejecutar remates rápidos por el centro para desestabilizar la defensa contraria.',
        tasks: [
            'Lectura veloz para el bloqueo doble o triple',
            'Ataques rápidos en primer tiempo (cortas)',
            'Finta de remate para fijar a los bloqueadores rivales'
        ]
    },
    4: {
        badge: 'Posición 4 (Delantero)',
        title: 'Punta / Receptor Atacante',
        desc: 'Ubicada en el frente izquierdo. Es la principal vía de ataque del equipo, responsable de definir balones altos y difíciles, además de apoyar en la recepción del saque rival.',
        tasks: [
            'Principal vía de remate en balones alzados',
            'Sólida recepción del servicio del rival',
            'Bloqueo sobre el atacante derecho opuesto'
        ]
    },
    5: {
        badge: 'Posición 5 (Zaguero)',
        title: 'Defensa Izquierda',
        desc: 'Ubicada en la esquina posterior izquierda. Posición cubierta frecuentemente por el Líbero o especialistas defensivos para detener remates potentes cruzados.',
        tasks: [
            'Defensa de remates potentes en diagonal',
            'Recepción limpia para armados de contraataque',
            'Cobertura de caídas detrás del bloqueo'
        ]
    },
    6: {
        badge: 'Posición 6 (Zaguero)',
        title: 'Líbero / Central Posterior',
        desc: 'Ubicada en el centro del campo posterior. Dominada por el Líbero, requiere la máxima agilidad para cubrir balones cortos, fintas y defensas de fondo.',
        tasks: [
            'Coordinación general de la recepción defensiva',
            'Rescate de fintas y toque de red',
            'Armado de emergencia en antebrazo si el colocador falla'
        ]
    }
};

// Base de datos de modalidades
const modalData = {
    saque: {
        title: 'Técnica del Saque (Servicio)',
        content: `
            <p class="mb-3">El saque es el único fundamento que depende exclusivamente del jugador sin intervención de compañeros ni rivales.</p>
            <h4 class="font-bold text-orange-400 mb-1">Tipos Principales:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li><b>Saque Flotante:</b> Golpe seco que genera un movimiento errático e impredecible en el aire.</li>
                <li><b>Saque en Suspensión (Tenis):</b> Salto con máxima potencia para imprimir velocidad al balón.</li>
            </ul>
            <p><b>Clave técnica:</b> Mantenimiento del punto de contacto por delante del cuerpo y la firmeza de la muñeca.</p>
        `
    },
    recepcion: {
        title: 'Técnica de Recepción',
        content: `
            <p class="mb-3">Es el elemento neutralizador por excelencia. Su objetivo es dirigir el balón suavemente hacia la posición 2-3 para el armador.</p>
            <h4 class="font-bold text-blue-400 mb-1">Detalles Técnicos:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li>Brazos completamente extendidos formando una plataforma plana con los antebrazos.</li>
                <li>Piernas flexionadas para amortiguar el impacto con el cuerpo.</li>
            </ul>
            <p><b>Clave técnica:</b> No balancear excesivamente los brazos; utilizar el impulso de las piernas.</p>
        `
    },
    colocacion: {
        title: 'Técnica de Colocación (Voleo)',
        content: `
            <p class="mb-3">El cerebro del equipo. Transforma un balón defensivo en un pase de gol preciso para los rematadores.</p>
            <h4 class="font-bold text-amber-400 mb-1">Detalles Técnicos:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li>Formar un triángulo o rombo con los dedos pulgares e índices encima de la frente.</li>
                <li>Contacto suave con las yemas de los dedos, jamás con la palma.</li>
            </ul>
            <p><b>Clave técnica:</b> Extensión fluida y simétrica de codos y rodillas al unísono.</p>
        `
    },
    remate: {
        title: 'Técnica de Remate',
        content: `
            <p class="mb-3">La acción ofensiva culminante para sumar puntos directos.</p>
            <h4 class="font-bold text-red-400 mb-1">Fases del Remate:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li><b>Carrera de impulso:</b> 3 o 4 pasos ganando velocidad.</li>
                <li><b>Batida y Salto:</b> Conversión de la velocidad horizontal en altura vertical.</li>
                <li><b>Golpeo:</b> Flexión de muñeca en el punto más alto de elevación.</li>
            </ul>
        `
    },
    bloqueo: {
        title: 'Técnica del Bloqueo',
        content: `
            <p class="mb-3">Primera línea de defensa sobre la red para interceptar el ataque rival.</p>
            <h4 class="font-bold text-purple-400 mb-1">Detalles Técnicos:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li>Manos abiertas con dedos rígidos cruzando el plano de la red sin tocarla.</li>
                <li>Ojos abiertos durante todo el salto para leer la trayectoria del brazo atacante.</li>
            </ul>
        `
    },
    defensa: {
        title: 'Defensa de Campo',
        content: `
            <p class="mb-3">El esfuerzo físico por evitar que el balón toque el piso tras superar el bloqueo.</p>
            <h4 class="font-bold text-emerald-400 mb-1">Técnicas Especializadas:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-3">
                <li><b>Plancha (Pancake):</b> Deslizar la mano plana contra el suelo justo debajo del balón.</li>
                <li><b>Caídas laterales y rodamientos:</b> Para recuperar balones fuera del centro de gravedad.</li>
            </ul>
        `
    }
};

// Función para seleccionar posición en la cancha interactiva
function selectPosition(posNum) {
    const data = positionsData[posNum];
    if (!data) return;

    // Actualizar botones
    document.querySelectorAll('.pos-btn').forEach(btn => btn.classList.remove('active'));
    const selectedBtn = document.getElementById(`pos-${posNum}`);
    if (selectedBtn) selectedBtn.classList.add('active');

    // Actualizar panel de info
    document.getElementById('pos-badge').textContent = data.badge;
    document.getElementById('pos-title').textContent = data.title;
    document.getElementById('pos-desc').textContent = data.desc;

    const tasksList = document.getElementById('pos-tasks');
    tasksList.innerHTML = data.tasks.map(task => `
        <li class="flex items-center gap-2">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-orange-400"></i>
            <span>${task}</span>
        </li>
    `).join('');

    // Re-renderizar iconos Lucide dinámicos
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Modal Handlers
function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-content').innerHTML = data.content;
    
    const modal = document.getElementById('tech-modal');
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('tech-modal').classList.add('hidden');
}

// Selección de Plan para autocompletar formulario
function selectPlan(planName) {
    const select = document.getElementById('plan-select');
    if (select) {
        select.value = planName;
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Seleccionar posición 1 por defecto
    selectPosition(1);

    // Menú Responsive Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cerrar modal haciendo clic afuera
    const modal = document.getElementById('tech-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Envío del formulario
    const form = document.getElementById('inscription-form');
    const successMsg = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envío de formulario
            if (successMsg) {
                successMsg.classList.remove('hidden');
                form.reset();
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
});
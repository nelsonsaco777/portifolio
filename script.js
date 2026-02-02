// =====================
// SCROLL SUAVE PARA SEÇÕES
// =====================
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// =====================
// ANIMAÇÃO DAS BARRAS DE HABILIDADES
// =====================
const skills = document.querySelectorAll('.skill-bar span');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < triggerBottom) {
      skill.style.width = skill.getAttribute('style').split(':')[1]; // mantém a largura original
    }
  });
});

// =====================
// FORMULÁRIO DE CONTATO SIMULADO
// =====================
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Pega os valores do formulário
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  if(name && email && message){
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
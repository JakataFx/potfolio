// =======================
// script.js
// =======================

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('#filters .btn');
const projectCards = document.querySelectorAll('#projectGrid > div');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#filters .btn.active')?.classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Chatbot Logic
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById('chatbot');
  const chatbotBody = chatbot.querySelector('.chatbot-body');
  const chatbotHeader = chatbot.querySelector('.chatbot-header');

  // Toggle visibility
  chatbotHeader.addEventListener('click', () => {
    chatbot.classList.toggle('active');
  });

  // Load HTML UI
  chatbotBody.innerHTML = `
    <div class="chat-log">
      <p>Hello! 👋 I'm your virtual assistant.</p>
      <p>Try asking:</p>
      <ul>
        <li>How can i purchase the trading handbook?</li>
        <li>How can i learn trading from scratch?</li>
        <li>What services do you offer?</li>
        <li>How can I contact you?</li>
      </ul>
    </div>
    <div class="chatbot-input">
      <input type="text" id="userInput" placeholder="Type your question..." />
      <button id="sendBtn">Send</button>
    </div>
  `;

  const sendBtn = chatbot.querySelector('#sendBtn');
  const userInput = chatbot.querySelector('#userInput');
  const chatLog = chatbot.querySelector('.chat-log');

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('trading') || msg.includes('crypto') || msg.includes('forex')) {
      return "Currency Chronicles is a trading handbook that will guide you to learn from scratch,join the academy to master trading strategy and get in depth knowlege in trading the financial markets or contact us from any handle at the footer of this website";
    }

    if (msg.includes('web') || msg.includes('design') || msg.includes('website')) {
      return "I design and develop responsive websites using HTML, CSS, JavaScript, Bootstrap, and modern UI libraries.";
    }

    if (msg.includes('services') || msg.includes('offer') || msg.includes('provide')) {
      return "My services include Forex and Crypto trading for beginers and professionals, Automated robotic trading, Web Development, Digital Marketing Strategy,.";
    }

    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
      return "You can contact me via the form below or reach out on LinkedIn, WhatsApp,X,Facebook,Tiktok or Email — links are in the footer!";
    }

    return "🤖 Sorry, I didn't understand that. Contact my human friend via the #contact form below.";
  };

  const addToChat = (sender, text) => {
    chatLog.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  const handleSend = () => {
    const question = userInput.value.trim();
    if (question) {
      addToChat('You', question);
      const response = getBotResponse(question);
      addToChat('Bot', response);
      userInput.value = '';
    }
  };

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
});

// Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-bs-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-bs-theme', newTheme);
});
// Get references
const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.querySelector('.close');

// When button clicked → show modal
btn.onclick = () => {
  modal.style.display = 'block';
};

// When close (×) clicked → hide modal
span.onclick = () => {
  modal.style.display = 'none';
};

// Clicking outside modal content → also hide modal
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


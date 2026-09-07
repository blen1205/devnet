// Configure custom Tailwind colors dynamically
tailwind.config = {
  theme: {
    extend: {
      colors: {
        denBlue: '#1d61e7',
        denGreen: '#16a34a',
        denDarkBlue: '#0b192c',
        denCardBlue: '#172740'
      }
    }
  }
};

// Slider Data with local image paths
const slides = [
  {
    badge: "Virtue Series – Grade 1",
    title: "Good Manners, Matters",
    desc: "Inspiring good manners in everyday life — foundational virtues for forming good character.",
    price: "₱250",
    image: "book1.png"
  },
  {
    badge: "Virtue Series – Grade 2",
    title: "Faithful Footsteps",
    desc: "Treasuring kids celebration in everyday life — encouraging faithfulness and integrity.",
    price: "₱250",
    image: "book2.png"
  },
  {
    badge: "Virtue Series – Grade 3",
    title: "Leading with Integrity",
    desc: "Inspiring good manners in everyday life through leadership and honest living.",
    price: "₱250",
    image: "book3.png"
  },
  {
    badge: "Virtue Series – Grade 4",
    title: "Good with Compassion",
    desc: "Empowering good manners through compassion, care, and love for others.",
    price: "₱250",
    image: "book4.png"
  },
  {
    badge: "Virtue Series – Grade 5",
    title: "Happy Manners",
    desc: "Visioning good manners in everyday life — finding joy in living virtuously.",
    price: "₱250",
    image: "book5.png"
  }
];

let currentIndex = 0;

function renderDots() {
  const dotsContainer = document.getElementById('dots-container');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = slides.map((_, i) => `
    <button onclick="goToSlide(${i})" class="w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-denGreen w-6' : 'bg-white/50'}"></button>
  `).join('');
}

function updateSlide() {
  const slide = slides[currentIndex];
  document.getElementById('slide-badge').innerText = slide.badge;
  document.getElementById('slide-title').innerText = slide.title;
  document.getElementById('slide-desc').innerText = slide.desc;
  document.getElementById('slide-price').innerText = slide.price;
  
  // Updates the hero book cover image source
  document.getElementById('slide-cover-img').src = slide.image;

  renderDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('next-btn').addEventListener('click', nextSlide);
  document.getElementById('prev-btn').addEventListener('click', prevSlide);

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Initial Load
  updateSlide();
});
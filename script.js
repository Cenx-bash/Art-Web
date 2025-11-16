// Artwork and Artist Data
const artworkData = [
  {
    id: 1,
    title: "Spoliarium",
    artist: "Juan Luna",
    description: "A masterpiece depicting fallen gladiators being dragged from the Roman arena. This painting won the gold medal at the 1884 Madrid Exposition of Fine Arts and is considered one of the most important works in Philippine art history.",
    medium: "Oil on canvas",
    dimensions: "400 × 700 cm",
    year: "1884",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "The Parisian Life",
    artist: "Juan Luna",
    description: "Also known as 'Interieur d'un Cafi', this painting depicts a scene inside a cafe in Paris. It showcases Luna's mastery of light and composition, capturing the atmosphere of 19th century Parisian society.",
    medium: "Oil on canvas",
    dimensions: "57 × 79 cm",
    year: "1892",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Habi ng Lahi",
    artist: "Traditional Weavers",
    description: "Intricate textile patterns representing various indigenous communities across the Philippines. Each pattern tells a story of the community's history, beliefs, and connection to nature.",
    medium: "Handwoven textile",
    dimensions: "200 × 150 cm",
    year: "Traditional",
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Urban Bayanihan",
    artist: "Ramon Diaz",
    description: "A modern interpretation of community spirit in metropolitan settings. This digital artwork explores how traditional Filipino values of cooperation and mutual assistance manifest in contemporary urban environments.",
    medium: "Digital art, limited edition print",
    dimensions: "90 × 60 cm",
    year: "2023",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const artistData = [
  {
    id: 1,
    name: "Juan Luna",
    specialty: "Painter",
    bio: "One of the first recognized Philippine artists, known for his dramatic and expansive works. Luna was a Filipino painter, sculptor and a political activist of the Philippine Revolution during the late 19th century. He became one of the first recognized Philippine artists.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    notableWorks: ["Spoliarium", "The Parisian Life", "Portrait of a Lady"],
    birthYear: "1857",
    deathYear: "1899"
  },
  {
    id: 2,
    name: "Fernando Amorsolo",
    specialty: "Painter",
    bio: "Famous for his pastoral scenes and mastery of light, capturing idyllic rural Philippines. Amorsolo was a portraitist and painter of rural Philippine landscapes. He is best known for his craftsmanship and mastery in the use of light.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    notableWorks: ["Planting Rice", "Dalagang Bukid", "The Mestiza"],
    birthYear: "1892",
    deathYear: "1972"
  },
  {
    id: 3,
    name: "Anita Magsaysay-Ho",
    specialty: "Painter",
    bio: "One of the leading female modernist painters, known for her depictions of Filipino women. She was the only female member of the Thirteen Moderns, a group of modernists recognized in the Philippine art scene.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    notableWorks: ["Women with Baskets", "Fish Vendors", "In the Garden"],
    birthYear: "1914",
    deathYear: "2012"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  // Loading animation
  const loading = document.querySelector('.loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 1000);
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide header on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScrollY = window.scrollY;
  });

  // Scroll animations for sections
  const sections = document.querySelectorAll('.section');
  const cards = document.querySelectorAll('.artwork-card, .artist-card, .exhibition-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, observerOptions);
  
  cards.forEach(card => {
    cardObserver.observe(card);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput.value) {
        // Here you would typically send the data to a server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }

  // Artwork and Artist Modal Functionality
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="artwork-modal">
      <button class="modal-close">&times;</button>
      <div class="modal-content">
        <div class="modal-image">
          <img src="" alt="">
        </div>
        <div class="modal-info">
          <h2 class="modal-title"></h2>
          <p class="modal-artist"></p>
          <p class="modal-description"></p>
          <div class="modal-details"></div>
          <div class="modal-actions">
            <button class="modal-btn inquire">
              <i class="fas fa-envelope"></i>
              INQUIRE
            </button>
            <button class="modal-btn share">
              <i class="fas fa-share-alt"></i>
              SHARE
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  // Open artwork modal
  document.querySelectorAll('.artwork-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      openArtworkModal(artworkData[index]);
    });
  });

  // Open artist modal
  document.querySelectorAll('.artist-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      openArtistModal(artistData[index]);
    });
  });

  // Close modal
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Modal functions
  function openArtworkModal(artwork) {
    const modal = modalOverlay.querySelector('.artwork-modal');
    modal.querySelector('.modal-image img').src = artwork.image;
    modal.querySelector('.modal-image img').alt = artwork.title;
    modal.querySelector('.modal-title').textContent = artwork.title;
    modal.querySelector('.modal-artist').textContent = `By ${artwork.artist}`;
    modal.querySelector('.modal-description').textContent = artwork.description;
    
    const detailsContainer = modal.querySelector('.modal-details');
    detailsContainer.innerHTML = `
      <div class="modal-detail">
        <span class="detail-label">MEDIUM</span>
        <span class="detail-value">${artwork.medium}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">DIMENSIONS</span>
        <span class="detail-value">${artwork.dimensions}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">YEAR</span>
        <span class="detail-value">${artwork.year}</span>
      </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openArtistModal(artist) {
    const modal = modalOverlay.querySelector('.artwork-modal');
    modal.querySelector('.modal-image img').src = artist.image;
    modal.querySelector('.modal-image img').alt = artist.name;
    modal.querySelector('.modal-title').textContent = artist.name;
    modal.querySelector('.modal-artist').textContent = artist.specialty;
    modal.querySelector('.modal-description').textContent = artist.bio;
    
    const detailsContainer = modal.querySelector('.modal-details');
    detailsContainer.innerHTML = `
      <div class="modal-detail">
        <span class="detail-label">BORN</span>
        <span class="detail-value">${artist.birthYear}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">DIED</span>
        <span class="detail-value">${artist.deathYear}</span>
      </div>
      <div class="modal-detail">
        <span class="detail-label">NOTABLE WORKS</span>
        <span class="detail-value">${artist.notableWorks.join(', ')}</span>
      </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Modal action buttons
  document.querySelector('.modal-btn.inquire').addEventListener('click', () => {
    alert('Inquiry form would open here. This is a demo.');
  });

  document.querySelector('.modal-btn.share').addEventListener('click', () => {
    alert('Share options would appear here. This is a demo.');
  });
});
console.log("JS Loaded");

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
  });
}

// Greeting Message
const greetingElement = document.getElementById("greeting");

if (greetingElement) {
  const hour = new Date().getHours();
  let greetingText;

  if (hour < 12) {
    greetingText = "Good Morning! Welcome to The Saffron House 🌞";
  } else if (hour < 18) {
    greetingText = "Good Afternoon! Welcome to The Saffron House 🍽️";
  } else {
    greetingText = "Good Evening! Welcome to The Saffron House";
  }

  greetingElement.textContent = greetingText;
  greetingElement.style.display = "block";

  // Hide greeting after 4 seconds (4000 ms)
  setTimeout(() => {
    greetingElement.style.display = "none";
  }, 4000);
}

// WEEKEND SPECIALS (Decision + Loop)
const weekendSection = document.getElementById("weekend-specials");
const specialList = document.getElementById("special-list");

// 0 = Sunday, 6 = Saturday
const today = new Date().getDay();

// Weekend dishes
const weekendDishes = [
  "Hyderabadi Chicken Biryani",
  "Lamb Karahi Special",
  "Butter Chicken Deluxe",
  "Paneer Handi"
];

if (weekendSection && specialList) {

  // DECISION: check if weekend
  if (today === 0 || today === 6) {
    weekendSection.style.display = "block";

    let output = "";

    // LOOP: display dishes
    for (let i = 0; i < weekendDishes.length; i++) {
      output += "🍽️ " + weekendDishes[i] + "<br>";
    }

    specialList.innerHTML = output;

  } else {
    weekendSection.style.display = "none";
  }
}


const descriptions = {
  // Breads & Desserts
  "Garlic Naan": "Soft, fluffy tandoor-baked naan infused with garlic, butter, and fresh cilantro.",
  "Rice": "Perfectly steamed, fragrant white rice cooked to soft and fluffy perfection.",
  "Gulab Jamun": "Warm, melt-in-your-mouth milk dumplings soaked in sweet saffron-cardamom syrup.",
  "Kheer": "Creamy rice pudding slow-cooked with milk, sugar, cardamom, and garnished with nuts.",
  "Jalebi": "Crispy golden spirals soaked in aromatic sugar syrup, sweet and irresistibly crunchy.",

  // Appetizers
  "Samosa Plate": "Golden, crispy samosas stuffed with spiced potatoes and peas, served with chutney.",
  "Chicken Tikka Bites": "Tender, marinated chicken pieces grilled to perfection with smoky spices.",
  "Paneer Pakora": "Soft paneer cubes dipped in spiced chickpea batter and fried until golden.",
  "Vegetable Spring Rolls": "Crispy rolls stuffed with fresh vegetables and served with tangy sauce.",
  "Masala Fries": "Crispy fries tossed in a blend of aromatic Indian spices.",

  // Main Course
  "Chicken Biryani": "Aromatic basmati rice layered with succulent chicken, herbs, and spices.",
  "Lamb Karahi": "Tender lamb cooked in a rich tomato and onion gravy with traditional spices.",
  "Butter Chicken": "Juicy chicken in a creamy tomato-butter sauce with Indian spices.",
  "Chicken Tandoori": "Marinated chicken roasted in a tandoor for a smoky, flavorful finish.",
  "Coconut Curry": "Delicious coconut-based curry with vegetables or meat, mildly spiced.",
  "Chana Masala": "Chickpeas simmered in a flavorful tomato-onion gravy with aromatic spices.",
  "Vegetable Korma": "Mixed vegetables cooked in a rich, creamy, mildly spiced sauce.",
  "Fish Curry": "Tender fish cooked in a tangy, spicy curry with aromatic herbs.",
  "Paneer Masala": "Soft paneer cubes in a rich, spiced tomato-based gravy.",
  "Daal Makhani": "Slow-cooked black lentils in a creamy, buttery tomato sauce.",

  // Drinks - Non-Alcoholic
  "Mango Lassi": "Smooth and creamy yogurt-based mango drink with a hint of sweetness.",
  "Pineapple Coconut": "Tropical blend of pineapple and coconut for a refreshing drink.",
  "Masala Chai": "Spiced Indian tea brewed with black tea, milk, and aromatic spices.",
  "Fresh Lemon Soda": "Zesty lemon soda mixed with fizz and a hint of sweetness.",
  "Soft Drink": "Classic chilled soft drinks served refreshing and fizzy.",
  "Fresh Juice": "Freshly squeezed seasonal fruit juices, naturally sweet and healthy.",

  // Drinks - Alcoholic
  "Red Wine": "Rich and full-bodied red wine with deep fruity notes.",
  "White Wine": "Crisp and refreshing white wine with subtle floral and citrus flavors.",
  "Craft Beer": "Locally brewed beer with unique flavors and a smooth finish.",
  "Classic Margarita": "A tangy cocktail made with tequila, lime, and a hint of sweetness."
};

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", (event) => {

        // If Add to Cart button was clicked, STOP everything
        if (event.target.classList.contains("addToCart")) {
            event.stopPropagation();   
            return;
        }

        const title = item.dataset.name;
        const price = item.dataset.price;
        const img = item.dataset.img;
        const description = descriptions[title];

        openModal(img, title, price, description);
    });
});

function openModal(imgSrc, title, price, description) {
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalDescription").textContent = description;

    const modal = document.getElementById("itemModal");
    modal.style.display = "flex";

    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    document.getElementById("itemModal").style.display = "none";
}

// Offer Expiring

const offerPopup = document.getElementById("offer-popup");
const offerText = document.getElementById("offer-text");

// Set offer expiry date (YYYY, MM-1, DD, HH, MM)
const offerExpiry = new Date(2026, 5, 31, 23, 59);

if (offerPopup && offerText) {

  // Update offer text
  const updateOfferText = function () {
    const now = new Date();
    const timeLeft = offerExpiry - now;

    if (timeLeft <= 0) {
      offerPopup.style.display = "none";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

    offerText.textContent =
      `Get 26% OFF on all Main Courses! ⏳ Offer Expires in ${days} day(s) and ${hours} hour(s).`;
  };

  updateOfferText();                 // initial update
  setInterval(updateOfferText, 60000); // update every minute

  // Blinking effect using function expression
  const blinkLoop = function () {
    if (offerPopup.style.display === "none") return;

    offerPopup.style.visibility = "visible";
    setTimeout(() => {
      offerPopup.style.visibility = "hidden";
      setTimeout(blinkLoop, 1000); // hidden for 1s, then loop
    }, 3000); // visible for 3s
  };

  blinkLoop(); // start blinking
}

// RESTAURANT OPEN / CLOSED STATUS
const statusElement = document.getElementById("open-status");

// Define hours (change these to your real hours)
const openHour = 11;  // 11:00 AM
const closeHour = 22; // 10:00 PM (24-hour format)

function updateOpenStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  let statusText = "";
  let statusClass = "";

  // Check if current time is within open hours
  if 
    ( currentHour > openHour && currentHour < closeHour )
  {
    statusText = "We are OPEN! 🍽️";
    statusClass = "open";
  } 
  else if 
        ( currentHour === openHour && currentMinute >= 0 ) 
  {
    statusText = "We are OPEN! 🍽️";
    statusClass = "open";
  } 
  else if 
        ( currentHour === closeHour && currentMinute === 0 ) 
  {
    statusText = "We are OPEN! 🍽️";
    statusClass = "open";
  } 
  else {
    statusText = "Sorry, we are CLOSED ⏰";
    statusClass = "closed";
  }

  statusElement.textContent = statusText;
  statusElement.className = statusClass;
}

// Run it once right away
updateOpenStatus();

// Then update every minute
setInterval(updateOpenStatus, 60000);


$(function () {

  console.log("Cart Section Running");

  var cart = [];

  // Use delegated event binding in case menu items load dynamically
  $(document).on('click', '.addToCart', function (e) {

    e.stopPropagation(); // stop any parent click from interfering

    console.log("Button clicked"); // should appear in console

    var itemElement = $(this).closest('.menu-item');
    var name = itemElement.data('name');
    var price = parseFloat(itemElement.data('price').replace('$',''));

    // Add to cart array
    cart.push({ name: name, price: price });

    // Update cart count
    $('#cartCount').text(cart.length);

    // Optional: show cart panel immediately
    $('#cartPanel').addClass('active');
  });

});

// Load menu items from JSON
$(document).ready(function () {
  $.getJSON('menu.json', function (menuItems) {
    const menuGrid = $('.menu-grid'); // target where menu items go
    menuGrid.empty(); // clear existing items if needed

    menuItems.forEach(item => {
      const menuItemHTML = `
        <div class="menu-item" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <div class="price">${item.price}</div>
          <button class="addToCart">Add to Cart</button>
        </div>
      `;
      menuGrid.append(menuItemHTML);
    });
  });
});


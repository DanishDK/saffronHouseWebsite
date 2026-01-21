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
    item.addEventListener("click", () => {
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


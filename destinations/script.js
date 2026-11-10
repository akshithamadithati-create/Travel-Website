import {
  toggleWishlist,
  updateWishlistCount,
  isInWishlist,
} from "./wishlist.js";

updateWishlistCount();

const retryBtn = document.getElementById("retryBtn");

async function fetchDestinations() {
  const message = document.getElementById("message");

  try {
    message.textContent = "Loading destinations...";

    const response = await fetch("destinations.json");

    if (!response.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const destinations = await response.json();

    if (destinations.length === 0) {
      message.textContent = "No destinations available.";
      return;
    }

    const destinationList = document.getElementById("destinationList");

    destinationList.innerHTML = "";

    destinations.forEach(function (destination) {
      const card = document.createElement("div");
      card.className = "destination-card";

      const image = document.createElement("img");
      image.src = destination.image;
      image.alt = destination.name;

      const heading = document.createElement("h2");
      heading.textContent = destination.name;

      const country = document.createElement("p");
      country.textContent = destination.country;

      const description = document.createElement("p");

      // Create wishlist heart button
      const heartButton = document.createElement("button");

      heartButton.type = "button";
      heartButton.className = "wishlist-btn";

      heartButton.textContent = isInWishlist(destination.id) ? "♥" : "♡";

      heartButton.setAttribute(
        "aria-label",
        isInWishlist(destination.id)
          ? `Remove ${destination.name} from wishlist`
          : `Add ${destination.name} to wishlist`,
      );

      heartButton.setAttribute(
        "aria-pressed",
        String(isInWishlist(destination.id)),
      );

      // Handle heart button click
      heartButton.addEventListener("click", function () {
        toggleWishlist(destination);

        const saved = isInWishlist(destination.id);

        heartButton.textContent = saved ? "♥" : "♡";

        heartButton.setAttribute(
          "aria-label",
          saved
            ? `Remove ${destination.name} from wishlist`
            : `Add ${destination.name} to wishlist`,
        );

        heartButton.setAttribute("aria-pressed", String(saved));
      });

      description.textContent = destination.description;

      const price = document.createElement("p");

      // Create Book Now button
      const bookButton = document.createElement("button");

      bookButton.type = "button";
      bookButton.textContent = "Book Now";
      bookButton.className = "book-btn";

      bookButton.addEventListener("click", function () {
        alert("Booking selected for " + destination.name + "!");
      });

      price.textContent = "Price: ₹" + destination.price;

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "card-buttons";

      buttonContainer.append(bookButton, heartButton);

      card.append(image, heading, country, description, price, buttonContainer);
      destinationList.appendChild(card);
    });

    message.textContent = "";

    console.log(destinations);
  } catch (error) {
    message.textContent = "Failed to load destinations. Please try again.";

    retryBtn.hidden = false;

    console.error("Error:", error);
  }
}

fetchDestinations();

retryBtn.addEventListener("click", function () {
  retryBtn.hidden = true;
  fetchDestinations();
});

const priceAlertForm = document.getElementById("priceAlertForm");

priceAlertForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const destinationName = document
    .getElementById("destinationName")
    .value.trim();
  const targetPrice = Number(document.getElementById("targetPrice").value);
  const alertMessage = document.getElementById("alertMessage");

  if (destinationName === "") {
    alertMessage.textContent = "Please enter destination name.";
    return;
  }

  if (targetPrice <= 0 || !Number.isFinite(targetPrice)) {
    alertMessage.textContent = "Please enter a valid price.";
    return;
  }

  alertMessage.textContent =
    "Price alert set successfully for " + destinationName;

  priceAlertForm.reset();
});

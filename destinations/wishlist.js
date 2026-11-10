let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

export function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

export function toggleWishlist(destination) {
    const index = wishlist.findIndex(function(item) {
        return item.id === destination.id;
    });

    if (index === -1) {
        wishlist.push(destination);
    } else {
        wishlist.splice(index, 1);
    }

    saveWishlist();
    updateWishlistCount();
}

export function updateWishlistCount() {
    document.getElementById("wishlistCount").textContent = wishlist.length;
}

export function isInWishlist(destinationId) {
    return wishlist.some(function(item) {
        return item.id === destinationId;
    });
}
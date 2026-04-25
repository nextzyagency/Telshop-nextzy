import { map } from 'nanostores';

// Intentar cargar datos iniciales de localStorage
const savedCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('telshop_cart') || '{}') : {};

export const cartItems = map(savedCart);

// Suscribirse para guardar cambios en localStorage
if (typeof window !== 'undefined') {
  cartItems.subscribe((items) => {
    localStorage.setItem('telshop_cart', JSON.stringify(items));
  });
}

export function addCartItem({ id, name, price, image }) {
  const items = cartItems.get();
  const existingItem = items[id];
  
  if (existingItem) {
    cartItems.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(id, { id, name, price, image, quantity: 1 });
  }
}

export function removeCartItem(id) {
  const newCart = { ...cartItems.get() };
  delete newCart[id];
  cartItems.set(newCart);
}

export function clearCart() {
  cartItems.set({});
}

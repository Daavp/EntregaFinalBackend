console.log("Purchase js");

const res = fetch(`/carts/purchaseConfirmation`, {
    method: 'GET',
});
const data = await res.json();
console.log(data);
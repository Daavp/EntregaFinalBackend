console.log("payments js");

const button = document.getElementById('checkout');
console.log("button",button)
button.addEventListener('click', async()=>{
const res = await fetch(`/api/payments/create-checkout-session`, {
    method: 'POST',
});
const data = await res.json();
console.log(data);
window.location.href = data.url

});
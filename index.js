const addInputsBtn = document.getElementById("add-inputs-btn");
// output variables
const itemOutput = document.getElementById("item-output");
const costOutput = document.getElementById("cost-output");
const noteOutput = document.getElementById("note-output");
const totalOutput = document.getElementById("total-output");

// render popup HTML

document.getElementById("popup").innerHTML = `

<div class="popup-container">
  <div class="popup-inner-container">
    <h3>Introducing "Invoice-It-Up ⬆"</h3>
    <p>
      The ultimate software for creating your own business invoices! Say goodbye
      to boring and tedious invoice creation, and hello to a more efficient and
      enjoyable invoicing experience.
    </p>
    <p>
      With Invoice-It-Up, you can create a professional-looking invoice in
      minutes. You can also save your information for future use, making
      invoicing a breeze.
    </p>
    <p>
      But that's not all! You don't need to be a tech expert to use it. So what
      are you waiting for?
    </p>
    <p>
      Try Invoice-It-Up today and simplify your invoicing process, while adding
      a little bit of fun and personality to your business transactions!
    </p>
    <div class="popup-btn">
    <a href="#"><button>Build Your Invoice!</button></a>
    </div>
  </div>
</div>


`;

// constructor function
function itemConstructor(item, currency, amount, quantity) {
  this.item = item;
  this.currency = currency;
  this.amount = amount;
  this.quantity = quantity;
  this.id = generateRandomID();
}

// now, I have create an array to store the objects
const items = [];

// EVENT LISTENER
addInputsBtn.addEventListener("click", function () {
  // here, I collect the input values...
  const item = document.querySelector("#input-item").value;
  const currency = document.querySelector("#currency-select-box").value;
  const amount = document.querySelector("#input-currency").value;
  const quantity = document.querySelector("#input-quantity").value;

  // now, I create a new object using the above constructor function - pushing the new object to the array...
  const newItem = new itemConstructor(item, currency, amount, quantity);
  items.push(newItem);
  console.log(newItem);
  console.log("items array", items);

  let totalUnitCosts = 0;
  items.forEach(function (item) {
    totalUnitCosts += item.amount * item.quantity;
  });

  // now I render the inputs to the specified html elements
  itemOutput.innerHTML = items
    .map(function (item) {
      const totalItemCost = item.amount * item.quantity;
      return `
        <div class="item-flex" id="${item.id}">
          <div>${item.item}</div> 
          <div class="qty-text">${item.quantity}</div>
          <div class="item-cost-text">${item.currency} ${item.amount}</div>
          <div>${item.currency} ${totalItemCost}</div>
        </div>`;
    })
    .join("");

  // once input has been rendered, I need to CLEAR out the input fields
  document.getElementById("input-item").value = "";
  document.getElementById("input-currency").value = "";
  document.getElementById("input-quantity").value = "";

  // calculate the TOTAL AMOUNT
  let totalAmount = 0;
  items.forEach(function (item) {
    totalAmount += item.amount * item.quantity;
  });

  totalOutput.innerHTML = `
    <div class="total-amount-box">
      <div class="total-amount-el"><strong>${currency} ${totalAmount}</strong></div>
    
     
    <div>
  `;

  // render note
  noteOutput.innerHTML = `
    <p>We accept cash, credit card, or PayPal</p>
  `;
});
// END OF EVENT LISTENER

// function to generate random ID
function generateRandomID() {
  let id = "";
  const characters = "0123456789abcdef";

  for (let i = 0; i < 32; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  return id;
}

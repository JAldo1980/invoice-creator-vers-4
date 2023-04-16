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

// form function

function validateForm() {
  let isValid = true;

  const invoiceNumber = document.forms["invoice-form"]["invoice-number"].value;
  const businessName = document.forms["invoice-form"]["business-name"].value;
  const correspondentName =
    document.forms["invoice-form"]["correspondent-name"].value;
  const correspondentStreet =
    document.forms["invoice-form"]["correspondent-street"].value;
  const correspondentCity =
    document.forms["invoice-form"]["correspondent-city"].value;
  const correspondentPostcode =
    document.forms["invoice-form"]["correspondent-postcode"].value;
  const recipientName = document.forms["invoice-form"]["recipient-name"].value;
  const recipientStreet =
    document.forms["invoice-form"]["recipient-street"].value;
  const recipientCity = document.forms["invoice-form"]["recipient-city"].value;
  const recipientPostcode =
    document.forms["invoice-form"]["recipient-postcode"].value;
  const taxPercentage = document.forms["invoice-form"]["tax-percentage"].value;
  const termsLink = document.forms["invoice-form"]["terms-link"].value;

  if (invoiceNumber === "") {
    document.getElementById("invoice-number-error").innerHTML =
      "Please enter an invoice number.";
    isValid = false;
  } else {
    document.getElementById("invoice-number-error").innerHTML = "";
  }

  if (businessName === "") {
    document.getElementById("business-name-error").innerHTML =
      "Please enter a business name.";
    isValid = false;
  } else {
    document.getElementById("business-name-error").innerHTML = "";
  }

  if (correspondentName === "") {
    document.getElementById("correspondent-name-error").innerHTML =
      "Please enter a correspondent name.";
    isValid = false;
  } else {
    document.getElementById("correspondent-name-error").innerHTML = "";
  }

  if (correspondentStreet === "") {
    document.getElementById("correspondent-street-error").innerHTML =
      "Please enter a correspondent street name.";
    isValid = false;
  } else {
    document.getElementById("correspondent-street-error").innerHTML = "";
  }

  if (correspondentCity === "") {
    document.getElementById("correspondent-city-error").innerHTML =
      "Please enter a correspondent city.";
    isValid = false;
  } else {
    document.getElementById("correspondent-city-error").innerHTML = "";
  }

  if (correspondentPostcode === "") {
    document.getElementById("correspondent-postcode-error").innerHTML =
      "Please enter a correspondent postcode.";
    isValid = false;
  } else {
    document.getElementById("correspondent-postcode-error").innerHTML = "";
  }

  if (recipientName === "") {
    document.getElementById("recipient-name-error").innerHTML =
      "Please enter a recipient name.";
    isValid = false;
  } else {
    document.getElementById("recipient-name-error").innerHTML = "";
  }

  if (recipientStreet === "") {
    document.getElementById("recipient-street-error").innerHTML =
      "Please enter a recipient street.";
    isValid = false;
  } else {
    document.getElementById("recipient-street-error").innerHTML = "";
  }

  if (recipientCity === "") {
    document.getElementById("recipient-city-error").innerHTML =
      "Please enter a recipient city.";
    isValid = false;
  } else {
    document.getElementById("recipient-city-error").innerHTML = "";
  }

  if (recipientPostcode === "") {
    document.getElementById("recipient-postcode-error").innerHTML =
      "Please enter a recipient postcode.";
    isValid = false;
  } else {
    document.getElementById("recipient-postcode-error").innerHTML = "";
  }

  if (taxPercentage === "") {
    document.getElementById("tax-percentage-error").innerHTML =
      "Please enter a tax percentage.";
    isValid = false;
  } else {
    document.getElementById("tax-percentage-error").innerHTML = "";
  }

  if (termsLink === "") {
    document.getElementById("terms-link-error").innerHTML =
      "Please enter your terms link.";
    isValid = false;
  } else {
    document.getElementById("terms-link-error").innerHTML = "";
  }
}

// render FORM

document.getElementById("form-box").innerHTML = `
<form id="invoice-form">
		<div class="form-container">
			<div>
				<label for="invoice-number">Invoice Number *</label>
				<input type="text" id="invoice-number" name="invoice-number" required>
				<div id="invoice-number-error" class="error-message"></div>
			</div>
			<div>
				<label for="business-name">Business Name *</label>
				<input type="text" id="business-name" name="business-name" required>
				<div id="business-name-error" class="error-message"></div>
			</div>
			<div>
				<label for="correspondent-name">Correspondent Name *</label>
				<input type="text" id="correspondent-name" name="correspondent-name" required>
				<div id="correspondent-name-error" class="error-message"></div>
			</div>
			<div>
				<label for="correspondent-street">Correspondent Street *</label>
				<input type="text" id="correspondent-street" name="correspondent-street" required>
				<div id="correspondent-street-error" class="error-message"></div>
			</div>
			<div>
				<label for="correspondent-city">Correspondent City *</label>
				<input type="text" id="correspondent-city" name="correspondent-city" required>
				<div id="correspondent-city-error" class="error-message"></div>
			</div>
			<div>
				<label for="correspondent-postcode">Correspondent Postcode *</label>
				<input type="text" id="correspondent-postcode" name="correspondent-postcode" required>
				<div id="correspondent-postcode-error" class="error-message"></div>
			</div>
			<div>
				<label for="recipient-name">Recipient Name *</label>
				<input type="text" id="recipient-name" name="recipient-name" required>
				<div id="recipient-name-error" class="error-message"></div>
      </div>
      <div>
      <label for="recipient-street">Recipient Postcode *</label>
      <input type="text" id="recipient-street" name="recipient-street" required>
      <div id="recipient-street-error" class="error-message"></div>
      </div>
      <div>
      <label for="recipient-city">Recipient City *</label>
      <input type="text" id="recipient-city" name="recipient-city" required>
      <div id="recipient-city-error" class="error-message"></div>
      </div>
      <div>
      <label for="recipient-postcode">Recipient Postcode *</label>
      <input type="text" id="recipient-postcode" name="recipient-postcode" required>
      <div id="recipient-postcode-error" class="error-message"></div>
      </div>

      <div>
      <label for="tax-percentage">Tax Percentage *</label>
      <input type="number" id="tax-percentage" name="tax-percentage" required>
      <div id="tax-percentage-error" class="error-message"></div>
      </div>

      <div>
      <label for="terms-link">Terms Link *</label>
      <input type="url" id="terms-link" name="terms-link" required>
      <div id="terms-link-error" class="error-message"></div>
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

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
      The ultimate software for creating your own business invoices! 
      <span class="span-highlight-yellow">Say goodbye
      to boring and tedious invoice creation</span>, and hello to a more efficient and
      enjoyable invoicing experience.
    </p>
    <p>
      With Invoice-It-Up, you can create a professional-looking invoice in
      minutes. You can also save your information for future use, making
      invoicing a breeze.
    </p>
    <p>
      <strong>But that's not all! You don't need to be a tech expert to use it.</strong> 
    </p>
    <p><em>So what
    are you waiting for?</em></p>
    <p>
      Try Invoice-It-Up today and simplify your invoicing process, while adding
      a little bit of fun and personality to your business transactions!
    </p>
    <div class="popup-btn">
    <a href="#"><button id="popup-btn">Build Your Invoice! 🧾</button></a>
    </div>
  </div>
</div>
`;

// HIDE POPUP ONCE BUTTON CLICKED
document.getElementById("popup-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// form function

function validateForm(e) {
  e.preventDefault();
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

  const correspondentTelephone =
    document.forms["invoice-form"]["correspondent-telephone"].value;

  const correspondentEmail =
    document.forms["invoice-form"]["correspondent-email"].value;

  const recipientBusiness =
    document.forms["invoice-form"]["recipient-business"].value;

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

  if (correspondentTelephone === "") {
    document.getElementById("correspondent-telephone-error").innerHTML =
      "Please enter a telephone number.";
    isValid = false;
  } else {
    document.getElementById("correspondent-telephone-error").innerHTML = "";
  }

  if (correspondentEmail === "") {
    document.getElementById("correspondent-email-error").innerHTML =
      "Please enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("correspondent-email-error").innerHTML = "";
  }

  if (recipientBusiness === "") {
    document.getElementById("recipient-business-error").innerHTML =
      "Please enter a recipient business name.";
    isValid = false;
  } else {
    document.getElementById("recipient-business-error").innerHTML = "";
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
  return isValid;
}

// render FORM

document.getElementById("form-box").innerHTML = `

    <div class="form-box-styling">
    <div>
      <h1>Invoice-It-Up ⬆</h1>
    </div>
    <div class="form-text">
      <p>Please complete the simple form below to help us start to build your AWESOME invoice! 🚀</p>
    </div>
    </div>
        <div>
          <form id="invoice-form" class="form-styling" onsubmit="return validateForm(event)>
              <div class="form-container">
                <div class="color-1">
                    <h3>Your Details</h3>


                    <div>
                    <label for="invoice-number">Invoice Number *</label>
                    <input type="text" id="invoice-number" name="invoice-number" placeholder="e.g. 001">
                    <div id="invoice-number-error" class="error-message"></div>
                    </div>

                    <div>
                    <label for="issue-date">Issue Date *</label>
                    <input type="date" id="issue-date" name="issue-date">
                    <div id="issue-date-error" class="error-message"></div>
                    </div>

                    <div>
                    <label for="due-date">Due Date *</label>
                    <input type="date" id="due-date" name="due-date">
                    <div id="due-date-error" class="error-message"></div>
                    </div>

                    <div>
                    <label for="business-name">Your Business Name *</label>
                    <input type="text" id="business-name" name="business-name" placeholder="e.g. Twitchy Fly Designs Ltd">
                    <div id="business-name-error" class="error-message"></div>
                    </div>
                    <div>
                    <label for="correspondent-name">Your Name *</label>
                    <input type="text" id="correspondent-name" name="correspondent-name" placeholder="e.g. Penny Barron">
                    <div id="correspondent-name-error" class="error-message"></div>
                    </div>
                    <div>
                    <label for="correspondent-street">Your Street *</label>
                    <input type="text" id="correspondent-street" name="correspondent-street" placeholder="e.g. Old Oak Road">
                    <div id="correspondent-street-error" class="error-message"></div>
                    </div>
                    <div>
                    <label for="correspondent-city">Your City *</label>
                    <input type="text" id="correspondent-city" name="correspondent-city" placeholder="e.g. Dublin">
                    <div id="correspondent-city-error" class="error-message"></div>
                    </div>

                    <div>
                    <label for="correspondent-postcode">Your  Postcode *</label>
                    <input type="text" id="correspondent-postcode" name="correspondent-postcode" placeholder="e.g. D29 1UB">
                    <div id="correspondent-postcode-error" class="error-message"></div>
                    </div>
                    <div>
                    <label for="correspondent-telephone">Your  Phone Number *</label>
                    <input type="number" id="correspondent-phone" name="correspondent-phone" placeholder="e.g. 07701 01010101">
                    <div id="correspondent-phone" class="error-message">
                    </div>
                    </div>
                    <label for="correspondent-email">Your Email *</label>
                    <input type="email" id="correspondent-email" name="correspondent-email" placeholder="e.g. penny@twitchyfly.com">
                    <div id="correspondent-email" class="error-message">
                    </div>
                
                </div>
                
                <div class="color-2">
                <h3>Recipient Details</h3>
                <div>
                <label for="recipient-business">Recipient Business Name *</label>
                      <input type="text" id="recipient-business" name="recipient-business">
                      <div id="recipient-business-error" class="error-message"></div>
                    </div>
                      <div>
                        <label for="recipient-name">Recipient Name *</label>
                        <input type="text" id="recipient-name" name="recipient-name">
                        <div id="recipient-name-error" class="error-message"></div>
                      </div>
                      <div>
                      <label for="recipient-street">Recipient Street *</label>
                      <input type="text" id="recipient-street" name="recipient-street">
                      <div id="recipient-street-error" class="error-message"></div>
                      </div>
                      <div>
                      <label for="recipient-city">Recipient City *</label>
                      <input type="text" id="recipient-city" name="recipient-city">
                      <div id="recipient-city-error" class="error-message"></div>
                      </div>
                      <div>
                      <label for="recipient-postcode">Recipient Postcode *</label>
                      <input type="text" id="recipient-postcode" name="recipient-postcode">
                      <div id="recipient-postcode-error" class="error-message"></div>
                      </div>
                      
                </div>

                <div class="color-3">
                      <h3>Fiscal & Legal Details</h3>
                      <div>
                      <label for="tax-percentage">Tax Percentage (%) *</label>
                      <input type="number" id="tax-percentage" name="tax-percentage" placeholder="e.g. 20  (Please do not add the % symbol 😊)" >
                      <div id="tax-percentage-error" class="error-message"></div>
                      </div>

                      <div>
                      <label for="terms-link">Terms Link *</label>
                      <input type="url" id="terms-link" name="terms-link" placeholder="https://myterms.com">
                      <div id="terms-link-error" class="error-message"></div>
                      </div>
                </div>
            <button type="submit" form="invoice-form" id="form-submitted">Submit</button>
          </form>
        </div>

`;

// HIDE FORM ONCE FORM  BUTTON "CLICKED" - DISPLAY INVOICE BUILDER
document
  .getElementById("form-submitted")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // HIDE FORM
    document.getElementById("form-box").style.display = "none";
    // DISPLAY FORM BUILDER
    document.querySelector(".inner-container").style.display = "block";
    document.querySelector("header").style.display = "block";

    // user form details output

    document.getElementById("form-detail-output").innerHTML = `
    <div class="top-outputs">
    <div>Invoice Number: ${invoiceNumber.value}</div>
    <div>Issue Date: ${issueDate.value}</div>
    <div><strong>Due Date:</strong>${dueDate.value}</div>
  </div>
  <div class="middle-outputs">
    <div>
      <p>Business Name: ${businessName.value}</p>
      <p>Name: ${correspondentName.value}</p>
      <h4>Address:</h4>
      <p>${correspondentStreet.value}</p>
      <p>${correspondentCity.value}</p>
      <p>${correspondentPostcode.value}</p>
      <p>☎ ${correspondentTelephone.value}</p>
      <p>📧 ${correspondentEmail.value}</p>
    </div>
    <!-- recipient details below -->
    <div>
      <p>Business Name: ${recipientBusiness.value}</p>
      <p>Name: ${recipientName.value}</p>
      <h4>Address:</h4>
      <p>${recipientStreet.value}</p>
      <p>${recipientCity.value}</p>
      <p>${recipientPostcode.value}</p>
    </div>
  </div>
  <div class="bottom-outputs">
    <p>Tax: ${taxPercentage.value}%</p>
    <p>Terms & Conditions Link: ${termsLink.value}</p>
  </div>
    `;
  });

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

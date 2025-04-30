
console.log("connected");

const allBtnContainer = document.getElementById("seat-id");
const allBtns = allBtnContainer.querySelectorAll("button"); // Select all buttons inside the container

let count = 0; // Initialize a counter to track the number of selected buttons

for (const btn of allBtns) {
  btn.addEventListener("click", function (e) {
    const seatNumber = e.target.innerText; // Get the seat number

    // Check if the button is already selected
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      e.target.style.backgroundColor = ""; // Reset background color
      e.target.style.color = ""; // Reset text color
      
      count--;
      // Remove the corresponding row from the table
      removeRow(seatNumber);
    } 
    
    else {
      e.target.classList.add("selected");
      e.target.style.backgroundColor = "#1DD100"; // Set custom background color
      e.target.style.color = "white"; // Set custom text color
      count++;

      // Get the values
      const seatClass = document.getElementById("seat-class").innerText;
      const seatPrice = document.getElementById("seat-price").innerText;

      // Append a new row to the table
      addRow(seatNumber, seatClass, seatPrice);
    }
 
    setInnerText("seat-count", count); // Update the seat count display
  });
}

// Function to create and append a new row
function addRow(seatNumber, seatClass, seatPrice) {
  const tbody = document.querySelector("tbody.font-inter"); // Select the <tbody>

  // Check if the row already exists
  if (tbody.querySelector(`tr[data-seat-number="${seatNumber}"]`)) {
    return; // Prevent duplicate rows
  }

  // Create a new <tr> element
  const tr = document.createElement("tr");
  tr.classList.add("border-0");
  tr.setAttribute("data-seat-number", seatNumber); // Add a custom attribute for easy identification

  // Create the <td> elements
  const tdSeatNumber = document.createElement("td");
  tdSeatNumber.textContent = seatNumber;

  const tdSeatClass = document.createElement("td");
  tdSeatClass.textContent = seatClass;

  const tdSeatPrice = document.createElement("td");
  tdSeatPrice.textContent = seatPrice;

  // Append the <td> elements to the <tr>
  tr.appendChild(tdSeatNumber);
  tr.appendChild(tdSeatClass);
  tr.appendChild(tdSeatPrice);

  // Append the <tr> to the <tbody>
  tbody.appendChild(tr);
}

// Function to remove a row based on the seat number
function removeRow(seatNumber) {
  const tbody = document.querySelector("tbody.font-inter"); // Select the <tbody>
  const row = tbody.querySelector(`tr[data-seat-number="${seatNumber}"]`); // Find the row with the matching seat number
  if (row) {
    tbody.removeChild(row); // Remove the row from the table
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}











// apply button functionality
const button = document.getElementById("apply-btn");
button.addEventListener("click", function () {
  const couponInput = document.getElementById("input-field");
  //   get the input value and resolve case sensetive
  if (totalPrice >= 200) {
    const couponCode = couponInput.value.split(" ").join("").toUpperCase();
    if (couponCode === "SELL200") {
      //   count the discount and set discount amount
      const discountField = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountField.innerText = discountAmount.toFixed(2);

      // clear the input field
      couponInput.value = "";

      // set the total value after discount
      const total = document.getElementById("total");
      total.innerText = totalPrice - discountAmount;
    } else {
      alert("Invalid coupon code. Please enter 'SELL200' for the discount.");
      // clear the input field
      couponInput.value = "";
    }
  } else {
    alert("Invest $200 at least to get discount!");
    // clear the input field
    couponInput.value = "";
  }
});







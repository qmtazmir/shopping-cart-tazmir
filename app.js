function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);

  if (isIncreasing == true) {
    productNumber = productNumber + 1;
  }

  if (isIncreasing == false && productNumber > 0) {
    productNumber = productNumber - 1;
  }

  productInput.value = productNumber;

  // --------------------okkkkkk----------------

  //update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
}

///phone increase decrease event

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// handel case increase and dicrease

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});

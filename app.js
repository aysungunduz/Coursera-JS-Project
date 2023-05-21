function billingFunction() {
    if (document.querySelector("#same").checked) {
        let shippingName = document.querySelector("#shippingName").value;
        let shippingZip = document.querySelector("#shippingZip").value;
        document.querySelector("#billingName").value = shippingName;
        document.querySelector("#billingZip").value = shippingZip;
    }
    else {
        document.querySelector("#billingName").value = "";
        document.querySelector("#billingZip").value = "";
    }
}



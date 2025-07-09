

emailjs.init("moxECaD5XmqZEu5Xj");

const bookNowButton = document.getElementById("submitBooking");

bookNowButton.addEventListener("click", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("userName");
    const email = document.getElementById("userEmail");
    const phone = document.getElementById("userPhoneNumber");

    const serviceList = cartIndices.map(index => `- ${Services[index].name}`).join("\n");

    const totalPrice = cartIndices.reduce((sum, index) => sum + Services[index].price, 0);

    emailjs.send("service_0t1l1eb", "template_93kfytb", {
        from_name: fullName.value,
        email_id: email.value,
        phone: phone.value,
        service_list: serviceList,
        total_price: `$${totalPrice}`
    })
        .then(() => {
            document.getElementById("bookingMessage").textContent =
                "Thank you for booking the service. We will get back to you soon!";
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error(error);
        });
});
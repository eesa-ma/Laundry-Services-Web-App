import { Services, cartIndices } from './script.js';

const bookNowButton = document.getElementById("submitBooking");

bookNowButton.addEventListener("click", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("userName");
    const email = document.getElementById("userEmail");
    const phone = document.getElementById("userPhoneNumber");

    if (cartIndices.length === 0) {
        alert("Please select at least one service before booking.");
        return;
    }


     if (!fullName.value.trim() || !email.value.trim() || !phone.value.trim()) {
        alert("Please fill in all the required fields.");
        return;
    }

    const serviceList = cartIndices.map(index => `- ${Services[index].type}`).join("\n");

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

            setTimeout(() => {
                location.reload();
            }, 4000);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error(error);
        });
});

const qualityServices = [
    {
        img: "./images/premiunservice.png",
        name: "Premium Service",
        description: "Elevate you wardobe with out meticulous dry cleaning,ensuring garments look and feel as good as new."
    },
    {
        img: "./images/quicksupport.png",
        name: "Quick Support",
        description: "We're connected to providing prompt solutions to ensure your experience is smooth and worry-free."
    },
    {
        img: "./images/hasslefreedelivery.png",
        name: "Hassle Free Delivery",
        description: "Enjoy seamless service with our convenient pickup and delivery options, tailored to your schedule."
    },
    {
        img: "./images/affordableprices.png",
        name: "Affordable Prices",
        description: "Experience exceptional care without breaking the bank - our affordable prices makes laundry day stress-free."
    }
];

const qualitySection = document.createElement("section");
qualitySection.classList.add("flex", "justify-around", "bg-white", "p-10");


qualityServices.map(qualityService => {

    //div for each quality service
    const qualitySectionDiv = document.createElement("div");
    qualitySectionDiv.classList.add("flex", "flex-col", "items-center");

    const image = document.createElement("img");
    image.src = qualityService.img;
    image.classList.add("w-15");

    const type = document.createElement("p");
    type.textContent = qualityService.name;
    type.classList.add("font-bold", "text-xl");

    const description = document.createElement("p");
    description.textContent = qualityService.description;
    description.classList.add("max-w-xs", "text-center", "text-gray-500");

    qualitySectionDiv.append(image, type, description);

    qualitySection.append(qualitySectionDiv);

});

document.body.append(qualitySection);

const subscribeSection = document.createElement("section");
subscribeSection.classList.add("bg-sky-400", "p-20", "flex");

const headText = document.createElement("h1");
headText.textContent = "Subscribe to our newsletter.";
headText.classList.add("text-5xl", "font-bold", "text-white", "max-w-lg");

const subscribeForm = document.createElement("form");
subscribeForm.classList.add("flex", "flex-row", "items-center", "gap-4", "flex-wrap");


const userName = document.createElement("input");
userName.type = "text";
userName.name = "newsletterfullName";
userName.id = "newsletterfullName";
userName.placeholder = "Full Name";
userName.classList.add("p-3", "rounded", "shadow", "bg-gray-200", "min-w-xs");

const userEmail = document.createElement("input");
userEmail.type = "email";
userEmail.name = "newsletteruserEmail";
userEmail.id = "newsletteruserEmail";
userEmail.placeholder = "Email";
userEmail.classList.add("p-3", "rounded", "shadow", "bg-gray-200", "min-w-xs");

const subscribeButton = document.createElement("button");
subscribeButton.type = "submit";
subscribeButton.id = "subscribeButton";
subscribeButton.textContent = "Subscribe";
subscribeButton.classList.add("bg-white", "text-sky-400", "p-3", "min-w-xs", "rounded");

subscribeForm.append(userName, userEmail, subscribeButton);

subscribeSection.append(headText, subscribeForm);

document.body.append(subscribeSection);

subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Optionally show success message or do something with form data
    alert("Thanks for subscribing!");
});

const footer = document.createElement("footer");
footer.classList.add("flex", "p-10", "bg-gray-300","justify-around");

const logoDiv = document.createElement("div");
const impLinkDiv = document.createElement("div");
const contactDiv = document.createElement("div");
const followusDiv = document.createElement("div");

logoDiv.innerHTML = `
  <div class="flex flex-col items-center text-center">
    <img src="./images/logo.png" class="w-20 mb-2" />
    <p class="font-bold">About Us</p>
    <p class="w-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
`;

impLinkDiv.innerHTML = `
    <div class="flex flex-col items-center"> 
        <h3 class="font-bold">Important Links </h3>
        <ul class="text-gray-500"> 
            <li>About us</li>
            <li>Contact us</li>
            <li>privacy Policy</li>
            <li>Terms of use</li>
            <li>Refund Policy</li>
        </ul>
    </div>
`;

contactDiv.innerHTML = `
    <divclass="flex flex-col items-center">
        <h3 class="font-bold">Contact</h3>
        <p class="text-gray-500"> mail@site.com</p>
        <p class="text-gray-500">+91 9072341909</p>
    </div>
`;

followusDiv.innerHTML = `
    <div> 
        <h3 class="font-bold">Follow us </h3>
        <div class="flex gap-4"> 
            <img src="./images/instagram.png" class="w-5">
            <img src="./images/facebook.png" class="w-5">
            <img src="./images/twitter.png" class="w-5">
            <img src="./images/youtube.png" class="w-5">
        </div>
    </div>
`;

footer.append(logoDiv, impLinkDiv, contactDiv, followusDiv);

document.body.append(footer);
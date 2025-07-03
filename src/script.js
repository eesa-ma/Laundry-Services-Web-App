const herohead = document.getElementById("heroHead");
const heroDescription = document.getElementById("heroDescription");

herohead.innerHTML = "<span>Revitalize Your Clothes With Expert</span> <br> <span class='text-sky-400'>Laundry Services!</span>";

heroDescription.textContent = "From premium dry cleaning to swift wash and fold, we deliver care and convenience.Schedule a pickup and rediscover the freshness of your clothes today!";

const Services = [
    {
        image: "../assets/images/drycleaning.png",
        type: "Dry Cleaning",
        price: 200.00
    },
    {
        image: "../assets/images/washandfold.png",
        type: "Wash & Fold",
        price: 100.00
    },
    {
        image: "../assets/images/ironing.png",
        type: "Ironing",
        price: 30.00
    },
    {
        image: "../assets/images/stainremoval.png",
        type: "Stain Removal",
        price: 500.00
    },
    {
        image: "../assets/images/leather.png",
        type: "Leather & Suede Cleaning",
        price: 999.00
    },
    {
        image: "../assets/images/weddingdress.png",
        type: "Wedding Dress Cleaning",
        price: 2800.00
    }
];

const serviceTypeDisplay = document.createElement("div");
serviceTypeDisplay.id = "serviceTypeDisplay";

function displayServices() {
    Services.map(service => {
        serviceTypeDisplay.classList.add("flex", "flex-col", "gap-10", "p-5");

        const serviceTypeDivContainer = document.createElement("div");
        serviceTypeDivContainer.classList.add("flex","justify-between");

        const serviceTypeDiv = document.createElement("div");
        serviceTypeDiv.classList.add("flex","gap-5")

        const icon = document.createElement("img");
        icon.src = service.image;
        icon.classList.add("w-10");
        const serviceType = document.createElement("p");
        serviceType.textContent = service.type;
        const servicePrice = document.createElement("p");
        servicePrice.textContent = `$${service.price}`;

        servicePrice.classList.add("text-sky-500", "font-semibold");

        const addButton = document.createElement("button");
        addButton.innerHTML = `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`;
        addButton.classList.add("bg-gray-200","py-2","px-4", "rounded-xl","font-semibold","text-gray-800");
        

        serviceTypeDiv.appendChild(icon);
        serviceTypeDiv.append(serviceType);
        serviceTypeDiv.append(servicePrice);

        serviceTypeDivContainer.append(serviceTypeDiv, addButton);
        
        serviceTypeDisplay.append(serviceTypeDivContainer);
        document.getElementById("leftDivBooking").append(serviceTypeDisplay);
    });
}

displayServices();
const herohead = document.getElementById("heroHead");
const heroDescription = document.getElementById("heroDescription");

herohead.innerHTML = "<span>Revitalize Your Clothes With Expert</span> <br> <span class='text-sky-400'>Laundry Services!</span>";

heroDescription.textContent = "From premium dry cleaning to swift wash and fold, we deliver care and convenience.Schedule a pickup and rediscover the freshness of your clothes today!";

const Services = [
    {
        image: "/public/images/drycleaning.png",
        type: "Dry Cleaning",
        price: 200.00
    },
    {
        image: "/public/images/washandfold.png",
        type: "Wash & Fold",
        price: 100.00
    },
    {
        image: "/public/images/ironing.png",
        type: "Ironing",
        price: 30.00
    },
    {
        image: "/public/images/stainremoval.png",
        type: "Stain Removal",
        price: 500.00
    },
    {
        image: "/public/images/leather.png",
        type: "Leather & Suede Cleaning",
        price: 999.00
    },
    {
        image: "/public/images/weddingdress.png",
        type: "Wedding Dress Cleaning",
        price: 2800.00
    }
];

const serviceTypeDisplay = document.createElement("div");
serviceTypeDisplay.id = "serviceTypeDisplay";

function displayServices() {
    Services.map((service, index) => {
        serviceTypeDisplay.classList.add("flex", "flex-col", "gap-10", "p-5");

        const serviceTypeDivContainer = document.createElement("div");
        serviceTypeDivContainer.classList.add("flex", "justify-between");

        const serviceTypeDiv = document.createElement("div");
        serviceTypeDiv.classList.add("flex", "gap-5");

        const icon = document.createElement("img");
        icon.src = service.image;
        icon.classList.add("w-10");
        const serviceType = document.createElement("p");
        serviceType.textContent = service.type;
        const servicePrice = document.createElement("p");
        servicePrice.textContent = `$${service.price}`;

        servicePrice.classList.add("text-sky-500", "font-semibold");

        const addButton = document.createElement("button");
        addButton.id = `addButton-${index}`;
        addButton.innerHTML = `Add Item <img src="/public/images/plussymbol.png" class="inline w-4 h-4 ml-2">`;
        addButton.classList.add("bg-gray-200", "py-2", "px-4", "rounded-xl", "font-semibold", "text-gray-800");

        serviceTypeDiv.appendChild(icon);
        serviceTypeDiv.append(serviceType);
        serviceTypeDiv.append(servicePrice);

        serviceTypeDivContainer.append(serviceTypeDiv, addButton);

        serviceTypeDisplay.append(serviceTypeDivContainer);
        document.getElementById("leftDivBooking").append(serviceTypeDisplay);
    });
}

displayServices();

let serialNo = 0;
let totalPrice = 0;
let cartIndices = [];
let cartRows = [];


function addToCart(index) {
    const noItems = document.getElementById("noItems");
    noItems.classList.add("hidden");

    serialNo++;

    const tableRow = document.createElement("tr");
    const sNo = document.createElement("td");
    const serviceType = document.createElement("td");
    const servicePrice = document.createElement("td");

    sNo.textContent = serialNo;
    serviceType.textContent = Services[index].type;
    servicePrice.textContent = `$${Services[index].price}`;

    tableRow.append(sNo, serviceType, servicePrice);

    document.getElementById("cartItems").append(tableRow);

    cartIndices.push(index);
    cartRows[index] = tableRow;

}

function removeFromCart(index) {
    const row = cartRows[index];
    if (row) {
        row.remove(); 
        cartIndices = cartIndices.filter(i => i !== index);
        cartRows[index] = null; 
    }

    if (cartIndices.length === 0) {
        document.getElementById("noItems").classList.remove("hidden");
    }
}


function toggleCartItem(index) {
    const button = document.getElementById(`addButton-${index}`);
    const isAdding = button.textContent.includes("Add Item");

    if (isAdding) {
        addToCart(index);
        button.innerHTML = `Remove Item <img src="/public/images/minussymbol.png" class="inline w-4 h-4">`;

    } else {
        removeFromCart(index);
        button.innerHTML = `Add Item <img src="/public/images/plussymbol.png" class="inline w-4 h-4 ml-2">`;

    }
    findTotalPrice();
}

function findTotalPrice() {
    totalPrice = 0;
    cartIndices.forEach(index => {
        totalPrice = totalPrice + Services[index].price;

    });
    document.getElementById("totalAmount").textContent = `$${totalPrice}`;
}

Services.forEach((service, index) => {
    document.getElementById(`addButton-${index}`).addEventListener("click", () => {
        toggleCartItem(index);
    });
});


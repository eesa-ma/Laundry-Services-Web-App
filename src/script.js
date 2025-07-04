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
    Services.map((service,index) => {
        serviceTypeDisplay.classList.add("flex", "flex-col", "gap-10", "p-5");

        const serviceTypeDivContainer = document.createElement("div");
        serviceTypeDivContainer.classList.add("flex","justify-between");

        const serviceTypeDiv = document.createElement("div");
        serviceTypeDiv.classList.add("flex","gap-5");

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

const addButton0 = document.getElementById("addButton-0");
const addButton1 = document.getElementById("addButton-1");
const addButton2 = document.getElementById("addButton-2");
const addButton3 = document.getElementById("addButton-3");
const addButton4 = document.getElementById("addButton-4");
const addButton5 = document.getElementById("addButton-5");

let serialNo = 0;

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

    tableRow.append(serialNo,serviceType,servicePrice);

    document.getElementById("cartItems").append(tableRow);

}



addButton0.addEventListener("click",() => {
    if(addButton0.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(0);
        addButton0.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }
    

});
addButton1.addEventListener("click",() => {
    if(addButton1.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(1);
        addButton1.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }

});
addButton2.addEventListener("click",() => {
    if(addButton2.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(2);
        addButton2.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }

});
addButton3.addEventListener("click",() => {
    if(addButton3.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(3);
        addButton3.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }

});
addButton4.addEventListener("click",() => {
    if(addButton4.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(4);
        addButton4.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }

});
addButton5.addEventListener("click",() => {
    if(addButton5.innerHTML === `Add Item <img src="../assets/images/plussymbol.png" class="inline w-4 h-4 ml-2">`) {
        addToCart(5);
        addButton5.innerHTML = `Remove Item <img src="../assets/images/minussymbol.png" class="inline w-4 h-4">`;
    }

});
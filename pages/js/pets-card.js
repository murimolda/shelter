document.addEventListener("DOMContentLoaded", function () {


    const pets = [
        {
            "registration code": "000001",
            "name": "Jennifer",
            "img": "../assets/images/pets-cards-images/pets-jennifer-image.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "registration code": "000002",
            "name": "Sophia",
            "img": "../assets/images/pets-cards-images/pets-sophia-image.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "registration code": "000003",
            "name": "Woody",
            "img": "../assets/images/pets-cards-images/pets-woody-image.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "registration code": "000004",
            "name": "Scarlett",
            "img": "../assets/images/pets-cards-images/pets-scarlett-image.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "registration code": "000005",
            "name": "Katrine",
            "img": "../assets/images/pets-cards-images/pets-katrine-image.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "registration code": "000006",
            "name": "Timmy",
            "img": "../assets/images/pets-cards-images/pets-timmy-image.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "registration code": "000007",
            "name": "Freddie",
            "img": "../assets/images/pets-cards-images/pets-freddie-image.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "registration code": "000008",
            "name": "Charly",
            "img": "../assets/images/pets-cards-images/pets-charly-image.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        },
    ]

    const petsCardWrapper = document.querySelector('.pets-cards-wrapper');

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    window.addEventListener('load', function () {
        addPetsCards();
    })

    function createPetCard(number) {

        let petCard = document.createElement("div");
        petCard.className = "pet-card";
        petCard.classList.add("hidden");
        petCard.dataset.code = `${pets[number]["registration code"]}`;

        let petCardImage = document.createElement("div");
        petCardImage.className = "pet-card-image";
        petCardImage.innerHTML = `<img src = "${pets[number]["img"]}" alt="${pets[number]["type"]} ${pets[number]["name"]}">`;

        let petCardTitle = document.createElement("h4");
        petCardTitle.className = "pet-card-title";
        petCardTitle.classList.add("title");
        petCardTitle.innerHTML = `${pets[number]["name"]}`;

        let petCardButton = document.createElement("button");
        petCardButton.className = "pet-card-button";
        petCardButton.classList.add("button");
        petCardButton.innerHTML = `Learn more`;

        petCard.append(petCardImage, petCardTitle, petCardButton);
        petsCardWrapper.append(petCard);
    }

    function addPetsCards() {
        let number;
        let count = 0;
        let check = [];
        while (count < 8) {
            number = getRandomNumber(0, pets.length);
            if (!check.includes(number)) {
                check.push(number);
                createPetCard(number);
                count++;
            }
        }
        changeCard(petsCardWrapper);
        modalOpen(petsCardWrapper);
    }

    let cardVisibleQuantity = 0;
    if (window.innerWidth >= 1280) {
        cardVisibleQuantity = 3;
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        cardVisibleQuantity = 2;
    } else if (window.innerWidth < 768) {
        cardVisibleQuantity = 1;
    }

    let petCardCode = [];

    function changeCard(collection) {
        let index;
        let step = 0;
        let check = [];

        for (let i = 0; i < collection.children.length; i++) {
            while (step < cardVisibleQuantity) {
                index = getRandomNumber(0, pets.length);
                if (!check.includes(index)) {
                    if (petCardCode.includes(collection.children[index].dataset.code)) {
                        index = getRandomNumber(0, pets.length);
                    } else {
                        collection.children[index].classList.remove("hidden");
                        collection.children[index].classList.add("active");
                        check.push(index);
                        petCardCode.push(collection.children[index].dataset.code);
                        step++;
                    }
                }
            }
        }
        console.log(petCardCode);

    }



    const arrowLeft = document.querySelector('.slider-left-arrow');
    const arrowRight = document.querySelector('.slider-right-arrow');

    arrowLeft.addEventListener('click', function () {
        petsCardWrapper.classList.add('left-move');
        let petCard = document.querySelectorAll('.pet-card');
        setTimeout(() => {
            for (let i = 0; i < petCard.length; i++) {
                petCard[i].remove()
            }
            petsCardWrapper.classList.remove('left-move')
            addPetsCards();
            petCardCode.splice(0, cardVisibleQuantity);
        }, 700);
    })

    arrowRight.addEventListener('click', function () {
        petsCardWrapper.classList.add('right-move');
        let petCard = document.querySelectorAll('.pet-card');
        setTimeout(() => {
            for (let i = 0; i < petCard.length; i++) {
                petCard[i].remove()
            }
            petsCardWrapper.classList.remove('right-move')
            addPetsCards();
            petCardCode.splice(0, cardVisibleQuantity);
        }, 700);
    })

    const modal = document.querySelector('.modal');
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modalButton = document.querySelector('.modal-close');
    const body = document.querySelector("body");

    function createModal(number) {

        let modalCard = document.createElement("div");
        modalCard.className = "modal-card";

        let modalCardImage = document.createElement("div");
        modalCardImage.className = "modal-image";
        modalCardImage.innerHTML = `<img src = "${pets[number]["img"]}" alt="${pets[number]["type"]} ${pets[number]["name"]}">`;

        let modalInfoBlock = document.createElement("div");
        modalInfoBlock.className = "modal-info-block";

        let modalTitle = document.createElement("h2");
        modalTitle.className = "modal-title";
        modalTitle.classList.add("title");
        modalTitle.innerHTML = `${pets[number]["name"]}`;

        let modalInfoTitle = document.createElement("div");
        modalInfoTitle.className = "modal-info-title";
        modalInfoTitle.innerHTML = `<h3 class="modal-second-title title">${pets[number]["type"]}</h3>
                <span> - </span>
                <h3 class="modal-second-title title">${pets[number]["breed"]}</h3>`;

        let modalText = document.createElement("p");
        modalText.className = "modal-text";
        modalText.innerHTML = `${pets[number]["description"]}`;

        let modalList = document.createElement("ul");
        modalList.className = "modal-list";
        modalList.innerHTML = `<li class="modal-list-item"><b>Age:</b>&ensp;${pets[number]["age"]}</li>
                <li class="modal-list-item"><b>Inoculations:</b>&ensp;${pets[number]["inoculations"]}</li>
                <li class="modal-list-item"><b>Diseases:</b>&ensp;${pets[number]["diseases"]}</li>
                <li class="modal-list-item"><b>Parasites:</b>&ensp;${pets[number]["parasites"]}</li>`;


        modalInfoBlock.append(modalTitle, modalInfoTitle, modalText, modalList);
        modalCard.append(modalCardImage, modalInfoBlock);
        modalWrapper.append(modalCard);

    }

    function modalOpen(colection) {
        for (const elem of colection.children) {
            elem.addEventListener('click', function () {
                for (let i = 0; i < pets.length; i++) {
                    if (pets[i]["registration code"] === this.dataset.code) {
                        createModal(i);
                        modal.classList.add("open");
                        body.classList.add("not-scroll");
                    }
                }
            });
        }
    }

    function modalClose() {
        modal.classList.remove("open");
        setTimeout(() => {
            document.querySelector('.modal-card').remove();
        }, 1500);
        body.classList.remove("not-scroll");
    }

    modalButton.addEventListener('click', function (event) {
        modalClose();
        event.stopPropagation()
    });

    modalWrapper.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    modal.addEventListener('click', function () {
        modalClose();
    });

    modal.addEventListener('mouseout', function (event) {
        event.stopPropagation();
        console.log('+');

    }, true);


























});


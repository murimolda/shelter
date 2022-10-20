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

    const ourPetsdWrapper = document.querySelector('.our-pets-wrapper');
    const ourPetsArray = [];


    function getRandomNumber(min, max) {
        if (max !== 1) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }

    window.addEventListener('load', function () {
        createOurPetsArray();
        addOurPetsPages();
        getPageNumber(ourPetsdWrapper);
    })

    function createOurPetsCard(number) {
        let ourPetsCard = document.createElement("div");
        ourPetsCard.className = "our-pets-card";
        ourPetsCard.dataset.code = `${pets[number]["registration code"]}`;


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

        ourPetsCard.append(petCardImage, petCardTitle, petCardButton);
        ourPetsArray.push(ourPetsCard);
    }

    function createOurPetsArray() {
        for (let i = 0; i < pets.length; i++) {
            let count = 0;
            while (count < 6) {
                createOurPetsCard(i);
                count++;
            }
        }
    }


    let petCardCount = 0;
    let petsPageCount = 0;

    if (window.innerWidth >= 1280) {
        petCardCount = 8;
        petsPageCount = 6;
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        petCardCount = 6;
        petsPageCount = 8;
    } else if (window.innerWidth < 768) {
        petCardCount = 3;
        petsPageCount = 16;
    }


    function createOurPetsPage() {
        let ourPetsPage = document.createElement("div");
        ourPetsPage.className = "our-pets-page";
        ourPetsPage.classList.add("hidden");

        let count = 0;
        let index;
        let check = [];
        let petCardCode = [];

        while (count < petCardCount) {
            if (ourPetsArray.length === petCardCount) {
                for (let i = 0; i < ourPetsArray.length; i++) {
                    ourPetsPage.append(ourPetsArray[i]);
                    count++;
                }
                ourPetsArray.splice(0, petCardCount);
            } else {
                index = getRandomNumber(0, ourPetsArray.length);
                if (!check.includes(index)) {
                    if (petCardCode.includes(ourPetsArray[index].dataset.code)) {
                        index = getRandomNumber(0, ourPetsArray);
                    } else {
                        ourPetsPage.append(ourPetsArray[index]);
                        petCardCode.push(ourPetsArray[index].dataset.code);
                        ourPetsArray.splice(ourPetsArray.indexOf(ourPetsArray[index]), 1);
                        count++;
                    }
                }
            }
            ourPetsdWrapper.append(ourPetsPage);
        }
        modalOpen(ourPetsPage);
        console.log('+');
    }

    function addOurPetsPages() {
        let count = 0;
        while (count < petsPageCount) {
            createOurPetsPage();
            count++;
        }

        ourPetsdWrapper.children[0].classList.remove('hidden');
        ourPetsdWrapper.children[0].classList.add('active');
    }

    const firstPageButton = document.querySelector('.first-page-button');
    const lastPageButton = document.querySelector('.last-page-button');
    const leftArrowButton = document.querySelector('.left-arrow-button');
    const rightArrowButton = document.querySelector('.right-arrow-button');
    const numberButton = document.querySelector('.number-button');

    firstPageButton.addEventListener('click', function () {
        for (let i = 0; i < ourPetsdWrapper.children.length; i++) {
            if (ourPetsdWrapper.children[i].classList.contains('active')) {
                ourPetsdWrapper.children[i].classList.add('left-move');
                setTimeout(() => {
                    ourPetsdWrapper.children[i].classList.add('hidden');
                    ourPetsdWrapper.children[i].classList.remove('active');
                    ourPetsdWrapper.children[i].classList.remove('left-move');
                }, 700);
            }
        }
        ourPetsdWrapper.children[0].classList.toggle('hidden');
        ourPetsdWrapper.children[0].classList.add('active');
        lastPageButton.classList.remove('inactive');
        lastPageButton.classList.add('active');
        firstPageButton.classList.remove('active');
        firstPageButton.classList.add('inactive');
        rightArrowButton.classList.remove('inactive');
        rightArrowButton.classList.add('active');
        leftArrowButton.classList.remove('active');
        leftArrowButton.classList.add('inactive');
        getPageNumberFirst()
    })

    lastPageButton.addEventListener('click', function () {
        for (let i = 0; i < ourPetsdWrapper.children.length; i++) {
            if (ourPetsdWrapper.children[i].classList.contains('active')) {
                ourPetsdWrapper.children[i].classList.add('right-move');
                setTimeout(() => {
                    ourPetsdWrapper.children[i].classList.remove('active');
                    ourPetsdWrapper.children[i].classList.add('hidden');
                    ourPetsdWrapper.children[i].classList.remove('right-move');
                }, 700);
            }
        }
        ourPetsdWrapper.children[ourPetsdWrapper.children.length - 1].classList.toggle('hidden');
        ourPetsdWrapper.children[ourPetsdWrapper.children.length - 1].classList.add('active');
        firstPageButton.classList.remove('inactive');
        firstPageButton.classList.add('active');
        lastPageButton.classList.remove('active');
        lastPageButton.classList.add('inactive');
        leftArrowButton.classList.remove('inactive');
        leftArrowButton.classList.add('active');
        rightArrowButton.classList.remove('active');
        rightArrowButton.classList.add('inactive');
        getPageNumber(ourPetsdWrapper);
    })

    leftArrowButton.addEventListener('click', function () {
        let index;
        for (let i = 0; i < ourPetsdWrapper.children.length; i++) {
            if (ourPetsdWrapper.children[i].classList.contains('active') && i !== 0) {
                ourPetsdWrapper.children[i].classList.add('left-move');
                setTimeout(() => {
                    ourPetsdWrapper.children[i].classList.add('hidden');
                    ourPetsdWrapper.children[i].classList.remove('active');
                    ourPetsdWrapper.children[i].classList.remove('left-move');
                }, 700);
                index = i - 1;
            }
        }
        ourPetsdWrapper.children[index].classList.toggle('hidden');
        ourPetsdWrapper.children[index].classList.add('active');
        if (index !== 0) {
            lastPageButton.classList.remove('inactive');
            lastPageButton.classList.add('active');
            rightArrowButton.classList.remove('inactive');
            rightArrowButton.classList.add('active');
        } else {
            lastPageButton.classList.remove('inactive');
            lastPageButton.classList.add('active');
            firstPageButton.classList.remove('active');
            firstPageButton.classList.add('inactive');
            rightArrowButton.classList.remove('inactive');
            rightArrowButton.classList.add('active');
            leftArrowButton.classList.remove('active');
            leftArrowButton.classList.add('inactive');
        }
        getPageNumberLeft(ourPetsdWrapper);
    })

    rightArrowButton.addEventListener('click', function () {
        let index;
        for (let i = 0; i < ourPetsdWrapper.children.length; i++) {
            if (ourPetsdWrapper.children[i].classList.contains('active') && i !== (ourPetsdWrapper.children.length - 1)) {
                ourPetsdWrapper.children[i].classList.add('right-move');
                setTimeout(() => {
                    ourPetsdWrapper.children[i].classList.add('hidden');
                    ourPetsdWrapper.children[i].classList.remove('active');
                    ourPetsdWrapper.children[i].classList.remove('right-move');
                }, 700);
                index = i + 1;
            }
        }
        ourPetsdWrapper.children[index].classList.toggle('hidden');
        ourPetsdWrapper.children[index].classList.add('active');
        if (index !== (ourPetsdWrapper.children.length - 1)) {
            firstPageButton.classList.remove('inactive');
            firstPageButton.classList.add('active');
            leftArrowButton.classList.remove('inactive');
            leftArrowButton.classList.add('active');
        } else {
            firstPageButton.classList.remove('inactive');
            firstPageButton.classList.add('active');
            lastPageButton.classList.remove('active');
            lastPageButton.classList.add('inactive');
            leftArrowButton.classList.remove('inactive');
            leftArrowButton.classList.add('active');
            rightArrowButton.classList.remove('active');
            rightArrowButton.classList.add('inactive');
        }
        getPageNumber(ourPetsdWrapper);
    })

    function getPageNumber(collection) {
        for (let i = 0; i < collection.children.length; i++) {
            if (collection.children[i].classList.contains('active')) {
                numberButton.setAttribute('value', i + 1);
                numberButton.innerHTML = numberButton.getAttribute('value');
            };
        }
    }

    function getPageNumberLeft(collection) {
        for (let i = 0; i < collection.children.length; i++) {
            if (collection.children[i].classList.contains('active')) {
                numberButton.setAttribute('value', i);
                numberButton.innerHTML = numberButton.getAttribute('value');
            };
        }
    }

    function getPageNumberFirst() {
        numberButton.setAttribute('value', 1);
        numberButton.innerHTML = numberButton.getAttribute('value');
    }

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

    function modalOpen(collection) {
        for (const elem of collection.children) {
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

    modal.addEventListener('click', function (event) {
        modalClose();
    });






















});


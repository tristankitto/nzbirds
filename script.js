//define variables to be used later
let birdsData = [];
let showBirds;
let isMobileFilter = false;
const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

//fetch data from JSON file and create each bird on page
function fetchData() {
    fetch('nzbird.json')
        .then(response => response.json())
        .then(data => {
            const birdsContainer = document.getElementById("birdsContainer");
            birdsData = data;

            showBirds = function (birds) {
                birdsContainer.innerHTML = '';

                birds.forEach(bird => {
                    const birdElement = document.createElement('div');
                    birdElement.classList.add('grid-item');
                    const imageElement = document.createElement('img');
                    const nameCreditElement = document.createElement('div');
                    nameCreditElement.classList.add('name-credit');
                    const overlayElement = document.createElement('div');
                    overlayElement.classList.add('overlay');
                    const secondaryInfo = document.createElement('div');
                    secondaryInfo.classList.add('secondary-info');
                    const secondaryTitles = document.createElement('div');
                    secondaryTitles.classList.add('secondary-titles');
                    const secondaryValues = document.createElement('div');
                    secondaryValues.classList.add('secondary-values');
                    const hiddenSecondaryTitles = document.createElement('div');
                    hiddenSecondaryTitles.classList.add('hidden-titles');
                    const hiddenSecondaryValues = document.createElement('div');
                    hiddenSecondaryValues.classList.add('hidden-values');
                    const primaryNameElement = document.createElement('p');
                    primaryNameElement.id = 'primary-name';
                    const englishNameElement = document.createElement('p');
                    englishNameElement.id = 'english-name';
                    const statusElement = document.createElement('p');
                    const scientificNameElement = document.createElement('p');
                    const weightElement = document.createElement('p');
                    const lengthElement = document.createElement('p');

                    const photoCreditElement = document.createElement('p');
                    photoCreditElement.classList.add('credit');

                    const statusDot = document.createElement('span');
                    statusDot.classList.add('status-dot');
                    statusDot.classList.add('photo-dot');

                    imageElement.src = bird.photo.source;
                    imageElement.alt = bird.primary_name;

                    const status = bird.status;
                    switch (status) {
                        case 'Not Threatened':
                            document.querySelector('.notthr-dot').style.backgroundColor = '#02a028';
                            birdElement.style.setProperty("--glow-colour", '#02a028d0');
                            statusDot.style.backgroundColor = '#02a028';
                            overlayElement.style.backgroundColor = '#02a028d0';
                            break;
                        case 'Naturally Uncommon':
                            document.querySelector('.natunc-dot').style.backgroundColor = '#649a31';
                            birdElement.style.setProperty("--glow-colour", '#649a31d0');
                            statusDot.style.backgroundColor = '#649a31';
                            overlayElement.style.backgroundColor = '#649a31d0';
                            break;
                        case 'Relict':
                            document.querySelector('.rel-dot').style.backgroundColor = '#99cb68';
                            birdElement.style.setProperty("--glow-colour", '#99cb68d0');
                            statusDot.style.backgroundColor = '#99cb68';
                            overlayElement.style.backgroundColor = '#99cb68d0';
                            break;
                        case 'Recovering':
                            document.querySelector('.rec-dot').style.backgroundColor = '#fecc33';
                            birdElement.style.setProperty("--glow-colour", '#fecc33d0');
                            statusDot.style.backgroundColor = '#fecc33';
                            overlayElement.style.backgroundColor = '#fecc33d0';
                            break;
                        case 'Declining':
                            document.querySelector('.dec-dot').style.backgroundColor = '#fe9a01';
                            birdElement.style.setProperty("--glow-colour", '#fe9a01d0');
                            statusDot.style.backgroundColor = '#fe9a01';
                            overlayElement.style.backgroundColor = '#fe9a01d0';
                            break;
                        case 'Nationally Increasing':
                            document.querySelector('.natinc-dot').style.backgroundColor = '#c26967';
                            birdElement.style.setProperty("--glow-colour", '#c26967d0');
                            statusDot.style.backgroundColor = '#c26967';
                            overlayElement.style.backgroundColor = '#c26967d0';
                            break;
                        case 'Nationally Vulnerable':
                            document.querySelector('.natvul-dot').style.backgroundColor = '#9b0000';
                            birdElement.style.setProperty("--glow-colour", '#9b0000d0');
                            statusDot.style.backgroundColor = '#9b0000';
                            overlayElement.style.backgroundColor = '#9b0000d0';
                            break;
                        case 'Nationally Endangered':
                            document.querySelector('.natend-dot').style.backgroundColor = '#660032';
                            birdElement.style.setProperty("--glow-colour", '#660032d0');
                            statusDot.style.backgroundColor = '#660032';
                            overlayElement.style.backgroundColor = '#660032d0';
                            break;
                        case 'Nationally Critical':
                            document.querySelector('.natcri-dot').style.backgroundColor = '#320033';
                            birdElement.style.setProperty("--glow-colour", '#320033d0');
                            statusDot.style.backgroundColor = '#320033';
                            overlayElement.style.backgroundColor = '#320033d0';
                            break;
                        default:
                            document.querySelector('.datdef-dot').style.backgroundColor = 'black';
                            birdElement.style.setProperty("--glow-colour", 'black');
                            statusDot.style.backgroundColor = 'black';
                            overlayElement.style.backgroundColor = '#000000d0';
                            break;
                    }


                    primaryNameElement.textContent = bird.primary_name;
                    englishNameElement.textContent = bird.english_name;
                    statusElement.textContent = status;
                    const statusTitle = document.createElement('p');
                    statusTitle.textContent = 'Status';
                    scientificNameElement.textContent = bird.scientific_name;
                    const scientificTitle = document.createElement('p');
                    scientificTitle.textContent = 'Scientific Name';
                    weightElement.textContent = bird.size.weight.value + bird.size.weight.units;
                    const weightTitle = document.createElement('p');
                    weightTitle.textContent = 'Weight';
                    lengthElement.textContent = bird.size.length.value + bird.size.length.units;
                    const lengthTitle = document.createElement('p');
                    lengthTitle.textContent = 'Length';
                    const familyTitle = document.createElement('p');
                    familyTitle.textContent = 'Family';
                    const familyElement = document.createElement('p');
                    familyElement.textContent = bird.family;
                    const orderTitle = document.createElement('p');
                    orderTitle.textContent = 'Order';
                    const orderElement = document.createElement('p');
                    orderElement.textContent = bird.order;

                    photoCreditElement.textContent = bird.photo.credit;

                    overlayElement.appendChild(englishNameElement);

                    nameCreditElement.appendChild(primaryNameElement);
                    nameCreditElement.appendChild(photoCreditElement);
                    secondaryTitles.appendChild(statusTitle);
                    secondaryValues.appendChild(statusElement);
                    secondaryTitles.appendChild(scientificTitle);
                    secondaryValues.appendChild(scientificNameElement);
                    hiddenSecondaryTitles.appendChild(familyTitle);
                    hiddenSecondaryValues.appendChild(familyElement);
                    hiddenSecondaryTitles.appendChild(orderTitle);
                    hiddenSecondaryValues.appendChild(orderElement);
                    hiddenSecondaryTitles.appendChild(weightTitle);
                    hiddenSecondaryTitles.appendChild(lengthTitle);
                    hiddenSecondaryValues.appendChild(weightElement);
                    hiddenSecondaryValues.appendChild(lengthElement);
                    secondaryTitles.appendChild(hiddenSecondaryTitles);
                    secondaryValues.appendChild(hiddenSecondaryValues);
                    overlayElement.appendChild(nameCreditElement);
                    secondaryInfo.appendChild(secondaryTitles);
                    secondaryInfo.appendChild(secondaryValues);
                    overlayElement.appendChild(secondaryInfo);
                    birdElement.appendChild(imageElement);
                    birdElement.appendChild(overlayElement);
                    birdElement.appendChild(statusDot);
                    birdsContainer.appendChild(birdElement);
                });
            }

            filter();
        })
        .catch(error => console.error(error))
}

fetchData();

//filter birds based on given inputs
function filter() {
    const maoriCharacters = {
        'ā': 'a',
        'ē': 'e',
        'ī': 'i',
        'ō': 'o',
        'ū': 'u',
    };

    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value.toLowerCase().normalize('NFC').replace(/[āēīōū]/g, match => maoriCharacters[match]);

    const statusSelect = document.getElementById('status');
    const selectedStatus = statusSelect.value;

    const sortBySelect = document.getElementById('sort-by');
    const selectedSortBy = sortBySelect.value;

    const filteredBirds = birdsData.filter(bird => {
        const primaryName = bird.primary_name.toLowerCase().normalize('NFC');
        const englishName = bird.english_name.toLowerCase();
        const scientificName = bird.scientific_name.toLowerCase();
        const order = bird.order.toLowerCase();
        const family = bird.family.toLowerCase();
        const photoCredit = bird.photo.credit.toLowerCase();

        const normalizedPrimaryName = primaryName.replace(/[āēīōū]/g, match => maoriCharacters[match]);

        const matchesSearchTerm = (
            normalizedPrimaryName.includes(searchTerm) ||
            englishName.includes(searchTerm) ||
            scientificName.includes(searchTerm) ||
            order.includes(searchTerm) ||
            family.includes(searchTerm) ||
            photoCredit.includes(searchTerm) ||
            bird.other_names.some(name => name.toLowerCase().normalize("NFC").replace(/[āēīōū]/g, match => maoriCharacters[match]).includes(searchTerm))
        );

        const matchesStatus = selectedStatus === 'All' || bird.status === selectedStatus;

        return matchesSearchTerm && matchesStatus;
    });

    switch (selectedSortBy) {
        case 'Primary Name':
            filteredBirds.sort((a, b) => a.primary_name.localeCompare(b.primary_name));
            break;
        case 'English Name':
            filteredBirds.sort((a, b) => a.english_name.localeCompare(b.english_name));
            break;
        case 'Scientific Name':
            filteredBirds.sort((a, b) => a.scientific_name.localeCompare(b.scientific_name));
            break;
        case 'Lightest to Heaviest':
            filteredBirds.sort((a, b) => a.size.weight.value - b.size.weight.value);
            break;
        case 'Heaviest to Lightest':
            filteredBirds.sort((a, b) => b.size.weight.value - a.size.weight.value);
            break;
        case 'Shortest to Longest':
            filteredBirds.sort((a, b) => a.size.length.value - b.size.length.value);
            break;
        case 'Longest to Shortest':
            filteredBirds.sort((a, b) => b.size.length.value - a.size.length.value);
            break;
    }

    showBirds(filteredBirds);

    if (isMobileFilter) {
        toggleSidebar()
        isMobileFilter = false;
    }
}

function filterByStatus(status) {
    const statusSelect = document.getElementById('status');
    if (statusSelect.value == status) {
        statusSelect.value = "All";
        filter();
        return;
    }
    statusSelect.value = status;
    filter();
}

function mobileFilter() {
    isMobileFilter = true;
    filter();
}

document.getElementById('search').addEventListener('input', filter);
document.getElementById('status').addEventListener('input', filter);
document.getElementById('sort-by').addEventListener('input', filter);
document.getElementById('filter-button').addEventListener('click', mobileFilter);

//handle sidebar when in mobile mode
const hamburgerIcon = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');
const gridContainer = document.querySelector('.grid-container');

function toggleSidebar() {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        gridContainer.style.display = 'none';
        document.body.style.overflowY = 'hidden';
    } else {
        sidebar.style.display = 'none';
        gridContainer.style.display = 'grid';
        document.body.style.overflowY = 'visible';
    }
}

hamburgerIcon.addEventListener('click', toggleSidebar);

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleWindowResize() {
    if (window.innerWidth < (40 * fontSize) && !isMobileDevice()) {
        sidebar.style.display = 'none';
        gridContainer.style.display = 'grid';
        document.body.style.overflowY = 'visible';
    } else if (window.innerWidth >= (40 * fontSize)) {
        sidebar.style.display = 'block';
        gridContainer.style.display = 'grid';
        document.body.style.overflowY = 'visible';
    }
}

window.addEventListener('resize', handleWindowResize);
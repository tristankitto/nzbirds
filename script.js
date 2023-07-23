function fetchData() {
    fetch('nzbird.json')
        .then(response => response.json())
        .then(data => {
            const birdsContainer = document.getElementById("birdsContainer");
            let birdsData = data;

            function showBirds(birds) {

                birds.forEach(bird => {
                    const birdElement = document.createElement('div');
                    birdElement.classList.add('grid-item');
                    const imageElement = document.createElement('img');
                    const overlayElement = document.createElement('div');
                    overlayElement.classList.add('overlay');
                    const primaryNameElement = document.createElement('p');
                    primaryNameElement.id = 'primary-name';
                    const englishNameElement = document.createElement('p');
                    const statusElement = document.createElement('p');

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
                            statusDot.style.backgroundColor = '#02a028';
                            overlayElement.style.backgroundColor = '#02a028d0';
                            break;
                        case 'Naturally Uncommon':
                            document.querySelector('.natunc-dot').style.backgroundColor = '#649a31';
                            statusDot.style.backgroundColor = '#649a31';
                            overlayElement.style.backgroundColor = '#649a31d0';
                            break;
                        case 'Relict':
                            document.querySelector('.rel-dot').style.backgroundColor = '#99cb68';
                            statusDot.style.backgroundColor = '#99cb68';
                            overlayElement.style.backgroundColor = '#99cb68d0';
                            break;
                        case 'Recovering':
                            document.querySelector('.rec-dot').style.backgroundColor = '#fecc33';
                            statusDot.style.backgroundColor = '#fecc33';
                            overlayElement.style.backgroundColor = '#fecc33d0';
                            break;
                        case 'Declining':
                            document.querySelector('.dec-dot').style.backgroundColor = '#fe9a01';
                            statusDot.style.backgroundColor = '#fe9a01';
                            overlayElement.style.backgroundColor = '#fe9a01d0';
                            break;
                        case 'Nationally Increasing':
                            document.querySelector('.natinc-dot').style.backgroundColor = '#c26967';
                            statusDot.style.backgroundColor = '#c26967';
                            overlayElement.style.backgroundColor = '#c26967d0';
                            break;
                        case 'Nationally Vulnerable':
                            document.querySelector('.natvul-dot').style.backgroundColor = '#9b0000';
                            statusDot.style.backgroundColor = '#9b0000';
                            overlayElement.style.backgroundColor = '#9b0000d0';
                            break;
                        case 'Nationally Endangered':
                            document.querySelector('.natend-dot').style.backgroundColor = '#660032';
                            statusDot.style.backgroundColor = '#660032';
                            overlayElement.style.backgroundColor = '#660032d0';
                            break;
                        case 'Nationally Critical':
                            document.querySelector('.natcri-dot').style.backgroundColor = '#320033';
                            statusDot.style.backgroundColor = '#320033';
                            overlayElement.style.backgroundColor = '#320033d0';
                            break;
                        default:
                            document.querySelector('.datdef-dot').style.backgroundColor = 'black';
                            statusDot.style.backgroundColor = 'black';
                            overlayElement.style.backgroundColor = '#000000d0';
                            break;
                    }

                    primaryNameElement.textContent = bird.primary_name;
                    englishNameElement.textContent = bird.english_name;
                    statusElement.textContent = status;
                    photoCreditElement.textContent = bird.photo.credit;

                    overlayElement.appendChild(primaryNameElement);
                    overlayElement.appendChild(englishNameElement);
                    overlayElement.appendChild(statusElement);
                    birdElement.appendChild(photoCreditElement);
                    birdElement.appendChild(imageElement);
                    birdElement.appendChild(overlayElement);
                    birdElement.appendChild(statusDot);
                    birdsContainer.appendChild(birdElement);
                });
            }

            showBirds(birdsData);
        })
        .catch(error => console.error(error))
}

fetchData();

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

const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

function handleWindowResize() {
    if (window.innerWidth < (40 * fontSize)) {
        sidebar.style.display = 'none';
        gridContainer.style.display = 'grid';
        document.body.style.overflowY = 'visible';
    }
    else if (window.innerWidth >= (40 * fontSize)) {
        sidebar.style.display = 'block';
        gridContainer.style.display = 'grid';
        document.body.style.overflowY = 'visible';
    }
}

window.addEventListener('resize', handleWindowResize);

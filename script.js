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
                    primaryNameElement.classList.add('primary-name');
                    const englishNameElement = document.createElement('p');
                    const statusElement = document.createElement('p');

                    const photoCreditElement = document.createElement('p');
                    photoCreditElement.classList.add('credit');

                    const statusDot = document.createElement('span');
                    statusDot.classList.add('status-dot');

                    imageElement.src = bird.photo.source;
                    imageElement.alt = bird.primary_name;

                    const status = bird.status;
                    switch (status) {
                        case 'Not Threatened':
                            statusDot.style.backgroundColor = '#02a028';
                            break;
                        case 'Naturally Uncommon':
                            statusDot.style.backgroundColor = '#649a31';
                            break;
                        case 'Relict':
                            statusDot.style.backgroundColor = '#99cb68';
                            break;
                        case 'Recovering':
                            statusDot.style.backgroundColor = '#fecc33';
                            break;
                        case 'Declining':
                            statusDot.style.backgroundColor = '#fe9a01';
                            break;
                        case 'Nationally Increasing':
                            statusDot.style.backgroundColor = '#c26967';
                            break;
                        case 'Nationally Vulnerable':
                            statusDot.style.backgroundColor = '#9b0000';
                            break;
                        case 'Nationally Endangered':
                            statusDot.style.backgroundColor = '#660032';
                            break;
                        case 'Nationally Critical':
                            statusDot.style.backgroundColor = '#320033';
                            break;
                        default:
                            statusDot.style.backgroundColor = 'black';
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
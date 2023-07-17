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
                    statusDot.classList.add('photo-dot');

                    imageElement.src = bird.photo.source;
                    imageElement.alt = bird.primary_name;

                    const status = bird.status;
                    switch (status) {
                        case 'Not Threatened':
                            statusDot.classList.add('notthr-dot');
                            break;
                        case 'Naturally Uncommon':
                            statusDot.classList.add('natunc-dot');
                            break;
                        case 'Relict':
                            statusDot.classList.add('rel-dot');
                            break;
                        case 'Recovering':
                            statusDot.classList.add('rec-dot');
                            break;
                        case 'Declining':
                            statusDot.classList.add('dec-dot');
                            break;
                        case 'Nationally Increasing':
                            statusDot.classList.add('natinc-dot');
                            break;
                        case 'Nationally Vulnerable':
                            statusDot.classList.add('natvul-dot');
                            break;
                        case 'Nationally Endangered':
                            statusDot.classList.add('natend-dot');
                            break;
                        case 'Nationally Critical':
                            statusDot.classList.add('natcri-dot');
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
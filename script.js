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
                    const englishNameElement = document.createElement('p');
                    const statusElement = document.createElement('p');
                    const photoCreditElement = document.createElement('p');

                    const statusDot = document.createElement('span');
                    statusDot.classList.add('dot');

                    imageElement.src = bird.photo.source;
                    imageElement.alt = bird.primary_name;

                    primaryNameElement.textContent = bird.primary_name;
                    englishNameElement.textContent = bird.english_name;
                    statusElement.textContent = bird.status;
                    photoCreditElement.textContent = `Photo Credit: ${bird.photo.credit}`;

                    overlayElement.appendChild(primaryNameElement);
                    overlayElement.appendChild(englishNameElement);
                    overlayElement.appendChild(statusElement);
                    overlayElement.appendChild(photoCreditElement);
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
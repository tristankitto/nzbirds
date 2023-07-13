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

                    imageElement.src = bird.photo.source;
                    imageElement.alt = bird.primary_name;

                    primaryNameElement.textContent = bird.primary_name;
                    englishNameElement.textContent = `English Name: ${bird.english_name}`;
                    statusElement.textContent = `Conservation Status: ${bird.status}`;
                    photoCreditElement.textContent = `Photo Credit: ${bird.photo.credit}`;

                    overlayElement.appendChild(primaryNameElement);
                    overlayElement.appendChild(englishNameElement);
                    overlayElement.appendChild(statusElement);
                    overlayElement.appendChild(photoCreditElement);
                    birdElement.appendChild(imageElement);
                    birdElement.appendChild(overlayElement);
                    birdsContainer.appendChild(birdElement);
                });
            }

            showBirds(birdsData);
        })
        .catch(error => console.error(error))
}

fetchData();
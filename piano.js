const volumeSlider = document.querySelector('#volume');
const whiteKeys = document.querySelectorAll('.keys-white');
const blackKeys = document.querySelectorAll('.keys-black');

// Array.from()  which is constructor which convert nodes into the array so that we can apply operations of array like for-each loop ,Eventlistner, length, pop, etc.
const whiteKeysArray = Array.from(whiteKeys);
const blackKeysArray = Array.from(blackKeys);

whiteKeysArray.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`);
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100;
        audio.play();
    })
})

blackKeysArray.forEach((element) => {
    const audio = new Audio(` tunes/${element.id}.wav `);
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100;
        audio.play();
    })
})

document.addEventListener('keydown', (e) => {
    whiteKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click();
            element.classList.add('active-white');

            setTimeout(() => {
                element.classList.remove('active-white');
            }, 150);
        }
    })

    blackKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click();
            element.classList.add('active-black');

            setTimeout(() => {
                element.classList.remove('active-black');
            }, 150);

        }
    })
})
const soundMap = {
    A: "./sounds/28.mp3",
    B: "./sounds/29.mp3",
    C: "./sounds/30.mp3",
    D: "./sounds/31.mp3",
    E: "./sounds/32.mp3",
    F: "./sounds/33.mp3",
    G: "./sounds/34.mp3",
    H: "./sounds/35.mp3",
    I: "./sounds/36.mp3",
    J: "./sounds/37.mp3",
    K: "./sounds/38.mp3",
    L: "./sounds/39.mp3",
    M: "./sounds/40.mp3",
    N: "./sounds/41.mp3",
    O: "./sounds/42.mp3",
    P: "./sounds/43.mp3",
    Q: "./sounds/44.mp3",
    R: "./sounds/45.mp3",
    S: "./sounds/46.mp3",
    T: "./sounds/47.mp3",
    U: "./sounds/48.mp3",
    V: "./sounds/49.mp3",

    1: "./sounds/50.mp3",
    2: "./sounds/51.mp3",
    3: "./sounds/52.mp3",
    4: "./sounds/53.mp3",
    5: "./sounds/54.mp3",
    6: "./sounds/55.mp3",
    7: "./sounds/56.mp3",
    8: "./sounds/57.mp3",
    9: "./sounds/58.mp3",
    "!": "./sounds/59.mp3",
    "@": "./sounds/60.mp3",
    "#": "./sounds/61.mp3",
    "$": "./sounds/62.mp3",
    "%": "./sounds/63.mp3"
};

const mapKeys = {}

let minorKeys = document.querySelectorAll(".minorKey")
let majorKeys = document.querySelectorAll(".key")

for (let key of minorKeys) {

    mapKeys[key.dataset.key] = key 

    key.addEventListener("pointerdown", function (e) {
        e.stopPropagation();
        e.preventDefault();
        playAudio(key.dataset.key)
        key.classList.add("active");

        setTimeout(() => {
            key.classList.remove("active")
        }, 100)
    })


    key.addEventListener("pointerup", function (e) {
        e.stopPropagation()
        key.classList.remove("active");
    })
}

for (let key of majorKeys) {
    mapKeys[key.dataset.key] = key 

    key.addEventListener("pointerdown", function (e) {
        playAudio(key.dataset.key)
        key.classList.add("active");

        setTimeout(() => {
            key.classList.remove("active")
        }, 100)
    })

    key.addEventListener("pointerup", function (e) {
        e.stopPropagation()
        key.classList.remove("active");
    })
}

function playAudio(val) {
    if (soundMap[val]) {
        console.log(soundMap[val])
        let audio = new Audio(soundMap[val])
        audio.play()
    }
}

document.addEventListener("keydown", function (e) {
    let val = e.key.toUpperCase();
    if(mapKeys[val]) mapKeys[val].classList.add("active")
    playAudio(val)
})

document.addEventListener("keyup", function (e) {
    let val = e.key.toUpperCase();
    if(mapKeys[val]) mapKeys[val].classList.remove("active")
})
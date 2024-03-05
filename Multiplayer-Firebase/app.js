const playerColor = ["blue", "red", "orange", "yellow", "green", "purple"];

const randomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const getKeyString = (x, y) => {
    return `${x}x${y}`;
}

const createName = () => {
    const prefix = randomFromArray([
        "COOL",
        "SUPER",
        "HIP",
        "SMUG",
        "COOL",
        "SILKY",
        "GOOD",
        "SAFE",
        "DEAR",
        "DAMP",
        "WARM",
        "RICH",
        "LONG",
        "DARK",
        "SOFT",
        "BUFF",
        "DOPE",
    ])

    const animal = randomFromArray ([
        "BEAR",
        "DOG",
        "CAT",
        "FOX",
        "LAMB",
        "LION",
        "BOAR",
        "GOAT",
        "VOLE",
        "SEAL",
        "PUMA",
        "MULE",
        "BULL",
        "BIRD",
        "BUG",
        ]);

        return `${prefix} ${animal}`
}


console.log('hi')

let playerId;
let playerRef;


firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
        // you're logged in
        playerId = user.uid;
        playerRef = firebase.database().ref(`players/${playerId}`);

        const name = createName();

        playerRef.set({
            id: playerId,
            name,
            direction: 'right',
            color: randomFromArray(playerColor),
            x: 3,
            y: 3,
            coins: 0,
        })

        // remove me from Firebase when I disconnect
        playerRef.onDisconnect().remove();
    }
    else {
        // you're logged out
    }
})


firebase.auth().signInAnonymously().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode, errorMessage)
})




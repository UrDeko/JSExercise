function timeWalked(steps, footLength, kmPerH) {

    let walkedInMeters = steps * footLength;
    let walkedInKilometers = walkedInMeters / 1000;
    let breaks = parseInt(walkedInMeters / 500);

    let totalInSeconds = (walkedInKilometers / kmPerH * 3600) + (breaks * 60);
    let hours = parseInt(totalInSeconds / 3600);
    let minutes = parseInt(totalInSeconds / 60);
    let seconds = totalInSeconds % 60;

    let result = ``;

    if (hours < 10) {
        result += `0${hours}`;
    } else {
        result += `${hours}`;
    }

    if (minutes < 10) {
        result += `:0${minutes}:`;
    } else {
        result += `:${minutes}:`;
    }

    if (seconds < 10) {
        result += `0${seconds.toFixed(0)}`;
    } else {
        result += `${seconds.toFixed(0)}`;
    }

    console.log(result);

}

timeWalked(2564, 0.70, 5.5);
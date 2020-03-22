var musicCollection = {
    "2468": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "My momma",
            "Baby don't cry",
            "I love you"
        ]
    },
    "3579": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "My little princess"
        ]
    },
    "2345": {
        "album": "Not gonna cry",
        "artist": "",
        "tracks": [
            "Not gonna cry",
            "Gonna love you"
        ]
    }
}

var musicCollectionCopy = JSON.parse(JSON.stringify(musicCollection));

function updateRecords(id, prop, value)
{
    if (prop === "tracks")
    {
        musicCollection[id][prop] = musicCollection[id][prop] || [];
        musicCollection[id][prop] = musicCollection[id][prop].push(value);
    }
    musicCollection[id][prop] = value;
    return musicCollection
}

updateRecords("2345", "artist", "Boney James");
console.log(updateRecords("3579", "album", "Fish"));

function getData(id, prop)
{
    if (musicCollection[id])
    {
        return musicCollection[id][prop] || "No such property";
    }
    else
    {
        return "No such id";
    }
}

console.log(getData("2468", "tracks"));
let studenten = [];

studenten[0] = {
    "naam": "Jurson",
    "leeftijd": 17,
    "geslacht": "M",
    "adres": {
        "straat": "Kruislaan 33",
        "postcode": "1099TT",
        "woonplaats": "Utrecht"
    }
}
studenten[1] = {
    "naam": "Shireen",
    "leeftijd": 20,
    "geslacht": "V",
    "adres": {
        "straat": "Eindstraat 55",
        "postcode": "2867NN",
        "woonplaats": "Amsterdam"
    }
}
studenten[2] = {
    "naam": "Sahra",
    "leeftijd": 17,
    "geslacht": "V",
    "adres": {
        "straat": "Hogestraat 23",
        "postcode": "1190UU",
        "woonplaats": "Rotterdam"
    }
}
console.log(studenten[2].naam + "/" + studenten[2].adres.woonplaats);
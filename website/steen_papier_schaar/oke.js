var pcpunten = 0;
var spelerpunten = 0;

function playerInput(value) {
    var keuzen = ["steen", "papier", "schaar"];
    var computerkeuze = Math.floor(Math.random() * 3) + 1;

    switch (value) {
        case "steen":
            switch (computerkeuze) {
                case 1:
                    document.getElementById("resultaat").innerHTML = "Computer kiest steen, het is gelijkspel";
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "Computer kiest papier, je hebt verloren";
                    pcpunten++;
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "Computer kiest schaar, je hebt gewonnen";
                    spelerpunten++;
                    break;
            }
            break;
        case "papier":
            switch (computerkeuze) {
                case 1:
                    document.getElementById("resultaat").innerHTML = "Computer kiest steen, je hebt gewonnen";
                    spelerpunten++;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "Computer kiest papier, het is gelijkspel";
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "Computer kiest schaar, je hebt verloren";
                    pcpunten++;
                    break;
            }
            break;
        case "schaar":
            switch (computerkeuze) {
                case 1:
                    document.getElementById("resultaat").innerHTML = "Computer kiest steen, je hebt verloren";
                    pcpunten++;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "Computer kiest papier, je hebt gewonnen";
                    spelerpunten++;
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "Computer kiest schaar, het is gelijkspel";
                    break;
            }

            return (computerkeuze);
            break;

    }

    document.getElementById("pcpunten").innerHTML = "Computer's punten " + pcpunten;
    document.getElementById("spelerpunten").innerHTML = "Uw punten " + spelerpunten;


}
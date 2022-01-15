var min = 1;
var max =101;
var randNum= Math.floor((max - min)* Math.random()+min);
function makeGuess()
{
    if(input >=0)
    {
        var inputVal = parseInt(document.getElementById("input").value);
        if(randNum < inputVal)
        {
            document.getElementById("clue").innerHTML= "Too high,try again.";
        }
        else if(randNum > inputVal)
        {
            document.getElementById("clue").innerHTML= "Too low,try again.";
        }
        else
        {
            document.getElementById("clue").innerHTML= "Congratulations,That's true!! :)";
            var names=["guess", "title", "input", "btn"];
            names.forEach(name =>
                    {
                    var elem=document.getElementById(name);
                    elem.parentNode.removeChild(elem);

                    })
            document.getElementById("reload").style.visibility="visible";
        }
    }
    else
    {
        document.getElementById("clue").innerHTML= "Please enter valid number!";
    }
}
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function helloSpeaker(name)
{
    console.log("Hello " + name);
}
function GoodByeSpeaker(name) 
{
    console.log("Good Bye " + name);
}

let i;
for (i = 0; i < names.length; i++) 
{
    if (names[i][0] == 'j' || names[i][0] == 'J') 
    {
        GoodByeSpeaker(names[i])
    }
    else 
    {
        helloSpeaker(names[i]);
    }
}

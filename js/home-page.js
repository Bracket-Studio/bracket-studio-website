

function capitalizeName(str){
    var names = str.split(" ");
    for (var i = 0; i < names.length; i += 1){
        names[i] = names[i][0].toUpperCase() + names[i].slice(1)
    }
    return names.join(" ");
}
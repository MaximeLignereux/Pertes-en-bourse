/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var inputs = readline().split(' ');
var tab = [];
var p = 0;
for (var i = 0; i < n; i++) {
    var v = parseInt(inputs[i]);
    tab.push(v);
}

// Write an action using print()
// To debug: printErr('Debug messages...')


var max = tab[0];

for (var i = 1; i < n; i++) {
    
    var temp = tab[i] - max;
    
    if (tab[i] > max) {
        max = tab[i];
    }
    
    if (temp < p) {
        p = temp;
    }
    
}

print(p);

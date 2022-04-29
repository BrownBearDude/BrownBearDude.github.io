const form = document.getElementById("form");


function char_effic_str(offset) {
    let string = "";
    string += " ".repeat(Math.floor(offset / 4));
    string += " ".repeat(offset % 4);
    let length = Math.floor(offset / 4) + (offset % 4)
    return {string, length}
}

function good_mod(m, n) {
    return ((m % n) + n) % n
}



const submit = function (e) {
    e.preventDefault()
    console.log("bruh")

    let maxlinecount = form["maxLineCount"].valueAsNumber
    let maxCharCount = form["maxCharCount"].valueAsNumber
    let maxSideWays = form["maxSideWays"].valueAsNumber
    let d = form["d"].valueAsNumber


    let output = ". \n"
    let line = 0
    let looping = true
    let char_count = 0
    let text = "wiggle"
    while (looping) {

        let offset = eval(form["formula"].value)
        offset = good_mod(offset, maxSideWays)
        let eff = char_effic_str(offset)
        // eff = {string: " ".repeat(offset), length: offset}

        if (char_count + eff.length +  text.length + 1 < maxCharCount) {    
            output += eff.string + text + "\n";
            char_count += eff.length + text.length + 1;
        } else {looping = false; console.log(eff.length +  text.length); console.log(line) }
        
        line += 1
        if (line > maxlinecount) { looping = false; console.log("lines") }
        d = offset
    }
    console.log(output)
    document.getElementById("output").innerHTML = output



}


form.addEventListener("submit", submit, event)
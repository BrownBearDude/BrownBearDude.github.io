
function char_effic_str(offset) {
    let string = "";
    string += "U+0009".repeat(Math.floor(offset / 8));
    string += " ".repeat(offset % 8);
    let length = Math.floor(offset / 8) + (offset % 8)
    return {string, length}
}


function main() {
    let output = ""
    let looping = true
    let char_count = 0
    let i = 0
    while (looping) {
        let o = Math.floor((Math.sin(i) + 1) * 10);
        let eff = char_effic_str(o);
        console.log(eff)
        if (char_count + eff.length + 7 < 2000) {
            output += eff.string + "wiggle" + "\n";
            char_count += eff.length + 8; 
        } else {
            looping = false
        }
        i += Math.PI * 2 /25
    }
    console.log(output)
    console.log(char_count)

}

main()



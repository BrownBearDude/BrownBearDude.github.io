
function char_effic_str(offset) {
    let string = "";
    string += "	".repeat(Math.floor(offset / 8));
    string += " ".repeat(offset % 8);
    let length = Math.floor(offset / 8) + (offset % 8)
    return {string, length}
}

function good_mod(m, n) {
    return ((m % n) + n) % n
}

function main() {
    let output = ""
    let looping = true
    let char_count = 0
    let text = "wiggle"
    let i = 0
    while (looping) {
        let o = Math.floor((Math.sin(i)+1)*50);



        
        let eff = char_effic_str(o);
        console.log(eff)
        if (char_count + eff.length +  text.length + 1 < 2000) {
            
            output += eff.string + text + "\n";
            char_count += eff.length + 8; 
        } else {
            looping = false
        }
        i += Math.PI * 2 / 25
    }
    console.log(output)
    console.log(char_count)

}

main()

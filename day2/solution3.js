function vowelsAndConsonants(s) {
    let vowels = '', consonants = ''; 
    const vowels_reg = new RegExp("[aeiou]");
    for (let letter of s) {
        if (vowels_reg.test(letter)) {
            vowels = vowels.concat(`${letter} \n`);
        } else {
            consonants = consonants.concat(`${letter} \n`);
        }
    }
    consonants=consonants.trim();
    console.log(vowels+consonants);
}
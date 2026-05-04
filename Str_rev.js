function reverseString(str) {
    let chars = str.split('');
    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        [chars[i], chars[chars.length - 1 - i]] = [chars[chars.length - 1 - i], chars[i]];
    }
    return chars.join('');
}

console.log(reverseString("hello"));
function reverseString(s) {
    try {
        let split_str = s.split('');
        let reverse_arr = split_str.reverse();
        s = reverse_arr.join(''); 
    }
    catch (e) {
        console.log(e.message);
    }
    console.log(s);
}
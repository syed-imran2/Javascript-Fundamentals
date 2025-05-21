// We have a regexp /Java[^script]/.

// Does it match anything in the string Java? In the string JavaScript?

// answer: No, yes

alert( "Java".match(/Java[^script]/) ); // null

alert( "JavaScript".match(/Java[^script]/) ); // "JavaS"
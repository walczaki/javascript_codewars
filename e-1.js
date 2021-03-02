// Description:
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
//regex
//g-global, gdyby nie bylo to zamiana skonczyla by sie na pierwszym napotkanym przypadku
//i-insensitive, ignoruje wielkosc liter
console.log(disemvowel("This website is for losers LOL!"));

function disemvowel2(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}
console.log(disemvowel2("This website is for losers LOL!"));
//str || jest poto by nie wykonywać metody replace na niezdefiniowanym stringu, ewentualnie niech zrobi na pustym

function disemvowel3(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
  console.log(disemvowel3("This website is for losers LOL!"));
//filtruje w ten sposob że sprawdza czy w stringu znajduje się znak z tablicy, jeśli nie to zwraca znak
//split dzieli łańcuch znaków separatorem, a join łączy podanym znakiem
//filter zwraca gdy spełniony zostanie warunek

const disemvowel4 = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
      return newStr;
  };
  console.log(disemvowel4("This website is for losers LOL!"));
//sprawdza pokolei w pętli czy znak znajduje sie w tablicy jesli nie to tworzy nowy łańcuch znaków


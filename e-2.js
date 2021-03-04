// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""


// moj kod
function maskify(cc) {
    newString = "";
      for(i=0; i < cc.length; i++){
        if (cc.length > 4){
          if ((cc.length - i) > 4){
            newString += "#";
            
          }
          else {
            newString += cc.charAt(i);
          }
        }
        else {
          newString += cc.charAt(i);
        }
      }
    return newString;
  }
  //inne rozwiazania

  function maskify2(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
//bierze znaki od 0 do koniec - 4 i w tym wycinku zamienia na #,
//a pozniej dodaje ostatniej 4 znaki, jak jest mniej to doda tyle ile jest
//console.log("ABD".slice(-4))

function maskify3(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }
  console.log(maskify3("AVASDASD"))
  //lookahead
  // . bierze każdy znak, pod uwage
  // .* wzialby wszystkie
  //?=.... oznacza że zwraca to co jest po lewej stronie od 4 znaków (czyli od prawej sciany)

  function maskify5(cc) {
    return cc.replace(/.(?=.{4})/g, '#');
  }
  //to samo tylko .... zastapiione {4}

function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
    }
  
    cc = cc.join("");
    return cc
  }
  //split dzieli łańcuch wg podanego separatora, tutaj jest "" co oznacza że dostajemy tablice
  //kazdego ze znaków łańcucha, join zamienia spowrotem tablice na string

  maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);
  //


  function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }
  //bierze wycinek prócz ostatnich 4 i wypełnia je tym znakiem 
  console.log("ABASD".slice(-4))

// N(2)

// function getSum3(N) {
//   let raqam = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       raqam += i;
//     }
//   }
//   return raqam;
// }

// console.log(getSum3(15));



// N{1}

// function getFileName(filePath) {
//   const lastSlashIndex = filePath.lastIndexOf("/");
//   const fileName = filePath.substring(lastSlashIndex + 1);

//   const lastDotIndex = fileName.lastIndexOf(".");
//   const fileName = fileName.substring(
//     0,
//     lastDotIndex
//   );

//   return fileName;
// }

// const filePath = "D:/Qudrat_c++/books/My_book.exe";
// const fileName = getFileName(filePath);
// console.log(fileName);



// N{3}

// function sonD(n) {
//   let raqam = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     raqam += i * i;
//   }
//   return raqam;
// }

// const n = 5;
// const result = sonD(n);
// console.log( Bu raqamdan ${n}^2 to (${2 * n})^2 is: ${result});

// N{4}

// function raqam(stringArray) {
//   const lengthObject = {};


//   for (let i = 0; i < stringArray.length; i++) {
//     const string = stringArray[ i] ;

//     lengthObject [string ] = string.length;
//   }

//   return lengthObject;
// }

// const strings = ["Asatbek", "Nodirbek", "Joni", "Doston"];
// const resultObject = raqam(strings);

// console.log(resultObject);

// N(5)

// function getMultipleValues(n, objd) {
//   const rse = {};

//   for (const key  objd) {
//     if (objd.hasOwnProperty(key)) {
//       res[key] = objd[key] * n;
//     }
//   }

//   return rse;
// }

// let n = 3;
// const objd = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// const rse = getMultipleValues(n, objd);
// console.log(rse);

// // N( 9 )
// function removeDuplicates ( arr ) {
//     return arr.reduce(( acc, current ) => {
//         if ( ! acc.includes ( current )) {
//             acc.push(current );
//         }
//         return acc;
//     }, [ arr [ 0 ]]);
// }


// const array = [ 1, 6, 8, 5, 1, 9, 3, 5, 8 ];

// const result = removeDuplicates( array );
// console.log(result); 

// N(6)
// function engKichikgiEngKattasi(massiv) {
//     if (massiv.length === 0) {
//         return [null, null];
//     }

//     let engKichikgi = massiv[ 0 ];
//     let engKattasi = massiv[ 0 ];

//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] < engKichikgi) {
//             engKichiksi = massiv[i];
//         }
//         if (massiv[i] > engKattasi) {
//             engKattasi = massiv[i];
//         }
//     }

//     return [engKichikgi, engKattasi];
// }
// let [kichikgi, kattasi] = engKichikgiEngKattasi(massiv);

// console.log("Eng kichik elementi:", kichik);
// console.log("Eng katta elementi:", katta);

// N(7)
function BoshJoy(sotr) {
    if (sotr.includes(' ')) {
        console.log("bo'sh joy mavjud");
    } else {
        console.log("bo'sh joy yo'q");
    }
}

let sotr = prompt("biror nars kiriting:");
BoshJoy(sotr);
 



  
  




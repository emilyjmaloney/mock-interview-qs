// 2.	Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Tic" instead of the number and for the multiples of '5' print "Toc", if the number is multiple of 3 and 5 then print “TicToc”.

function printTicTocHundred(){
    for(let i=1; i <= 100; i++) {
        if (i % 15 == 0) console.log("TicToc");
        else if (i % 3 == 0) console.log("Tic");
        else if (i % 5 == 0) console.log("Toc");
        else  console.log(i);
    }
}
printTicTocHundred();




// შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
// ფუნქციას გადაეცით ობიექტი არგუმეტნად 

// let sampleObject = {
//     isItarable : false,
//     sampleArray : [12,63,21,34,98,57]
// }
// თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
// თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57],
    }
    let falseOption = "provided array isn't itarable" ;
    function itarable(sampleObject) {
        if (sampleObject.isItarable == true) {
          console.log(sampleObject);
        } else {
          console.log(falseOption);
        }
      }
      itarable(sampleObject) 
      

//Task 2
/*
შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false
*/  
     
      function checkPythagoras(a, b, c) {
        if( a * a + b * b === c * c) {
            console.log('true');
       } else {
                console.log('false');
            }
        }

        checkPythagoras(8, 9, 10);
//Task 3
/*
დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
დააბრუნოს "Min value is 2 and Max value is 75"
*/
        let minMaxArr = [2,14,25,75,11,6];
        function minMax(arr) {
            let min = arr[0];
            let max = arr[0];
            for(let i=0; i<arr.length; i++) {
                if(arr[i] > max){max=arr[i]}
                if(arr[i] < min) {min=arr[i]}
            }
            const result =`Min value is ${min} and Max value is ${max}`;
            console.log(result);
        }
        minMax(minMaxArr)
//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
    

// function checkDeg (deg) {
    function angleCheck(deg) {
        if (deg > 0 && deg < 90) {
        return "Acute angle";
        } else if (deg === 90) {
        return "Right angle";
        } else if (deg > 90 && deg < 180) {
        return "Obtuse angle";
        } else if (deg === 180) {
        return "Straight angle";
        }
    }
// }

// checkDeg(92)
    let example = angleCheck(92);
    console.log(example);
//Task 5
/*
დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
let studentArr = [
    { name: "student1", grade: 91 },
    { name: "student2", grade: 71 },
    { name: "student3", grade: 45 },
  ];
  
  function finalResult(a) {
    for (let student of studentArr) {
    if (studentArr.grade>=81) {
        console.log('A');
    } else if (studentArr.grade>=71) {
        console.log('B');
    } else if (studentArr.grade>=61) {
        console.log('C');
    } else if (studentArr.grade>=51) {
        console.log('D');
    } else if (studentArr.grade<51) {
        console.log('E');
    }
  }
  return studentArr
}

studentArr = finalResult(studentArr)
console.log(studentArr)
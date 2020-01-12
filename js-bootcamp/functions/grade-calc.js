//Student score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69 F 0-59

// let sScore = 95
// let totalScore = 100

let grade = function (sScore, totalScore) {
  let percent = (sScore / totalScore) * 100
  let letterGrade = ''
  if (percent >= 90){
      letterGrade = 'A'
  } else if (percent >= 80 && percent <=89){
      letterGrade = 'B'
    } else if (percent >= 70 && percent <=79){
      letterGrade = 'C'
    }else if (percent >= 60 && percent <=69){
      letterGrade = 'D'
    } else if (percent <60){
      letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)`
    }

let result = grade(19, 20)
console.log(result)

    // if (percent >= 90){
   
    // } else if (percent >= 80 && percent <=89){
    //     return `The student score is: ${sScore}, the total score is: ${totalScore} and the student grade is: B (${percent})`
    //   } else if (percent >= 70 && percent <=79){
    //     return `The student score is: ${sScore}, the total score is: ${totalScore} and the student grade is: C (${percent})`
    //   }else if (percent >= 60 && percent <=69){
    //     return `The student score is: ${sScore}, the total score is: ${totalScore} and the student grade is: D (${percent})`
    //   } else if (percent <60){
    //     return `The student score is: ${sScore}, the total score is: ${totalScore} and the student grade is: F (${percent})`
    //   }
// let studentGrade = grade(100, 100)
// console.log(studentGrade)
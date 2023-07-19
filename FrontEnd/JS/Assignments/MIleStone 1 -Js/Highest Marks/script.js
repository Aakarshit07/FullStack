let marks = [50, 80, 70, 90, 40];

const highestMarks = marks.length > 0 ? Math.max(...marks) : null;
if (highestMarks != null) {
    console.log(`The highest marks scord by a student in the calss is  ${highestMarks}`);

}  else{
    console.log("No Marks Found")
}


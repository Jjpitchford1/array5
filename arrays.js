// CODE ALONG

// 1. Update the variable songList so that it is an array with at least 3 song titles.
let songList;
console.log(songList);

songList = ["Song1", "Song2", "Song3"];
console.log(songList);

// 2. Update the variable studentList so that it is an array with 4 Code Nation students (including yourself) in your class.
let studentList;
console.log(studentList);

studentList = ["Jania", "Malachi", "Karen", "Juan"];
console.log(studentList);

// 3. Update the variable teacherList so that it is an array with all the Code Nation adults in your class.
let teacherList;
console.log(teacherList);

teacherList = ["Starzyk", "Frank", "Assiatou"];
console.log(teacherList);

// 4. Update the variable familyAges so that it is an array with a list of ages (numbers) of your family members.
let familyAges;
console.log(familyAges);

familyAges = [49, 48, 28, 27, 24, 21, 20, 17, 14,];
console.log(familyAges);

//PAUSE HERE

// CODE SOLO

// 5. Update the variable favSong to retrieve the array element of your favorite song in the songList array (Task 1). 
let favSong;
console.log(favSong);

favSong = songList[1];
console.log(favSong);

// 6. Update the variable bestStudent to retrieve your name from the classList array (Task 2).
let bestStudent;
console.log(bestStudent);

bestStudent = studentList[0];
console.log(bestStudent);

// 7. Update the variable tallestTeacher to retrieve the array element of the tallest teacher in the teacherList array (Task 3).
let tallestTeacher;
console.log(tallestTeacher);

tallestTeacher = teacherList[1];
console.log(tallestTeacher);

// 8. Update the variable oldestMemeber to retrieve the array element of the oldest member of your family in the familyAges array. (Task 4)
let oldestMember;
console.log();

oldestMember = familyAges[0];
console.log(oldestMember);
// Done Early?
//  - On your own, create an array that combines both the class list and the teacher list without rewriting the names of students and teachers.
//  - Google how to combine arrays you've already created.

const combined = studentList.concat(teacherList);


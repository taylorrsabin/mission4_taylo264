//Grade Calculator

//Weighting:
//Assignments: 50%
//Group Project: 10%
//Quizzes: 10 %
//Midterm Exam: 10 %
//Final Exam: 10 %
//INTEX: 10 %

$('#buttonSend').click(function () {
    let percentGrade = 0.0;
    let letterGrade = 'bruh';

    let assignments = parseFloat($('#assignments').val()) * 0.5;
    let groupProjects = parseFloat($('#groupProjects').val()) * 0.1;
    let quizzes = parseFloat($('#quizzes').val()) * 0.1;
    let midtermExam = parseFloat($('#midtermExam').val()) * 0.1;
    let finalExam = parseFloat($('#finalExam').val()) * 0.1;
    let intex = parseFloat($('#intex').val()) * 0.1;

    //Calculate grade percent
    percentGrade = assignments + groupProjects + quizzes + midtermExam + finalExam + intex;

    //Calculate letter grade
    if (percentGrade >= 94) {
        letterGrade = 'A';
    }
    else if (percentGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (percentGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (percentGrade >= 84) {
        letterGrade = 'B';
    }
    else if (percentGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (percentGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (percentGrade >= 74) {
        letterGrade = 'C';
    }
    else if (percentGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (percentGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (percentGrade >= 64) {
        letterGrade = 'D';
    }
    else if (percentGrade >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }

    //Print letter grade
    $('#finalGrade').html(percentGrade + "%, which is an " + letterGrade);
})
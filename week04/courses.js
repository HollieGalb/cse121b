const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",

    sections:[{ sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'},

    { sectionNum: 2, 
        roomNum: 'STC 347',
        enrolled: 28, days: 
        'TTh', instructor: 
        'Sis A'},],

    enrollStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex(
            section => section.sectionNum ==sectionNum
        );

        if(sectionIndex >= 0){
            this.section[sectionIndex].enrolled += 1;
            renderSectionos(this.sections);
        }},

    dropStudent: function(sectionNum){
        const sectionIndex = this.sections.findIndex(
            section => section.sectionNum ==sectionNum
        );
        if(sectionIndex >= 0){
            this.section[sectionIndex].enrolled -= 1;
            renderSectionos(this.sections);
        }},
};

//function to set name and number of the course
function setObjectInfo(course){
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCods");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}

function renderObjectOutput(courseObjects){
    const htmlObject = courseObjects.map( 
        (courseObject) =>
        `<tr>
            <td>${courseObject.sectionNum}</td>
            <td>${courseObject.roomNum}</td>
            <td>${courseObject.enrolled}</td>
            <td>${courseObject.days}</td>
            <td>${courseObject.instructor}</td>
        </tr>`);

    document.querySelector('#sections').innerHTML = htmlObject.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum); });

document.querySelector("#dropStudent").addEventListener("click", function(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum); });   

setObjectInfo(aCourse);
renderObjectOutput(aCourse.sections);



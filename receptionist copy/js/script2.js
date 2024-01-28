// function loadHtmlContent(htmlFile) {
// Fetch the HTML content of the selected file
//     fetch(htmlFile)
//         .then(response => response.text())
//         .then(html => {
//             // Insert the HTML content into the 'dynamic-content-container'
//             document.getElementById('dynamic-content-container').innerHTML = html;
//         })
//         .catch(error => console.error('Error loading HTML file:', error));
// }

// Default set as Dashboard
document.getElementById('main-1').style.display = 'block';
document.getElementById('main-2').style.display = 'none';
document.getElementById('main-3').style.display = 'none';
document.getElementById('main-4-1').style.display = 'none';
document.getElementById('main-4-2').style.display = 'none';
document.getElementById('main-5-1').style.display = 'none';
document.getElementById('main-5-2').style.display = 'none';
document.getElementById('main-5-3').style.display = 'none';
document.getElementById('main-6').style.display = 'none';

document.getElementById('dashboard-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'block';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('applicant-list-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'block';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('admission-modification-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'block';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('something-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'block';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('assign-teacher-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'block';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('BCA-course-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'block';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('MCA-course-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'block';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('PGDCA-course-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'block';
    document.getElementById('main-6').style.display = 'none';
});
document.getElementById('create-announcement-id').addEventListener('click', function () {
    document.getElementById('main-1').style.display = 'none';
    document.getElementById('main-2').style.display = 'none';
    document.getElementById('main-3').style.display = 'none';
    document.getElementById('main-4-1').style.display = 'none';
    document.getElementById('main-4-2').style.display = 'none';
    document.getElementById('main-5-1').style.display = 'none';
    document.getElementById('main-5-2').style.display = 'none';
    document.getElementById('main-5-3').style.display = 'none';
    document.getElementById('main-6').style.display = 'block';
});


// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.querySelector('.overlay').style.opacity = '1';
    });
    image.addEventListener('mouseout', () => {
        image.querySelector('.overlay').style.opacity = '0';
    });
});
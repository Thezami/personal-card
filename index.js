// when clicked, this will add a new element between update log and
// subheader row, and affecting length of card.
const subheaderButtons = document.querySelectorAll('.subheader-button')
subheaderButtons.forEach((x) => {
    x.addEventListener('click', () => {
        infodropdown();
    });
});

// function for appending the element into the subheader row;
let isdropped = false
const subheaderInfo = document.querySelector('.subheader-info');
function infodropdown() {
    if (isdropped === false) {
        subheaderInfo.classList.remove('display-none');
        setTimeout(() => {
            subheaderInfo.classList.add('fade-in-visible');
        }, 50)

        isdropped = true
    }
    // else {

    //     subheaderInfo.classList.add('display-none');
    //     setTimeout(() => {
    //         subheaderInfo.classList.remove('fade-in-visible');
    //     }, 10)
    //     isdropped = false;
    // };
};

// when clicked, home icon resets page and changes
const homebutton = document.querySelector('.home')
homebutton.addEventListener('click', () => {
    removeSubheader();
    console.log(2);
    console.log(document.querySelector('subheader-info').style.height)
})

function removeSubheader() {
    subheaderInfo.classList.remove('fade-in-visible');
    setTimeout(() => {
        subheaderInfo.classList.add('display-none');
    }, 500)
    isdropped = false;
}
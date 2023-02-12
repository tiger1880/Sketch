const container = document.querySelector('#container');
console.log(container);

let n = 16; //size nxn grid is made

let btn = document.querySelector('button');


for (let i = 0;i < n;i++){

    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0;j < n;j++){

        const box = document.createElement('div');
        
        console.log('hello');
        box.classList.add('grid');
        // box.textContent = "hello";
        console.log(box);

        row.appendChild(box);

    }

    container.appendChild(row);
}





const boxes = document.querySelectorAll('.grid');

let mouseDown = false;
document.body.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.body.addEventListener('mouseup', () => {

    mouseDown = false;

});

boxes.forEach((box) => {

    box.addEventListener('mouseover', (e) => {

        if (mouseDown)
            box.classList.add('grid-black');
    });
});


btn.addEventListener('click', (e) => {

    boxes.forEach((box) => {

        box.classList.remove('grid-black');
    });

});
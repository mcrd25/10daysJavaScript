function getCount(objects) {
    let n = 0;
    for (let o in objects) {
        objects[o].x == objects[o].y ? n++ : n;
    }
    return n;
}

//or 

function getCount(objects) {
    let n = 0;
    objects.forEach((o) => {
        o.x == o.y ? n++ : n;
    }); 
    return n;
}
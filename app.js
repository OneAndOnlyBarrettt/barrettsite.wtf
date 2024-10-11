function rotate() {
    const title = ["B","Ba","Bar","Barr","Barre","Barret","Barrett"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % title.length;
        document.title = title[index];
    }, 500);
}
rotate()

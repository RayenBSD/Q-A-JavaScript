onload = () => {

    const element = document.querySelectorAll(".section");

    element.forEach(obj => {
        console.log(obj);

        const btn = obj.querySelectorAll(".btn");


        btn.forEach (question => {
            question.addEventListener ("click", () => {
                
                element.forEach(item => {
                    console.log(item);

                    if (item !== obj) {
                        console.log(item);
                        console.log(obj);
                        item.classList.remove("show-text");
                    }
                    else {
                        item.classList.toggle("show-text")
                    }
                });
            });
        });
    });
}
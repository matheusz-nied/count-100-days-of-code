window.onload = function () {
    let number_count = Number(localStorage.getItem("count"));

    const span_count = document.getElementById("count");
    span_count.innerHTML = number_count;
};

const button = document.getElementById("button-count");
button.addEventListener("click", count, false);

function count() {
    let number_count = Number(localStorage.getItem("count"));
    let day_last_click = Number(localStorage.getItem("day"));
    let month_last_click = Number(localStorage.getItem("month"));

    const date = new Date();

    if (date.getMonth() === month_last_click && date.getDate() === day_last_click){
        alert("Você já fez sua contagem hoje!")
    } else{
        let new_count = number_count + 1;
        const span_count = document.getElementById("count");
    
        span_count.innerHTML = new_count;

        localStorage.setItem("count", new_count);

        localStorage.setItem("day", date.getDate());
        localStorage.setItem("month", date.getMonth());
    
    }


    
}

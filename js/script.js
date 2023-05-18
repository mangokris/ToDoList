var listItems = document.getElementsByClassName("main-page__list-item");
var checkbox = document.getElementsByClassName("main-page__checkbox-icon");
var text = document.getElementsByClassName("main-page__title");

for (let i=0; i<listItems.length; i++) {
    var item = listItems[i];
    item.addEventListener("click", function() {
        if (checkbox[i].classList.contains("main-page__checkbox-icon--active")) {
            checkbox[i].classList.remove("main-page__checkbox-icon--active");
            text[i].classList.remove("main-page__title--crossed");
        }
        else {
            checkbox[i].classList.add("main-page__checkbox-icon--active");
            text[i].classList.add("main-page__title--crossed");

        }
    });
}
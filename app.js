//Дэлгэцтэй ажиллах контроллер
var uiController = (function(){

})();

// санхүүтэй ажиллах контроллер
var financeController = (function(){

})();
// Програмын холбогч контроллер
var appController = (function(uiController, financeController){
    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('Дэлгэцээс өгөгдлөө авах хэсэг.')
    });
    document.addEventListener("keypress", function(event){
        if (event.key === 13) console.log("enter дарсан байна");
        else console.log("Өөр товч дарсан байна")
    })
})(uiController, financeController);
var greet = Greetr('Adrian', 'Smith', 'Just studying...');
var greet2 = G$('John', 'Doe', 'Testing message...');

console.log(greet);
console.log(greet2);

(function(global) {
    var loginBtn = document.querySelector('#login');
    var langDropdown = document.querySelector('#lang');

    loginBtn.addEventListener('click', function() {
        greet.log().showDomMessage('#greeting');
    });
    lang.addEventListener('change',function(){
        var lang = this.options[this.selectedIndex].value;
        greet.setLanguage(lang);
    });
}(window));
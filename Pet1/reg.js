/**
 * Created by Tory on 12.11.2017.
 */
function f_submit() {
    var name1 = document.getElementById("name1");
    if (name1.value=="") {
        window.alert("Введите имя");
        name1.focus();
        return false;
    }
    var fam1 = document.getElementById("fam1");
    if (fam1.value=="") {
        window.alert("Введите фамилию");
        fam1.focus();
        return false;
    }
    var age1 = document.getElementById("age1");
    var p = /^[0-9]{1,3}$/;
    if (!p.test(age1.value)) {
        window.alert("Неверный возраст");
        age1.focus();
        return false;
    }
    var mail1 = document.getElementById("mail1");
    p = /^[a-z0-9_\.\-]+@([a-z]+\.)+[a-z]{2,6}$/i;
    if (!p.test(mail1.value)) {
        window.alert("Неверный адрес E-mail");
        mail1.focus();
        return false;
    }
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    p = /^[a-z0-9_\.\-]{6,16}$/i;
    if (!p.test(pass1.value)) {
        window.alert("Неверный пароль");
        pass1.focus();
        return false;
    }
    else if (pass1.value != pass2.value) {
        window.alert("Пароли должны совпадать");
        pass1.focus();
        return false;
    }
    window.alert("Регистрация успешна");
    return true;
}

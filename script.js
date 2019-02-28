/*
$('#btn').click(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    var fullName = firstNameValue+' '+lastNameValue;
    //alert(fullName);
  $('#fullName').val(fullName);
});
*/

/*
$('#addBtn').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var lastNumberValue = Number($('#lastNumber').val());
    var res = firstNumberValue+lastNumberValue;
    $('#result').val(res);
});
$('#subBtn').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var lastNumberValue = Number($('#lastNumber').val());
    var res = firstNumberValue-lastNumberValue;
    $('#result').val(res);
});
$('#mulBtn').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var lastNumberValue = Number($('#lastNumber').val());
    var res = firstNumberValue*lastNumberValue;
    $('#result').val(res);
});
$('#divBtn').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var lastNumberValue = Number($('#lastNumber').val());
    var res = firstNumberValue/lastNumberValue;
    $('#result').val(res);
});
$('#modBtn').click(function () {
    var firstNumberValue = Number($('#firstNumber').val());
    var lastNumberValue = Number($('#lastNumber').val());
    var res = firstNumberValue%lastNumberValue;
    $('#result').val(res);
});
*/

/*
$('#firstName').keyup(function () {
    var firstNameValue = $('#firstName').val();
    $('#res1').val(firstNameValue);
});

$('#lastName').keyup(function () {
    var lastNameValue = $('#lastName').val();
    $('#res2').val(lastNameValue);
});

$('#lastName').blur(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    var fullNameValue = firstNameValue+' '+lastNameValue;
    $('#res3').val(fullNameValue);
});
*/

/*$('#firstName').keyup(function () {
    var firstNameValue = $('#firstName').val();
    $('#res1').text(firstNameValue);
});

$('#lastName').keyup(function () {
    var lastNameValue = $('#lastName').val();
    $('#res2').text(lastNameValue);
});

$('#lastName').blur(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    var fullNameValue = firstNameValue+' '+lastNameValue;
    $('#res3').text(fullNameValue);
});*/
function checkFirstName(){
  var firstNameValue = $('#firstName').val().length;
        if (firstNameValue >=6 && firstNameValue <=15 ){
            $('#firstNameError').text(' ');
            return true;
        }else{
            $('#firstNameError').text('First Name Should be given 6 up to 15 characters!!!');
            return false;
        }
}

    $('#firstName').keyup(function () {
        checkFirstName();
        return true;
    });

   $('#firstName').blur(function () {
       checkFirstName();
   return false;
   });


function lastNameCheck() {
    var lastNameValue = $('#lastName').val().length;
    if (lastNameValue >=6 && lastNameValue <=15){
        $('#lastNameError').text(' ');
        return true;
    } else{
        $('#lastNameError').text('Last name should be 4 up to 8 characters!!!');
    return false;
    }
}
// $('#lastName').click(function () {
//     lastNameCheck();
// });
$('#lastName').keyup(function () {
    lastNameCheck();
});
$('#lastName').blur(function () {
    lastNameCheck();
});

function emailAddressCheck(){
    var emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    if (emailPattern.test($('#emailAddress').val())){
        $('#emailAddressError').text(' ');
        return true;
    }else{
        $('#emailAddressError').text('Email address should be lower case,upper case,number or digit 2 up to 5!!');
    return false;
    }
}
$('#emailAddress').keyup(function () {
    emailAddressCheck();
});

$('#emailAddress').blur(function () {
    emailAddressCheck();
});

function passwordCheck(){
    var password = $('#password').val();
    var reg = /^[a-zA-Z]\w{3,14}$/;
    if (reg.test(password) == reg){
        $('#passwordError').text(' ');
    }else{
        $('#passwordError').text('password should be lower case,upper case,number or digit 3 up to 14!!');
    }
}
$('#emailAddress').keyup(function () {
    passwordCheck();
});

$('#emailAddress').blur(function () {
    passwordCheck();
});

$('#showHide').click(function () {
    var attrValue = $('#password').attr('type');
    if (attrValue == 'password'){
        $('#password').attr('type','text');
   return true;
    }else{
        $('#password').attr('type','password');
    return false;
    }
});

function emailAddressCheck(){
    var emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    if (emailPattern.test($('#emailAddress').val())){
        $('#emailAddressError').text(' ');
        return true;
    }else{
        $('#emailAddressError').text('Email address should be lower case,upper case,number or digit 2 up to 5!!');
    return false;
    }
}
$('#emailAddress').keyup(function () {
    emailAddressCheck();
});

$('#emailAddress').blur(function () {
    emailAddressCheck();
});

function confirmPasswordCheck(){
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if (password == confirmPassword){
        $('#confirmPasswordError').text(' ');
    return true;
    }else{
        $('#confirmPasswordError').text('password did not match!!');
   return false;
    }
}
$('#confirmPassword').blur(function () {
    confirmPasswordCheck();
});

$('#confirmPassword').keyup(function () {
    confirmPasswordCheck();
});

function checkGenderInfo() {
    var genderInfo = $('input[type="radio"]:checked').val();
    if (genderInfo == 'male' || genderInfo == 'female'){
        $('#genderInfoError').text(' ');
    return true;
    } else{
        $('#genderInfoError').text('Please select your gender info');
   return false;
    }
}
function checkDistrict(){
    var districtValue = $('#district').val();
    if (districtValue == ' '){
        $('#districtError').text('Please give us your district info');

    return false;
    } else{
        $('#districtError').text(' ');
    return true;
    }
}
$('#form').submit(function () {
   if (checkFirstName() == true && lastNameCheck() == true && emailAddressCheck() == true &&
       passwordCheck() == true &&confirmPasswordCheck() == true &&checkGenderInfo() == true &&checkDistrict() == true){
return true;
   }else{
       return false;
   }
});











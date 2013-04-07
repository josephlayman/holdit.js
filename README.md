jquery.hold version 1.1
================

holdit.js is a jquery plugin that creates an HTML5/Chrome like placeholder for all browsers. It is compatible back to IE 7, FF 3.0, Safari 4.0 and Chrome 8.
<br />
.hold is easy to use. You can use a normal input or textarea. All you need to do is add a 'value' to the input or textarea.
<br />

    <input type="text" value="First Name" /> 
<br />
Calling hold method is also very easy. The first example is it being called on all inputs of the type text and passing in an object of options.
<br />

    $('input[type="text"]').holdit({ italic: true, dark: '#000000', light: '#888888' });
<br />  
It can also be called via a class or id and without the options. 
<br />

    $('.myClass').holdit();

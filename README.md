Use this script in your projects and change the style according to the theme of your project.
How to use:
- Put the following line related to the style at the beginning of the file and in the head tag
<link rel="stylesheet" href="msgBox.css">
- And put the following line of javascript code at the end of the file and after the body tag
<script src="msgBox.js"></script>
*Note: The path of the file should be changed relative to the storage address of the css file in the project.
##### Example:
<!DOCTYPE html>
<html>
 <head>
  <title>Message Box Demo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/css/msgBox.css">
 </head>
 <body>
  <div class="msg-box" id="messagebox"></div></div>
 </body>
 <script src="msgBox.js"></script>
 <script>
  msgBox('messagebox','Title','Demo 1<br>with 2 buttons in footer and callback function',[{text:'Yes',callback:'yes',param:['Hello!' ]},{text:'No'}],_success_icon,0);
  function yes(param){
   alert(param);
   msgBoxHide('messagebox');
  }
 </script>
</html>

*Note: The default icons in dimensions 64x64 of svg type with the following predefined names can be used:
_success_icon
_error_icon
_warning_icon
_info_icon

*Note: The syntax related to the definition of the button in the footer is as follows:
[{text:'text of button',callback:'function name string',params:[list of parameters for passed to callback function]},{...},{...}]
example:
[{text:'Yes',callback:'yes',params:['Hello!']},{text:'No'}]

*Note: The number of buttons that can be defined is a maximum of 3
*Note: Not defining callback and params means closing the message box without any reaction

*** Thank you ***

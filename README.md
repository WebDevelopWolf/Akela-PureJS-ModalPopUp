# Akela
### A lightweight modal pop-up with no framework dependancy that's mobile friendly.
A project by WebDevelopWolf - http://www.webdevelopwolf.com

### First of all...why Akela?
Akela (Hindi: अकेला / Akelā also called The Lone Wolf or Big Wolf) is a fictional character in Rudyard Kipling's stories, The Jungle Book and The Second Jungle Book. He is the leader of the Seeonee pack of Indian wolves and presides over the pack's council meetings. It is at such a meeting that the pack adopts the lost child Mowgli and Akela becomes one of Mowgli's mentors.

> Akela, the great gray Lone Wolf, who led all the Pack by strength and cunning, lay out at full length on his rock, and below him sat forty or more wolves of every size and colour    
— Rudyard Kipling, The Jungle Book.

He's the first of the WebDevWolf pack, a collection of Pure JS UI plug-ins dedicated to famous and fictional wolves thoughout the ages, that are for developers who don't wish to rely on JS frameworks to make good looking, accessible, beautiful webistes.

### What's New?
Akela's first full release includes the following:
* Different Sized Modals
* Call from HTML or from JavaScript
* Allows for multiple modals on the same page
* Fully Customisable 
  * Show / Change the colour of the backdrop, modal, font and icon
  * Show / Hide / Change the heading icon
  * Close on Esc key
  
### Usage
First, include Akela to the page by placing the stylesheet referance in the `<head>` and the js file before the `</body>` tag...
```html
<link rel="stylesheet" href="akela.min.css" />
<script src="akela.min.js"></script>
```
Then add the modal code...
```html
<div id="static" class="modal" tabindex="-1" role="dialog">
  <div class="modal-content">
    <div class="modal-heading">
      <h2><i id="modal-icon" class="fa fa-paw"></i> Hello World</h2>
      <div class="close"><i id="close" class="fa fa-close"></i></div>
    </div>
    <div class="modal-body">
      I'm a pop up!
    </div>
    <div id="modalFooter" class="modal-footer">
      <button id="modal-close" type="button" class="btn btn-info close">Close</button>
    </div>
  </div>
</div>
```
Then it's up to you how you trigger the modal, but if you want to use a button click then make sure the data-modal tag has the ID of th modal you wish to call. Here this is the 'static' modal...
```html
<button id="staticbtn" data-modal="static" class="btn btn-info akela">Show Static Modal</button><br />
```
Finally, initalise the modal object with the following JavaScript...
```html
<script>
  var akelaModel = new modal();
  akelaModel.init();
</script>
```
This will add a basic modal to the page.

### Options
To customise your modal, you can use the following options...

Option | Value(s) | Default Value(s)
------ | -------- | ----------------
modal.modalID | Targets a specific modal | Empty String
modal.Backdrop | Set to 'True' to have an semi-transparent backdrop | True
modal.Esc | Set to 'False' to disable the Esc key closing the modal | True
modal.BackdropColor | Sets the colour of the backdrop (if backdrop is enabled) | Empty String
modal.ModalColor | Sets the colour of the modal background | Empty String
modal.FontColor | Sets the colour of the modal font | Empty String
modal.HeaderColor | Sets the colour of the modal heading bar | Empty String
modal.ButtonColor | Sets the colour of the modal close button | Empty String
modal.ButtonFontColor | Sets the font colour of the modal close button | Empty String
modal.HeaderIcon | Enables/Disables the Icon heading | True
modal.HeaderIconSelect | Sets the Icon in the heading (if icon is enabled) | Empty String
modal.BackDropClose | Enables/Disables the closing of the modal on a backdrop click | Empty String

### Copyright
(C) Liane Stevenson 2017

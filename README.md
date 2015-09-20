# rangeSlider
A very simple jQuery plugin for sliders with range input controls.

##Installation

###HTML markup

Create a `<div class="rangeSlider">` element, with a `<ul>` and `<li>`s for each slide.
```html
<div class="rangeSlider">
  <ul class="slides">
    <li><img src="/images/1.jpg" /></li>
    <li><img src="/images/2.jpg" /></li>
    <li><img src="/images/3.jpg" /></li>
    <li><img src="/images/4.jpg" /></li>
  </ul>
  <input type="range">
</div>
```

###Styling

The size of the entire slider will be controlled from the `<ul>`, so giving it a class would be a good idea.
```css
.rangeSlider .slides {
  width: 400px;
  height: 300px;
}
```

###Initialize slider

```javascript
var options = {start: 0}
$(document).ready(function(){
  $('.rangeSlider').rangeSlider(options);
});
```
####Options
```javascript
{ start: int, fluid: bool}
```
'start' is used for the starting slide index. Default value is 0.
Set 'fluid' to true if `<ul>`'s width will be a percentage value. Default value is false.

###Example
jsfiddle: http://jsfiddle.net/fiffty/15eckq50/

###License
Released under the MIT license - http://opensource.org/licenses/MIT

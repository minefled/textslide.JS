# Textslide.JS

![If you see this: Never gonna give you up](https://raw.githubusercontent.com/minefled/textslide.JS/main/textslideJS_example.gif)

## Installation
```html
<script src="https://cdn.jsdelivr.net/gh/minefled/textslide.JS@main/text_slide.min.js"></script>
```
That's it

## Usage

### Basic Usage
#### Create Textslider
```javascript
var options = {}
var slider = new TextSlider("id_of_your_element", options);
```
or
```javascript
var slider = new TextSlider("id_of_your_element", {});
```
#### Options
Name | Description | Default Value | Expected Type
----|----|----|---
delay | The delay between the individual characters appearing/disappearing | 50 | int/float
spacewidth | Defines how many pixels wide an empty space character should be | 5 | int/float
transition_time | How long a character should take to appear (measured in seconds) | 0.5 | float
distance | How far up/down a character should appear/dissapear from its final position | 100 (%) | int/float
## Example
```html
<script>
<meta charset="utf-8">
<script src="text_slide.min.js"></script>
<script>
let text_slider;

window.onload = function() {
    text_slider = new TextSlider("text", {
        delay: 20
    });
    text_slider.showText("TextSlide.js is epic :D");
    
    setTimeout(() => {text_slider.showText("Fun Fact: TextSlide.js was made in ~2 Hours. Don't expect too much from it")}, 5000);
}
</script>
<div id="text" style="min-height: 20px;">
</div>
```

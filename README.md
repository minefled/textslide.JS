# Textslide.JS

![If you see this: Never gonna give you up](https://raw.githubusercontent.com/minefled/textslide.JS/main/textslideJS_example.gif)

## Installation
Options:
1. Download the code and either use the text_slide.js or the text_slide.min.js in your projects by doing
```html
<script src="/path/to/your/text_slide.js"></script>
```
2. Add your script from the Github URL by doing
```html
<script src="https://raw.githubusercontent.com/minefled/textslide.JS/main/text_slide.min.js"></script>
```

## Usage
### Example
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

## NOTE: A better documentation and more will follow soon.
(It's 10:44pm for me as i write this and i dont feel like doing this right now)

// made by minefled

class TextSlider {

    ele_id = "";

    _char_transition = "0.5s";
    _delay = 50;
    _spacewidth = 5;
    _distance = 200;

    constructor(ele_id, options) {
        this.options = options;
        this._load_options(options);

        this.ele_id = ele_id;

        this.getEle().style.display = "flex";
        this.getEle().style.flexDirection = "row";
        this.getEle().style.overflow = "hidden";
    }

    _load_options(options) {
        if(options.hasOwnProperty("delay")) {this._delay = options.delay;}
        if(options.hasOwnProperty("spacewidth")) {this._spacewidth = options.spacewidth;}
        if(options.hasOwnProperty("distance")) {this._distance = options.distance;}
        if(options.hasOwnProperty("transition_time")) {this._char_transition = options.transition_time.toString()+"s";}
    }

    showText(content) {
        this.deleteAll();
        setTimeout(() => {
            var elements = [];

            for(var i=0;i<content.length;i++) {
                var new_char = document.createElement("div");
                new_char.innerHTML = content[i];

                new_char.style.transition = this._char_transition;
                new_char.style.opacity = "0%";
                new_char.style.height = "100%";
                if (content[i] == " ") {
                    new_char.style.width = this._spacewidth.toString() + "px";
                }
                new_char.style.transform = "translateY("+this._distance.toString()+"%)";

                this.getEle().appendChild(new_char);
                elements.push(new_char);
            }

            var index = 0;
            var max_index = elements.length;

            function show_next_char(object) {
                var ele = elements[index];

                ele.style.transform = "translateY(0%)";
                ele.style.opacity = "100%";

                index += 1;
                setTimeout(function() {if(index < max_index) {show_next_char(object);}}, object._delay);
            }

            setTimeout(() => {show_next_char(this);}, this._delay);

        }, this.estimateTimeLeft());
    }
    deleteAll() {
        var childNodes = this.getEle().childNodes;

        var index = 0;
        var max_index = childNodes.length;

        function remove_next_char(object) {
            var ele = childNodes[index];
            if (ele) {
                if (ele.nodeName != "#text") {
                    ele.style.transition = object._char_transition;
                    ele.style.transform = "translateY(-"+object._distance.toString()+"%)";
                    ele.style.opacity = "0%";
                }
            }
            index += 1;
            if(index < max_index) {setTimeout(() => {remove_next_char(object);}, object._delay);}
            else {setTimeout(() => {object.getEle().innerHTML = "";}, object._delay)}
        }

        setTimeout(() => {remove_next_char(this);}, this._delay);
    }

    getEle() {
        return document.getElementById(this.ele_id);
    }

    estimateTimeLeft() {
        var childNodes = this.getEle().childNodes;
        return childNodes.length * this._delay + this._delay*2;
    }
}
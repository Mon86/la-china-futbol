var FPF_Colorpicker=function(){function e(){this.colorPickerClass=".fpf-field-control.color:not(.no-render)",this.init()}var r=e.prototype;return r.init=function(){this.colorPickersExist()&&this.initColorPickers()},r.initColorPickers=function(){var c=this,l=this;document.querySelectorAll(this.colorPickerClass).forEach(function(e){e.classList.add("no-render");var r=e.querySelector(".fpf-colorpicker-item"),t=e.querySelector(".color-preview"),o=e.querySelector(".color-preview-value");jQuery(r).wpColorPicker({change:function(e,r){r=r.color.toCSS();l.updateValue(r,t,o)}}),r.value&&c.updateValue(r.value,t,o);var i,n=e.querySelector(".wp-picker-container").querySelector(".wp-color-result");e.querySelector(".fpf-colorpicker-opener").addEventListener("click",function(e){n.click(),e.preventDefault(),e.stopPropagation()});o.addEventListener("input",function(e){clearTimeout(i);e=e.target.value;this.updateValue(e,t,r),i=setTimeout(function(){jQuery(r).trigger("change")},300)}.bind(c))})},r.updateValue=function(e,r,t){e=e.replace(/;+$/,""),r.removeAttribute("style"),r.style.background=e,t.value=e,t.dispatchEvent(new Event("input",{bubbles:!0}))},r.colorPickersExist=function(){return!!document.querySelectorAll(this.colorPickerClass).length},e}();document.addEventListener("DOMContentLoaded",function(e){new FPF_Colorpicker});


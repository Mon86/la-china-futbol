var FPF_Units_Control=function(){function t(){this.unitParentItemClass=".fpf-responsive-control-device-item-inner-field",this.unitsSelectorClass=".fpf-units-control-selector",this.toggleClass=".fpf-units-control-selector-toggle",this.unitsControlClass=".fpf-units-control",this.unitControlItemClass=".fpf-unit-control-item",this.selectedUnitControlPreviewerClass=".fpf-units-control-selected-unit-preview",this.initEvents()}var e=t.prototype;return e.initEvents=function(){document.addEventListener("click",function(t){this.initUnitsToggle(t),this.initSelectedUnitPreviewerUpdater(t),this.initClickReset(t)}.bind(this))},e.initUnitsToggle=function(t){var e=t.target.closest(this.unitsControlClass);e&&!t.target.closest(this.unitControlItemClass)&&(this.hideOtherUnitControls(),e.classList.contains("is-active")?this.toggleUnit(e,"hide"):this.toggleUnit(e,"show"),t.preventDefault())},e.toggleUnit=function(t,e){t.classList.remove("is-active");var i=t.querySelector(this.unitsSelectorClass),s=t.querySelector(this.toggleClass);"hide"==e?(i&&i.classList.remove("is-visible"),s&&s.classList.remove("rotate")):(t.classList.add("is-active"),i&&i.classList.add("is-visible"),s&&s.classList.add("rotate"))},e.initSelectedUnitPreviewerUpdater=function(t){var e,i,s=t.target.closest(this.unitControlItemClass);s&&(e=s.closest(this.unitsControlClass).querySelector(this.selectedUnitControlPreviewerClass),i=s.querySelector("label").innerHTML,e.innerHTML=i,(s=t.target.closest(this.unitParentItemClass).querySelectorAll(".fpf-control-input-item"))&&s.forEach(function(t){t.readOnly="auto"==i}),this.hideOtherUnitControls())},e.initClickReset=function(t){t.target.closest(this.unitsControlClass)||t.target.closest(this.unitsSelectorClass)||this.hideOtherUnitControls()},e.hideOtherUnitControls=function(){var e=this,t=document.querySelectorAll(this.unitsControlClass+".is-active");t&&t.length&&t.forEach(function(t){e.toggleUnit(t,"hide")})},t}();document.addEventListener("DOMContentLoaded",function(t){new FPF_Units_Control});

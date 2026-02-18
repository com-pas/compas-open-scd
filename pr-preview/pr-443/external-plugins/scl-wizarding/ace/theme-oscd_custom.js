var arr = ["require","exports","module","ace/lib/dom"];

const cssText = `
.ace-oscd-custom .ace_gutter {
    background: var(--oscd-base2);
    color: #333
}

.ace-oscd-custom .ace_print-margin {width: 1px;background: #e8e8e8}

.ace-oscd-custom {
    background-color: var(--oscd-base3);
    color: var(--oscd-base01)}

.ace-oscd-custom.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px var(--oscd-base3);
}

.ace-oscd-custom .ace_marker-layer .ace_active-line {
    background: var(--oscd-base2)
}

.ace-oscd-custom .ace_storage {color: var(--oscd-base02)}

.ace-oscd-custom .ace_string {color: var(--oscd-primary)}

.ace-oscd-custom .ace_keyword,
.ace-oscd-custom .ace_meta,
.ace-oscd-custom .ace_support.ace_class,
.ace-oscd-custom .ace_support.ace_type {color: var(--oscd-accent-green)}

.ace-oscd-custom .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid rgba(147, 161, 161, 0.50)
}

.ace-oscd-custom .ace_cursor {color: #000000}
.ace-oscd-custom .ace_marker-layer .ace_selection {background: rgba(7, 54, 67, 0.09)}

.ace-oscd-custom .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}

.ace-oscd-custom .ace_gutter-active-line {
    background-color : #EDE5C1
}

.ace-oscd-custom .ace_marker-layer .ace_selected-word {border: 1px solid #7f9390}
.ace-oscd-custom .ace_invisible {color: rgba(147, 161, 161, 0.50)}

.ace-oscd-custom .ace_constant.ace_character,
.ace-oscd-custom .ace_constant.ace_other {color: var(--oscd-accent-orange)}
 
.ace-oscd-custom .ace_constant.ace_language {color: var(--oscd-accent-yellow)}

.ace-oscd-custom .ace_constant.ace_numeric {color: var(--oscd-accent-magenta)}

.ace-oscd-custom .ace_fold {
    background-color: var(--oscd-accent-blue);
    border-color: #586E75
}

.ace-oscd-custom .ace_entity.ace_name.ace_function,
.ace-oscd-custom .ace_entity.ace_name.ace_tag,
.ace-oscd-custom .ace_support.ace_function,
.ace-oscd-custom .ace_variable,
.ace-oscd-custom .ace_variable.ace_language {color: var(--oscd-accent-blue)}

.ace-oscd-custom .ace_string.ace_regexp {color: var(--oscd-accent-red)}

.ace-oscd-custom .ace_comment,
.ace-oscd-custom .ace_entity.ace_other.ace_attribute-name {color: var(--oscd-theme-base1)}

.ace-oscd-custom .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y}

`

ace.define("ace/theme/oscd_custom",arr,
    function(e,t,n){
        t.isDark=!1,t.cssClass="ace-oscd-custom",t.cssText = cssText;
        var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)
    });      
    
(function() {
    ace.require(["ace/theme/oscd_custom"], 
        function(m) {
            if (typeof module == "object" && typeof exports == "object" && module) {
                module.exports = m;
            }
        });
})();
            
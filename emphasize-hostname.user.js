// ==UserScript==
// @name           emphasize-domain
// @namespace      anbt
// @include        *
// ==/UserScript==


(function(){
   var d = document;

   function passwordBox(){
     var inputs = d.getElementsByTagName("input");
     for(var a=0; a<inputs.length; a++){
       if(inputs[a].getAttribute("type") === "password" ){
         return inputs[a];
       }
     }
     return null;
   }

   function applyRules(elem, rules){
     for(var key in rules){
       elem.style[key] = rules[key];
     }
   }


   ////////////////////////////////


   var target = passwordBox();
   var domain = d.createElement("p");
   domain.innerHTML = location.href.split("/")[2];
   applyRules(domain
              , {
                border: "solid 8px red"
                , background: "Lime"
                , color: "purple"
                , font: "200% bold"
                , padding: "1ex"
                , margin: "2px"
                , letterSpacing: "0.1ex"
                , fontFamily: "monospace"
              }
             );

   target.parentNode.insertBefore(domain, target);
 })();

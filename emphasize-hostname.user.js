// ==UserScript==
// @name           emphasize-hostname
// @namespace      anbt
// @include        *
// ==/UserScript==


/*
Copyright (c) 2010 sonota (yosiot8753@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


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
   var hostname = d.createElement("p");
   hostname.innerHTML = location.href.split("/")[2];
   applyRules(hostname
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

   target.parentNode.insertBefore(hostname, target);
 })();

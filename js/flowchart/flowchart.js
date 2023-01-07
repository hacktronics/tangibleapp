!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i(require("Raphael"));else if("function"==typeof define&&define.amd)define(["Raphael"],i);else{var e,s=i("object"==typeof exports?require("Raphael"):t.Raphael);for(e in s)("object"==typeof exports?exports:t)[e]=s[e]}}(this,function(e){return n=[function(t,i,e){e(9);var s=e(4),e=(e(15),{parse:s});"undefined"!=typeof window&&(window.flowchart=e),t.exports=e},function(t,i){t.exports={defaults:function t(i,e){if(!i||"function"==typeof i)return e;var s,n={};for(s in e)n[s]=e[s];for(s in i)i[s]&&("object"==typeof n[s]?n[s]=t(n[s],i[s]):n[s]=i[s]);return n},inherits:function(t,i){var e;"function"==typeof Object.create?(t.super_=i,t.prototype=Object.create(i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})):(t.super_=i,(e=function(){}).prototype=i.prototype,t.prototype=new e,t.prototype.constructor=t)}}},function(t,i,e){function s(t,i,e){this.chart=t,this.group=this.chart.paper.set(),this.symbol=e,this.connectedTo=[],this.symbolType=i.symbolType,this.flowstate=i.flowstate||"future",this.lineStyle=i.lineStyle||{},this.key=i.key||"",this.leftLines=[],this.rightLines=[],this.topLines=[],this.bottomLines=[],this.params=i.params,this.next_direction=i.next&&i.direction_next?i.direction_next:void 0,this.text=this.chart.paper.text(0,0,i.text),i.key&&(this.text.node.id=i.key+"t"),this.text.node.setAttribute("class",this.getAttr("class")+"t"),this.text.attr({"text-anchor":"start",x:this.getAttr("text-margin"),fill:this.getAttr("font-color"),"font-size":this.getAttr("font-size")});var t=this.getAttr("font"),s=this.getAttr("font-family"),n=this.getAttr("font-weight"),o=(t&&this.text.attr({font:t}),s&&this.text.attr({"font-family":s}),n&&this.text.attr({"font-weight":n}),i.link&&this.text.attr("href",i.link),i.function&&(this.text.attr({cursor:"pointer"}),this.text.node.addEventListener("click",function(t){window[i.function](t,i)},!1)),i.target&&this.text.attr("target",i.target),this.getAttr("maxWidth"));if(o){for(var h=i.text.split(" "),r="",a=0,l=h.length;a<l;a++){var p=h[a];this.text.attr("text",r+" "+p),r+=this.text.getBBox().width>o?"\n"+p:" "+p}this.text.attr("text",r.substring(1))}this.group.push(this.text),e&&(t=this.getAttr("text-margin"),e.attr({fill:this.getAttr("fill"),stroke:this.getAttr("element-color"),"stroke-width":this.getAttr("line-width"),width:this.text.getBBox().width+2*t,height:this.text.getBBox().height+2*t}),e.node.setAttribute("class",this.getAttr("class")),s=this.getAttr("roundness"),isNaN(s)||(e.node.setAttribute("ry",s),e.node.setAttribute("rx",s)),i.link&&e.attr("href",i.link),i.target&&e.attr("target",i.target),i.function&&(e.node.addEventListener("click",function(t){window[i.function](t,i)},!1),e.attr({cursor:"pointer"})),i.key&&(e.node.id=i.key),this.group.push(e),e.insertBefore(this.text),this.text.attr({y:e.getBBox().height/2}),this.initialize())}var e=e(3),N=e.drawLine,$=e.checkLineIntersection;s.prototype.getAttr=function(t){var i,e,s;if(this.chart)return e=this.chart.options?this.chart.options[t]:void 0,s=this.chart.options.symbols?this.chart.options.symbols[this.symbolType][t]:void 0,(i=this.chart.options.flowstate&&this.chart.options.flowstate[this.flowstate]?this.chart.options.flowstate[this.flowstate][t]:i)||s||e},s.prototype.initialize=function(){this.group.transform("t"+this.getAttr("line-width")+","+this.getAttr("line-width")),this.width=this.group.getBBox().width,this.height=this.group.getBBox().height},s.prototype.getCenter=function(){return{x:this.getX()+this.width/2,y:this.getY()+this.height/2}},s.prototype.getX=function(){return this.group.getBBox().x},s.prototype.getY=function(){return this.group.getBBox().y},s.prototype.shiftX=function(t){this.group.transform("t"+(this.getX()+t)+","+this.getY())},s.prototype.setX=function(t){this.group.transform("t"+t+","+this.getY())},s.prototype.shiftY=function(t){this.group.transform("t"+this.getX()+","+(this.getY()+t))},s.prototype.setY=function(t){this.group.transform("t"+this.getX()+","+t)},s.prototype.getTop=function(){var t=this.getY();return{x:this.getX()+this.width/2,y:t}},s.prototype.getBottom=function(){var t=this.getY()+this.height;return{x:this.getX()+this.width/2,y:t}},s.prototype.getLeft=function(){var t=this.getY()+this.group.getBBox().height/2;return{x:this.getX(),y:t}},s.prototype.getRight=function(){var t=this.getY()+this.group.getBBox().height/2;return{x:this.getX()+this.group.getBBox().width,y:t}},s.prototype.render=function(){var h,r,t;this.next&&(r=(h=this).getAttr("line-length"),"right"===this.next_direction?(t=this.getRight(),this.next.isPositioned||(this.next.setY(t.y-this.next.height/2),this.next.shiftX(this.group.getBBox().x+this.width+r),function t(){for(var i=!1,e=0,s=h.chart.symbols.length;e<s;e++){var n=h.chart.symbols[e],o=Math.abs(n.getCenter().x-h.next.getCenter().x);if(n.getCenter().y>h.next.getCenter().y&&o<=h.next.width/2){i=!0;break}}i&&"end"!==h.next.symbolType&&(h.next.setX(n.getX()+n.width+r),t())}(),this.next.isPositioned=!0,this.next.render())):"left"===this.next_direction?(t=this.getLeft(),this.next.isPositioned||(this.next.setY(t.y-this.next.height/2),this.next.shiftX(-(this.group.getBBox().x+this.width+r)),function t(){for(var i=!1,e=0,s=h.chart.symbols.length;e<s;e++){var n=h.chart.symbols[e],o=Math.abs(n.getCenter().x-h.next.getCenter().x);if(n.getCenter().y>h.next.getCenter().y&&o<=h.next.width/2){i=!0;break}}i&&"end"!==h.next.symbolType&&(h.next.setX(n.getX()+n.width+r),t())}(),this.next.isPositioned=!0,this.next.render())):(t=this.getBottom(),this.next.isPositioned||(this.next.shiftY(this.getY()+this.height+r),this.next.setX(t.x-this.next.width/2),this.next.isPositioned=!0,this.next.render())))},s.prototype.renderLines=function(){this.next&&(this.next_direction?this.drawLineTo(this.next,this.getAttr("arrow-text")||"",this.next_direction):this.drawLineTo(this.next,this.getAttr("arrow-text")||""))},s.prototype.drawLineTo=function(t,i,e){this.connectedTo.indexOf(t)<0&&this.connectedTo.push(t);var s,n,o=this.getCenter().x,h=this.getCenter().y,r=this.getRight(),a=this.getBottom(),l=this.getTop(),p=this.getLeft(),y=t.getCenter().x,x=t.getCenter().y,g=t.getTop(),f=t.getRight(),c=t.getLeft(),d=o===y,m=h===x,u=h<x,x=x<h||this===t,h=y<o,o=o<y,y=0,b=this.getAttr("line-length"),_=this.getAttr("line-width");if(e&&"bottom"!==e||!d||!u?e&&"right"!==e||!m||!o?e&&"left"!==e||!m||!h?(e&&"right"!==e||!d||!x)&&(e&&"right"!==e||!d||!u)?e&&"bottom"!==e||!h?e&&"bottom"!==e||!o||!u?e&&"bottom"!==e||!o?e&&"right"===e&&h?(n=10*Math.max(t.topLines.length,this.rightLines.length),s=N(this.chart,r,[{x:r.x+b/2,y:r.y},{x:r.x+b/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.rightLines.push(s),t.topLines.push(s),this.rightStart=!0,t.topEnd=!0,y=r.x+b/2):e&&"right"===e&&o?(n=10*Math.max(t.topLines.length,this.rightLines.length),s=N(this.chart,r,[{x:g.x,y:r.y-n},{x:g.x,y:g.y-n}],i),this.rightLines.push(s),t.topLines.push(s),this.rightStart=!0,t.topEnd=!0,y=r.x+b/2):e&&"bottom"===e&&d&&x?(n=10*Math.max(t.topLines.length,this.bottomLines.length),s=N(this.chart,a,[{x:a.x,y:a.y+b/2-n},{x:r.x+b/2,y:a.y+b/2-n},{x:r.x+b/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.bottomLines.push(s),t.topLines.push(s),this.bottomStart=!0,t.topEnd=!0,y=a.x+b/2):"left"===e&&d&&x?(m=p.x-b/2,c.x<p.x&&(m=c.x-b/2),n=10*Math.max(t.topLines.length,this.leftLines.length),s=N(this.chart,p,[{x:m,y:p.y-n},{x:m,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.leftLines.push(s),t.topLines.push(s),this.leftStart=!0,t.topEnd=!0,y=p.x):"left"===e?(n=10*Math.max(t.topLines.length,this.leftLines.length),s=N(this.chart,p,[{x:g.x+(p.x-g.x)/2,y:p.y},{x:g.x+(p.x-g.x)/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.leftLines.push(s),t.topLines.push(s),this.leftStart=!0,t.topEnd=!0,y=p.x):"top"===e&&(n=10*Math.max(t.topLines.length,this.topLines.length),s=N(this.chart,l,[{x:l.x,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.topLines.push(s),t.topLines.push(s),this.topStart=!0,t.topEnd=!0,y=l.x):(n=10*Math.max(t.topLines.length,this.bottomLines.length),s=N(this.chart,a,[{x:a.x,y:a.y+b/2-n},{x:a.x+(a.x-g.x)/2,y:a.y+b/2-n},{x:a.x+(a.x-g.x)/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.bottomLines.push(s),t.topLines.push(s),this.bottomStart=!0,t.topEnd=!0,y=a.x+(a.x-g.x)/2):(n=10*Math.max(t.topLines.length,this.bottomLines.length),s=N(this.chart,a,[{x:a.x,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.bottomLines.push(s),t.topLines.push(s),this.bottomStart=!0,t.topEnd=!0,y=a.x,g.x>y&&(y=g.x)):(n=10*Math.max(t.topLines.length,this.bottomLines.length),s=this.leftEnd&&x?N(this.chart,a,[{x:a.x,y:a.y+b/2-n},{x:a.x+(a.x-g.x)/2,y:a.y+b/2-n},{x:a.x+(a.x-g.x)/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i):N(this.chart,a,[{x:a.x,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.bottomLines.push(s),t.topLines.push(s),this.bottomStart=!0,t.topEnd=!0,y=a.x+(a.x-g.x)/2):(n=10*Math.max(t.topLines.length,this.rightLines.length),s=N(this.chart,r,[{x:r.x+b/2,y:r.y-n},{x:r.x+b/2,y:g.y-b/2-n},{x:g.x,y:g.y-b/2-n},{x:g.x,y:g.y}],i),this.rightLines.push(s),t.topLines.push(s),this.rightStart=!0,t.topEnd=!0,y=r.x+b/2):(s=0===t.rightLines.length&&0===this.leftLines.length?N(this.chart,p,f,i):(n=10*Math.max(t.rightLines.length,this.leftLines.length),N(this.chart,r,[{x:r.x,y:r.y-n},{x:r.x,y:f.y-n},{x:f.x,y:f.y-n},{x:f.x,y:f.y}],i)),this.leftLines.push(s),t.rightLines.push(s),this.leftStart=!0,t.rightEnd=!0,y=f.x):(s=0===t.leftLines.length&&0===this.rightLines.length?N(this.chart,r,c,i):(n=10*Math.max(t.leftLines.length,this.rightLines.length),N(this.chart,r,[{x:r.x,y:r.y-n},{x:r.x,y:c.y-n},{x:c.x,y:c.y-n},{x:c.x,y:c.y}],i)),this.rightLines.push(s),t.leftLines.push(s),this.rightStart=!0,t.leftEnd=!0,y=c.x):(s=0===t.topLines.length&&0===this.bottomLines.length?N(this.chart,a,g,i):(n=10*Math.max(t.topLines.length,this.bottomLines.length),N(this.chart,a,[{x:g.x,y:g.y-n},{x:g.x,y:g.y}],i)),this.bottomLines.push(s),t.topLines.push(s),this.bottomStart=!0,t.topEnd=!0,y=a.x),this.lineStyle[t.key]&&s&&s.attr(this.lineStyle[t.key]),s){for(var w=0,v=this.chart.lines.length;w<v;w++)for(var L=this.chart.lines[w].attr("path"),k=s.attr("path"),B=0,A=L.length-1;B<A;B++){var M=[];M.push(["M",L[B][1],L[B][2]]),M.push(["L",L[B+1][1],L[B+1][2]]);for(var O=M[0][1],E=M[0][2],z=M[1][1],F=M[1][2],X=0,R=k.length-1;X<R;X++){var T,S=[],C=(S.push(["M",k[X][1],k[X][2]]),S.push(["L",k[X+1][1],k[X+1][2]]),S[0][1]),Y=S[0][2],P=S[1][1],S=S[1][2],j=$(O,E,z,F,C,Y,P,S);j.onLine1&&j.onLine2&&(T=Y===S?P<C?(T=["L",j.x+2*_,Y],k.splice(X+1,0,T),["C",j.x+2*_,Y,j.x,Y-4*_,j.x-2*_,Y]):(T=["L",j.x-2*_,Y],k.splice(X+1,0,T),["C",j.x-2*_,Y,j.x,Y-4*_,j.x+2*_,Y]):S<Y?(T=["L",C,j.y+2*_],k.splice(X+1,0,T),["C",C,j.y+2*_,C+4*_,j.y,C,j.y-2*_]):(T=["L",C,j.y-2*_],k.splice(X+1,0,T),["C",C,j.y-2*_,C+4*_,j.y,C,j.y+2*_]),k.splice(X+2,0,T),s.attr("path",k),X+=2)}}this.chart.lines.push(s),(void 0===this.chart.minXFromSymbols||this.chart.minXFromSymbols>p.x)&&(this.chart.minXFromSymbols=p.x)}(!this.chart.maxXFromLine||this.chart.maxXFromLine&&y>this.chart.maxXFromLine)&&(this.chart.maxXFromLine=y)},t.exports=s},function(t,i){t.exports={drawPath:function(t,i,e){for(var s="M{0},{1}",n=2,o=2*e.length+2;n<o;n+=2)s+=" L{"+n+"},{"+(n+1)+"}";var h=[i.x,i.y];for(n=0,o=e.length;n<o;n++)h.push(e[n].x),h.push(e[n].y);(i=t.paper.path(s,h)).attr("stroke",t.options["element-color"]),i.attr("stroke-width",t.options["line-width"]);var r=t.options.font,a=t.options["font-family"],t=t.options["font-weight"];return r&&i.attr({font:r}),a&&i.attr({"font-family":a}),t&&i.attr({"font-weight":t}),i},drawLine:function(t,i,e,s){for(var n="M{0},{1}",o=2,h=2*(e="[object Array]"!==Object.prototype.toString.call(e)?[e]:e).length+2;o<h;o+=2)n+=" L{"+o+"},{"+(o+1)+"}";var r=[i.x,i.y];for(o=0,h=e.length;o<h;o++)r.push(e[o].x),r.push(e[o].y);var a,l,p,y,x,g=t.paper.path(n,r),f=(g.attr({stroke:t.options["line-color"],"stroke-width":t.options["line-width"],"arrow-end":t.options["arrow-end"]}),t.options.font),c=t.options["font-family"],d=t.options["font-weight"];return f&&g.attr({font:f}),c&&g.attr({"font-family":c}),d&&g.attr({"font-weight":d}),s&&(s=t.paper.text(0,0,s),l=!(a="start"),p=e[0],i.y===p.y&&(l=!0),x=y=0,y=i.x,x=i.y,l?(i.x>p.x?(y-=t.options["text-margin"]/2,a="end"):y+=t.options["text-margin"]/2,x-=t.options["text-margin"]):(y+=t.options["text-margin"]/2,x+=t.options["text-margin"],i.y>p.y&&(x-=2*t.options["text-margin"])),s.attr({"text-anchor":a,"font-size":t.options["font-size"],fill:t.options["font-color"],x:y,y:x}),f&&s.attr({font:f}),c&&s.attr({"font-family":c}),d&&s.attr({"font-weight":d})),g},checkLineIntersection:function(t,i,e,s,n,o,h,r){var a={x:null,y:null,onLine1:!1,onLine2:!1},l=(r-o)*(e-t)-(h-n)*(s-i);return 0==l||(o=(h-n)*(h=i-o)-(r-o)*(r=t-n),r=((e-t)*h-(s-i)*r)/l,a.x=t+(h=o/l)*(e-t),a.y=i+h*(s-i),0<h&&h<1&&(a.onLine1=!0),0<r&&r<1&&(a.onLine2=!0)),a}}},function(t,i,e){var Y=e(7),P=e(13),j=e(10),E=e(12),z=e(11),F=e(14),R=e(5),N=e(6);t.exports=function(t){function i(t){var i=t.indexOf("(")+1,e=t.indexOf(")");return 0<=i&&0<=e?s.symbols[t.substring(0,i-1)]:s.symbols[t]}t=(t=t||"").trim();for(var e,s={symbols:{},start:null,drawSVG:function(t,i){var o=this,h=(this.diagram&&this.diagram.clean(),new Y(t,i)),r=(this.diagram=h,{});!function t(i,e,s){var n=function(t){if(r[t.key])return r[t.key];switch(t.symbolType){case"start":r[t.key]=new P(h,t);break;case"end":r[t.key]=new j(h,t);break;case"operation":r[t.key]=new E(h,t);break;case"inputoutput":r[t.key]=new z(h,t);break;case"subroutine":r[t.key]=new F(h,t);break;case"condition":r[t.key]=new R(h,t);break;case"parallel":r[t.key]=new N(h,t);break;default:return new Error("Wrong symbol type!")}return r[t.key]}(i);return o.start===i?h.startWith(n):e&&s&&!e.pathOk&&(e instanceof R?(s.yes===i&&e.yes(n),s.no===i&&e.no(n)):e instanceof N?(s.path1===i&&e.path1(n),s.path2===i&&e.path2(n),s.path3===i&&e.path3(n)):e.then(n)),n.pathOk||(n instanceof R?(i.yes&&t(i.yes,n,i),i.no&&t(i.no,n,i)):n instanceof N?(i.path1&&t(i.path1,n,i),i.path2&&t(i.path2,n,i),i.path3&&t(i.path3,n,i)):i.next&&t(i.next,n,i)),n}(this.start),h.render()},clean:function(){this.diagram.clean()},options:function(){return this.diagram.options}},n=[],o=0,h=1,r=t.length;h<r;h++)"\n"===t[h]&&"\\"!==t[h-1]&&(e=t.substring(o,h),o=h+1,n.push(e.replace(/\\\n/g,"\n")));o<t.length&&n.push(t.substr(o));for(var a,l=1,p=n.length;l<p;){var y=n[l];y.indexOf("->")<0&&y.indexOf("=>")<0&&y.indexOf("@>")<0?(n[l-1]+="\n"+y,n.splice(l,1),p--):l++}for(;0<n.length;){var x,g,f=n.splice(0,1)[0].trim();if(0<=f.indexOf("=>")){var c,d,m=f.split("=>"),u={key:m[0].replace(/\(.*\)/,""),symbolType:m[1],text:null,link:null,target:null,flowstate:null,function:null,lineStyle:{},params:{}},m=m[0].match(/\((.*)\)/);if(m&&1<m.length)for(var b=m[1].split(","),_=0;_<b.length;_++){var w=b[_].split("=");2==w.length&&(u.params[w[0]]=w[1])}0<=u.symbolType.indexOf(": ")&&(c=u.symbolType.split(": "),u.symbolType=c.shift(),u.text=c.join(": ")),u.text&&0<=u.text.indexOf(":$")?(c=u.text.split(":$"),u.text=c.shift(),u.function=c.join(":$")):0<=u.symbolType.indexOf(":$")?(c=u.symbolType.split(":$"),u.symbolType=c.shift(),u.function=c.join(":$")):u.text&&0<=u.text.indexOf(":>")?(c=u.text.split(":>"),u.text=c.shift(),u.link=c.join(":>")):0<=u.symbolType.indexOf(":>")&&(c=u.symbolType.split(":>"),u.symbolType=c.shift(),u.link=c.join(":>")),0<=u.symbolType.indexOf("\n")&&(u.symbolType=u.symbolType.split("\n")[0]),u.link&&(m=u.link.indexOf("[")+1,d=u.link.indexOf("]"),0<=m&&0<=d&&(u.target=u.link.substring(m,d),u.link=u.link.substring(0,m-1))),u.text&&0<=u.text.indexOf("|")&&(d=u.text.split("|"),u.flowstate=d.pop().trim(),u.text=d.join("|")),s.symbols[u.key]=u}else if(0<=f.indexOf("->"))for(var v=function(t){var i=t.indexOf("(")+1,e=t.indexOf(")");if(1<(t=(t=0<(t=t.substring(i,e)).indexOf(",")?t.substring(0,t.indexOf(",")):t).split("@")).length)return 0<=i&&0<=e?t[1]:""}(f),L=(f=v?f.replace("@"+v,""):f).split("->"),k=0,B=L.length;k<B;k++){var A=L[k],M=(O=X=void 0,X=(M=A).indexOf("(")+1,O=M.indexOf(")"),0<=X&&0<=O?M.substring(X,O):""),O=("true"!==M&&"false"!==M||(A=(A=A.replace("true","yes")).replace("false","no")),O=X=void 0,X="next",O=(M=A).indexOf("(")+1,M=M.indexOf(")"),0<=O&&0<=M&&((X=A.substring(O,M)).indexOf(",")<0&&"yes"!==X&&"no"!==X&&(X="next, "+X)),X),M=i(A),X=null;0<=O.indexOf(",")&&(O=(A=O.split(","))[0],X=A[1].trim()),v&&("condition"===M.symbolType?"yes"===O||"true"===O?M.yes_annotation=v:M.no_annotation=v:"parallel"===M.symbolType&&("path1"===O?M.path1_annotation=v:"path2"===O?M.path2_annotation=v:"path3"===O&&(M.path3_annotation=v)),v=null),s.start||(s.start=M),k+1<B&&(A=L[k+1],M[O]=i(A),M["direction_"+O]=X,X=null)}else if(0<=f.indexOf("@>"))for(var T=f.split("@>"),S=0,C=T.length;S<C;S++)S+1!==C&&(x=i(T[S]),g=i(T[S+1]),x.lineStyle[g.key]=JSON.parse((x=T[S+1],a=g=void 0,g=x.indexOf("(")+1,a=x.indexOf(")"),0<=g&&0<=a?x.substring(g,a):"{}")))}return s}},function(t,i,e){function s(t,i){h.call(this,t,i=i||{}),this.yes_annotation=i.yes_annotation,this.no_annotation=i.no_annotation,this.textMargin=this.getAttr("text-margin"),this.yes_direction=i.direction_yes,this.no_direction=i.direction_no,this.no_direction||"right"!==this.yes_direction?this.yes_direction||"bottom"!==this.no_direction||(this.yes_direction="right"):this.no_direction="bottom",this.yes_direction=this.yes_direction||"bottom",this.no_direction=this.no_direction||"right",this.text.attr({x:2*this.textMargin});var e=this.text.getBBox().width+3*this.textMargin,s=(e+=e/2,this.text.getBBox().height+2*this.textMargin),n=(s+=s/2,e/4),o=(s=Math.max(.5*e,s))/4;this.text.attr({x:n+this.textMargin/2});t=r(t,{x:n,y:o},[{x:n-e/4,y:o+s/4},{x:n-e/4+e/2,y:o+s/4+s/2},{x:n-e/4+e,y:o+s/4},{x:n-e/4+e/2,y:o+s/4-s/2},{x:n-e/4,y:o+s/4}]);t.attr({stroke:this.getAttr("element-color"),"stroke-width":this.getAttr("line-width"),fill:this.getAttr("fill")}),i.link&&t.attr("href",i.link),i.target&&t.attr("target",i.target),i.key&&(t.node.id=i.key),t.node.setAttribute("class",this.getAttr("class")),this.text.attr({y:t.getBBox().height/2}),this.group.push(t),t.insertBefore(this.text),this.symbol=t,this.initialize()}var h=e(2),n=e(1).inherits,r=e(3).drawPath;n(s,h),s.prototype.render=function(){var t,h=this,r=(this.yes_direction&&(this[this.yes_direction+"_symbol"]=this.yes_symbol),this.no_direction&&(this[this.no_direction+"_symbol"]=this.no_symbol),this.getAttr("line-length"));this.bottom_symbol&&(t=this.getBottom(),this.bottom_symbol.isPositioned||(this.bottom_symbol.shiftY(this.getY()+this.height+r),this.bottom_symbol.setX(t.x-this.bottom_symbol.width/2),this.bottom_symbol.isPositioned=!0,this.bottom_symbol.render())),this.right_symbol&&(t=this.getRight(),this.right_symbol.isPositioned||(this.right_symbol.setY(t.y-this.right_symbol.height/2),this.right_symbol.shiftX(this.group.getBBox().x+this.width+r),function t(){for(var i,e=!1,s=0,n=h.chart.symbols.length;s<n;s++)if(i=h.chart.symbols[s],!h.params["align-next"]||"no"!==h.params["align-next"]){var o=Math.abs(i.getCenter().x-h.right_symbol.getCenter().x);if(i.getCenter().y>h.right_symbol.getCenter().y&&o<=h.right_symbol.width/2){e=!0;break}}e&&"end"!==h.right_symbol.symbolType&&(h.right_symbol.setX(i.getX()+i.width+r),t())}(),this.right_symbol.isPositioned=!0,this.right_symbol.render())),this.left_symbol&&(t=this.getLeft(),this.left_symbol.isPositioned||(this.left_symbol.setY(t.y-this.left_symbol.height/2),this.left_symbol.shiftX(-(this.group.getBBox().x+this.width+r)),function t(){for(var i,e=!1,s=0,n=h.chart.symbols.length;s<n;s++)if(i=h.chart.symbols[s],!h.params["align-next"]||"no"!==h.params["align-next"]){var o=Math.abs(i.getCenter().x-h.left_symbol.getCenter().x);if(i.getCenter().y>h.left_symbol.getCenter().y&&o<=h.left_symbol.width/2){e=!0;break}}e&&"end"!==h.left_symbol.symbolType&&(h.left_symbol.setX(i.getX()+i.width+r),t())}(),this.left_symbol.isPositioned=!0,this.left_symbol.render()))},s.prototype.renderLines=function(){this.yes_symbol&&this.drawLineTo(this.yes_symbol,this.yes_annotation||this.getAttr("yes-text"),this.yes_direction),this.no_symbol&&this.drawLineTo(this.no_symbol,this.no_annotation||this.getAttr("no-text"),this.no_direction)},t.exports=s},function(t,i,e){function s(t,i){var e=t.paper.rect(0,0,0,0);n.call(this,t,i=i||{},e),this.path1_annotation=i.path1_annotation||"",this.path2_annotation=i.path2_annotation||"",this.path3_annotation=i.path3_annotation||"",this.textMargin=this.getAttr("text-margin"),this.path1_direction="bottom",this.path2_direction="right",this.path3_direction="top",this.params=i.params,"path1"===i.direction_next&&!i[i.direction_next]&&i.next&&(i[i.direction_next]=i.next),"path2"===i.direction_next&&!i[i.direction_next]&&i.next&&(i[i.direction_next]=i.next),"path3"===i.direction_next&&!i[i.direction_next]&&i.next&&(i[i.direction_next]=i.next),i.path1&&i.direction_path1&&i.path2&&!i.direction_path2&&i.path3&&!i.direction_path3?"right"===i.direction_path1?(this.path2_direction="bottom",this.path1_direction="right",this.path3_direction="top"):"top"===i.direction_path1?(this.path2_direction="right",this.path1_direction="top",this.path3_direction="bottom"):"left"===i.direction_path1?(this.path2_direction="right",this.path1_direction="left",this.path3_direction="bottom"):(this.path2_direction="right",this.path1_direction="bottom",this.path3_direction="top"):i.path1&&!i.direction_path1&&i.path2&&i.direction_path2&&i.path3&&!i.direction_path3?"right"===i.direction_path2?(this.path1_direction="bottom",this.path2_direction="right",this.path3_direction="top"):"left"===i.direction_path2?(this.path1_direction="bottom",this.path2_direction="left",this.path3_direction="right"):(this.path1_direction="right",this.path2_direction="bottom",this.path3_direction="top"):i.path1&&!i.direction_path1&&i.path2&&!i.direction_path2&&i.path3&&i.direction_path3?"right"===i.direction_path2?(this.path1_direction="bottom",this.path2_direction="top",this.path3_direction="right"):"left"===i.direction_path2?(this.path1_direction="bottom",this.path2_direction="right",this.path3_direction="left"):(this.path1_direction="right",this.path2_direction="bottom",this.path3_direction="top"):(this.path1_direction=i.direction_path1,this.path2_direction=i.direction_path2,this.path3_direction=i.direction_path3),this.path1_direction=this.path1_direction||"bottom",this.path2_direction=this.path2_direction||"right",this.path3_direction=this.path3_direction||"top",this.initialize()}var n=e(2);(0,e(1).inherits)(s,n),s.prototype.render=function(){this.path1_direction&&(this[this.path1_direction+"_symbol"]=this.path1_symbol),this.path2_direction&&(this[this.path2_direction+"_symbol"]=this.path2_symbol),this.path3_direction&&(this[this.path3_direction+"_symbol"]=this.path3_symbol);var t,h=this.getAttr("line-length"),r=(this.bottom_symbol&&(t=this.getBottom(),this.bottom_symbol.isPositioned||(this.bottom_symbol.shiftY(this.getY()+this.height+h),this.bottom_symbol.setX(t.x-this.bottom_symbol.width/2),this.bottom_symbol.isPositioned=!0,this.bottom_symbol.render())),this.top_symbol&&(t=this.getTop(),this.top_symbol.isPositioned||(this.top_symbol.shiftY(this.getY()-this.top_symbol.height-h),this.top_symbol.setX(t.x+this.top_symbol.width),this.top_symbol.isPositioned=!0,this.top_symbol.render())),this);this.left_symbol&&(t=this.getLeft(),this.left_symbol.isPositioned||(this.left_symbol.setY(t.y-this.left_symbol.height/2),this.left_symbol.shiftX(-(this.group.getBBox().x+this.width+h)),function t(){for(var i,e=!1,s=0,n=r.chart.symbols.length;s<n;s++)if(i=r.chart.symbols[s],!r.params["align-next"]||"no"!==r.params["align-next"]){var o=Math.abs(i.getCenter().x-r.left_symbol.getCenter().x);if(i.getCenter().y>r.left_symbol.getCenter().y&&o<=r.left_symbol.width/2){e=!0;break}}e&&"end"!==r.left_symbol.symbolType&&(r.left_symbol.setX(i.getX()+i.width+h),t())}(),this.left_symbol.isPositioned=!0,this.left_symbol.render())),this.right_symbol&&(t=this.getRight(),this.right_symbol.isPositioned||(this.right_symbol.setY(t.y-this.right_symbol.height/2),this.right_symbol.shiftX(this.group.getBBox().x+this.width+h),function t(){for(var i,e=!1,s=0,n=r.chart.symbols.length;s<n;s++)if(i=r.chart.symbols[s],!r.params["align-next"]||"no"!==r.params["align-next"]){var o=Math.abs(i.getCenter().x-r.right_symbol.getCenter().x);if(i.getCenter().y>r.right_symbol.getCenter().y&&o<=r.right_symbol.width/2){e=!0;break}}e&&"end"!==r.right_symbol.symbolType&&(r.right_symbol.setX(i.getX()+i.width+h),t())}(),this.right_symbol.isPositioned=!0,this.right_symbol.render()))},s.prototype.renderLines=function(){this.path1_symbol&&this.drawLineTo(this.path1_symbol,this.path1_annotation,this.path1_direction),this.path2_symbol&&this.drawLineTo(this.path2_symbol,this.path2_annotation,this.path2_direction),this.path3_symbol&&this.drawLineTo(this.path3_symbol,this.path3_annotation,this.path3_direction)},t.exports=s},function(t,i,e){function s(t,i){i=i||{},this.paper=new n(t),this.options=o(i,h),this.symbols=[],this.lines=[],this.start=null}var n=e(16),o=e(1).defaults,h=e(8),r=e(5),a=e(6);s.prototype.handle=function(i){this.symbols.indexOf(i)<=-1&&this.symbols.push(i);var e=this;return i instanceof r?(i.yes=function(t){return i.yes_symbol=t,i.no_symbol&&(i.pathOk=!0),e.handle(t)},i.no=function(t){return i.no_symbol=t,i.yes_symbol&&(i.pathOk=!0),e.handle(t)}):i instanceof a?(i.path1=function(t){return i.path1_symbol=t,i.path2_symbol&&(i.pathOk=!0),e.handle(t)},i.path2=function(t){return i.path2_symbol=t,i.path3_symbol&&(i.pathOk=!0),e.handle(t)},i.path3=function(t){return i.path3_symbol=t,i.path1_symbol&&(i.pathOk=!0),e.handle(t)}):i.then=function(t){return i.next=t,i.pathOk=!0,e.handle(t)},i},s.prototype.startWith=function(t){return this.start=t,this.handle(t)},s.prototype.render=function(){for(var t=0,i=0,e=0,s=0,n=0,o=0,h=0,r=0,e=0,s=this.symbols.length;e<s;e++)(a=this.symbols[e]).width>t&&(t=a.width),a.height>i&&(i=a.height);for(e=0,s=this.symbols.length;e<s;e++)(a=this.symbols[e]).shiftX(this.options.x+(t-a.width)/2+this.options["line-width"]),a.shiftY(this.options.y+(i-a.height)/2+this.options["line-width"]);for(this.start.render(),e=0,s=this.symbols.length;e<s;e++)(a=this.symbols[e]).renderLines();for(n=this.maxXFromLine,e=0,s=this.symbols.length;e<s;e++){var a,l,p,y=(a=this.symbols[e]).getX();y<h&&(h=y),n<(l=y+a.width)&&(n=l),o<(p=a.getY()+a.height)&&(o=p)}for(e=0,s=this.lines.length;e<s;e++){l=(g=this.lines[e].getBBox()).x,p=g.y;var x=g.x2,g=g.y2;l<h&&(h=l),p<r&&(r=p),n<x&&(n=x),o<g&&(o=g)}var f=this.options.scale,c=this.options["line-width"],d=((h=this.minXFromSymbols<h?this.minXFromSymbols:h)<0&&(h-=c),r<0&&(r-=c),n+c-h),c=o+c-r;this.paper.setSize(d*f,c*f),this.paper.setViewBox(h,r,d,c,!0)},s.prototype.clean=function(){var t;this.paper&&(t=this.paper.canvas).parentNode&&t.parentNode.removeChild(t)},t.exports=s},function(t,i){t.exports={x:0,y:0,"line-width":3,"line-length":50,"text-margin":10,"font-size":14,"font-color":"black","line-color":"black","element-color":"black",fill:"white","yes-text":"yes","no-text":"no","arrow-end":"block",class:"flowchart",scale:1,symbols:{start:{},end:{},condition:{},inputoutput:{},operation:{},subroutine:{},parallel:{}}}},function(t,i){Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null===this)throw new TypeError;var i=Object(this),e=i.length>>>0;if(0==e)return-1;var s=0;if(0<arguments.length&&((s=Number(arguments[1]))!=s?s=0:0!==s&&s!=1/0&&s!=-1/0&&(s=(0<s||-1)*Math.floor(Math.abs(s)))),e<=s)return-1;for(var n=0<=s?s:Math.max(e-Math.abs(s),0);n<e;n++)if(n in i&&i[n]===t)return n;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){"use strict";if(null===this)throw new TypeError;var i=Object(this),e=i.length>>>0;if(0==e)return-1;var s=e;1<arguments.length&&((s=Number(arguments[1]))!=s?s=0:0!==s&&s!=1/0&&s!=-1/0&&(s=(0<s||-1)*Math.floor(Math.abs(s))));for(var n=0<=s?Math.min(s,e-1):e-Math.abs(s);0<=n;n--)if(n in i&&i[n]===t)return n;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})},function(t,i,e){function s(t,i){var e=t.paper.rect(0,0,0,0,20);(i=i||{}).text=i.text||"End",n.call(this,t,i,e)}var n=e(2);(0,e(1).inherits)(s,n),t.exports=s},function(t,i,e){function s(t,i){h.call(this,t,i=i||{}),this.textMargin=this.getAttr("text-margin"),this.text.attr({x:3*this.textMargin});var e=this.text.getBBox().width+4*this.textMargin,s=this.text.getBBox().height+2*this.textMargin,n=this.textMargin,o=s/2,s=[{x:n-this.textMargin,y:s},{x:n-this.textMargin+e,y:s},{x:n-this.textMargin+e+2*this.textMargin,y:0},{x:n-this.textMargin+2*this.textMargin,y:0},{x:n,y:o}],e=r(t,{x:n,y:o},s);e.attr({stroke:this.getAttr("element-color"),"stroke-width":this.getAttr("line-width"),fill:this.getAttr("fill")}),i.link&&e.attr("href",i.link),i.target&&e.attr("target",i.target),i.key&&(e.node.id=i.key),e.node.setAttribute("class",this.getAttr("class")),this.text.attr({y:e.getBBox().height/2}),this.group.push(e),e.insertBefore(this.text),this.symbol=e,this.initialize()}var h=e(2),n=e(1).inherits,r=e(3).drawPath;n(s,h),s.prototype.getLeft=function(){var t=this.getY()+this.group.getBBox().height/2;return{x:this.getX()+this.textMargin,y:t}},s.prototype.getRight=function(){var t=this.getY()+this.group.getBBox().height/2;return{x:this.getX()+this.group.getBBox().width-this.textMargin,y:t}},t.exports=s},function(t,i,e){function s(t,i){var e=t.paper.rect(0,0,0,0);n.call(this,t,i=i||{},e)}var n=e(2);(0,e(1).inherits)(s,n),t.exports=s},function(t,i,e){function s(t,i){var e=t.paper.rect(0,0,0,0,20);(i=i||{}).text=i.text||"Start",n.call(this,t,i,e)}var n=e(2);(0,e(1).inherits)(s,n),t.exports=s},function(t,i,e){function s(t,i){var e=t.paper.rect(0,0,0,0),e=(o.call(this,t,i=i||{},e),e.attr({width:this.text.getBBox().width+4*this.getAttr("text-margin")}),this.text.attr({x:2*this.getAttr("text-margin")}),t.paper.rect(0,0,0,0)),t=(e.attr({x:this.getAttr("text-margin"),stroke:this.getAttr("element-color"),"stroke-width":this.getAttr("line-width"),width:this.text.getBBox().width+2*this.getAttr("text-margin"),height:this.text.getBBox().height+2*this.getAttr("text-margin"),fill:this.getAttr("fill")}),i.key&&(e.node.id=i.key+"i"),this.getAttr("font")),s=this.getAttr("font-family"),n=this.getAttr("font-weight");t&&e.attr({font:t}),s&&e.attr({"font-family":s}),n&&e.attr({"font-weight":n}),i.link&&e.attr("href",i.link),i.target&&e.attr("target",i.target),this.group.push(e),e.insertBefore(this.text),this.initialize()}var o=e(2);(0,e(1).inherits)(s,o),t.exports=s},function(t,i,e){var s,n,o;function l(t,i){return t==i||Array.isArray(i)&&(i.includes(t)||i.includes(Number(t)))}"undefined"!=typeof jQuery&&(s=e(4),n=jQuery,o={init:function(i){return this.each(function(){var t=n(this);this.chart=s(t.text()),t.html(""),this.chart.drawSVG(this,i)})},setFlowStateByParam:function(h,r,a){return this.each(function(){var t,i=this.chart,e=["next","yes","no","path1","path2","path3"];for(t in i.symbols)if(i.symbols.hasOwnProperty(t)){var s=i.symbols[t];if(l(s.params[h],r)){s.flowstate=a;for(var n=0;n<e.length;n++){var o=e[n];s[o]&&s[o].params&&s[o].params[h]&&l(s[o].params[h],r)&&(s.lineStyle[s[o].key]={stroke:i.options().flowstate[a].fill})}}}i.clean(),i.drawSVG(this)})},clearFlowState:function(){return this.each(function(){var t,i=this.chart;for(t in i.symbols)i.symbols.hasOwnProperty(t)&&(i.symbols[t].flowstate="");i.clean(),i.drawSVG(this)})}},n.fn.flowChart=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void n.error("Method "+t+" does not exist on jQuery.flowChart"):o.init.apply(this,arguments)})},function(t,i){t.exports=e}],o={},s.m=n,s.c=o,s.p="",s(0);function s(t){if(o[t])return o[t].exports;var i=o[t]={exports:{},id:t,loaded:!1};return n[t].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}var n,o});
/**
*	@name							Elastic
*	@descripton						Elastic is jQuery plugin that grow and shrink your textareas automatically
*	@version						1.6.12
*	@requires						jQuery 1.2.6+
*
*	@author							Jan Jarfalk
*	@author-email					jan.jarfalk@unwrongest.com
*	@author-website					http://www.unwrongest.com
*
*	@licence						MIT License - http://www.opensource.org/licenses/mit-license.php
*/(function(e){e.fn.extend({elastic:function(t){var n=e.extend({delay:250},t),r=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){function f(){var e=Math.floor(parseInt(t.width(),10));if(i.width()!==e){i.css({width:e+"px"});c(!0)}}function l(e,n){var r=Math.floor(parseInt(e,10));t.height()!==r&&t.css({height:r+"px",overflow:n})}function c(e){var n=t.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />"),r=i.html().replace(/<br>/ig,"<br />");if(e||n+"&nbsp;"!==r){i.html(n+"&nbsp;");if(Math.abs(i.height()+s-t.height())>3){var a=i.height()+s;a>=u?l(u,"auto"):a<=o?l(o,"hidden"):l(a,"hidden")}}}if(this.type!=="textarea")return!1;var t=e(this),i=e("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),s=parseInt(t.css("line-height"),10)||parseInt(t.css("font-size"),"10"),o=parseInt(t.css("height"),10)||s*3,u=parseInt(t.css("max-height"),10)||Number.MAX_VALUE;u<0&&(u=Number.MAX_VALUE);i.appendTo(t.parent());var a=r.length;while(a--)i.css(r[a].toString(),t.css(r[a].toString()));t.css({overflow:"hidden"});t.bind("keyup change cut paste",function(){c()});e(window).bind("resize",f);t.bind("resize",f);t.bind("update",c);t.bind("blur",function(){i.height()<u&&(i.height()>o?t.height(i.height()):t.height(o))});t.bind("input paste",function(){setTimeout(c,n.delay)});c()})}})})(jQuery);
(function() { this.JST || (this.JST = {}); this.JST["replyForwardEmailBox"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<label class=\'reply-forward-email-to\'>\n  <input type=\'text\' name=\'email[addressees][email]\'\n         value="',  recipient.escape('email') ,'">\n  <input type=\'hidden\' name=\'email[addressees][email_type]\' value=\'to\'>\n</label>\n<input type=\'hidden\' name=\'email[subject]\' value="',  email.escape('subject') ,'">\n<label class=\'compose-email-body\'>\n  <textarea name=\'email[body]\'>',  email.escape('body') ,'</textarea>\n</label>\n<div class=\'reply-forward-footer\'>\n  <div class=\'garbage-can-holder\'>\n    <aside id=\'delete-reply-forward\' class=\'icon-garbage-can\'></aside>\n  </div>\n  <p class=\'saving-saved\'></p>\n  <button type=\'submit\' class=\'compose-email-send-button blue-button\'>Send</button>\n</div>\n');}return __p.join('');};
}).call(this);

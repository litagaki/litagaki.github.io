(function() { this.JST || (this.JST = {}); this.JST["composeEmailBox"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<header class=\'compose-email-popup-header group\'>\n  <h4 class=\'compose-email-popup-header-text\'>New Message</h4>\n  <aside id=\'cancel-compose-box-popup\'\n         class=\'icon-light-cross\'></aside>\n</header>\n\n<label class=\'compose-email-popup-to\'>To:\n  <input type=\'text\' name=\'email[addressees][email]\'>\n  <input type=\'hidden\' name=\'email[addressees][email_type]\' value=\'to\'>\n</label>\n<p class=\'compose-email-from\'>\n  From: ',  Maildog.currentUser.escape('email') ,'\n</p>\n<label class=\'compose-email-subject\'>Subject:\n  <input type=\'text\' name=\'email[subject]\' value="',  email.escape('subject') ,'">\n</label>\n<label class=\'compose-email-body\'>Body:\n  <textarea name=\'email[body]\'>',  email.escape('body') ,'</textarea>\n</label>\n<div class=\'garbage-can-holder\'>\n  <aside id=\'delete-message\' class=\'icon-garbage-can\'></aside>\n</div>\n<p class=\'saving-saved\'></p>\n<button class=\'blue-button\'>Send</button>\n');}return __p.join('');};
}).call(this);

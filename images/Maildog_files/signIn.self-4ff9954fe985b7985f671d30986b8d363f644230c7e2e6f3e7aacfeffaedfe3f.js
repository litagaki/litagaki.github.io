(function() { this.JST || (this.JST = {}); this.JST["signIn"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>Maildog</h1>\n<h2>Sign in to continue</h2>\n<section class=\'sign-in-box\'></section>\n\n<form class=\'sign-in-as-guest-form\' action=\'/session/create_guest\' method=\'post\'>\n  <input type=\'hidden\' name=\'authenticity_token\'>\n  <button class=\'sign-in-as-guest-button\'>Sign in as Petr</button>\n</form>\n\n<a href="/users/new" class=\'create-account-link\'>Create account</a>\n<a class=\'sign-in-as-different invisible\'>Sign in with a different account</a>\n');}return __p.join('');};
}).call(this);
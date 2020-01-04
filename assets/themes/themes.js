var _loaded_theme = '';

function load_theme_css(theme) {
  $("<link>").attr({
    rel: "stylesheet",
    type: "text/css",
    href: "assets/themes/" + theme + "/" + theme + ".css"
  }).appendTo("head");
}

function load_theme(theme, force) {
  if (!force && _loaded_theme != '') return;
  if (!fso.FileExists('assets/themes/' + theme + '/' + theme + '.js')) return;

  load_theme_css(theme);
  document.write('<script src="assets/themes/' + theme + '/' + theme + '.js"></script>');
  _loaded_theme = theme;
}

function themes_loader() {
  if (!$wb_settings['enable_theme_loader']) return;
  var file = 'assets/themes/loader.js';
  if (fso.FileExists(file)) {
    document.write('<script src="' + file + '"></script>');
  }
}

themes_loader();
if ($wb_settings['theme'] != '') {
  load_theme($wb_settings['theme']);
}

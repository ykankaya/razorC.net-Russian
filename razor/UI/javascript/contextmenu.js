function defPosition(event) {
      var x = y = 0;
      if (document.attachEvent != null) { // Internet Explorer & Opera
            x = window.event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
            y = window.event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      } else if (!document.attachEvent && document.addEventListener) { // Gecko
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
      } else {
            // Do nothing
      }
      return {x:x, y:y};
}
function menu(type, evt) {
	// Блокируем всплывание события contextmenu
	evt = evt || window.event;
	evt.cancelBubble = true;
	// Показываем собственное контекстное меню
	var menu = document.getElementById("contextMenuId");
	var html = "";
	switch (type) {
		case (1) :
			html = "<div id=\"context-menu\"><div class=\"string\"><a href=\"/\"><table><tr><td><div class=\"context-image\"><img src=\"/favicon.ico\"/></div></td><td><div>Главная страница</div></td></tr></table></a></div>";
			html += "<div class=\"string\"><a href=\"#b-comment\"><table><tr><td><div class=\"context-image\"></div></td><td><div>Оставить комментарий</div></td></tr></table></a></div>";
			html += "<div class=\"string\"><a class=\"b-1-tiptip\" title=\"Перейти в специалный раздел разработки\" href=\"/Content/Code\"><table><tr><td><div class=\"context-image\"><img src=\"/_C/Files/Image/context-menu-dev.png\"/></div></td><td><div>Перейти к разработке</div></td></tr></table></a></div>";
			html += "<div class=\"string\"><a href=\"#top\"><table><tr><td><div class=\"context-image\"></div></td><td><div>Перейти к меню</div></div></td></tr></table></a></div>";
            html += "<div class=\"string\"><a href=\"#top\"><table><tr><td><div class=\"context-image\"></div></td><td><div>Правовая информация</div></div></td></tr></table></a></div>";
            html += "<div class=\"string\"><a href=\"#top\"><table><tr><td><div class=\"context-image\"></div></td><td><div>Подробнее о нас</div></div></td></tr></table></a></div>";
		break;
		/*case (2) :
			html = "Меню для второго ДИВа";
			html += "<br><i>(пусто)</i>";
		break;*/
		default :
			// Nothing
		break;
	}
	// Если есть что показать - показываем
	if (html) {
		menu.innerHTML = html;
		menu.style.top = defPosition(evt).y + "px";
		menu.style.left = defPosition(evt).x + "px";
		menu.style.display = "";
	}
	// Блокируем всплывание стандартного браузерного меню
	return false;
}
// Закрываем контекстное при клике левой или правой кнопкой по документу
// Функция для добавления обработчиков событий
function addHandler(object, event, handler, useCapture) {
	if (object.addEventListener) {
		object.addEventListener(event, handler, useCapture ? useCapture : false);
	} else if (object.attachEvent) {
		object.attachEvent('on' + event, handler);
	} else alert("Add handler is not supported");
}
addHandler(document, "contextmenu", function() {
	document.getElementById("contextMenuId").style.display = "none";
});
addHandler(document, "click", function() {
	document.getElementById("contextMenuId").style.display = "none";
});

//var code = document.getElementById("search");

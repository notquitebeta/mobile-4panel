$(document).ready(function(){
  $('.navtab').on('fastclick click', function(){selectTab($(this))});

  // $('button').on('click',function(){
  //   alert('new');
  // });
});

var selectTab = function(thisTab){
    var $bottomNav = $("#bottomNav"),
        $tab = thisTab,
        $panels = $("#panels");
  if ($tab.hasClass("notSelected")) {
    $bottomNav.find(".selected")
              .removeClass("selected")
              .addClass("notSelected");
    $tab.removeClass("notSelected").addClass("selected");
    $panels.find(".selected")
           .removeClass("selected")
           .addClass("notSelected")
           .addClass("hideMobile");
    var $tabNumber = $tab.data('tab');
    // print($tabNumber);
    switch ($tabNumber) {
      case 'navtab1':
        $panels.find("#tab1")
               .addClass("selected")
               .removeClass("notSelected")
               .removeClass("hideMobile");
        tab1action();
        break;
      case 'navtab2':
        $panels.find("#tab2")
               .addClass("selected")
               .removeClass("notSelected")
               .removeClass("hideMobile");
        tab2action();
        break;
      case 'navtab3':
        $panels.find("#tab3")
               .addClass("selected")
               .removeClass("notSelected")
               .removeClass("hideMobile");
        tab3action();
        break;
      case 'navtab4':
        $panels.find("#tab4")
               .addClass("selected")
               .removeClass("notSelected")
               .removeClass("hideMobile");
        tab4action();
        break;                        
    }
  }
};

var tab1action = function(){
};
var tab2action = function(){
};
var tab3action = function(){
};
var tab4action = function(){
  // checkCookie();
  // setCookie("note","value",1);
  // printCookies();
  // getCookie("note");
};

var print = function(item){
  if (typeof console !== 'undefined'){
    console.log(item);
  }
}
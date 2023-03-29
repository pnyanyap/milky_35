$(document).ready(function(){
  $(".star").click(function(){
    if ($(".frame").hasClass("f1")) {
      $(".frame").removeClass("f1");
      $(".frame").addClass("f2");
      $(".star").addClass("none");
      $(".text1").removeClass("none");
    }
  });
  $(".strelka").click(function(){
    if ($(".t2").hasClass("exist")) {
      $(".text1").addClass("none");
      $(".chel").removeClass("none");
      $(".kit").removeClass("none");
      $(".k").addClass("exist1");
      $(".mesto").removeClass("none");
    }
  });
  $(".strelka").click(function(){
    if ($(".t2").hasClass("none")) {
      $(".t2").removeClass("none");
      $(".t2").addClass("exist");
      $(".t1").addClass("none");
      $(".strelka2").removeClass("none");
    }
  });
  $(".strelka2").click(function(){
    if ($(".t1").hasClass("none")) {
      $(".t1").removeClass("none");
      $(".t2").removeClass("exist");
      $(".t2").addClass("none");
      $(".strelka2").addClass("none");
    }
  });
  $( function() {
    $( ".k" ).draggable();
    $( ".mesto" ).droppable({
      drop: function( event, ui ) {
        $( ".k" )
        .css( "top", "-90vw" )
        .css( "left", "96vw" )
        $(".kit").addClass("none");
        $(".kit2").removeClass("none");
      }
    });
  } );
});

$(document).ready(function(){
  $(".star").click(function(){
    if ($(".frame").hasClass("f1")) {
      $(".frame").removeClass("f1");
      $(".frame").addClass("f2");
      $(".star").addClass("none");
      $(".text1").removeClass("none");
    }
  });
  $(".strelka3").click(function(){
    if ($(".t2").hasClass("exist")) {
      $(".text2").addClass("none");
      $(".chel").removeClass("none");
      $(".kit").removeClass("none");
      $(".k").addClass("exist1");
      $(".mesto").removeClass("none");
      $(".buble").removeClass("none");
    }
  });
  $(".strelka").click(function(){
    if ($(".t2").hasClass("none")) {
      $(".t2").removeClass("none");
      $(".t2").addClass("exist");
      $(".t1").addClass("none");
      $(".text1").addClass("none");
      $(".text2").removeClass("none");
      $(".strelka2").removeClass("none");
      $(".strelka3").removeClass("none");
    }
  });
  $(".strelka2").click(function(){
    if ($(".t1").hasClass("none")) {
      $(".t1").removeClass("none");
      $(".t2").removeClass("exist");
      $(".t2").addClass("none");
      $(".text2").addClass("none");
      $(".text1").removeClass("none");
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
        $(".buble").addClass("none");
        setTimeout(function(){
        $('.kit').addClass("none");
      }, 500);
        setTimeout(function(){
        $('.kit2').removeClass("none");
      }, 500);
      setTimeout(function(){
      $('.kit2').addClass("animka00");
      }, 1000);
      setTimeout(function(){
      $('.kit2').remove ();
    }, 3000);
      setTimeout(function(){
      $('.kit3').removeClass("none");
    }, 3000);
    setTimeout(function(){
    $('.kit3').addClass("animka01");
  }, 3000);
      setTimeout(function(){
      $('.kit3').addClass("exist");
    }, 3000);
      setTimeout(function(){
      $('.chel').addClass("none");
    }, 3000);
      setTimeout(function(){
      $('.chel2').removeClass("none");
    }, 2950);
      setTimeout(function(){
      $('.kit3').addClass("animka0");
    }, 4000);
      }
    });
  } );
  $(".kit3").click(function(){
    if ($(".kit3").hasClass("exist")) {
      $(".kit3").removeClass("animka0");
      $(".kit3").addClass("animka");
      setTimeout(function(){
      $('.kit3').addClass("none1");
      }, 3200);
      setTimeout(function(){
      $('.star2').removeClass("none");
      }, 3200);
      setTimeout(function(){
      $('.star2').addClass("animka2");
      }, 3200);
      setTimeout(function(){
      $('.star2').addClass("none");
      }, 4000);
      setTimeout(function(){
      $('.jest').removeClass("none");
      }, 4800);
      setTimeout(function(){
      $('.strelka0').removeClass("none");
    }, 5500);
    }
  });
  $(".strelka0").click(function(){
    if ($(".frame").hasClass("f2")) {
      $(".frame").removeClass("f2");
      $(".frame").addClass("f3");
      $(".kit3").remove();
      $(".star2").remove();
      $(".chel2").remove();
      $(".jest").remove();
      $(".strelka0").remove();
      $(".text3").removeClass("none");
      $(".t3").removeClass("none");
      $(".strelka4").removeClass("none");
    }
  });
  $(".strelka4").click(function(){
    if ($(".text4").hasClass("none")) {
      $(".text3").addClass("none");
      $(".t3").addClass("none");
      $(".text4").removeClass("none");
      $(".t4").removeClass("none");
      $(".strelka5").removeClass("none");
      $(".strelka6").removeClass("none");
    }
  });
  $(".strelka5").click(function(){
    if ($(".text3").hasClass("none")) {
      $(".text4").addClass("none");
      $(".t4").addClass("none");
      $(".text3").removeClass("none");
      $(".t3").removeClass("none");
      $(".strelka5").addClass("none");
      $(".strelka6").addClass("none");
      $(".strelka4").removeClass("none");
    }
  });
  $(".strelka6").click(function(){
    if ($(".frame").hasClass("f3")) {
      $(".text4").addClass("none");
      $(".t4").addClass("none");
      $(".strelka5").addClass("none");
      $(".strelka6").addClass("none");
      $(".p1").removeClass("none");
      $(".p2").removeClass("none");
      $(".p3").removeClass("none");
      $(".p4").removeClass("none");
      $(".p5").removeClass("none");
      $(".kit4").removeClass("none");
      $(".chel3").removeClass("none");
      $(".buble2").removeClass("none");
    }
  });
  $( function() {
    $( ".p1" ).draggable({connectWith: ".frame"});
  });
  $( function() {
    $( ".p2" ).draggable({connectWith: ".frame"});
  });
  $( function() {
    $( ".p3" ).draggable(({
    drag: function( event, ui ) {
      setTimeout(function(){
      $('.kit4').addClass("animka3");
    }, 500);
      setTimeout(function(){
      $('.kit4').addClass("none");
    }, 2000);
      setTimeout(function(){
      $('.kit2').removeClass("none");
    }, 500);
    setTimeout(function(){
    $('.chel3').addClass("none");
  }, 100);
    setTimeout(function(){
    $('.buble2').addClass("none");
  }, 100);
    setTimeout(function(){
    $('.p1').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.p2').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.p3').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.p4').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.p5').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.p5').addClass("none");
    }, 2200);
    setTimeout(function(){
    $('.frame').removeClass("f3");
    }, 2200);
    setTimeout(function(){
      $('.frame').addClass("f4");
    }, 2200);
    setTimeout(function(){
    $('.text5').removeClass("none");
    }, 2200);
  }
  }))
  } );
  $( function() {
    $( ".p4" ).draggable({connectWith: ".frame"});
  });
  $( function() {
    $( ".p5" ).draggable({connectWith: ".frame"});
  });
  $(".strelka7").click(function(){
    if ($(".frame").hasClass("f4")) {
      $(".text5").addClass("none");
      $(".kit4").removeClass("none")
      $(".s1").removeClass("none");
      $(".s2").removeClass("none");
      $(".s3").removeClass("none");
      $(".tr1").removeClass("none");
      $(".mesto2").removeClass("none");
      $(".mesto3").removeClass("none");
      $(".mesto4").removeClass("none");
      $(".mesto5").removeClass("none");
      $(".chel4").removeClass("none");
      $(".buble3").removeClass("none");
      $(".dom").removeClass("none");
    }
  });
  $( function() {
    $( ".s1" ).draggable();
    $( ".mesto2" ).droppable({
      drop: function( event, ui ) {
        $( ".s1" )
        .css( "top", "5vw" )
        .css( "left", "-25vw" )
      }
    });
  } );
  $( function() {
    $( ".s2" ).draggable();
    $( ".mesto3" ).droppable({
      drop: function( event, ui ) {
        $( ".s2" )
        .css( "top", "-4vw" )
        .css( "left", "16vw" )
      }
    });
  } );
  $( function() {
    $( ".s3" ).draggable();
    $( ".mesto4" ).droppable({
      drop: function( event, ui ) {
        $( ".s3" )
        .css( "top", "7vw" )
        .css( "left", "-11vw" )
      }
    });
  } );
  $( function() {
    $( ".tr1" ).draggable();
    $( ".mesto5" ).droppable({
      drop: function( event, ui ) {
        $( ".tr1" )
        .css( "top", "-12vw" )
        .css( "left", "18.3vw" )
        $('.strelka8').removeClass("none1");
      }
    });
  } );
  $(".strelka8").click(function(){
    if ($(".frame").hasClass("f4")) {
      $(".frame").removeClass("f4");
      $(".frame").addClass("f5");
      $(".dom").remove();
      $(".chel4").remove();
      $(".strelka8").remove();
      $(".buble3").remove();
      $(".mesto2").remove();
      $(".mesto3").remove();
      $(".mesto4").remove();
      $(".mesto5").remove();
      $(".s1").remove();
      $(".s2").remove();
      $(".s3").remove();
      $(".tr1").remove();
      $(".text6").removeClass("none");
    }
  });
  $(".strelka9").click(function(){
    if ($(".frame").hasClass("f5")) {
      $(".text6").remove();
      $(".kupon").removeClass("none");
      $(".t7").removeClass("none");
    }
  });
});

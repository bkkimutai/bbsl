$(document).ready(()=>{
  $("#design-image").click(()=>{
    $("#design-image").hide();
    $("#design").show();
  });
  $("#design").click(()=>{
    $("#design").hide();
    $("#design-image").show();
  });
  $("#development-image").click(()=>{
    $("#development-image").hide();
    $("#development").show();
  });
  $("#development").click(()=>{
    $("#development").hide()
    $("#development-image").show();
  });
  $("#product-image").click(()=>{
    $("#product-image").hide();
    $("#product").show();
  });
  $("#product").click(()=>{
    $("#product").hide();
    $("#product-image").show();
  });
  $("#work1").mouseover(()=>{
    $("#overlay").show();
  }).mouseout(()=>{
    $("#overlay").hide();
  });
  $("#work2").mouseover(()=>{
    $("#overlay2").show();
  }).mouseout(()=>{
    $("#overlay2").hide();
  });
  $("#work3").mouseover(()=>{
    $("#overlay3").show();
  }).mouseout(()=>{
    $("#overlay3").hide();
  });
  $("#work4").mouseover(()=>{
    $("#overlay4").show();
  }).mouseout(()=>{
    $("#overlay4").hide();
  });
  $("#work5").mouseover(()=>{
    $("#overlay5").show();
  }).mouseout(()=>{
    $("#overlay5").hide();
  });
  $("#work6").mouseover(()=>{
    $("#overlay6").show();
  }).mouseout(()=>{
    $("#overlay6").hide();
  });
  $("#work7").mouseover(()=>{
    $("#overlay7").show();
  }).mouseout(()=>{
    $("#overlay7").hide();
  });
  $("#work8").mouseover(()=>{
    $("#overlay8").show();
  }).mouseout(()=>{
    $("#overlay8").hide();
  });
});

const form = document.getElementById("form34A");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById("MERGE1");
  const userName = nameInput.value;
  
  const message = `Hello ${userName}, we have received your message, and thank you for reaching out to us!`;
  
  alert(message);

  // Get the alert box and set its max width and height using CSS
  const alertBox = document.getElementsByClassName("alert")[0];
  alertBox.style.maxWidth = "100vw";
  alertBox.style.maxHeight = "100vh";
  
  form.submit();
});



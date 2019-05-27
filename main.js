$(document).ready(function()
{
  var i = 1;
  next(i);

  function next(i)
  {
    if(i == 1)
    {
      $(".container").children(":nth-child(1)").css('z-index', '-1').animate({
        left: '70%',
        top: '250px',
        opacity: 0.5
      }, 700);
      $(".container").children(":nth-child(2)").animate({
        left: '50%',
        top: '200px',
        opacity: 1,
        zIndex: 1
      }, 700);
      $(".container").children(":nth-child(3)").animate({
        left: '30%',
        top: '250px',
        opacity: 0.5,
        zIndex: 0
      }, 700);
    }
    else if (i == 3)
    {
        $(".container").children(":nth-child(3)").css('z-index', '-1').animate({
          left: '70%',
          top: '250px',
          opacity: 0.5
        }, 700);
        $(".container").children(":nth-child(1)").animate({
          left: '50%',
          top: '200px',
          opacity: 1,
          zIndex: 1
        }, 700);
        $(".container").children(":nth-child(2)").animate({
          left: '30%',
          top: '250px',
          opacity: 0.5,
          zIndex: 0
        }, 700);
        i = 0;
    }
    else
    {
        $(".container").children(":nth-child(2)").css('z-index', '-1').animate({
          left: '70%',
          top: '250px',
          opacity: 0.5
        }, 700);
        $(".container").children(":nth-child(3)").animate({
          left: '50%',
          top: '200px',
          opacity: 1,
          zIndex: 1
        }, 700);
        $(".container").children(":nth-child(1)").animate({
          left: '30%',
          top: '250px',
          opacity: 0.5,
          zIndex: 0
        }, 700);
    }


    setTimeout(function()
      {
        i++;
        next(i);
      }, 2000);
  }
});

// generate a random Number
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // get the Distance of two points
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // return an String depending on the distances 
  let getDistanceHint = distance => {
    $(".container-img").empty();
    if (distance < 30) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/Tr6McGP/sonrojado.png" alt="" />');
      return "consentido!";

    } else if (distance < 40) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/n8Q9gNy/feliz.png" alt="" />');
      return "feliz";

    } else if (distance < 60) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/qj0FqM8/serio.png" alt="" />');
      return "serio";

    } else if (distance < 100) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/9c30ncJ/cansado.png" alt="" />');
      return "cansado";

    } else if (distance < 180) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/svWBmvJ/asombrado.png" alt="" />');
      return "asombrado";

    } else if (distance < 360) {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/sKGs2Sw/triste.png" alt="" />');
      return "triste";

    } else {
      $(".container-img").append('<img style="width: 100px; margin-top: 10px" src="https://i.ibb.co/GW9nLR0/congelacion.png" alt="" />');
      return "¡enojado!";
    }
  }
  
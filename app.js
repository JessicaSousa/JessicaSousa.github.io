
var points = [
  {lat:-2.53, lng:-44.302778}, //algum lugar de são luís
  {lat: -2.552690,lng: -44.306573}, //UFMA
  {lat: -2.5761116,lng: -44.2113697} //UEMA
];

var markers = [];

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    maxZoom: 14,
    streetViewControl: false,
    center: {lat:-2.536623,lng: -44.253584}
  });


  for(var i = 0; i < points.length - 1; i++){
    markers[i] = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: (i + 1) + 'º InfoWindow',
      position: points[i]
    });
  }


  var contentVideo = "<iframe width='425' height='344' src='https://www.youtube.com/embed/5CIHvaFo8wY'  allowfullscreen='allowfullscreen' frameborder='0' ></iframe>";
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">História</h1>'+
      '<div id="bodyContent">'+
      '<p> No dia 8 de setembro de 1612 era fundada a cidade de São Luís, uma ilha e também capital do Maranhão. Trata-se da única cidade brasileira ' +
      'fundada por franceses. Depois, ela foi invadida por holandeses e, na sequência, colonizada pelos portugueses. O nome da cidade é uma homenagem '+
      'dada pelos franceses ao rei da França Luís IX, também chamado de "São Luís". Com aproximadamente um milhão de habitantes, a capital maranhense '+
      'conta com grandes corporações e empresas de diversas áreas que se instalaram na cidade pela sua privilegiada posição geográfica entre as regiões '+
      'Norte e Nordeste do país e também pelo fato do seu litoral estar mais próximo de grandes centros importadores como Europa e Estados Unidos. O '+
      'porto de Itaqui, em São Luís, é o segundo mais profundo do mundo e um dos mais movimentados para o comércio exterior no Brasil. Além disso, '+
      'a cidade também é a porta de entrada para o Parque Nacional dos Lençóis Maranhenses, que atrai turistas do Brasil e do exterior. São Luís também '+
      'foi a cidade de grandes escritores como Aluísio de Azevedo, Gonçalves Dias e Graça Aranha. Além disso, a capital também é conhecida pelos ritmos '+
      'como tambor-de-crioula, reggae e bumba-meu-boi. '+
      '<p><b>Fonte</b>: <a href="http://seuhistory.com/hoje-na-historia/e-fundada-cidade-de-sao-luis-capital-do-maranhao">'+
      'Seu History</a> '+
      '(last visited December 22, 2016).</p>'+
      '</div>'+
      '</div>';
  var  infoBubble = new InfoBubble({
    maxWidth: 425,
    maxHeight: 344
   });

  infoBubble.addTab('Info', contentString);
  infoBubble.addTab('Hino da cidade', contentVideo);

  google.maps.event.addListener(markers[0], 'click', function() {
    if (!infoBubble.isOpen()) {
      infoBubble.open(map, markers[0]);
    }
  });

  var infowindow = new google.maps.InfoWindow({
    //content: contentString
  });

  google.maps.event.addListener(markers[1], 'click', function() {
    infowindow.setContent("<div style='height:100px;width:210px;'><img src='images/UFMA_50anos.jpg' style='width:70px;height:70px;''><br>Coordenadas: ("+markers[1].getPosition().toUrlValue(6)+") </div>"); 
    infowindow.open(map,markers[1]);
  });

  google.maps.event.addListener(markers[2], 'click', function() {
    infowindow.setContent("<div style='height:100px;width:210px;'><img src='images/logo_UEMA.png' style='width:200px;height:70px;''><br>Coordenadas: ("+markers[2].getPosition().toUrlValue(6)+") </div>"); 
    infowindow.open(map,markers[2]);
  });
  

}

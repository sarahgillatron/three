import { ConeGeometry, MeshBasicMaterial, MeshDepthMaterial, Mesh } from 'three'

export default function (color) {
  var geometry = new ConeGeometry( 5, 20, 12 );
  var material = new MeshDepthMaterial( {

  } );
  var cone = new Mesh( geometry, material );
return cone
}

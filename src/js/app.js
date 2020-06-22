import { Scene, PerspectiveCamera, WebGLRenderer, ConeGeometry, Material, MeshNormalMaterial, Mesh } from 'three'

var scene = new Scene();
			var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new ConeGeometry( 5, 20, 12 );
			var material = new MeshNormalMaterial( {
				flatShading: true
			 } );
			var cube = new Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 50;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

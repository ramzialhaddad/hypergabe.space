function initCube(){
	const canvas     = document.getElementById('glCanvas')
	const renderer   = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	renderer.setClearColor(0x000000);
	renderer.setPixelRatio(window.devicePixelRatio);

	const camera     = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 3000);
	const scene      = new THREE.Scene();

	const light 	 = new THREE.AmbientLight(0xffffff, 0.5);
	const light1 	 = new THREE.PointLight(0xffffff, 0.5);
	
	const hcGeometry = new THREE.CubeGeometry(100, 100, 100);
	const hcMaterial = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
	const hcMesh     = new THREE.Mesh(hcGeometry, hcMaterial);
	hcMesh.position.set(0, 0, -400);
	
	scene.add(hcMesh);
	scene.add(light);
	scene.add(light1);
	
	requestAnimationFrame(render);
	function render() {
		hcMesh.rotation.x += 0.01;
		hcMesh.rotation.y += 0.01;
		hcMesh.rotation.z += 0.01;
		renderer.render(scene, camera)
		requestAnimationFrame(render);
	}
	
}
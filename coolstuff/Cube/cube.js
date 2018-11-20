function initCube(){
	const canvas     = document.getElementById('glCanvas')
	const renderer   = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
	renderer.setClearColor(0xffd1dc, 0);
	renderer.setPixelRatio(window.devicePixelRatio);

	const camera     = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 3000);
	const scene      = new THREE.Scene();
	
	const hcGeometry = new THREE.CubeGeometry(100, 100, 100);
	const hcMaterial = new THREE.MeshPhongMaterial({
		color: 0x000000,
		polygonOffset: true,
		polygonOffsetFactor: 0,
		polygonOffsetUnits: 1
	});
	const hcMesh     = new THREE.Mesh( hcGeometry, hcMaterial );

	const wGeometry  = new THREE.EdgesGeometry(hcGeometry);
	const wMaterial  = new THREE.LineBasicMaterial({ color: 0x00f9ff});
	const wWireframe = new THREE.LineSegments(wGeometry, wMaterial);

	hcMesh.position.set(0, 0, -400);
	wWireframe.position.set(0, 0, -400);
	
	scene.add(hcMesh);
	scene.add(wWireframe);
	
	requestAnimationFrame(render);
	function render() {
		wWireframe.rotation.x += 0.01;
		wWireframe.rotation.y += 0.01;
		wWireframe.rotation.z += 0.01;
		hcMesh.rotation.x += 0.01;
		hcMesh.rotation.y += 0.01;
		hcMesh.rotation.z += 0.01;
		renderer.render(scene, camera)
		requestAnimationFrame(render);
	}
	
}
const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0, 1000 );

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera( cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000 );

camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// ----------------Room Foundation ---------------- //
function createWall(){

	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(100, 20, 4),  
		new THREE.MeshLambertMaterial({color: "#06A3F7"}) );
	return wall;

}

function createRoom(){

    const room = new THREE.Group();
    
    const rightWall = createWall();
	rightWall.position.set(0, 3.6, -50)
	room.add(rightWall);

    const leftWall = createWall();
	leftWall.rotation.y = 17.28;
	leftWall.position.set(-47.9, 3.6);
	room.add(leftWall);
    
    const floor = new THREE.Mesh( 
		new THREE.PlaneGeometry( 100, 100, 1, 1 ), 
		new THREE.MeshLambertMaterial( { color: "#1D0403" } ) 
	);
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 11;
	floor.position.y= -6.5;
	room.add(floor);

	return room;

}
const room = createRoom();
scene.add(room); 

// ---------------- Window 1---------------- //
function createGlass(){
	const glassWindow = new THREE.Group();
	
	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: "#F6FEFF", opacity: 0.5, transparent: true })
	);
	glass.position.z = -0.6;
	glassWindow.add(glass);

	const light = new THREE.PointLight( 0xff0000, 14, 50 );
	glass.add(light);

	return glass;
};

function createWindow(){

	const window = new THREE.Group();

	const curtainRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	window.add(curtainRight);
	curtainRight.position.set(6.5, 0, -0.5);

	const curtainLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	curtainLeft.position.set(-6.5, 0, -0.5);
	window.add(curtainLeft);

	const frameTop = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop.position.set(0, 10, -0.5);
	window.add(frameTop);

	const glass = createGlass();
	window.add(glass);

	return window;
};

const fullWindow = createWindow();
fullWindow.rotation.y = -17.29;
fullWindow.position.set(-45, 2, -1.1);
scene.add(fullWindow);

// ---------------- Window 2---------------- //
function createGlass2(){
	const glassWindow2 = new THREE.Group();
	
	const glass2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: "#F6FEFF", opacity: 0.5, transparent: true })
	);
	glass2.position.z = -0.6;
	glassWindow2.add(glass2);

	const light2 = new THREE.PointLight( 0xff0000, 14, 50 );
	glass2.add(light2);

	return glass2;
};

function createWindow2(){

	const window2 = new THREE.Group();

	const curtainRight2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	window2.add(curtainRight2);
	curtainRight2.position.set(6.6, 0, -0.5);

	const curtainLeft2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	curtainLeft2.position.set(-6.5, 0, -0.5);
	window2.add(curtainLeft2);

	const frameTop2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop2.position.set(0, 10, -0.5);
	window2.add(frameTop2);

	const glass2 = createGlass2();
	window2.add(glass2);

	return window2;
};

const fullWindow2 = createWindow2();
fullWindow2.rotation.y = -17.29;
fullWindow2.position.set(-45, 2, 33);
scene.add(fullWindow2);

// ---------------- Window 3---------------- //
function createGlass3(){
	const glassWindow3 = new THREE.Group();
	
	const glass3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: "#F6FEFF", opacity: 0.5, transparent: true })
	);
	glass3.position.z = -0.6;
	glassWindow3.add(glass3);

	const light3 = new THREE.PointLight( 0xff0000, 14, 50 );
	glass3.add(light3);

	return glass3;
};

function createWindow2(){

	const window3 = new THREE.Group();

	const curtainRight3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	window3.add(curtainRight3);
	curtainRight3.position.set(6.6, 0, -0.5);

	const curtainLeft3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	curtainLeft3.position.set(-6.5, 0, -0.5);
	window3.add(curtainLeft3);

	const frameTop3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop3.position.set(0, 10, -0.5);
	window3.add(frameTop3);

	const glass3 = createGlass2();
	window3.add(glass3);

	return window3;
};

const fullWindow3 = createWindow2();

fullWindow3.position.set(35, 3, -46);
scene.add(fullWindow3);

// ---------------- Window 4---------------- //
function createGlass4(){
	const glassWindow4 = new THREE.Group();
	
	const glass4 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: "#F6FEFF", opacity: 0.5, transparent: true })
	);
	glass4.position.z = -0.6;
	glassWindow4.add(glass4);

	const light4 = new THREE.PointLight( 0xff0000, 14, 50 );
	glass4.add(light4);

	return glass4;
};

function createWindow4(){

	const window4 = new THREE.Group();

	const curtainRight4 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	window4.add(curtainRight4);
	curtainRight4.position.set(6.6, 0, -0.5);

	const curtainLeft4 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: "#FF0000" })
	);
	curtainLeft4.position.set(-6.5, 0, -0.5);
	window4.add(curtainLeft4);

	const frameTop4 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop4.position.set(0, 10, -0.5);
	window4.add(frameTop4);

	const glass4 = createGlass4();
	window4.add(glass4);

	return window4;
};

const fullWindow4 = createWindow2();

fullWindow4.position.set(-8, 3, -46);
scene.add(fullWindow4);

// ---------------- Car in Inside 1---------------- //
function getCarFrontTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 64, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(8, 8, 48, 24);
  
    return new THREE.CanvasTexture(canvas);
  }

function getCarSideTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 128, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(10, 8, 38, 24);
    context.fillRect(58, 8, 60, 24);
  
    return new THREE.CanvasTexture(canvas);
  }

function createWheels() {
    const geometry = new THREE.BoxBufferGeometry(5, 6, 20);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
  }
  
  function createCar() {
    const car = new THREE.Group();
    
    const backWheel = createWheels();
    backWheel.position.y = 10;
    backWheel.position.x = -9;
    car.add(backWheel);

    const frontWheel = createWheels();
    frontWheel.position.y = 10;  
    frontWheel.position.x = 10;
    car.add(frontWheel);
  
    const main = new THREE.Mesh(
      new THREE.BoxBufferGeometry(30, 6, 17),
      new THREE.MeshLambertMaterial({ color: "#00FF00" })
    );
    main.position.y = 12;
    car.add(main);

    const carFrontTexture = getCarFrontTexture();

    const carBackTexture = getCarFrontTexture();

    const carRightSideTexture = getCarSideTexture();
  
    const carLeftSideTexture = getCarSideTexture();
    carLeftSideTexture.center = new THREE.Vector2(0.5, 0.5);
    carLeftSideTexture.rotation = Math.PI;
    carLeftSideTexture.flipY = false;

    const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 5, 15), [
        new THREE.MeshLambertMaterial({ map: carFrontTexture }),
        new THREE.MeshLambertMaterial({ map: carBackTexture }),
        new THREE.MeshLambertMaterial({ color: 0xffffff }), 
        new THREE.MeshLambertMaterial({ color: 0xffffff }), 
        new THREE.MeshLambertMaterial({ map: carLeftSideTexture }),
    ]);
    cabin.position.x = 1;
    cabin.position.y = 17;
    car.add(cabin);
  
    return car;
  }
  
  const car = createCar();
  car.rotation.y = -17.29;
  car.position.set(-15, 0, -15);
  scene.add(car);
  
// ----------------Durabox---------------- //
function createDesk(){

	const desk = new THREE.Group();
	const frame = new THREE.Mesh(
		new THREE.BoxBufferGeometry(7, 8, 10),
		new THREE.MeshLambertMaterial({ color: "#9406F7" })
	);
	desk.add(frame);

	const knob = new THREE.Mesh(new THREE.BoxBufferGeometry(0.5, 0.5, 2),
	new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	desk.add(knob);
	knob.position.y = 1.6;
	knob.position.x = 4.6;
	
	return desk;
}
// ---------------- Durabox Position---------------- //
const desk = createDesk();
desk.position.set(-42, -4.5, 17);
scene.add(desk);



// ---------------- Car in Inside 2---------------- //
function getCarFrontTexture2() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 64, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(8, 8, 48, 24);
  
    return new THREE.CanvasTexture(canvas);
  }

function getCarSideTexture2() {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 128, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(10, 8, 38, 24);
    context.fillRect(58, 8, 60, 24);
  
    return new THREE.CanvasTexture(canvas);
  }

function createWheels2() {
    const geometry2 = new THREE.BoxBufferGeometry(5, 6, 20);
    const material2 = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel2 = new THREE.Mesh(geometry2, material2);
    return wheel2;
  }
  
  function createCar2() {
    const car2 = new THREE.Group();
    
    const backWheel2 = createWheels();
     
	backWheel2.position.set(-9, 11, 47);
    car.add(backWheel2);

    const frontWheel2 = createWheels();
    frontWheel2.position.y = 10;  
    frontWheel2.position.x = 10;
    car2.add(frontWheel2);
  
    const main = new THREE.Mesh(
      new THREE.BoxBufferGeometry(30, 6, 18),
      new THREE.MeshLambertMaterial({ color: "#D83C06" })
    );
    main.position.y = 12;
    car2.add(main);

    const carFrontTexture2 = getCarFrontTexture2();

    const carBackTexture2 = getCarFrontTexture2();

    const carRightSideTexture2 = getCarSideTexture2();
  
    const carLeftSideTexture2 = getCarSideTexture();
    carLeftSideTexture2.center = new THREE.Vector2(0.5, 0.5);
    carLeftSideTexture2.rotation = Math.PI;
    carLeftSideTexture2.flipY = false;

    const cabin2 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 5, 15), [
        new THREE.MeshLambertMaterial({ map: carFrontTexture2 }),
        new THREE.MeshLambertMaterial({ map: carBackTexture2 }),
        new THREE.MeshLambertMaterial({ color: 0xffffff }), 
        new THREE.MeshLambertMaterial({ color: 0xffffff }), 
        new THREE.MeshLambertMaterial({ map: carLeftSideTexture2 }),
    ]);
    cabin2.position.x = 1;
    cabin2.position.y = 17;
    car2.add(cabin2);
  
    return car2;
  }
  
  const car2 = createCar2();
  car2.rotation.y = -17.29;
  car2.position.set(32, 0, -15);
  scene.add(car2);

// ---------------- Tool Box---------------- //
function createTool(){

	const tool = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 12, 6),
		new THREE.MeshLambertMaterial({color: "#B80606" })
	);
	return tool;
}

function createToolPlace(){

	const toolPlace = new THREE.Mesh();

	const tool1 = createTool();
	tool1.position.set(-1, -1, 47);
	toolPlace.add(tool1);

	const tool2 = createTool();
	tool2.position.set(18, -1, 47);
	toolPlace.add(tool2);
	
	return toolPlace; 
}

const toolPlace = createToolPlace();
scene.add(toolPlace);



























  
//Render Scene
renderer.render(scene, camera);
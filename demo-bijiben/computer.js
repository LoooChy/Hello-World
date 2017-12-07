var isObject3D = false;
var geometryArr = [];
var optionName = "";
var switchName = "";
var newGemoFlag = false;
var scene = new THREE.Scene();
var obj3pingmu = new THREE.Object3D();
var obj3pingmuP = new THREE.Object3D();
var obj3jianpan = new THREE.Object3D();
var obj3DN = new THREE.Object3D();
var camera;
var renderer;
var directionalLight;
var directionalLight1;
var controls;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 1000);
    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor('#FFFFFF');
    renderer.setSize(800, 600);
    $('#webgl').prepend(renderer.domElement);
}

function initLight() {
    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.x = 10 - 0.5;
    directionalLight.position.y = 10 - 0.5;
    directionalLight.position.z = 10 - 0.5;
    directionalLight
        .position
        .normalize();
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.x = -10 - 0.5;
    directionalLight1.position.y = -10 - 0.5;
    directionalLight1.position.z = -10 - 0.5;
    directionalLight1.castShadow = true;
    directionalLight1
        .position
        .normalize();
    scene.add(directionalLight1);
}
// 辅助坐标轴
function initAxis() {
    var axes = new THREE.AxisHelper(100);
    scene.add(axes);
}

var num = 0;
creatComputer();
function creatComputer() {
    creatCube({
        x: 50,
        y: 2,
        z: 40,
        rx: 0,
        ry: 0,
        rz: 0,
        px: 0,
        py: 0,
        pz: 0,
        color: '#f5f5f5',
        name: 'zhuozi'
    });

    creatCube({
        x: 2,
        y: 2,
        z: 40,
        rx: 1.3,
        ry: 0,
        rz: 0,
        px: -24,
        py: 20,
        pz: -26.3,
        color: '#333333',
        name: 'zhuozi',
        types: 'pingmu'
    });
    creatCube({
        x: 2,
        y: 2,
        z: 40,
        rx: 1.3,
        ry: 0,
        rz: 0,
        px: 24,
        py: 20,
        pz: -26.3,
        color: '#333333',
        name: 'zhuozi',
        types: 'pingmu'
    });
    creatCube({
        x: 50,
        y: 2,
        z: 2,
        rx: 1.3,
        ry: 0,
        rz: 0,
        px: 0,
        py: 38.5,
        pz: -31.45,
        color: '#333333',
        name: 'zhuozi',
        types: 'pingmu'
    });
    creatCube({
        x: 50,
        y: 2,
        z: 2,
        rx: 1.3,
        ry: 0,
        rz: 0,
        px: 0,
        py: 1.4,
        pz: -21.14,
        color: '#333333',
        name: 'zhuozi',
        types: 'pingmu'
    });
    creatCube({
        x: 46,
        y: 2,
        z: 37,
        rx: 1.3,
        ry: 0,
        rz: 0,
        px: 0,
        py: 20,
        pz: -26.3,
        color: '#333333',
        name: 'zhuozi',
        type: 'video',
        types: 'pingmu'
    });
    for (var i = 0; i < 14; i++) {
        for (var j = 0; j < 6; j++) {
            creatCube({
                x: 2,
                y: 2,
                z: 2,
                rx: 0,
                ry: 0,
                rz: 0,
                px: -22 + (i * 3.358),
                py: 0.8,
                pz: -16 + (j * 3.358),
                color: '#ffffff',
                name: 'zhuozi',
                type: 'MeshBasicMaterial'
            });
        }
    }
    scene.remove(scene.getChildByName('zhuozi36'));
    scene.remove(scene.getChildByName('zhuozi42'));
    scene.remove(scene.getChildByName('zhuozi48'));
    scene.remove(scene.getChildByName('zhuozi54'));
    scene.remove(scene.getChildByName('zhuozi60'));
    scene.remove(scene.getChildByName('zhuozi66'));
    creatCube({
        x: 19,
        y: 2,
        z: 2,
        rx: 0,
        ry: 0,
        rz: 0,
        px: -0.2,
        py: 0.8,
        pz: 0.8,
        color: '#ffffff',
        name: 'zhuozi',
        type: 'MeshBasicMaterial'
    });

}

// THREE.Mesh.

function creatCube(cubeOption) {
    num++;
    newGemoFlag = false;
    var geometry = new THREE.BoxGeometry(cubeOption.x, cubeOption.y, cubeOption.z);
    var material;
    if (cubeOption.type == 'video') {
        var materialArray = [];
        var video = document.getElementById('video');
        var texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.NearestFilter;
        materialArray.push(new THREE.MeshLambertMaterial({color: cubeOption.color}));
        materialArray.push(new THREE.MeshLambertMaterial({color: cubeOption.color}));
        materialArray.push(new THREE.MeshLambertMaterial({map: texture}));
        materialArray.push(new THREE.MeshLambertMaterial({color: cubeOption.color}));
        materialArray.push(new THREE.MeshLambertMaterial({color: cubeOption.color}));
        materialArray.push(new THREE.MeshLambertMaterial({color: cubeOption.color}));
        material = new THREE.MeshFaceMaterial(materialArray);
    } else if (cubeOption.type == 'MeshBasicMaterial') {
        material = new THREE.MeshBasicMaterial({color: cubeOption.color});
    } else {
        material = new THREE.MeshLambertMaterial({color: cubeOption.color});
    }

    var cube = new THREE.Mesh(geometry, material);
    // cube.scale.set(cubeOption.x, cubeOption.y, cubeOption.z)
    cube
        .position
        .set(cubeOption.px, cubeOption.py, cubeOption.pz);
    cube
        .rotation
        .set(cubeOption.rx, cubeOption.ry, cubeOption.rz);
    optionName = cubeOption.name + num;
    cube.name = optionName;
    cube.castShadow = true;
    if (cubeOption.types == "pingmu") {
        // obj3pingmu.add(cube); obj3pingmu.add(cube); obj3pingmu.add(cube);
        // obj3pingmu.add(cube);
        obj3pingmu.add(cube);
        obj3pingmu
            .position
            .set(25, 0, 20);
        obj3pingmuP.add(obj3pingmu)
        obj3pingmu.name = "obj3pingmu";
        obj3pingmuP
            .position
            .set(0, 0, 0);
        // obj3pingmuP.rotation.set(Math.PI / 2, 0, 0) scene.add(obj3pingmu)
    } else {
        obj3jianpan.add(cube);
        obj3jianpan
            .position
            .set(25, 0, 20)
        obj3jianpan.name = "obj3jianpan"
        // scene.add(obj3jianpan);
    }

    scene.add(cube)

    console.log(cube);
    geometryArr.push(cube);
}

obj3DN.add(obj3pingmuP);
obj3DN.add(obj3jianpan);
obj3DN.name = "obj3DN";
// obj3DN.rotation.set(0, Math.PI / 2, 0)

obj3DN
    .position
    .set(0, 0, 0);

scene.add(obj3DN)

// var dummy = new THREE.Object3D(); var plane = new THREE.Mesh(new
// THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({     color:
// 0xff0000 })); plane.position.set(50, 0, 0); dummy.add(plane);
// dummy.position.set(0, 0, 0); scene.add(dummy);

var clickFlag = true;

function render() {
    requestAnimationFrame(render);
    controls.update();
    TWEEN.update();
    renderer.render(scene, camera);
    if (newGemoFlag && clickFlag) {
        for (var i = 0; i < geometryArr.length; i++) {
            if (optionName == geometryArr[i].name || optionName == geometryArr[i].parent.name) {
                switch (switchName) {
                    case "shareSure":
                        if (isObject3D) {} else {
                            geometryArr[i].scale.x = optAllData.width;
                            geometryArr[i].scale.y = optAllData.height;
                            geometryArr[i].scale.z = optAllData.depth;
                        }
                        break;
                    case "positionSure":
                        if (isObject3D) {
                            geometryArr[i].parent.position.x = optAllData.x || 0;
                            geometryArr[i].parent.position.y = optAllData.y || 0;
                            geometryArr[i].parent.position.z = optAllData.z || 0;
                        } else {
                            geometryArr[i].position.x = optAllData.x || 0;
                            geometryArr[i].position.y = optAllData.y || 0;
                            geometryArr[i].position.z = optAllData.z || 0;
                        }
                        break;
                    case "rotationSure":
                        if (isObject3D) {
                            geometryArr[i].parent.rotation.x = -Number(optAllData.rX) * Math.PI / 2;
                            geometryArr[i].parent.rotation.y = -Number(optAllData.rY) * Math.PI / 2;
                            geometryArr[i].parent.rotation.z = -Number(optAllData.rZ) * Math.PI / 2;
                        } else {
                            geometryArr[i].rotation.x = -Number(optAllData.rX) * Math.PI / 2;
                            geometryArr[i].rotation.y = -Number(optAllData.rY) * Math.PI / 2;
                            geometryArr[i].rotation.z = -Number(optAllData.rZ) * Math.PI / 2;
                        }

                        break;
                    case "materialSure":
                        geometryArr[i].material = optAllData.material
                        break;
                    case "keydown":
                        geometryArr[i].material = optAllData.material
                        break;
                    default:
                }
            }
        }
        newGemoFlag = false;
    }
}
render();
var cubeOption = {
    x: '1',
    y: '1',
    z: '1',
    color: '#00ffff',
    rx: 0,
    ry: 0,
    rz: 0,
    px: 0,
    py: 0,
    pz: 0,
    name: 'zhuozi'
}

var optAllData = {};
// 所有的操作
function opt(n, name, optData) {

    newGemoFlag = true;
    clickFlag = true;
    for (var i = 0; i < geometryArr.length; i++) {
        if (name == geometryArr[i].name || name == geometryArr[i].parent.name) {
            switch (n) {
                case "shareSure":
                    optAllData['width'] = optData.width || 1;
                    optAllData['height'] = optData.height || 1;
                    optAllData['depth'] = optData.depth || 1;
                    break;
                case "positionSure":
                    optAllData['x'] = optData.x || 0;
                    optAllData['y'] = optData.y || 0;
                    optAllData['z'] = optData.z || 0;
                    break;
                case "rotationSure":
                    optAllData['rX'] = optData.rX || 0;
                    optAllData['rY'] = optData.rY || 0;
                    optAllData['rZ'] = optData.rZ || 0;
                    break;
                case "materialSure":
                    if (optData.material == "MeshBasicMaterial") {
                        optAllData['material'] = new THREE.MeshBasicMaterial({
                            color: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    } else if (optData.material == "MeshLambertMaterial") {
                        optAllData['material'] = new THREE.MeshLambertMaterial({
                            color: optData.color,
                            // emissive: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    } else if (optData.material == "MeshPhongMaterial") {
                        optAllData['material'] = new THREE.MeshPhongMaterial({
                            color: optData.color,
                            // emissive: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    }
                    break;
                case "keydown":
                    if (optData.material == "MeshBasicMaterial") {
                        optAllData['material'] = new THREE.MeshBasicMaterial({
                            color: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    } else if (optData.material == "MeshLambertMaterial") {
                        optAllData['material'] = new THREE.MeshLambertMaterial({
                            color: optData.color,
                            // emissive: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    } else if (optData.material == "MeshPhongMaterial") {
                        optAllData['material'] = new THREE.MeshPhongMaterial({
                            color: optData.color,
                            // emissive: optData.color,
                            wireframe: optData.wireframe == "true"
                                ? true
                                : false
                        });
                    }
                    break;
                default:
            }
        }
    }
}

$('input')
    .click(function () {
        $(this).focus();
    });
$("#creatCube").on("click", function () {
    creatCube(cubeOption)
})
$("#shareSure").on("click", function () {
    var shareData = {
        width: $("#width").val(),
        height: $("#height").val(),
        depth: $("#depth").val()
    }
    switchName = "shareSure";
    opt("shareSure", optionName, shareData)
});

$("#positionSure").on("click", function () {
    var shareData = {
        x: $("#x").val(),
        y: $("#y").val(),
        z: $("#z").val()
    }
    switchName = "positionSure"
    opt("positionSure", optionName, shareData)
});
$("#rotationSure").on("click", function () {
    var shareData = {
        rX: $("#rX").val(),
        rY: $("#rY").val(),
        rZ: $("#rZ").val()
    }
    switchName = "rotationSure"
    opt("rotationSure", optionName, shareData)
});
$("#materialSure").on("click", function () {
    var ss = $('input[type="radio"]')
    var shareData = {
        material: '',
        color: $("#MaterialColor").val(),
        wireframe: ''
    }
    for (var i = 0; i < ss.length; i++) {
        if ($(ss[i]).hasClass('mesh')) {
            if ($(ss[i]).is(':checked')) {
                shareData.wireframe = $(ss[i]).val()
            }
        } else {
            if ($(ss[i]).is(':checked')) {
                shareData.material = $(ss[i]).val()
            }
        }
    }
    switchName = "materialSure"
    opt("materialSure", optionName, shareData)

});

// 删除
$("#deleteGeom").on('click', function () {
    scene.remove(scene.getChildByName(optionName))
})
$("#getGeom").on('click', function () {
    var tc = geometryArr;
    scene.add(tc);
})

var obj3dall = new THREE.Object3D();
$("#addOBJ3D").on('click', function () {
    for (var i = 0; i < geometryArr.length; i++) {
        obj3dall.add(geometryArr[i])
    }
    obj3dall.position.y = 20;
    scene.add(obj3dall);
})

var selection;
var INTERSECTED;
var raycaster = new THREE.Raycaster(); //光线碰撞检测器
var mouse = new THREE.Vector2(); //存储鼠标坐标或者触摸坐标
var flag = 0;
var playFlag = true;
// document.addEventListener('mousedown', onDocumentMouseDown, false);
// document.addEventListener('mousemove', onDocumentMouseMove, false);
$(document).on('keydown', function (key) {
    console.log(key.key)
    switch (key.key) {
        case 'q':
            optionName = 'zhuozi15'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'a':
            optionName = 'zhuozi16'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'z':
            optionName = 'zhuozi17'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'w':
            optionName = 'zhuozi21'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 's':
            optionName = 'zhuozi22'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'x':
            optionName = 'zhuozi23'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'e':
            optionName = 'zhuozi27'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'd':
            optionName = 'zhuozi28'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'c':
            optionName = 'zhuozi29'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'r':
            optionName = 'zhuozi33'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'f':
            optionName = 'zhuozi34'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'v':
            optionName = 'zhuozi35'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 't':
            optionName = 'zhuozi39'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'g':
            optionName = 'zhuozi40'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'b':
            optionName = 'zhuozi41'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'y':
            optionName = 'zhuozi45'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'h':
            optionName = 'zhuozi46'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'n':
            optionName = 'zhuozi47'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'u':
            optionName = 'zhuozi51'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'j':
            optionName = 'zhuozi52'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'm':
            optionName = 'zhuozi53'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'i':
            optionName = 'zhuozi57'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'k':
            optionName = 'zhuozi58'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case ',':
            optionName = 'zhuozi59'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'o':
            optionName = 'zhuozi63'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'l':
            optionName = 'zhuozi64'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case '.':
            optionName = 'zhuozi65'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'p':
            optionName = 'zhuozi69'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case ';':
            optionName = 'zhuozi70'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case '/':
            optionName = 'zhuozi71'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case " ":
            optionName = 'zhuozi91'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ff00ff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);
            break;
        case "Escape":
            optionName = 'zhuozi7'
            switchName = "keydown"

            if (playFlag) {
                var shareData = {
                    material: 'MeshBasicMaterial',
                    color: '#ff00ff',
                    wireframe: 'false'
                }
                $('#video')
                    .get(0)
                    .play();
                playFlag = false;
            } else {
                var shareData = {
                    material: 'MeshBasicMaterial',
                    color: '#ffffff',
                    wireframe: 'false'
                }
                $('#video')
                    .get(0)
                    .pause();
                playFlag = true;
            }
            opt("keydown", optionName, shareData);
            break;

    }
});
$(document).on('keyup', function (key) {
    console.log(key.key)
    switch (key.key) {
        case 'q':
            optionName = 'zhuozi15'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'a':
            optionName = 'zhuozi16'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'z':
            optionName = 'zhuozi17'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'w':
            optionName = 'zhuozi21'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 's':
            optionName = 'zhuozi22'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'x':
            optionName = 'zhuozi23'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'e':
            optionName = 'zhuozi27'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'd':
            optionName = 'zhuozi28'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'c':
            optionName = 'zhuozi29'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'r':
            optionName = 'zhuozi33'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'f':
            optionName = 'zhuozi34'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'v':
            optionName = 'zhuozi35'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 't':
            optionName = 'zhuozi39'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'g':
            optionName = 'zhuozi40'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'b':
            optionName = 'zhuozi41'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'y':
            optionName = 'zhuozi45'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'h':
            optionName = 'zhuozi46'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'n':
            optionName = 'zhuozi47'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'u':
            optionName = 'zhuozi51'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'j':
            optionName = 'zhuozi52'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'm':
            optionName = 'zhuozi53'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'i':
            optionName = 'zhuozi57'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'k':
            optionName = 'zhuozi58'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case ',':
            optionName = 'zhuozi59'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'o':
            optionName = 'zhuozi63'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'l':
            optionName = 'zhuozi64'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case '.':
            optionName = 'zhuozi65'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case 'p':
            optionName = 'zhuozi69'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case ';':
            optionName = 'zhuozi70'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case '/':
            optionName = 'zhuozi71'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);break;
        case " ":
            optionName = 'zhuozi91'
            var shareData = {
                material: 'MeshBasicMaterial',
                color: '#ffffff',
                wireframe: 'false'
            }
            switchName = "keydown"
            opt("keydown", optionName, shareData);
            break;
    }
});

/**
     * 射线拾取函数
     * 选中的网格模型变为半透明效果
     */
var isopen = true;

function ray() {
    var Sx = event.clientX; //鼠标单击位置横坐标
    var Sy = event.clientY; //鼠标单击位置纵坐标
    //屏幕坐标转标准设备坐标
    var x = (Sx / 800) * 2 - 1; //标准设备横坐标
    var y = -(Sy / 600) * 2 + 1; //标准设备纵坐标
    var standardVector = new THREE.Vector3(x, y, 0.5); //标准设备坐标
    //标准设备坐标转世界坐标
    var worldVector = standardVector.unproject(camera);
    //射线投射方向单位向量(worldVector坐标减相机位置坐标)
    var ray = worldVector
        .sub(camera.position)
        .normalize();
    //创建射线投射器对象
    var raycaster = new THREE.Raycaster(camera.position, ray);
    //返回射线选中的对象
    var intersects = raycaster.intersectObjects(scene.children.concat(obj3pingmu.children, obj3jianpan.children));
    if (intersects.length > 0) {
        if (intersects[0].object.parent.type == "Object3D") {
            console.log(intersects[0].object.parent);
            isObject3D = true;
            optionName = intersects[0].object.parent.name;

            if (!isopen) {
                isopen = true
                new TWEEN
                    .Tween(obj3pingmuP.position)
                    .to({
                        x: 0,
                        y: 0,
                        z: 0
                    }, 1500)
                    .easing(TWEEN.Easing.Exponential.Out)
                    .start();

                new TWEEN
                    .Tween(obj3pingmuP.rotation)
                    .to({
                        x: -0.1 * Math.PI / 2,
                        y: 0,
                        z: 0
                    }, 2000)
                    .easing(TWEEN.Easing.Exponential.Out)
                    .start();
            } else {
                isopen = false
                new TWEEN
                    .Tween(obj3pingmuP.position)
                    .to({
                        x: 0,
                        y: 1,
                        z: -0.75
                    }, 1500)
                    .easing(TWEEN.Easing.Exponential.Out)
                    .start();

                new TWEEN
                    .Tween(obj3pingmuP.rotation)
                    .to({
                        x: 1.175 * Math.PI / 2,
                        y: 0,
                        z: 0
                    }, 2000)
                    .easing(TWEEN.Easing.Exponential.Out)
                    .start();
            }

            // intersects[0].object.parent.position.set(0,1.4,-21.14);
            // intersects[0].object.parent.rotation.set(1.3,0,0); new
            // TWEEN.Tween(intersects[0].object.parent.position)                new
            // TWEEN.Tween(dummy.rotation).to({                        x: 0,        y:
            // Math.PI / 2,                        z: Number(0) * Math.PI / 2
            // }, 2000) .easing(TWEEN.Easing.Exponential.Out).start(); new
            // TWEEN.Tween(camera.position)     .to({         x: -80,         y: 70, z: 60
            //   }, 1500)     .easing(TWEEN.Easing.Exponential.Out)     .start();

        } else {
            isObject3D = false;
            intersects[0].object.material.transparent = true;
            intersects[0].object.material.opacity = 0.6;
            console.log(intersects[0].object.parent)
        }

    }
}
addEventListener('click', ray); // 监听窗口鼠标单击事件
// function onDocumentMouseDown(event) {     var vector = new
// THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY /
// window.innerHeight) * 2 + 1, 0.5);     vector = vector.unproject(camera); var
// raycaster = new THREE.Raycaster(camera.position,
// vector.sub(camera.position).normalize());     var intersects =
// raycaster.intersectObjects(scene.children);     if (intersects.length > 0) {
//       optionName = intersects[0].object.name;         newGemoFlag = true;
//  clickFlag = false;         console.log(optionName);     } } function
// onDocumentMouseMove(event) {     if (controls.showRay) {         var vector =
// new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1,
// -(event.clientY / window.innerHeight) * 2 + 1, 0.5);         vector =
// vector.unproject(camera);         var raycaster = new
// THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
//   var intersects = raycaster.intersectObjects(scene.children);         if
// (intersects.length > 0) {         }     } }
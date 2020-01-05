'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const THREE = require('three')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const pressingKeys = ['', '', '', '']
  // your JS code goes here
  console.log('New Year , New Start !')

  const sceneColor = 0x000000
  let part = 'one'
  const radius = 100
  let theta = 0
  let speed = 0

  // xuan ran qi
  const renderer = new THREE.WebGLRenderer()
  // she zhi xuan ran qi de chi cun
  renderer.setSize(window.innerWidth / 1, window.innerHeight / 1.01)
  // jiang xuan ran qi tian jia dao HTML wen dang zhong ( lei si yu <canvas> ? )
  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(sceneColor)

  // tou shi she xiang ji
  const camera = new THREE.PerspectiveCamera(
    75, // shi ye jiao du
    window.innerWidth / window.innerHeight, // chang kuan bi
    0.1, // jin jie mian
    1000 // yuan jie mian
  )
  camera.position.set(0, 0, 10)
  camera.lookAt(0, 0, 0)
  camera.rotation.x = 0
  camera.rotation.y = 0
  const mouse = {x: 0, y: 0}
  // const cameraMoves = {x: 0, y: 0, z: -0.1, move: false, speed: 0.2}

  function mouseMove (e) {
    if (e.clientX > mouse.x) {
      // console.log('e.clientX', e.clientX)
      // console.log('mouse.x', mouse.x)
      camera.rotation.y -= 0.05
      // camera.position.x += cameraMoves.speed
    } else {
      camera.rotation.y += 0.05
      // camera.position.x += -cameraMoves.speed
    }
    // if (e.clientY > mouse.y) { camera.position.y += -cameraMoves.speed } else { camera.position.y += cameraMoves.speed }
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  window.addEventListener('mousemove', mouseMove)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, opacity: 0.5 })
  const cube = new THREE.Mesh(geometry, material)

  const geometry2 = new THREE.BoxGeometry(1000, 1, 1000)
  // color: 0xffffff
  // color: 0xfefefe, wireframe: true, opacity: 0.5
  const material2 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false, opacity: 0.5 })
  const cube2 = new THREE.Mesh(geometry2, material2)

  const geometry3 = new THREE.BoxGeometry(1, 1, 1)
  const texture = new THREE.TextureLoader().load('https://i.imgur.com/BE07Y7N.gif')
  const material3 = new THREE.MeshBasicMaterial({map: texture, wireframe: false, opacity: 0.9})
  // const material3 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false, opacity: 0.9 })
  const cube3 = new THREE.Mesh(geometry3, material3)

  cube.position.x = 7
  cube.position.y = 3
  // cube2.position.x = -7
  cube2.position.y = -2
  cube3.position.x = 0

  scene.add(cube)
  // scene.add(cube2)
  scene.add(cube3)
  // setTimeout(function () {
  //   scene.remove(cube3)
  // }, 3000)

  const geometryTest = new THREE.BoxBufferGeometry(2, 2, 2)
  const edges = new THREE.EdgesGeometry(geometryTest)
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }))
  scene.add(line)
  line.position.x = 0

  // create a blue LineBasicMaterial
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff })

  const lineGeometry = new THREE.Geometry()
  lineGeometry.vertices.push(new THREE.Vector3(-3, 4, 0))
  lineGeometry.vertices.push(new THREE.Vector3(-4, 4, 0))
  lineGeometry.vertices.push(new THREE.Vector3(-4, 3, 0))
  lineGeometry.vertices.push(new THREE.Vector3(-3, 3, 0))
  lineGeometry.vertices.push(new THREE.Vector3(-3, 2, 0))
  lineGeometry.vertices.push(new THREE.Vector3(-4, 2, 0))
  const line1 = new THREE.Line(lineGeometry, lineMaterial)

  const lineGeometry2 = new THREE.Geometry()
  lineGeometry2.vertices.push(new THREE.Vector3(-1.5, 4, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-2.5, 4, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-2.5, 3, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-1.5, 3, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-2.5, 3, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-2.5, 2, 0))
  lineGeometry2.vertices.push(new THREE.Vector3(-1.5, 2, 0))
  const line2 = new THREE.Line(lineGeometry2, lineMaterial)

  const lineGeometry3 = new THREE.Geometry()
  lineGeometry3.vertices.push(new THREE.Vector3(0, 4, 0))
  lineGeometry3.vertices.push(new THREE.Vector3(-1, 4, 0))
  lineGeometry3.vertices.push(new THREE.Vector3(-0.5, 4, 0))
  lineGeometry3.vertices.push(new THREE.Vector3(-0.5, 2, 0))
  lineGeometry3.vertices.push(new THREE.Vector3(-1, 2, 0))
  lineGeometry3.vertices.push(new THREE.Vector3(0, 2, 0))
  const line3 = new THREE.Line(lineGeometry3, lineMaterial)

  const lineGeometry4 = new THREE.Geometry()
  lineGeometry4.vertices.push(new THREE.Vector3(0.5, 3, 0))
  lineGeometry4.vertices.push(new THREE.Vector3(1, 3, 0))
  const line4 = new THREE.Line(lineGeometry4, lineMaterial)

  const lineGeometry5 = new THREE.Geometry()
  lineGeometry5.vertices.push(new THREE.Vector3(2.5, 4, 0))
  lineGeometry5.vertices.push(new THREE.Vector3(1.5, 4, 0))
  lineGeometry5.vertices.push(new THREE.Vector3(1.5, 2, 0))
  lineGeometry5.vertices.push(new THREE.Vector3(2.5, 2, 0))
  lineGeometry5.vertices.push(new THREE.Vector3(2.5, 4, 0))
  const line5 = new THREE.Line(lineGeometry5, lineMaterial)

  const lineGeometry6 = new THREE.Geometry()
  lineGeometry6.vertices.push(new THREE.Vector3(4, 4, 0))
  lineGeometry6.vertices.push(new THREE.Vector3(3, 4, 0))
  lineGeometry6.vertices.push(new THREE.Vector3(3, 3, 0))
  lineGeometry6.vertices.push(new THREE.Vector3(4, 3, 0))
  lineGeometry6.vertices.push(new THREE.Vector3(4, 2, 0))
  lineGeometry6.vertices.push(new THREE.Vector3(3, 2, 0))
  const line6 = new THREE.Line(lineGeometry6, lineMaterial)

  scene.add(line1)
  scene.add(line2)
  scene.add(line3)
  scene.add(line4)
  scene.add(line5)
  scene.add(line6)

  // camera.position.z = 5

  let xMove = 'left'
  let yMove = 'stop'

  // xuan ran xun huan (rerender loop)
  const animate = function () {
    requestAnimationFrame(animate)

    if ((camera.position.x * camera.position.x + camera.position.z * camera.position.z) <= 2) {
      // console.log('reach')
      $('#help').hide()

      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(10, 10, 10).normalize()
      scene.add(light)

      camera.position.set(0, 1600, 10)
      camera.lookAt(0, 0, 0)

      scene.remove(cube)
      scene.remove(cube3)
      scene.remove(line)
      scene.remove(line1)
      scene.remove(line2)
      scene.remove(line3)
      scene.remove(line4)
      scene.remove(line5)
      scene.remove(line6)

      scene.background = new THREE.Color(0xffffff)

      const geometry = new THREE.BoxBufferGeometry(20, 20, 20)
      for (let i = 0; i < 4000; i++) {
        const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }))
        object.position.x = Math.random() * 800 - 400
        object.position.y = Math.random() * 1600 - 400
        object.position.z = Math.random() * 800 - 400
        object.rotation.x = Math.random() * 2 * Math.PI
        object.rotation.y = Math.random() * 2 * Math.PI
        object.rotation.z = Math.random() * 2 * Math.PI
        object.scale.x = Math.random() + 0.5
        object.scale.y = Math.random() + 0.5
        object.scale.z = Math.random() + 0.5
        scene.add(object)
      }
      part = 'two'
    }

    if (part === 'two') {
      // camera.position.z += 1
      theta += 0.15
      speed += 0.01
      camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta))
      // camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta))
      camera.position.y -= speed
      camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta))
      camera.lookAt(scene.position)
    }

    if (camera.position.y < -1000) {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0])
      }
      $('#help').show()

      // console.log('scene.childen', scene.childen)

      camera.position.set(0, 0, 10)
      camera.lookAt(0, 0, 0)
      scene.background = new THREE.Color(0x000000)
      scene.add(cube)
      scene.add(cube3)
      scene.add(line)
      scene.add(line1)
      scene.add(line2)
      scene.add(line3)
      scene.add(line4)
      scene.add(line5)
      scene.add(line6)

      part = 'one'
      theta = 0
      speed = 0
    }

    if (pressingKeys.includes('w')) {
      camera.position.z -= Math.cos(camera.rotation.y) * 0.05
      camera.position.x -= Math.sin(camera.rotation.y) * 0.05
      // console.log('camera.rotation.y', camera.rotation.y)
    }
    if (pressingKeys.includes('s')) {
      camera.position.z += Math.cos(camera.rotation.y) * 0.05
      camera.position.x += Math.sin(camera.rotation.y) * 0.05
    }
    if (pressingKeys.includes('a')) {
      camera.position.x -= Math.cos(camera.rotation.y) * 0.05
      camera.position.z += Math.sin(camera.rotation.y) * 0.05
    }
    if (pressingKeys.includes('d')) {
      camera.position.x += Math.cos(camera.rotation.y) * 0.05
      camera.position.z -= Math.sin(camera.rotation.y) * 0.05
    }

    // const timer = Date.now() * 0.0005
    // camera.position.x = Math.cos(timer) * 10
    // camera.position.z = Math.cos(timer) * 10
    // camera.lookAt(scene.position)

    line.rotation.x += 0.01
    line.rotation.y += 0.01
    cube3.rotation.y += 0.005

    // line1.position.z += 0.01
    // line2.position.z += 0.01
    // line3.position.z += 0.01
    // line4.position.z += 0.01
    // line5.position.z += 0.01
    // line6.position.z += 0.01

    // cube
    // console.log('x', cube.position.x)
    if (xMove === 'left') {
      cube.position.x -= 0.05
      if (cube.position.x <= -7 && cube.position.y >= 3) {
        xMove = 'stop'
        yMove = 'down'
      }
    } else if (xMove === 'right') {
      cube.position.x += 0.05
      if (cube.position.x >= 7 && cube.position.y <= -3) {
        xMove = 'stop'
        yMove = 'up'
      }
    }

    // console.log('y', cube.position.y)
    if (yMove === 'down') {
      cube.position.y -= 0.05
      if (cube.position.y <= -3 && cube.position.x <= -7) {
        yMove = 'stop'
        xMove = 'right'
      }
    } else if (yMove === 'up') {
      cube.position.y += 0.05
      if (cube.position.y >= 3 && cube.position.x >= 7) {
        yMove = 'stop'
        xMove = 'left'
      }
    }

    // cube2
    // console.log('x', cube2.position.x)
    // if (xMove === 'left') {
    //   cube2.position.x += 0.05
    // } else if (xMove === 'right') {
    //   cube2.position.x -= 0.05
    // }

    // console.log('y', cube2.position.y)
    // if (yMove === 'down') {
    //   cube2.position.y += 0.05
    // } else if (yMove === 'up') {
    //   cube2.position.y -= 0.05
    // }

    renderer.render(scene, camera)
  }

  document.onkeydown = function (event) {
    // console.log('event DOWN', event)
    // console.log('event.key DOWN', event.key)
    // console.log('camera.position', '[ ' + camera.position.x + ' , ' + camera.position.y + ' , ' + camera.position.z + ' ]')

    if (event.key === 'w' || event.key === 'ArrowUp') {
      pressingKeys[0] = 'w'
    } else if (event.key === 's' || event.key === 'ArrowDown') {
      pressingKeys[1] = 's'
    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
      pressingKeys[2] = 'a'
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
      pressingKeys[3] = 'd'
    }

    if (event.key === 'e') {
      camera.position.y = -1001
    }

    // if (event.key === 'c') {
    //   camera.rotation.y -= Math.PI / 2
    // }
    // if (event.key === 'z') {
    //   camera.rotation.y += Math.PI / 2
    // }
    // console.log('canera', camera.rotation.y)

    // if (!pressingKeys.includes(event.key)) {
    //   pressingKeys.push(event.key)
    // }
    // console.log('pressingKeys', pressingKeys)

    // if (pressingKeys.includes('w')) {
    //   camera.position.z -= 0.05
    // }
    // if (pressingKeys.includes('s')) {
    //   camera.position.z += 0.05
    // }
    // if (pressingKeys.includes('a')) {
    //   camera.position.x -= 0.05
    // }
    // if (pressingKeys.includes('d')) {
    //   camera.position.x += 0.05
    // }
    // line1.position.z += 0.5
  }

  document.onkeyup = function (event) {
    // console.log('event Up', event)
    // console.log('event.key Up', event.key)

    if (event.key === 'w' || event.key === 'ArrowUp') {
      pressingKeys[0] = ''
    } else if (event.key === 's' || event.key === 'ArrowDown') {
      pressingKeys[1] = ''
    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
      pressingKeys[2] = ''
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
      pressingKeys[3] = ''
    }
    // console.log('pressingKeys', pressingKeys)

    // if (pressingKeys.includes('w') || pressingKeys.includes('ArrowUp')) {
    //   camera.position.z -= 0.05
    // }
    // if (pressingKeys.includes('s') || pressingKeys.includes('ArrowDown')) {
    //   camera.position.z += 0.05
    // }
    // if (pressingKeys.includes('a') || pressingKeys.includes('ArrowLeft')) {
    //   camera.position.x -= 0.05
    // }
    // if (pressingKeys.includes('d') || pressingKeys.includes('ArrowRight')) {
    //   camera.position.x += 0.05
    // }
  }

  document.onmousemove = function (event) {
    // console.log('event', event)
  }

  animate()
})

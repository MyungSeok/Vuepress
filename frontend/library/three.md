---
sidebar: auto
---

# THREE

## Example

<https://threejs.org/examples/>

## Geometry

### Box

* [BoxGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#BoxGeometry)
* [BoxBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#BoxBufferGeometry)

![BoxGeometry](/img/A062.png)

### Cylinder

* [CylinderGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#CylinderGeometry)
* [CylinderBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#CylinderBufferGeometry)

![CylinderGeometry](/img/A063.png)

### Cone

* [ConeGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#ConeGeometry)
* [ConeBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#ConeBufferGeometry)

![ConeGeometry](/img/A064.png)

### Circle

* [CircleGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#CircleGeometry)
* [CircleBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#CircleBufferGeometry)

![CircleGeometry](/img/A065.png)

### Dodecahedron

* [DodecahedronGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#DodecahedronGeometry)

![DodecahedronGeometry](/img/A066.png)

### Icosahedron

* [IcosahedronGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#IcosahedronGeometry)

![IcosahedronGeometry](/img/A067.png)

### Lathe

* [LatheGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#LatheGeometry)
* [LatheBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#LatheBufferGeometry)

![LatheGeometry](/img/A068.png)

### Octahedron

* [OctahedronGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#OctahedronGeometry)

![OctahedronGeometry](/img/A069.png)

### Plane

* [PlaneGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#PlaneGeometry)
* [PlaneBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#PlaneBufferGeometry)

![PlaneGeometry](/img/A070.png)

### Ring

* [RingGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#RingGeometry)
* [RingBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#RingBufferGeometry)

![RingGeometry](/img/A071.png)

### Sphere

* [SphereGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#SphereGeometry)
* [SphereBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#SphereBufferGeometry)

![SphereGeometry](/img/A072.png)

### Tetrahedron

* [TetrahedronGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#TetrahedronGeometry)

![TetrahedronGeometry](/img/A073.png)

### TextGeometry

* [TextGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#TextGeometry)

![TextGeometry](/img/A074.png)

### Torus

* [TorusGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#TorusGeometry)
* [TorusBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#TorusBufferGeometry)

![TorusGeometry](/img/A075.png)

### TorusKnotBuffer

* [TorusKnotBufferGeometry](https://threejs.org/docs/scenes/geometry-browser.html?#TorusKnotBufferGeometry)

![TorusKnotBufferGeometry](/img/A076.png)

## Camera

:::tip 참고자료
[Camera Rotation](https://codepen.io/b29/pen/oYeKJK)
:::

## Memory Leak

Mesh 의 객체와 배열을 null 혹은 [] 로 초기화 시켜줘야 한다.

In webGL Renderer, after removing a mesh with

```javascript
scene.remove(mesh);
```

you can deallocate the memory with

```javascript
renderer.deallocateObject(mesh);
```

You can deallocate textures with

```javascript
renderer.deallocateTexture(texture);
```

:::tip 참고자료
<https://stackoverflow.com/questions/20997669/memory-leak-in-three-js>
:::

## Etc

[등고선](https://stemkoski.github.io/Three.js/Graphulus-Function.html)
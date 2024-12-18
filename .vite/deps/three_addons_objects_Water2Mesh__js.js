import {
  Color,
  Mesh,
  Vector2,
  Vector3
} from "./chunk-7ZCAHXB5.js";
import "./chunk-ZSMWDLMK.js";

// node_modules/three/build/three.webgpu.js
var REVISION = "170";
var FrontSide = 0;
var BackSide = 1;
var NoBlending = 0;
var NormalBlending = 1;
var AddEquation = 100;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var LessEqualDepth = 3;
var MultiplyOperation = 0;
var NoToneMapping = 0;
var UVMapping = 300;
var CubeReflectionMapping = 301;
var CubeRefractionMapping = 302;
var EquirectangularReflectionMapping = 303;
var EquirectangularRefractionMapping = 304;
var RepeatWrapping = 1e3;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var NearestFilter = 1003;
var LinearFilter = 1006;
var LinearMipmapLinearFilter = 1008;
var LinearMipMapLinearFilter = 1008;
var UnsignedByteType = 1009;
var IntType = 1013;
var UnsignedIntType = 1014;
var FloatType = 1015;
var HalfFloatType = 1016;
var UnsignedInt248Type = 1020;
var RGBAFormat = 1023;
var DepthFormat = 1026;
var DepthStencilFormat = 1027;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var TangentSpaceNormalMap = 0;
var ObjectSpaceNormalMap = 1;
var NoColorSpace = "";
var SRGBColorSpace = "srgb";
var LinearSRGBColorSpace = "srgb-linear";
var LinearTransfer = "linear";
var SRGBTransfer = "srgb";
var KeepStencilOp = 7680;
var AlwaysStencilFunc = 519;
var NeverCompare = 512;
var LessCompare = 513;
var EqualCompare = 514;
var LessEqualCompare = 515;
var GreaterCompare = 516;
var NotEqualCompare = 517;
var GreaterEqualCompare = 518;
var AlwaysCompare = 519;
var StaticDrawUsage = 35044;
var DynamicDrawUsage = 35048;
var WebGLCoordinateSystem = 2e3;
var WebGPUCoordinateSystem = 2001;
var EventDispatcher = class {
  addEventListener(type, listener) {
    if (this._listeners === void 0) this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  hasEventListener(type, listener) {
    if (this._listeners === void 0) return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  removeEventListener(type, listener) {
    if (this._listeners === void 0) return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  dispatchEvent(event) {
    if (this._listeners === void 0) return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
};
var _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var _seed = 1234567;
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toLowerCase();
}
function clamp$1(value, min2, max2) {
  return Math.max(min2, Math.min(max2, value));
}
function euclideanModulo(n, m) {
  return (n % m + m) % m;
}
function mapLinear(x, a1, a2, b1, b2) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}
function inverseLerp(x, y, value) {
  if (x !== y) {
    return (value - x) / (y - x);
  } else {
    return 0;
  }
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function damp(x, y, lambda, dt) {
  return lerp(x, y, 1 - Math.exp(-lambda * dt));
}
function pingpong(x, length2 = 1) {
  return length2 - Math.abs(euclideanModulo(x, length2 * 2) - length2);
}
function smoothstep$1(x, min2, max2) {
  if (x <= min2) return 0;
  if (x >= max2) return 1;
  x = (x - min2) / (max2 - min2);
  return x * x * (3 - 2 * x);
}
function smootherstep(x, min2, max2) {
  if (x <= min2) return 0;
  if (x >= max2) return 1;
  x = (x - min2) / (max2 - min2);
  return x * x * x * (x * (x * 6 - 15) + 10);
}
function randInt(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}
function randFloat(low, high) {
  return low + Math.random() * (high - low);
}
function randFloatSpread(range2) {
  return range2 * (0.5 - Math.random());
}
function seededRandom(s) {
  if (s !== void 0) _seed = s;
  let t = _seed += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function degToRad(degrees2) {
  return degrees2 * DEG2RAD;
}
function radToDeg(radians2) {
  return radians2 * RAD2DEG;
}
function isPowerOfTwo(value) {
  return (value & value - 1) === 0 && value !== 0;
}
function ceilPowerOfTwo(value) {
  return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}
function floorPowerOfTwo(value) {
  return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}
function setQuaternionFromProperEuler(q, a, b, c, order) {
  const cos2 = Math.cos;
  const sin2 = Math.sin;
  const c2 = cos2(b / 2);
  const s2 = sin2(b / 2);
  const c13 = cos2((a + c) / 2);
  const s13 = sin2((a + c) / 2);
  const c1_3 = cos2((a - c) / 2);
  const s1_3 = sin2((a - c) / 2);
  const c3_1 = cos2((c - a) / 2);
  const s3_1 = sin2((c - a) / 2);
  switch (order) {
    case "XYX":
      q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
      break;
    case "YZY":
      q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
      break;
    case "ZXZ":
      q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
      break;
    case "XZX":
      q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
      break;
    case "YXY":
      q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
      break;
    case "ZYZ":
      q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + order);
  }
}
function denormalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return value / 4294967295;
    case Uint16Array:
      return value / 65535;
    case Uint8Array:
      return value / 255;
    case Int32Array:
      return Math.max(value / 2147483647, -1);
    case Int16Array:
      return Math.max(value / 32767, -1);
    case Int8Array:
      return Math.max(value / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize$1(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return Math.round(value * 4294967295);
    case Uint16Array:
      return Math.round(value * 65535);
    case Uint8Array:
      return Math.round(value * 255);
    case Int32Array:
      return Math.round(value * 2147483647);
    case Int16Array:
      return Math.round(value * 32767);
    case Int8Array:
      return Math.round(value * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var MathUtils = {
  DEG2RAD,
  RAD2DEG,
  generateUUID,
  clamp: clamp$1,
  euclideanModulo,
  mapLinear,
  inverseLerp,
  lerp,
  damp,
  pingpong,
  smoothstep: smoothstep$1,
  smootherstep,
  randInt,
  randFloat,
  randFloatSpread,
  seededRandom,
  degToRad,
  radToDeg,
  isPowerOfTwo,
  ceilPowerOfTwo,
  floorPowerOfTwo,
  setQuaternionFromProperEuler,
  normalize: normalize$1,
  denormalize
};
var Vector22 = class _Vector2 {
  constructor(x = 0, y = 0) {
    _Vector2.prototype.isVector2 = true;
    this.x = x;
    this.y = y;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min2, max2) {
    this.x = Math.max(min2.x, Math.min(max2.x, this.x));
    this.y = Math.max(min2.y, Math.min(max2.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min2, max2) {
    const length2 = this.length();
    return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min2, Math.min(max2, length2)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp$1(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length2) {
    return this.normalize().multiplyScalar(length2);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  fromBufferAttribute(attribute2, index) {
    this.x = attribute2.getX(index);
    this.y = attribute2.getY(index);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
var Matrix3 = class _Matrix3 {
  constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    _Matrix3.prototype.isMatrix3 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
    }
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    );
    return this;
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[4],
      me[8],
      me[1],
      me[5],
      me[9],
      me[2],
      me[6],
      me[10]
    );
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  transpose() {
    let tmp2;
    const m = this.elements;
    tmp2 = m[1];
    m[1] = m[3];
    m[3] = tmp2;
    tmp2 = m[2];
    m[2] = m[6];
    m[6] = tmp2;
    tmp2 = m[5];
    m[5] = m[7];
    m[7] = tmp2;
    return this;
  }
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  transposeIntoArray(r) {
    const m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  }
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    this.set(
      sx * c,
      sx * s,
      -sx * (c * cx + s * cy) + cx + tx,
      -sy * s,
      sy * c,
      -sy * (-s * cx + c * cy) + cy + ty,
      0,
      0,
      1
    );
    return this;
  }
  //
  scale(sx, sy) {
    this.premultiply(_m3.makeScale(sx, sy));
    return this;
  }
  rotate(theta) {
    this.premultiply(_m3.makeRotation(-theta));
    return this;
  }
  translate(tx, ty) {
    this.premultiply(_m3.makeTranslation(tx, ty));
    return this;
  }
  // for 2D Transforms
  makeTranslation(x, y) {
    if (x.isVector2) {
      this.set(
        1,
        0,
        x.x,
        0,
        1,
        x.y,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        x,
        0,
        1,
        y,
        0,
        0,
        1
      );
    }
    return this;
  }
  makeRotation(theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      s,
      c,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeScale(x, y) {
    this.set(
      x,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      1
    );
    return this;
  }
  //
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var _m3 = new Matrix3();
function arrayNeedsUint32$1(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] >= 65535) return true;
  }
  return false;
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
var ColorManagement = {
  enabled: true,
  workingColorSpace: LinearSRGBColorSpace,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(color2, sourceColorSpace, targetColorSpace) {
    if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
      return color2;
    }
    if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
      color2.r = SRGBToLinear(color2.r);
      color2.g = SRGBToLinear(color2.g);
      color2.b = SRGBToLinear(color2.b);
    }
    if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
      color2.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
      color2.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
    }
    if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
      color2.r = LinearToSRGB(color2.r);
      color2.g = LinearToSRGB(color2.g);
      color2.b = LinearToSRGB(color2.b);
    }
    return color2;
  },
  fromWorkingColorSpace: function(color2, targetColorSpace) {
    return this.convert(color2, this.workingColorSpace, targetColorSpace);
  },
  toWorkingColorSpace: function(color2, sourceColorSpace) {
    return this.convert(color2, sourceColorSpace, this.workingColorSpace);
  },
  getPrimaries: function(colorSpace) {
    return this.spaces[colorSpace].primaries;
  },
  getTransfer: function(colorSpace) {
    if (colorSpace === NoColorSpace) return LinearTransfer;
    return this.spaces[colorSpace].transfer;
  },
  getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
    return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
  },
  define: function(colorSpaces) {
    Object.assign(this.spaces, colorSpaces);
  },
  // Internal APIs
  _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
    return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(colorSpace) {
    return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
    return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
  }
};
function SRGBToLinear(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
var REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
var REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
var D65 = [0.3127, 0.329];
var LINEAR_REC709_TO_XYZ = new Matrix3().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
);
var XYZ_TO_LINEAR_REC709 = new Matrix3().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
ColorManagement.define({
  [LinearSRGBColorSpace]: {
    primaries: REC709_PRIMARIES,
    whitePoint: D65,
    transfer: LinearTransfer,
    toXYZ: LINEAR_REC709_TO_XYZ,
    fromXYZ: XYZ_TO_LINEAR_REC709,
    luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
    workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
    outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
  },
  [SRGBColorSpace]: {
    primaries: REC709_PRIMARIES,
    whitePoint: D65,
    transfer: SRGBTransfer,
    toXYZ: LINEAR_REC709_TO_XYZ,
    fromXYZ: XYZ_TO_LINEAR_REC709,
    luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
    outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
  }
});
var _canvas;
var ImageUtils = class {
  static getDataURL(image) {
    if (/^data:/i.test(image.src)) {
      return image.src;
    }
    if (typeof HTMLCanvasElement === "undefined") {
      return image.src;
    }
    let canvas;
    if (image instanceof HTMLCanvasElement) {
      canvas = image;
    } else {
      if (_canvas === void 0) _canvas = createElementNS("canvas");
      _canvas.width = image.width;
      _canvas.height = image.height;
      const context2 = _canvas.getContext("2d");
      if (image instanceof ImageData) {
        context2.putImageData(image, 0, 0);
      } else {
        context2.drawImage(image, 0, 0, image.width, image.height);
      }
      canvas = _canvas;
    }
    if (canvas.width > 2048 || canvas.height > 2048) {
      console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
      return canvas.toDataURL("image/jpeg", 0.6);
    } else {
      return canvas.toDataURL("image/png");
    }
  }
  static sRGBToLinear(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      const canvas = createElementNS("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context2 = canvas.getContext("2d");
      context2.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context2.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i++) {
        data[i] = SRGBToLinear(data[i] / 255) * 255;
      }
      context2.putImageData(imageData, 0, 0);
      return canvas;
    } else if (image.data) {
      const data = image.data.slice(0);
      for (let i = 0; i < data.length; i++) {
        if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
          data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
        } else {
          data[i] = SRGBToLinear(data[i]);
        }
      }
      return {
        data,
        width: image.width,
        height: image.height
      };
    } else {
      console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return image;
    }
  }
};
var _sourceId = 0;
var Source = class {
  constructor(data = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", { value: _sourceId++ });
    this.uuid = generateUUID();
    this.data = data;
    this.dataReady = true;
    this.version = 0;
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.images[this.uuid] !== void 0) {
      return meta.images[this.uuid];
    }
    const output2 = {
      uuid: this.uuid,
      url: ""
    };
    const data = this.data;
    if (data !== null) {
      let url;
      if (Array.isArray(data)) {
        url = [];
        for (let i = 0, l = data.length; i < l; i++) {
          if (data[i].isDataTexture) {
            url.push(serializeImage(data[i].image));
          } else {
            url.push(serializeImage(data[i]));
          }
        }
      } else {
        url = serializeImage(data);
      }
      output2.url = url;
    }
    if (!isRootObject) {
      meta.images[this.uuid] = output2;
    }
    return output2;
  }
};
function serializeImage(image) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return ImageUtils.getDataURL(image);
  } else {
    if (image.data) {
      return {
        data: Array.from(image.data),
        width: image.width,
        height: image.height,
        type: image.data.constructor.name
      };
    } else {
      console.warn("THREE.Texture: Unable to serialize Texture.");
      return {};
    }
  }
}
var _textureId = 0;
var Texture = class _Texture extends EventDispatcher {
  constructor(image = _Texture.DEFAULT_IMAGE, mapping = _Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy2 = _Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", { value: _textureId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.source = new Source(image);
    this.mipmaps = [];
    this.mapping = mapping;
    this.channel = 0;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.magFilter = magFilter;
    this.minFilter = minFilter;
    this.anisotropy = anisotropy2;
    this.format = format;
    this.internalFormat = null;
    this.type = type;
    this.offset = new Vector22(0, 0);
    this.repeat = new Vector22(1, 1);
    this.center = new Vector22(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Matrix3();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = colorSpace;
    this.userData = {};
    this.version = 0;
    this.onUpdate = null;
    this.isRenderTargetTexture = false;
    this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(value = null) {
    this.source.data = value;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.source = source.source;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.channel = source.channel;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.internalFormat = source.internalFormat;
    this.type = source.type;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.center.copy(source.center);
    this.rotation = source.rotation;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrix.copy(source.matrix);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.colorSpace = source.colorSpace;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    this.needsUpdate = true;
    return this;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.textures[this.uuid] !== void 0) {
      return meta.textures[this.uuid];
    }
    const output2 = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(meta).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) output2.userData = this.userData;
    if (!isRootObject) {
      meta.textures[this.uuid] = output2;
    }
    return output2;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(uv2) {
    if (this.mapping !== UVMapping) return uv2;
    uv2.applyMatrix3(this.matrix);
    if (uv2.x < 0 || uv2.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          uv2.x = uv2.x - Math.floor(uv2.x);
          break;
        case ClampToEdgeWrapping:
          uv2.x = uv2.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv2.x) % 2) === 1) {
            uv2.x = Math.ceil(uv2.x) - uv2.x;
          } else {
            uv2.x = uv2.x - Math.floor(uv2.x);
          }
          break;
      }
    }
    if (uv2.y < 0 || uv2.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          uv2.y = uv2.y - Math.floor(uv2.y);
          break;
        case ClampToEdgeWrapping:
          uv2.y = uv2.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv2.y) % 2) === 1) {
            uv2.y = Math.ceil(uv2.y) - uv2.y;
          } else {
            uv2.y = uv2.y - Math.floor(uv2.y);
          }
          break;
      }
    }
    if (this.flipY) {
      uv2.y = 1 - uv2.y;
    }
    return uv2;
  }
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  set needsPMREMUpdate(value) {
    if (value === true) {
      this.pmremVersion++;
    }
  }
};
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
var Vector4 = class _Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    _Vector4.prototype.isVector4 = true;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setW(w) {
    this.w = w;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== void 0 ? v.w : 1;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z, w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    this.w /= v.w;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  setAxisAngleFromQuaternion(q) {
    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(m) {
    let angle, x, y, z;
    const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this;
    }
    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s) < 1e-3) s = 1;
    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    this.w = e[15];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  clamp(min2, max2) {
    this.x = Math.max(min2.x, Math.min(max2.x, this.x));
    this.y = Math.max(min2.y, Math.min(max2.y, this.y));
    this.z = Math.max(min2.z, Math.min(max2.z, this.z));
    this.w = Math.max(min2.w, Math.min(max2.w, this.w));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    this.w = Math.max(minVal, Math.min(maxVal, this.w));
    return this;
  }
  clampLength(min2, max2) {
    const length2 = this.length();
    return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min2, Math.min(max2, length2)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length2) {
    return this.normalize().multiplyScalar(length2);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  fromBufferAttribute(attribute2, index) {
    this.x = attribute2.getX(index);
    this.y = attribute2.getY(index);
    this.z = attribute2.getZ(index);
    this.w = attribute2.getW(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
};
var RenderTarget = class extends EventDispatcher {
  constructor(width = 1, height = 1, options = {}) {
    super();
    this.isRenderTarget = true;
    this.width = width;
    this.height = height;
    this.depth = 1;
    this.scissor = new Vector4(0, 0, width, height);
    this.scissorTest = false;
    this.viewport = new Vector4(0, 0, width, height);
    const image = { width, height, depth: 1 };
    options = Object.assign({
      generateMipmaps: false,
      internalFormat: null,
      minFilter: LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
      resolveDepthBuffer: true,
      resolveStencilBuffer: true,
      depthTexture: null,
      samples: 0,
      count: 1
    }, options);
    const texture2 = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
    texture2.flipY = false;
    texture2.generateMipmaps = options.generateMipmaps;
    texture2.internalFormat = options.internalFormat;
    this.textures = [];
    const count = options.count;
    for (let i = 0; i < count; i++) {
      this.textures[i] = texture2.clone();
      this.textures[i].isRenderTargetTexture = true;
    }
    this.depthBuffer = options.depthBuffer;
    this.stencilBuffer = options.stencilBuffer;
    this.resolveDepthBuffer = options.resolveDepthBuffer;
    this.resolveStencilBuffer = options.resolveStencilBuffer;
    this.depthTexture = options.depthTexture;
    this.samples = options.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(value) {
    this.textures[0] = value;
  }
  setSize(width, height, depth2 = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth2) {
      this.width = width;
      this.height = height;
      this.depth = depth2;
      for (let i = 0, il = this.textures.length; i < il; i++) {
        this.textures[i].image.width = width;
        this.textures[i].image.height = height;
        this.textures[i].image.depth = depth2;
      }
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.scissor.copy(source.scissor);
    this.scissorTest = source.scissorTest;
    this.viewport.copy(source.viewport);
    this.textures.length = 0;
    for (let i = 0, il = source.textures.length; i < il; i++) {
      this.textures[i] = source.textures[i].clone();
      this.textures[i].isRenderTargetTexture = true;
    }
    const image = Object.assign({}, source.texture.image);
    this.texture.source = new Source(image);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    this.resolveDepthBuffer = source.resolveDepthBuffer;
    this.resolveStencilBuffer = source.resolveStencilBuffer;
    if (source.depthTexture !== null) this.depthTexture = source.depthTexture.clone();
    this.samples = source.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var WebGLRenderTarget = class extends RenderTarget {
  constructor(width = 1, height = 1, options = {}) {
    super(width, height, options);
    this.isWebGLRenderTarget = true;
  }
};
var DataArrayTexture = class extends Texture {
  constructor(data = null, width = 1, height = 1, depth2 = 1) {
    super(null);
    this.isDataArrayTexture = true;
    this.image = { data, width, height, depth: depth2 };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
    this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(layerIndex) {
    this.layerUpdates.add(layerIndex);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var Quaternion = class {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.isQuaternion = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w02 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w12 = src1[srcOffset1 + 3];
    if (t === 0) {
      dst[dstOffset + 0] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w02;
      return;
    }
    if (t === 1) {
      dst[dstOffset + 0] = x1;
      dst[dstOffset + 1] = y1;
      dst[dstOffset + 2] = z1;
      dst[dstOffset + 3] = w12;
      return;
    }
    if (w02 !== w12 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let s = 1 - t;
      const cos2 = x0 * x1 + y0 * y1 + z0 * z1 + w02 * w12, dir = cos2 >= 0 ? 1 : -1, sqrSin = 1 - cos2 * cos2;
      if (sqrSin > Number.EPSILON) {
        const sin2 = Math.sqrt(sqrSin), len = Math.atan2(sin2, cos2 * dir);
        s = Math.sin(s * len) / sin2;
        t = Math.sin(t * len) / sin2;
      }
      const tDir = t * dir;
      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w02 = w02 * s + w12 * tDir;
      if (s === 1 - t) {
        const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w02 * w02);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w02 *= f;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w02;
  }
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w02 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w12 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w12 + w02 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w12 + w02 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w12 + w02 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w02 * w12 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  set(x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(euler, update = true) {
    const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
    const cos2 = Math.cos;
    const sin2 = Math.sin;
    const c1 = cos2(x / 2);
    const c2 = cos2(y / 2);
    const c3 = cos2(z / 2);
    const s1 = sin2(x / 2);
    const s2 = sin2(y / 2);
    const s3 = sin2(z / 2);
    switch (order) {
      case "XYZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "YXZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "ZXY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "ZYX":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "YZX":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "XZY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
    }
    if (update === true) this._onChangeCallback();
    return this;
  }
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle / 2, s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m) {
    const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(vFrom, vTo) {
    let r = vFrom.dot(vTo) + 1;
    if (r < Number.EPSILON) {
      r = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r;
      }
    } else {
      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r;
    }
    return this.normalize();
  }
  angleTo(q) {
    return 2 * Math.acos(Math.abs(clamp$1(this.dot(q), -1, 1)));
  }
  rotateTowards(q, step2) {
    const angle = this.angleTo(q);
    if (angle === 0) return this;
    const t = Math.min(1, step2 / angle);
    this.slerp(q, t);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let l = this.length();
    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(q) {
    return this.multiplyQuaternions(this, q);
  }
  premultiply(q) {
    return this.multiplyQuaternions(q, this);
  }
  multiplyQuaternions(a, b) {
    const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
    const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  slerp(qb, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(qb);
    const x = this._x, y = this._y, z = this._z, w = this._w;
    let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
    if (cosHalfTheta < 0) {
      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(qb);
    }
    if (cosHalfTheta >= 1) {
      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;
      return this;
    }
    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      this._w = s * w + t * this._w;
      this._x = s * x + t * this._x;
      this._y = s * y + t * this._y;
      this._z = s * z + t * this._z;
      this.normalize();
      return this;
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;
    this._onChangeCallback();
    return this;
  }
  slerpQuaternions(qa, qb, t) {
    return this.copy(qa).slerp(qb, t);
  }
  random() {
    const theta1 = 2 * Math.PI * Math.random();
    const theta2 = 2 * Math.PI * Math.random();
    const x0 = Math.random();
    const r1 = Math.sqrt(1 - x0);
    const r2 = Math.sqrt(x0);
    return this.set(
      r1 * Math.sin(theta1),
      r1 * Math.cos(theta1),
      r2 * Math.sin(theta2),
      r2 * Math.cos(theta2)
    );
  }
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  fromBufferAttribute(attribute2, index) {
    this._x = attribute2.getX(index);
    this._y = attribute2.getY(index);
    this._z = attribute2.getZ(index);
    this._w = attribute2.getW(index);
    this._onChangeCallback();
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
};
var Vector32 = class _Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    _Vector3.prototype.isVector3 = true;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x, y, z) {
    if (z === void 0) z = this.z;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  }
  applyEuler(euler) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
  }
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  }
  applyNormalMatrix(m) {
    return this.applyMatrix3(m).normalize();
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  applyQuaternion(q) {
    const vx = this.x, vy = this.y, vz = this.z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const tx = 2 * (qy * vz - qz * vy);
    const ty = 2 * (qz * vx - qx * vz);
    const tz = 2 * (qx * vy - qy * vx);
    this.x = vx + qw * tx + qy * tz - qz * ty;
    this.y = vy + qw * ty + qz * tx - qx * tz;
    this.z = vz + qw * tz + qx * ty - qy * tx;
    return this;
  }
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  transformDirection(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  }
  clamp(min2, max2) {
    this.x = Math.max(min2.x, Math.min(max2.x, this.x));
    this.y = Math.max(min2.y, Math.min(max2.y, this.y));
    this.z = Math.max(min2.z, Math.min(max2.z, this.z));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    return this;
  }
  clampLength(min2, max2) {
    const length2 = this.length();
    return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min2, Math.min(max2, length2)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length2) {
    return this.normalize().multiplyScalar(length2);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  cross(v) {
    return this.crossVectors(this, v);
  }
  crossVectors(a, b) {
    const ax = a.x, ay = a.y, az = a.z;
    const bx = b.x, by = b.y, bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  projectOnVector(v) {
    const denominator = v.lengthSq();
    if (denominator === 0) return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v).multiplyScalar(scalar);
  }
  projectOnPlane(planeNormal) {
    _vector$c.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector$c);
  }
  reflect(normal2) {
    return this.sub(_vector$c.copy(normal2).multiplyScalar(2 * this.dot(normal2)));
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp$1(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
  }
  setFromSpherical(s) {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  setFromCylindrical(c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }
  setFromCylindricalCoords(radius, theta, y) {
    this.x = radius * Math.sin(theta);
    this.y = y;
    this.z = radius * Math.cos(theta);
    return this;
  }
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    return this;
  }
  setFromMatrixScale(m) {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  setFromMatrixColumn(m, index) {
    return this.fromArray(m.elements, index * 4);
  }
  setFromMatrix3Column(m, index) {
    return this.fromArray(m.elements, index * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(c) {
    this.x = c.r;
    this.y = c.g;
    this.z = c.b;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  fromBufferAttribute(attribute2, index) {
    this.x = attribute2.getX(index);
    this.y = attribute2.getY(index);
    this.z = attribute2.getZ(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    const theta = Math.random() * Math.PI * 2;
    const u = Math.random() * 2 - 1;
    const c = Math.sqrt(1 - u * u);
    this.x = c * Math.cos(theta);
    this.y = u;
    this.z = c * Math.sin(theta);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
};
var _vector$c = new Vector32();
var _quaternion$4 = new Quaternion();
var Box3 = class {
  constructor(min2 = new Vector32(Infinity, Infinity, Infinity), max2 = new Vector32(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = min2;
    this.max = max2;
  }
  set(min2, max2) {
    this.min.copy(min2);
    this.max.copy(max2);
    return this;
  }
  setFromArray(array) {
    this.makeEmpty();
    for (let i = 0, il = array.length; i < il; i += 3) {
      this.expandByPoint(_vector$b.fromArray(array, i));
    }
    return this;
  }
  setFromBufferAttribute(attribute2) {
    this.makeEmpty();
    for (let i = 0, il = attribute2.count; i < il; i++) {
      this.expandByPoint(_vector$b.fromBufferAttribute(attribute2, i));
    }
    return this;
  }
  setFromPoints(points) {
    this.makeEmpty();
    for (let i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  setFromObject(object, precise = false) {
    this.makeEmpty();
    return this.expandByObject(object, precise);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
  }
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  expandByObject(object, precise = false) {
    object.updateWorldMatrix(false, false);
    const geometry = object.geometry;
    if (geometry !== void 0) {
      const positionAttribute = geometry.getAttribute("position");
      if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
        for (let i = 0, l = positionAttribute.count; i < l; i++) {
          if (object.isMesh === true) {
            object.getVertexPosition(i, _vector$b);
          } else {
            _vector$b.fromBufferAttribute(positionAttribute, i);
          }
          _vector$b.applyMatrix4(object.matrixWorld);
          this.expandByPoint(_vector$b);
        }
      } else {
        if (object.boundingBox !== void 0) {
          if (object.boundingBox === null) {
            object.computeBoundingBox();
          }
          _box$4.copy(object.boundingBox);
        } else {
          if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
          }
          _box$4.copy(geometry.boundingBox);
        }
        _box$4.applyMatrix4(object.matrixWorld);
        this.union(_box$4);
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      this.expandByObject(children[i], precise);
    }
    return this;
  }
  containsPoint(point) {
    return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
  }
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
  }
  getParameter(point, target) {
    return target.set(
      (point.x - this.min.x) / (this.max.x - this.min.x),
      (point.y - this.min.y) / (this.max.y - this.min.y),
      (point.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(box) {
    return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
  }
  intersectsSphere(sphere) {
    this.clampPoint(sphere.center, _vector$b);
    return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
  }
  intersectsPlane(plane) {
    let min2, max2;
    if (plane.normal.x > 0) {
      min2 = plane.normal.x * this.min.x;
      max2 = plane.normal.x * this.max.x;
    } else {
      min2 = plane.normal.x * this.max.x;
      max2 = plane.normal.x * this.min.x;
    }
    if (plane.normal.y > 0) {
      min2 += plane.normal.y * this.min.y;
      max2 += plane.normal.y * this.max.y;
    } else {
      min2 += plane.normal.y * this.max.y;
      max2 += plane.normal.y * this.min.y;
    }
    if (plane.normal.z > 0) {
      min2 += plane.normal.z * this.min.z;
      max2 += plane.normal.z * this.max.z;
    } else {
      min2 += plane.normal.z * this.max.z;
      max2 += plane.normal.z * this.min.z;
    }
    return min2 <= -plane.constant && max2 >= -plane.constant;
  }
  intersectsTriangle(triangle) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(_center);
    _extents.subVectors(this.max, _center);
    _v0$2.subVectors(triangle.a, _center);
    _v1$7.subVectors(triangle.b, _center);
    _v2$4.subVectors(triangle.c, _center);
    _f0.subVectors(_v1$7, _v0$2);
    _f1.subVectors(_v2$4, _v1$7);
    _f2.subVectors(_v0$2, _v2$4);
    let axes = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
      return false;
    }
    _triangleNormal.crossVectors(_f0, _f1);
    axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
    return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
  }
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  distanceToPoint(point) {
    return this.clampPoint(point, _vector$b).distanceTo(point);
  }
  getBoundingSphere(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
    } else {
      this.getCenter(target.center);
      target.radius = this.getSize(_vector$b).length() * 0.5;
    }
    return target;
  }
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    if (this.isEmpty()) this.makeEmpty();
    return this;
  }
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  applyMatrix4(matrix) {
    if (this.isEmpty()) return this;
    _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
    _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
    this.setFromPoints(_points);
    return this;
  }
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
};
var _points = [
  new Vector32(),
  new Vector32(),
  new Vector32(),
  new Vector32(),
  new Vector32(),
  new Vector32(),
  new Vector32(),
  new Vector32()
];
var _vector$b = new Vector32();
var _box$4 = new Box3();
var _v0$2 = new Vector32();
var _v1$7 = new Vector32();
var _v2$4 = new Vector32();
var _f0 = new Vector32();
var _f1 = new Vector32();
var _f2 = new Vector32();
var _center = new Vector32();
var _extents = new Vector32();
var _triangleNormal = new Vector32();
var _testAxis = new Vector32();
function satForAxes(axes, v0, v1, v2, extents) {
  for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
    _testAxis.fromArray(axes, i);
    const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
    const p0 = v0.dot(_testAxis);
    const p1 = v1.dot(_testAxis);
    const p2 = v2.dot(_testAxis);
    if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
      return false;
    }
  }
  return true;
}
var _box$3 = new Box3();
var _v1$6 = new Vector32();
var _v2$3 = new Vector32();
var Sphere = class {
  constructor(center = new Vector32(), radius = -1) {
    this.isSphere = true;
    this.center = center;
    this.radius = radius;
  }
  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }
  setFromPoints(points, optionalCenter) {
    const center = this.center;
    if (optionalCenter !== void 0) {
      center.copy(optionalCenter);
    } else {
      _box$3.setFromPoints(points).getCenter(center);
    }
    let maxRadiusSq = 0;
    for (let i = 0, il = points.length; i < il; i++) {
      maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
    }
    this.radius = Math.sqrt(maxRadiusSq);
    return this;
  }
  copy(sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(point) {
    return point.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(sphere) {
    const radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  }
  intersectsBox(box) {
    return box.intersectsSphere(this);
  }
  intersectsPlane(plane) {
    return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(point, target) {
    const deltaLengthSq = this.center.distanceToSquared(point);
    target.copy(point);
    if (deltaLengthSq > this.radius * this.radius) {
      target.sub(this.center).normalize();
      target.multiplyScalar(this.radius).add(this.center);
    }
    return target;
  }
  getBoundingBox(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
      return target;
    }
    target.set(this.center, this.center);
    target.expandByScalar(this.radius);
    return target;
  }
  applyMatrix4(matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  }
  translate(offset) {
    this.center.add(offset);
    return this;
  }
  expandByPoint(point) {
    if (this.isEmpty()) {
      this.center.copy(point);
      this.radius = 0;
      return this;
    }
    _v1$6.subVectors(point, this.center);
    const lengthSq2 = _v1$6.lengthSq();
    if (lengthSq2 > this.radius * this.radius) {
      const length2 = Math.sqrt(lengthSq2);
      const delta = (length2 - this.radius) * 0.5;
      this.center.addScaledVector(_v1$6, delta / length2);
      this.radius += delta;
    }
    return this;
  }
  union(sphere) {
    if (sphere.isEmpty()) {
      return this;
    }
    if (this.isEmpty()) {
      this.copy(sphere);
      return this;
    }
    if (this.center.equals(sphere.center) === true) {
      this.radius = Math.max(this.radius, sphere.radius);
    } else {
      _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
      this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
      this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
    }
    return this;
  }
  equals(sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var _vector$a = new Vector32();
var _segCenter = new Vector32();
var _segDir = new Vector32();
var _diff = new Vector32();
var _edge1 = new Vector32();
var _edge2 = new Vector32();
var _normal$2 = new Vector32();
var Ray = class {
  constructor(origin = new Vector32(), direction2 = new Vector32(0, 0, -1)) {
    this.origin = origin;
    this.direction = direction2;
  }
  set(origin, direction2) {
    this.origin.copy(origin);
    this.direction.copy(direction2);
    return this;
  }
  copy(ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);
    return this;
  }
  at(t, target) {
    return target.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(v) {
    this.direction.copy(v).sub(this.origin).normalize();
    return this;
  }
  recast(t) {
    this.origin.copy(this.at(t, _vector$a));
    return this;
  }
  closestPointToPoint(point, target) {
    target.subVectors(point, this.origin);
    const directionDistance = target.dot(this.direction);
    if (directionDistance < 0) {
      return target.copy(this.origin);
    }
    return target.copy(this.origin).addScaledVector(this.direction, directionDistance);
  }
  distanceToPoint(point) {
    return Math.sqrt(this.distanceSqToPoint(point));
  }
  distanceSqToPoint(point) {
    const directionDistance = _vector$a.subVectors(point, this.origin).dot(this.direction);
    if (directionDistance < 0) {
      return this.origin.distanceToSquared(point);
    }
    _vector$a.copy(this.origin).addScaledVector(this.direction, directionDistance);
    return _vector$a.distanceToSquared(point);
  }
  distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
    _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
    _segDir.copy(v1).sub(v0).normalize();
    _diff.copy(this.origin).sub(_segCenter);
    const segExtent = v0.distanceTo(v1) * 0.5;
    const a01 = -this.direction.dot(_segDir);
    const b0 = _diff.dot(this.direction);
    const b1 = -_diff.dot(_segDir);
    const c = _diff.lengthSq();
    const det = Math.abs(1 - a01 * a01);
    let s0, s1, sqrDist, extDet;
    if (det > 0) {
      s0 = a01 * b1 - b0;
      s1 = a01 * b0 - b1;
      extDet = segExtent * det;
      if (s0 >= 0) {
        if (s1 >= -extDet) {
          if (s1 <= extDet) {
            const invDet = 1 / det;
            s0 *= invDet;
            s1 *= invDet;
            sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
          } else {
            s1 = segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          s1 = -segExtent;
          s0 = Math.max(0, -(a01 * s1 + b0));
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      } else {
        if (s1 <= -extDet) {
          s0 = Math.max(0, -(-a01 * segExtent + b0));
          s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        } else if (s1 <= extDet) {
          s0 = 0;
          s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = s1 * (s1 + 2 * b1) + c;
        } else {
          s0 = Math.max(0, -(a01 * segExtent + b0));
          s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      }
    } else {
      s1 = a01 > 0 ? -segExtent : segExtent;
      s0 = Math.max(0, -(a01 * s1 + b0));
      sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
    }
    if (optionalPointOnRay) {
      optionalPointOnRay.copy(this.origin).addScaledVector(this.direction, s0);
    }
    if (optionalPointOnSegment) {
      optionalPointOnSegment.copy(_segCenter).addScaledVector(_segDir, s1);
    }
    return sqrDist;
  }
  intersectSphere(sphere, target) {
    _vector$a.subVectors(sphere.center, this.origin);
    const tca = _vector$a.dot(this.direction);
    const d2 = _vector$a.dot(_vector$a) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2) return null;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t1 < 0) return null;
    if (t0 < 0) return this.at(t1, target);
    return this.at(t0, target);
  }
  intersectsSphere(sphere) {
    return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
  }
  distanceToPlane(plane) {
    const denominator = plane.normal.dot(this.direction);
    if (denominator === 0) {
      if (plane.distanceToPoint(this.origin) === 0) {
        return 0;
      }
      return null;
    }
    const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
    return t >= 0 ? t : null;
  }
  intersectPlane(plane, target) {
    const t = this.distanceToPlane(plane);
    if (t === null) {
      return null;
    }
    return this.at(t, target);
  }
  intersectsPlane(plane) {
    const distToPoint = plane.distanceToPoint(this.origin);
    if (distToPoint === 0) {
      return true;
    }
    const denominator = plane.normal.dot(this.direction);
    if (denominator * distToPoint < 0) {
      return true;
    }
    return false;
  }
  intersectBox(box, target) {
    let tmin, tmax, tymin, tymax, tzmin, tzmax;
    const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
    const origin = this.origin;
    if (invdirx >= 0) {
      tmin = (box.min.x - origin.x) * invdirx;
      tmax = (box.max.x - origin.x) * invdirx;
    } else {
      tmin = (box.max.x - origin.x) * invdirx;
      tmax = (box.min.x - origin.x) * invdirx;
    }
    if (invdiry >= 0) {
      tymin = (box.min.y - origin.y) * invdiry;
      tymax = (box.max.y - origin.y) * invdiry;
    } else {
      tymin = (box.max.y - origin.y) * invdiry;
      tymax = (box.min.y - origin.y) * invdiry;
    }
    if (tmin > tymax || tymin > tmax) return null;
    if (tymin > tmin || isNaN(tmin)) tmin = tymin;
    if (tymax < tmax || isNaN(tmax)) tmax = tymax;
    if (invdirz >= 0) {
      tzmin = (box.min.z - origin.z) * invdirz;
      tzmax = (box.max.z - origin.z) * invdirz;
    } else {
      tzmin = (box.max.z - origin.z) * invdirz;
      tzmax = (box.min.z - origin.z) * invdirz;
    }
    if (tmin > tzmax || tzmin > tmax) return null;
    if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax) tmax = tzmax;
    if (tmax < 0) return null;
    return this.at(tmin >= 0 ? tmin : tmax, target);
  }
  intersectsBox(box) {
    return this.intersectBox(box, _vector$a) !== null;
  }
  intersectTriangle(a, b, c, backfaceCulling, target) {
    _edge1.subVectors(b, a);
    _edge2.subVectors(c, a);
    _normal$2.crossVectors(_edge1, _edge2);
    let DdN = this.direction.dot(_normal$2);
    let sign2;
    if (DdN > 0) {
      if (backfaceCulling) return null;
      sign2 = 1;
    } else if (DdN < 0) {
      sign2 = -1;
      DdN = -DdN;
    } else {
      return null;
    }
    _diff.subVectors(this.origin, a);
    const DdQxE2 = sign2 * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (DdQxE2 < 0) {
      return null;
    }
    const DdE1xQ = sign2 * this.direction.dot(_edge1.cross(_diff));
    if (DdE1xQ < 0) {
      return null;
    }
    if (DdQxE2 + DdE1xQ > DdN) {
      return null;
    }
    const QdN = -sign2 * _diff.dot(_normal$2);
    if (QdN < 0) {
      return null;
    }
    return this.at(QdN / DdN, target);
  }
  applyMatrix4(matrix4) {
    this.origin.applyMatrix4(matrix4);
    this.direction.transformDirection(matrix4);
    return this;
  }
  equals(ray) {
    return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Matrix4 = class _Matrix4 {
  constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    _Matrix4.prototype.isMatrix4 = true;
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
    }
  }
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  clone() {
    return new _Matrix4().fromArray(this.elements);
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  copyPosition(m) {
    const te = this.elements, me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  setFromMatrix3(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[3],
      me[6],
      0,
      me[1],
      me[4],
      me[7],
      0,
      me[2],
      me[5],
      me[8],
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  extractRotation(m) {
    const te = this.elements;
    const me = m.elements;
    const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
    const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
    const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromEuler(euler) {
    const te = this.elements;
    const x = euler.x, y = euler.y, z = euler.z;
    const a = Math.cos(x), b = Math.sin(x);
    const c = Math.cos(y), d = Math.sin(y);
    const e = Math.cos(z), f = Math.sin(z);
    if (euler.order === "XYZ") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === "YXZ") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === "ZXY") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === "ZYX") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === "YZX") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === "XZY") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(q) {
    return this.compose(_zero, q, _one);
  }
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      if (Math.abs(up.z) === 1) {
        _z.x += 1e-4;
      } else {
        _z.z += 1e-4;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
    const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
    const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
    const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  }
  transpose() {
    const te = this.elements;
    let tmp2;
    tmp2 = te[1];
    te[1] = te[4];
    te[4] = tmp2;
    tmp2 = te[2];
    te[2] = te[8];
    te[8] = tmp2;
    tmp2 = te[6];
    te[6] = te[9];
    te[9] = tmp2;
    tmp2 = te[3];
    te[3] = te[12];
    te[12] = tmp2;
    tmp2 = te[7];
    te[7] = te[13];
    te[13] = tmp2;
    tmp2 = te[11];
    te[11] = te[14];
    te[14] = tmp2;
    return this;
  }
  setPosition(x, y, z) {
    const te = this.elements;
    if (x.isVector3) {
      te[12] = x.x;
      te[13] = x.y;
      te[14] = x.z;
    } else {
      te[12] = x;
      te[13] = y;
      te[14] = z;
    }
    return this;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
    te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
    te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
    te[4] = t12 * detInv;
    te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
    te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
    te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
    te[8] = t13 * detInv;
    te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
    te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
    te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
    te[12] = t14 * detInv;
    te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
    te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
    te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
    return this;
  }
  scale(v) {
    const te = this.elements;
    const x = v.x, y = v.y, z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  }
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  makeTranslation(x, y, z) {
    if (x.isVector3) {
      this.set(
        1,
        0,
        0,
        x.x,
        0,
        1,
        0,
        x.y,
        0,
        0,
        1,
        x.z,
        0,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        0,
        x,
        0,
        1,
        0,
        y,
        0,
        0,
        1,
        z,
        0,
        0,
        0,
        1
      );
    }
    return this;
  }
  makeRotationX(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      1,
      0,
      0,
      0,
      0,
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationY(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      0,
      s,
      0,
      0,
      1,
      0,
      0,
      -s,
      0,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationZ(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationAxis(axis, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x, y = axis.y, z = axis.z;
    const tx = t * x, ty = t * y;
    this.set(
      tx * x + c,
      tx * y - s * z,
      tx * z + s * y,
      0,
      tx * y + s * z,
      ty * y + c,
      ty * z - s * x,
      0,
      tx * z - s * y,
      ty * z + s * x,
      t * z * z + c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeScale(x, y, z) {
    this.set(
      x,
      0,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      0,
      z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(
      1,
      yx,
      zx,
      0,
      xy,
      1,
      zy,
      0,
      xz,
      yz,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  decompose(position, quaternion, scale) {
    const te = this.elements;
    let sx = _v1$5.set(te[0], te[1], te[2]).length();
    const sy = _v1$5.set(te[4], te[5], te[6]).length();
    const sz = _v1$5.set(te[8], te[9], te[10]).length();
    const det = this.determinant();
    if (det < 0) sx = -sx;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];
    _m1$3.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1$3.elements[0] *= invSX;
    _m1$3.elements[1] *= invSX;
    _m1$3.elements[2] *= invSX;
    _m1$3.elements[4] *= invSY;
    _m1$3.elements[5] *= invSY;
    _m1$3.elements[6] *= invSY;
    _m1$3.elements[8] *= invSZ;
    _m1$3.elements[9] *= invSZ;
    _m1$3.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1$3);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
    const te = this.elements;
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    let c, d;
    if (coordinateSystem === WebGLCoordinateSystem) {
      c = -(far + near) / (far - near);
      d = -2 * far * near / (far - near);
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      c = -far / (far - near);
      d = -far * near / (far - near);
    } else {
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
    }
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
    const te = this.elements;
    const w = 1 / (right - left);
    const h = 1 / (top - bottom);
    const p = 1 / (far - near);
    const x = (right + left) * w;
    const y = (top + bottom) * h;
    let z, zInv;
    if (coordinateSystem === WebGLCoordinateSystem) {
      z = (far + near) * p;
      zInv = -2 * p;
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      z = near * p;
      zInv = -1 * p;
    } else {
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
    }
    te[0] = 2 * w;
    te[4] = 0;
    te[8] = 0;
    te[12] = -x;
    te[1] = 0;
    te[5] = 2 * h;
    te[9] = 0;
    te[13] = -y;
    te[2] = 0;
    te[6] = 0;
    te[10] = zInv;
    te[14] = -z;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 16; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
};
var _v1$5 = new Vector32();
var _m1$3 = new Matrix4();
var _zero = new Vector32(0, 0, 0);
var _one = new Vector32(1, 1, 1);
var _x = new Vector32();
var _y = new Vector32();
var _z = new Vector32();
var _matrix$2 = new Matrix4();
var _quaternion$3 = new Quaternion();
var Euler = class _Euler {
  constructor(x = 0, y = 0, z = 0, order = _Euler.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  set(x, y, z, order = this._order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m, order = this._order, update = true) {
    const te = m.elements;
    const m11 = te[0], m12 = te[4], m13 = te[8];
    const m21 = te[1], m22 = te[5], m23 = te[9];
    const m31 = te[2], m32 = te[6], m33 = te[10];
    switch (order) {
      case "XYZ":
        this._y = Math.asin(clamp$1(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-clamp$1(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(clamp$1(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-clamp$1(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case "YZX":
        this._z = Math.asin(clamp$1(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case "XZY":
        this._z = Math.asin(-clamp$1(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
    }
    this._order = order;
    if (update === true) this._onChangeCallback();
    return this;
  }
  setFromQuaternion(q, order, update) {
    _matrix$2.makeRotationFromQuaternion(q);
    return this.setFromRotationMatrix(_matrix$2, order, update);
  }
  setFromVector3(v, order = this._order) {
    return this.set(v.x, v.y, v.z, order);
  }
  reorder(newOrder) {
    _quaternion$3.setFromEuler(this);
    return this.setFromQuaternion(_quaternion$3, newOrder);
  }
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== void 0) this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
};
Euler.DEFAULT_ORDER = "XYZ";
var Layers = class {
  constructor() {
    this.mask = 1 | 0;
  }
  set(channel) {
    this.mask = (1 << channel | 0) >>> 0;
  }
  enable(channel) {
    this.mask |= 1 << channel | 0;
  }
  enableAll() {
    this.mask = 4294967295 | 0;
  }
  toggle(channel) {
    this.mask ^= 1 << channel | 0;
  }
  disable(channel) {
    this.mask &= ~(1 << channel | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }
  isEnabled(channel) {
    return (this.mask & (1 << channel | 0)) !== 0;
  }
};
var _object3DId = 0;
var _v1$4 = new Vector32();
var _q1 = new Quaternion();
var _m1$2 = new Matrix4();
var _target$1 = new Vector32();
var _position$3 = new Vector32();
var _scale$2 = new Vector32();
var _quaternion$2 = new Quaternion();
var _xAxis = new Vector32(1, 0, 0);
var _yAxis = new Vector32(0, 1, 0);
var _zAxis = new Vector32(0, 0, 1);
var _addedEvent = { type: "added" };
var _removedEvent = { type: "removed" };
var _childaddedEvent = { type: "childadded", child: null };
var _childremovedEvent = { type: "childremoved", child: null };
var Object3D = class _Object3D extends EventDispatcher {
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", { value: _object3DId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = _Object3D.DEFAULT_UP.clone();
    const position = new Vector32();
    const rotation = new Euler();
    const quaternion = new Quaternion();
    const scale = new Vector32(1, 1, 1);
    function onRotationChange() {
      quaternion.setFromEuler(rotation, false);
    }
    function onQuaternionChange() {
      rotation.setFromQuaternion(quaternion, void 0, false);
    }
    rotation._onChange(onRotationChange);
    quaternion._onChange(onQuaternionChange);
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: position
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: rotation
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: quaternion
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: scale
      },
      modelViewMatrix: {
        value: new Matrix4()
      },
      normalMatrix: {
        value: new Matrix3()
      }
    });
    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();
    this.matrixAutoUpdate = _Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = _Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Layers();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(matrix) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    this.matrix.premultiply(matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(q) {
    this.quaternion.premultiply(q);
    return this;
  }
  setRotationFromAxisAngle(axis, angle) {
    this.quaternion.setFromAxisAngle(axis, angle);
  }
  setRotationFromEuler(euler) {
    this.quaternion.setFromEuler(euler, true);
  }
  setRotationFromMatrix(m) {
    this.quaternion.setFromRotationMatrix(m);
  }
  setRotationFromQuaternion(q) {
    this.quaternion.copy(q);
  }
  rotateOnAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q1);
    return this;
  }
  rotateOnWorldAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q1);
    return this;
  }
  rotateX(angle) {
    return this.rotateOnAxis(_xAxis, angle);
  }
  rotateY(angle) {
    return this.rotateOnAxis(_yAxis, angle);
  }
  rotateZ(angle) {
    return this.rotateOnAxis(_zAxis, angle);
  }
  translateOnAxis(axis, distance2) {
    _v1$4.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1$4.multiplyScalar(distance2));
    return this;
  }
  translateX(distance2) {
    return this.translateOnAxis(_xAxis, distance2);
  }
  translateY(distance2) {
    return this.translateOnAxis(_yAxis, distance2);
  }
  translateZ(distance2) {
    return this.translateOnAxis(_zAxis, distance2);
  }
  localToWorld(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(_m1$2.copy(this.matrixWorld).invert());
  }
  lookAt(x, y, z) {
    if (x.isVector3) {
      _target$1.copy(x);
    } else {
      _target$1.set(x, y, z);
    }
    const parent = this.parent;
    this.updateWorldMatrix(true, false);
    _position$3.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      _m1$2.lookAt(_position$3, _target$1, this.up);
    } else {
      _m1$2.lookAt(_target$1, _position$3, this.up);
    }
    this.quaternion.setFromRotationMatrix(_m1$2);
    if (parent) {
      _m1$2.extractRotation(parent.matrixWorld);
      _q1.setFromRotationMatrix(_m1$2);
      this.quaternion.premultiply(_q1.invert());
    }
  }
  add(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    if (object === this) {
      console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
      return this;
    }
    if (object && object.isObject3D) {
      object.removeFromParent();
      object.parent = this;
      this.children.push(object);
      object.dispatchEvent(_addedEvent);
      _childaddedEvent.child = object;
      this.dispatchEvent(_childaddedEvent);
      _childaddedEvent.child = null;
    } else {
      console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
    }
    return this;
  }
  remove(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
      return this;
    }
    const index = this.children.indexOf(object);
    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);
      object.dispatchEvent(_removedEvent);
      _childremovedEvent.child = object;
      this.dispatchEvent(_childremovedEvent);
      _childremovedEvent.child = null;
    }
    return this;
  }
  removeFromParent() {
    const parent = this.parent;
    if (parent !== null) {
      parent.remove(this);
    }
    return this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(object) {
    this.updateWorldMatrix(true, false);
    _m1$2.copy(this.matrixWorld).invert();
    if (object.parent !== null) {
      object.parent.updateWorldMatrix(true, false);
      _m1$2.multiply(object.parent.matrixWorld);
    }
    object.applyMatrix4(_m1$2);
    object.removeFromParent();
    object.parent = this;
    this.children.push(object);
    object.updateWorldMatrix(false, true);
    object.dispatchEvent(_addedEvent);
    _childaddedEvent.child = object;
    this.dispatchEvent(_childaddedEvent);
    _childaddedEvent.child = null;
    return this;
  }
  getObjectById(id) {
    return this.getObjectByProperty("id", id);
  }
  getObjectByName(name) {
    return this.getObjectByProperty("name", name);
  }
  getObjectByProperty(name, value) {
    if (this[name] === value) return this;
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];
      const object = child.getObjectByProperty(name, value);
      if (object !== void 0) {
        return object;
      }
    }
    return void 0;
  }
  getObjectsByProperty(name, value, result = []) {
    if (this[name] === value) result.push(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].getObjectsByProperty(name, value, result);
    }
    return result;
  }
  getWorldPosition(target) {
    this.updateWorldMatrix(true, false);
    return target.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, target, _scale$2);
    return target;
  }
  getWorldScale(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, _quaternion$2, target);
    return target;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  }
  traverseVisible(callback) {
    if (this.visible === false) return;
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  }
  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i];
      child.updateMatrixWorld(force);
    }
  }
  updateWorldMatrix(updateParents, updateChildren) {
    const parent = this.parent;
    if (updateParents === true && parent !== null) {
      parent.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldAutoUpdate === true) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
    }
    if (updateChildren === true) {
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        child.updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    const output2 = {};
    if (isRootObject) {
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      output2.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== "") object.name = this.name;
    if (this.castShadow === true) object.castShadow = true;
    if (this.receiveShadow === true) object.receiveShadow = true;
    if (this.visible === false) object.visible = false;
    if (this.frustumCulled === false) object.frustumCulled = false;
    if (this.renderOrder !== 0) object.renderOrder = this.renderOrder;
    if (Object.keys(this.userData).length > 0) object.userData = this.userData;
    object.layers = this.layers.mask;
    object.matrix = this.matrix.toArray();
    object.up = this.up.toArray();
    if (this.matrixAutoUpdate === false) object.matrixAutoUpdate = false;
    if (this.isInstancedMesh) {
      object.type = "InstancedMesh";
      object.count = this.count;
      object.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) object.instanceColor = this.instanceColor.toJSON();
    }
    if (this.isBatchedMesh) {
      object.type = "BatchedMesh";
      object.perObjectFrustumCulled = this.perObjectFrustumCulled;
      object.sortObjects = this.sortObjects;
      object.drawRanges = this._drawRanges;
      object.reservedRanges = this._reservedRanges;
      object.visibility = this._visibility;
      object.active = this._active;
      object.bounds = this._bounds.map((bound) => ({
        boxInitialized: bound.boxInitialized,
        boxMin: bound.box.min.toArray(),
        boxMax: bound.box.max.toArray(),
        sphereInitialized: bound.sphereInitialized,
        sphereRadius: bound.sphere.radius,
        sphereCenter: bound.sphere.center.toArray()
      }));
      object.maxInstanceCount = this._maxInstanceCount;
      object.maxVertexCount = this._maxVertexCount;
      object.maxIndexCount = this._maxIndexCount;
      object.geometryInitialized = this._geometryInitialized;
      object.geometryCount = this._geometryCount;
      object.matricesTexture = this._matricesTexture.toJSON(meta);
      if (this._colorsTexture !== null) object.colorsTexture = this._colorsTexture.toJSON(meta);
      if (this.boundingSphere !== null) {
        object.boundingSphere = {
          center: object.boundingSphere.center.toArray(),
          radius: object.boundingSphere.radius
        };
      }
      if (this.boundingBox !== null) {
        object.boundingBox = {
          min: object.boundingBox.min.toArray(),
          max: object.boundingBox.max.toArray()
        };
      }
    }
    function serialize(library, element2) {
      if (library[element2.uuid] === void 0) {
        library[element2.uuid] = element2.toJSON(meta);
      }
      return element2.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          object.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          object.background = this.background.toJSON(meta).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        object.environment = this.environment.toJSON(meta).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      object.geometry = serialize(meta.geometries, this.geometry);
      const parameters = this.geometry.parameters;
      if (parameters !== void 0 && parameters.shapes !== void 0) {
        const shapes = parameters.shapes;
        if (Array.isArray(shapes)) {
          for (let i = 0, l = shapes.length; i < l; i++) {
            const shape = shapes[i];
            serialize(meta.shapes, shape);
          }
        } else {
          serialize(meta.shapes, shapes);
        }
      }
    }
    if (this.isSkinnedMesh) {
      object.bindMode = this.bindMode;
      object.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== void 0) {
        serialize(meta.skeletons, this.skeleton);
        object.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== void 0) {
      if (Array.isArray(this.material)) {
        const uuids = [];
        for (let i = 0, l = this.material.length; i < l; i++) {
          uuids.push(serialize(meta.materials, this.material[i]));
        }
        object.material = uuids;
      } else {
        object.material = serialize(meta.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      object.children = [];
      for (let i = 0; i < this.children.length; i++) {
        object.children.push(this.children[i].toJSON(meta).object);
      }
    }
    if (this.animations.length > 0) {
      object.animations = [];
      for (let i = 0; i < this.animations.length; i++) {
        const animation = this.animations[i];
        object.animations.push(serialize(meta.animations, animation));
      }
    }
    if (isRootObject) {
      const geometries = extractFromCache(meta.geometries);
      const materials = extractFromCache(meta.materials);
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const shapes = extractFromCache(meta.shapes);
      const skeletons = extractFromCache(meta.skeletons);
      const animations = extractFromCache(meta.animations);
      const nodes = extractFromCache(meta.nodes);
      if (geometries.length > 0) output2.geometries = geometries;
      if (materials.length > 0) output2.materials = materials;
      if (textures.length > 0) output2.textures = textures;
      if (images.length > 0) output2.images = images;
      if (shapes.length > 0) output2.shapes = shapes;
      if (skeletons.length > 0) output2.skeletons = skeletons;
      if (animations.length > 0) output2.animations = animations;
      if (nodes.length > 0) output2.nodes = nodes;
    }
    output2.object = object;
    return output2;
    function extractFromCache(cache2) {
      const values = [];
      for (const key in cache2) {
        const data = cache2[key];
        delete data.metadata;
        values.push(data);
      }
      return values;
    }
  }
  clone(recursive) {
    return new this.constructor().copy(this, recursive);
  }
  copy(source, recursive = true) {
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.rotation.order = source.rotation.order;
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.layers.mask = source.layers.mask;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.animations = source.animations.slice();
    this.userData = JSON.parse(JSON.stringify(source.userData));
    if (recursive === true) {
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        this.add(child.clone());
      }
    }
    return this;
  }
};
Object3D.DEFAULT_UP = new Vector32(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var _v0$1 = new Vector32();
var _v1$3 = new Vector32();
var _v2$2 = new Vector32();
var _v3$2 = new Vector32();
var _vab = new Vector32();
var _vac = new Vector32();
var _vbc = new Vector32();
var _vap = new Vector32();
var _vbp = new Vector32();
var _vcp = new Vector32();
var _v40 = new Vector4();
var _v41 = new Vector4();
var _v42 = new Vector4();
var Triangle = class _Triangle {
  constructor(a = new Vector32(), b = new Vector32(), c = new Vector32()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  static getNormal(a, b, c, target) {
    target.subVectors(c, b);
    _v0$1.subVectors(a, b);
    target.cross(_v0$1);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(point, a, b, c, target) {
    _v0$1.subVectors(c, a);
    _v1$3.subVectors(b, a);
    _v2$2.subVectors(point, a);
    const dot00 = _v0$1.dot(_v0$1);
    const dot01 = _v0$1.dot(_v1$3);
    const dot02 = _v0$1.dot(_v2$2);
    const dot11 = _v1$3.dot(_v1$3);
    const dot12 = _v1$3.dot(_v2$2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      target.set(0, 0, 0);
      return null;
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
  static containsPoint(point, a, b, c) {
    if (this.getBarycoord(point, a, b, c, _v3$2) === null) {
      return false;
    }
    return _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
  }
  static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
    if (this.getBarycoord(point, p1, p2, p3, _v3$2) === null) {
      target.x = 0;
      target.y = 0;
      if ("z" in target) target.z = 0;
      if ("w" in target) target.w = 0;
      return null;
    }
    target.setScalar(0);
    target.addScaledVector(v1, _v3$2.x);
    target.addScaledVector(v2, _v3$2.y);
    target.addScaledVector(v3, _v3$2.z);
    return target;
  }
  static getInterpolatedAttribute(attr, i1, i2, i3, barycoord, target) {
    _v40.setScalar(0);
    _v41.setScalar(0);
    _v42.setScalar(0);
    _v40.fromBufferAttribute(attr, i1);
    _v41.fromBufferAttribute(attr, i2);
    _v42.fromBufferAttribute(attr, i3);
    target.setScalar(0);
    target.addScaledVector(_v40, barycoord.x);
    target.addScaledVector(_v41, barycoord.y);
    target.addScaledVector(_v42, barycoord.z);
    return target;
  }
  static isFrontFacing(a, b, c, direction2) {
    _v0$1.subVectors(c, b);
    _v1$3.subVectors(a, b);
    return _v0$1.cross(_v1$3).dot(direction2) < 0 ? true : false;
  }
  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  setFromAttributeAndIndices(attribute2, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute2, i0);
    this.b.fromBufferAttribute(attribute2, i1);
    this.c.fromBufferAttribute(attribute2, i2);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  getArea() {
    _v0$1.subVectors(this.c, this.b);
    _v1$3.subVectors(this.a, this.b);
    return _v0$1.cross(_v1$3).length() * 0.5;
  }
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(target) {
    return _Triangle.getNormal(this.a, this.b, this.c, target);
  }
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(point, target) {
    return _Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  getInterpolation(point, v1, v2, v3, target) {
    return _Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
  }
  containsPoint(point) {
    return _Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  isFrontFacing(direction2) {
    return _Triangle.isFrontFacing(this.a, this.b, this.c, direction2);
  }
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  closestPointToPoint(p, target) {
    const a = this.a, b = this.b, c = this.c;
    let v, w;
    _vab.subVectors(b, a);
    _vac.subVectors(c, a);
    _vap.subVectors(p, a);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a);
    }
    _vbp.subVectors(p, b);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v = d1 / (d1 - d3);
      return target.copy(a).addScaledVector(_vab, v);
    }
    _vcp.subVectors(p, c);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w = d2 / (d2 - d6);
      return target.copy(a).addScaledVector(_vac, w);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c, b);
      w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b).addScaledVector(_vbc, w);
    }
    const denom = 1 / (va + vb + vc);
    v = vb * denom;
    w = vc * denom;
    return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
  }
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
};
var _colorKeywords = {
  "aliceblue": 15792383,
  "antiquewhite": 16444375,
  "aqua": 65535,
  "aquamarine": 8388564,
  "azure": 15794175,
  "beige": 16119260,
  "bisque": 16770244,
  "black": 0,
  "blanchedalmond": 16772045,
  "blue": 255,
  "blueviolet": 9055202,
  "brown": 10824234,
  "burlywood": 14596231,
  "cadetblue": 6266528,
  "chartreuse": 8388352,
  "chocolate": 13789470,
  "coral": 16744272,
  "cornflowerblue": 6591981,
  "cornsilk": 16775388,
  "crimson": 14423100,
  "cyan": 65535,
  "darkblue": 139,
  "darkcyan": 35723,
  "darkgoldenrod": 12092939,
  "darkgray": 11119017,
  "darkgreen": 25600,
  "darkgrey": 11119017,
  "darkkhaki": 12433259,
  "darkmagenta": 9109643,
  "darkolivegreen": 5597999,
  "darkorange": 16747520,
  "darkorchid": 10040012,
  "darkred": 9109504,
  "darksalmon": 15308410,
  "darkseagreen": 9419919,
  "darkslateblue": 4734347,
  "darkslategray": 3100495,
  "darkslategrey": 3100495,
  "darkturquoise": 52945,
  "darkviolet": 9699539,
  "deeppink": 16716947,
  "deepskyblue": 49151,
  "dimgray": 6908265,
  "dimgrey": 6908265,
  "dodgerblue": 2003199,
  "firebrick": 11674146,
  "floralwhite": 16775920,
  "forestgreen": 2263842,
  "fuchsia": 16711935,
  "gainsboro": 14474460,
  "ghostwhite": 16316671,
  "gold": 16766720,
  "goldenrod": 14329120,
  "gray": 8421504,
  "green": 32768,
  "greenyellow": 11403055,
  "grey": 8421504,
  "honeydew": 15794160,
  "hotpink": 16738740,
  "indianred": 13458524,
  "indigo": 4915330,
  "ivory": 16777200,
  "khaki": 15787660,
  "lavender": 15132410,
  "lavenderblush": 16773365,
  "lawngreen": 8190976,
  "lemonchiffon": 16775885,
  "lightblue": 11393254,
  "lightcoral": 15761536,
  "lightcyan": 14745599,
  "lightgoldenrodyellow": 16448210,
  "lightgray": 13882323,
  "lightgreen": 9498256,
  "lightgrey": 13882323,
  "lightpink": 16758465,
  "lightsalmon": 16752762,
  "lightseagreen": 2142890,
  "lightskyblue": 8900346,
  "lightslategray": 7833753,
  "lightslategrey": 7833753,
  "lightsteelblue": 11584734,
  "lightyellow": 16777184,
  "lime": 65280,
  "limegreen": 3329330,
  "linen": 16445670,
  "magenta": 16711935,
  "maroon": 8388608,
  "mediumaquamarine": 6737322,
  "mediumblue": 205,
  "mediumorchid": 12211667,
  "mediumpurple": 9662683,
  "mediumseagreen": 3978097,
  "mediumslateblue": 8087790,
  "mediumspringgreen": 64154,
  "mediumturquoise": 4772300,
  "mediumvioletred": 13047173,
  "midnightblue": 1644912,
  "mintcream": 16121850,
  "mistyrose": 16770273,
  "moccasin": 16770229,
  "navajowhite": 16768685,
  "navy": 128,
  "oldlace": 16643558,
  "olive": 8421376,
  "olivedrab": 7048739,
  "orange": 16753920,
  "orangered": 16729344,
  "orchid": 14315734,
  "palegoldenrod": 15657130,
  "palegreen": 10025880,
  "paleturquoise": 11529966,
  "palevioletred": 14381203,
  "papayawhip": 16773077,
  "peachpuff": 16767673,
  "peru": 13468991,
  "pink": 16761035,
  "plum": 14524637,
  "powderblue": 11591910,
  "purple": 8388736,
  "rebeccapurple": 6697881,
  "red": 16711680,
  "rosybrown": 12357519,
  "royalblue": 4286945,
  "saddlebrown": 9127187,
  "salmon": 16416882,
  "sandybrown": 16032864,
  "seagreen": 3050327,
  "seashell": 16774638,
  "sienna": 10506797,
  "silver": 12632256,
  "skyblue": 8900331,
  "slateblue": 6970061,
  "slategray": 7372944,
  "slategrey": 7372944,
  "snow": 16775930,
  "springgreen": 65407,
  "steelblue": 4620980,
  "tan": 13808780,
  "teal": 32896,
  "thistle": 14204888,
  "tomato": 16737095,
  "turquoise": 4251856,
  "violet": 15631086,
  "wheat": 16113331,
  "white": 16777215,
  "whitesmoke": 16119285,
  "yellow": 16776960,
  "yellowgreen": 10145074
};
var _hslA = { h: 0, s: 0, l: 0 };
var _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
  return p;
}
var Color2 = class {
  constructor(r, g, b) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(r, g, b);
  }
  set(r, g, b) {
    if (g === void 0 && b === void 0) {
      const value = r;
      if (value && value.isColor) {
        this.copy(value);
      } else if (typeof value === "number") {
        this.setHex(value);
      } else if (typeof value === "string") {
        this.setStyle(value);
      }
    } else {
      this.setRGB(r, g, b);
    }
    return this;
  }
  setScalar(scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
    return this;
  }
  setHex(hex, colorSpace = SRGBColorSpace) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
    this.r = r;
    this.g = g;
    this.b = b;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
    h = euclideanModulo(h, 1);
    s = clamp$1(s, 0, 1);
    l = clamp$1(l, 0, 1);
    if (s === 0) {
      this.r = this.g = this.b = l;
    } else {
      const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
      const q = 2 * l - p;
      this.r = hue2rgb(q, p, h + 1 / 3);
      this.g = hue2rgb(q, p, h);
      this.b = hue2rgb(q, p, h - 1 / 3);
    }
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setStyle(style, colorSpace = SRGBColorSpace) {
    function handleAlpha(string) {
      if (string === void 0) return;
      if (parseFloat(string) < 1) {
        console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
      }
    }
    let m;
    if (m = /^(\w+)\(([^\)]*)\)/.exec(style)) {
      let color2;
      const name = m[1];
      const components = m[2];
      switch (name) {
        case "rgb":
        case "rgba":
          if (color2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color2[4]);
            return this.setRGB(
              Math.min(255, parseInt(color2[1], 10)) / 255,
              Math.min(255, parseInt(color2[2], 10)) / 255,
              Math.min(255, parseInt(color2[3], 10)) / 255,
              colorSpace
            );
          }
          if (color2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color2[4]);
            return this.setRGB(
              Math.min(100, parseInt(color2[1], 10)) / 100,
              Math.min(100, parseInt(color2[2], 10)) / 100,
              Math.min(100, parseInt(color2[3], 10)) / 100,
              colorSpace
            );
          }
          break;
        case "hsl":
        case "hsla":
          if (color2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color2[4]);
            return this.setHSL(
              parseFloat(color2[1]) / 360,
              parseFloat(color2[2]) / 100,
              parseFloat(color2[3]) / 100,
              colorSpace
            );
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + style);
      }
    } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
      const hex = m[1];
      const size = hex.length;
      if (size === 3) {
        return this.setRGB(
          parseInt(hex.charAt(0), 16) / 15,
          parseInt(hex.charAt(1), 16) / 15,
          parseInt(hex.charAt(2), 16) / 15,
          colorSpace
        );
      } else if (size === 6) {
        return this.setHex(parseInt(hex, 16), colorSpace);
      } else {
        console.warn("THREE.Color: Invalid hex color " + style);
      }
    } else if (style && style.length > 0) {
      return this.setColorName(style, colorSpace);
    }
    return this;
  }
  setColorName(style, colorSpace = SRGBColorSpace) {
    const hex = _colorKeywords[style.toLowerCase()];
    if (hex !== void 0) {
      this.setHex(hex, colorSpace);
    } else {
      console.warn("THREE.Color: Unknown color " + style);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(color2) {
    this.r = color2.r;
    this.g = color2.g;
    this.b = color2.b;
    return this;
  }
  copySRGBToLinear(color2) {
    this.r = SRGBToLinear(color2.r);
    this.g = SRGBToLinear(color2.g);
    this.b = SRGBToLinear(color2.b);
    return this;
  }
  copyLinearToSRGB(color2) {
    this.r = LinearToSRGB(color2.r);
    this.g = LinearToSRGB(color2.g);
    this.b = LinearToSRGB(color2.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    return Math.round(clamp$1(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp$1(_color.g * 255, 0, 255)) * 256 + Math.round(clamp$1(_color.b * 255, 0, 255));
  }
  getHexString(colorSpace = SRGBColorSpace) {
    return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
  }
  getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    const max2 = Math.max(r, g, b);
    const min2 = Math.min(r, g, b);
    let hue2, saturation2;
    const lightness = (min2 + max2) / 2;
    if (min2 === max2) {
      hue2 = 0;
      saturation2 = 0;
    } else {
      const delta = max2 - min2;
      saturation2 = lightness <= 0.5 ? delta / (max2 + min2) : delta / (2 - max2 - min2);
      switch (max2) {
        case r:
          hue2 = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue2 = (b - r) / delta + 2;
          break;
        case b:
          hue2 = (r - g) / delta + 4;
          break;
      }
      hue2 /= 6;
    }
    target.h = hue2;
    target.s = saturation2;
    target.l = lightness;
    return target;
  }
  getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    target.r = _color.r;
    target.g = _color.g;
    target.b = _color.b;
    return target;
  }
  getStyle(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    if (colorSpace !== SRGBColorSpace) {
      return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
    }
    return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }
  offsetHSL(h, s, l) {
    this.getHSL(_hslA);
    return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
  }
  add(color2) {
    this.r += color2.r;
    this.g += color2.g;
    this.b += color2.b;
    return this;
  }
  addColors(color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  }
  addScalar(s) {
    this.r += s;
    this.g += s;
    this.b += s;
    return this;
  }
  sub(color2) {
    this.r = Math.max(0, this.r - color2.r);
    this.g = Math.max(0, this.g - color2.g);
    this.b = Math.max(0, this.b - color2.b);
    return this;
  }
  multiply(color2) {
    this.r *= color2.r;
    this.g *= color2.g;
    this.b *= color2.b;
    return this;
  }
  multiplyScalar(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }
  lerp(color2, alpha) {
    this.r += (color2.r - this.r) * alpha;
    this.g += (color2.g - this.g) * alpha;
    this.b += (color2.b - this.b) * alpha;
    return this;
  }
  lerpColors(color1, color2, alpha) {
    this.r = color1.r + (color2.r - color1.r) * alpha;
    this.g = color1.g + (color2.g - color1.g) * alpha;
    this.b = color1.b + (color2.b - color1.b) * alpha;
    return this;
  }
  lerpHSL(color2, alpha) {
    this.getHSL(_hslA);
    color2.getHSL(_hslB);
    const h = lerp(_hslA.h, _hslB.h, alpha);
    const s = lerp(_hslA.s, _hslB.s, alpha);
    const l = lerp(_hslA.l, _hslB.l, alpha);
    this.setHSL(h, s, l);
    return this;
  }
  setFromVector3(v) {
    this.r = v.x;
    this.g = v.y;
    this.b = v.z;
    return this;
  }
  applyMatrix3(m) {
    const r = this.r, g = this.g, b = this.b;
    const e = m.elements;
    this.r = e[0] * r + e[3] * g + e[6] * b;
    this.g = e[1] * r + e[4] * g + e[7] * b;
    this.b = e[2] * r + e[5] * g + e[8] * b;
    return this;
  }
  equals(c) {
    return c.r === this.r && c.g === this.g && c.b === this.b;
  }
  fromArray(array, offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
  fromBufferAttribute(attribute2, index) {
    this.r = attribute2.getX(index);
    this.g = attribute2.getY(index);
    this.b = attribute2.getZ(index);
    return this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
};
var _color = new Color2();
Color2.NAMES = _colorKeywords;
var _materialId = 0;
var Material = class extends EventDispatcher {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(_value) {
  }
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", { value: _materialId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.blending = NormalBlending;
    this.side = FrontSide;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = SrcAlphaFactor;
    this.blendDst = OneMinusSrcAlphaFactor;
    this.blendEquation = AddEquation;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new Color2(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = LessEqualDepth;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = AlwaysStencilFunc;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = KeepStencilOp;
    this.stencilZFail = KeepStencilOp;
    this.stencilZPass = KeepStencilOp;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(value) {
    if (this._alphaTest > 0 !== value > 0) {
      this.version++;
    }
    this._alphaTest = value;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(values) {
    if (values === void 0) return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        console.warn(`THREE.Material: parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        console.warn(`THREE.Material: '${key}' is not a property of THREE.${this.type}.`);
        continue;
      }
      if (currentValue && currentValue.isColor) {
        currentValue.set(newValue);
      } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (isRootObject) {
      meta = {
        textures: {},
        images: {}
      };
    }
    const data = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "") data.name = this.name;
    if (this.color && this.color.isColor) data.color = this.color.getHex();
    if (this.roughness !== void 0) data.roughness = this.roughness;
    if (this.metalness !== void 0) data.metalness = this.metalness;
    if (this.sheen !== void 0) data.sheen = this.sheen;
    if (this.sheenColor && this.sheenColor.isColor) data.sheenColor = this.sheenColor.getHex();
    if (this.sheenRoughness !== void 0) data.sheenRoughness = this.sheenRoughness;
    if (this.emissive && this.emissive.isColor) data.emissive = this.emissive.getHex();
    if (this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1) data.emissiveIntensity = this.emissiveIntensity;
    if (this.specular && this.specular.isColor) data.specular = this.specular.getHex();
    if (this.specularIntensity !== void 0) data.specularIntensity = this.specularIntensity;
    if (this.specularColor && this.specularColor.isColor) data.specularColor = this.specularColor.getHex();
    if (this.shininess !== void 0) data.shininess = this.shininess;
    if (this.clearcoat !== void 0) data.clearcoat = this.clearcoat;
    if (this.clearcoatRoughness !== void 0) data.clearcoatRoughness = this.clearcoatRoughness;
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
      data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.dispersion !== void 0) data.dispersion = this.dispersion;
    if (this.iridescence !== void 0) data.iridescence = this.iridescence;
    if (this.iridescenceIOR !== void 0) data.iridescenceIOR = this.iridescenceIOR;
    if (this.iridescenceThicknessRange !== void 0) data.iridescenceThicknessRange = this.iridescenceThicknessRange;
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
    }
    if (this.anisotropy !== void 0) data.anisotropy = this.anisotropy;
    if (this.anisotropyRotation !== void 0) data.anisotropyRotation = this.anisotropyRotation;
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      data.anisotropyMap = this.anisotropyMap.toJSON(meta).uuid;
    }
    if (this.map && this.map.isTexture) data.map = this.map.toJSON(meta).uuid;
    if (this.matcap && this.matcap.isTexture) data.matcap = this.matcap.toJSON(meta).uuid;
    if (this.alphaMap && this.alphaMap.isTexture) data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap && this.lightMap.isTexture) {
      data.lightMap = this.lightMap.toJSON(meta).uuid;
      data.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      data.aoMap = this.aoMap.toJSON(meta).uuid;
      data.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalMapType = this.normalMapType;
      data.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap && this.metalnessMap.isTexture) data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap && this.emissiveMap.isTexture) data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap && this.specularMap.isTexture) data.specularMap = this.specularMap.toJSON(meta).uuid;
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
    if (this.specularColorMap && this.specularColorMap.isTexture) data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
    if (this.envMap && this.envMap.isTexture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      if (this.combine !== void 0) data.combine = this.combine;
    }
    if (this.envMapRotation !== void 0) data.envMapRotation = this.envMapRotation.toArray();
    if (this.envMapIntensity !== void 0) data.envMapIntensity = this.envMapIntensity;
    if (this.reflectivity !== void 0) data.reflectivity = this.reflectivity;
    if (this.refractionRatio !== void 0) data.refractionRatio = this.refractionRatio;
    if (this.gradientMap && this.gradientMap.isTexture) {
      data.gradientMap = this.gradientMap.toJSON(meta).uuid;
    }
    if (this.transmission !== void 0) data.transmission = this.transmission;
    if (this.transmissionMap && this.transmissionMap.isTexture) data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
    if (this.thickness !== void 0) data.thickness = this.thickness;
    if (this.thicknessMap && this.thicknessMap.isTexture) data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
    if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity) data.attenuationDistance = this.attenuationDistance;
    if (this.attenuationColor !== void 0) data.attenuationColor = this.attenuationColor.getHex();
    if (this.size !== void 0) data.size = this.size;
    if (this.shadowSide !== null) data.shadowSide = this.shadowSide;
    if (this.sizeAttenuation !== void 0) data.sizeAttenuation = this.sizeAttenuation;
    if (this.blending !== NormalBlending) data.blending = this.blending;
    if (this.side !== FrontSide) data.side = this.side;
    if (this.vertexColors === true) data.vertexColors = true;
    if (this.opacity < 1) data.opacity = this.opacity;
    if (this.transparent === true) data.transparent = true;
    if (this.blendSrc !== SrcAlphaFactor) data.blendSrc = this.blendSrc;
    if (this.blendDst !== OneMinusSrcAlphaFactor) data.blendDst = this.blendDst;
    if (this.blendEquation !== AddEquation) data.blendEquation = this.blendEquation;
    if (this.blendSrcAlpha !== null) data.blendSrcAlpha = this.blendSrcAlpha;
    if (this.blendDstAlpha !== null) data.blendDstAlpha = this.blendDstAlpha;
    if (this.blendEquationAlpha !== null) data.blendEquationAlpha = this.blendEquationAlpha;
    if (this.blendColor && this.blendColor.isColor) data.blendColor = this.blendColor.getHex();
    if (this.blendAlpha !== 0) data.blendAlpha = this.blendAlpha;
    if (this.depthFunc !== LessEqualDepth) data.depthFunc = this.depthFunc;
    if (this.depthTest === false) data.depthTest = this.depthTest;
    if (this.depthWrite === false) data.depthWrite = this.depthWrite;
    if (this.colorWrite === false) data.colorWrite = this.colorWrite;
    if (this.stencilWriteMask !== 255) data.stencilWriteMask = this.stencilWriteMask;
    if (this.stencilFunc !== AlwaysStencilFunc) data.stencilFunc = this.stencilFunc;
    if (this.stencilRef !== 0) data.stencilRef = this.stencilRef;
    if (this.stencilFuncMask !== 255) data.stencilFuncMask = this.stencilFuncMask;
    if (this.stencilFail !== KeepStencilOp) data.stencilFail = this.stencilFail;
    if (this.stencilZFail !== KeepStencilOp) data.stencilZFail = this.stencilZFail;
    if (this.stencilZPass !== KeepStencilOp) data.stencilZPass = this.stencilZPass;
    if (this.stencilWrite === true) data.stencilWrite = this.stencilWrite;
    if (this.rotation !== void 0 && this.rotation !== 0) data.rotation = this.rotation;
    if (this.polygonOffset === true) data.polygonOffset = true;
    if (this.polygonOffsetFactor !== 0) data.polygonOffsetFactor = this.polygonOffsetFactor;
    if (this.polygonOffsetUnits !== 0) data.polygonOffsetUnits = this.polygonOffsetUnits;
    if (this.linewidth !== void 0 && this.linewidth !== 1) data.linewidth = this.linewidth;
    if (this.dashSize !== void 0) data.dashSize = this.dashSize;
    if (this.gapSize !== void 0) data.gapSize = this.gapSize;
    if (this.scale !== void 0) data.scale = this.scale;
    if (this.dithering === true) data.dithering = true;
    if (this.alphaTest > 0) data.alphaTest = this.alphaTest;
    if (this.alphaHash === true) data.alphaHash = true;
    if (this.alphaToCoverage === true) data.alphaToCoverage = true;
    if (this.premultipliedAlpha === true) data.premultipliedAlpha = true;
    if (this.forceSinglePass === true) data.forceSinglePass = true;
    if (this.wireframe === true) data.wireframe = true;
    if (this.wireframeLinewidth > 1) data.wireframeLinewidth = this.wireframeLinewidth;
    if (this.wireframeLinecap !== "round") data.wireframeLinecap = this.wireframeLinecap;
    if (this.wireframeLinejoin !== "round") data.wireframeLinejoin = this.wireframeLinejoin;
    if (this.flatShading === true) data.flatShading = true;
    if (this.visible === false) data.visible = false;
    if (this.toneMapped === false) data.toneMapped = false;
    if (this.fog === false) data.fog = false;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    function extractFromCache(cache2) {
      const values = [];
      for (const key in cache2) {
        const data2 = cache2[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRootObject) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.blending = source.blending;
    this.side = source.side;
    this.vertexColors = source.vertexColors;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.blendColor.copy(source.blendColor);
    this.blendAlpha = source.blendAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.stencilWriteMask = source.stencilWriteMask;
    this.stencilFunc = source.stencilFunc;
    this.stencilRef = source.stencilRef;
    this.stencilFuncMask = source.stencilFuncMask;
    this.stencilFail = source.stencilFail;
    this.stencilZFail = source.stencilZFail;
    this.stencilZPass = source.stencilZPass;
    this.stencilWrite = source.stencilWrite;
    const srcPlanes = source.clippingPlanes;
    let dstPlanes = null;
    if (srcPlanes !== null) {
      const n = srcPlanes.length;
      dstPlanes = new Array(n);
      for (let i = 0; i !== n; ++i) {
        dstPlanes[i] = srcPlanes[i].clone();
      }
    }
    this.clippingPlanes = dstPlanes;
    this.clipIntersection = source.clipIntersection;
    this.clipShadows = source.clipShadows;
    this.shadowSide = source.shadowSide;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.dithering = source.dithering;
    this.alphaTest = source.alphaTest;
    this.alphaHash = source.alphaHash;
    this.alphaToCoverage = source.alphaToCoverage;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.forceSinglePass = source.forceSinglePass;
    this.visible = source.visible;
    this.toneMapped = source.toneMapped;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
};
var MeshBasicMaterial = class extends Material {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshBasicMaterial = true;
    this.color = new Color2(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.fog = source.fog;
    return this;
  }
};
var _tables = _generateTables();
function _generateTables() {
  const buffer2 = new ArrayBuffer(4);
  const floatView = new Float32Array(buffer2);
  const uint32View = new Uint32Array(buffer2);
  const baseTable = new Uint32Array(512);
  const shiftTable = new Uint32Array(512);
  for (let i = 0; i < 256; ++i) {
    const e = i - 127;
    if (e < -27) {
      baseTable[i] = 0;
      baseTable[i | 256] = 32768;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else if (e < -14) {
      baseTable[i] = 1024 >> -e - 14;
      baseTable[i | 256] = 1024 >> -e - 14 | 32768;
      shiftTable[i] = -e - 1;
      shiftTable[i | 256] = -e - 1;
    } else if (e <= 15) {
      baseTable[i] = e + 15 << 10;
      baseTable[i | 256] = e + 15 << 10 | 32768;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    } else if (e < 128) {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    }
  }
  const mantissaTable = new Uint32Array(2048);
  const exponentTable = new Uint32Array(64);
  const offsetTable = new Uint32Array(64);
  for (let i = 1; i < 1024; ++i) {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      m <<= 1;
      e -= 8388608;
    }
    m &= ~8388608;
    e += 947912704;
    mantissaTable[i] = m | e;
  }
  for (let i = 1024; i < 2048; ++i) {
    mantissaTable[i] = 939524096 + (i - 1024 << 13);
  }
  for (let i = 1; i < 31; ++i) {
    exponentTable[i] = i << 23;
  }
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  for (let i = 33; i < 63; ++i) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  exponentTable[63] = 3347054592;
  for (let i = 1; i < 64; ++i) {
    if (i !== 32) {
      offsetTable[i] = 1024;
    }
  }
  return {
    floatView,
    uint32View,
    baseTable,
    shiftTable,
    mantissaTable,
    exponentTable,
    offsetTable
  };
}
var _vector$9 = new Vector32();
var _vector2$1 = new Vector22();
var BufferAttribute = class {
  constructor(array, itemSize, normalized = false) {
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.usage = StaticDrawUsage;
    this.updateRanges = [];
    this.gpuType = FloatType;
    this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    this.gpuType = source.gpuType;
    return this;
  }
  copyAt(index1, attribute2, index2) {
    index1 *= this.itemSize;
    index2 *= attribute2.itemSize;
    for (let i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute2.array[index2 + i];
    }
    return this;
  }
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  applyMatrix3(m) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector2$1.fromBufferAttribute(this, i);
        _vector2$1.applyMatrix3(m);
        this.setXY(i, _vector2$1.x, _vector2$1.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyMatrix3(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
    }
    return this;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.applyMatrix4(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.applyNormalMatrix(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.transformDirection(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  getComponent(index, component) {
    let value = this.array[index * this.itemSize + component];
    if (this.normalized) value = denormalize(value, this.array);
    return value;
  }
  setComponent(index, component, value) {
    if (this.normalized) value = normalize$1(value, this.array);
    this.array[index * this.itemSize + component] = value;
    return this;
  }
  getX(index) {
    let x = this.array[index * this.itemSize];
    if (this.normalized) x = denormalize(x, this.array);
    return x;
  }
  setX(index, x) {
    if (this.normalized) x = normalize$1(x, this.array);
    this.array[index * this.itemSize] = x;
    return this;
  }
  getY(index) {
    let y = this.array[index * this.itemSize + 1];
    if (this.normalized) y = denormalize(y, this.array);
    return y;
  }
  setY(index, y) {
    if (this.normalized) y = normalize$1(y, this.array);
    this.array[index * this.itemSize + 1] = y;
    return this;
  }
  getZ(index) {
    let z = this.array[index * this.itemSize + 2];
    if (this.normalized) z = denormalize(z, this.array);
    return z;
  }
  setZ(index, z) {
    if (this.normalized) z = normalize$1(z, this.array);
    this.array[index * this.itemSize + 2] = z;
    return this;
  }
  getW(index) {
    let w = this.array[index * this.itemSize + 3];
    if (this.normalized) w = denormalize(w, this.array);
    return w;
  }
  setW(index, w) {
    if (this.normalized) w = normalize$1(w, this.array);
    this.array[index * this.itemSize + 3] = w;
    return this;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
      z = normalize$1(z, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
      z = normalize$1(z, this.array);
      w = normalize$1(w, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "") data.name = this.name;
    if (this.usage !== StaticDrawUsage) data.usage = this.usage;
    return data;
  }
};
var Uint16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
var Uint32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
};
var Float32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
};
var _id$9 = 0;
var _m1$1 = new Matrix4();
var _obj = new Object3D();
var _offset = new Vector32();
var _box$2 = new Box3();
var _boxMorphTargets = new Box3();
var _vector$8 = new Vector32();
var BufferGeometry = class _BufferGeometry extends EventDispatcher {
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", { value: _id$9++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.indirect = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32$1(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  setIndirect(indirect) {
    this.indirect = indirect;
    return this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  setAttribute(name, attribute2) {
    this.attributes[name] = attribute2;
    return this;
  }
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal2 = this.attributes.normal;
    if (normal2 !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal2.applyNormalMatrix(normalMatrix);
      normal2.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(q) {
    _m1$1.makeRotationFromQuaternion(q);
    this.applyMatrix4(_m1$1);
    return this;
  }
  rotateX(angle) {
    _m1$1.makeRotationX(angle);
    this.applyMatrix4(_m1$1);
    return this;
  }
  rotateY(angle) {
    _m1$1.makeRotationY(angle);
    this.applyMatrix4(_m1$1);
    return this;
  }
  rotateZ(angle) {
    _m1$1.makeRotationZ(angle);
    this.applyMatrix4(_m1$1);
    return this;
  }
  translate(x, y, z) {
    _m1$1.makeTranslation(x, y, z);
    this.applyMatrix4(_m1$1);
    return this;
  }
  scale(x, y, z) {
    _m1$1.makeScale(x, y, z);
    this.applyMatrix4(_m1$1);
    return this;
  }
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  setFromPoints(points) {
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute === void 0) {
      const position = [];
      for (let i = 0, l = points.length; i < l; i++) {
        const point = points[i];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
    } else {
      for (let i = 0, l = positionAttribute.count; i < l; i++) {
        const point = points[i];
        positionAttribute.setXYZ(i, point.x, point.y, point.z || 0);
      }
      if (points.length > positionAttribute.count) {
        console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
      }
      positionAttribute.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
      this.boundingBox.set(
        new Vector32(-Infinity, -Infinity, -Infinity),
        new Vector32(Infinity, Infinity, Infinity)
      );
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _box$2.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(this.boundingBox.min, _box$2.min);
            this.boundingBox.expandByPoint(_vector$8);
            _vector$8.addVectors(this.boundingBox.max, _box$2.max);
            this.boundingBox.expandByPoint(_vector$8);
          } else {
            this.boundingBox.expandByPoint(_box$2.min);
            this.boundingBox.expandByPoint(_box$2.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
      this.boundingSphere.set(new Vector32(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box$2.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(_box$2.min, _boxMorphTargets.min);
            _box$2.expandByPoint(_vector$8);
            _vector$8.addVectors(_box$2.max, _boxMorphTargets.max);
            _box$2.expandByPoint(_vector$8);
          } else {
            _box$2.expandByPoint(_boxMorphTargets.min);
            _box$2.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box$2.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = position.count; i < il; i++) {
        _vector$8.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
      }
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
            _vector$8.fromBufferAttribute(morphAttribute, j);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j);
              _vector$8.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const positionAttribute = attributes.position;
    const normalAttribute = attributes.normal;
    const uvAttribute = attributes.uv;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * positionAttribute.count), 4));
    }
    const tangentAttribute = this.getAttribute("tangent");
    const tan1 = [], tan2 = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      tan1[i] = new Vector32();
      tan2[i] = new Vector32();
    }
    const vA = new Vector32(), vB = new Vector32(), vC = new Vector32(), uvA = new Vector22(), uvB = new Vector22(), uvC = new Vector22(), sdir = new Vector32(), tdir = new Vector32();
    function handleTriangle(a, b, c) {
      vA.fromBufferAttribute(positionAttribute, a);
      vB.fromBufferAttribute(positionAttribute, b);
      vC.fromBufferAttribute(positionAttribute, c);
      uvA.fromBufferAttribute(uvAttribute, a);
      uvB.fromBufferAttribute(uvAttribute, b);
      uvC.fromBufferAttribute(uvAttribute, c);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r)) return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
      tan1[a].add(sdir);
      tan1[b].add(sdir);
      tan1[c].add(sdir);
      tan2[a].add(tdir);
      tan2[b].add(tdir);
      tan2[c].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: index.count
      }];
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleTriangle(
          index.getX(j + 0),
          index.getX(j + 1),
          index.getX(j + 2)
        );
      }
    }
    const tmp2 = new Vector32(), tmp22 = new Vector32();
    const n = new Vector32(), n2 = new Vector32();
    function handleVertex(v) {
      n.fromBufferAttribute(normalAttribute, v);
      n2.copy(n);
      const t = tan1[v];
      tmp2.copy(t);
      tmp2.sub(n.multiplyScalar(n.dot(t))).normalize();
      tmp22.crossVectors(n2, t);
      const test = tmp22.dot(tan2[v]);
      const w = test < 0 ? -1 : 1;
      tangentAttribute.setXYZW(v, tmp2.x, tmp2.y, tmp2.z, w);
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleVertex(index.getX(j + 0));
        handleVertex(index.getX(j + 1));
        handleVertex(index.getX(j + 2));
      }
    }
  }
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i = 0, il = normalAttribute.count; i < il; i++) {
          normalAttribute.setXYZ(i, 0, 0, 0);
        }
      }
      const pA = new Vector32(), pB = new Vector32(), pC = new Vector32();
      const nA = new Vector32(), nB = new Vector32(), nC = new Vector32();
      const cb = new Vector32(), ab = new Vector32();
      if (index) {
        for (let i = 0, il = index.count; i < il; i += 3) {
          const vA = index.getX(i + 0);
          const vB = index.getX(i + 1);
          const vC = index.getX(i + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
          pA.fromBufferAttribute(positionAttribute, i + 0);
          pB.fromBufferAttribute(positionAttribute, i + 1);
          pC.fromBufferAttribute(positionAttribute, i + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i = 0, il = normals.count; i < il; i++) {
      _vector$8.fromBufferAttribute(normals, i);
      _vector$8.normalize();
      normals.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
  }
  toNonIndexed() {
    function convertBufferAttribute(attribute2, indices2) {
      const array = attribute2.array;
      const itemSize = attribute2.itemSize;
      const normalized = attribute2.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i = 0, l = indices2.length; i < l; i++) {
        if (attribute2.isInterleavedBufferAttribute) {
          index = indices2[i] * attribute2.data.stride + attribute2.offset;
        } else {
          index = indices2[i] * itemSize;
        }
        for (let j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new _BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute2 = attributes[name];
      const newAttribute = convertBufferAttribute(attribute2, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, il = morphAttribute.length; i < il; i++) {
        const attribute2 = morphAttribute[i];
        const newAttribute = convertBufferAttribute(attribute2, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "") data.name = this.name;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    if (this.parameters !== void 0) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0) data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute2 = attributes[key];
      data.data.attributes[key] = attribute2.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i = 0, il = attributeArray.length; i < il; i++) {
        const attribute2 = attributeArray[i];
        array.push(attribute2.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = {
        center: boundingSphere.center.toArray(),
        radius: boundingSphere.radius
      };
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone(data));
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute2 = attributes[name];
      this.setAttribute(name, attribute2.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, l = morphAttribute.length; i < l; i++) {
        array.push(morphAttribute[i].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var _inverseMatrix$3 = new Matrix4();
var _ray$3 = new Ray();
var _sphere$6 = new Sphere();
var _sphereHitAt = new Vector32();
var _vA$1 = new Vector32();
var _vB$1 = new Vector32();
var _vC$1 = new Vector32();
var _tempA = new Vector32();
var _morphA = new Vector32();
var _intersectionPoint = new Vector32();
var _intersectionPointWorld = new Vector32();
var Mesh2 = class extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
    super();
    this.isMesh = true;
    this.type = "Mesh";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.morphTargetInfluences !== void 0) {
      this.morphTargetInfluences = source.morphTargetInfluences.slice();
    }
    if (source.morphTargetDictionary !== void 0) {
      this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
    }
    this.material = Array.isArray(source.material) ? source.material.slice() : source.material;
    this.geometry = source.geometry;
    return this;
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    const morphAttributes = geometry.morphAttributes;
    const keys = Object.keys(morphAttributes);
    if (keys.length > 0) {
      const morphAttribute = morphAttributes[keys[0]];
      if (morphAttribute !== void 0) {
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
          const name = morphAttribute[m].name || String(m);
          this.morphTargetInfluences.push(0);
          this.morphTargetDictionary[name] = m;
        }
      }
    }
  }
  getVertexPosition(index, target) {
    const geometry = this.geometry;
    const position = geometry.attributes.position;
    const morphPosition = geometry.morphAttributes.position;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    target.fromBufferAttribute(position, index);
    const morphInfluences = this.morphTargetInfluences;
    if (morphPosition && morphInfluences) {
      _morphA.set(0, 0, 0);
      for (let i = 0, il = morphPosition.length; i < il; i++) {
        const influence = morphInfluences[i];
        const morphAttribute = morphPosition[i];
        if (influence === 0) continue;
        _tempA.fromBufferAttribute(morphAttribute, index);
        if (morphTargetsRelative) {
          _morphA.addScaledVector(_tempA, influence);
        } else {
          _morphA.addScaledVector(_tempA.sub(target), influence);
        }
      }
      target.add(_morphA);
    }
    return target;
  }
  raycast(raycaster, intersects2) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === void 0) return;
    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    _sphere$6.copy(geometry.boundingSphere);
    _sphere$6.applyMatrix4(matrixWorld);
    _ray$3.copy(raycaster.ray).recast(raycaster.near);
    if (_sphere$6.containsPoint(_ray$3.origin) === false) {
      if (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null) return;
      if (_ray$3.origin.distanceToSquared(_sphereHitAt) > (raycaster.far - raycaster.near) ** 2) return;
    }
    _inverseMatrix$3.copy(matrixWorld).invert();
    _ray$3.copy(raycaster.ray).applyMatrix4(_inverseMatrix$3);
    if (geometry.boundingBox !== null) {
      if (_ray$3.intersectsBox(geometry.boundingBox) === false) return;
    }
    this._computeIntersections(raycaster, intersects2, _ray$3);
  }
  _computeIntersections(raycaster, intersects2, rayLocalSpace) {
    let intersection;
    const geometry = this.geometry;
    const material = this.material;
    const index = geometry.index;
    const position = geometry.attributes.position;
    const uv2 = geometry.attributes.uv;
    const uv1 = geometry.attributes.uv1;
    const normal2 = geometry.attributes.normal;
    const groups = geometry.groups;
    const drawRange = geometry.drawRange;
    if (index !== null) {
      if (Array.isArray(material)) {
        for (let i = 0, il = groups.length; i < il; i++) {
          const group = groups[i];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j = start, jl = end; j < jl; j += 3) {
            const a = index.getX(j);
            const b = index.getX(j + 1);
            const c = index.getX(j + 2);
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv2, uv1, normal2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(j / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects2.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i += 3) {
          const a = index.getX(i);
          const b = index.getX(i + 1);
          const c = index.getX(i + 2);
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv2, uv1, normal2, a, b, c);
          if (intersection) {
            intersection.faceIndex = Math.floor(i / 3);
            intersects2.push(intersection);
          }
        }
      }
    } else if (position !== void 0) {
      if (Array.isArray(material)) {
        for (let i = 0, il = groups.length; i < il; i++) {
          const group = groups[i];
          const groupMaterial = material[group.materialIndex];
          const start = Math.max(group.start, drawRange.start);
          const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
          for (let j = start, jl = end; j < jl; j += 3) {
            const a = j;
            const b = j + 1;
            const c = j + 2;
            intersection = checkGeometryIntersection(this, groupMaterial, raycaster, rayLocalSpace, uv2, uv1, normal2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(j / 3);
              intersection.face.materialIndex = group.materialIndex;
              intersects2.push(intersection);
            }
          }
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(position.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i += 3) {
          const a = i;
          const b = i + 1;
          const c = i + 2;
          intersection = checkGeometryIntersection(this, material, raycaster, rayLocalSpace, uv2, uv1, normal2, a, b, c);
          if (intersection) {
            intersection.faceIndex = Math.floor(i / 3);
            intersects2.push(intersection);
          }
        }
      }
    }
  }
};
function checkIntersection$1(object, material, raycaster, ray, pA, pB, pC, point) {
  let intersect;
  if (material.side === BackSide) {
    intersect = ray.intersectTriangle(pC, pB, pA, true, point);
  } else {
    intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
  }
  if (intersect === null) return null;
  _intersectionPointWorld.copy(point);
  _intersectionPointWorld.applyMatrix4(object.matrixWorld);
  const distance2 = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
  if (distance2 < raycaster.near || distance2 > raycaster.far) return null;
  return {
    distance: distance2,
    point: _intersectionPointWorld.clone(),
    object
  };
}
function checkGeometryIntersection(object, material, raycaster, ray, uv2, uv1, normal2, a, b, c) {
  object.getVertexPosition(a, _vA$1);
  object.getVertexPosition(b, _vB$1);
  object.getVertexPosition(c, _vC$1);
  const intersection = checkIntersection$1(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
  if (intersection) {
    const barycoord = new Vector32();
    Triangle.getBarycoord(_intersectionPoint, _vA$1, _vB$1, _vC$1, barycoord);
    if (uv2) {
      intersection.uv = Triangle.getInterpolatedAttribute(uv2, a, b, c, barycoord, new Vector22());
    }
    if (uv1) {
      intersection.uv1 = Triangle.getInterpolatedAttribute(uv1, a, b, c, barycoord, new Vector22());
    }
    if (normal2) {
      intersection.normal = Triangle.getInterpolatedAttribute(normal2, a, b, c, barycoord, new Vector32());
      if (intersection.normal.dot(ray.direction) > 0) {
        intersection.normal.multiplyScalar(-1);
      }
    }
    const face = {
      a,
      b,
      c,
      normal: new Vector32(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
    intersection.face = face;
    intersection.barycoord = barycoord;
  }
  return intersection;
}
var BoxGeometry = class _BoxGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, depth2 = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth: depth2,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth2, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth2, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth2, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth2, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth2, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth2, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u, v, w, udir, vdir, width2, height2, depth3, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth3 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector32();
      for (let iy = 0; iy < gridY1; iy++) {
        const y = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x = ix * segmentWidth - widthHalf;
          vector[u] = x * udir;
          vector[v] = y * vdir;
          vector[w] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u] = 0;
          vector[v] = 0;
          vector[w] = depth3 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
};
function cloneUniforms(src) {
  const dst = {};
  for (const u in src) {
    dst[u] = {};
    for (const p in src[u]) {
      const property2 = src[u][p];
      if (property2 && (property2.isColor || property2.isMatrix3 || property2.isMatrix4 || property2.isVector2 || property2.isVector3 || property2.isVector4 || property2.isTexture || property2.isQuaternion)) {
        if (property2.isRenderTargetTexture) {
          console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          dst[u][p] = null;
        } else {
          dst[u][p] = property2.clone();
        }
      } else if (Array.isArray(property2)) {
        dst[u][p] = property2.slice();
      } else {
        dst[u][p] = property2;
      }
    }
  }
  return dst;
}
function cloneUniformsGroups(src) {
  const dst = [];
  for (let u = 0; u < src.length; u++) {
    dst.push(src[u].clone());
  }
  return dst;
}
var default_vertex = (
  /* glsl */
  `
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
);
var default_fragment = (
  /* glsl */
  `
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`
);
var ShaderMaterial = class extends Material {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(parameters) {
    super();
    this.isShaderMaterial = true;
    this.defines = {};
    this.uniforms = {};
    this.uniformsGroups = [];
    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.forceSinglePass = true;
    this.extensions = {
      clipCullDistance: false,
      // set to use vertex shader clipping
      multiDraw: false
      // set to use vertex shader multi_draw / enable gl_DrawID
    };
    this.defaultAttributeValues = {
      "color": [1, 1, 1],
      "uv": [0, 0],
      "uv1": [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (parameters !== void 0) {
      this.setValues(parameters);
    }
  }
  copy(source) {
    super.copy(source);
    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;
    this.uniforms = cloneUniforms(source.uniforms);
    this.uniformsGroups = cloneUniformsGroups(source.uniformsGroups);
    this.defines = Object.assign({}, source.defines);
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.fog = source.fog;
    this.lights = source.lights;
    this.clipping = source.clipping;
    this.extensions = Object.assign({}, source.extensions);
    this.glslVersion = source.glslVersion;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.glslVersion = this.glslVersion;
    data.uniforms = {};
    for (const name in this.uniforms) {
      const uniform2 = this.uniforms[name];
      const value = uniform2.value;
      if (value && value.isTexture) {
        data.uniforms[name] = {
          type: "t",
          value: value.toJSON(meta).uuid
        };
      } else if (value && value.isColor) {
        data.uniforms[name] = {
          type: "c",
          value: value.getHex()
        };
      } else if (value && value.isVector2) {
        data.uniforms[name] = {
          type: "v2",
          value: value.toArray()
        };
      } else if (value && value.isVector3) {
        data.uniforms[name] = {
          type: "v3",
          value: value.toArray()
        };
      } else if (value && value.isVector4) {
        data.uniforms[name] = {
          type: "v4",
          value: value.toArray()
        };
      } else if (value && value.isMatrix3) {
        data.uniforms[name] = {
          type: "m3",
          value: value.toArray()
        };
      } else if (value && value.isMatrix4) {
        data.uniforms[name] = {
          type: "m4",
          value: value.toArray()
        };
      } else {
        data.uniforms[name] = {
          value
        };
      }
    }
    if (Object.keys(this.defines).length > 0) data.defines = this.defines;
    data.vertexShader = this.vertexShader;
    data.fragmentShader = this.fragmentShader;
    data.lights = this.lights;
    data.clipping = this.clipping;
    const extensions = {};
    for (const key in this.extensions) {
      if (this.extensions[key] === true) extensions[key] = true;
    }
    if (Object.keys(extensions).length > 0) data.extensions = extensions;
    return data;
  }
};
var Camera = class extends Object3D {
  constructor() {
    super();
    this.isCamera = true;
    this.type = "Camera";
    this.matrixWorldInverse = new Matrix4();
    this.projectionMatrix = new Matrix4();
    this.projectionMatrixInverse = new Matrix4();
    this.coordinateSystem = WebGLCoordinateSystem;
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixWorldInverse.copy(source.matrixWorldInverse);
    this.projectionMatrix.copy(source.projectionMatrix);
    this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
    this.coordinateSystem = source.coordinateSystem;
    return this;
  }
  getWorldDirection(target) {
    return super.getWorldDirection(target).negate();
  }
  updateMatrixWorld(force) {
    super.updateMatrixWorld(force);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(updateParents, updateChildren) {
    super.updateWorldMatrix(updateParents, updateChildren);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var _v3$1 = new Vector32();
var _minTarget = new Vector22();
var _maxTarget = new Vector22();
var PerspectiveCamera = class extends Camera {
  constructor(fov2 = 50, aspect2 = 1, near = 0.1, far = 2e3) {
    super();
    this.isPerspectiveCamera = true;
    this.type = "PerspectiveCamera";
    this.fov = fov2;
    this.zoom = 1;
    this.near = near;
    this.far = far;
    this.focus = 10;
    this.aspect = aspect2;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.fov = source.fov;
    this.zoom = source.zoom;
    this.near = source.near;
    this.far = source.far;
    this.focus = source.focus;
    this.aspect = source.aspect;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    this.filmGauge = source.filmGauge;
    this.filmOffset = source.filmOffset;
    return this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(focalLength) {
    const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
    this.fov = RAD2DEG * 2 * Math.atan(vExtentSlope);
    this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const vExtentSlope = Math.tan(DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / vExtentSlope;
  }
  getEffectiveFOV() {
    return RAD2DEG * 2 * Math.atan(
      Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(distance2, minTarget, maxTarget) {
    _v3$1.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    minTarget.set(_v3$1.x, _v3$1.y).multiplyScalar(-distance2 / _v3$1.z);
    _v3$1.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse);
    maxTarget.set(_v3$1.x, _v3$1.y).multiplyScalar(-distance2 / _v3$1.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(distance2, target) {
    this.getViewBounds(distance2, _minTarget, _maxTarget);
    return target.subVectors(_maxTarget, _minTarget);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    this.aspect = fullWidth / fullHeight;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const near = this.near;
    let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
    let height = 2 * top;
    let width = this.aspect * height;
    let left = -0.5 * width;
    const view = this.view;
    if (this.view !== null && this.view.enabled) {
      const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
      left += view.offsetX * width / fullWidth;
      top -= view.offsetY * height / fullHeight;
      width *= view.width / fullWidth;
      height *= view.height / fullHeight;
    }
    const skew = this.filmOffset;
    if (skew !== 0) left += near * skew / this.getFilmWidth();
    this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.fov = this.fov;
    data.object.zoom = this.zoom;
    data.object.near = this.near;
    data.object.far = this.far;
    data.object.focus = this.focus;
    data.object.aspect = this.aspect;
    if (this.view !== null) data.object.view = Object.assign({}, this.view);
    data.object.filmGauge = this.filmGauge;
    data.object.filmOffset = this.filmOffset;
    return data;
  }
};
var fov = -90;
var aspect = 1;
var CubeCamera = class extends Object3D {
  constructor(near, far, renderTarget) {
    super();
    this.type = "CubeCamera";
    this.renderTarget = renderTarget;
    this.coordinateSystem = null;
    this.activeMipmapLevel = 0;
    const cameraPX = new PerspectiveCamera(fov, aspect, near, far);
    cameraPX.layers = this.layers;
    this.add(cameraPX);
    const cameraNX = new PerspectiveCamera(fov, aspect, near, far);
    cameraNX.layers = this.layers;
    this.add(cameraNX);
    const cameraPY = new PerspectiveCamera(fov, aspect, near, far);
    cameraPY.layers = this.layers;
    this.add(cameraPY);
    const cameraNY = new PerspectiveCamera(fov, aspect, near, far);
    cameraNY.layers = this.layers;
    this.add(cameraNY);
    const cameraPZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraPZ.layers = this.layers;
    this.add(cameraPZ);
    const cameraNZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraNZ.layers = this.layers;
    this.add(cameraNZ);
  }
  updateCoordinateSystem() {
    const coordinateSystem = this.coordinateSystem;
    const cameras = this.children.concat();
    const [cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ] = cameras;
    for (const camera of cameras) this.remove(camera);
    if (coordinateSystem === WebGLCoordinateSystem) {
      cameraPX.up.set(0, 1, 0);
      cameraPX.lookAt(1, 0, 0);
      cameraNX.up.set(0, 1, 0);
      cameraNX.lookAt(-1, 0, 0);
      cameraPY.up.set(0, 0, -1);
      cameraPY.lookAt(0, 1, 0);
      cameraNY.up.set(0, 0, 1);
      cameraNY.lookAt(0, -1, 0);
      cameraPZ.up.set(0, 1, 0);
      cameraPZ.lookAt(0, 0, 1);
      cameraNZ.up.set(0, 1, 0);
      cameraNZ.lookAt(0, 0, -1);
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      cameraPX.up.set(0, -1, 0);
      cameraPX.lookAt(-1, 0, 0);
      cameraNX.up.set(0, -1, 0);
      cameraNX.lookAt(1, 0, 0);
      cameraPY.up.set(0, 0, 1);
      cameraPY.lookAt(0, 1, 0);
      cameraNY.up.set(0, 0, -1);
      cameraNY.lookAt(0, -1, 0);
      cameraPZ.up.set(0, -1, 0);
      cameraPZ.lookAt(0, 0, 1);
      cameraNZ.up.set(0, -1, 0);
      cameraNZ.lookAt(0, 0, -1);
    } else {
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + coordinateSystem);
    }
    for (const camera of cameras) {
      this.add(camera);
      camera.updateMatrixWorld();
    }
  }
  update(renderer, scene) {
    if (this.parent === null) this.updateMatrixWorld();
    const { renderTarget, activeMipmapLevel } = this;
    if (this.coordinateSystem !== renderer.coordinateSystem) {
      this.coordinateSystem = renderer.coordinateSystem;
      this.updateCoordinateSystem();
    }
    const [cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ] = this.children;
    const currentRenderTarget = renderer.getRenderTarget();
    const currentActiveCubeFace = renderer.getActiveCubeFace();
    const currentActiveMipmapLevel = renderer.getActiveMipmapLevel();
    const currentXrEnabled = renderer.xr.enabled;
    renderer.xr.enabled = false;
    const generateMipmaps = renderTarget.texture.generateMipmaps;
    renderTarget.texture.generateMipmaps = false;
    renderer.setRenderTarget(renderTarget, 0, activeMipmapLevel);
    renderer.render(scene, cameraPX);
    renderer.setRenderTarget(renderTarget, 1, activeMipmapLevel);
    renderer.render(scene, cameraNX);
    renderer.setRenderTarget(renderTarget, 2, activeMipmapLevel);
    renderer.render(scene, cameraPY);
    renderer.setRenderTarget(renderTarget, 3, activeMipmapLevel);
    renderer.render(scene, cameraNY);
    renderer.setRenderTarget(renderTarget, 4, activeMipmapLevel);
    renderer.render(scene, cameraPZ);
    renderTarget.texture.generateMipmaps = generateMipmaps;
    renderer.setRenderTarget(renderTarget, 5, activeMipmapLevel);
    renderer.render(scene, cameraNZ);
    renderer.setRenderTarget(currentRenderTarget, currentActiveCubeFace, currentActiveMipmapLevel);
    renderer.xr.enabled = currentXrEnabled;
    renderTarget.texture.needsPMREMUpdate = true;
  }
};
var CubeTexture = class extends Texture {
  constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy2, colorSpace) {
    images = images !== void 0 ? images : [];
    mapping = mapping !== void 0 ? mapping : CubeReflectionMapping;
    super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy2, colorSpace);
    this.isCubeTexture = true;
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
};
var WebGLCubeRenderTarget = class extends WebGLRenderTarget {
  constructor(size = 1, options = {}) {
    super(size, size, options);
    this.isWebGLCubeRenderTarget = true;
    const image = { width: size, height: size, depth: 1 };
    const images = [image, image, image, image, image, image];
    this.texture = new CubeTexture(images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
    this.texture.isRenderTargetTexture = true;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
  }
  fromEquirectangularTexture(renderer, texture2) {
    this.texture.type = texture2.type;
    this.texture.colorSpace = texture2.colorSpace;
    this.texture.generateMipmaps = texture2.generateMipmaps;
    this.texture.minFilter = texture2.minFilter;
    this.texture.magFilter = texture2.magFilter;
    const shader = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    };
    const geometry = new BoxGeometry(5, 5, 5);
    const material = new ShaderMaterial({
      name: "CubemapFromEquirect",
      uniforms: cloneUniforms(shader.uniforms),
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      side: BackSide,
      blending: NoBlending
    });
    material.uniforms.tEquirect.value = texture2;
    const mesh = new Mesh2(geometry, material);
    const currentMinFilter = texture2.minFilter;
    if (texture2.minFilter === LinearMipmapLinearFilter) texture2.minFilter = LinearFilter;
    const camera = new CubeCamera(1, 10, this);
    camera.update(renderer, mesh);
    texture2.minFilter = currentMinFilter;
    mesh.geometry.dispose();
    mesh.material.dispose();
    return this;
  }
  clear(renderer, color2, depth2, stencil) {
    const currentRenderTarget = renderer.getRenderTarget();
    for (let i = 0; i < 6; i++) {
      renderer.setRenderTarget(this, i);
      renderer.clear(color2, depth2, stencil);
    }
    renderer.setRenderTarget(currentRenderTarget);
  }
};
var Scene = class extends Object3D {
  constructor() {
    super();
    this.isScene = true;
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.backgroundBlurriness = 0;
    this.backgroundIntensity = 1;
    this.backgroundRotation = new Euler();
    this.environmentIntensity = 1;
    this.environmentRotation = new Euler();
    this.overrideMaterial = null;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.background !== null) this.background = source.background.clone();
    if (source.environment !== null) this.environment = source.environment.clone();
    if (source.fog !== null) this.fog = source.fog.clone();
    this.backgroundBlurriness = source.backgroundBlurriness;
    this.backgroundIntensity = source.backgroundIntensity;
    this.backgroundRotation.copy(source.backgroundRotation);
    this.environmentIntensity = source.environmentIntensity;
    this.environmentRotation.copy(source.environmentRotation);
    if (source.overrideMaterial !== null) this.overrideMaterial = source.overrideMaterial.clone();
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.fog !== null) data.object.fog = this.fog.toJSON();
    if (this.backgroundBlurriness > 0) data.object.backgroundBlurriness = this.backgroundBlurriness;
    if (this.backgroundIntensity !== 1) data.object.backgroundIntensity = this.backgroundIntensity;
    data.object.backgroundRotation = this.backgroundRotation.toArray();
    if (this.environmentIntensity !== 1) data.object.environmentIntensity = this.environmentIntensity;
    data.object.environmentRotation = this.environmentRotation.toArray();
    return data;
  }
};
var InterleavedBuffer = class {
  constructor(array, stride) {
    this.isInterleavedBuffer = true;
    this.array = array;
    this.stride = stride;
    this.count = array !== void 0 ? array.length / stride : 0;
    this.usage = StaticDrawUsage;
    this.updateRanges = [];
    this.version = 0;
    this.uuid = generateUUID();
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(source) {
    this.array = new source.array.constructor(source.array);
    this.count = source.count;
    this.stride = source.stride;
    this.usage = source.usage;
    return this;
  }
  copyAt(index1, attribute2, index2) {
    index1 *= this.stride;
    index2 *= attribute2.stride;
    for (let i = 0, l = this.stride; i < l; i++) {
      this.array[index1 + i] = attribute2.array[index2 + i];
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  clone(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    const array = new this.array.constructor(data.arrayBuffers[this.array.buffer._uuid]);
    const ib = new this.constructor(array, this.stride);
    ib.setUsage(this.usage);
    return ib;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  toJSON(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
};
var _vector$7 = new Vector32();
var InterleavedBufferAttribute = class _InterleavedBufferAttribute {
  constructor(interleavedBuffer, itemSize, offset, normalized = false) {
    this.isInterleavedBufferAttribute = true;
    this.name = "";
    this.data = interleavedBuffer;
    this.itemSize = itemSize;
    this.offset = offset;
    this.normalized = normalized;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(value) {
    this.data.needsUpdate = value;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.data.count; i < l; i++) {
      _vector$7.fromBufferAttribute(this, i);
      _vector$7.applyMatrix4(m);
      this.setXYZ(i, _vector$7.x, _vector$7.y, _vector$7.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$7.fromBufferAttribute(this, i);
      _vector$7.applyNormalMatrix(m);
      this.setXYZ(i, _vector$7.x, _vector$7.y, _vector$7.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$7.fromBufferAttribute(this, i);
      _vector$7.transformDirection(m);
      this.setXYZ(i, _vector$7.x, _vector$7.y, _vector$7.z);
    }
    return this;
  }
  getComponent(index, component) {
    let value = this.array[index * this.data.stride + this.offset + component];
    if (this.normalized) value = denormalize(value, this.array);
    return value;
  }
  setComponent(index, component, value) {
    if (this.normalized) value = normalize$1(value, this.array);
    this.data.array[index * this.data.stride + this.offset + component] = value;
    return this;
  }
  setX(index, x) {
    if (this.normalized) x = normalize$1(x, this.array);
    this.data.array[index * this.data.stride + this.offset] = x;
    return this;
  }
  setY(index, y) {
    if (this.normalized) y = normalize$1(y, this.array);
    this.data.array[index * this.data.stride + this.offset + 1] = y;
    return this;
  }
  setZ(index, z) {
    if (this.normalized) z = normalize$1(z, this.array);
    this.data.array[index * this.data.stride + this.offset + 2] = z;
    return this;
  }
  setW(index, w) {
    if (this.normalized) w = normalize$1(w, this.array);
    this.data.array[index * this.data.stride + this.offset + 3] = w;
    return this;
  }
  getX(index) {
    let x = this.data.array[index * this.data.stride + this.offset];
    if (this.normalized) x = denormalize(x, this.array);
    return x;
  }
  getY(index) {
    let y = this.data.array[index * this.data.stride + this.offset + 1];
    if (this.normalized) y = denormalize(y, this.array);
    return y;
  }
  getZ(index) {
    let z = this.data.array[index * this.data.stride + this.offset + 2];
    if (this.normalized) z = denormalize(z, this.array);
    return z;
  }
  getW(index) {
    let w = this.data.array[index * this.data.stride + this.offset + 3];
    if (this.normalized) w = denormalize(w, this.array);
    return w;
  }
  setXY(index, x, y) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
      z = normalize$1(z, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize$1(x, this.array);
      y = normalize$1(y, this.array);
      z = normalize$1(z, this.array);
      w = normalize$1(w, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    this.data.array[index + 3] = w;
    return this;
  }
  clone(data) {
    if (data === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return new BufferAttribute(new this.array.constructor(array), this.itemSize, this.normalized);
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.clone(data);
      }
      return new _InterleavedBufferAttribute(data.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
  }
  toJSON(data) {
    if (data === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array,
        normalized: this.normalized
      };
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.toJSON(data);
      }
      return {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
};
var SpriteMaterial = class extends Material {
  static get type() {
    return "SpriteMaterial";
  }
  constructor(parameters) {
    super();
    this.isSpriteMaterial = true;
    this.color = new Color2(16777215);
    this.map = null;
    this.alphaMap = null;
    this.rotation = 0;
    this.sizeAttenuation = true;
    this.transparent = true;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.rotation = source.rotation;
    this.sizeAttenuation = source.sizeAttenuation;
    this.fog = source.fog;
    return this;
  }
};
var _intersectPoint = new Vector32();
var _worldScale = new Vector32();
var _mvPosition = new Vector32();
var _alignedPosition = new Vector22();
var _rotatedPosition = new Vector22();
var _viewWorldMatrix = new Matrix4();
var _vA = new Vector32();
var _vB = new Vector32();
var _vC = new Vector32();
var _uvA = new Vector22();
var _uvB = new Vector22();
var _uvC = new Vector22();
var _v1$2 = new Vector32();
var _v2$1 = new Vector32();
var _basePosition = new Vector32();
var _skinIndex = new Vector4();
var _skinWeight = new Vector4();
var _vector3 = new Vector32();
var _matrix4 = new Matrix4();
var _vertex = new Vector32();
var _sphere$5 = new Sphere();
var _inverseMatrix$2 = new Matrix4();
var _ray$2 = new Ray();
var _offsetMatrix = new Matrix4();
var _identityMatrix = new Matrix4();
var InstancedBufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized, meshPerAttribute = 1) {
    super(array, itemSize, normalized);
    this.isInstancedBufferAttribute = true;
    this.meshPerAttribute = meshPerAttribute;
  }
  copy(source) {
    super.copy(source);
    this.meshPerAttribute = source.meshPerAttribute;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.meshPerAttribute = this.meshPerAttribute;
    data.isInstancedBufferAttribute = true;
    return data;
  }
};
var _instanceLocalMatrix = new Matrix4();
var _instanceWorldMatrix = new Matrix4();
var _box3 = new Box3();
var _identity = new Matrix4();
var _mesh$1 = new Mesh2();
var _sphere$4 = new Sphere();
var _vector1 = new Vector32();
var _vector2 = new Vector32();
var _normalMatrix = new Matrix3();
var Plane = class {
  constructor(normal2 = new Vector32(1, 0, 0), constant = 0) {
    this.isPlane = true;
    this.normal = normal2;
    this.constant = constant;
  }
  set(normal2, constant) {
    this.normal.copy(normal2);
    this.constant = constant;
    return this;
  }
  setComponents(x, y, z, w) {
    this.normal.set(x, y, z);
    this.constant = w;
    return this;
  }
  setFromNormalAndCoplanarPoint(normal2, point) {
    this.normal.copy(normal2);
    this.constant = -point.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(a, b, c) {
    const normal2 = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(normal2, a);
    return this;
  }
  copy(plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  }
  normalize() {
    const inverseNormalLength = 1 / this.normal.length();
    this.normal.multiplyScalar(inverseNormalLength);
    this.constant *= inverseNormalLength;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(point) {
    return this.normal.dot(point) + this.constant;
  }
  distanceToSphere(sphere) {
    return this.distanceToPoint(sphere.center) - sphere.radius;
  }
  projectPoint(point, target) {
    return target.copy(point).addScaledVector(this.normal, -this.distanceToPoint(point));
  }
  intersectLine(line, target) {
    const direction2 = line.delta(_vector1);
    const denominator = this.normal.dot(direction2);
    if (denominator === 0) {
      if (this.distanceToPoint(line.start) === 0) {
        return target.copy(line.start);
      }
      return null;
    }
    const t = -(line.start.dot(this.normal) + this.constant) / denominator;
    if (t < 0 || t > 1) {
      return null;
    }
    return target.copy(line.start).addScaledVector(direction2, t);
  }
  intersectsLine(line) {
    const startSign = this.distanceToPoint(line.start);
    const endSign = this.distanceToPoint(line.end);
    return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
  }
  intersectsBox(box) {
    return box.intersectsPlane(this);
  }
  intersectsSphere(sphere) {
    return sphere.intersectsPlane(this);
  }
  coplanarPoint(target) {
    return target.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(matrix, optionalNormalMatrix) {
    const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
    const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
    const normal2 = this.normal.applyMatrix3(normalMatrix).normalize();
    this.constant = -referencePoint.dot(normal2);
    return this;
  }
  translate(offset) {
    this.constant -= offset.dot(this.normal);
    return this;
  }
  equals(plane) {
    return plane.normal.equals(this.normal) && plane.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var _sphere$3 = new Sphere();
var _vector$6 = new Vector32();
var Frustum = class {
  constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
    this.planes = [p0, p1, p2, p3, p4, p5];
  }
  set(p0, p1, p2, p3, p4, p5) {
    const planes = this.planes;
    planes[0].copy(p0);
    planes[1].copy(p1);
    planes[2].copy(p2);
    planes[3].copy(p3);
    planes[4].copy(p4);
    planes[5].copy(p5);
    return this;
  }
  copy(frustum) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      planes[i].copy(frustum.planes[i]);
    }
    return this;
  }
  setFromProjectionMatrix(m, coordinateSystem = WebGLCoordinateSystem) {
    const planes = this.planes;
    const me = m.elements;
    const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
    const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
    const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
    const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
    if (coordinateSystem === WebGLCoordinateSystem) {
      planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    } else if (coordinateSystem === WebGPUCoordinateSystem) {
      planes[5].setComponents(me2, me6, me10, me14).normalize();
    } else {
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + coordinateSystem);
    }
    return this;
  }
  intersectsObject(object) {
    if (object.boundingSphere !== void 0) {
      if (object.boundingSphere === null) object.computeBoundingSphere();
      _sphere$3.copy(object.boundingSphere).applyMatrix4(object.matrixWorld);
    } else {
      const geometry = object.geometry;
      if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
      _sphere$3.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
    }
    return this.intersectsSphere(_sphere$3);
  }
  intersectsSprite(sprite) {
    _sphere$3.center.set(0, 0, 0);
    _sphere$3.radius = 0.7071067811865476;
    _sphere$3.applyMatrix4(sprite.matrixWorld);
    return this.intersectsSphere(_sphere$3);
  }
  intersectsSphere(sphere) {
    const planes = this.planes;
    const center = sphere.center;
    const negRadius = -sphere.radius;
    for (let i = 0; i < 6; i++) {
      const distance2 = planes[i].distanceToPoint(center);
      if (distance2 < negRadius) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(box) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      const plane = planes[i];
      _vector$6.x = plane.normal.x > 0 ? box.max.x : box.min.x;
      _vector$6.y = plane.normal.y > 0 ? box.max.y : box.min.y;
      _vector$6.z = plane.normal.z > 0 ? box.max.z : box.min.z;
      if (plane.distanceToPoint(_vector$6) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(point) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      if (planes[i].distanceToPoint(point) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var MultiDrawRenderList = class {
  constructor() {
    this.index = 0;
    this.pool = [];
    this.list = [];
  }
  push(start, count, z, index) {
    const pool = this.pool;
    const list = this.list;
    if (this.index >= pool.length) {
      pool.push({
        start: -1,
        count: -1,
        z: -1,
        index: -1
      });
    }
    const item = pool[this.index];
    list.push(item);
    this.index++;
    item.start = start;
    item.count = count;
    item.z = z;
    item.index = index;
  }
  reset() {
    this.list.length = 0;
    this.index = 0;
  }
};
var _matrix$1 = new Matrix4();
var _whiteColor = new Color2(1, 1, 1);
var _frustum$1 = new Frustum();
var _box$1 = new Box3();
var _sphere$2 = new Sphere();
var _vector$5 = new Vector32();
var _forward = new Vector32();
var _temp = new Vector32();
var _renderList = new MultiDrawRenderList();
var _mesh = new Mesh2();
var LineBasicMaterial = class extends Material {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(parameters) {
    super();
    this.isLineBasicMaterial = true;
    this.color = new Color2(16777215);
    this.map = null;
    this.linewidth = 1;
    this.linecap = "round";
    this.linejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.linewidth = source.linewidth;
    this.linecap = source.linecap;
    this.linejoin = source.linejoin;
    this.fog = source.fog;
    return this;
  }
};
var _vStart = new Vector32();
var _vEnd = new Vector32();
var _inverseMatrix$1 = new Matrix4();
var _ray$1 = new Ray();
var _sphere$1 = new Sphere();
var _intersectPointOnRay = new Vector32();
var _intersectPointOnSegment = new Vector32();
var _start = new Vector32();
var _end = new Vector32();
var PointsMaterial = class extends Material {
  static get type() {
    return "PointsMaterial";
  }
  constructor(parameters) {
    super();
    this.isPointsMaterial = true;
    this.color = new Color2(16777215);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = true;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.size = source.size;
    this.sizeAttenuation = source.sizeAttenuation;
    this.fog = source.fog;
    return this;
  }
};
var _inverseMatrix = new Matrix4();
var _ray = new Ray();
var _sphere = new Sphere();
var _position$2 = new Vector32();
var FramebufferTexture = class extends Texture {
  constructor(width, height) {
    super({ width, height });
    this.isFramebufferTexture = true;
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.generateMipmaps = false;
    this.needsUpdate = true;
  }
};
var DepthTexture = class extends Texture {
  constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy2, format = DepthFormat) {
    if (format !== DepthFormat && format !== DepthStencilFormat) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    if (type === void 0 && format === DepthFormat) type = UnsignedIntType;
    if (type === void 0 && format === DepthStencilFormat) type = UnsignedInt248Type;
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy2);
    this.isDepthTexture = true;
    this.image = { width, height };
    this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
    this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
    this.flipY = false;
    this.generateMipmaps = false;
    this.compareFunction = null;
  }
  copy(source) {
    super.copy(source);
    this.compareFunction = source.compareFunction;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.compareFunction !== null) data.compareFunction = this.compareFunction;
    return data;
  }
};
var Curve = class {
  constructor() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
    return null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(u, optionalTarget) {
    const t = this.getUtoTmapping(u);
    return this.getPoint(t, optionalTarget);
  }
  // Get sequence of points using getPoint( t )
  getPoints(divisions = 5) {
    const points = [];
    for (let d = 0; d <= divisions; d++) {
      points.push(this.getPoint(d / divisions));
    }
    return points;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(divisions = 5) {
    const points = [];
    for (let d = 0; d <= divisions; d++) {
      points.push(this.getPointAt(d / divisions));
    }
    return points;
  }
  // Get total curve arc length
  getLength() {
    const lengths = this.getLengths();
    return lengths[lengths.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(divisions = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === divisions + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    const cache2 = [];
    let current, last = this.getPoint(0);
    let sum = 0;
    cache2.push(0);
    for (let p = 1; p <= divisions; p++) {
      current = this.getPoint(p / divisions);
      sum += current.distanceTo(last);
      cache2.push(sum);
      last = current;
    }
    this.cacheArcLengths = cache2;
    return cache2;
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(u, distance2) {
    const arcLengths = this.getLengths();
    let i = 0;
    const il = arcLengths.length;
    let targetArcLength;
    if (distance2) {
      targetArcLength = distance2;
    } else {
      targetArcLength = u * arcLengths[il - 1];
    }
    let low = 0, high = il - 1, comparison;
    while (low <= high) {
      i = Math.floor(low + (high - low) / 2);
      comparison = arcLengths[i] - targetArcLength;
      if (comparison < 0) {
        low = i + 1;
      } else if (comparison > 0) {
        high = i - 1;
      } else {
        high = i;
        break;
      }
    }
    i = high;
    if (arcLengths[i] === targetArcLength) {
      return i / (il - 1);
    }
    const lengthBefore = arcLengths[i];
    const lengthAfter = arcLengths[i + 1];
    const segmentLength = lengthAfter - lengthBefore;
    const segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
    const t = (i + segmentFraction) / (il - 1);
    return t;
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, optionalTarget) {
    const delta = 1e-4;
    let t1 = t - delta;
    let t2 = t + delta;
    if (t1 < 0) t1 = 0;
    if (t2 > 1) t2 = 1;
    const pt1 = this.getPoint(t1);
    const pt2 = this.getPoint(t2);
    const tangent = optionalTarget || (pt1.isVector2 ? new Vector22() : new Vector32());
    tangent.copy(pt2).sub(pt1).normalize();
    return tangent;
  }
  getTangentAt(u, optionalTarget) {
    const t = this.getUtoTmapping(u);
    return this.getTangent(t, optionalTarget);
  }
  computeFrenetFrames(segments, closed) {
    const normal2 = new Vector32();
    const tangents = [];
    const normals = [];
    const binormals = [];
    const vec = new Vector32();
    const mat = new Matrix4();
    for (let i = 0; i <= segments; i++) {
      const u = i / segments;
      tangents[i] = this.getTangentAt(u, new Vector32());
    }
    normals[0] = new Vector32();
    binormals[0] = new Vector32();
    let min2 = Number.MAX_VALUE;
    const tx = Math.abs(tangents[0].x);
    const ty = Math.abs(tangents[0].y);
    const tz = Math.abs(tangents[0].z);
    if (tx <= min2) {
      min2 = tx;
      normal2.set(1, 0, 0);
    }
    if (ty <= min2) {
      min2 = ty;
      normal2.set(0, 1, 0);
    }
    if (tz <= min2) {
      normal2.set(0, 0, 1);
    }
    vec.crossVectors(tangents[0], normal2).normalize();
    normals[0].crossVectors(tangents[0], vec);
    binormals[0].crossVectors(tangents[0], normals[0]);
    for (let i = 1; i <= segments; i++) {
      normals[i] = normals[i - 1].clone();
      binormals[i] = binormals[i - 1].clone();
      vec.crossVectors(tangents[i - 1], tangents[i]);
      if (vec.length() > Number.EPSILON) {
        vec.normalize();
        const theta = Math.acos(clamp$1(tangents[i - 1].dot(tangents[i]), -1, 1));
        normals[i].applyMatrix4(mat.makeRotationAxis(vec, theta));
      }
      binormals[i].crossVectors(tangents[i], normals[i]);
    }
    if (closed === true) {
      let theta = Math.acos(clamp$1(normals[0].dot(normals[segments]), -1, 1));
      theta /= segments;
      if (tangents[0].dot(vec.crossVectors(normals[0], normals[segments])) > 0) {
        theta = -theta;
      }
      for (let i = 1; i <= segments; i++) {
        normals[i].applyMatrix4(mat.makeRotationAxis(tangents[i], theta * i));
        binormals[i].crossVectors(tangents[i], normals[i]);
      }
    }
    return {
      tangents,
      normals,
      binormals
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.arcLengthDivisions = source.arcLengthDivisions;
    return this;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    data.arcLengthDivisions = this.arcLengthDivisions;
    data.type = this.type;
    return data;
  }
  fromJSON(json) {
    this.arcLengthDivisions = json.arcLengthDivisions;
    return this;
  }
};
var EllipseCurve = class extends Curve {
  constructor(aX = 0, aY = 0, xRadius = 1, yRadius = 1, aStartAngle = 0, aEndAngle = Math.PI * 2, aClockwise = false, aRotation = 0) {
    super();
    this.isEllipseCurve = true;
    this.type = "EllipseCurve";
    this.aX = aX;
    this.aY = aY;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.aStartAngle = aStartAngle;
    this.aEndAngle = aEndAngle;
    this.aClockwise = aClockwise;
    this.aRotation = aRotation;
  }
  getPoint(t, optionalTarget = new Vector22()) {
    const point = optionalTarget;
    const twoPi = Math.PI * 2;
    let deltaAngle = this.aEndAngle - this.aStartAngle;
    const samePoints = Math.abs(deltaAngle) < Number.EPSILON;
    while (deltaAngle < 0) deltaAngle += twoPi;
    while (deltaAngle > twoPi) deltaAngle -= twoPi;
    if (deltaAngle < Number.EPSILON) {
      if (samePoints) {
        deltaAngle = 0;
      } else {
        deltaAngle = twoPi;
      }
    }
    if (this.aClockwise === true && !samePoints) {
      if (deltaAngle === twoPi) {
        deltaAngle = -twoPi;
      } else {
        deltaAngle = deltaAngle - twoPi;
      }
    }
    const angle = this.aStartAngle + t * deltaAngle;
    let x = this.aX + this.xRadius * Math.cos(angle);
    let y = this.aY + this.yRadius * Math.sin(angle);
    if (this.aRotation !== 0) {
      const cos2 = Math.cos(this.aRotation);
      const sin2 = Math.sin(this.aRotation);
      const tx = x - this.aX;
      const ty = y - this.aY;
      x = tx * cos2 - ty * sin2 + this.aX;
      y = tx * sin2 + ty * cos2 + this.aY;
    }
    return point.set(x, y);
  }
  copy(source) {
    super.copy(source);
    this.aX = source.aX;
    this.aY = source.aY;
    this.xRadius = source.xRadius;
    this.yRadius = source.yRadius;
    this.aStartAngle = source.aStartAngle;
    this.aEndAngle = source.aEndAngle;
    this.aClockwise = source.aClockwise;
    this.aRotation = source.aRotation;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.aX = this.aX;
    data.aY = this.aY;
    data.xRadius = this.xRadius;
    data.yRadius = this.yRadius;
    data.aStartAngle = this.aStartAngle;
    data.aEndAngle = this.aEndAngle;
    data.aClockwise = this.aClockwise;
    data.aRotation = this.aRotation;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.aX = json.aX;
    this.aY = json.aY;
    this.xRadius = json.xRadius;
    this.yRadius = json.yRadius;
    this.aStartAngle = json.aStartAngle;
    this.aEndAngle = json.aEndAngle;
    this.aClockwise = json.aClockwise;
    this.aRotation = json.aRotation;
    return this;
  }
};
var ArcCurve = class extends EllipseCurve {
  constructor(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    super(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    this.isArcCurve = true;
    this.type = "ArcCurve";
  }
};
function CubicPoly() {
  let c0 = 0, c1 = 0, c2 = 0, c3 = 0;
  function init(x0, x1, t0, t1) {
    c0 = x0;
    c1 = t0;
    c2 = -3 * x0 + 3 * x1 - 2 * t0 - t1;
    c3 = 2 * x0 - 2 * x1 + t0 + t1;
  }
  return {
    initCatmullRom: function(x0, x1, x2, x3, tension) {
      init(x1, x2, tension * (x2 - x0), tension * (x3 - x1));
    },
    initNonuniformCatmullRom: function(x0, x1, x2, x3, dt0, dt1, dt2) {
      let t1 = (x1 - x0) / dt0 - (x2 - x0) / (dt0 + dt1) + (x2 - x1) / dt1;
      let t2 = (x2 - x1) / dt1 - (x3 - x1) / (dt1 + dt2) + (x3 - x2) / dt2;
      t1 *= dt1;
      t2 *= dt1;
      init(x1, x2, t1, t2);
    },
    calc: function(t) {
      const t2 = t * t;
      const t3 = t2 * t;
      return c0 + c1 * t + c2 * t2 + c3 * t3;
    }
  };
}
var tmp = new Vector32();
var px = new CubicPoly();
var py = new CubicPoly();
var pz = new CubicPoly();
var CatmullRomCurve3 = class extends Curve {
  constructor(points = [], closed = false, curveType = "centripetal", tension = 0.5) {
    super();
    this.isCatmullRomCurve3 = true;
    this.type = "CatmullRomCurve3";
    this.points = points;
    this.closed = closed;
    this.curveType = curveType;
    this.tension = tension;
  }
  getPoint(t, optionalTarget = new Vector32()) {
    const point = optionalTarget;
    const points = this.points;
    const l = points.length;
    const p = (l - (this.closed ? 0 : 1)) * t;
    let intPoint = Math.floor(p);
    let weight = p - intPoint;
    if (this.closed) {
      intPoint += intPoint > 0 ? 0 : (Math.floor(Math.abs(intPoint) / l) + 1) * l;
    } else if (weight === 0 && intPoint === l - 1) {
      intPoint = l - 2;
      weight = 1;
    }
    let p0, p3;
    if (this.closed || intPoint > 0) {
      p0 = points[(intPoint - 1) % l];
    } else {
      tmp.subVectors(points[0], points[1]).add(points[0]);
      p0 = tmp;
    }
    const p1 = points[intPoint % l];
    const p2 = points[(intPoint + 1) % l];
    if (this.closed || intPoint + 2 < l) {
      p3 = points[(intPoint + 2) % l];
    } else {
      tmp.subVectors(points[l - 1], points[l - 2]).add(points[l - 1]);
      p3 = tmp;
    }
    if (this.curveType === "centripetal" || this.curveType === "chordal") {
      const pow5 = this.curveType === "chordal" ? 0.5 : 0.25;
      let dt0 = Math.pow(p0.distanceToSquared(p1), pow5);
      let dt1 = Math.pow(p1.distanceToSquared(p2), pow5);
      let dt2 = Math.pow(p2.distanceToSquared(p3), pow5);
      if (dt1 < 1e-4) dt1 = 1;
      if (dt0 < 1e-4) dt0 = dt1;
      if (dt2 < 1e-4) dt2 = dt1;
      px.initNonuniformCatmullRom(p0.x, p1.x, p2.x, p3.x, dt0, dt1, dt2);
      py.initNonuniformCatmullRom(p0.y, p1.y, p2.y, p3.y, dt0, dt1, dt2);
      pz.initNonuniformCatmullRom(p0.z, p1.z, p2.z, p3.z, dt0, dt1, dt2);
    } else if (this.curveType === "catmullrom") {
      px.initCatmullRom(p0.x, p1.x, p2.x, p3.x, this.tension);
      py.initCatmullRom(p0.y, p1.y, p2.y, p3.y, this.tension);
      pz.initCatmullRom(p0.z, p1.z, p2.z, p3.z, this.tension);
    }
    point.set(
      px.calc(weight),
      py.calc(weight),
      pz.calc(weight)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i = 0, l = source.points.length; i < l; i++) {
      const point = source.points[i];
      this.points.push(point.clone());
    }
    this.closed = source.closed;
    this.curveType = source.curveType;
    this.tension = source.tension;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i = 0, l = this.points.length; i < l; i++) {
      const point = this.points[i];
      data.points.push(point.toArray());
    }
    data.closed = this.closed;
    data.curveType = this.curveType;
    data.tension = this.tension;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i = 0, l = json.points.length; i < l; i++) {
      const point = json.points[i];
      this.points.push(new Vector32().fromArray(point));
    }
    this.closed = json.closed;
    this.curveType = json.curveType;
    this.tension = json.tension;
    return this;
  }
};
function CatmullRom(t, p0, p1, p2, p3) {
  const v0 = (p2 - p0) * 0.5;
  const v1 = (p3 - p1) * 0.5;
  const t2 = t * t;
  const t3 = t * t2;
  return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
}
function QuadraticBezierP0(t, p) {
  const k = 1 - t;
  return k * k * p;
}
function QuadraticBezierP1(t, p) {
  return 2 * (1 - t) * t * p;
}
function QuadraticBezierP2(t, p) {
  return t * t * p;
}
function QuadraticBezier(t, p0, p1, p2) {
  return QuadraticBezierP0(t, p0) + QuadraticBezierP1(t, p1) + QuadraticBezierP2(t, p2);
}
function CubicBezierP0(t, p) {
  const k = 1 - t;
  return k * k * k * p;
}
function CubicBezierP1(t, p) {
  const k = 1 - t;
  return 3 * k * k * t * p;
}
function CubicBezierP2(t, p) {
  return 3 * (1 - t) * t * t * p;
}
function CubicBezierP3(t, p) {
  return t * t * t * p;
}
function CubicBezier(t, p0, p1, p2, p3) {
  return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
}
var CubicBezierCurve = class extends Curve {
  constructor(v0 = new Vector22(), v1 = new Vector22(), v2 = new Vector22(), v3 = new Vector22()) {
    super();
    this.isCubicBezierCurve = true;
    this.type = "CubicBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  getPoint(t, optionalTarget = new Vector22()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(
      CubicBezier(t, v0.x, v1.x, v2.x, v3.x),
      CubicBezier(t, v0.y, v1.y, v2.y, v3.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
var CubicBezierCurve3 = class extends Curve {
  constructor(v0 = new Vector32(), v1 = new Vector32(), v2 = new Vector32(), v3 = new Vector32()) {
    super();
    this.isCubicBezierCurve3 = true;
    this.type = "CubicBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  getPoint(t, optionalTarget = new Vector32()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(
      CubicBezier(t, v0.x, v1.x, v2.x, v3.x),
      CubicBezier(t, v0.y, v1.y, v2.y, v3.y),
      CubicBezier(t, v0.z, v1.z, v2.z, v3.z)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
var LineCurve = class extends Curve {
  constructor(v1 = new Vector22(), v2 = new Vector22()) {
    super();
    this.isLineCurve = true;
    this.type = "LineCurve";
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector22()) {
    const point = optionalTarget;
    if (t === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t).add(this.v1);
    }
    return point;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(u, optionalTarget) {
    return this.getPoint(u, optionalTarget);
  }
  getTangent(t, optionalTarget = new Vector22()) {
    return optionalTarget.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(u, optionalTarget) {
    return this.getTangent(u, optionalTarget);
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var LineCurve3 = class extends Curve {
  constructor(v1 = new Vector32(), v2 = new Vector32()) {
    super();
    this.isLineCurve3 = true;
    this.type = "LineCurve3";
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector32()) {
    const point = optionalTarget;
    if (t === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t).add(this.v1);
    }
    return point;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(u, optionalTarget) {
    return this.getPoint(u, optionalTarget);
  }
  getTangent(t, optionalTarget = new Vector32()) {
    return optionalTarget.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(u, optionalTarget) {
    return this.getTangent(u, optionalTarget);
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var QuadraticBezierCurve = class extends Curve {
  constructor(v0 = new Vector22(), v1 = new Vector22(), v2 = new Vector22()) {
    super();
    this.isQuadraticBezierCurve = true;
    this.type = "QuadraticBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector22()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(
      QuadraticBezier(t, v0.x, v1.x, v2.x),
      QuadraticBezier(t, v0.y, v1.y, v2.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var QuadraticBezierCurve3 = class extends Curve {
  constructor(v0 = new Vector32(), v1 = new Vector32(), v2 = new Vector32()) {
    super();
    this.isQuadraticBezierCurve3 = true;
    this.type = "QuadraticBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector32()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(
      QuadraticBezier(t, v0.x, v1.x, v2.x),
      QuadraticBezier(t, v0.y, v1.y, v2.y),
      QuadraticBezier(t, v0.z, v1.z, v2.z)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var SplineCurve = class extends Curve {
  constructor(points = []) {
    super();
    this.isSplineCurve = true;
    this.type = "SplineCurve";
    this.points = points;
  }
  getPoint(t, optionalTarget = new Vector22()) {
    const point = optionalTarget;
    const points = this.points;
    const p = (points.length - 1) * t;
    const intPoint = Math.floor(p);
    const weight = p - intPoint;
    const p0 = points[intPoint === 0 ? intPoint : intPoint - 1];
    const p1 = points[intPoint];
    const p2 = points[intPoint > points.length - 2 ? points.length - 1 : intPoint + 1];
    const p3 = points[intPoint > points.length - 3 ? points.length - 1 : intPoint + 2];
    point.set(
      CatmullRom(weight, p0.x, p1.x, p2.x, p3.x),
      CatmullRom(weight, p0.y, p1.y, p2.y, p3.y)
    );
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i = 0, l = source.points.length; i < l; i++) {
      const point = source.points[i];
      this.points.push(point.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i = 0, l = this.points.length; i < l; i++) {
      const point = this.points[i];
      data.points.push(point.toArray());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i = 0, l = json.points.length; i < l; i++) {
      const point = json.points[i];
      this.points.push(new Vector22().fromArray(point));
    }
    return this;
  }
};
var Curves = Object.freeze({
  __proto__: null,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve
});
var CurvePath = class extends Curve {
  constructor() {
    super();
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = false;
  }
  add(curve) {
    this.curves.push(curve);
  }
  closePath() {
    const startPoint = this.curves[0].getPoint(0);
    const endPoint = this.curves[this.curves.length - 1].getPoint(1);
    if (!startPoint.equals(endPoint)) {
      const lineType = startPoint.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new Curves[lineType](endPoint, startPoint));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, optionalTarget) {
    const d = t * this.getLength();
    const curveLengths = this.getCurveLengths();
    let i = 0;
    while (i < curveLengths.length) {
      if (curveLengths[i] >= d) {
        const diff = curveLengths[i] - d;
        const curve = this.curves[i];
        const segmentLength = curve.getLength();
        const u = segmentLength === 0 ? 0 : 1 - diff / segmentLength;
        return curve.getPointAt(u, optionalTarget);
      }
      i++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const lens = this.getCurveLengths();
    return lens[lens.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    const lengths = [];
    let sums = 0;
    for (let i = 0, l = this.curves.length; i < l; i++) {
      sums += this.curves[i].getLength();
      lengths.push(sums);
    }
    this.cacheLengths = lengths;
    return lengths;
  }
  getSpacedPoints(divisions = 40) {
    const points = [];
    for (let i = 0; i <= divisions; i++) {
      points.push(this.getPoint(i / divisions));
    }
    if (this.autoClose) {
      points.push(points[0]);
    }
    return points;
  }
  getPoints(divisions = 12) {
    const points = [];
    let last;
    for (let i = 0, curves = this.curves; i < curves.length; i++) {
      const curve = curves[i];
      const resolution = curve.isEllipseCurve ? divisions * 2 : curve.isLineCurve || curve.isLineCurve3 ? 1 : curve.isSplineCurve ? divisions * curve.points.length : divisions;
      const pts = curve.getPoints(resolution);
      for (let j = 0; j < pts.length; j++) {
        const point = pts[j];
        if (last && last.equals(point)) continue;
        points.push(point);
        last = point;
      }
    }
    if (this.autoClose && points.length > 1 && !points[points.length - 1].equals(points[0])) {
      points.push(points[0]);
    }
    return points;
  }
  copy(source) {
    super.copy(source);
    this.curves = [];
    for (let i = 0, l = source.curves.length; i < l; i++) {
      const curve = source.curves[i];
      this.curves.push(curve.clone());
    }
    this.autoClose = source.autoClose;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.autoClose = this.autoClose;
    data.curves = [];
    for (let i = 0, l = this.curves.length; i < l; i++) {
      const curve = this.curves[i];
      data.curves.push(curve.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.autoClose = json.autoClose;
    this.curves = [];
    for (let i = 0, l = json.curves.length; i < l; i++) {
      const curve = json.curves[i];
      this.curves.push(new Curves[curve.type]().fromJSON(curve));
    }
    return this;
  }
};
var Path = class extends CurvePath {
  constructor(points) {
    super();
    this.type = "Path";
    this.currentPoint = new Vector22();
    if (points) {
      this.setFromPoints(points);
    }
  }
  setFromPoints(points) {
    this.moveTo(points[0].x, points[0].y);
    for (let i = 1, l = points.length; i < l; i++) {
      this.lineTo(points[i].x, points[i].y);
    }
    return this;
  }
  moveTo(x, y) {
    this.currentPoint.set(x, y);
    return this;
  }
  lineTo(x, y) {
    const curve = new LineCurve(this.currentPoint.clone(), new Vector22(x, y));
    this.curves.push(curve);
    this.currentPoint.set(x, y);
    return this;
  }
  quadraticCurveTo(aCPx, aCPy, aX, aY) {
    const curve = new QuadraticBezierCurve(
      this.currentPoint.clone(),
      new Vector22(aCPx, aCPy),
      new Vector22(aX, aY)
    );
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
    const curve = new CubicBezierCurve(
      this.currentPoint.clone(),
      new Vector22(aCP1x, aCP1y),
      new Vector22(aCP2x, aCP2y),
      new Vector22(aX, aY)
    );
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  splineThru(pts) {
    const npts = [this.currentPoint.clone()].concat(pts);
    const curve = new SplineCurve(npts);
    this.curves.push(curve);
    this.currentPoint.copy(pts[pts.length - 1]);
    return this;
  }
  arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absarc(
      aX + x0,
      aY + y0,
      aRadius,
      aStartAngle,
      aEndAngle,
      aClockwise
    );
    return this;
  }
  absarc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    this.absellipse(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    return this;
  }
  ellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absellipse(aX + x0, aY + y0, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    return this;
  }
  absellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const curve = new EllipseCurve(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    if (this.curves.length > 0) {
      const firstPoint = curve.getPoint(0);
      if (!firstPoint.equals(this.currentPoint)) {
        this.lineTo(firstPoint.x, firstPoint.y);
      }
    }
    this.curves.push(curve);
    const lastPoint = curve.getPoint(1);
    this.currentPoint.copy(lastPoint);
    return this;
  }
  copy(source) {
    super.copy(source);
    this.currentPoint.copy(source.currentPoint);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.currentPoint = this.currentPoint.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.currentPoint.fromArray(json.currentPoint);
    return this;
  }
};
var LatheGeometry = class _LatheGeometry extends BufferGeometry {
  constructor(points = [new Vector22(0, -0.5), new Vector22(0.5, 0), new Vector22(0, 0.5)], segments = 12, phiStart = 0, phiLength = Math.PI * 2) {
    super();
    this.type = "LatheGeometry";
    this.parameters = {
      points,
      segments,
      phiStart,
      phiLength
    };
    segments = Math.floor(segments);
    phiLength = clamp$1(phiLength, 0, Math.PI * 2);
    const indices = [];
    const vertices = [];
    const uvs = [];
    const initNormals = [];
    const normals = [];
    const inverseSegments = 1 / segments;
    const vertex = new Vector32();
    const uv2 = new Vector22();
    const normal2 = new Vector32();
    const curNormal = new Vector32();
    const prevNormal = new Vector32();
    let dx = 0;
    let dy = 0;
    for (let j = 0; j <= points.length - 1; j++) {
      switch (j) {
        case 0:
          dx = points[j + 1].x - points[j].x;
          dy = points[j + 1].y - points[j].y;
          normal2.x = dy * 1;
          normal2.y = -dx;
          normal2.z = dy * 0;
          prevNormal.copy(normal2);
          normal2.normalize();
          initNormals.push(normal2.x, normal2.y, normal2.z);
          break;
        case points.length - 1:
          initNormals.push(prevNormal.x, prevNormal.y, prevNormal.z);
          break;
        default:
          dx = points[j + 1].x - points[j].x;
          dy = points[j + 1].y - points[j].y;
          normal2.x = dy * 1;
          normal2.y = -dx;
          normal2.z = dy * 0;
          curNormal.copy(normal2);
          normal2.x += prevNormal.x;
          normal2.y += prevNormal.y;
          normal2.z += prevNormal.z;
          normal2.normalize();
          initNormals.push(normal2.x, normal2.y, normal2.z);
          prevNormal.copy(curNormal);
      }
    }
    for (let i = 0; i <= segments; i++) {
      const phi = phiStart + i * inverseSegments * phiLength;
      const sin2 = Math.sin(phi);
      const cos2 = Math.cos(phi);
      for (let j = 0; j <= points.length - 1; j++) {
        vertex.x = points[j].x * sin2;
        vertex.y = points[j].y;
        vertex.z = points[j].x * cos2;
        vertices.push(vertex.x, vertex.y, vertex.z);
        uv2.x = i / segments;
        uv2.y = j / (points.length - 1);
        uvs.push(uv2.x, uv2.y);
        const x = initNormals[3 * j + 0] * sin2;
        const y = initNormals[3 * j + 1];
        const z = initNormals[3 * j + 0] * cos2;
        normals.push(x, y, z);
      }
    }
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < points.length - 1; j++) {
        const base = j + i * points.length;
        const a = base;
        const b = base + points.length;
        const c = base + points.length + 1;
        const d = base + 1;
        indices.push(a, b, d);
        indices.push(c, d, b);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _LatheGeometry(data.points, data.segments, data.phiStart, data.phiLength);
  }
};
var CapsuleGeometry = class _CapsuleGeometry extends LatheGeometry {
  constructor(radius = 1, length2 = 1, capSegments = 4, radialSegments = 8) {
    const path = new Path();
    path.absarc(0, -length2 / 2, radius, Math.PI * 1.5, 0);
    path.absarc(0, length2 / 2, radius, 0, Math.PI * 0.5);
    super(path.getPoints(capSegments), radialSegments);
    this.type = "CapsuleGeometry";
    this.parameters = {
      radius,
      length: length2,
      capSegments,
      radialSegments
    };
  }
  static fromJSON(data) {
    return new _CapsuleGeometry(data.radius, data.length, data.capSegments, data.radialSegments);
  }
};
var CircleGeometry = class _CircleGeometry extends BufferGeometry {
  constructor(radius = 1, segments = 32, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.type = "CircleGeometry";
    this.parameters = {
      radius,
      segments,
      thetaStart,
      thetaLength
    };
    segments = Math.max(3, segments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    const vertex = new Vector32();
    const uv2 = new Vector22();
    vertices.push(0, 0, 0);
    normals.push(0, 0, 1);
    uvs.push(0.5, 0.5);
    for (let s = 0, i = 3; s <= segments; s++, i += 3) {
      const segment = thetaStart + s / segments * thetaLength;
      vertex.x = radius * Math.cos(segment);
      vertex.y = radius * Math.sin(segment);
      vertices.push(vertex.x, vertex.y, vertex.z);
      normals.push(0, 0, 1);
      uv2.x = (vertices[i] / radius + 1) / 2;
      uv2.y = (vertices[i + 1] / radius + 1) / 2;
      uvs.push(uv2.x, uv2.y);
    }
    for (let i = 1; i <= segments; i++) {
      indices.push(i, i + 1, 0);
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _CircleGeometry(data.radius, data.segments, data.thetaStart, data.thetaLength);
  }
};
var CylinderGeometry = class _CylinderGeometry extends BufferGeometry {
  constructor(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 32, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    };
    const scope = this;
    radialSegments = Math.floor(radialSegments);
    heightSegments = Math.floor(heightSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let index = 0;
    const indexArray = [];
    const halfHeight = height / 2;
    let groupStart = 0;
    generateTorso();
    if (openEnded === false) {
      if (radiusTop > 0) generateCap(true);
      if (radiusBottom > 0) generateCap(false);
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function generateTorso() {
      const normal2 = new Vector32();
      const vertex = new Vector32();
      let groupCount = 0;
      const slope = (radiusBottom - radiusTop) / height;
      for (let y = 0; y <= heightSegments; y++) {
        const indexRow = [];
        const v = y / heightSegments;
        const radius = v * (radiusBottom - radiusTop) + radiusTop;
        for (let x = 0; x <= radialSegments; x++) {
          const u = x / radialSegments;
          const theta = u * thetaLength + thetaStart;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          vertex.x = radius * sinTheta;
          vertex.y = -v * height + halfHeight;
          vertex.z = radius * cosTheta;
          vertices.push(vertex.x, vertex.y, vertex.z);
          normal2.set(sinTheta, slope, cosTheta).normalize();
          normals.push(normal2.x, normal2.y, normal2.z);
          uvs.push(u, 1 - v);
          indexRow.push(index++);
        }
        indexArray.push(indexRow);
      }
      for (let x = 0; x < radialSegments; x++) {
        for (let y = 0; y < heightSegments; y++) {
          const a = indexArray[y][x];
          const b = indexArray[y + 1][x];
          const c = indexArray[y + 1][x + 1];
          const d = indexArray[y][x + 1];
          if (radiusTop > 0 || y !== 0) {
            indices.push(a, b, d);
            groupCount += 3;
          }
          if (radiusBottom > 0 || y !== heightSegments - 1) {
            indices.push(b, c, d);
            groupCount += 3;
          }
        }
      }
      scope.addGroup(groupStart, groupCount, 0);
      groupStart += groupCount;
    }
    function generateCap(top) {
      const centerIndexStart = index;
      const uv2 = new Vector22();
      const vertex = new Vector32();
      let groupCount = 0;
      const radius = top === true ? radiusTop : radiusBottom;
      const sign2 = top === true ? 1 : -1;
      for (let x = 1; x <= radialSegments; x++) {
        vertices.push(0, halfHeight * sign2, 0);
        normals.push(0, sign2, 0);
        uvs.push(0.5, 0.5);
        index++;
      }
      const centerIndexEnd = index;
      for (let x = 0; x <= radialSegments; x++) {
        const u = x / radialSegments;
        const theta = u * thetaLength + thetaStart;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        vertex.x = radius * sinTheta;
        vertex.y = halfHeight * sign2;
        vertex.z = radius * cosTheta;
        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(0, sign2, 0);
        uv2.x = cosTheta * 0.5 + 0.5;
        uv2.y = sinTheta * 0.5 * sign2 + 0.5;
        uvs.push(uv2.x, uv2.y);
        index++;
      }
      for (let x = 0; x < radialSegments; x++) {
        const c = centerIndexStart + x;
        const i = centerIndexEnd + x;
        if (top === true) {
          indices.push(i, i + 1, c);
        } else {
          indices.push(i + 1, i, c);
        }
        groupCount += 3;
      }
      scope.addGroup(groupStart, groupCount, top === true ? 1 : 2);
      groupStart += groupCount;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _CylinderGeometry(data.radiusTop, data.radiusBottom, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength);
  }
};
var ConeGeometry = class _ConeGeometry extends CylinderGeometry {
  constructor(radius = 1, height = 1, radialSegments = 32, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    super(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
    this.type = "ConeGeometry";
    this.parameters = {
      radius,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    };
  }
  static fromJSON(data) {
    return new _ConeGeometry(data.radius, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength);
  }
};
var PolyhedronGeometry = class _PolyhedronGeometry extends BufferGeometry {
  constructor(vertices = [], indices = [], radius = 1, detail = 0) {
    super();
    this.type = "PolyhedronGeometry";
    this.parameters = {
      vertices,
      indices,
      radius,
      detail
    };
    const vertexBuffer = [];
    const uvBuffer = [];
    subdivide(detail);
    applyRadius(radius);
    generateUVs();
    this.setAttribute("position", new Float32BufferAttribute(vertexBuffer, 3));
    this.setAttribute("normal", new Float32BufferAttribute(vertexBuffer.slice(), 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvBuffer, 2));
    if (detail === 0) {
      this.computeVertexNormals();
    } else {
      this.normalizeNormals();
    }
    function subdivide(detail2) {
      const a = new Vector32();
      const b = new Vector32();
      const c = new Vector32();
      for (let i = 0; i < indices.length; i += 3) {
        getVertexByIndex(indices[i + 0], a);
        getVertexByIndex(indices[i + 1], b);
        getVertexByIndex(indices[i + 2], c);
        subdivideFace(a, b, c, detail2);
      }
    }
    function subdivideFace(a, b, c, detail2) {
      const cols = detail2 + 1;
      const v = [];
      for (let i = 0; i <= cols; i++) {
        v[i] = [];
        const aj = a.clone().lerp(c, i / cols);
        const bj = b.clone().lerp(c, i / cols);
        const rows = cols - i;
        for (let j = 0; j <= rows; j++) {
          if (j === 0 && i === cols) {
            v[i][j] = aj;
          } else {
            v[i][j] = aj.clone().lerp(bj, j / rows);
          }
        }
      }
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < 2 * (cols - i) - 1; j++) {
          const k = Math.floor(j / 2);
          if (j % 2 === 0) {
            pushVertex(v[i][k + 1]);
            pushVertex(v[i + 1][k]);
            pushVertex(v[i][k]);
          } else {
            pushVertex(v[i][k + 1]);
            pushVertex(v[i + 1][k + 1]);
            pushVertex(v[i + 1][k]);
          }
        }
      }
    }
    function applyRadius(radius2) {
      const vertex = new Vector32();
      for (let i = 0; i < vertexBuffer.length; i += 3) {
        vertex.x = vertexBuffer[i + 0];
        vertex.y = vertexBuffer[i + 1];
        vertex.z = vertexBuffer[i + 2];
        vertex.normalize().multiplyScalar(radius2);
        vertexBuffer[i + 0] = vertex.x;
        vertexBuffer[i + 1] = vertex.y;
        vertexBuffer[i + 2] = vertex.z;
      }
    }
    function generateUVs() {
      const vertex = new Vector32();
      for (let i = 0; i < vertexBuffer.length; i += 3) {
        vertex.x = vertexBuffer[i + 0];
        vertex.y = vertexBuffer[i + 1];
        vertex.z = vertexBuffer[i + 2];
        const u = azimuth(vertex) / 2 / Math.PI + 0.5;
        const v = inclination(vertex) / Math.PI + 0.5;
        uvBuffer.push(u, 1 - v);
      }
      correctUVs();
      correctSeam();
    }
    function correctSeam() {
      for (let i = 0; i < uvBuffer.length; i += 6) {
        const x0 = uvBuffer[i + 0];
        const x1 = uvBuffer[i + 2];
        const x2 = uvBuffer[i + 4];
        const max2 = Math.max(x0, x1, x2);
        const min2 = Math.min(x0, x1, x2);
        if (max2 > 0.9 && min2 < 0.1) {
          if (x0 < 0.2) uvBuffer[i + 0] += 1;
          if (x1 < 0.2) uvBuffer[i + 2] += 1;
          if (x2 < 0.2) uvBuffer[i + 4] += 1;
        }
      }
    }
    function pushVertex(vertex) {
      vertexBuffer.push(vertex.x, vertex.y, vertex.z);
    }
    function getVertexByIndex(index, vertex) {
      const stride = index * 3;
      vertex.x = vertices[stride + 0];
      vertex.y = vertices[stride + 1];
      vertex.z = vertices[stride + 2];
    }
    function correctUVs() {
      const a = new Vector32();
      const b = new Vector32();
      const c = new Vector32();
      const centroid = new Vector32();
      const uvA = new Vector22();
      const uvB = new Vector22();
      const uvC = new Vector22();
      for (let i = 0, j = 0; i < vertexBuffer.length; i += 9, j += 6) {
        a.set(vertexBuffer[i + 0], vertexBuffer[i + 1], vertexBuffer[i + 2]);
        b.set(vertexBuffer[i + 3], vertexBuffer[i + 4], vertexBuffer[i + 5]);
        c.set(vertexBuffer[i + 6], vertexBuffer[i + 7], vertexBuffer[i + 8]);
        uvA.set(uvBuffer[j + 0], uvBuffer[j + 1]);
        uvB.set(uvBuffer[j + 2], uvBuffer[j + 3]);
        uvC.set(uvBuffer[j + 4], uvBuffer[j + 5]);
        centroid.copy(a).add(b).add(c).divideScalar(3);
        const azi = azimuth(centroid);
        correctUV(uvA, j + 0, a, azi);
        correctUV(uvB, j + 2, b, azi);
        correctUV(uvC, j + 4, c, azi);
      }
    }
    function correctUV(uv2, stride, vector, azimuth2) {
      if (azimuth2 < 0 && uv2.x === 1) {
        uvBuffer[stride] = uv2.x - 1;
      }
      if (vector.x === 0 && vector.z === 0) {
        uvBuffer[stride] = azimuth2 / 2 / Math.PI + 0.5;
      }
    }
    function azimuth(vector) {
      return Math.atan2(vector.z, -vector.x);
    }
    function inclination(vector) {
      return Math.atan2(-vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z));
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _PolyhedronGeometry(data.vertices, data.indices, data.radius, data.details);
  }
};
var DodecahedronGeometry = class _DodecahedronGeometry extends PolyhedronGeometry {
  constructor(radius = 1, detail = 0) {
    const t = (1 + Math.sqrt(5)) / 2;
    const r = 1 / t;
    const vertices = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -r,
      -t,
      0,
      -r,
      t,
      0,
      r,
      -t,
      0,
      r,
      t,
      // (±1/φ, ±φ, 0)
      -r,
      -t,
      0,
      -r,
      t,
      0,
      r,
      -t,
      0,
      r,
      t,
      0,
      // (±φ, 0, ±1/φ)
      -t,
      0,
      -r,
      t,
      0,
      -r,
      -t,
      0,
      r,
      t,
      0,
      r
    ];
    const indices = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(vertices, indices, radius, detail);
    this.type = "DodecahedronGeometry";
    this.parameters = {
      radius,
      detail
    };
  }
  static fromJSON(data) {
    return new _DodecahedronGeometry(data.radius, data.detail);
  }
};
var _v0 = new Vector32();
var _v1$1 = new Vector32();
var _normal$1 = new Vector32();
var _triangle = new Triangle();
var EdgesGeometry = class extends BufferGeometry {
  constructor(geometry = null, thresholdAngle = 1) {
    super();
    this.type = "EdgesGeometry";
    this.parameters = {
      geometry,
      thresholdAngle
    };
    if (geometry !== null) {
      const precisionPoints = 4;
      const precision = Math.pow(10, precisionPoints);
      const thresholdDot = Math.cos(DEG2RAD * thresholdAngle);
      const indexAttr = geometry.getIndex();
      const positionAttr = geometry.getAttribute("position");
      const indexCount = indexAttr ? indexAttr.count : positionAttr.count;
      const indexArr = [0, 0, 0];
      const vertKeys = ["a", "b", "c"];
      const hashes = new Array(3);
      const edgeData = {};
      const vertices = [];
      for (let i = 0; i < indexCount; i += 3) {
        if (indexAttr) {
          indexArr[0] = indexAttr.getX(i);
          indexArr[1] = indexAttr.getX(i + 1);
          indexArr[2] = indexAttr.getX(i + 2);
        } else {
          indexArr[0] = i;
          indexArr[1] = i + 1;
          indexArr[2] = i + 2;
        }
        const { a, b, c } = _triangle;
        a.fromBufferAttribute(positionAttr, indexArr[0]);
        b.fromBufferAttribute(positionAttr, indexArr[1]);
        c.fromBufferAttribute(positionAttr, indexArr[2]);
        _triangle.getNormal(_normal$1);
        hashes[0] = `${Math.round(a.x * precision)},${Math.round(a.y * precision)},${Math.round(a.z * precision)}`;
        hashes[1] = `${Math.round(b.x * precision)},${Math.round(b.y * precision)},${Math.round(b.z * precision)}`;
        hashes[2] = `${Math.round(c.x * precision)},${Math.round(c.y * precision)},${Math.round(c.z * precision)}`;
        if (hashes[0] === hashes[1] || hashes[1] === hashes[2] || hashes[2] === hashes[0]) {
          continue;
        }
        for (let j = 0; j < 3; j++) {
          const jNext = (j + 1) % 3;
          const vecHash0 = hashes[j];
          const vecHash1 = hashes[jNext];
          const v0 = _triangle[vertKeys[j]];
          const v1 = _triangle[vertKeys[jNext]];
          const hash2 = `${vecHash0}_${vecHash1}`;
          const reverseHash = `${vecHash1}_${vecHash0}`;
          if (reverseHash in edgeData && edgeData[reverseHash]) {
            if (_normal$1.dot(edgeData[reverseHash].normal) <= thresholdDot) {
              vertices.push(v0.x, v0.y, v0.z);
              vertices.push(v1.x, v1.y, v1.z);
            }
            edgeData[reverseHash] = null;
          } else if (!(hash2 in edgeData)) {
            edgeData[hash2] = {
              index0: indexArr[j],
              index1: indexArr[jNext],
              normal: _normal$1.clone()
            };
          }
        }
      }
      for (const key in edgeData) {
        if (edgeData[key]) {
          const { index0, index1 } = edgeData[key];
          _v0.fromBufferAttribute(positionAttr, index0);
          _v1$1.fromBufferAttribute(positionAttr, index1);
          vertices.push(_v0.x, _v0.y, _v0.z);
          vertices.push(_v1$1.x, _v1$1.y, _v1$1.z);
        }
      }
      this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
};
var Shape = class extends Path {
  constructor(points) {
    super(points);
    this.uuid = generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  getPointsHoles(divisions) {
    const holesPts = [];
    for (let i = 0, l = this.holes.length; i < l; i++) {
      holesPts[i] = this.holes[i].getPoints(divisions);
    }
    return holesPts;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(divisions) {
    return {
      shape: this.getPoints(divisions),
      holes: this.getPointsHoles(divisions)
    };
  }
  copy(source) {
    super.copy(source);
    this.holes = [];
    for (let i = 0, l = source.holes.length; i < l; i++) {
      const hole = source.holes[i];
      this.holes.push(hole.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.uuid = this.uuid;
    data.holes = [];
    for (let i = 0, l = this.holes.length; i < l; i++) {
      const hole = this.holes[i];
      data.holes.push(hole.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.uuid = json.uuid;
    this.holes = [];
    for (let i = 0, l = json.holes.length; i < l; i++) {
      const hole = json.holes[i];
      this.holes.push(new Path().fromJSON(hole));
    }
    return this;
  }
};
var Earcut = {
  triangulate: function(data, holeIndices, dim = 2) {
    const hasHoles = holeIndices && holeIndices.length;
    const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    let outerNode = linkedList(data, 0, outerLen, dim, true);
    const triangles = [];
    if (!outerNode || outerNode.next === outerNode.prev) return triangles;
    let minX, minY, maxX, maxY, x, y, invSize;
    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
    if (data.length > 80 * dim) {
      minX = maxX = data[0];
      minY = maxY = data[1];
      for (let i = dim; i < outerLen; i += dim) {
        x = data[i];
        y = data[i + 1];
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
      invSize = Math.max(maxX - minX, maxY - minY);
      invSize = invSize !== 0 ? 32767 / invSize : 0;
    }
    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
    return triangles;
  }
};
function linkedList(data, start, end, dim, clockwise) {
  let i, last;
  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
  }
  if (last && equals$1(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;
  let p = start, again;
  do {
    again = false;
    if (!p.steiner && (equals$1(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next) break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  let stop = ear, prev, next;
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim | 0);
      triangles.push(ear.i / dim | 0);
      triangles.push(next.i / dim | 0);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  const a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0) return false;
  const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
  const x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
  let p = c.next;
  while (p !== a) {
    if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  const a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0) return false;
  const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
  const x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
  const minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
  let p = ear.prevZ, n = ear.nextZ;
  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
    if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }
  while (p && p.z >= minZ) {
    if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
  }
  while (n && n.z <= maxZ) {
    if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles, dim) {
  let p = start;
  do {
    const a = p.prev, b = p.next.next;
    if (!equals$1(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim | 0);
      triangles.push(p.i / dim | 0);
      triangles.push(b.i / dim | 0);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }
    p = p.next;
  } while (p !== start);
  return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  let a = start;
  do {
    let b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        let c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
        earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}
function eliminateHoles(data, holeIndices, outerNode, dim) {
  const queue = [];
  let i, len, start, end, list;
  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareX);
  for (i = 0; i < queue.length; i++) {
    outerNode = eliminateHole(queue[i], outerNode);
  }
  return outerNode;
}
function compareX(a, b) {
  return a.x - b.x;
}
function eliminateHole(hole, outerNode) {
  const bridge = findHoleBridge(hole, outerNode);
  if (!bridge) {
    return outerNode;
  }
  const bridgeReverse = splitPolygon(bridge, hole);
  filterPoints(bridgeReverse, bridgeReverse.next);
  return filterPoints(bridge, bridge.next);
}
function findHoleBridge(hole, outerNode) {
  let p = outerNode, qx = -Infinity, m;
  const hx = hole.x, hy = hole.y;
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        m = p.x < p.next.x ? p : p.next;
        if (x === hx) return m;
      }
    }
    p = p.next;
  } while (p !== outerNode);
  if (!m) return null;
  const stop = m, mx = m.x, my = m.y;
  let tanMin = Infinity, tan2;
  p = m;
  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan2 = Math.abs(hy - p.y) / (hx - p.x);
      if (locallyInside(p, hole) && (tan2 < tanMin || tan2 === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan2;
      }
    }
    p = p.next;
  } while (p !== stop);
  return m;
}
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  let p = start;
  do {
    if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);
  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}
function sortLinked(list) {
  let i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;
    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q) break;
      }
      qSize = inSize;
      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }
        if (tail) tail.nextZ = e;
        else list = e;
        e.prevZ = tail;
        tail = e;
      }
      p = q;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x, y, minX, minY, invSize) {
  x = (x - minX) * invSize | 0;
  y = (y - minY) * invSize | 0;
  x = (x | x << 8) & 16711935;
  x = (x | x << 4) & 252645135;
  x = (x | x << 2) & 858993459;
  x = (x | x << 1) & 1431655765;
  y = (y | y << 8) & 16711935;
  y = (y | y << 4) & 252645135;
  y = (y | y << 2) & 858993459;
  y = (y | y << 1) & 1431655765;
  return x | y << 1;
}
function getLeftmost(start) {
  let p = start, leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
    p = p.next;
  } while (p !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px2, py2) {
  return (cx - px2) * (ay - py2) >= (ax - px2) * (cy - py2) && (ax - px2) * (by - py2) >= (bx - px2) * (ay - py2) && (bx - px2) * (cy - py2) >= (cx - px2) * (by - py2);
}
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
  (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
  (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
  equals$1(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals$1(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  const o1 = sign$1(area(p1, q1, p2));
  const o2 = sign$1(area(p1, q1, q2));
  const o3 = sign$1(area(p2, q2, p1));
  const o4 = sign$1(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4) return true;
  if (o1 === 0 && onSegment(p1, p2, q1)) return true;
  if (o2 === 0 && onSegment(p1, q2, q1)) return true;
  if (o3 === 0 && onSegment(p2, p1, q2)) return true;
  if (o4 === 0 && onSegment(p2, q1, q2)) return true;
  return false;
}
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign$1(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
  let p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
    p = p.next;
  } while (p !== a);
  return false;
}
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
  let p = a, inside = false;
  const px2 = (a.x + b.x) / 2, py2 = (a.y + b.y) / 2;
  do {
    if (p.y > py2 !== p.next.y > py2 && p.next.y !== p.y && px2 < (p.next.x - p.x) * (py2 - p.y) / (p.next.y - p.y) + p.x)
      inside = !inside;
    p = p.next;
  } while (p !== a);
  return inside;
}
function splitPolygon(a, b) {
  const a2 = new Node$1(a.i, a.x, a.y), b2 = new Node$1(b.i, b.x, b.y), an = a.next, bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}
function insertNode(i, x, y, last) {
  const p = new Node$1(i, x, y);
  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}
function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}
function Node$1(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = 0;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
function signedArea(data, start, end, dim) {
  let sum = 0;
  for (let i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
    j = i;
  }
  return sum;
}
var ShapeUtils = class _ShapeUtils {
  // calculate area of the contour polygon
  static area(contour) {
    const n = contour.length;
    let a = 0;
    for (let p = n - 1, q = 0; q < n; p = q++) {
      a += contour[p].x * contour[q].y - contour[q].x * contour[p].y;
    }
    return a * 0.5;
  }
  static isClockWise(pts) {
    return _ShapeUtils.area(pts) < 0;
  }
  static triangulateShape(contour, holes) {
    const vertices = [];
    const holeIndices = [];
    const faces = [];
    removeDupEndPts(contour);
    addContour(vertices, contour);
    let holeIndex = contour.length;
    holes.forEach(removeDupEndPts);
    for (let i = 0; i < holes.length; i++) {
      holeIndices.push(holeIndex);
      holeIndex += holes[i].length;
      addContour(vertices, holes[i]);
    }
    const triangles = Earcut.triangulate(vertices, holeIndices);
    for (let i = 0; i < triangles.length; i += 3) {
      faces.push(triangles.slice(i, i + 3));
    }
    return faces;
  }
};
function removeDupEndPts(points) {
  const l = points.length;
  if (l > 2 && points[l - 1].equals(points[0])) {
    points.pop();
  }
}
function addContour(vertices, contour) {
  for (let i = 0; i < contour.length; i++) {
    vertices.push(contour[i].x);
    vertices.push(contour[i].y);
  }
}
var ExtrudeGeometry = class _ExtrudeGeometry extends BufferGeometry {
  constructor(shapes = new Shape([new Vector22(0.5, 0.5), new Vector22(-0.5, 0.5), new Vector22(-0.5, -0.5), new Vector22(0.5, -0.5)]), options = {}) {
    super();
    this.type = "ExtrudeGeometry";
    this.parameters = {
      shapes,
      options
    };
    shapes = Array.isArray(shapes) ? shapes : [shapes];
    const scope = this;
    const verticesArray = [];
    const uvArray = [];
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      addShape(shape);
    }
    this.setAttribute("position", new Float32BufferAttribute(verticesArray, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvArray, 2));
    this.computeVertexNormals();
    function addShape(shape) {
      const placeholder = [];
      const curveSegments = options.curveSegments !== void 0 ? options.curveSegments : 12;
      const steps = options.steps !== void 0 ? options.steps : 1;
      const depth2 = options.depth !== void 0 ? options.depth : 1;
      let bevelEnabled = options.bevelEnabled !== void 0 ? options.bevelEnabled : true;
      let bevelThickness = options.bevelThickness !== void 0 ? options.bevelThickness : 0.2;
      let bevelSize = options.bevelSize !== void 0 ? options.bevelSize : bevelThickness - 0.1;
      let bevelOffset = options.bevelOffset !== void 0 ? options.bevelOffset : 0;
      let bevelSegments = options.bevelSegments !== void 0 ? options.bevelSegments : 3;
      const extrudePath = options.extrudePath;
      const uvgen = options.UVGenerator !== void 0 ? options.UVGenerator : WorldUVGenerator;
      let extrudePts, extrudeByPath = false;
      let splineTube, binormal, normal2, position2;
      if (extrudePath) {
        extrudePts = extrudePath.getSpacedPoints(steps);
        extrudeByPath = true;
        bevelEnabled = false;
        splineTube = extrudePath.computeFrenetFrames(steps, false);
        binormal = new Vector32();
        normal2 = new Vector32();
        position2 = new Vector32();
      }
      if (!bevelEnabled) {
        bevelSegments = 0;
        bevelThickness = 0;
        bevelSize = 0;
        bevelOffset = 0;
      }
      const shapePoints = shape.extractPoints(curveSegments);
      let vertices = shapePoints.shape;
      const holes = shapePoints.holes;
      const reverse = !ShapeUtils.isClockWise(vertices);
      if (reverse) {
        vertices = vertices.reverse();
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          if (ShapeUtils.isClockWise(ahole)) {
            holes[h] = ahole.reverse();
          }
        }
      }
      const faces = ShapeUtils.triangulateShape(vertices, holes);
      const contour = vertices;
      for (let h = 0, hl = holes.length; h < hl; h++) {
        const ahole = holes[h];
        vertices = vertices.concat(ahole);
      }
      function scalePt2(pt, vec, size) {
        if (!vec) console.error("THREE.ExtrudeGeometry: vec does not exist");
        return pt.clone().addScaledVector(vec, size);
      }
      const vlen = vertices.length, flen = faces.length;
      function getBevelVec(inPt, inPrev, inNext) {
        let v_trans_x, v_trans_y, shrink_by;
        const v_prev_x = inPt.x - inPrev.x, v_prev_y = inPt.y - inPrev.y;
        const v_next_x = inNext.x - inPt.x, v_next_y = inNext.y - inPt.y;
        const v_prev_lensq = v_prev_x * v_prev_x + v_prev_y * v_prev_y;
        const collinear0 = v_prev_x * v_next_y - v_prev_y * v_next_x;
        if (Math.abs(collinear0) > Number.EPSILON) {
          const v_prev_len = Math.sqrt(v_prev_lensq);
          const v_next_len = Math.sqrt(v_next_x * v_next_x + v_next_y * v_next_y);
          const ptPrevShift_x = inPrev.x - v_prev_y / v_prev_len;
          const ptPrevShift_y = inPrev.y + v_prev_x / v_prev_len;
          const ptNextShift_x = inNext.x - v_next_y / v_next_len;
          const ptNextShift_y = inNext.y + v_next_x / v_next_len;
          const sf = ((ptNextShift_x - ptPrevShift_x) * v_next_y - (ptNextShift_y - ptPrevShift_y) * v_next_x) / (v_prev_x * v_next_y - v_prev_y * v_next_x);
          v_trans_x = ptPrevShift_x + v_prev_x * sf - inPt.x;
          v_trans_y = ptPrevShift_y + v_prev_y * sf - inPt.y;
          const v_trans_lensq = v_trans_x * v_trans_x + v_trans_y * v_trans_y;
          if (v_trans_lensq <= 2) {
            return new Vector22(v_trans_x, v_trans_y);
          } else {
            shrink_by = Math.sqrt(v_trans_lensq / 2);
          }
        } else {
          let direction_eq = false;
          if (v_prev_x > Number.EPSILON) {
            if (v_next_x > Number.EPSILON) {
              direction_eq = true;
            }
          } else {
            if (v_prev_x < -Number.EPSILON) {
              if (v_next_x < -Number.EPSILON) {
                direction_eq = true;
              }
            } else {
              if (Math.sign(v_prev_y) === Math.sign(v_next_y)) {
                direction_eq = true;
              }
            }
          }
          if (direction_eq) {
            v_trans_x = -v_prev_y;
            v_trans_y = v_prev_x;
            shrink_by = Math.sqrt(v_prev_lensq);
          } else {
            v_trans_x = v_prev_x;
            v_trans_y = v_prev_y;
            shrink_by = Math.sqrt(v_prev_lensq / 2);
          }
        }
        return new Vector22(v_trans_x / shrink_by, v_trans_y / shrink_by);
      }
      const contourMovements = [];
      for (let i = 0, il = contour.length, j = il - 1, k = i + 1; i < il; i++, j++, k++) {
        if (j === il) j = 0;
        if (k === il) k = 0;
        contourMovements[i] = getBevelVec(contour[i], contour[j], contour[k]);
      }
      const holesMovements = [];
      let oneHoleMovements, verticesMovements = contourMovements.concat();
      for (let h = 0, hl = holes.length; h < hl; h++) {
        const ahole = holes[h];
        oneHoleMovements = [];
        for (let i = 0, il = ahole.length, j = il - 1, k = i + 1; i < il; i++, j++, k++) {
          if (j === il) j = 0;
          if (k === il) k = 0;
          oneHoleMovements[i] = getBevelVec(ahole[i], ahole[j], ahole[k]);
        }
        holesMovements.push(oneHoleMovements);
        verticesMovements = verticesMovements.concat(oneHoleMovements);
      }
      for (let b = 0; b < bevelSegments; b++) {
        const t = b / bevelSegments;
        const z = bevelThickness * Math.cos(t * Math.PI / 2);
        const bs2 = bevelSize * Math.sin(t * Math.PI / 2) + bevelOffset;
        for (let i = 0, il = contour.length; i < il; i++) {
          const vert = scalePt2(contour[i], contourMovements[i], bs2);
          v(vert.x, vert.y, -z);
        }
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          oneHoleMovements = holesMovements[h];
          for (let i = 0, il = ahole.length; i < il; i++) {
            const vert = scalePt2(ahole[i], oneHoleMovements[i], bs2);
            v(vert.x, vert.y, -z);
          }
        }
      }
      const bs = bevelSize + bevelOffset;
      for (let i = 0; i < vlen; i++) {
        const vert = bevelEnabled ? scalePt2(vertices[i], verticesMovements[i], bs) : vertices[i];
        if (!extrudeByPath) {
          v(vert.x, vert.y, 0);
        } else {
          normal2.copy(splineTube.normals[0]).multiplyScalar(vert.x);
          binormal.copy(splineTube.binormals[0]).multiplyScalar(vert.y);
          position2.copy(extrudePts[0]).add(normal2).add(binormal);
          v(position2.x, position2.y, position2.z);
        }
      }
      for (let s = 1; s <= steps; s++) {
        for (let i = 0; i < vlen; i++) {
          const vert = bevelEnabled ? scalePt2(vertices[i], verticesMovements[i], bs) : vertices[i];
          if (!extrudeByPath) {
            v(vert.x, vert.y, depth2 / steps * s);
          } else {
            normal2.copy(splineTube.normals[s]).multiplyScalar(vert.x);
            binormal.copy(splineTube.binormals[s]).multiplyScalar(vert.y);
            position2.copy(extrudePts[s]).add(normal2).add(binormal);
            v(position2.x, position2.y, position2.z);
          }
        }
      }
      for (let b = bevelSegments - 1; b >= 0; b--) {
        const t = b / bevelSegments;
        const z = bevelThickness * Math.cos(t * Math.PI / 2);
        const bs2 = bevelSize * Math.sin(t * Math.PI / 2) + bevelOffset;
        for (let i = 0, il = contour.length; i < il; i++) {
          const vert = scalePt2(contour[i], contourMovements[i], bs2);
          v(vert.x, vert.y, depth2 + z);
        }
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          oneHoleMovements = holesMovements[h];
          for (let i = 0, il = ahole.length; i < il; i++) {
            const vert = scalePt2(ahole[i], oneHoleMovements[i], bs2);
            if (!extrudeByPath) {
              v(vert.x, vert.y, depth2 + z);
            } else {
              v(vert.x, vert.y + extrudePts[steps - 1].y, extrudePts[steps - 1].x + z);
            }
          }
        }
      }
      buildLidFaces();
      buildSideFaces();
      function buildLidFaces() {
        const start = verticesArray.length / 3;
        if (bevelEnabled) {
          let layer = 0;
          let offset = vlen * layer;
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[2] + offset, face[1] + offset, face[0] + offset);
          }
          layer = steps + bevelSegments * 2;
          offset = vlen * layer;
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[0] + offset, face[1] + offset, face[2] + offset);
          }
        } else {
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[2], face[1], face[0]);
          }
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[0] + vlen * steps, face[1] + vlen * steps, face[2] + vlen * steps);
          }
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 0);
      }
      function buildSideFaces() {
        const start = verticesArray.length / 3;
        let layeroffset = 0;
        sidewalls(contour, layeroffset);
        layeroffset += contour.length;
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          sidewalls(ahole, layeroffset);
          layeroffset += ahole.length;
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 1);
      }
      function sidewalls(contour2, layeroffset) {
        let i = contour2.length;
        while (--i >= 0) {
          const j = i;
          let k = i - 1;
          if (k < 0) k = contour2.length - 1;
          for (let s = 0, sl = steps + bevelSegments * 2; s < sl; s++) {
            const slen1 = vlen * s;
            const slen2 = vlen * (s + 1);
            const a = layeroffset + j + slen1, b = layeroffset + k + slen1, c = layeroffset + k + slen2, d = layeroffset + j + slen2;
            f4(a, b, c, d);
          }
        }
      }
      function v(x, y, z) {
        placeholder.push(x);
        placeholder.push(y);
        placeholder.push(z);
      }
      function f3(a, b, c) {
        addVertex(a);
        addVertex(b);
        addVertex(c);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateTopUV(scope, verticesArray, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[2]);
      }
      function f4(a, b, c, d) {
        addVertex(a);
        addVertex(b);
        addVertex(d);
        addVertex(b);
        addVertex(c);
        addVertex(d);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateSideWallUV(scope, verticesArray, nextIndex - 6, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[3]);
        addUV(uvs[1]);
        addUV(uvs[2]);
        addUV(uvs[3]);
      }
      function addVertex(index) {
        verticesArray.push(placeholder[index * 3 + 0]);
        verticesArray.push(placeholder[index * 3 + 1]);
        verticesArray.push(placeholder[index * 3 + 2]);
      }
      function addUV(vector2) {
        uvArray.push(vector2.x);
        uvArray.push(vector2.y);
      }
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    const shapes = this.parameters.shapes;
    const options = this.parameters.options;
    return toJSON$1(shapes, options, data);
  }
  static fromJSON(data, shapes) {
    const geometryShapes = [];
    for (let j = 0, jl = data.shapes.length; j < jl; j++) {
      const shape = shapes[data.shapes[j]];
      geometryShapes.push(shape);
    }
    const extrudePath = data.options.extrudePath;
    if (extrudePath !== void 0) {
      data.options.extrudePath = new Curves[extrudePath.type]().fromJSON(extrudePath);
    }
    return new _ExtrudeGeometry(geometryShapes, data.options);
  }
};
var WorldUVGenerator = {
  generateTopUV: function(geometry, vertices, indexA, indexB, indexC) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    return [
      new Vector22(a_x, a_y),
      new Vector22(b_x, b_y),
      new Vector22(c_x, c_y)
    ];
  },
  generateSideWallUV: function(geometry, vertices, indexA, indexB, indexC, indexD) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const a_z = vertices[indexA * 3 + 2];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const b_z = vertices[indexB * 3 + 2];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    const c_z = vertices[indexC * 3 + 2];
    const d_x = vertices[indexD * 3];
    const d_y = vertices[indexD * 3 + 1];
    const d_z = vertices[indexD * 3 + 2];
    if (Math.abs(a_y - b_y) < Math.abs(a_x - b_x)) {
      return [
        new Vector22(a_x, 1 - a_z),
        new Vector22(b_x, 1 - b_z),
        new Vector22(c_x, 1 - c_z),
        new Vector22(d_x, 1 - d_z)
      ];
    } else {
      return [
        new Vector22(a_y, 1 - a_z),
        new Vector22(b_y, 1 - b_z),
        new Vector22(c_y, 1 - c_z),
        new Vector22(d_y, 1 - d_z)
      ];
    }
  }
};
function toJSON$1(shapes, options, data) {
  data.shapes = [];
  if (Array.isArray(shapes)) {
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      data.shapes.push(shape.uuid);
    }
  } else {
    data.shapes.push(shapes.uuid);
  }
  data.options = Object.assign({}, options);
  if (options.extrudePath !== void 0) data.options.extrudePath = options.extrudePath.toJSON();
  return data;
}
var IcosahedronGeometry = class _IcosahedronGeometry extends PolyhedronGeometry {
  constructor(radius = 1, detail = 0) {
    const t = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ];
    const indices = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(vertices, indices, radius, detail);
    this.type = "IcosahedronGeometry";
    this.parameters = {
      radius,
      detail
    };
  }
  static fromJSON(data) {
    return new _IcosahedronGeometry(data.radius, data.detail);
  }
};
var OctahedronGeometry = class _OctahedronGeometry extends PolyhedronGeometry {
  constructor(radius = 1, detail = 0) {
    const vertices = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ];
    const indices = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(vertices, indices, radius, detail);
    this.type = "OctahedronGeometry";
    this.parameters = {
      radius,
      detail
    };
  }
  static fromJSON(data) {
    return new _OctahedronGeometry(data.radius, data.detail);
  }
};
var PlaneGeometry = class _PlaneGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width,
      height,
      widthSegments,
      heightSegments
    };
    const width_half = width / 2;
    const height_half = height / 2;
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const segment_width = width / gridX;
    const segment_height = height / gridY;
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segment_height - height_half;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segment_width - width_half;
        vertices.push(x, -y, 0);
        normals.push(0, 0, 1);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
  }
};
var RingGeometry = class _RingGeometry extends BufferGeometry {
  constructor(innerRadius = 0.5, outerRadius = 1, thetaSegments = 32, phiSegments = 1, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.type = "RingGeometry";
    this.parameters = {
      innerRadius,
      outerRadius,
      thetaSegments,
      phiSegments,
      thetaStart,
      thetaLength
    };
    thetaSegments = Math.max(3, thetaSegments);
    phiSegments = Math.max(1, phiSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let radius = innerRadius;
    const radiusStep = (outerRadius - innerRadius) / phiSegments;
    const vertex = new Vector32();
    const uv2 = new Vector22();
    for (let j = 0; j <= phiSegments; j++) {
      for (let i = 0; i <= thetaSegments; i++) {
        const segment = thetaStart + i / thetaSegments * thetaLength;
        vertex.x = radius * Math.cos(segment);
        vertex.y = radius * Math.sin(segment);
        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(0, 0, 1);
        uv2.x = (vertex.x / outerRadius + 1) / 2;
        uv2.y = (vertex.y / outerRadius + 1) / 2;
        uvs.push(uv2.x, uv2.y);
      }
      radius += radiusStep;
    }
    for (let j = 0; j < phiSegments; j++) {
      const thetaSegmentLevel = j * (thetaSegments + 1);
      for (let i = 0; i < thetaSegments; i++) {
        const segment = i + thetaSegmentLevel;
        const a = segment;
        const b = segment + thetaSegments + 1;
        const c = segment + thetaSegments + 2;
        const d = segment + 1;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _RingGeometry(data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength);
  }
};
var ShapeGeometry = class _ShapeGeometry extends BufferGeometry {
  constructor(shapes = new Shape([new Vector22(0, 0.5), new Vector22(-0.5, -0.5), new Vector22(0.5, -0.5)]), curveSegments = 12) {
    super();
    this.type = "ShapeGeometry";
    this.parameters = {
      shapes,
      curveSegments
    };
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let groupStart = 0;
    let groupCount = 0;
    if (Array.isArray(shapes) === false) {
      addShape(shapes);
    } else {
      for (let i = 0; i < shapes.length; i++) {
        addShape(shapes[i]);
        this.addGroup(groupStart, groupCount, i);
        groupStart += groupCount;
        groupCount = 0;
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function addShape(shape) {
      const indexOffset = vertices.length / 3;
      const points = shape.extractPoints(curveSegments);
      let shapeVertices = points.shape;
      const shapeHoles = points.holes;
      if (ShapeUtils.isClockWise(shapeVertices) === false) {
        shapeVertices = shapeVertices.reverse();
      }
      for (let i = 0, l = shapeHoles.length; i < l; i++) {
        const shapeHole = shapeHoles[i];
        if (ShapeUtils.isClockWise(shapeHole) === true) {
          shapeHoles[i] = shapeHole.reverse();
        }
      }
      const faces = ShapeUtils.triangulateShape(shapeVertices, shapeHoles);
      for (let i = 0, l = shapeHoles.length; i < l; i++) {
        const shapeHole = shapeHoles[i];
        shapeVertices = shapeVertices.concat(shapeHole);
      }
      for (let i = 0, l = shapeVertices.length; i < l; i++) {
        const vertex = shapeVertices[i];
        vertices.push(vertex.x, vertex.y, 0);
        normals.push(0, 0, 1);
        uvs.push(vertex.x, vertex.y);
      }
      for (let i = 0, l = faces.length; i < l; i++) {
        const face = faces[i];
        const a = face[0] + indexOffset;
        const b = face[1] + indexOffset;
        const c = face[2] + indexOffset;
        indices.push(a, b, c);
        groupCount += 3;
      }
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    const shapes = this.parameters.shapes;
    return toJSON(shapes, data);
  }
  static fromJSON(data, shapes) {
    const geometryShapes = [];
    for (let j = 0, jl = data.shapes.length; j < jl; j++) {
      const shape = shapes[data.shapes[j]];
      geometryShapes.push(shape);
    }
    return new _ShapeGeometry(geometryShapes, data.curveSegments);
  }
};
function toJSON(shapes, data) {
  data.shapes = [];
  if (Array.isArray(shapes)) {
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      data.shapes.push(shape.uuid);
    }
  } else {
    data.shapes.push(shapes.uuid);
  }
  return data;
}
var SphereGeometry = class _SphereGeometry extends BufferGeometry {
  constructor(radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
    super();
    this.type = "SphereGeometry";
    this.parameters = {
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength
    };
    widthSegments = Math.max(3, Math.floor(widthSegments));
    heightSegments = Math.max(2, Math.floor(heightSegments));
    const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
    let index = 0;
    const grid = [];
    const vertex = new Vector32();
    const normal2 = new Vector32();
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy <= heightSegments; iy++) {
      const verticesRow = [];
      const v = iy / heightSegments;
      let uOffset = 0;
      if (iy === 0 && thetaStart === 0) {
        uOffset = 0.5 / widthSegments;
      } else if (iy === heightSegments && thetaEnd === Math.PI) {
        uOffset = -0.5 / widthSegments;
      }
      for (let ix = 0; ix <= widthSegments; ix++) {
        const u = ix / widthSegments;
        vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
        vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
        vertices.push(vertex.x, vertex.y, vertex.z);
        normal2.copy(vertex).normalize();
        normals.push(normal2.x, normal2.y, normal2.z);
        uvs.push(u + uOffset, 1 - v);
        verticesRow.push(index++);
      }
      grid.push(verticesRow);
    }
    for (let iy = 0; iy < heightSegments; iy++) {
      for (let ix = 0; ix < widthSegments; ix++) {
        const a = grid[iy][ix + 1];
        const b = grid[iy][ix];
        const c = grid[iy + 1][ix];
        const d = grid[iy + 1][ix + 1];
        if (iy !== 0 || thetaStart > 0) indices.push(a, b, d);
        if (iy !== heightSegments - 1 || thetaEnd < Math.PI) indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _SphereGeometry(data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength);
  }
};
var TetrahedronGeometry = class _TetrahedronGeometry extends PolyhedronGeometry {
  constructor(radius = 1, detail = 0) {
    const vertices = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ];
    const indices = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(vertices, indices, radius, detail);
    this.type = "TetrahedronGeometry";
    this.parameters = {
      radius,
      detail
    };
  }
  static fromJSON(data) {
    return new _TetrahedronGeometry(data.radius, data.detail);
  }
};
var TorusGeometry = class _TorusGeometry extends BufferGeometry {
  constructor(radius = 1, tube = 0.4, radialSegments = 12, tubularSegments = 48, arc = Math.PI * 2) {
    super();
    this.type = "TorusGeometry";
    this.parameters = {
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc
    };
    radialSegments = Math.floor(radialSegments);
    tubularSegments = Math.floor(tubularSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    const center = new Vector32();
    const vertex = new Vector32();
    const normal2 = new Vector32();
    for (let j = 0; j <= radialSegments; j++) {
      for (let i = 0; i <= tubularSegments; i++) {
        const u = i / tubularSegments * arc;
        const v = j / radialSegments * Math.PI * 2;
        vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
        vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
        vertex.z = tube * Math.sin(v);
        vertices.push(vertex.x, vertex.y, vertex.z);
        center.x = radius * Math.cos(u);
        center.y = radius * Math.sin(u);
        normal2.subVectors(vertex, center).normalize();
        normals.push(normal2.x, normal2.y, normal2.z);
        uvs.push(i / tubularSegments);
        uvs.push(j / radialSegments);
      }
    }
    for (let j = 1; j <= radialSegments; j++) {
      for (let i = 1; i <= tubularSegments; i++) {
        const a = (tubularSegments + 1) * j + i - 1;
        const b = (tubularSegments + 1) * (j - 1) + i - 1;
        const c = (tubularSegments + 1) * (j - 1) + i;
        const d = (tubularSegments + 1) * j + i;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _TorusGeometry(data.radius, data.tube, data.radialSegments, data.tubularSegments, data.arc);
  }
};
var TorusKnotGeometry = class _TorusKnotGeometry extends BufferGeometry {
  constructor(radius = 1, tube = 0.4, tubularSegments = 64, radialSegments = 8, p = 2, q = 3) {
    super();
    this.type = "TorusKnotGeometry";
    this.parameters = {
      radius,
      tube,
      tubularSegments,
      radialSegments,
      p,
      q
    };
    tubularSegments = Math.floor(tubularSegments);
    radialSegments = Math.floor(radialSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    const vertex = new Vector32();
    const normal2 = new Vector32();
    const P1 = new Vector32();
    const P2 = new Vector32();
    const B = new Vector32();
    const T = new Vector32();
    const N = new Vector32();
    for (let i = 0; i <= tubularSegments; ++i) {
      const u = i / tubularSegments * p * Math.PI * 2;
      calculatePositionOnCurve(u, p, q, radius, P1);
      calculatePositionOnCurve(u + 0.01, p, q, radius, P2);
      T.subVectors(P2, P1);
      N.addVectors(P2, P1);
      B.crossVectors(T, N);
      N.crossVectors(B, T);
      B.normalize();
      N.normalize();
      for (let j = 0; j <= radialSegments; ++j) {
        const v = j / radialSegments * Math.PI * 2;
        const cx = -tube * Math.cos(v);
        const cy = tube * Math.sin(v);
        vertex.x = P1.x + (cx * N.x + cy * B.x);
        vertex.y = P1.y + (cx * N.y + cy * B.y);
        vertex.z = P1.z + (cx * N.z + cy * B.z);
        vertices.push(vertex.x, vertex.y, vertex.z);
        normal2.subVectors(vertex, P1).normalize();
        normals.push(normal2.x, normal2.y, normal2.z);
        uvs.push(i / tubularSegments);
        uvs.push(j / radialSegments);
      }
    }
    for (let j = 1; j <= tubularSegments; j++) {
      for (let i = 1; i <= radialSegments; i++) {
        const a = (radialSegments + 1) * (j - 1) + (i - 1);
        const b = (radialSegments + 1) * j + (i - 1);
        const c = (radialSegments + 1) * j + i;
        const d = (radialSegments + 1) * (j - 1) + i;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function calculatePositionOnCurve(u, p2, q2, radius2, position) {
      const cu = Math.cos(u);
      const su = Math.sin(u);
      const quOverP = q2 / p2 * u;
      const cs = Math.cos(quOverP);
      position.x = radius2 * (2 + cs) * 0.5 * cu;
      position.y = radius2 * (2 + cs) * su * 0.5;
      position.z = radius2 * Math.sin(quOverP) * 0.5;
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  static fromJSON(data) {
    return new _TorusKnotGeometry(data.radius, data.tube, data.tubularSegments, data.radialSegments, data.p, data.q);
  }
};
var TubeGeometry = class _TubeGeometry extends BufferGeometry {
  constructor(path = new QuadraticBezierCurve3(new Vector32(-1, -1, 0), new Vector32(-1, 1, 0), new Vector32(1, 1, 0)), tubularSegments = 64, radius = 1, radialSegments = 8, closed = false) {
    super();
    this.type = "TubeGeometry";
    this.parameters = {
      path,
      tubularSegments,
      radius,
      radialSegments,
      closed
    };
    const frames = path.computeFrenetFrames(tubularSegments, closed);
    this.tangents = frames.tangents;
    this.normals = frames.normals;
    this.binormals = frames.binormals;
    const vertex = new Vector32();
    const normal2 = new Vector32();
    const uv2 = new Vector22();
    let P = new Vector32();
    const vertices = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    generateBufferData();
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function generateBufferData() {
      for (let i = 0; i < tubularSegments; i++) {
        generateSegment(i);
      }
      generateSegment(closed === false ? tubularSegments : 0);
      generateUVs();
      generateIndices();
    }
    function generateSegment(i) {
      P = path.getPointAt(i / tubularSegments, P);
      const N = frames.normals[i];
      const B = frames.binormals[i];
      for (let j = 0; j <= radialSegments; j++) {
        const v = j / radialSegments * Math.PI * 2;
        const sin2 = Math.sin(v);
        const cos2 = -Math.cos(v);
        normal2.x = cos2 * N.x + sin2 * B.x;
        normal2.y = cos2 * N.y + sin2 * B.y;
        normal2.z = cos2 * N.z + sin2 * B.z;
        normal2.normalize();
        normals.push(normal2.x, normal2.y, normal2.z);
        vertex.x = P.x + radius * normal2.x;
        vertex.y = P.y + radius * normal2.y;
        vertex.z = P.z + radius * normal2.z;
        vertices.push(vertex.x, vertex.y, vertex.z);
      }
    }
    function generateIndices() {
      for (let j = 1; j <= tubularSegments; j++) {
        for (let i = 1; i <= radialSegments; i++) {
          const a = (radialSegments + 1) * (j - 1) + (i - 1);
          const b = (radialSegments + 1) * j + (i - 1);
          const c = (radialSegments + 1) * j + i;
          const d = (radialSegments + 1) * (j - 1) + i;
          indices.push(a, b, d);
          indices.push(b, c, d);
        }
      }
    }
    function generateUVs() {
      for (let i = 0; i <= tubularSegments; i++) {
        for (let j = 0; j <= radialSegments; j++) {
          uv2.x = i / tubularSegments;
          uv2.y = j / radialSegments;
          uvs.push(uv2.x, uv2.y);
        }
      }
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.path = this.parameters.path.toJSON();
    return data;
  }
  static fromJSON(data) {
    return new _TubeGeometry(
      new Curves[data.path.type]().fromJSON(data.path),
      data.tubularSegments,
      data.radius,
      data.radialSegments,
      data.closed
    );
  }
};
var WireframeGeometry = class extends BufferGeometry {
  constructor(geometry = null) {
    super();
    this.type = "WireframeGeometry";
    this.parameters = {
      geometry
    };
    if (geometry !== null) {
      const vertices = [];
      const edges = /* @__PURE__ */ new Set();
      const start = new Vector32();
      const end = new Vector32();
      if (geometry.index !== null) {
        const position = geometry.attributes.position;
        const indices = geometry.index;
        let groups = geometry.groups;
        if (groups.length === 0) {
          groups = [{ start: 0, count: indices.count, materialIndex: 0 }];
        }
        for (let o = 0, ol = groups.length; o < ol; ++o) {
          const group = groups[o];
          const groupStart = group.start;
          const groupCount = group.count;
          for (let i = groupStart, l = groupStart + groupCount; i < l; i += 3) {
            for (let j = 0; j < 3; j++) {
              const index1 = indices.getX(i + j);
              const index2 = indices.getX(i + (j + 1) % 3);
              start.fromBufferAttribute(position, index1);
              end.fromBufferAttribute(position, index2);
              if (isUniqueEdge(start, end, edges) === true) {
                vertices.push(start.x, start.y, start.z);
                vertices.push(end.x, end.y, end.z);
              }
            }
          }
        }
      } else {
        const position = geometry.attributes.position;
        for (let i = 0, l = position.count / 3; i < l; i++) {
          for (let j = 0; j < 3; j++) {
            const index1 = 3 * i + j;
            const index2 = 3 * i + (j + 1) % 3;
            start.fromBufferAttribute(position, index1);
            end.fromBufferAttribute(position, index2);
            if (isUniqueEdge(start, end, edges) === true) {
              vertices.push(start.x, start.y, start.z);
              vertices.push(end.x, end.y, end.z);
            }
          }
        }
      }
      this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    }
  }
  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }
};
function isUniqueEdge(start, end, edges) {
  const hash1 = `${start.x},${start.y},${start.z}-${end.x},${end.y},${end.z}`;
  const hash2 = `${end.x},${end.y},${end.z}-${start.x},${start.y},${start.z}`;
  if (edges.has(hash1) === true || edges.has(hash2) === true) {
    return false;
  } else {
    edges.add(hash1);
    edges.add(hash2);
    return true;
  }
}
var Geometries$1 = Object.freeze({
  __proto__: null,
  BoxGeometry,
  CapsuleGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  IcosahedronGeometry,
  LatheGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  PolyhedronGeometry,
  RingGeometry,
  ShapeGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  TubeGeometry,
  WireframeGeometry
});
var ShadowMaterial = class extends Material {
  static get type() {
    return "ShadowMaterial";
  }
  constructor(parameters) {
    super();
    this.isShadowMaterial = true;
    this.color = new Color2(0);
    this.transparent = true;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.fog = source.fog;
    return this;
  }
};
var MeshStandardMaterial = class extends Material {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshStandardMaterial = true;
    this.defines = { "STANDARD": "" };
    this.color = new Color2(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color2(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "STANDARD": "" };
    this.color.copy(source.color);
    this.roughness = source.roughness;
    this.metalness = source.metalness;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.roughnessMap = source.roughnessMap;
    this.metalnessMap = source.metalnessMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.envMapIntensity = source.envMapIntensity;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
};
var MeshPhysicalMaterial = class extends MeshStandardMaterial {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshPhysicalMaterial = true;
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.anisotropyRotation = 0;
    this.anisotropyMap = null;
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new Vector22(1, 1);
    this.clearcoatNormalMap = null;
    this.ior = 1.5;
    Object.defineProperty(this, "reflectivity", {
      get: function() {
        return clamp$1(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(reflectivity) {
        this.ior = (1 + 0.4 * reflectivity) / (1 - 0.4 * reflectivity);
      }
    });
    this.iridescenceMap = null;
    this.iridescenceIOR = 1.3;
    this.iridescenceThicknessRange = [100, 400];
    this.iridescenceThicknessMap = null;
    this.sheenColor = new Color2(0);
    this.sheenColorMap = null;
    this.sheenRoughness = 1;
    this.sheenRoughnessMap = null;
    this.transmissionMap = null;
    this.thickness = 0;
    this.thicknessMap = null;
    this.attenuationDistance = Infinity;
    this.attenuationColor = new Color2(1, 1, 1);
    this.specularIntensity = 1;
    this.specularIntensityMap = null;
    this.specularColor = new Color2(1, 1, 1);
    this.specularColorMap = null;
    this._anisotropy = 0;
    this._clearcoat = 0;
    this._dispersion = 0;
    this._iridescence = 0;
    this._sheen = 0;
    this._transmission = 0;
    this.setValues(parameters);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(value) {
    if (this._anisotropy > 0 !== value > 0) {
      this.version++;
    }
    this._anisotropy = value;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(value) {
    if (this._clearcoat > 0 !== value > 0) {
      this.version++;
    }
    this._clearcoat = value;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(value) {
    if (this._iridescence > 0 !== value > 0) {
      this.version++;
    }
    this._iridescence = value;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(value) {
    if (this._dispersion > 0 !== value > 0) {
      this.version++;
    }
    this._dispersion = value;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(value) {
    if (this._sheen > 0 !== value > 0) {
      this.version++;
    }
    this._sheen = value;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(value) {
    if (this._transmission > 0 !== value > 0) {
      this.version++;
    }
    this._transmission = value;
  }
  copy(source) {
    super.copy(source);
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.anisotropy = source.anisotropy;
    this.anisotropyRotation = source.anisotropyRotation;
    this.anisotropyMap = source.anisotropyMap;
    this.clearcoat = source.clearcoat;
    this.clearcoatMap = source.clearcoatMap;
    this.clearcoatRoughness = source.clearcoatRoughness;
    this.clearcoatRoughnessMap = source.clearcoatRoughnessMap;
    this.clearcoatNormalMap = source.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(source.clearcoatNormalScale);
    this.dispersion = source.dispersion;
    this.ior = source.ior;
    this.iridescence = source.iridescence;
    this.iridescenceMap = source.iridescenceMap;
    this.iridescenceIOR = source.iridescenceIOR;
    this.iridescenceThicknessRange = [...source.iridescenceThicknessRange];
    this.iridescenceThicknessMap = source.iridescenceThicknessMap;
    this.sheen = source.sheen;
    this.sheenColor.copy(source.sheenColor);
    this.sheenColorMap = source.sheenColorMap;
    this.sheenRoughness = source.sheenRoughness;
    this.sheenRoughnessMap = source.sheenRoughnessMap;
    this.transmission = source.transmission;
    this.transmissionMap = source.transmissionMap;
    this.thickness = source.thickness;
    this.thicknessMap = source.thicknessMap;
    this.attenuationDistance = source.attenuationDistance;
    this.attenuationColor.copy(source.attenuationColor);
    this.specularIntensity = source.specularIntensity;
    this.specularIntensityMap = source.specularIntensityMap;
    this.specularColor.copy(source.specularColor);
    this.specularColorMap = source.specularColorMap;
    return this;
  }
};
var MeshPhongMaterial = class extends Material {
  static get type() {
    return "MeshPhongMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshPhongMaterial = true;
    this.color = new Color2(16777215);
    this.specular = new Color2(1118481);
    this.shininess = 30;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color2(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.specular.copy(source.specular);
    this.shininess = source.shininess;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
};
var MeshToonMaterial = class extends Material {
  static get type() {
    return "MeshToonMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshToonMaterial = true;
    this.defines = { "TOON": "" };
    this.color = new Color2(16777215);
    this.map = null;
    this.gradientMap = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color2(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.gradientMap = source.gradientMap;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.alphaMap = source.alphaMap;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.fog = source.fog;
    return this;
  }
};
var MeshNormalMaterial = class extends Material {
  static get type() {
    return "MeshNormalMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshNormalMaterial = true;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.flatShading = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.flatShading = source.flatShading;
    return this;
  }
};
var MeshLambertMaterial = class extends Material {
  static get type() {
    return "MeshLambertMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshLambertMaterial = true;
    this.color = new Color2(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color2(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapRotation = new Euler();
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapRotation.copy(source.envMapRotation);
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
};
var MeshMatcapMaterial = class extends Material {
  static get type() {
    return "MeshMatcapMaterial";
  }
  constructor(parameters) {
    super();
    this.isMeshMatcapMaterial = true;
    this.defines = { "MATCAP": "" };
    this.color = new Color2(16777215);
    this.matcap = null;
    this.map = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector22(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.flatShading = false;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "MATCAP": "" };
    this.color.copy(source.color);
    this.matcap = source.matcap;
    this.map = source.map;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.alphaMap = source.alphaMap;
    this.flatShading = source.flatShading;
    this.fog = source.fog;
    return this;
  }
};
var LineDashedMaterial = class extends LineBasicMaterial {
  static get type() {
    return "LineDashedMaterial";
  }
  constructor(parameters) {
    super();
    this.isLineDashedMaterial = true;
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.scale = source.scale;
    this.dashSize = source.dashSize;
    this.gapSize = source.gapSize;
    return this;
  }
};
function convertArray(array, type, forceClone) {
  if (!array || // let 'undefined' and 'null' pass
  !forceClone && array.constructor === type) return array;
  if (typeof type.BYTES_PER_ELEMENT === "number") {
    return new type(array);
  }
  return Array.prototype.slice.call(array);
}
function isTypedArray(object) {
  return ArrayBuffer.isView(object) && !(object instanceof DataView);
}
var Interpolant = class {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    this.parameterPositions = parameterPositions;
    this._cachedIndex = 0;
    this.resultBuffer = resultBuffer !== void 0 ? resultBuffer : new sampleValues.constructor(sampleSize);
    this.sampleValues = sampleValues;
    this.valueSize = sampleSize;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const pp = this.parameterPositions;
    let i1 = this._cachedIndex, t1 = pp[i1], t0 = pp[i1 - 1];
    validate_interval: {
      seek: {
        let right;
        linear_scan: {
          forward_scan: if (!(t < t1)) {
            for (let giveUpAt = i1 + 2; ; ) {
              if (t1 === void 0) {
                if (t < t0) break forward_scan;
                i1 = pp.length;
                this._cachedIndex = i1;
                return this.copySampleValue_(i1 - 1);
              }
              if (i1 === giveUpAt) break;
              t0 = t1;
              t1 = pp[++i1];
              if (t < t1) {
                break seek;
              }
            }
            right = pp.length;
            break linear_scan;
          }
          if (!(t >= t0)) {
            const t1global = pp[1];
            if (t < t1global) {
              i1 = 2;
              t0 = t1global;
            }
            for (let giveUpAt = i1 - 2; ; ) {
              if (t0 === void 0) {
                this._cachedIndex = 0;
                return this.copySampleValue_(0);
              }
              if (i1 === giveUpAt) break;
              t1 = t0;
              t0 = pp[--i1 - 1];
              if (t >= t0) {
                break seek;
              }
            }
            right = i1;
            i1 = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        while (i1 < right) {
          const mid = i1 + right >>> 1;
          if (t < pp[mid]) {
            right = mid;
          } else {
            i1 = mid + 1;
          }
        }
        t1 = pp[i1];
        t0 = pp[i1 - 1];
        if (t0 === void 0) {
          this._cachedIndex = 0;
          return this.copySampleValue_(0);
        }
        if (t1 === void 0) {
          i1 = pp.length;
          this._cachedIndex = i1;
          return this.copySampleValue_(i1 - 1);
        }
      }
      this._cachedIndex = i1;
      this.intervalChanged_(i1, t0, t1);
    }
    return this.interpolate_(i1, t0, t, t1);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset = index * stride;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset + i];
    }
    return result;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
};
var CubicInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    };
  }
  intervalChanged_(i1, t0, t1) {
    const pp = this.parameterPositions;
    let iPrev = i1 - 2, iNext = i1 + 1, tPrev = pp[iPrev], tNext = pp[iNext];
    if (tPrev === void 0) {
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          iPrev = i1;
          tPrev = 2 * t0 - t1;
          break;
        case WrapAroundEnding:
          iPrev = pp.length - 2;
          tPrev = t0 + pp[iPrev] - pp[iPrev + 1];
          break;
        default:
          iPrev = i1;
          tPrev = t1;
      }
    }
    if (tNext === void 0) {
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          iNext = i1;
          tNext = 2 * t1 - t0;
          break;
        case WrapAroundEnding:
          iNext = 1;
          tNext = t1 + pp[1] - pp[0];
          break;
        default:
          iNext = i1 - 1;
          tNext = t0;
      }
    }
    const halfDt = (t1 - t0) * 0.5, stride = this.valueSize;
    this._weightPrev = halfDt / (t0 - tPrev);
    this._weightNext = halfDt / (tNext - t1);
    this._offsetPrev = iPrev * stride;
    this._offsetNext = iNext * stride;
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, o1 = i1 * stride, o0 = o1 - stride, oP = this._offsetPrev, oN = this._offsetNext, wP = this._weightPrev, wN = this._weightNext, p = (t - t0) / (t1 - t0), pp = p * p, ppp = pp * p;
    const sP = -wP * ppp + 2 * wP * pp - wP * p;
    const s0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p + 1;
    const s1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p;
    const sN = wN * ppp - wN * pp;
    for (let i = 0; i !== stride; ++i) {
      result[i] = sP * values[oP + i] + s0 * values[o0 + i] + s1 * values[o1 + i] + sN * values[oN + i];
    }
    return result;
  }
};
var LinearInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset1 = i1 * stride, offset0 = offset1 - stride, weight1 = (t - t0) / (t1 - t0), weight0 = 1 - weight1;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
    }
    return result;
  }
};
var DiscreteInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1) {
    return this.copySampleValue_(i1 - 1);
  }
};
var KeyframeTrack = class {
  constructor(name, times, values, interpolation) {
    if (name === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (times === void 0 || times.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + name);
    this.name = name;
    this.times = convertArray(times, this.TimeBufferType);
    this.values = convertArray(values, this.ValueBufferType);
    this.setInterpolation(interpolation || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(track) {
    const trackType = track.constructor;
    let json;
    if (trackType.toJSON !== this.toJSON) {
      json = trackType.toJSON(track);
    } else {
      json = {
        "name": track.name,
        "times": convertArray(track.times, Array),
        "values": convertArray(track.values, Array)
      };
      const interpolation = track.getInterpolation();
      if (interpolation !== track.DefaultInterpolation) {
        json.interpolation = interpolation;
      }
    }
    json.type = track.ValueTypeName;
    return json;
  }
  InterpolantFactoryMethodDiscrete(result) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  InterpolantFactoryMethodLinear(result) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  InterpolantFactoryMethodSmooth(result) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  setInterpolation(interpolation) {
    let factoryMethod;
    switch (interpolation) {
      case InterpolateDiscrete:
        factoryMethod = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        factoryMethod = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        factoryMethod = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (factoryMethod === void 0) {
      const message = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) {
        if (interpolation !== this.DefaultInterpolation) {
          this.setInterpolation(this.DefaultInterpolation);
        } else {
          throw new Error(message);
        }
      }
      console.warn("THREE.KeyframeTrack:", message);
      return this;
    }
    this.createInterpolant = factoryMethod;
    return this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(timeOffset) {
    if (timeOffset !== 0) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] += timeOffset;
      }
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(timeScale) {
    if (timeScale !== 1) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] *= timeScale;
      }
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(startTime, endTime) {
    const times = this.times, nKeys = times.length;
    let from = 0, to = nKeys - 1;
    while (from !== nKeys && times[from] < startTime) {
      ++from;
    }
    while (to !== -1 && times[to] > endTime) {
      --to;
    }
    ++to;
    if (from !== 0 || to !== nKeys) {
      if (from >= to) {
        to = Math.max(to, 1);
        from = to - 1;
      }
      const stride = this.getValueSize();
      this.times = times.slice(from, to);
      this.values = this.values.slice(from * stride, to * stride);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let valid = true;
    const valueSize = this.getValueSize();
    if (valueSize - Math.floor(valueSize) !== 0) {
      console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
      valid = false;
    }
    const times = this.times, values = this.values, nKeys = times.length;
    if (nKeys === 0) {
      console.error("THREE.KeyframeTrack: Track is empty.", this);
      valid = false;
    }
    let prevTime = null;
    for (let i = 0; i !== nKeys; i++) {
      const currTime = times[i];
      if (typeof currTime === "number" && isNaN(currTime)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, i, currTime);
        valid = false;
        break;
      }
      if (prevTime !== null && prevTime > currTime) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, i, currTime, prevTime);
        valid = false;
        break;
      }
      prevTime = currTime;
    }
    if (values !== void 0) {
      if (isTypedArray(values)) {
        for (let i = 0, n = values.length; i !== n; ++i) {
          const value = values[i];
          if (isNaN(value)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, i, value);
            valid = false;
            break;
          }
        }
      }
    }
    return valid;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const times = this.times.slice(), values = this.values.slice(), stride = this.getValueSize(), smoothInterpolation = this.getInterpolation() === InterpolateSmooth, lastIndex = times.length - 1;
    let writeIndex = 1;
    for (let i = 1; i < lastIndex; ++i) {
      let keep = false;
      const time2 = times[i];
      const timeNext = times[i + 1];
      if (time2 !== timeNext && (i !== 1 || time2 !== times[0])) {
        if (!smoothInterpolation) {
          const offset = i * stride, offsetP = offset - stride, offsetN = offset + stride;
          for (let j = 0; j !== stride; ++j) {
            const value = values[offset + j];
            if (value !== values[offsetP + j] || value !== values[offsetN + j]) {
              keep = true;
              break;
            }
          }
        } else {
          keep = true;
        }
      }
      if (keep) {
        if (i !== writeIndex) {
          times[writeIndex] = times[i];
          const readOffset = i * stride, writeOffset = writeIndex * stride;
          for (let j = 0; j !== stride; ++j) {
            values[writeOffset + j] = values[readOffset + j];
          }
        }
        ++writeIndex;
      }
    }
    if (lastIndex > 0) {
      times[writeIndex] = times[lastIndex];
      for (let readOffset = lastIndex * stride, writeOffset = writeIndex * stride, j = 0; j !== stride; ++j) {
        values[writeOffset + j] = values[readOffset + j];
      }
      ++writeIndex;
    }
    if (writeIndex !== times.length) {
      this.times = times.slice(0, writeIndex);
      this.values = values.slice(0, writeIndex * stride);
    } else {
      this.times = times;
      this.values = values;
    }
    return this;
  }
  clone() {
    const times = this.times.slice();
    const values = this.values.slice();
    const TypedKeyframeTrack = this.constructor;
    const track = new TypedKeyframeTrack(this.name, times, values);
    track.createInterpolant = this.createInterpolant;
    return track;
  }
};
KeyframeTrack.prototype.TimeBufferType = Float32Array;
KeyframeTrack.prototype.ValueBufferType = Float32Array;
KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
var BooleanKeyframeTrack = class extends KeyframeTrack {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(name, times, values) {
    super(name, times, values);
  }
};
BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var ColorKeyframeTrack = class extends KeyframeTrack {
};
ColorKeyframeTrack.prototype.ValueTypeName = "color";
var NumberKeyframeTrack = class extends KeyframeTrack {
};
NumberKeyframeTrack.prototype.ValueTypeName = "number";
var QuaternionLinearInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, alpha = (t - t0) / (t1 - t0);
    let offset = i1 * stride;
    for (let end = offset + stride; offset !== end; offset += 4) {
      Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);
    }
    return result;
  }
};
var QuaternionKeyframeTrack = class extends KeyframeTrack {
  InterpolantFactoryMethodLinear(result) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
};
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var StringKeyframeTrack = class extends KeyframeTrack {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(name, times, values) {
    super(name, times, values);
  }
};
StringKeyframeTrack.prototype.ValueTypeName = "string";
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var VectorKeyframeTrack = class extends KeyframeTrack {
};
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
var LoadingManager = class {
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader) {
      handlers.push(regex, loader);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i = 0, l = handlers.length; i < l; i += 2) {
        const regex = handlers[i];
        const loader = handlers[i + 1];
        if (regex.global) regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader;
        }
      }
      return null;
    };
  }
};
var DefaultLoadingManager = new LoadingManager();
var Loader = class {
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  load() {
  }
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  parse() {
  }
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
};
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var _projScreenMatrix$2 = new Matrix4();
var _lightPositionWorld$1 = new Vector32();
var _lookTarget$1 = new Vector32();
var _projScreenMatrix$1 = new Matrix4();
var _lightPositionWorld = new Vector32();
var _lookTarget = new Vector32();
var OrthographicCamera = class extends Camera {
  constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
    super();
    this.isOrthographicCamera = true;
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    this.zoom = source.zoom;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    return this;
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const dx = (this.right - this.left) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (this.right + this.left) / 2;
    const cy = (this.top + this.bottom) / 2;
    let left = cx - dx;
    let right = cx + dx;
    let top = cy + dy;
    let bottom = cy - dy;
    if (this.view !== null && this.view.enabled) {
      const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      left += scaleW * this.view.offsetX;
      right = left + scaleW * this.view.width;
      top -= scaleH * this.view.offsetY;
      bottom = top - scaleH * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far, this.coordinateSystem);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.zoom = this.zoom;
    data.object.left = this.left;
    data.object.right = this.right;
    data.object.top = this.top;
    data.object.bottom = this.bottom;
    data.object.near = this.near;
    data.object.far = this.far;
    if (this.view !== null) data.object.view = Object.assign({}, this.view);
    return data;
  }
};
var _eyeRight = new Matrix4();
var _eyeLeft = new Matrix4();
var _projectionMatrix = new Matrix4();
var _position$1 = new Vector32();
var _quaternion$1 = new Quaternion();
var _scale$1 = new Vector32();
var _orientation$1 = new Vector32();
var _position = new Vector32();
var _quaternion = new Quaternion();
var _scale = new Vector32();
var _orientation = new Vector32();
var _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
var _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g");
var _wordChar = "[^" + _RESERVED_CHARS_RE + "]";
var _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
var _directoryRe = /((?:WC+[\/:])*)/.source.replace("WC", _wordChar);
var _nodeRe = /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot);
var _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar);
var _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar);
var _trackRe = new RegExp(
  "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
);
var _supportedObjectNames = ["material", "materials", "bones", "map"];
var Composite = class {
  constructor(targetGroup, path, optionalParsedPath) {
    const parsedPath = optionalParsedPath || PropertyBinding.parseTrackName(path);
    this._targetGroup = targetGroup;
    this._bindings = targetGroup.subscribe_(path, parsedPath);
  }
  getValue(array, offset) {
    this.bind();
    const firstValidIndex = this._targetGroup.nCachedObjects_, binding = this._bindings[firstValidIndex];
    if (binding !== void 0) binding.getValue(array, offset);
  }
  setValue(array, offset) {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].setValue(array, offset);
    }
  }
  bind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].bind();
    }
  }
  unbind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].unbind();
    }
  }
};
var PropertyBinding = class _PropertyBinding {
  constructor(rootNode, path, parsedPath) {
    this.path = path;
    this.parsedPath = parsedPath || _PropertyBinding.parseTrackName(path);
    this.node = _PropertyBinding.findNode(rootNode, this.parsedPath.nodeName);
    this.rootNode = rootNode;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  static create(root, path, parsedPath) {
    if (!(root && root.isAnimationObjectGroup)) {
      return new _PropertyBinding(root, path, parsedPath);
    } else {
      return new _PropertyBinding.Composite(root, path, parsedPath);
    }
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(name) {
    return name.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  static parseTrackName(trackName) {
    const matches = _trackRe.exec(trackName);
    if (matches === null) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + trackName);
    }
    const results = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: matches[2],
      objectName: matches[3],
      objectIndex: matches[4],
      propertyName: matches[5],
      // required
      propertyIndex: matches[6]
    };
    const lastDot = results.nodeName && results.nodeName.lastIndexOf(".");
    if (lastDot !== void 0 && lastDot !== -1) {
      const objectName = results.nodeName.substring(lastDot + 1);
      if (_supportedObjectNames.indexOf(objectName) !== -1) {
        results.nodeName = results.nodeName.substring(0, lastDot);
        results.objectName = objectName;
      }
    }
    if (results.propertyName === null || results.propertyName.length === 0) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + trackName);
    }
    return results;
  }
  static findNode(root, nodeName) {
    if (nodeName === void 0 || nodeName === "" || nodeName === "." || nodeName === -1 || nodeName === root.name || nodeName === root.uuid) {
      return root;
    }
    if (root.skeleton) {
      const bone = root.skeleton.getBoneByName(nodeName);
      if (bone !== void 0) {
        return bone;
      }
    }
    if (root.children) {
      const searchNodeSubtree = function(children) {
        for (let i = 0; i < children.length; i++) {
          const childNode = children[i];
          if (childNode.name === nodeName || childNode.uuid === nodeName) {
            return childNode;
          }
          const result = searchNodeSubtree(childNode.children);
          if (result) return result;
        }
        return null;
      };
      const subTreeNode = searchNodeSubtree(root.children);
      if (subTreeNode) {
        return subTreeNode;
      }
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(buffer2, offset) {
    buffer2[offset] = this.targetObject[this.propertyName];
  }
  _getValue_array(buffer2, offset) {
    const source = this.resolvedProperty;
    for (let i = 0, n = source.length; i !== n; ++i) {
      buffer2[offset++] = source[i];
    }
  }
  _getValue_arrayElement(buffer2, offset) {
    buffer2[offset] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(buffer2, offset) {
    this.resolvedProperty.toArray(buffer2, offset);
  }
  // Direct
  _setValue_direct(buffer2, offset) {
    this.targetObject[this.propertyName] = buffer2[offset];
  }
  _setValue_direct_setNeedsUpdate(buffer2, offset) {
    this.targetObject[this.propertyName] = buffer2[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(buffer2, offset) {
    this.targetObject[this.propertyName] = buffer2[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // EntireArray
  _setValue_array(buffer2, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer2[offset++];
    }
  }
  _setValue_array_setNeedsUpdate(buffer2, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer2[offset++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(buffer2, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer2[offset++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // ArrayElement
  _setValue_arrayElement(buffer2, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer2[offset];
  }
  _setValue_arrayElement_setNeedsUpdate(buffer2, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer2[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer2, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer2[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // HasToFromArray
  _setValue_fromArray(buffer2, offset) {
    this.resolvedProperty.fromArray(buffer2, offset);
  }
  _setValue_fromArray_setNeedsUpdate(buffer2, offset) {
    this.resolvedProperty.fromArray(buffer2, offset);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer2, offset) {
    this.resolvedProperty.fromArray(buffer2, offset);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(targetArray, offset) {
    this.bind();
    this.getValue(targetArray, offset);
  }
  _setValue_unbound(sourceArray, offset) {
    this.bind();
    this.setValue(sourceArray, offset);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let targetObject = this.node;
    const parsedPath = this.parsedPath;
    const objectName = parsedPath.objectName;
    const propertyName = parsedPath.propertyName;
    let propertyIndex = parsedPath.propertyIndex;
    if (!targetObject) {
      targetObject = _PropertyBinding.findNode(this.rootNode, parsedPath.nodeName);
      this.node = targetObject;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!targetObject) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (objectName) {
      let objectIndex = parsedPath.objectIndex;
      switch (objectName) {
        case "materials":
          if (!targetObject.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          targetObject = targetObject.material.materials;
          break;
        case "bones":
          if (!targetObject.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          targetObject = targetObject.skeleton.bones;
          for (let i = 0; i < targetObject.length; i++) {
            if (targetObject[i].name === objectIndex) {
              objectIndex = i;
              break;
            }
          }
          break;
        case "map":
          if ("map" in targetObject) {
            targetObject = targetObject.map;
            break;
          }
          if (!targetObject.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          targetObject = targetObject.material.map;
          break;
        default:
          if (targetObject[objectName] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          targetObject = targetObject[objectName];
      }
      if (objectIndex !== void 0) {
        if (targetObject[objectIndex] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, targetObject);
          return;
        }
        targetObject = targetObject[objectIndex];
      }
    }
    const nodeProperty = targetObject[propertyName];
    if (nodeProperty === void 0) {
      const nodeName = parsedPath.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + nodeName + "." + propertyName + " but it wasn't found.", targetObject);
      return;
    }
    let versioning = this.Versioning.None;
    this.targetObject = targetObject;
    if (targetObject.needsUpdate !== void 0) {
      versioning = this.Versioning.NeedsUpdate;
    } else if (targetObject.matrixWorldNeedsUpdate !== void 0) {
      versioning = this.Versioning.MatrixWorldNeedsUpdate;
    }
    let bindingType = this.BindingType.Direct;
    if (propertyIndex !== void 0) {
      if (propertyName === "morphTargetInfluences") {
        if (!targetObject.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!targetObject.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        if (targetObject.morphTargetDictionary[propertyIndex] !== void 0) {
          propertyIndex = targetObject.morphTargetDictionary[propertyIndex];
        }
      }
      bindingType = this.BindingType.ArrayElement;
      this.resolvedProperty = nodeProperty;
      this.propertyIndex = propertyIndex;
    } else if (nodeProperty.fromArray !== void 0 && nodeProperty.toArray !== void 0) {
      bindingType = this.BindingType.HasFromToArray;
      this.resolvedProperty = nodeProperty;
    } else if (Array.isArray(nodeProperty)) {
      bindingType = this.BindingType.EntireArray;
      this.resolvedProperty = nodeProperty;
    } else {
      this.propertyName = propertyName;
    }
    this.getValue = this.GetterByBindingType[bindingType];
    this.setValue = this.SetterByBindingTypeAndVersioning[bindingType][versioning];
  }
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
};
PropertyBinding.Composite = Composite;
PropertyBinding.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
PropertyBinding.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
PropertyBinding.prototype.GetterByBindingType = [
  PropertyBinding.prototype._getValue_direct,
  PropertyBinding.prototype._getValue_array,
  PropertyBinding.prototype._getValue_arrayElement,
  PropertyBinding.prototype._getValue_toArray
];
PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    PropertyBinding.prototype._setValue_direct,
    PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
    PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    PropertyBinding.prototype._setValue_array,
    PropertyBinding.prototype._setValue_array_setNeedsUpdate,
    PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    PropertyBinding.prototype._setValue_arrayElement,
    PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
    PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    PropertyBinding.prototype._setValue_fromArray,
    PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
    PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var _controlInterpolantsResultBuffer = new Float32Array(1);
var InstancedInterleavedBuffer = class extends InterleavedBuffer {
  constructor(array, stride, meshPerAttribute = 1) {
    super(array, stride);
    this.isInstancedInterleavedBuffer = true;
    this.meshPerAttribute = meshPerAttribute;
  }
  copy(source) {
    super.copy(source);
    this.meshPerAttribute = source.meshPerAttribute;
    return this;
  }
  clone(data) {
    const ib = super.clone(data);
    ib.meshPerAttribute = this.meshPerAttribute;
    return ib;
  }
  toJSON(data) {
    const json = super.toJSON(data);
    json.isInstancedInterleavedBuffer = true;
    json.meshPerAttribute = this.meshPerAttribute;
    return json;
  }
};
var _matrix = new Matrix4();
var _vector$4 = new Vector22();
var _startP = new Vector32();
var _startEnd = new Vector32();
var _vector$3 = new Vector32();
var _vector$2 = new Vector32();
var _boneMatrix = new Matrix4();
var _matrixWorldInv = new Matrix4();
var _vector$1 = new Vector32();
var _color1 = new Color2();
var _color2 = new Color2();
var _v1 = new Vector32();
var _v2 = new Vector32();
var _v3 = new Vector32();
var _vector = new Vector32();
var _camera$1 = new Camera();
var _box = new Box3();
var _axis = new Vector32();
var refreshUniforms = [
  "alphaMap",
  "alphaTest",
  "anisotropy",
  "anisotropyMap",
  "anisotropyRotation",
  "aoMap",
  "attenuationColor",
  "attenuationDistance",
  "bumpMap",
  "clearcoat",
  "clearcoatMap",
  "clearcoatNormalMap",
  "clearcoatNormalScale",
  "clearcoatRoughness",
  "color",
  "dispersion",
  "displacementMap",
  "emissive",
  "emissiveMap",
  "envMap",
  "gradientMap",
  "ior",
  "iridescence",
  "iridescenceIOR",
  "iridescenceMap",
  "iridescenceThicknessMap",
  "lightMap",
  "map",
  "matcap",
  "metalness",
  "metalnessMap",
  "normalMap",
  "normalScale",
  "opacity",
  "roughness",
  "roughnessMap",
  "sheen",
  "sheenColor",
  "sheenColorMap",
  "sheenRoughnessMap",
  "shininess",
  "specular",
  "specularColor",
  "specularColorMap",
  "specularIntensity",
  "specularIntensityMap",
  "specularMap",
  "thickness",
  "transmission",
  "transmissionMap"
];
var NodeMaterialObserver = class {
  constructor(builder) {
    this.renderObjects = /* @__PURE__ */ new WeakMap();
    this.hasNode = this.containsNode(builder);
    this.hasAnimation = builder.object.isSkinnedMesh === true;
    this.refreshUniforms = refreshUniforms;
    this.renderId = 0;
  }
  firstInitialization(renderObject) {
    const hasInitialized = this.renderObjects.has(renderObject);
    if (hasInitialized === false) {
      this.getRenderObjectData(renderObject);
      return true;
    }
    return false;
  }
  getRenderObjectData(renderObject) {
    let data = this.renderObjects.get(renderObject);
    if (data === void 0) {
      const { geometry, material } = renderObject;
      data = {
        material: this.getMaterialData(material),
        geometry: {
          attributes: this.getAttributesData(geometry.attributes),
          indexVersion: geometry.index ? geometry.index.version : null,
          drawRange: { start: geometry.drawRange.start, count: geometry.drawRange.count }
        },
        worldMatrix: renderObject.object.matrixWorld.clone()
      };
      if (renderObject.object.center) {
        data.center = renderObject.object.center.clone();
      }
      if (renderObject.object.morphTargetInfluences) {
        data.morphTargetInfluences = renderObject.object.morphTargetInfluences.slice();
      }
      if (renderObject.bundle !== null) {
        data.version = renderObject.bundle.version;
      }
      if (data.material.transmission > 0) {
        const { width, height } = renderObject.context;
        data.bufferWidth = width;
        data.bufferHeight = height;
      }
      this.renderObjects.set(renderObject, data);
    }
    return data;
  }
  getAttributesData(attributes) {
    const attributesData = {};
    for (const name in attributes) {
      const attribute2 = attributes[name];
      attributesData[name] = {
        version: attribute2.version
      };
    }
    return attributesData;
  }
  containsNode(builder) {
    const material = builder.material;
    for (const property2 in material) {
      if (material[property2] && material[property2].isNode)
        return true;
    }
    if (builder.renderer.nodes.modelViewMatrix !== null || builder.renderer.nodes.modelNormalViewMatrix !== null)
      return true;
    return false;
  }
  getMaterialData(material) {
    const data = {};
    for (const property2 of this.refreshUniforms) {
      const value = material[property2];
      if (value === null || value === void 0) continue;
      if (typeof value === "object" && value.clone !== void 0) {
        if (value.isTexture === true) {
          data[property2] = { id: value.id, version: value.version };
        } else {
          data[property2] = value.clone();
        }
      } else {
        data[property2] = value;
      }
    }
    return data;
  }
  equals(renderObject) {
    const { object, material, geometry } = renderObject;
    const renderObjectData = this.getRenderObjectData(renderObject);
    if (renderObjectData.worldMatrix.equals(object.matrixWorld) !== true) {
      renderObjectData.worldMatrix.copy(object.matrixWorld);
      return false;
    }
    const materialData = renderObjectData.material;
    for (const property2 in materialData) {
      const value = materialData[property2];
      const mtlValue = material[property2];
      if (value.equals !== void 0) {
        if (value.equals(mtlValue) === false) {
          value.copy(mtlValue);
          return false;
        }
      } else if (mtlValue.isTexture === true) {
        if (value.id !== mtlValue.id || value.version !== mtlValue.version) {
          value.id = mtlValue.id;
          value.version = mtlValue.version;
          return false;
        }
      } else if (value !== mtlValue) {
        materialData[property2] = mtlValue;
        return false;
      }
    }
    if (materialData.transmission > 0) {
      const { width, height } = renderObject.context;
      if (renderObjectData.bufferWidth !== width || renderObjectData.bufferHeight !== height) {
        renderObjectData.bufferWidth = width;
        renderObjectData.bufferHeight = height;
        return false;
      }
    }
    const storedGeometryData = renderObjectData.geometry;
    const attributes = geometry.attributes;
    const storedAttributes = storedGeometryData.attributes;
    const storedAttributeNames = Object.keys(storedAttributes);
    const currentAttributeNames = Object.keys(attributes);
    if (storedAttributeNames.length !== currentAttributeNames.length) {
      renderObjectData.geometry.attributes = this.getAttributesData(attributes);
      return false;
    }
    for (const name of storedAttributeNames) {
      const storedAttributeData = storedAttributes[name];
      const attribute2 = attributes[name];
      if (attribute2 === void 0) {
        delete storedAttributes[name];
        return false;
      }
      if (storedAttributeData.version !== attribute2.version) {
        storedAttributeData.version = attribute2.version;
        return false;
      }
    }
    const index = geometry.index;
    const storedIndexVersion = storedGeometryData.indexVersion;
    const currentIndexVersion = index ? index.version : null;
    if (storedIndexVersion !== currentIndexVersion) {
      storedGeometryData.indexVersion = currentIndexVersion;
      return false;
    }
    if (storedGeometryData.drawRange.start !== geometry.drawRange.start || storedGeometryData.drawRange.count !== geometry.drawRange.count) {
      storedGeometryData.drawRange.start = geometry.drawRange.start;
      storedGeometryData.drawRange.count = geometry.drawRange.count;
      return false;
    }
    if (renderObjectData.morphTargetInfluences) {
      let morphChanged = false;
      for (let i = 0; i < renderObjectData.morphTargetInfluences.length; i++) {
        if (renderObjectData.morphTargetInfluences[i] !== object.morphTargetInfluences[i]) {
          morphChanged = true;
        }
      }
      if (morphChanged) return true;
    }
    if (renderObjectData.center) {
      if (renderObjectData.center.equals(object.center) === false) {
        renderObjectData.center.copy(object.center);
        return true;
      }
    }
    if (renderObject.bundle !== null) {
      renderObjectData.version = renderObject.bundle.version;
    }
    return true;
  }
  needsRefresh(renderObject, nodeFrame) {
    if (this.hasNode || this.hasAnimation || this.firstInitialization(renderObject))
      return true;
    const { renderId } = nodeFrame;
    if (this.renderId !== renderId) {
      this.renderId = renderId;
      return true;
    }
    const isStatic = renderObject.object.static === true;
    const isBundle = renderObject.bundle !== null && renderObject.bundle.static === true && this.getRenderObjectData(renderObject).version === renderObject.bundle.version;
    if (isStatic || isBundle)
      return false;
    const notEqual2 = this.equals(renderObject) !== true;
    return notEqual2;
  }
};
function cyrb53(value, seed = 0) {
  let h12 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  if (value instanceof Array) {
    for (let i = 0, val; i < value.length; i++) {
      val = value[i];
      h12 = Math.imul(h12 ^ val, 2654435761);
      h2 = Math.imul(h2 ^ val, 1597334677);
    }
  } else {
    for (let i = 0, ch; i < value.length; i++) {
      ch = value.charCodeAt(i);
      h12 = Math.imul(h12 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
  }
  h12 = Math.imul(h12 ^ h12 >>> 16, 2246822507);
  h12 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h12 ^ h12 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h12 >>> 0);
}
var hashString = (str) => cyrb53(str);
var hashArray = (array) => cyrb53(array);
var hash$1 = (...params) => cyrb53(params);
function getCacheKey$1(object, force = false) {
  const values = [];
  if (object.isNode === true) {
    values.push(object.id);
    object = object.getSelf();
  }
  for (const { property: property2, childNode } of getNodeChildren(object)) {
    values.push(values, cyrb53(property2.slice(0, -4)), childNode.getCacheKey(force));
  }
  return cyrb53(values);
}
function* getNodeChildren(node, toJSON2 = false) {
  for (const property2 in node) {
    if (property2.startsWith("_") === true) continue;
    const object = node[property2];
    if (Array.isArray(object) === true) {
      for (let i = 0; i < object.length; i++) {
        const child = object[i];
        if (child && (child.isNode === true || toJSON2 && typeof child.toJSON === "function")) {
          yield { property: property2, index: i, childNode: child };
        }
      }
    } else if (object && object.isNode === true) {
      yield { property: property2, childNode: object };
    } else if (typeof object === "object") {
      for (const subProperty in object) {
        const child = object[subProperty];
        if (child && (child.isNode === true || toJSON2 && typeof child.toJSON === "function")) {
          yield { property: property2, index: subProperty, childNode: child };
        }
      }
    }
  }
}
function getValueType(value) {
  if (value === void 0 || value === null) return null;
  const typeOf = typeof value;
  if (value.isNode === true) {
    return "node";
  } else if (typeOf === "number") {
    return "float";
  } else if (typeOf === "boolean") {
    return "bool";
  } else if (typeOf === "string") {
    return "string";
  } else if (typeOf === "function") {
    return "shader";
  } else if (value.isVector2 === true) {
    return "vec2";
  } else if (value.isVector3 === true) {
    return "vec3";
  } else if (value.isVector4 === true) {
    return "vec4";
  } else if (value.isMatrix3 === true) {
    return "mat3";
  } else if (value.isMatrix4 === true) {
    return "mat4";
  } else if (value.isColor === true) {
    return "color";
  } else if (value instanceof ArrayBuffer) {
    return "ArrayBuffer";
  }
  return null;
}
function getValueFromType(type, ...params) {
  const last4 = type ? type.slice(-4) : void 0;
  if (params.length === 1) {
    if (last4 === "vec2") params = [params[0], params[0]];
    else if (last4 === "vec3") params = [params[0], params[0], params[0]];
    else if (last4 === "vec4") params = [params[0], params[0], params[0], params[0]];
  }
  if (type === "color") {
    return new Color2(...params);
  } else if (last4 === "vec2") {
    return new Vector22(...params);
  } else if (last4 === "vec3") {
    return new Vector32(...params);
  } else if (last4 === "vec4") {
    return new Vector4(...params);
  } else if (last4 === "mat3") {
    return new Matrix3(...params);
  } else if (last4 === "mat4") {
    return new Matrix4(...params);
  } else if (type === "bool") {
    return params[0] || false;
  } else if (type === "float" || type === "int" || type === "uint") {
    return params[0] || 0;
  } else if (type === "string") {
    return params[0] || "";
  } else if (type === "ArrayBuffer") {
    return base64ToArrayBuffer(params[0]);
  }
  return null;
}
function arrayBufferToBase64(arrayBuffer) {
  let chars = "";
  const array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < array.length; i++) {
    chars += String.fromCharCode(array[i]);
  }
  return btoa(chars);
}
function base64ToArrayBuffer(base64) {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;
}
var NodeUtils = Object.freeze({
  __proto__: null,
  arrayBufferToBase64,
  base64ToArrayBuffer,
  getCacheKey: getCacheKey$1,
  getNodeChildren,
  getValueFromType,
  getValueType,
  hash: hash$1,
  hashArray,
  hashString
});
var NodeShaderStage = {
  VERTEX: "vertex",
  FRAGMENT: "fragment"
};
var NodeUpdateType = {
  NONE: "none",
  FRAME: "frame",
  RENDER: "render",
  OBJECT: "object"
};
var defaultShaderStages = ["fragment", "vertex"];
var shaderStages = [...defaultShaderStages, "compute"];
var vectorComponents = ["x", "y", "z", "w"];
var _nodeId = 0;
var Node = class extends EventDispatcher {
  static get type() {
    return "Node";
  }
  constructor(nodeType = null) {
    super();
    this.nodeType = nodeType;
    this.updateType = NodeUpdateType.NONE;
    this.updateBeforeType = NodeUpdateType.NONE;
    this.updateAfterType = NodeUpdateType.NONE;
    this.uuid = MathUtils.generateUUID();
    this.version = 0;
    this._cacheKey = null;
    this._cacheKeyVersion = 0;
    this.global = false;
    this.isNode = true;
    Object.defineProperty(this, "id", { value: _nodeId++ });
  }
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
    }
  }
  get type() {
    return this.constructor.type;
  }
  onUpdate(callback, updateType) {
    this.updateType = updateType;
    this.update = callback.bind(this.getSelf());
    return this;
  }
  onFrameUpdate(callback) {
    return this.onUpdate(callback, NodeUpdateType.FRAME);
  }
  onRenderUpdate(callback) {
    return this.onUpdate(callback, NodeUpdateType.RENDER);
  }
  onObjectUpdate(callback) {
    return this.onUpdate(callback, NodeUpdateType.OBJECT);
  }
  onReference(callback) {
    this.updateReference = callback.bind(this.getSelf());
    return this;
  }
  getSelf() {
    return this.self || this;
  }
  updateReference() {
    return this;
  }
  isGlobal() {
    return this.global;
  }
  *getChildren() {
    for (const { childNode } of getNodeChildren(this)) {
      yield childNode;
    }
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  traverse(callback) {
    callback(this);
    for (const childNode of this.getChildren()) {
      childNode.traverse(callback);
    }
  }
  getCacheKey(force = false) {
    force = force || this.version !== this._cacheKeyVersion;
    if (force === true || this._cacheKey === null) {
      this._cacheKey = getCacheKey$1(this, force);
      this._cacheKeyVersion = this.version;
    }
    return this._cacheKey;
  }
  getScope() {
    return this;
  }
  getHash() {
    return this.uuid;
  }
  getUpdateType() {
    return this.updateType;
  }
  getUpdateBeforeType() {
    return this.updateBeforeType;
  }
  getUpdateAfterType() {
    return this.updateAfterType;
  }
  getElementType(builder) {
    const type = this.getNodeType(builder);
    const elementType = builder.getElementType(type);
    return elementType;
  }
  getNodeType(builder) {
    const nodeProperties = builder.getNodeProperties(this);
    if (nodeProperties.outputNode) {
      return nodeProperties.outputNode.getNodeType(builder);
    }
    return this.nodeType;
  }
  getShared(builder) {
    const hash2 = this.getHash(builder);
    const nodeFromHash = builder.getNodeFromHash(hash2);
    return nodeFromHash || this;
  }
  setup(builder) {
    const nodeProperties = builder.getNodeProperties(this);
    let index = 0;
    for (const childNode of this.getChildren()) {
      nodeProperties["node" + index++] = childNode;
    }
    return null;
  }
  analyze(builder) {
    const usageCount = builder.increaseUsage(this);
    if (usageCount === 1) {
      const nodeProperties = builder.getNodeProperties(this);
      for (const childNode of Object.values(nodeProperties)) {
        if (childNode && childNode.isNode === true) {
          childNode.build(builder);
        }
      }
    }
  }
  generate(builder, output2) {
    const { outputNode } = builder.getNodeProperties(this);
    if (outputNode && outputNode.isNode === true) {
      return outputNode.build(builder, output2);
    }
  }
  updateBefore() {
    console.warn("Abstract function.");
  }
  updateAfter() {
    console.warn("Abstract function.");
  }
  update() {
    console.warn("Abstract function.");
  }
  build(builder, output2 = null) {
    const refNode = this.getShared(builder);
    if (this !== refNode) {
      return refNode.build(builder, output2);
    }
    builder.addNode(this);
    builder.addChain(this);
    let result = null;
    const buildStage = builder.getBuildStage();
    if (buildStage === "setup") {
      this.updateReference(builder);
      const properties = builder.getNodeProperties(this);
      if (properties.initialized !== true) {
        const stackNodesBeforeSetup = builder.stack.nodes.length;
        properties.initialized = true;
        properties.outputNode = this.setup(builder);
        if (properties.outputNode !== null && builder.stack.nodes.length !== stackNodesBeforeSetup) ;
        for (const childNode of Object.values(properties)) {
          if (childNode && childNode.isNode === true) {
            childNode.build(builder);
          }
        }
      }
    } else if (buildStage === "analyze") {
      this.analyze(builder);
    } else if (buildStage === "generate") {
      const isGenerateOnce = this.generate.length === 1;
      if (isGenerateOnce) {
        const type = this.getNodeType(builder);
        const nodeData = builder.getDataFromNode(this);
        result = nodeData.snippet;
        if (result === void 0) {
          result = this.generate(builder) || "";
          nodeData.snippet = result;
        } else if (nodeData.flowCodes !== void 0 && builder.context.nodeBlock !== void 0) {
          builder.addFlowCodeHierarchy(this, builder.context.nodeBlock);
        }
        result = builder.format(result, type, output2);
      } else {
        result = this.generate(builder, output2) || "";
      }
    }
    builder.removeChain(this);
    builder.addSequentialNode(this);
    return result;
  }
  getSerializeChildren() {
    return getNodeChildren(this);
  }
  serialize(json) {
    const nodeChildren = this.getSerializeChildren();
    const inputNodes = {};
    for (const { property: property2, index, childNode } of nodeChildren) {
      if (index !== void 0) {
        if (inputNodes[property2] === void 0) {
          inputNodes[property2] = Number.isInteger(index) ? [] : {};
        }
        inputNodes[property2][index] = childNode.toJSON(json.meta).uuid;
      } else {
        inputNodes[property2] = childNode.toJSON(json.meta).uuid;
      }
    }
    if (Object.keys(inputNodes).length > 0) {
      json.inputNodes = inputNodes;
    }
  }
  deserialize(json) {
    if (json.inputNodes !== void 0) {
      const nodes = json.meta.nodes;
      for (const property2 in json.inputNodes) {
        if (Array.isArray(json.inputNodes[property2])) {
          const inputArray = [];
          for (const uuid of json.inputNodes[property2]) {
            inputArray.push(nodes[uuid]);
          }
          this[property2] = inputArray;
        } else if (typeof json.inputNodes[property2] === "object") {
          const inputObject = {};
          for (const subProperty in json.inputNodes[property2]) {
            const uuid = json.inputNodes[property2][subProperty];
            inputObject[subProperty] = nodes[uuid];
          }
          this[property2] = inputObject;
        } else {
          const uuid = json.inputNodes[property2];
          this[property2] = nodes[uuid];
        }
      }
    }
  }
  toJSON(meta) {
    const { uuid, type } = this;
    const isRoot = meta === void 0 || typeof meta === "string";
    if (isRoot) {
      meta = {
        textures: {},
        images: {},
        nodes: {}
      };
    }
    let data = meta.nodes[uuid];
    if (data === void 0) {
      data = {
        uuid,
        type,
        meta,
        metadata: {
          version: 4.6,
          type: "Node",
          generator: "Node.toJSON"
        }
      };
      if (isRoot !== true) meta.nodes[data.uuid] = data;
      this.serialize(data);
      delete data.meta;
    }
    function extractFromCache(cache2) {
      const values = [];
      for (const key in cache2) {
        const data2 = cache2[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRoot) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const nodes = extractFromCache(meta.nodes);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
      if (nodes.length > 0) data.nodes = nodes;
    }
    return data;
  }
};
var ArrayElementNode = class extends Node {
  static get type() {
    return "ArrayElementNode";
  }
  // @TODO: If extending from TempNode it breaks webgpu_compute
  constructor(node, indexNode) {
    super();
    this.node = node;
    this.indexNode = indexNode;
    this.isArrayElementNode = true;
  }
  getNodeType(builder) {
    return this.node.getElementType(builder);
  }
  generate(builder) {
    const nodeSnippet = this.node.build(builder);
    const indexSnippet = this.indexNode.build(builder, "uint");
    return `${nodeSnippet}[ ${indexSnippet} ]`;
  }
};
var ConvertNode = class extends Node {
  static get type() {
    return "ConvertNode";
  }
  constructor(node, convertTo) {
    super();
    this.node = node;
    this.convertTo = convertTo;
  }
  getNodeType(builder) {
    const requestType = this.node.getNodeType(builder);
    let convertTo = null;
    for (const overloadingType of this.convertTo.split("|")) {
      if (convertTo === null || builder.getTypeLength(requestType) === builder.getTypeLength(overloadingType)) {
        convertTo = overloadingType;
      }
    }
    return convertTo;
  }
  serialize(data) {
    super.serialize(data);
    data.convertTo = this.convertTo;
  }
  deserialize(data) {
    super.deserialize(data);
    this.convertTo = data.convertTo;
  }
  generate(builder, output2) {
    const node = this.node;
    const type = this.getNodeType(builder);
    const snippet = node.build(builder, type);
    return builder.format(snippet, type, output2);
  }
};
var TempNode = class extends Node {
  static get type() {
    return "TempNode";
  }
  constructor(type) {
    super(type);
    this.isTempNode = true;
  }
  hasDependencies(builder) {
    return builder.getDataFromNode(this).usageCount > 1;
  }
  build(builder, output2) {
    const buildStage = builder.getBuildStage();
    if (buildStage === "generate") {
      const type = builder.getVectorType(this.getNodeType(builder, output2));
      const nodeData = builder.getDataFromNode(this);
      if (nodeData.propertyName !== void 0) {
        return builder.format(nodeData.propertyName, type, output2);
      } else if (type !== "void" && output2 !== "void" && this.hasDependencies(builder)) {
        const snippet = super.build(builder, type);
        const nodeVar = builder.getVarFromNode(this, null, type);
        const propertyName = builder.getPropertyName(nodeVar);
        builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
        nodeData.snippet = snippet;
        nodeData.propertyName = propertyName;
        return builder.format(nodeData.propertyName, type, output2);
      }
    }
    return super.build(builder, output2);
  }
};
var JoinNode = class extends TempNode {
  static get type() {
    return "JoinNode";
  }
  constructor(nodes = [], nodeType = null) {
    super(nodeType);
    this.nodes = nodes;
  }
  getNodeType(builder) {
    if (this.nodeType !== null) {
      return builder.getVectorType(this.nodeType);
    }
    return builder.getTypeFromLength(this.nodes.reduce((count, cur) => count + builder.getTypeLength(cur.getNodeType(builder)), 0));
  }
  generate(builder, output2) {
    const type = this.getNodeType(builder);
    const nodes = this.nodes;
    const primitiveType = builder.getComponentType(type);
    const snippetValues = [];
    for (const input of nodes) {
      let inputSnippet = input.build(builder);
      const inputPrimitiveType = builder.getComponentType(input.getNodeType(builder));
      if (inputPrimitiveType !== primitiveType) {
        inputSnippet = builder.format(inputSnippet, inputPrimitiveType, primitiveType);
      }
      snippetValues.push(inputSnippet);
    }
    const snippet = `${builder.getType(type)}( ${snippetValues.join(", ")} )`;
    return builder.format(snippet, type, output2);
  }
};
var stringVectorComponents = vectorComponents.join("");
var SplitNode = class extends Node {
  static get type() {
    return "SplitNode";
  }
  constructor(node, components = "x") {
    super();
    this.node = node;
    this.components = components;
    this.isSplitNode = true;
  }
  getVectorLength() {
    let vectorLength = this.components.length;
    for (const c of this.components) {
      vectorLength = Math.max(vectorComponents.indexOf(c) + 1, vectorLength);
    }
    return vectorLength;
  }
  getComponentType(builder) {
    return builder.getComponentType(this.node.getNodeType(builder));
  }
  getNodeType(builder) {
    return builder.getTypeFromLength(this.components.length, this.getComponentType(builder));
  }
  generate(builder, output2) {
    const node = this.node;
    const nodeTypeLength = builder.getTypeLength(node.getNodeType(builder));
    let snippet = null;
    if (nodeTypeLength > 1) {
      let type = null;
      const componentsLength = this.getVectorLength();
      if (componentsLength >= nodeTypeLength) {
        type = builder.getTypeFromLength(this.getVectorLength(), this.getComponentType(builder));
      }
      const nodeSnippet = node.build(builder, type);
      if (this.components.length === nodeTypeLength && this.components === stringVectorComponents.slice(0, this.components.length)) {
        snippet = builder.format(nodeSnippet, type, output2);
      } else {
        snippet = builder.format(`${nodeSnippet}.${this.components}`, this.getNodeType(builder), output2);
      }
    } else {
      snippet = node.build(builder, output2);
    }
    return snippet;
  }
  serialize(data) {
    super.serialize(data);
    data.components = this.components;
  }
  deserialize(data) {
    super.deserialize(data);
    this.components = data.components;
  }
};
var SetNode = class extends TempNode {
  static get type() {
    return "SetNode";
  }
  constructor(sourceNode, components, targetNode) {
    super();
    this.sourceNode = sourceNode;
    this.components = components;
    this.targetNode = targetNode;
  }
  getNodeType(builder) {
    return this.sourceNode.getNodeType(builder);
  }
  generate(builder) {
    const { sourceNode, components, targetNode } = this;
    const sourceType = this.getNodeType(builder);
    const targetType = builder.getTypeFromLength(components.length, targetNode.getNodeType(builder));
    const targetSnippet = targetNode.build(builder, targetType);
    const sourceSnippet = sourceNode.build(builder, sourceType);
    const length2 = builder.getTypeLength(sourceType);
    const snippetValues = [];
    for (let i = 0; i < length2; i++) {
      const component = vectorComponents[i];
      if (component === components[0]) {
        snippetValues.push(targetSnippet);
        i += components.length - 1;
      } else {
        snippetValues.push(sourceSnippet + "." + component);
      }
    }
    return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
  }
};
var FlipNode = class extends TempNode {
  static get type() {
    return "FlipNode";
  }
  constructor(sourceNode, components) {
    super();
    this.sourceNode = sourceNode;
    this.components = components;
  }
  getNodeType(builder) {
    return this.sourceNode.getNodeType(builder);
  }
  generate(builder) {
    const { components, sourceNode } = this;
    const sourceType = this.getNodeType(builder);
    const sourceSnippet = sourceNode.build(builder);
    const sourceCache = builder.getVarFromNode(this);
    const sourceProperty = builder.getPropertyName(sourceCache);
    builder.addLineFlowCode(sourceProperty + " = " + sourceSnippet, this);
    const length2 = builder.getTypeLength(sourceType);
    const snippetValues = [];
    let componentIndex = 0;
    for (let i = 0; i < length2; i++) {
      const component = vectorComponents[i];
      if (component === components[componentIndex]) {
        snippetValues.push("1.0 - " + (sourceProperty + "." + component));
        componentIndex++;
      } else {
        snippetValues.push(sourceProperty + "." + component);
      }
    }
    return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
  }
};
var InputNode = class extends Node {
  static get type() {
    return "InputNode";
  }
  constructor(value, nodeType = null) {
    super(nodeType);
    this.isInputNode = true;
    this.value = value;
    this.precision = null;
  }
  getNodeType() {
    if (this.nodeType === null) {
      return getValueType(this.value);
    }
    return this.nodeType;
  }
  getInputType(builder) {
    return this.getNodeType(builder);
  }
  setPrecision(precision) {
    this.precision = precision;
    return this;
  }
  serialize(data) {
    super.serialize(data);
    data.value = this.value;
    if (this.value && this.value.toArray) data.value = this.value.toArray();
    data.valueType = getValueType(this.value);
    data.nodeType = this.nodeType;
    if (data.valueType === "ArrayBuffer") data.value = arrayBufferToBase64(data.value);
    data.precision = this.precision;
  }
  deserialize(data) {
    super.deserialize(data);
    this.nodeType = data.nodeType;
    this.value = Array.isArray(data.value) ? getValueFromType(data.valueType, ...data.value) : data.value;
    this.precision = data.precision || null;
    if (this.value && this.value.fromArray) this.value = this.value.fromArray(data.value);
  }
  generate() {
    console.warn("Abstract function.");
  }
};
var ConstNode = class extends InputNode {
  static get type() {
    return "ConstNode";
  }
  constructor(value, nodeType = null) {
    super(value, nodeType);
    this.isConstNode = true;
  }
  generateConst(builder) {
    return builder.generateConst(this.getNodeType(builder), this.value);
  }
  generate(builder, output2) {
    const type = this.getNodeType(builder);
    return builder.format(this.generateConst(builder), type, output2);
  }
};
var currentStack = null;
var NodeElements = /* @__PURE__ */ new Map();
function addMethodChaining(name, nodeElement) {
  if (NodeElements.has(name)) {
    console.warn(`Redefinition of method chaining ${name}`);
    return;
  }
  if (typeof nodeElement !== "function") throw new Error(`Node element ${name} is not a function`);
  NodeElements.set(name, nodeElement);
}
var parseSwizzle = (props) => props.replace(/r|s/g, "x").replace(/g|t/g, "y").replace(/b|p/g, "z").replace(/a|q/g, "w");
var parseSwizzleAndSort = (props) => parseSwizzle(props).split("").sort().join("");
var shaderNodeHandler = {
  setup(NodeClosure, params) {
    const inputs = params.shift();
    return NodeClosure(nodeObjects(inputs), ...params);
  },
  get(node, prop, nodeObj) {
    if (typeof prop === "string" && node[prop] === void 0) {
      if (node.isStackNode !== true && prop === "assign") {
        return (...params) => {
          currentStack.assign(nodeObj, ...params);
          return nodeObj;
        };
      } else if (NodeElements.has(prop)) {
        const nodeElement = NodeElements.get(prop);
        return node.isStackNode ? (...params) => nodeObj.add(nodeElement(...params)) : (...params) => nodeElement(nodeObj, ...params);
      } else if (prop === "self") {
        return node;
      } else if (prop.endsWith("Assign") && NodeElements.has(prop.slice(0, prop.length - "Assign".length))) {
        const nodeElement = NodeElements.get(prop.slice(0, prop.length - "Assign".length));
        return node.isStackNode ? (...params) => nodeObj.assign(params[0], nodeElement(...params)) : (...params) => nodeObj.assign(nodeElement(nodeObj, ...params));
      } else if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true) {
        prop = parseSwizzle(prop);
        return nodeObject(new SplitNode(nodeObj, prop));
      } else if (/^set[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
        prop = parseSwizzleAndSort(prop.slice(3).toLowerCase());
        return (value) => nodeObject(new SetNode(node, prop, value));
      } else if (/^flip[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
        prop = parseSwizzleAndSort(prop.slice(4).toLowerCase());
        return () => nodeObject(new FlipNode(nodeObject(node), prop));
      } else if (prop === "width" || prop === "height" || prop === "depth") {
        if (prop === "width") prop = "x";
        else if (prop === "height") prop = "y";
        else if (prop === "depth") prop = "z";
        return nodeObject(new SplitNode(node, prop));
      } else if (/^\d+$/.test(prop) === true) {
        return nodeObject(new ArrayElementNode(nodeObj, new ConstNode(Number(prop), "uint")));
      }
    }
    return Reflect.get(node, prop, nodeObj);
  },
  set(node, prop, value, nodeObj) {
    if (typeof prop === "string" && node[prop] === void 0) {
      if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true || prop === "width" || prop === "height" || prop === "depth" || /^\d+$/.test(prop) === true) {
        nodeObj[prop].assign(value);
        return true;
      }
    }
    return Reflect.set(node, prop, value, nodeObj);
  }
};
var nodeObjectsCacheMap = /* @__PURE__ */ new WeakMap();
var nodeBuilderFunctionsCacheMap = /* @__PURE__ */ new WeakMap();
var ShaderNodeObject = function(obj, altType = null) {
  const type = getValueType(obj);
  if (type === "node") {
    let nodeObject2 = nodeObjectsCacheMap.get(obj);
    if (nodeObject2 === void 0) {
      nodeObject2 = new Proxy(obj, shaderNodeHandler);
      nodeObjectsCacheMap.set(obj, nodeObject2);
      nodeObjectsCacheMap.set(nodeObject2, nodeObject2);
    }
    return nodeObject2;
  } else if (altType === null && (type === "float" || type === "boolean") || type && type !== "shader" && type !== "string") {
    return nodeObject(getConstNode(obj, altType));
  } else if (type === "shader") {
    return Fn(obj);
  }
  return obj;
};
var ShaderNodeObjects = function(objects, altType = null) {
  for (const name in objects) {
    objects[name] = nodeObject(objects[name], altType);
  }
  return objects;
};
var ShaderNodeArray = function(array, altType = null) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    array[i] = nodeObject(array[i], altType);
  }
  return array;
};
var ShaderNodeProxy = function(NodeClass, scope = null, factor = null, settings = null) {
  const assignNode = (node) => nodeObject(settings !== null ? Object.assign(node, settings) : node);
  if (scope === null) {
    return (...params) => {
      return assignNode(new NodeClass(...nodeArray(params)));
    };
  } else if (factor !== null) {
    factor = nodeObject(factor);
    return (...params) => {
      return assignNode(new NodeClass(scope, ...nodeArray(params), factor));
    };
  } else {
    return (...params) => {
      return assignNode(new NodeClass(scope, ...nodeArray(params)));
    };
  }
};
var ShaderNodeImmutable = function(NodeClass, ...params) {
  return nodeObject(new NodeClass(...nodeArray(params)));
};
var ShaderCallNodeInternal = class extends Node {
  constructor(shaderNode, inputNodes) {
    super();
    this.shaderNode = shaderNode;
    this.inputNodes = inputNodes;
  }
  getNodeType(builder) {
    return this.shaderNode.nodeType || this.getOutputNode(builder).getNodeType(builder);
  }
  call(builder) {
    const { shaderNode, inputNodes } = this;
    const properties = builder.getNodeProperties(shaderNode);
    if (properties.onceOutput) return properties.onceOutput;
    let result = null;
    if (shaderNode.layout) {
      let functionNodesCacheMap = nodeBuilderFunctionsCacheMap.get(builder.constructor);
      if (functionNodesCacheMap === void 0) {
        functionNodesCacheMap = /* @__PURE__ */ new WeakMap();
        nodeBuilderFunctionsCacheMap.set(builder.constructor, functionNodesCacheMap);
      }
      let functionNode = functionNodesCacheMap.get(shaderNode);
      if (functionNode === void 0) {
        functionNode = nodeObject(builder.buildFunctionNode(shaderNode));
        functionNodesCacheMap.set(shaderNode, functionNode);
      }
      if (builder.currentFunctionNode !== null) {
        builder.currentFunctionNode.includes.push(functionNode);
      }
      result = nodeObject(functionNode.call(inputNodes));
    } else {
      const jsFunc = shaderNode.jsFunc;
      const outputNode = inputNodes !== null ? jsFunc(inputNodes, builder) : jsFunc(builder);
      result = nodeObject(outputNode);
    }
    if (shaderNode.once) {
      properties.onceOutput = result;
    }
    return result;
  }
  getOutputNode(builder) {
    const properties = builder.getNodeProperties(this);
    if (properties.outputNode === null) {
      properties.outputNode = this.setupOutput(builder);
    }
    return properties.outputNode;
  }
  setup(builder) {
    return this.getOutputNode(builder);
  }
  setupOutput(builder) {
    builder.addStack();
    builder.stack.outputNode = this.call(builder);
    return builder.removeStack();
  }
  generate(builder, output2) {
    const outputNode = this.getOutputNode(builder);
    return outputNode.build(builder, output2);
  }
};
var ShaderNodeInternal = class extends Node {
  constructor(jsFunc, nodeType) {
    super(nodeType);
    this.jsFunc = jsFunc;
    this.layout = null;
    this.global = true;
    this.once = false;
  }
  setLayout(layout) {
    this.layout = layout;
    return this;
  }
  call(inputs = null) {
    nodeObjects(inputs);
    return nodeObject(new ShaderCallNodeInternal(this, inputs));
  }
  setup() {
    return this.call();
  }
};
var bools = [false, true];
var uints = [0, 1, 2, 3];
var ints = [-1, -2];
var floats = [0.5, 1.5, 1 / 3, 1e-6, 1e6, Math.PI, Math.PI * 2, 1 / Math.PI, 2 / Math.PI, 1 / (Math.PI * 2), Math.PI / 2];
var boolsCacheMap = /* @__PURE__ */ new Map();
for (const bool2 of bools) boolsCacheMap.set(bool2, new ConstNode(bool2));
var uintsCacheMap = /* @__PURE__ */ new Map();
for (const uint2 of uints) uintsCacheMap.set(uint2, new ConstNode(uint2, "uint"));
var intsCacheMap = new Map([...uintsCacheMap].map((el) => new ConstNode(el.value, "int")));
for (const int2 of ints) intsCacheMap.set(int2, new ConstNode(int2, "int"));
var floatsCacheMap = new Map([...intsCacheMap].map((el) => new ConstNode(el.value)));
for (const float2 of floats) floatsCacheMap.set(float2, new ConstNode(float2));
for (const float2 of floats) floatsCacheMap.set(-float2, new ConstNode(-float2));
var cacheMaps = { bool: boolsCacheMap, uint: uintsCacheMap, ints: intsCacheMap, float: floatsCacheMap };
var constNodesCacheMap = new Map([...boolsCacheMap, ...floatsCacheMap]);
var getConstNode = (value, type) => {
  if (constNodesCacheMap.has(value)) {
    return constNodesCacheMap.get(value);
  } else if (value.isNode === true) {
    return value;
  } else {
    return new ConstNode(value, type);
  }
};
var safeGetNodeType = (node) => {
  try {
    return node.getNodeType();
  } catch (_) {
    return void 0;
  }
};
var ConvertType = function(type, cacheMap = null) {
  return (...params) => {
    if (params.length === 0 || !["bool", "float", "int", "uint"].includes(type) && params.every((param) => typeof param !== "object")) {
      params = [getValueFromType(type, ...params)];
    }
    if (params.length === 1 && cacheMap !== null && cacheMap.has(params[0])) {
      return nodeObject(cacheMap.get(params[0]));
    }
    if (params.length === 1) {
      const node = getConstNode(params[0], type);
      if (safeGetNodeType(node) === type) return nodeObject(node);
      return nodeObject(new ConvertNode(node, type));
    }
    const nodes = params.map((param) => getConstNode(param));
    return nodeObject(new JoinNode(nodes, type));
  };
};
var defined = (v) => typeof v === "object" && v !== null ? v.value : v;
var getConstNodeType = (value) => value !== void 0 && value !== null ? value.nodeType || value.convertTo || (typeof value === "string" ? value : null) : null;
function ShaderNode(jsFunc, nodeType) {
  return new Proxy(new ShaderNodeInternal(jsFunc, nodeType), shaderNodeHandler);
}
var nodeObject = (val, altType = null) => (
  /* new */
  ShaderNodeObject(val, altType)
);
var nodeObjects = (val, altType = null) => new ShaderNodeObjects(val, altType);
var nodeArray = (val, altType = null) => new ShaderNodeArray(val, altType);
var nodeProxy = (...params) => new ShaderNodeProxy(...params);
var nodeImmutable = (...params) => new ShaderNodeImmutable(...params);
var Fn = (jsFunc, nodeType) => {
  const shaderNode = new ShaderNode(jsFunc, nodeType);
  const fn = (...params) => {
    let inputs;
    nodeObjects(params);
    if (params[0] && params[0].isNode) {
      inputs = [...params];
    } else {
      inputs = params[0];
    }
    return shaderNode.call(inputs);
  };
  fn.shaderNode = shaderNode;
  fn.setLayout = (layout) => {
    shaderNode.setLayout(layout);
    return fn;
  };
  fn.once = () => {
    shaderNode.once = true;
    return fn;
  };
  return fn;
};
addMethodChaining("toGlobal", (node) => {
  node.global = true;
  return node;
});
var setCurrentStack = (stack2) => {
  currentStack = stack2;
};
var getCurrentStack = () => currentStack;
var If = (...params) => currentStack.If(...params);
function append(node) {
  if (currentStack) currentStack.add(node);
  return node;
}
addMethodChaining("append", append);
var color = new ConvertType("color");
var float = new ConvertType("float", cacheMaps.float);
var int = new ConvertType("int", cacheMaps.ints);
var uint = new ConvertType("uint", cacheMaps.uint);
var bool = new ConvertType("bool", cacheMaps.bool);
var vec2 = new ConvertType("vec2");
var ivec2 = new ConvertType("ivec2");
var uvec2 = new ConvertType("uvec2");
var bvec2 = new ConvertType("bvec2");
var vec3 = new ConvertType("vec3");
var ivec3 = new ConvertType("ivec3");
var uvec3 = new ConvertType("uvec3");
var bvec3 = new ConvertType("bvec3");
var vec4 = new ConvertType("vec4");
var ivec4 = new ConvertType("ivec4");
var uvec4 = new ConvertType("uvec4");
var bvec4 = new ConvertType("bvec4");
var mat2 = new ConvertType("mat2");
var mat3 = new ConvertType("mat3");
var mat4 = new ConvertType("mat4");
addMethodChaining("toColor", color);
addMethodChaining("toFloat", float);
addMethodChaining("toInt", int);
addMethodChaining("toUint", uint);
addMethodChaining("toBool", bool);
addMethodChaining("toVec2", vec2);
addMethodChaining("toIVec2", ivec2);
addMethodChaining("toUVec2", uvec2);
addMethodChaining("toBVec2", bvec2);
addMethodChaining("toVec3", vec3);
addMethodChaining("toIVec3", ivec3);
addMethodChaining("toUVec3", uvec3);
addMethodChaining("toBVec3", bvec3);
addMethodChaining("toVec4", vec4);
addMethodChaining("toIVec4", ivec4);
addMethodChaining("toUVec4", uvec4);
addMethodChaining("toBVec4", bvec4);
addMethodChaining("toMat2", mat2);
addMethodChaining("toMat3", mat3);
addMethodChaining("toMat4", mat4);
var element = nodeProxy(ArrayElementNode);
var convert = (node, types) => nodeObject(new ConvertNode(nodeObject(node), types));
addMethodChaining("element", element);
addMethodChaining("convert", convert);
var UniformGroupNode = class extends Node {
  static get type() {
    return "UniformGroupNode";
  }
  constructor(name, shared = false, order = 1) {
    super("string");
    this.name = name;
    this.version = 0;
    this.shared = shared;
    this.order = order;
    this.isUniformGroup = true;
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  serialize(data) {
    super.serialize(data);
    data.name = this.name;
    data.version = this.version;
    data.shared = this.shared;
  }
  deserialize(data) {
    super.deserialize(data);
    this.name = data.name;
    this.version = data.version;
    this.shared = data.shared;
  }
};
var uniformGroup = (name) => new UniformGroupNode(name);
var sharedUniformGroup = (name, order = 0) => new UniformGroupNode(name, true, order);
var frameGroup = sharedUniformGroup("frame");
var renderGroup = sharedUniformGroup("render");
var objectGroup = uniformGroup("object");
var UniformNode = class extends InputNode {
  static get type() {
    return "UniformNode";
  }
  constructor(value, nodeType = null) {
    super(value, nodeType);
    this.isUniformNode = true;
    this.name = "";
    this.groupNode = objectGroup;
  }
  label(name) {
    this.name = name;
    return this;
  }
  setGroup(group) {
    this.groupNode = group;
    return this;
  }
  getGroup() {
    return this.groupNode;
  }
  getUniformHash(builder) {
    return this.getHash(builder);
  }
  onUpdate(callback, updateType) {
    const self2 = this.getSelf();
    callback = callback.bind(self2);
    return super.onUpdate((frame) => {
      const value = callback(frame, self2);
      if (value !== void 0) {
        this.value = value;
      }
    }, updateType);
  }
  generate(builder, output2) {
    const type = this.getNodeType(builder);
    const hash2 = this.getUniformHash(builder);
    let sharedNode = builder.getNodeFromHash(hash2);
    if (sharedNode === void 0) {
      builder.setHashNode(this, hash2);
      sharedNode = this;
    }
    const sharedNodeType = sharedNode.getInputType(builder);
    const nodeUniform = builder.getUniformFromNode(sharedNode, sharedNodeType, builder.shaderStage, this.name || builder.context.label);
    const propertyName = builder.getPropertyName(nodeUniform);
    if (builder.context.label !== void 0) delete builder.context.label;
    return builder.format(propertyName, type, output2);
  }
};
var uniform = (arg1, arg2) => {
  const nodeType = getConstNodeType(arg2 || arg1);
  const value = arg1 && arg1.isNode === true ? arg1.node && arg1.node.value || arg1.value : arg1;
  return nodeObject(new UniformNode(value, nodeType));
};
var PropertyNode = class extends Node {
  static get type() {
    return "PropertyNode";
  }
  constructor(nodeType, name = null, varying2 = false) {
    super(nodeType);
    this.name = name;
    this.varying = varying2;
    this.isPropertyNode = true;
  }
  getHash(builder) {
    return this.name || super.getHash(builder);
  }
  isGlobal() {
    return true;
  }
  generate(builder) {
    let nodeVar;
    if (this.varying === true) {
      nodeVar = builder.getVaryingFromNode(this, this.name);
      nodeVar.needsInterpolation = true;
    } else {
      nodeVar = builder.getVarFromNode(this, this.name);
    }
    return builder.getPropertyName(nodeVar);
  }
};
var property = (type, name) => nodeObject(new PropertyNode(type, name));
var varyingProperty = (type, name) => nodeObject(new PropertyNode(type, name, true));
var diffuseColor = nodeImmutable(PropertyNode, "vec4", "DiffuseColor");
var emissive = nodeImmutable(PropertyNode, "vec3", "EmissiveColor");
var roughness = nodeImmutable(PropertyNode, "float", "Roughness");
var metalness = nodeImmutable(PropertyNode, "float", "Metalness");
var clearcoat = nodeImmutable(PropertyNode, "float", "Clearcoat");
var clearcoatRoughness = nodeImmutable(PropertyNode, "float", "ClearcoatRoughness");
var sheen = nodeImmutable(PropertyNode, "vec3", "Sheen");
var sheenRoughness = nodeImmutable(PropertyNode, "float", "SheenRoughness");
var iridescence = nodeImmutable(PropertyNode, "float", "Iridescence");
var iridescenceIOR = nodeImmutable(PropertyNode, "float", "IridescenceIOR");
var iridescenceThickness = nodeImmutable(PropertyNode, "float", "IridescenceThickness");
var alphaT = nodeImmutable(PropertyNode, "float", "AlphaT");
var anisotropy = nodeImmutable(PropertyNode, "float", "Anisotropy");
var anisotropyT = nodeImmutable(PropertyNode, "vec3", "AnisotropyT");
var anisotropyB = nodeImmutable(PropertyNode, "vec3", "AnisotropyB");
var specularColor = nodeImmutable(PropertyNode, "color", "SpecularColor");
var specularF90 = nodeImmutable(PropertyNode, "float", "SpecularF90");
var shininess = nodeImmutable(PropertyNode, "float", "Shininess");
var output = nodeImmutable(PropertyNode, "vec4", "Output");
var dashSize = nodeImmutable(PropertyNode, "float", "dashSize");
var gapSize = nodeImmutable(PropertyNode, "float", "gapSize");
var pointWidth = nodeImmutable(PropertyNode, "float", "pointWidth");
var ior = nodeImmutable(PropertyNode, "float", "IOR");
var transmission = nodeImmutable(PropertyNode, "float", "Transmission");
var thickness = nodeImmutable(PropertyNode, "float", "Thickness");
var attenuationDistance = nodeImmutable(PropertyNode, "float", "AttenuationDistance");
var attenuationColor = nodeImmutable(PropertyNode, "color", "AttenuationColor");
var dispersion = nodeImmutable(PropertyNode, "float", "Dispersion");
var AssignNode = class extends TempNode {
  static get type() {
    return "AssignNode";
  }
  constructor(targetNode, sourceNode) {
    super();
    this.targetNode = targetNode;
    this.sourceNode = sourceNode;
  }
  hasDependencies() {
    return false;
  }
  getNodeType(builder, output2) {
    return output2 !== "void" ? this.targetNode.getNodeType(builder) : "void";
  }
  needsSplitAssign(builder) {
    const { targetNode } = this;
    if (builder.isAvailable("swizzleAssign") === false && targetNode.isSplitNode && targetNode.components.length > 1) {
      const targetLength = builder.getTypeLength(targetNode.node.getNodeType(builder));
      const assignDiferentVector = vectorComponents.join("").slice(0, targetLength) !== targetNode.components;
      return assignDiferentVector;
    }
    return false;
  }
  generate(builder, output2) {
    const { targetNode, sourceNode } = this;
    const needsSplitAssign = this.needsSplitAssign(builder);
    const targetType = targetNode.getNodeType(builder);
    const target = targetNode.context({ assign: true }).build(builder);
    const source = sourceNode.build(builder, targetType);
    const sourceType = sourceNode.getNodeType(builder);
    const nodeData = builder.getDataFromNode(this);
    let snippet;
    if (nodeData.initialized === true) {
      if (output2 !== "void") {
        snippet = target;
      }
    } else if (needsSplitAssign) {
      const sourceVar = builder.getVarFromNode(this, null, targetType);
      const sourceProperty = builder.getPropertyName(sourceVar);
      builder.addLineFlowCode(`${sourceProperty} = ${source}`, this);
      const targetRoot = targetNode.node.context({ assign: true }).build(builder);
      for (let i = 0; i < targetNode.components.length; i++) {
        const component = targetNode.components[i];
        builder.addLineFlowCode(`${targetRoot}.${component} = ${sourceProperty}[ ${i} ]`, this);
      }
      if (output2 !== "void") {
        snippet = target;
      }
    } else {
      snippet = `${target} = ${source}`;
      if (output2 === "void" || sourceType === "void") {
        builder.addLineFlowCode(snippet, this);
        if (output2 !== "void") {
          snippet = target;
        }
      }
    }
    nodeData.initialized = true;
    return builder.format(snippet, targetType, output2);
  }
};
var assign = nodeProxy(AssignNode);
addMethodChaining("assign", assign);
var FunctionCallNode = class extends TempNode {
  static get type() {
    return "FunctionCallNode";
  }
  constructor(functionNode = null, parameters = {}) {
    super();
    this.functionNode = functionNode;
    this.parameters = parameters;
  }
  setParameters(parameters) {
    this.parameters = parameters;
    return this;
  }
  getParameters() {
    return this.parameters;
  }
  getNodeType(builder) {
    return this.functionNode.getNodeType(builder);
  }
  generate(builder) {
    const params = [];
    const functionNode = this.functionNode;
    const inputs = functionNode.getInputs(builder);
    const parameters = this.parameters;
    const generateInput = (node, inputNode) => {
      const type = inputNode.type;
      const pointer = type === "pointer";
      let output2;
      if (pointer) output2 = "&" + node.build(builder);
      else output2 = node.build(builder, type);
      return output2;
    };
    if (Array.isArray(parameters)) {
      for (let i = 0; i < parameters.length; i++) {
        params.push(generateInput(parameters[i], inputs[i]));
      }
    } else {
      for (const inputNode of inputs) {
        const node = parameters[inputNode.name];
        if (node !== void 0) {
          params.push(generateInput(node, inputNode));
        } else {
          throw new Error(`FunctionCallNode: Input '${inputNode.name}' not found in FunctionNode.`);
        }
      }
    }
    const functionName = functionNode.build(builder, "property");
    return `${functionName}( ${params.join(", ")} )`;
  }
};
var call = (func, ...params) => {
  params = params.length > 1 || params[0] && params[0].isNode === true ? nodeArray(params) : nodeObjects(params[0]);
  return nodeObject(new FunctionCallNode(nodeObject(func), params));
};
addMethodChaining("call", call);
var OperatorNode = class _OperatorNode extends TempNode {
  static get type() {
    return "OperatorNode";
  }
  constructor(op, aNode, bNode, ...params) {
    super();
    if (params.length > 0) {
      let finalOp = new _OperatorNode(op, aNode, bNode);
      for (let i = 0; i < params.length - 1; i++) {
        finalOp = new _OperatorNode(op, finalOp, params[i]);
      }
      aNode = finalOp;
      bNode = params[params.length - 1];
    }
    this.op = op;
    this.aNode = aNode;
    this.bNode = bNode;
  }
  getNodeType(builder, output2) {
    const op = this.op;
    const aNode = this.aNode;
    const bNode = this.bNode;
    const typeA = aNode.getNodeType(builder);
    const typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
    if (typeA === "void" || typeB === "void") {
      return "void";
    } else if (op === "%") {
      return typeA;
    } else if (op === "~" || op === "&" || op === "|" || op === "^" || op === ">>" || op === "<<") {
      return builder.getIntegerType(typeA);
    } else if (op === "!" || op === "==" || op === "&&" || op === "||" || op === "^^") {
      return "bool";
    } else if (op === "<" || op === ">" || op === "<=" || op === ">=") {
      const typeLength = output2 ? builder.getTypeLength(output2) : Math.max(builder.getTypeLength(typeA), builder.getTypeLength(typeB));
      return typeLength > 1 ? `bvec${typeLength}` : "bool";
    } else {
      if (typeA === "float" && builder.isMatrix(typeB)) {
        return typeB;
      } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
        return builder.getVectorFromMatrix(typeA);
      } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
        return builder.getVectorFromMatrix(typeB);
      } else if (builder.getTypeLength(typeB) > builder.getTypeLength(typeA)) {
        return typeB;
      }
      return typeA;
    }
  }
  generate(builder, output2) {
    const op = this.op;
    const aNode = this.aNode;
    const bNode = this.bNode;
    const type = this.getNodeType(builder, output2);
    let typeA = null;
    let typeB = null;
    if (type !== "void") {
      typeA = aNode.getNodeType(builder);
      typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
      if (op === "<" || op === ">" || op === "<=" || op === ">=" || op === "==") {
        if (builder.isVector(typeA)) {
          typeB = typeA;
        } else if (typeA !== typeB) {
          typeA = typeB = "float";
        }
      } else if (op === ">>" || op === "<<") {
        typeA = type;
        typeB = builder.changeComponentType(typeB, "uint");
      } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
        typeB = builder.getVectorFromMatrix(typeA);
      } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
        typeA = builder.getVectorFromMatrix(typeB);
      } else {
        typeA = typeB = type;
      }
    } else {
      typeA = typeB = type;
    }
    const a = aNode.build(builder, typeA);
    const b = typeof bNode !== "undefined" ? bNode.build(builder, typeB) : null;
    const outputLength = builder.getTypeLength(output2);
    const fnOpSnippet = builder.getFunctionOperator(op);
    if (output2 !== "void") {
      if (op === "<" && outputLength > 1) {
        if (builder.useComparisonMethod) {
          return builder.format(`${builder.getMethod("lessThan", output2)}( ${a}, ${b} )`, type, output2);
        } else {
          return builder.format(`( ${a} < ${b} )`, type, output2);
        }
      } else if (op === "<=" && outputLength > 1) {
        if (builder.useComparisonMethod) {
          return builder.format(`${builder.getMethod("lessThanEqual", output2)}( ${a}, ${b} )`, type, output2);
        } else {
          return builder.format(`( ${a} <= ${b} )`, type, output2);
        }
      } else if (op === ">" && outputLength > 1) {
        if (builder.useComparisonMethod) {
          return builder.format(`${builder.getMethod("greaterThan", output2)}( ${a}, ${b} )`, type, output2);
        } else {
          return builder.format(`( ${a} > ${b} )`, type, output2);
        }
      } else if (op === ">=" && outputLength > 1) {
        if (builder.useComparisonMethod) {
          return builder.format(`${builder.getMethod("greaterThanEqual", output2)}( ${a}, ${b} )`, type, output2);
        } else {
          return builder.format(`( ${a} >= ${b} )`, type, output2);
        }
      } else if (op === "!" || op === "~") {
        return builder.format(`(${op}${a})`, typeA, output2);
      } else if (fnOpSnippet) {
        return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output2);
      } else {
        return builder.format(`( ${a} ${op} ${b} )`, type, output2);
      }
    } else if (typeA !== "void") {
      if (fnOpSnippet) {
        return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output2);
      } else {
        return builder.format(`${a} ${op} ${b}`, type, output2);
      }
    }
  }
  serialize(data) {
    super.serialize(data);
    data.op = this.op;
  }
  deserialize(data) {
    super.deserialize(data);
    this.op = data.op;
  }
};
var add = nodeProxy(OperatorNode, "+");
var sub = nodeProxy(OperatorNode, "-");
var mul = nodeProxy(OperatorNode, "*");
var div = nodeProxy(OperatorNode, "/");
var modInt = nodeProxy(OperatorNode, "%");
var equal = nodeProxy(OperatorNode, "==");
var notEqual = nodeProxy(OperatorNode, "!=");
var lessThan = nodeProxy(OperatorNode, "<");
var greaterThan = nodeProxy(OperatorNode, ">");
var lessThanEqual = nodeProxy(OperatorNode, "<=");
var greaterThanEqual = nodeProxy(OperatorNode, ">=");
var and = nodeProxy(OperatorNode, "&&");
var or = nodeProxy(OperatorNode, "||");
var not = nodeProxy(OperatorNode, "!");
var xor = nodeProxy(OperatorNode, "^^");
var bitAnd = nodeProxy(OperatorNode, "&");
var bitNot = nodeProxy(OperatorNode, "~");
var bitOr = nodeProxy(OperatorNode, "|");
var bitXor = nodeProxy(OperatorNode, "^");
var shiftLeft = nodeProxy(OperatorNode, "<<");
var shiftRight = nodeProxy(OperatorNode, ">>");
addMethodChaining("add", add);
addMethodChaining("sub", sub);
addMethodChaining("mul", mul);
addMethodChaining("div", div);
addMethodChaining("modInt", modInt);
addMethodChaining("equal", equal);
addMethodChaining("notEqual", notEqual);
addMethodChaining("lessThan", lessThan);
addMethodChaining("greaterThan", greaterThan);
addMethodChaining("lessThanEqual", lessThanEqual);
addMethodChaining("greaterThanEqual", greaterThanEqual);
addMethodChaining("and", and);
addMethodChaining("or", or);
addMethodChaining("not", not);
addMethodChaining("xor", xor);
addMethodChaining("bitAnd", bitAnd);
addMethodChaining("bitNot", bitNot);
addMethodChaining("bitOr", bitOr);
addMethodChaining("bitXor", bitXor);
addMethodChaining("shiftLeft", shiftLeft);
addMethodChaining("shiftRight", shiftRight);
var remainder = (...params) => {
  console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt().");
  return modInt(...params);
};
addMethodChaining("remainder", remainder);
var MathNode = class _MathNode extends TempNode {
  static get type() {
    return "MathNode";
  }
  constructor(method, aNode, bNode = null, cNode = null) {
    super();
    this.method = method;
    this.aNode = aNode;
    this.bNode = bNode;
    this.cNode = cNode;
  }
  getInputType(builder) {
    const aType = this.aNode.getNodeType(builder);
    const bType = this.bNode ? this.bNode.getNodeType(builder) : null;
    const cType = this.cNode ? this.cNode.getNodeType(builder) : null;
    const aLen = builder.isMatrix(aType) ? 0 : builder.getTypeLength(aType);
    const bLen = builder.isMatrix(bType) ? 0 : builder.getTypeLength(bType);
    const cLen = builder.isMatrix(cType) ? 0 : builder.getTypeLength(cType);
    if (aLen > bLen && aLen > cLen) {
      return aType;
    } else if (bLen > cLen) {
      return bType;
    } else if (cLen > aLen) {
      return cType;
    }
    return aType;
  }
  getNodeType(builder) {
    const method = this.method;
    if (method === _MathNode.LENGTH || method === _MathNode.DISTANCE || method === _MathNode.DOT) {
      return "float";
    } else if (method === _MathNode.CROSS) {
      return "vec3";
    } else if (method === _MathNode.ALL) {
      return "bool";
    } else if (method === _MathNode.EQUALS) {
      return builder.changeComponentType(this.aNode.getNodeType(builder), "bool");
    } else if (method === _MathNode.MOD) {
      return this.aNode.getNodeType(builder);
    } else {
      return this.getInputType(builder);
    }
  }
  generate(builder, output2) {
    const method = this.method;
    const type = this.getNodeType(builder);
    const inputType = this.getInputType(builder);
    const a = this.aNode;
    const b = this.bNode;
    const c = this.cNode;
    const isWebGL = builder.renderer.isWebGLRenderer === true;
    if (method === _MathNode.TRANSFORM_DIRECTION) {
      let tA = a;
      let tB = b;
      if (builder.isMatrix(tA.getNodeType(builder))) {
        tB = vec4(vec3(tB), 0);
      } else {
        tA = vec4(vec3(tA), 0);
      }
      const mulNode = mul(tA, tB).xyz;
      return normalize(mulNode).build(builder, output2);
    } else if (method === _MathNode.NEGATE) {
      return builder.format("( - " + a.build(builder, inputType) + " )", type, output2);
    } else if (method === _MathNode.ONE_MINUS) {
      return sub(1, a).build(builder, output2);
    } else if (method === _MathNode.RECIPROCAL) {
      return div(1, a).build(builder, output2);
    } else if (method === _MathNode.DIFFERENCE) {
      return abs(sub(a, b)).build(builder, output2);
    } else {
      const params = [];
      if (method === _MathNode.CROSS || method === _MathNode.MOD) {
        params.push(
          a.build(builder, type),
          b.build(builder, type)
        );
      } else if (isWebGL && method === _MathNode.STEP) {
        params.push(
          a.build(builder, builder.getTypeLength(a.getNodeType(builder)) === 1 ? "float" : inputType),
          b.build(builder, inputType)
        );
      } else if (isWebGL && (method === _MathNode.MIN || method === _MathNode.MAX) || method === _MathNode.MOD) {
        params.push(
          a.build(builder, inputType),
          b.build(builder, builder.getTypeLength(b.getNodeType(builder)) === 1 ? "float" : inputType)
        );
      } else if (method === _MathNode.REFRACT) {
        params.push(
          a.build(builder, inputType),
          b.build(builder, inputType),
          c.build(builder, "float")
        );
      } else if (method === _MathNode.MIX) {
        params.push(
          a.build(builder, inputType),
          b.build(builder, inputType),
          c.build(builder, builder.getTypeLength(c.getNodeType(builder)) === 1 ? "float" : inputType)
        );
      } else {
        params.push(a.build(builder, inputType));
        if (b !== null) params.push(b.build(builder, inputType));
        if (c !== null) params.push(c.build(builder, inputType));
      }
      return builder.format(`${builder.getMethod(method, type)}( ${params.join(", ")} )`, type, output2);
    }
  }
  serialize(data) {
    super.serialize(data);
    data.method = this.method;
  }
  deserialize(data) {
    super.deserialize(data);
    this.method = data.method;
  }
};
MathNode.ALL = "all";
MathNode.ANY = "any";
MathNode.EQUALS = "equals";
MathNode.RADIANS = "radians";
MathNode.DEGREES = "degrees";
MathNode.EXP = "exp";
MathNode.EXP2 = "exp2";
MathNode.LOG = "log";
MathNode.LOG2 = "log2";
MathNode.SQRT = "sqrt";
MathNode.INVERSE_SQRT = "inversesqrt";
MathNode.FLOOR = "floor";
MathNode.CEIL = "ceil";
MathNode.NORMALIZE = "normalize";
MathNode.FRACT = "fract";
MathNode.SIN = "sin";
MathNode.COS = "cos";
MathNode.TAN = "tan";
MathNode.ASIN = "asin";
MathNode.ACOS = "acos";
MathNode.ATAN = "atan";
MathNode.ABS = "abs";
MathNode.SIGN = "sign";
MathNode.LENGTH = "length";
MathNode.NEGATE = "negate";
MathNode.ONE_MINUS = "oneMinus";
MathNode.DFDX = "dFdx";
MathNode.DFDY = "dFdy";
MathNode.ROUND = "round";
MathNode.RECIPROCAL = "reciprocal";
MathNode.TRUNC = "trunc";
MathNode.FWIDTH = "fwidth";
MathNode.BITCAST = "bitcast";
MathNode.TRANSPOSE = "transpose";
MathNode.ATAN2 = "atan2";
MathNode.MIN = "min";
MathNode.MAX = "max";
MathNode.MOD = "mod";
MathNode.STEP = "step";
MathNode.REFLECT = "reflect";
MathNode.DISTANCE = "distance";
MathNode.DIFFERENCE = "difference";
MathNode.DOT = "dot";
MathNode.CROSS = "cross";
MathNode.POW = "pow";
MathNode.TRANSFORM_DIRECTION = "transformDirection";
MathNode.MIX = "mix";
MathNode.CLAMP = "clamp";
MathNode.REFRACT = "refract";
MathNode.SMOOTHSTEP = "smoothstep";
MathNode.FACEFORWARD = "faceforward";
var EPSILON = float(1e-6);
var INFINITY = float(1e6);
var PI = float(Math.PI);
var PI2 = float(Math.PI * 2);
var all = nodeProxy(MathNode, MathNode.ALL);
var any = nodeProxy(MathNode, MathNode.ANY);
var equals = nodeProxy(MathNode, MathNode.EQUALS);
var radians = nodeProxy(MathNode, MathNode.RADIANS);
var degrees = nodeProxy(MathNode, MathNode.DEGREES);
var exp = nodeProxy(MathNode, MathNode.EXP);
var exp2 = nodeProxy(MathNode, MathNode.EXP2);
var log = nodeProxy(MathNode, MathNode.LOG);
var log2 = nodeProxy(MathNode, MathNode.LOG2);
var sqrt = nodeProxy(MathNode, MathNode.SQRT);
var inverseSqrt = nodeProxy(MathNode, MathNode.INVERSE_SQRT);
var floor = nodeProxy(MathNode, MathNode.FLOOR);
var ceil = nodeProxy(MathNode, MathNode.CEIL);
var normalize = nodeProxy(MathNode, MathNode.NORMALIZE);
var fract = nodeProxy(MathNode, MathNode.FRACT);
var sin = nodeProxy(MathNode, MathNode.SIN);
var cos = nodeProxy(MathNode, MathNode.COS);
var tan = nodeProxy(MathNode, MathNode.TAN);
var asin = nodeProxy(MathNode, MathNode.ASIN);
var acos = nodeProxy(MathNode, MathNode.ACOS);
var atan = nodeProxy(MathNode, MathNode.ATAN);
var abs = nodeProxy(MathNode, MathNode.ABS);
var sign = nodeProxy(MathNode, MathNode.SIGN);
var length = nodeProxy(MathNode, MathNode.LENGTH);
var negate = nodeProxy(MathNode, MathNode.NEGATE);
var oneMinus = nodeProxy(MathNode, MathNode.ONE_MINUS);
var dFdx = nodeProxy(MathNode, MathNode.DFDX);
var dFdy = nodeProxy(MathNode, MathNode.DFDY);
var round = nodeProxy(MathNode, MathNode.ROUND);
var reciprocal = nodeProxy(MathNode, MathNode.RECIPROCAL);
var trunc = nodeProxy(MathNode, MathNode.TRUNC);
var fwidth = nodeProxy(MathNode, MathNode.FWIDTH);
var bitcast = nodeProxy(MathNode, MathNode.BITCAST);
var transpose = nodeProxy(MathNode, MathNode.TRANSPOSE);
var atan2 = nodeProxy(MathNode, MathNode.ATAN2);
var min$1 = nodeProxy(MathNode, MathNode.MIN);
var max$1 = nodeProxy(MathNode, MathNode.MAX);
var mod = nodeProxy(MathNode, MathNode.MOD);
var step = nodeProxy(MathNode, MathNode.STEP);
var reflect = nodeProxy(MathNode, MathNode.REFLECT);
var distance = nodeProxy(MathNode, MathNode.DISTANCE);
var difference = nodeProxy(MathNode, MathNode.DIFFERENCE);
var dot = nodeProxy(MathNode, MathNode.DOT);
var cross = nodeProxy(MathNode, MathNode.CROSS);
var pow = nodeProxy(MathNode, MathNode.POW);
var pow2 = nodeProxy(MathNode, MathNode.POW, 2);
var pow3 = nodeProxy(MathNode, MathNode.POW, 3);
var pow4 = nodeProxy(MathNode, MathNode.POW, 4);
var transformDirection = nodeProxy(MathNode, MathNode.TRANSFORM_DIRECTION);
var cbrt = (a) => mul(sign(a), pow(abs(a), 1 / 3));
var lengthSq = (a) => dot(a, a);
var mix = nodeProxy(MathNode, MathNode.MIX);
var clamp = (value, low = 0, high = 1) => nodeObject(new MathNode(MathNode.CLAMP, nodeObject(value), nodeObject(low), nodeObject(high)));
var saturate = (value) => clamp(value);
var refract = nodeProxy(MathNode, MathNode.REFRACT);
var smoothstep = nodeProxy(MathNode, MathNode.SMOOTHSTEP);
var faceForward = nodeProxy(MathNode, MathNode.FACEFORWARD);
var rand = Fn(([uv2]) => {
  const a = 12.9898, b = 78.233, c = 43758.5453;
  const dt = dot(uv2.xy, vec2(a, b)), sn = mod(dt, PI);
  return fract(sin(sn).mul(c));
});
var mixElement = (t, e1, e2) => mix(e1, e2, t);
var smoothstepElement = (x, low, high) => smoothstep(low, high, x);
addMethodChaining("all", all);
addMethodChaining("any", any);
addMethodChaining("equals", equals);
addMethodChaining("radians", radians);
addMethodChaining("degrees", degrees);
addMethodChaining("exp", exp);
addMethodChaining("exp2", exp2);
addMethodChaining("log", log);
addMethodChaining("log2", log2);
addMethodChaining("sqrt", sqrt);
addMethodChaining("inverseSqrt", inverseSqrt);
addMethodChaining("floor", floor);
addMethodChaining("ceil", ceil);
addMethodChaining("normalize", normalize);
addMethodChaining("fract", fract);
addMethodChaining("sin", sin);
addMethodChaining("cos", cos);
addMethodChaining("tan", tan);
addMethodChaining("asin", asin);
addMethodChaining("acos", acos);
addMethodChaining("atan", atan);
addMethodChaining("abs", abs);
addMethodChaining("sign", sign);
addMethodChaining("length", length);
addMethodChaining("lengthSq", lengthSq);
addMethodChaining("negate", negate);
addMethodChaining("oneMinus", oneMinus);
addMethodChaining("dFdx", dFdx);
addMethodChaining("dFdy", dFdy);
addMethodChaining("round", round);
addMethodChaining("reciprocal", reciprocal);
addMethodChaining("trunc", trunc);
addMethodChaining("fwidth", fwidth);
addMethodChaining("atan2", atan2);
addMethodChaining("min", min$1);
addMethodChaining("max", max$1);
addMethodChaining("mod", mod);
addMethodChaining("step", step);
addMethodChaining("reflect", reflect);
addMethodChaining("distance", distance);
addMethodChaining("dot", dot);
addMethodChaining("cross", cross);
addMethodChaining("pow", pow);
addMethodChaining("pow2", pow2);
addMethodChaining("pow3", pow3);
addMethodChaining("pow4", pow4);
addMethodChaining("transformDirection", transformDirection);
addMethodChaining("mix", mixElement);
addMethodChaining("clamp", clamp);
addMethodChaining("refract", refract);
addMethodChaining("smoothstep", smoothstepElement);
addMethodChaining("faceForward", faceForward);
addMethodChaining("difference", difference);
addMethodChaining("saturate", saturate);
addMethodChaining("cbrt", cbrt);
addMethodChaining("transpose", transpose);
addMethodChaining("rand", rand);
var ConditionalNode = class extends Node {
  static get type() {
    return "ConditionalNode";
  }
  constructor(condNode, ifNode, elseNode = null) {
    super();
    this.condNode = condNode;
    this.ifNode = ifNode;
    this.elseNode = elseNode;
  }
  getNodeType(builder) {
    const ifType = this.ifNode.getNodeType(builder);
    if (this.elseNode !== null) {
      const elseType = this.elseNode.getNodeType(builder);
      if (builder.getTypeLength(elseType) > builder.getTypeLength(ifType)) {
        return elseType;
      }
    }
    return ifType;
  }
  setup(builder) {
    const condNode = this.condNode.cache();
    const ifNode = this.ifNode.cache();
    const elseNode = this.elseNode ? this.elseNode.cache() : null;
    const currentNodeBlock = builder.context.nodeBlock;
    builder.getDataFromNode(ifNode).parentNodeBlock = currentNodeBlock;
    if (elseNode !== null) builder.getDataFromNode(elseNode).parentNodeBlock = currentNodeBlock;
    const properties = builder.getNodeProperties(this);
    properties.condNode = condNode;
    properties.ifNode = ifNode.context({ nodeBlock: ifNode });
    properties.elseNode = elseNode ? elseNode.context({ nodeBlock: elseNode }) : null;
  }
  generate(builder, output2) {
    const type = this.getNodeType(builder);
    const nodeData = builder.getDataFromNode(this);
    if (nodeData.nodeProperty !== void 0) {
      return nodeData.nodeProperty;
    }
    const { condNode, ifNode, elseNode } = builder.getNodeProperties(this);
    const needsOutput = output2 !== "void";
    const nodeProperty = needsOutput ? property(type).build(builder) : "";
    nodeData.nodeProperty = nodeProperty;
    const nodeSnippet = condNode.build(builder, "bool");
    builder.addFlowCode(`
${builder.tab}if ( ${nodeSnippet} ) {

`).addFlowTab();
    let ifSnippet = ifNode.build(builder, type);
    if (ifSnippet) {
      if (needsOutput) {
        ifSnippet = nodeProperty + " = " + ifSnippet + ";";
      } else {
        ifSnippet = "return " + ifSnippet + ";";
      }
    }
    builder.removeFlowTab().addFlowCode(builder.tab + "	" + ifSnippet + "\n\n" + builder.tab + "}");
    if (elseNode !== null) {
      builder.addFlowCode(" else {\n\n").addFlowTab();
      let elseSnippet = elseNode.build(builder, type);
      if (elseSnippet) {
        if (needsOutput) {
          elseSnippet = nodeProperty + " = " + elseSnippet + ";";
        } else {
          elseSnippet = "return " + elseSnippet + ";";
        }
      }
      builder.removeFlowTab().addFlowCode(builder.tab + "	" + elseSnippet + "\n\n" + builder.tab + "}\n\n");
    } else {
      builder.addFlowCode("\n\n");
    }
    return builder.format(nodeProperty, type, output2);
  }
};
var select = nodeProxy(ConditionalNode);
addMethodChaining("select", select);
var cond = (...params) => {
  console.warn("TSL.ConditionalNode: cond() has been renamed to select().");
  return select(...params);
};
addMethodChaining("cond", cond);
var ContextNode = class extends Node {
  static get type() {
    return "ContextNode";
  }
  constructor(node, value = {}) {
    super();
    this.isContextNode = true;
    this.node = node;
    this.value = value;
  }
  getScope() {
    return this.node.getScope();
  }
  getNodeType(builder) {
    return this.node.getNodeType(builder);
  }
  analyze(builder) {
    this.node.build(builder);
  }
  setup(builder) {
    const previousContext = builder.getContext();
    builder.setContext({ ...builder.context, ...this.value });
    const node = this.node.build(builder);
    builder.setContext(previousContext);
    return node;
  }
  generate(builder, output2) {
    const previousContext = builder.getContext();
    builder.setContext({ ...builder.context, ...this.value });
    const snippet = this.node.build(builder, output2);
    builder.setContext(previousContext);
    return snippet;
  }
};
var context = nodeProxy(ContextNode);
var label = (node, name) => context(node, { label: name });
addMethodChaining("context", context);
addMethodChaining("label", label);
var VarNode = class extends Node {
  static get type() {
    return "VarNode";
  }
  constructor(node, name = null) {
    super();
    this.node = node;
    this.name = name;
    this.global = true;
    this.isVarNode = true;
  }
  getHash(builder) {
    return this.name || super.getHash(builder);
  }
  getNodeType(builder) {
    return this.node.getNodeType(builder);
  }
  generate(builder) {
    const { node, name } = this;
    const nodeVar = builder.getVarFromNode(this, name, builder.getVectorType(this.getNodeType(builder)));
    const propertyName = builder.getPropertyName(nodeVar);
    const snippet = node.build(builder, nodeVar.type);
    builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
    return propertyName;
  }
};
var createVar = nodeProxy(VarNode);
addMethodChaining("toVar", (...params) => createVar(...params).append());
var temp = (node) => {
  console.warn('TSL: "temp" is deprecated. Use ".toVar()" instead.');
  return createVar(node);
};
addMethodChaining("temp", temp);
var VaryingNode = class extends Node {
  static get type() {
    return "VaryingNode";
  }
  constructor(node, name = null) {
    super();
    this.node = node;
    this.name = name;
    this.isVaryingNode = true;
  }
  isGlobal() {
    return true;
  }
  getHash(builder) {
    return this.name || super.getHash(builder);
  }
  getNodeType(builder) {
    return this.node.getNodeType(builder);
  }
  setupVarying(builder) {
    const properties = builder.getNodeProperties(this);
    let varying2 = properties.varying;
    if (varying2 === void 0) {
      const name = this.name;
      const type = this.getNodeType(builder);
      properties.varying = varying2 = builder.getVaryingFromNode(this, name, type);
      properties.node = this.node;
    }
    varying2.needsInterpolation || (varying2.needsInterpolation = builder.shaderStage === "fragment");
    return varying2;
  }
  setup(builder) {
    this.setupVarying(builder);
  }
  analyze(builder) {
    this.setupVarying(builder);
    return this.node.analyze(builder);
  }
  generate(builder) {
    const properties = builder.getNodeProperties(this);
    const varying2 = this.setupVarying(builder);
    if (properties.propertyName === void 0) {
      const type = this.getNodeType(builder);
      const propertyName = builder.getPropertyName(varying2, NodeShaderStage.VERTEX);
      builder.flowNodeFromShaderStage(NodeShaderStage.VERTEX, this.node, type, propertyName);
      properties.propertyName = propertyName;
    }
    return builder.getPropertyName(varying2);
  }
};
var varying = nodeProxy(VaryingNode);
addMethodChaining("varying", varying);
var sRGBTransferEOTF = Fn(([color2]) => {
  const a = color2.mul(0.9478672986).add(0.0521327014).pow(2.4);
  const b = color2.mul(0.0773993808);
  const factor = color2.lessThanEqual(0.04045);
  const rgbResult = mix(a, b, factor);
  return rgbResult;
}).setLayout({
  name: "sRGBTransferEOTF",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" }
  ]
});
var sRGBTransferOETF = Fn(([color2]) => {
  const a = color2.pow(0.41666).mul(1.055).sub(0.055);
  const b = color2.mul(12.92);
  const factor = color2.lessThanEqual(31308e-7);
  const rgbResult = mix(a, b, factor);
  return rgbResult;
}).setLayout({
  name: "sRGBTransferOETF",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" }
  ]
});
var WORKING_COLOR_SPACE = "WorkingColorSpace";
var OUTPUT_COLOR_SPACE = "OutputColorSpace";
var ColorSpaceNode = class extends TempNode {
  static get type() {
    return "ColorSpaceNode";
  }
  constructor(colorNode, source, target) {
    super("vec4");
    this.colorNode = colorNode;
    this.source = source;
    this.target = target;
  }
  resolveColorSpace(builder, colorSpace) {
    if (colorSpace === WORKING_COLOR_SPACE) {
      return ColorManagement.workingColorSpace;
    } else if (colorSpace === OUTPUT_COLOR_SPACE) {
      return builder.context.outputColorSpace || builder.renderer.outputColorSpace;
    }
    return colorSpace;
  }
  setup(builder) {
    const { colorNode } = this;
    const source = this.resolveColorSpace(builder, this.source);
    const target = this.resolveColorSpace(builder, this.target);
    let outputNode = colorNode;
    if (ColorManagement.enabled === false || source === target || !source || !target) {
      return outputNode;
    }
    if (ColorManagement.getTransfer(source) === SRGBTransfer) {
      outputNode = vec4(sRGBTransferEOTF(outputNode.rgb), outputNode.a);
    }
    if (ColorManagement.getPrimaries(source) !== ColorManagement.getPrimaries(target)) {
      outputNode = vec4(
        mat3(ColorManagement._getMatrix(new Matrix3(), source, target)).mul(outputNode.rgb),
        outputNode.a
      );
    }
    if (ColorManagement.getTransfer(target) === SRGBTransfer) {
      outputNode = vec4(sRGBTransferOETF(outputNode.rgb), outputNode.a);
    }
    return outputNode;
  }
};
var toOutputColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, OUTPUT_COLOR_SPACE));
var toWorkingColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), OUTPUT_COLOR_SPACE, WORKING_COLOR_SPACE));
var workingToColorSpace = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, colorSpace));
var colorSpaceToWorking = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), colorSpace, WORKING_COLOR_SPACE));
addMethodChaining("toOutputColorSpace", toOutputColorSpace);
addMethodChaining("toWorkingColorSpace", toWorkingColorSpace);
addMethodChaining("workingToColorSpace", workingToColorSpace);
addMethodChaining("colorSpaceToWorking", colorSpaceToWorking);
var ReferenceElementNode$1 = class ReferenceElementNode extends ArrayElementNode {
  static get type() {
    return "ReferenceElementNode";
  }
  constructor(referenceNode, indexNode) {
    super(referenceNode, indexNode);
    this.referenceNode = referenceNode;
    this.isReferenceElementNode = true;
  }
  getNodeType() {
    return this.referenceNode.uniformType;
  }
  generate(builder) {
    const snippet = super.generate(builder);
    const arrayType = this.referenceNode.getNodeType();
    const elementType = this.getNodeType();
    return builder.format(snippet, arrayType, elementType);
  }
};
var ReferenceBaseNode = class extends Node {
  static get type() {
    return "ReferenceBaseNode";
  }
  constructor(property2, uniformType, object = null, count = null) {
    super();
    this.property = property2;
    this.uniformType = uniformType;
    this.object = object;
    this.count = count;
    this.properties = property2.split(".");
    this.reference = object;
    this.node = null;
    this.group = null;
    this.updateType = NodeUpdateType.OBJECT;
  }
  setGroup(group) {
    this.group = group;
    return this;
  }
  element(indexNode) {
    return nodeObject(new ReferenceElementNode$1(this, nodeObject(indexNode)));
  }
  setNodeType(uniformType) {
    const node = uniform(null, uniformType).getSelf();
    if (this.group !== null) {
      node.setGroup(this.group);
    }
    this.node = node;
  }
  getNodeType(builder) {
    if (this.node === null) {
      this.updateReference(builder);
      this.updateValue();
    }
    return this.node.getNodeType(builder);
  }
  getValueFromReference(object = this.reference) {
    const { properties } = this;
    let value = object[properties[0]];
    for (let i = 1; i < properties.length; i++) {
      value = value[properties[i]];
    }
    return value;
  }
  updateReference(state) {
    this.reference = this.object !== null ? this.object : state.object;
    return this.reference;
  }
  setup() {
    this.updateValue();
    return this.node;
  }
  update() {
    this.updateValue();
  }
  updateValue() {
    if (this.node === null) this.setNodeType(this.uniformType);
    const value = this.getValueFromReference();
    if (Array.isArray(value)) {
      this.node.array = value;
    } else {
      this.node.value = value;
    }
  }
};
var RendererReferenceNode = class extends ReferenceBaseNode {
  static get type() {
    return "RendererReferenceNode";
  }
  constructor(property2, inputType, renderer = null) {
    super(property2, inputType, renderer);
    this.renderer = renderer;
    this.setGroup(renderGroup);
  }
  updateReference(state) {
    this.reference = this.renderer !== null ? this.renderer : state.renderer;
    return this.reference;
  }
};
var rendererReference = (name, type, renderer) => nodeObject(new RendererReferenceNode(name, type, renderer));
var ToneMappingNode = class extends TempNode {
  static get type() {
    return "ToneMappingNode";
  }
  constructor(toneMapping2, exposureNode = toneMappingExposure, colorNode = null) {
    super("vec3");
    this.toneMapping = toneMapping2;
    this.exposureNode = exposureNode;
    this.colorNode = colorNode;
  }
  getCacheKey() {
    return hash$1(super.getCacheKey(), this.toneMapping);
  }
  setup(builder) {
    const colorNode = this.colorNode || builder.context.color;
    const toneMapping2 = this.toneMapping;
    if (toneMapping2 === NoToneMapping) return colorNode;
    let outputNode = null;
    const toneMappingFn = builder.renderer.library.getToneMappingFunction(toneMapping2);
    if (toneMappingFn !== null) {
      outputNode = vec4(toneMappingFn(colorNode.rgb, this.exposureNode), colorNode.a);
    } else {
      console.error("ToneMappingNode: Unsupported Tone Mapping configuration.", toneMapping2);
      outputNode = colorNode;
    }
    return outputNode;
  }
};
var toneMapping = (mapping, exposure, color2) => nodeObject(new ToneMappingNode(mapping, nodeObject(exposure), nodeObject(color2)));
var toneMappingExposure = rendererReference("toneMappingExposure", "float");
addMethodChaining("toneMapping", (color2, mapping, exposure) => toneMapping(mapping, exposure, color2));
var BufferAttributeNode = class extends InputNode {
  static get type() {
    return "BufferAttributeNode";
  }
  constructor(value, bufferType = null, bufferStride = 0, bufferOffset = 0) {
    super(value, bufferType);
    this.isBufferNode = true;
    this.bufferType = bufferType;
    this.bufferStride = bufferStride;
    this.bufferOffset = bufferOffset;
    this.usage = StaticDrawUsage;
    this.instanced = false;
    this.attribute = null;
    this.global = true;
    if (value && value.isBufferAttribute === true) {
      this.attribute = value;
      this.usage = value.usage;
      this.instanced = value.isInstancedBufferAttribute;
    }
  }
  getHash(builder) {
    if (this.bufferStride === 0 && this.bufferOffset === 0) {
      let bufferData = builder.globalCache.getData(this.value);
      if (bufferData === void 0) {
        bufferData = {
          node: this
        };
        builder.globalCache.setData(this.value, bufferData);
      }
      return bufferData.node.uuid;
    }
    return this.uuid;
  }
  getNodeType(builder) {
    if (this.bufferType === null) {
      this.bufferType = builder.getTypeFromAttribute(this.attribute);
    }
    return this.bufferType;
  }
  setup(builder) {
    if (this.attribute !== null) return;
    const type = this.getNodeType(builder);
    const array = this.value;
    const itemSize = builder.getTypeLength(type);
    const stride = this.bufferStride || itemSize;
    const offset = this.bufferOffset;
    const buffer2 = array.isInterleavedBuffer === true ? array : new InterleavedBuffer(array, stride);
    const bufferAttribute2 = new InterleavedBufferAttribute(buffer2, itemSize, offset);
    buffer2.setUsage(this.usage);
    this.attribute = bufferAttribute2;
    this.attribute.isInstancedBufferAttribute = this.instanced;
  }
  generate(builder) {
    const nodeType = this.getNodeType(builder);
    const nodeAttribute = builder.getBufferAttributeFromNode(this, nodeType);
    const propertyName = builder.getPropertyName(nodeAttribute);
    let output2 = null;
    if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
      this.name = propertyName;
      output2 = propertyName;
    } else {
      const nodeVarying = varying(this);
      output2 = nodeVarying.build(builder, nodeType);
    }
    return output2;
  }
  getInputType() {
    return "bufferAttribute";
  }
  setUsage(value) {
    this.usage = value;
    if (this.attribute && this.attribute.isBufferAttribute === true) {
      this.attribute.usage = value;
    }
    return this;
  }
  setInstanced(value) {
    this.instanced = value;
    return this;
  }
};
var bufferAttribute = (array, type, stride, offset) => nodeObject(new BufferAttributeNode(array, type, stride, offset));
var dynamicBufferAttribute = (array, type, stride, offset) => bufferAttribute(array, type, stride, offset).setUsage(DynamicDrawUsage);
var instancedBufferAttribute = (array, type, stride, offset) => bufferAttribute(array, type, stride, offset).setInstanced(true);
var instancedDynamicBufferAttribute = (array, type, stride, offset) => dynamicBufferAttribute(array, type, stride, offset).setInstanced(true);
addMethodChaining("toAttribute", (bufferNode) => bufferAttribute(bufferNode.value));
var ComputeNode = class extends Node {
  static get type() {
    return "ComputeNode";
  }
  constructor(computeNode, count, workgroupSize = [64]) {
    super("void");
    this.isComputeNode = true;
    this.computeNode = computeNode;
    this.count = count;
    this.workgroupSize = workgroupSize;
    this.dispatchCount = 0;
    this.version = 1;
    this.updateBeforeType = NodeUpdateType.OBJECT;
    this.onInitFunction = null;
    this.updateDispatchCount();
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  updateDispatchCount() {
    const { count, workgroupSize } = this;
    let size = workgroupSize[0];
    for (let i = 1; i < workgroupSize.length; i++)
      size *= workgroupSize[i];
    this.dispatchCount = Math.ceil(count / size);
  }
  onInit(callback) {
    this.onInitFunction = callback;
    return this;
  }
  updateBefore({ renderer }) {
    renderer.compute(this);
  }
  generate(builder) {
    const { shaderStage } = builder;
    if (shaderStage === "compute") {
      const snippet = this.computeNode.build(builder, "void");
      if (snippet !== "") {
        builder.addLineFlowCode(snippet, this);
      }
    }
  }
};
var compute = (node, count, workgroupSize) => nodeObject(new ComputeNode(nodeObject(node), count, workgroupSize));
addMethodChaining("compute", compute);
var CacheNode = class extends Node {
  static get type() {
    return "CacheNode";
  }
  constructor(node, parent = true) {
    super();
    this.node = node;
    this.parent = parent;
    this.isCacheNode = true;
  }
  getNodeType(builder) {
    return this.node.getNodeType(builder);
  }
  build(builder, ...params) {
    const previousCache = builder.getCache();
    const cache2 = builder.getCacheFromNode(this, this.parent);
    builder.setCache(cache2);
    const data = this.node.build(builder, ...params);
    builder.setCache(previousCache);
    return data;
  }
};
var cache = (node, ...params) => nodeObject(new CacheNode(nodeObject(node), ...params));
addMethodChaining("cache", cache);
var BypassNode = class extends Node {
  static get type() {
    return "BypassNode";
  }
  constructor(returnNode, callNode) {
    super();
    this.isBypassNode = true;
    this.outputNode = returnNode;
    this.callNode = callNode;
  }
  getNodeType(builder) {
    return this.outputNode.getNodeType(builder);
  }
  generate(builder) {
    const snippet = this.callNode.build(builder, "void");
    if (snippet !== "") {
      builder.addLineFlowCode(snippet, this);
    }
    return this.outputNode.build(builder);
  }
};
var bypass = nodeProxy(BypassNode);
addMethodChaining("bypass", bypass);
var RemapNode = class extends Node {
  static get type() {
    return "RemapNode";
  }
  constructor(node, inLowNode, inHighNode, outLowNode = float(0), outHighNode = float(1)) {
    super();
    this.node = node;
    this.inLowNode = inLowNode;
    this.inHighNode = inHighNode;
    this.outLowNode = outLowNode;
    this.outHighNode = outHighNode;
    this.doClamp = true;
  }
  setup() {
    const { node, inLowNode, inHighNode, outLowNode, outHighNode, doClamp } = this;
    let t = node.sub(inLowNode).div(inHighNode.sub(inLowNode));
    if (doClamp === true) t = t.clamp();
    return t.mul(outHighNode.sub(outLowNode)).add(outLowNode);
  }
};
var remap = nodeProxy(RemapNode, null, null, { doClamp: false });
var remapClamp = nodeProxy(RemapNode);
addMethodChaining("remap", remap);
addMethodChaining("remapClamp", remapClamp);
var ExpressionNode = class extends Node {
  static get type() {
    return "ExpressionNode";
  }
  constructor(snippet = "", nodeType = "void") {
    super(nodeType);
    this.snippet = snippet;
  }
  generate(builder, output2) {
    const type = this.getNodeType(builder);
    const snippet = this.snippet;
    if (type === "void") {
      builder.addLineFlowCode(snippet, this);
    } else {
      return builder.format(`( ${snippet} )`, type, output2);
    }
  }
};
var expression = nodeProxy(ExpressionNode);
var Discard = (conditional) => (conditional ? select(conditional, expression("discard")) : expression("discard")).append();
addMethodChaining("discard", Discard);
var RenderOutputNode = class extends TempNode {
  static get type() {
    return "RenderOutputNode";
  }
  constructor(colorNode, toneMapping2, outputColorSpace) {
    super("vec4");
    this.colorNode = colorNode;
    this.toneMapping = toneMapping2;
    this.outputColorSpace = outputColorSpace;
    this.isRenderOutput = true;
  }
  setup({ context: context2 }) {
    let outputNode = this.colorNode || context2.color;
    const toneMapping2 = (this.toneMapping !== null ? this.toneMapping : context2.toneMapping) || NoToneMapping;
    const outputColorSpace = (this.outputColorSpace !== null ? this.outputColorSpace : context2.outputColorSpace) || NoColorSpace;
    if (toneMapping2 !== NoToneMapping) {
      outputNode = outputNode.toneMapping(toneMapping2);
    }
    if (outputColorSpace !== NoColorSpace && outputColorSpace !== ColorManagement.workingColorSpace) {
      outputNode = outputNode.workingToColorSpace(outputColorSpace);
    }
    return outputNode;
  }
};
var renderOutput = (color2, toneMapping2 = null, outputColorSpace = null) => nodeObject(new RenderOutputNode(nodeObject(color2), toneMapping2, outputColorSpace));
addMethodChaining("renderOutput", renderOutput);
var AttributeNode = class extends Node {
  static get type() {
    return "AttributeNode";
  }
  constructor(attributeName, nodeType = null) {
    super(nodeType);
    this.global = true;
    this._attributeName = attributeName;
  }
  getHash(builder) {
    return this.getAttributeName(builder);
  }
  getNodeType(builder) {
    let nodeType = this.nodeType;
    if (nodeType === null) {
      const attributeName = this.getAttributeName(builder);
      if (builder.hasGeometryAttribute(attributeName)) {
        const attribute2 = builder.geometry.getAttribute(attributeName);
        nodeType = builder.getTypeFromAttribute(attribute2);
      } else {
        nodeType = "float";
      }
    }
    return nodeType;
  }
  setAttributeName(attributeName) {
    this._attributeName = attributeName;
    return this;
  }
  getAttributeName() {
    return this._attributeName;
  }
  generate(builder) {
    const attributeName = this.getAttributeName(builder);
    const nodeType = this.getNodeType(builder);
    const geometryAttribute = builder.hasGeometryAttribute(attributeName);
    if (geometryAttribute === true) {
      const attribute2 = builder.geometry.getAttribute(attributeName);
      const attributeType = builder.getTypeFromAttribute(attribute2);
      const nodeAttribute = builder.getAttribute(attributeName, attributeType);
      if (builder.shaderStage === "vertex") {
        return builder.format(nodeAttribute.name, attributeType, nodeType);
      } else {
        const nodeVarying = varying(this);
        return nodeVarying.build(builder, nodeType);
      }
    } else {
      console.warn(`AttributeNode: Vertex attribute "${attributeName}" not found on geometry.`);
      return builder.generateConst(nodeType);
    }
  }
  serialize(data) {
    super.serialize(data);
    data.global = this.global;
    data._attributeName = this._attributeName;
  }
  deserialize(data) {
    super.deserialize(data);
    this.global = data.global;
    this._attributeName = data._attributeName;
  }
};
var attribute = (name, nodeType) => nodeObject(new AttributeNode(name, nodeType));
var uv = (index) => attribute("uv" + (index > 0 ? index : ""), "vec2");
var TextureSizeNode = class extends Node {
  static get type() {
    return "TextureSizeNode";
  }
  constructor(textureNode, levelNode = null) {
    super("uvec2");
    this.isTextureSizeNode = true;
    this.textureNode = textureNode;
    this.levelNode = levelNode;
  }
  generate(builder, output2) {
    const textureProperty = this.textureNode.build(builder, "property");
    const level = this.levelNode === null ? "0" : this.levelNode.build(builder, "int");
    return builder.format(`${builder.getMethod("textureDimensions")}( ${textureProperty}, ${level} )`, this.getNodeType(builder), output2);
  }
};
var textureSize = nodeProxy(TextureSizeNode);
var MaxMipLevelNode = class extends UniformNode {
  static get type() {
    return "MaxMipLevelNode";
  }
  constructor(textureNode) {
    super(0);
    this._textureNode = textureNode;
    this.updateType = NodeUpdateType.FRAME;
  }
  get textureNode() {
    return this._textureNode;
  }
  get texture() {
    return this._textureNode.value;
  }
  update() {
    const texture2 = this.texture;
    const images = texture2.images;
    const image = images && images.length > 0 ? images[0] && images[0].image || images[0] : texture2.image;
    if (image && image.width !== void 0) {
      const { width, height } = image;
      this.value = Math.log2(Math.max(width, height));
    }
  }
};
var maxMipLevel = nodeProxy(MaxMipLevelNode);
var TextureNode = class extends UniformNode {
  static get type() {
    return "TextureNode";
  }
  constructor(value, uvNode = null, levelNode = null, biasNode = null) {
    super(value);
    this.isTextureNode = true;
    this.uvNode = uvNode;
    this.levelNode = levelNode;
    this.biasNode = biasNode;
    this.compareNode = null;
    this.depthNode = null;
    this.gradNode = null;
    this.sampler = true;
    this.updateMatrix = false;
    this.updateType = NodeUpdateType.NONE;
    this.referenceNode = null;
    this._value = value;
    this._matrixUniform = null;
    this.setUpdateMatrix(uvNode === null);
  }
  set value(value) {
    if (this.referenceNode) {
      this.referenceNode.value = value;
    } else {
      this._value = value;
    }
  }
  get value() {
    return this.referenceNode ? this.referenceNode.value : this._value;
  }
  getUniformHash() {
    return this.value.uuid;
  }
  getNodeType() {
    if (this.value.isDepthTexture === true) return "float";
    if (this.value.type === UnsignedIntType) {
      return "uvec4";
    } else if (this.value.type === IntType) {
      return "ivec4";
    }
    return "vec4";
  }
  getInputType() {
    return "texture";
  }
  getDefaultUV() {
    return uv(this.value.channel);
  }
  updateReference() {
    return this.value;
  }
  getTransformedUV(uvNode) {
    if (this._matrixUniform === null) this._matrixUniform = uniform(this.value.matrix);
    return this._matrixUniform.mul(vec3(uvNode, 1)).xy;
  }
  setUpdateMatrix(value) {
    this.updateMatrix = value;
    this.updateType = value ? NodeUpdateType.FRAME : NodeUpdateType.NONE;
    return this;
  }
  setupUV(builder, uvNode) {
    const texture2 = this.value;
    if (builder.isFlipY() && (texture2.isRenderTargetTexture === true || texture2.isFramebufferTexture === true || texture2.isDepthTexture === true)) {
      if (this.sampler) {
        uvNode = uvNode.flipY();
      } else {
        uvNode = uvNode.setY(int(textureSize(this, this.levelNode).y).sub(uvNode.y).sub(1));
      }
    }
    return uvNode;
  }
  setup(builder) {
    const properties = builder.getNodeProperties(this);
    properties.referenceNode = this.referenceNode;
    let uvNode = this.uvNode;
    if ((uvNode === null || builder.context.forceUVContext === true) && builder.context.getUV) {
      uvNode = builder.context.getUV(this);
    }
    if (!uvNode) uvNode = this.getDefaultUV();
    if (this.updateMatrix === true) {
      uvNode = this.getTransformedUV(uvNode);
    }
    uvNode = this.setupUV(builder, uvNode);
    let levelNode = this.levelNode;
    if (levelNode === null && builder.context.getTextureLevel) {
      levelNode = builder.context.getTextureLevel(this);
    }
    properties.uvNode = uvNode;
    properties.levelNode = levelNode;
    properties.biasNode = this.biasNode;
    properties.compareNode = this.compareNode;
    properties.gradNode = this.gradNode;
    properties.depthNode = this.depthNode;
  }
  generateUV(builder, uvNode) {
    return uvNode.build(builder, this.sampler === true ? "vec2" : "ivec2");
  }
  generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet) {
    const texture2 = this.value;
    let snippet;
    if (levelSnippet) {
      snippet = builder.generateTextureLevel(texture2, textureProperty, uvSnippet, levelSnippet, depthSnippet);
    } else if (biasSnippet) {
      snippet = builder.generateTextureBias(texture2, textureProperty, uvSnippet, biasSnippet, depthSnippet);
    } else if (gradSnippet) {
      snippet = builder.generateTextureGrad(texture2, textureProperty, uvSnippet, gradSnippet, depthSnippet);
    } else if (compareSnippet) {
      snippet = builder.generateTextureCompare(texture2, textureProperty, uvSnippet, compareSnippet, depthSnippet);
    } else if (this.sampler === false) {
      snippet = builder.generateTextureLoad(texture2, textureProperty, uvSnippet, depthSnippet);
    } else {
      snippet = builder.generateTexture(texture2, textureProperty, uvSnippet, depthSnippet);
    }
    return snippet;
  }
  generate(builder, output2) {
    const properties = builder.getNodeProperties(this);
    const texture2 = this.value;
    if (!texture2 || texture2.isTexture !== true) {
      throw new Error("TextureNode: Need a three.js texture.");
    }
    const textureProperty = super.generate(builder, "property");
    if (output2 === "sampler") {
      return textureProperty + "_sampler";
    } else if (builder.isReference(output2)) {
      return textureProperty;
    } else {
      const nodeData = builder.getDataFromNode(this);
      let propertyName = nodeData.propertyName;
      if (propertyName === void 0) {
        const { uvNode, levelNode, biasNode, compareNode, depthNode, gradNode } = properties;
        const uvSnippet = this.generateUV(builder, uvNode);
        const levelSnippet = levelNode ? levelNode.build(builder, "float") : null;
        const biasSnippet = biasNode ? biasNode.build(builder, "float") : null;
        const depthSnippet = depthNode ? depthNode.build(builder, "int") : null;
        const compareSnippet = compareNode ? compareNode.build(builder, "float") : null;
        const gradSnippet = gradNode ? [gradNode[0].build(builder, "vec2"), gradNode[1].build(builder, "vec2")] : null;
        const nodeVar = builder.getVarFromNode(this);
        propertyName = builder.getPropertyName(nodeVar);
        const snippet2 = this.generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet);
        builder.addLineFlowCode(`${propertyName} = ${snippet2}`, this);
        nodeData.snippet = snippet2;
        nodeData.propertyName = propertyName;
      }
      let snippet = propertyName;
      const nodeType = this.getNodeType(builder);
      if (builder.needsToWorkingColorSpace(texture2)) {
        snippet = colorSpaceToWorking(expression(snippet, nodeType), texture2.colorSpace).setup(builder).build(builder, nodeType);
      }
      return builder.format(snippet, nodeType, output2);
    }
  }
  setSampler(value) {
    this.sampler = value;
    return this;
  }
  getSampler() {
    return this.sampler;
  }
  // @TODO: Move to TSL
  uv(uvNode) {
    const textureNode = this.clone();
    textureNode.uvNode = nodeObject(uvNode);
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  blur(amountNode) {
    const textureNode = this.clone();
    textureNode.biasNode = nodeObject(amountNode).mul(maxMipLevel(textureNode));
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  level(levelNode) {
    const textureNode = this.clone();
    textureNode.levelNode = nodeObject(levelNode);
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  size(levelNode) {
    return textureSize(this, levelNode);
  }
  bias(biasNode) {
    const textureNode = this.clone();
    textureNode.biasNode = nodeObject(biasNode);
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  compare(compareNode) {
    const textureNode = this.clone();
    textureNode.compareNode = nodeObject(compareNode);
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  grad(gradNodeX, gradNodeY) {
    const textureNode = this.clone();
    textureNode.gradNode = [nodeObject(gradNodeX), nodeObject(gradNodeY)];
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  depth(depthNode) {
    const textureNode = this.clone();
    textureNode.depthNode = nodeObject(depthNode);
    textureNode.referenceNode = this.getSelf();
    return nodeObject(textureNode);
  }
  // --
  serialize(data) {
    super.serialize(data);
    data.value = this.value.toJSON(data.meta).uuid;
    data.sampler = this.sampler;
    data.updateMatrix = this.updateMatrix;
    data.updateType = this.updateType;
  }
  deserialize(data) {
    super.deserialize(data);
    this.value = data.meta.textures[data.value];
    this.sampler = data.sampler;
    this.updateMatrix = data.updateMatrix;
    this.updateType = data.updateType;
  }
  update() {
    const texture2 = this.value;
    const matrixUniform = this._matrixUniform;
    if (matrixUniform !== null) matrixUniform.value = texture2.matrix;
    if (texture2.matrixAutoUpdate === true) {
      texture2.updateMatrix();
    }
  }
  clone() {
    const newNode = new this.constructor(this.value, this.uvNode, this.levelNode, this.biasNode);
    newNode.sampler = this.sampler;
    return newNode;
  }
};
var texture = nodeProxy(TextureNode);
var textureLoad = (...params) => texture(...params).setSampler(false);
var cameraNear = uniform("float").label("cameraNear").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.near);
var cameraFar = uniform("float").label("cameraFar").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.far);
var cameraProjectionMatrix = uniform("mat4").label("cameraProjectionMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.projectionMatrix);
var cameraProjectionMatrixInverse = uniform("mat4").label("cameraProjectionMatrixInverse").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.projectionMatrixInverse);
var cameraViewMatrix = uniform("mat4").label("cameraViewMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.matrixWorldInverse);
var cameraWorldMatrix = uniform("mat4").label("cameraWorldMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.matrixWorld);
var cameraNormalMatrix = uniform("mat3").label("cameraNormalMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.normalMatrix);
var cameraPosition = uniform(new Vector32()).label("cameraPosition").setGroup(renderGroup).onRenderUpdate(({ camera }, self2) => self2.value.setFromMatrixPosition(camera.matrixWorld));
var Object3DNode = class _Object3DNode extends Node {
  static get type() {
    return "Object3DNode";
  }
  constructor(scope, object3d = null) {
    super();
    this.scope = scope;
    this.object3d = object3d;
    this.updateType = NodeUpdateType.OBJECT;
    this._uniformNode = new UniformNode(null);
  }
  getNodeType() {
    const scope = this.scope;
    if (scope === _Object3DNode.WORLD_MATRIX) {
      return "mat4";
    } else if (scope === _Object3DNode.POSITION || scope === _Object3DNode.VIEW_POSITION || scope === _Object3DNode.DIRECTION || scope === _Object3DNode.SCALE) {
      return "vec3";
    }
  }
  update(frame) {
    const object = this.object3d;
    const uniformNode = this._uniformNode;
    const scope = this.scope;
    if (scope === _Object3DNode.WORLD_MATRIX) {
      uniformNode.value = object.matrixWorld;
    } else if (scope === _Object3DNode.POSITION) {
      uniformNode.value = uniformNode.value || new Vector32();
      uniformNode.value.setFromMatrixPosition(object.matrixWorld);
    } else if (scope === _Object3DNode.SCALE) {
      uniformNode.value = uniformNode.value || new Vector32();
      uniformNode.value.setFromMatrixScale(object.matrixWorld);
    } else if (scope === _Object3DNode.DIRECTION) {
      uniformNode.value = uniformNode.value || new Vector32();
      object.getWorldDirection(uniformNode.value);
    } else if (scope === _Object3DNode.VIEW_POSITION) {
      const camera = frame.camera;
      uniformNode.value = uniformNode.value || new Vector32();
      uniformNode.value.setFromMatrixPosition(object.matrixWorld);
      uniformNode.value.applyMatrix4(camera.matrixWorldInverse);
    }
  }
  generate(builder) {
    const scope = this.scope;
    if (scope === _Object3DNode.WORLD_MATRIX) {
      this._uniformNode.nodeType = "mat4";
    } else if (scope === _Object3DNode.POSITION || scope === _Object3DNode.VIEW_POSITION || scope === _Object3DNode.DIRECTION || scope === _Object3DNode.SCALE) {
      this._uniformNode.nodeType = "vec3";
    }
    return this._uniformNode.build(builder);
  }
  serialize(data) {
    super.serialize(data);
    data.scope = this.scope;
  }
  deserialize(data) {
    super.deserialize(data);
    this.scope = data.scope;
  }
};
Object3DNode.WORLD_MATRIX = "worldMatrix";
Object3DNode.POSITION = "position";
Object3DNode.SCALE = "scale";
Object3DNode.VIEW_POSITION = "viewPosition";
Object3DNode.DIRECTION = "direction";
var objectDirection = nodeProxy(Object3DNode, Object3DNode.DIRECTION);
var objectWorldMatrix = nodeProxy(Object3DNode, Object3DNode.WORLD_MATRIX);
var objectPosition = nodeProxy(Object3DNode, Object3DNode.POSITION);
var objectScale = nodeProxy(Object3DNode, Object3DNode.SCALE);
var objectViewPosition = nodeProxy(Object3DNode, Object3DNode.VIEW_POSITION);
var ModelNode = class extends Object3DNode {
  static get type() {
    return "ModelNode";
  }
  constructor(scope) {
    super(scope);
  }
  update(frame) {
    this.object3d = frame.object;
    super.update(frame);
  }
};
var modelDirection = nodeImmutable(ModelNode, ModelNode.DIRECTION);
var modelWorldMatrix = nodeImmutable(ModelNode, ModelNode.WORLD_MATRIX);
var modelPosition = nodeImmutable(ModelNode, ModelNode.POSITION);
var modelScale = nodeImmutable(ModelNode, ModelNode.SCALE);
var modelViewPosition = nodeImmutable(ModelNode, ModelNode.VIEW_POSITION);
var modelNormalMatrix = uniform(new Matrix3()).onObjectUpdate(({ object }, self2) => self2.value.getNormalMatrix(object.matrixWorld));
var modelWorldMatrixInverse = uniform(new Matrix4()).onObjectUpdate(({ object }, self2) => self2.value.copy(object.matrixWorld).invert());
var modelViewMatrix = cameraViewMatrix.mul(modelWorldMatrix).toVar("modelViewMatrix");
var highPrecisionModelViewMatrix = Fn((builder) => {
  builder.context.isHighPrecisionModelViewMatrix = true;
  return uniform("mat4").onObjectUpdate(({ object, camera }) => {
    return object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
  });
}).once()().toVar("highPrecisionModelViewMatrix");
var highPrecisionModelNormalViewMatrix = Fn((builder) => {
  const isHighPrecisionModelViewMatrix = builder.context.isHighPrecisionModelViewMatrix;
  return uniform("mat3").onObjectUpdate(({ object, camera }) => {
    if (isHighPrecisionModelViewMatrix !== true) {
      object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
    }
    return object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
  });
}).once()().toVar("highPrecisionModelNormalMatrix");
var positionGeometry = attribute("position", "vec3");
var positionLocal = positionGeometry.varying("positionLocal");
var positionPrevious = positionGeometry.varying("positionPrevious");
var positionWorld = modelWorldMatrix.mul(positionLocal).xyz.varying("v_positionWorld");
var positionWorldDirection = positionLocal.transformDirection(modelWorldMatrix).varying("v_positionWorldDirection").normalize().toVar("positionWorldDirection");
var positionView = modelViewMatrix.mul(positionLocal).xyz.varying("v_positionView");
var positionViewDirection = positionView.negate().varying("v_positionViewDirection").normalize().toVar("positionViewDirection");
var FrontFacingNode = class extends Node {
  static get type() {
    return "FrontFacingNode";
  }
  constructor() {
    super("bool");
    this.isFrontFacingNode = true;
  }
  generate(builder) {
    const { renderer, material } = builder;
    if (renderer.coordinateSystem === WebGLCoordinateSystem) {
      if (material.side === BackSide) {
        return "false";
      }
    }
    return builder.getFrontFacing();
  }
};
var frontFacing = nodeImmutable(FrontFacingNode);
var faceDirection = float(frontFacing).mul(2).sub(1);
var normalGeometry = attribute("normal", "vec3");
var normalLocal = Fn((builder) => {
  if (builder.geometry.hasAttribute("normal") === false) {
    console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.');
    return vec3(0, 1, 0);
  }
  return normalGeometry;
}, "vec3").once()().toVar("normalLocal");
var normalFlat = positionView.dFdx().cross(positionView.dFdy()).normalize().toVar("normalFlat");
var normalView = Fn((builder) => {
  let node;
  if (builder.material.flatShading === true) {
    node = normalFlat;
  } else {
    node = varying(transformNormalToView(normalLocal), "v_normalView").normalize();
  }
  return node;
}, "vec3").once()().toVar("normalView");
var normalWorld = varying(normalView.transformDirection(cameraViewMatrix), "v_normalWorld").normalize().toVar("normalWorld");
var transformedNormalView = Fn((builder) => {
  return builder.context.setupNormal();
}, "vec3").once()().mul(faceDirection).toVar("transformedNormalView");
var transformedNormalWorld = transformedNormalView.transformDirection(cameraViewMatrix).toVar("transformedNormalWorld");
var transformedClearcoatNormalView = Fn((builder) => {
  return builder.context.setupClearcoatNormal();
}, "vec3").once()().mul(faceDirection).toVar("transformedClearcoatNormalView");
var transformNormal = Fn(([normal2, matrix = modelWorldMatrix]) => {
  const m = mat3(matrix);
  const transformedNormal = normal2.div(vec3(m[0].dot(m[0]), m[1].dot(m[1]), m[2].dot(m[2])));
  return m.mul(transformedNormal).xyz;
});
var transformNormalToView = Fn(([normal2], builder) => {
  const modelNormalViewMatrix = builder.renderer.nodes.modelNormalViewMatrix;
  if (modelNormalViewMatrix !== null) {
    return modelNormalViewMatrix.transformDirection(normal2);
  }
  const transformedNormal = modelNormalMatrix.mul(normal2);
  return cameraViewMatrix.transformDirection(transformedNormal);
});
var materialRefractionRatio = uniform(0).onReference(({ material }) => material).onRenderUpdate(({ material }) => material.refractionRatio);
var reflectView = positionViewDirection.negate().reflect(transformedNormalView);
var refractView = positionViewDirection.negate().refract(transformedNormalView, materialRefractionRatio);
var reflectVector = reflectView.transformDirection(cameraViewMatrix).toVar("reflectVector");
var refractVector = refractView.transformDirection(cameraViewMatrix).toVar("reflectVector");
var CubeTextureNode = class extends TextureNode {
  static get type() {
    return "CubeTextureNode";
  }
  constructor(value, uvNode = null, levelNode = null, biasNode = null) {
    super(value, uvNode, levelNode, biasNode);
    this.isCubeTextureNode = true;
  }
  getInputType() {
    return "cubeTexture";
  }
  getDefaultUV() {
    const texture2 = this.value;
    if (texture2.mapping === CubeReflectionMapping) {
      return reflectVector;
    } else if (texture2.mapping === CubeRefractionMapping) {
      return refractVector;
    } else {
      console.error('THREE.CubeTextureNode: Mapping "%s" not supported.', texture2.mapping);
      return vec3(0, 0, 0);
    }
  }
  setUpdateMatrix() {
  }
  // Ignore .updateMatrix for CubeTextureNode
  setupUV(builder, uvNode) {
    const texture2 = this.value;
    if (builder.renderer.coordinateSystem === WebGPUCoordinateSystem || !texture2.isRenderTargetTexture) {
      return vec3(uvNode.x.negate(), uvNode.yz);
    } else {
      return uvNode;
    }
  }
  generateUV(builder, cubeUV) {
    return cubeUV.build(builder, "vec3");
  }
};
var cubeTexture = nodeProxy(CubeTextureNode);
var BufferNode = class extends UniformNode {
  static get type() {
    return "BufferNode";
  }
  constructor(value, bufferType, bufferCount = 0) {
    super(value, bufferType);
    this.isBufferNode = true;
    this.bufferType = bufferType;
    this.bufferCount = bufferCount;
  }
  getElementType(builder) {
    return this.getNodeType(builder);
  }
  getInputType() {
    return "buffer";
  }
};
var buffer = (value, type, count) => nodeObject(new BufferNode(value, type, count));
var UniformArrayElementNode = class extends ArrayElementNode {
  static get type() {
    return "UniformArrayElementNode";
  }
  constructor(arrayBuffer, indexNode) {
    super(arrayBuffer, indexNode);
    this.isArrayBufferElementNode = true;
  }
  generate(builder) {
    const snippet = super.generate(builder);
    const type = this.getNodeType();
    return builder.format(snippet, "vec4", type);
  }
};
var UniformArrayNode = class extends BufferNode {
  static get type() {
    return "UniformArrayNode";
  }
  constructor(value, elementType = null) {
    super(null, "vec4");
    this.array = value;
    this.elementType = elementType;
    this._elementType = null;
    this._elementLength = 0;
    this.updateType = NodeUpdateType.RENDER;
    this.isArrayBufferNode = true;
  }
  getElementType() {
    return this.elementType || this._elementType;
  }
  getElementLength() {
    return this._elementLength;
  }
  update() {
    const { array, value } = this;
    const elementLength = this.getElementLength();
    const elementType = this.getElementType();
    if (elementLength === 1) {
      for (let i = 0; i < array.length; i++) {
        const index = i * 4;
        value[index] = array[i];
      }
    } else if (elementType === "color") {
      for (let i = 0; i < array.length; i++) {
        const index = i * 4;
        const vector = array[i];
        value[index] = vector.r;
        value[index + 1] = vector.g;
        value[index + 2] = vector.b || 0;
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        const index = i * 4;
        const vector = array[i];
        value[index] = vector.x;
        value[index + 1] = vector.y;
        value[index + 2] = vector.z || 0;
        value[index + 3] = vector.w || 0;
      }
    }
  }
  setup(builder) {
    const length2 = this.array.length;
    this._elementType = this.elementType === null ? getValueType(this.array[0]) : this.elementType;
    this._elementLength = builder.getTypeLength(this._elementType);
    let arrayType = Float32Array;
    if (this._elementType.charAt(0) === "i") arrayType = Int32Array;
    else if (this._elementType.charAt(0) === "u") arrayType = Uint32Array;
    this.value = new arrayType(length2 * 4);
    this.bufferCount = length2;
    this.bufferType = builder.changeComponentType("vec4", builder.getComponentType(this._elementType));
    return super.setup(builder);
  }
  element(indexNode) {
    return nodeObject(new UniformArrayElementNode(this, nodeObject(indexNode)));
  }
};
var uniformArray = (values, nodeType) => nodeObject(new UniformArrayNode(values, nodeType));
var ReferenceElementNode2 = class extends ArrayElementNode {
  static get type() {
    return "ReferenceElementNode";
  }
  constructor(referenceNode, indexNode) {
    super(referenceNode, indexNode);
    this.referenceNode = referenceNode;
    this.isReferenceElementNode = true;
  }
  getNodeType() {
    return this.referenceNode.uniformType;
  }
  generate(builder) {
    const snippet = super.generate(builder);
    const arrayType = this.referenceNode.getNodeType();
    const elementType = this.getNodeType();
    return builder.format(snippet, arrayType, elementType);
  }
};
var ReferenceNode = class extends Node {
  static get type() {
    return "ReferenceNode";
  }
  constructor(property2, uniformType, object = null, count = null) {
    super();
    this.property = property2;
    this.uniformType = uniformType;
    this.object = object;
    this.count = count;
    this.properties = property2.split(".");
    this.reference = object;
    this.node = null;
    this.group = null;
    this.name = null;
    this.updateType = NodeUpdateType.OBJECT;
  }
  element(indexNode) {
    return nodeObject(new ReferenceElementNode2(this, nodeObject(indexNode)));
  }
  setGroup(group) {
    this.group = group;
    return this;
  }
  label(name) {
    this.name = name;
    return this;
  }
  setNodeType(uniformType) {
    let node = null;
    if (this.count !== null) {
      node = buffer(null, uniformType, this.count);
    } else if (Array.isArray(this.getValueFromReference())) {
      node = uniformArray(null, uniformType);
    } else if (uniformType === "texture") {
      node = texture(null);
    } else if (uniformType === "cubeTexture") {
      node = cubeTexture(null);
    } else {
      node = uniform(null, uniformType);
    }
    if (this.group !== null) {
      node.setGroup(this.group);
    }
    if (this.name !== null) node.label(this.name);
    this.node = node.getSelf();
  }
  getNodeType(builder) {
    if (this.node === null) {
      this.updateReference(builder);
      this.updateValue();
    }
    return this.node.getNodeType(builder);
  }
  getValueFromReference(object = this.reference) {
    const { properties } = this;
    let value = object[properties[0]];
    for (let i = 1; i < properties.length; i++) {
      value = value[properties[i]];
    }
    return value;
  }
  updateReference(state) {
    this.reference = this.object !== null ? this.object : state.object;
    return this.reference;
  }
  setup() {
    this.updateValue();
    return this.node;
  }
  update() {
    this.updateValue();
  }
  updateValue() {
    if (this.node === null) this.setNodeType(this.uniformType);
    const value = this.getValueFromReference();
    if (Array.isArray(value)) {
      this.node.array = value;
    } else {
      this.node.value = value;
    }
  }
};
var reference = (name, type, object) => nodeObject(new ReferenceNode(name, type, object));
var referenceBuffer = (name, type, count, object) => nodeObject(new ReferenceNode(name, type, object, count));
var MaterialReferenceNode = class extends ReferenceNode {
  static get type() {
    return "MaterialReferenceNode";
  }
  constructor(property2, inputType, material = null) {
    super(property2, inputType, material);
    this.material = material;
    this.isMaterialReferenceNode = true;
  }
  /*setNodeType( node ) {
  
  		super.setNodeType( node );
  
  		this.node.groupNode = renderGroup;
  
  	}*/
  updateReference(state) {
    this.reference = this.material !== null ? this.material : state.material;
    return this.reference;
  }
};
var materialReference = (name, type, material) => nodeObject(new MaterialReferenceNode(name, type, material));
var tangentGeometry = Fn((builder) => {
  if (builder.geometry.hasAttribute("tangent") === false) {
    builder.geometry.computeTangents();
  }
  return attribute("tangent", "vec4");
})();
var tangentLocal = tangentGeometry.xyz.toVar("tangentLocal");
var tangentView = modelViewMatrix.mul(vec4(tangentLocal, 0)).xyz.varying("v_tangentView").normalize().toVar("tangentView");
var tangentWorld = tangentView.transformDirection(cameraViewMatrix).varying("v_tangentWorld").normalize().toVar("tangentWorld");
var transformedTangentView = tangentView.toVar("transformedTangentView");
var transformedTangentWorld = transformedTangentView.transformDirection(cameraViewMatrix).normalize().toVar("transformedTangentWorld");
var getBitangent = (crossNormalTangent) => crossNormalTangent.mul(tangentGeometry.w).xyz;
var bitangentGeometry = varying(getBitangent(normalGeometry.cross(tangentGeometry)), "v_bitangentGeometry").normalize().toVar("bitangentGeometry");
var bitangentLocal = varying(getBitangent(normalLocal.cross(tangentLocal)), "v_bitangentLocal").normalize().toVar("bitangentLocal");
var bitangentView = varying(getBitangent(normalView.cross(tangentView)), "v_bitangentView").normalize().toVar("bitangentView");
var bitangentWorld = varying(getBitangent(normalWorld.cross(tangentWorld)), "v_bitangentWorld").normalize().toVar("bitangentWorld");
var transformedBitangentView = getBitangent(transformedNormalView.cross(transformedTangentView)).normalize().toVar("transformedBitangentView");
var transformedBitangentWorld = transformedBitangentView.transformDirection(cameraViewMatrix).normalize().toVar("transformedBitangentWorld");
var TBNViewMatrix = mat3(tangentView, bitangentView, normalView);
var parallaxDirection = positionViewDirection.mul(TBNViewMatrix);
var transformedBentNormalView = (() => {
  let bentNormal = anisotropyB.cross(positionViewDirection);
  bentNormal = bentNormal.cross(anisotropyB).normalize();
  bentNormal = mix(bentNormal, transformedNormalView, anisotropy.mul(roughness.oneMinus()).oneMinus().pow2().pow2()).normalize();
  return bentNormal;
})();
var perturbNormal2Arb = Fn((inputs) => {
  const { eye_pos, surf_norm, mapN, uv: uv2 } = inputs;
  const q0 = eye_pos.dFdx();
  const q1 = eye_pos.dFdy();
  const st0 = uv2.dFdx();
  const st1 = uv2.dFdy();
  const N = surf_norm;
  const q1perp = q1.cross(N);
  const q0perp = N.cross(q0);
  const T = q1perp.mul(st0.x).add(q0perp.mul(st1.x));
  const B = q1perp.mul(st0.y).add(q0perp.mul(st1.y));
  const det = T.dot(T).max(B.dot(B));
  const scale = faceDirection.mul(det.inverseSqrt());
  return add(T.mul(mapN.x, scale), B.mul(mapN.y, scale), N.mul(mapN.z)).normalize();
});
var NormalMapNode = class extends TempNode {
  static get type() {
    return "NormalMapNode";
  }
  constructor(node, scaleNode = null) {
    super("vec3");
    this.node = node;
    this.scaleNode = scaleNode;
    this.normalMapType = TangentSpaceNormalMap;
  }
  setup(builder) {
    const { normalMapType, scaleNode } = this;
    let normalMap2 = this.node.mul(2).sub(1);
    if (scaleNode !== null) {
      normalMap2 = vec3(normalMap2.xy.mul(scaleNode), normalMap2.z);
    }
    let outputNode = null;
    if (normalMapType === ObjectSpaceNormalMap) {
      outputNode = transformNormalToView(normalMap2);
    } else if (normalMapType === TangentSpaceNormalMap) {
      const tangent = builder.hasGeometryAttribute("tangent");
      if (tangent === true) {
        outputNode = TBNViewMatrix.mul(normalMap2).normalize();
      } else {
        outputNode = perturbNormal2Arb({
          eye_pos: positionView,
          surf_norm: normalView,
          mapN: normalMap2,
          uv: uv()
        });
      }
    }
    return outputNode;
  }
};
var normalMap = nodeProxy(NormalMapNode);
var dHdxy_fwd = Fn(({ textureNode, bumpScale }) => {
  const sampleTexture = (callback) => textureNode.cache().context({ getUV: (texNode) => callback(texNode.uvNode || uv()), forceUVContext: true });
  const Hll = float(sampleTexture((uvNode) => uvNode));
  return vec2(
    float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdx()))).sub(Hll),
    float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdy()))).sub(Hll)
  ).mul(bumpScale);
});
var perturbNormalArb = Fn((inputs) => {
  const { surf_pos, surf_norm, dHdxy } = inputs;
  const vSigmaX = surf_pos.dFdx().normalize();
  const vSigmaY = surf_pos.dFdy().normalize();
  const vN = surf_norm;
  const R1 = vSigmaY.cross(vN);
  const R2 = vN.cross(vSigmaX);
  const fDet = vSigmaX.dot(R1).mul(faceDirection);
  const vGrad = fDet.sign().mul(dHdxy.x.mul(R1).add(dHdxy.y.mul(R2)));
  return fDet.abs().mul(surf_norm).sub(vGrad).normalize();
});
var BumpMapNode = class extends TempNode {
  static get type() {
    return "BumpMapNode";
  }
  constructor(textureNode, scaleNode = null) {
    super("vec3");
    this.textureNode = textureNode;
    this.scaleNode = scaleNode;
  }
  setup() {
    const bumpScale = this.scaleNode !== null ? this.scaleNode : 1;
    const dHdxy = dHdxy_fwd({ textureNode: this.textureNode, bumpScale });
    return perturbNormalArb({
      surf_pos: positionView,
      surf_norm: normalView,
      dHdxy
    });
  }
};
var bumpMap = nodeProxy(BumpMapNode);
var _propertyCache = /* @__PURE__ */ new Map();
var MaterialNode = class _MaterialNode extends Node {
  static get type() {
    return "MaterialNode";
  }
  constructor(scope) {
    super();
    this.scope = scope;
  }
  getCache(property2, type) {
    let node = _propertyCache.get(property2);
    if (node === void 0) {
      node = materialReference(property2, type);
      _propertyCache.set(property2, node);
    }
    return node;
  }
  getFloat(property2) {
    return this.getCache(property2, "float");
  }
  getColor(property2) {
    return this.getCache(property2, "color");
  }
  getTexture(property2) {
    return this.getCache(property2 === "map" ? "map" : property2 + "Map", "texture");
  }
  setup(builder) {
    const material = builder.context.material;
    const scope = this.scope;
    let node = null;
    if (scope === _MaterialNode.COLOR) {
      const colorNode = material.color !== void 0 ? this.getColor(scope) : vec3();
      if (material.map && material.map.isTexture === true) {
        node = colorNode.mul(this.getTexture("map"));
      } else {
        node = colorNode;
      }
    } else if (scope === _MaterialNode.OPACITY) {
      const opacityNode = this.getFloat(scope);
      if (material.alphaMap && material.alphaMap.isTexture === true) {
        node = opacityNode.mul(this.getTexture("alpha"));
      } else {
        node = opacityNode;
      }
    } else if (scope === _MaterialNode.SPECULAR_STRENGTH) {
      if (material.specularMap && material.specularMap.isTexture === true) {
        node = this.getTexture("specular").r;
      } else {
        node = float(1);
      }
    } else if (scope === _MaterialNode.SPECULAR_INTENSITY) {
      const specularIntensity = this.getFloat(scope);
      if (material.specularMap) {
        node = specularIntensity.mul(this.getTexture(scope).a);
      } else {
        node = specularIntensity;
      }
    } else if (scope === _MaterialNode.SPECULAR_COLOR) {
      const specularColorNode = this.getColor(scope);
      if (material.specularColorMap && material.specularColorMap.isTexture === true) {
        node = specularColorNode.mul(this.getTexture(scope).rgb);
      } else {
        node = specularColorNode;
      }
    } else if (scope === _MaterialNode.ROUGHNESS) {
      const roughnessNode = this.getFloat(scope);
      if (material.roughnessMap && material.roughnessMap.isTexture === true) {
        node = roughnessNode.mul(this.getTexture(scope).g);
      } else {
        node = roughnessNode;
      }
    } else if (scope === _MaterialNode.METALNESS) {
      const metalnessNode = this.getFloat(scope);
      if (material.metalnessMap && material.metalnessMap.isTexture === true) {
        node = metalnessNode.mul(this.getTexture(scope).b);
      } else {
        node = metalnessNode;
      }
    } else if (scope === _MaterialNode.EMISSIVE) {
      const emissiveIntensityNode = this.getFloat("emissiveIntensity");
      const emissiveNode = this.getColor(scope).mul(emissiveIntensityNode);
      if (material.emissiveMap && material.emissiveMap.isTexture === true) {
        node = emissiveNode.mul(this.getTexture(scope));
      } else {
        node = emissiveNode;
      }
    } else if (scope === _MaterialNode.NORMAL) {
      if (material.normalMap) {
        node = normalMap(this.getTexture("normal"), this.getCache("normalScale", "vec2"));
        node.normalMapType = material.normalMapType;
      } else if (material.bumpMap) {
        node = bumpMap(this.getTexture("bump").r, this.getFloat("bumpScale"));
      } else {
        node = normalView;
      }
    } else if (scope === _MaterialNode.CLEARCOAT) {
      const clearcoatNode = this.getFloat(scope);
      if (material.clearcoatMap && material.clearcoatMap.isTexture === true) {
        node = clearcoatNode.mul(this.getTexture(scope).r);
      } else {
        node = clearcoatNode;
      }
    } else if (scope === _MaterialNode.CLEARCOAT_ROUGHNESS) {
      const clearcoatRoughnessNode = this.getFloat(scope);
      if (material.clearcoatRoughnessMap && material.clearcoatRoughnessMap.isTexture === true) {
        node = clearcoatRoughnessNode.mul(this.getTexture(scope).r);
      } else {
        node = clearcoatRoughnessNode;
      }
    } else if (scope === _MaterialNode.CLEARCOAT_NORMAL) {
      if (material.clearcoatNormalMap) {
        node = normalMap(this.getTexture(scope), this.getCache(scope + "Scale", "vec2"));
      } else {
        node = normalView;
      }
    } else if (scope === _MaterialNode.SHEEN) {
      const sheenNode = this.getColor("sheenColor").mul(this.getFloat("sheen"));
      if (material.sheenColorMap && material.sheenColorMap.isTexture === true) {
        node = sheenNode.mul(this.getTexture("sheenColor").rgb);
      } else {
        node = sheenNode;
      }
    } else if (scope === _MaterialNode.SHEEN_ROUGHNESS) {
      const sheenRoughnessNode = this.getFloat(scope);
      if (material.sheenRoughnessMap && material.sheenRoughnessMap.isTexture === true) {
        node = sheenRoughnessNode.mul(this.getTexture(scope).a);
      } else {
        node = sheenRoughnessNode;
      }
      node = node.clamp(0.07, 1);
    } else if (scope === _MaterialNode.ANISOTROPY) {
      if (material.anisotropyMap && material.anisotropyMap.isTexture === true) {
        const anisotropyPolar = this.getTexture(scope);
        const anisotropyMat = mat2(materialAnisotropyVector.x, materialAnisotropyVector.y, materialAnisotropyVector.y.negate(), materialAnisotropyVector.x);
        node = anisotropyMat.mul(anisotropyPolar.rg.mul(2).sub(vec2(1)).normalize().mul(anisotropyPolar.b));
      } else {
        node = materialAnisotropyVector;
      }
    } else if (scope === _MaterialNode.IRIDESCENCE_THICKNESS) {
      const iridescenceThicknessMaximum = reference("1", "float", material.iridescenceThicknessRange);
      if (material.iridescenceThicknessMap) {
        const iridescenceThicknessMinimum = reference("0", "float", material.iridescenceThicknessRange);
        node = iridescenceThicknessMaximum.sub(iridescenceThicknessMinimum).mul(this.getTexture(scope).g).add(iridescenceThicknessMinimum);
      } else {
        node = iridescenceThicknessMaximum;
      }
    } else if (scope === _MaterialNode.TRANSMISSION) {
      const transmissionNode = this.getFloat(scope);
      if (material.transmissionMap) {
        node = transmissionNode.mul(this.getTexture(scope).r);
      } else {
        node = transmissionNode;
      }
    } else if (scope === _MaterialNode.THICKNESS) {
      const thicknessNode = this.getFloat(scope);
      if (material.thicknessMap) {
        node = thicknessNode.mul(this.getTexture(scope).g);
      } else {
        node = thicknessNode;
      }
    } else if (scope === _MaterialNode.IOR) {
      node = this.getFloat(scope);
    } else if (scope === _MaterialNode.LIGHT_MAP) {
      node = this.getTexture(scope).rgb.mul(this.getFloat("lightMapIntensity"));
    } else if (scope === _MaterialNode.AO_MAP) {
      node = this.getTexture(scope).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);
    } else {
      const outputType = this.getNodeType(builder);
      node = this.getCache(scope, outputType);
    }
    return node;
  }
};
MaterialNode.ALPHA_TEST = "alphaTest";
MaterialNode.COLOR = "color";
MaterialNode.OPACITY = "opacity";
MaterialNode.SHININESS = "shininess";
MaterialNode.SPECULAR = "specular";
MaterialNode.SPECULAR_STRENGTH = "specularStrength";
MaterialNode.SPECULAR_INTENSITY = "specularIntensity";
MaterialNode.SPECULAR_COLOR = "specularColor";
MaterialNode.REFLECTIVITY = "reflectivity";
MaterialNode.ROUGHNESS = "roughness";
MaterialNode.METALNESS = "metalness";
MaterialNode.NORMAL = "normal";
MaterialNode.CLEARCOAT = "clearcoat";
MaterialNode.CLEARCOAT_ROUGHNESS = "clearcoatRoughness";
MaterialNode.CLEARCOAT_NORMAL = "clearcoatNormal";
MaterialNode.EMISSIVE = "emissive";
MaterialNode.ROTATION = "rotation";
MaterialNode.SHEEN = "sheen";
MaterialNode.SHEEN_ROUGHNESS = "sheenRoughness";
MaterialNode.ANISOTROPY = "anisotropy";
MaterialNode.IRIDESCENCE = "iridescence";
MaterialNode.IRIDESCENCE_IOR = "iridescenceIOR";
MaterialNode.IRIDESCENCE_THICKNESS = "iridescenceThickness";
MaterialNode.IOR = "ior";
MaterialNode.TRANSMISSION = "transmission";
MaterialNode.THICKNESS = "thickness";
MaterialNode.ATTENUATION_DISTANCE = "attenuationDistance";
MaterialNode.ATTENUATION_COLOR = "attenuationColor";
MaterialNode.LINE_SCALE = "scale";
MaterialNode.LINE_DASH_SIZE = "dashSize";
MaterialNode.LINE_GAP_SIZE = "gapSize";
MaterialNode.LINE_WIDTH = "linewidth";
MaterialNode.LINE_DASH_OFFSET = "dashOffset";
MaterialNode.POINT_WIDTH = "pointWidth";
MaterialNode.DISPERSION = "dispersion";
MaterialNode.LIGHT_MAP = "light";
MaterialNode.AO_MAP = "ao";
var materialAlphaTest = nodeImmutable(MaterialNode, MaterialNode.ALPHA_TEST);
var materialColor = nodeImmutable(MaterialNode, MaterialNode.COLOR);
var materialShininess = nodeImmutable(MaterialNode, MaterialNode.SHININESS);
var materialEmissive = nodeImmutable(MaterialNode, MaterialNode.EMISSIVE);
var materialOpacity = nodeImmutable(MaterialNode, MaterialNode.OPACITY);
var materialSpecular = nodeImmutable(MaterialNode, MaterialNode.SPECULAR);
var materialSpecularIntensity = nodeImmutable(MaterialNode, MaterialNode.SPECULAR_INTENSITY);
var materialSpecularColor = nodeImmutable(MaterialNode, MaterialNode.SPECULAR_COLOR);
var materialSpecularStrength = nodeImmutable(MaterialNode, MaterialNode.SPECULAR_STRENGTH);
var materialReflectivity = nodeImmutable(MaterialNode, MaterialNode.REFLECTIVITY);
var materialRoughness = nodeImmutable(MaterialNode, MaterialNode.ROUGHNESS);
var materialMetalness = nodeImmutable(MaterialNode, MaterialNode.METALNESS);
var materialNormal = nodeImmutable(MaterialNode, MaterialNode.NORMAL).context({ getUV: null });
var materialClearcoat = nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT);
var materialClearcoatRoughness = nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT_ROUGHNESS);
var materialClearcoatNormal = nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT_NORMAL).context({ getUV: null });
var materialRotation = nodeImmutable(MaterialNode, MaterialNode.ROTATION);
var materialSheen = nodeImmutable(MaterialNode, MaterialNode.SHEEN);
var materialSheenRoughness = nodeImmutable(MaterialNode, MaterialNode.SHEEN_ROUGHNESS);
var materialAnisotropy = nodeImmutable(MaterialNode, MaterialNode.ANISOTROPY);
var materialIridescence = nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE);
var materialIridescenceIOR = nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_IOR);
var materialIridescenceThickness = nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_THICKNESS);
var materialTransmission = nodeImmutable(MaterialNode, MaterialNode.TRANSMISSION);
var materialThickness = nodeImmutable(MaterialNode, MaterialNode.THICKNESS);
var materialIOR = nodeImmutable(MaterialNode, MaterialNode.IOR);
var materialAttenuationDistance = nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_DISTANCE);
var materialAttenuationColor = nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_COLOR);
var materialLineScale = nodeImmutable(MaterialNode, MaterialNode.LINE_SCALE);
var materialLineDashSize = nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_SIZE);
var materialLineGapSize = nodeImmutable(MaterialNode, MaterialNode.LINE_GAP_SIZE);
var materialLineWidth = nodeImmutable(MaterialNode, MaterialNode.LINE_WIDTH);
var materialLineDashOffset = nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_OFFSET);
var materialPointWidth = nodeImmutable(MaterialNode, MaterialNode.POINT_WIDTH);
var materialDispersion = nodeImmutable(MaterialNode, MaterialNode.DISPERSION);
var materialLightMap = nodeImmutable(MaterialNode, MaterialNode.LIGHT_MAP);
var materialAOMap = nodeImmutable(MaterialNode, MaterialNode.AO_MAP);
var materialAnisotropyVector = uniform(new Vector22()).onReference(function(frame) {
  return frame.material;
}).onRenderUpdate(function({ material }) {
  this.value.set(material.anisotropy * Math.cos(material.anisotropyRotation), material.anisotropy * Math.sin(material.anisotropyRotation));
});
var ModelViewProjectionNode = class extends TempNode {
  static get type() {
    return "ModelViewProjectionNode";
  }
  constructor(positionNode = null) {
    super("vec4");
    this.positionNode = positionNode;
  }
  setup(builder) {
    if (builder.shaderStage === "fragment") {
      return varying(builder.context.mvp);
    }
    const position = this.positionNode || positionLocal;
    const viewMatrix = builder.renderer.nodes.modelViewMatrix || modelViewMatrix;
    return cameraProjectionMatrix.mul(viewMatrix).mul(position);
  }
};
var modelViewProjection = nodeProxy(ModelViewProjectionNode);
var IndexNode = class _IndexNode extends Node {
  static get type() {
    return "IndexNode";
  }
  constructor(scope) {
    super("uint");
    this.scope = scope;
    this.isInstanceIndexNode = true;
  }
  generate(builder) {
    const nodeType = this.getNodeType(builder);
    const scope = this.scope;
    let propertyName;
    if (scope === _IndexNode.VERTEX) {
      propertyName = builder.getVertexIndex();
    } else if (scope === _IndexNode.INSTANCE) {
      propertyName = builder.getInstanceIndex();
    } else if (scope === _IndexNode.DRAW) {
      propertyName = builder.getDrawIndex();
    } else if (scope === _IndexNode.INVOCATION_LOCAL) {
      propertyName = builder.getInvocationLocalIndex();
    } else if (scope === _IndexNode.INVOCATION_SUBGROUP) {
      propertyName = builder.getInvocationSubgroupIndex();
    } else if (scope === _IndexNode.SUBGROUP) {
      propertyName = builder.getSubgroupIndex();
    } else {
      throw new Error("THREE.IndexNode: Unknown scope: " + scope);
    }
    let output2;
    if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
      output2 = propertyName;
    } else {
      const nodeVarying = varying(this);
      output2 = nodeVarying.build(builder, nodeType);
    }
    return output2;
  }
};
IndexNode.VERTEX = "vertex";
IndexNode.INSTANCE = "instance";
IndexNode.SUBGROUP = "subgroup";
IndexNode.INVOCATION_LOCAL = "invocationLocal";
IndexNode.INVOCATION_SUBGROUP = "invocationSubgroup";
IndexNode.DRAW = "draw";
var vertexIndex = nodeImmutable(IndexNode, IndexNode.VERTEX);
var instanceIndex = nodeImmutable(IndexNode, IndexNode.INSTANCE);
var subgroupIndex = nodeImmutable(IndexNode, IndexNode.SUBGROUP);
var invocationSubgroupIndex = nodeImmutable(IndexNode, IndexNode.INVOCATION_SUBGROUP);
var invocationLocalIndex = nodeImmutable(IndexNode, IndexNode.INVOCATION_LOCAL);
var drawIndex = nodeImmutable(IndexNode, IndexNode.DRAW);
var InstanceNode = class extends Node {
  static get type() {
    return "InstanceNode";
  }
  constructor(instanceMesh) {
    super("void");
    this.instanceMesh = instanceMesh;
    this.instanceMatrixNode = null;
    this.instanceColorNode = null;
    this.updateType = NodeUpdateType.FRAME;
    this.buffer = null;
    this.bufferColor = null;
  }
  setup(builder) {
    let instanceMatrixNode = this.instanceMatrixNode;
    let instanceColorNode = this.instanceColorNode;
    const instanceMesh = this.instanceMesh;
    if (instanceMatrixNode === null) {
      const instanceAttribute = instanceMesh.instanceMatrix;
      if (instanceMesh.count <= 1e3) {
        instanceMatrixNode = buffer(instanceAttribute.array, "mat4", Math.max(instanceMesh.count, 1)).element(instanceIndex);
      } else {
        const buffer2 = new InstancedInterleavedBuffer(instanceAttribute.array, 16, 1);
        this.buffer = buffer2;
        const bufferFn = instanceAttribute.usage === DynamicDrawUsage ? instancedDynamicBufferAttribute : instancedBufferAttribute;
        const instanceBuffers = [
          // F.Signature -> bufferAttribute( array, type, stride, offset )
          bufferFn(buffer2, "vec4", 16, 0),
          bufferFn(buffer2, "vec4", 16, 4),
          bufferFn(buffer2, "vec4", 16, 8),
          bufferFn(buffer2, "vec4", 16, 12)
        ];
        instanceMatrixNode = mat4(...instanceBuffers);
      }
      this.instanceMatrixNode = instanceMatrixNode;
    }
    const instanceColorAttribute = instanceMesh.instanceColor;
    if (instanceColorAttribute && instanceColorNode === null) {
      const buffer2 = new InstancedBufferAttribute(instanceColorAttribute.array, 3);
      const bufferFn = instanceColorAttribute.usage === DynamicDrawUsage ? instancedDynamicBufferAttribute : instancedBufferAttribute;
      this.bufferColor = buffer2;
      instanceColorNode = vec3(bufferFn(buffer2, "vec3", 3, 0));
      this.instanceColorNode = instanceColorNode;
    }
    const instancePosition = instanceMatrixNode.mul(positionLocal).xyz;
    positionLocal.assign(instancePosition);
    if (builder.hasGeometryAttribute("normal")) {
      const instanceNormal = transformNormal(normalLocal, instanceMatrixNode);
      normalLocal.assign(instanceNormal);
    }
    if (this.instanceColorNode !== null) {
      varyingProperty("vec3", "vInstanceColor").assign(this.instanceColorNode);
    }
  }
  update() {
    if (this.instanceMesh.instanceMatrix.usage !== DynamicDrawUsage && this.buffer != null && this.instanceMesh.instanceMatrix.version !== this.buffer.version) {
      this.buffer.version = this.instanceMesh.instanceMatrix.version;
    }
    if (this.instanceMesh.instanceColor && this.instanceMesh.instanceColor.usage !== DynamicDrawUsage && this.bufferColor != null && this.instanceMesh.instanceColor.version !== this.bufferColor.version) {
      this.bufferColor.version = this.instanceMesh.instanceColor.version;
    }
  }
};
var instance = nodeProxy(InstanceNode);
var BatchNode = class extends Node {
  static get type() {
    return "BatchNode";
  }
  constructor(batchMesh) {
    super("void");
    this.batchMesh = batchMesh;
    this.batchingIdNode = null;
  }
  setup(builder) {
    if (this.batchingIdNode === null) {
      if (builder.getDrawIndex() === null) {
        this.batchingIdNode = instanceIndex;
      } else {
        this.batchingIdNode = drawIndex;
      }
    }
    const getIndirectIndex = Fn(([id]) => {
      const size2 = textureSize(textureLoad(this.batchMesh._indirectTexture), 0);
      const x2 = int(id).modInt(int(size2));
      const y2 = int(id).div(int(size2));
      return textureLoad(this.batchMesh._indirectTexture, ivec2(x2, y2)).x;
    }).setLayout({
      name: "getIndirectIndex",
      type: "uint",
      inputs: [
        { name: "id", type: "int" }
      ]
    });
    const indirectId = getIndirectIndex(int(this.batchingIdNode));
    const matricesTexture = this.batchMesh._matricesTexture;
    const size = textureSize(textureLoad(matricesTexture), 0);
    const j = float(indirectId).mul(4).toInt().toVar();
    const x = j.modInt(size);
    const y = j.div(int(size));
    const batchingMatrix = mat4(
      textureLoad(matricesTexture, ivec2(x, y)),
      textureLoad(matricesTexture, ivec2(x.add(1), y)),
      textureLoad(matricesTexture, ivec2(x.add(2), y)),
      textureLoad(matricesTexture, ivec2(x.add(3), y))
    );
    const colorsTexture = this.batchMesh._colorsTexture;
    if (colorsTexture !== null) {
      const getBatchingColor = Fn(([id]) => {
        const size2 = textureSize(textureLoad(colorsTexture), 0).x;
        const j2 = id;
        const x2 = j2.modInt(size2);
        const y2 = j2.div(size2);
        return textureLoad(colorsTexture, ivec2(x2, y2)).rgb;
      }).setLayout({
        name: "getBatchingColor",
        type: "vec3",
        inputs: [
          { name: "id", type: "int" }
        ]
      });
      const color2 = getBatchingColor(indirectId);
      varyingProperty("vec3", "vBatchColor").assign(color2);
    }
    const bm = mat3(batchingMatrix);
    positionLocal.assign(batchingMatrix.mul(positionLocal));
    const transformedNormal = normalLocal.div(vec3(bm[0].dot(bm[0]), bm[1].dot(bm[1]), bm[2].dot(bm[2])));
    const batchingNormal = bm.mul(transformedNormal).xyz;
    normalLocal.assign(batchingNormal);
    if (builder.hasGeometryAttribute("tangent")) {
      tangentLocal.mulAssign(bm);
    }
  }
};
var batch = nodeProxy(BatchNode);
var _frameId = /* @__PURE__ */ new WeakMap();
var SkinningNode = class extends Node {
  static get type() {
    return "SkinningNode";
  }
  constructor(skinnedMesh, useReference = false) {
    super("void");
    this.skinnedMesh = skinnedMesh;
    this.useReference = useReference;
    this.updateType = NodeUpdateType.OBJECT;
    this.skinIndexNode = attribute("skinIndex", "uvec4");
    this.skinWeightNode = attribute("skinWeight", "vec4");
    let bindMatrixNode, bindMatrixInverseNode, boneMatricesNode;
    if (useReference) {
      bindMatrixNode = reference("bindMatrix", "mat4");
      bindMatrixInverseNode = reference("bindMatrixInverse", "mat4");
      boneMatricesNode = referenceBuffer("skeleton.boneMatrices", "mat4", skinnedMesh.skeleton.bones.length);
    } else {
      bindMatrixNode = uniform(skinnedMesh.bindMatrix, "mat4");
      bindMatrixInverseNode = uniform(skinnedMesh.bindMatrixInverse, "mat4");
      boneMatricesNode = buffer(skinnedMesh.skeleton.boneMatrices, "mat4", skinnedMesh.skeleton.bones.length);
    }
    this.bindMatrixNode = bindMatrixNode;
    this.bindMatrixInverseNode = bindMatrixInverseNode;
    this.boneMatricesNode = boneMatricesNode;
    this.previousBoneMatricesNode = null;
  }
  getSkinnedPosition(boneMatrices = this.boneMatricesNode, position = positionLocal) {
    const { skinIndexNode, skinWeightNode, bindMatrixNode, bindMatrixInverseNode } = this;
    const boneMatX = boneMatrices.element(skinIndexNode.x);
    const boneMatY = boneMatrices.element(skinIndexNode.y);
    const boneMatZ = boneMatrices.element(skinIndexNode.z);
    const boneMatW = boneMatrices.element(skinIndexNode.w);
    const skinVertex = bindMatrixNode.mul(position);
    const skinned = add(
      boneMatX.mul(skinWeightNode.x).mul(skinVertex),
      boneMatY.mul(skinWeightNode.y).mul(skinVertex),
      boneMatZ.mul(skinWeightNode.z).mul(skinVertex),
      boneMatW.mul(skinWeightNode.w).mul(skinVertex)
    );
    return bindMatrixInverseNode.mul(skinned).xyz;
  }
  getSkinnedNormal(boneMatrices = this.boneMatricesNode, normal2 = normalLocal) {
    const { skinIndexNode, skinWeightNode, bindMatrixNode, bindMatrixInverseNode } = this;
    const boneMatX = boneMatrices.element(skinIndexNode.x);
    const boneMatY = boneMatrices.element(skinIndexNode.y);
    const boneMatZ = boneMatrices.element(skinIndexNode.z);
    const boneMatW = boneMatrices.element(skinIndexNode.w);
    let skinMatrix = add(
      skinWeightNode.x.mul(boneMatX),
      skinWeightNode.y.mul(boneMatY),
      skinWeightNode.z.mul(boneMatZ),
      skinWeightNode.w.mul(boneMatW)
    );
    skinMatrix = bindMatrixInverseNode.mul(skinMatrix).mul(bindMatrixNode);
    return skinMatrix.transformDirection(normal2).xyz;
  }
  getPreviousSkinnedPosition(builder) {
    const skinnedMesh = builder.object;
    if (this.previousBoneMatricesNode === null) {
      skinnedMesh.skeleton.previousBoneMatrices = new Float32Array(skinnedMesh.skeleton.boneMatrices);
      this.previousBoneMatricesNode = referenceBuffer("skeleton.previousBoneMatrices", "mat4", skinnedMesh.skeleton.bones.length);
    }
    return this.getSkinnedPosition(this.previousBoneMatricesNode, positionPrevious);
  }
  needsPreviousBoneMatrices(builder) {
    const mrt2 = builder.renderer.getMRT();
    return mrt2 && mrt2.has("velocity");
  }
  setup(builder) {
    if (this.needsPreviousBoneMatrices(builder)) {
      positionPrevious.assign(this.getPreviousSkinnedPosition(builder));
    }
    const skinPosition = this.getSkinnedPosition();
    positionLocal.assign(skinPosition);
    if (builder.hasGeometryAttribute("normal")) {
      const skinNormal = this.getSkinnedNormal();
      normalLocal.assign(skinNormal);
      if (builder.hasGeometryAttribute("tangent")) {
        tangentLocal.assign(skinNormal);
      }
    }
  }
  generate(builder, output2) {
    if (output2 !== "void") {
      return positionLocal.build(builder, output2);
    }
  }
  update(frame) {
    const object = this.useReference ? frame.object : this.skinnedMesh;
    const skeleton = object.skeleton;
    if (_frameId.get(skeleton) === frame.frameId) return;
    _frameId.set(skeleton, frame.frameId);
    if (this.previousBoneMatricesNode !== null) skeleton.previousBoneMatrices.set(skeleton.boneMatrices);
    skeleton.update();
  }
};
var skinningReference = (skinnedMesh) => nodeObject(new SkinningNode(skinnedMesh, true));
var LoopNode = class extends Node {
  static get type() {
    return "LoopNode";
  }
  constructor(params = []) {
    super();
    this.params = params;
  }
  getVarName(index) {
    return String.fromCharCode("i".charCodeAt() + index);
  }
  getProperties(builder) {
    const properties = builder.getNodeProperties(this);
    if (properties.stackNode !== void 0) return properties;
    const inputs = {};
    for (let i = 0, l = this.params.length - 1; i < l; i++) {
      const param = this.params[i];
      const name = param.isNode !== true && param.name || this.getVarName(i);
      const type = param.isNode !== true && param.type || "int";
      inputs[name] = expression(name, type);
    }
    const stack2 = builder.addStack();
    properties.returnsNode = this.params[this.params.length - 1](inputs, stack2, builder);
    properties.stackNode = stack2;
    builder.removeStack();
    return properties;
  }
  getNodeType(builder) {
    const { returnsNode } = this.getProperties(builder);
    return returnsNode ? returnsNode.getNodeType(builder) : "void";
  }
  setup(builder) {
    this.getProperties(builder);
  }
  generate(builder) {
    const properties = this.getProperties(builder);
    const params = this.params;
    const stackNode = properties.stackNode;
    for (let i = 0, l = params.length - 1; i < l; i++) {
      const param = params[i];
      let start = null, end = null, name = null, type = null, condition = null, update = null;
      if (param.isNode) {
        type = "int";
        name = this.getVarName(i);
        start = "0";
        end = param.build(builder, type);
        condition = "<";
      } else {
        type = param.type || "int";
        name = param.name || this.getVarName(i);
        start = param.start;
        end = param.end;
        condition = param.condition;
        update = param.update;
        if (typeof start === "number") start = builder.generateConst(type, start);
        else if (start && start.isNode) start = start.build(builder, type);
        if (typeof end === "number") end = builder.generateConst(type, end);
        else if (end && end.isNode) end = end.build(builder, type);
        if (start !== void 0 && end === void 0) {
          start = start + " - 1";
          end = "0";
          condition = ">=";
        } else if (end !== void 0 && start === void 0) {
          start = "0";
          condition = "<";
        }
        if (condition === void 0) {
          if (Number(start) > Number(end)) {
            condition = ">=";
          } else {
            condition = "<";
          }
        }
      }
      const internalParam = { start, end, condition };
      const startSnippet = internalParam.start;
      const endSnippet = internalParam.end;
      let declarationSnippet = "";
      let conditionalSnippet = "";
      let updateSnippet = "";
      if (!update) {
        if (type === "int" || type === "uint") {
          if (condition.includes("<")) update = "++";
          else update = "--";
        } else {
          if (condition.includes("<")) update = "+= 1.";
          else update = "-= 1.";
        }
      }
      declarationSnippet += builder.getVar(type, name) + " = " + startSnippet;
      conditionalSnippet += name + " " + condition + " " + endSnippet;
      updateSnippet += name + " " + update;
      const forSnippet = `for ( ${declarationSnippet}; ${conditionalSnippet}; ${updateSnippet} )`;
      builder.addFlowCode((i === 0 ? "\n" : "") + builder.tab + forSnippet + " {\n\n").addFlowTab();
    }
    const stackSnippet = stackNode.build(builder, "void");
    const returnsSnippet = properties.returnsNode ? properties.returnsNode.build(builder) : "";
    builder.removeFlowTab().addFlowCode("\n" + builder.tab + stackSnippet);
    for (let i = 0, l = this.params.length - 1; i < l; i++) {
      builder.addFlowCode((i === 0 ? "" : builder.tab) + "}\n\n").removeFlowTab();
    }
    builder.addFlowTab();
    return returnsSnippet;
  }
};
var Loop = (...params) => nodeObject(new LoopNode(nodeArray(params, "int"))).append();
var Break = () => expression("break").append();
var _morphTextures = /* @__PURE__ */ new WeakMap();
var _morphVec4 = new Vector4();
var getMorph = Fn(({ bufferMap, influence, stride, width, depth: depth2, offset }) => {
  const texelIndex = int(vertexIndex).mul(stride).add(offset);
  const y = texelIndex.div(width);
  const x = texelIndex.sub(y.mul(width));
  const bufferAttrib = textureLoad(bufferMap, ivec2(x, y)).depth(depth2);
  return bufferAttrib.mul(influence);
});
function getEntry(geometry) {
  const hasMorphPosition = geometry.morphAttributes.position !== void 0;
  const hasMorphNormals = geometry.morphAttributes.normal !== void 0;
  const hasMorphColors = geometry.morphAttributes.color !== void 0;
  const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
  const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
  let entry = _morphTextures.get(geometry);
  if (entry === void 0 || entry.count !== morphTargetsCount) {
    let disposeTexture = function() {
      bufferTexture.dispose();
      _morphTextures.delete(geometry);
      geometry.removeEventListener("dispose", disposeTexture);
    };
    if (entry !== void 0) entry.texture.dispose();
    const morphTargets = geometry.morphAttributes.position || [];
    const morphNormals = geometry.morphAttributes.normal || [];
    const morphColors = geometry.morphAttributes.color || [];
    let vertexDataCount = 0;
    if (hasMorphPosition === true) vertexDataCount = 1;
    if (hasMorphNormals === true) vertexDataCount = 2;
    if (hasMorphColors === true) vertexDataCount = 3;
    let width = geometry.attributes.position.count * vertexDataCount;
    let height = 1;
    const maxTextureSize = 4096;
    if (width > maxTextureSize) {
      height = Math.ceil(width / maxTextureSize);
      width = maxTextureSize;
    }
    const buffer2 = new Float32Array(width * height * 4 * morphTargetsCount);
    const bufferTexture = new DataArrayTexture(buffer2, width, height, morphTargetsCount);
    bufferTexture.type = FloatType;
    bufferTexture.needsUpdate = true;
    const vertexDataStride = vertexDataCount * 4;
    for (let i = 0; i < morphTargetsCount; i++) {
      const morphTarget = morphTargets[i];
      const morphNormal = morphNormals[i];
      const morphColor = morphColors[i];
      const offset = width * height * 4 * i;
      for (let j = 0; j < morphTarget.count; j++) {
        const stride = j * vertexDataStride;
        if (hasMorphPosition === true) {
          _morphVec4.fromBufferAttribute(morphTarget, j);
          buffer2[offset + stride + 0] = _morphVec4.x;
          buffer2[offset + stride + 1] = _morphVec4.y;
          buffer2[offset + stride + 2] = _morphVec4.z;
          buffer2[offset + stride + 3] = 0;
        }
        if (hasMorphNormals === true) {
          _morphVec4.fromBufferAttribute(morphNormal, j);
          buffer2[offset + stride + 4] = _morphVec4.x;
          buffer2[offset + stride + 5] = _morphVec4.y;
          buffer2[offset + stride + 6] = _morphVec4.z;
          buffer2[offset + stride + 7] = 0;
        }
        if (hasMorphColors === true) {
          _morphVec4.fromBufferAttribute(morphColor, j);
          buffer2[offset + stride + 8] = _morphVec4.x;
          buffer2[offset + stride + 9] = _morphVec4.y;
          buffer2[offset + stride + 10] = _morphVec4.z;
          buffer2[offset + stride + 11] = morphColor.itemSize === 4 ? _morphVec4.w : 1;
        }
      }
    }
    entry = {
      count: morphTargetsCount,
      texture: bufferTexture,
      stride: vertexDataCount,
      size: new Vector22(width, height)
    };
    _morphTextures.set(geometry, entry);
    geometry.addEventListener("dispose", disposeTexture);
  }
  return entry;
}
var MorphNode = class extends Node {
  static get type() {
    return "MorphNode";
  }
  constructor(mesh) {
    super("void");
    this.mesh = mesh;
    this.morphBaseInfluence = uniform(1);
    this.updateType = NodeUpdateType.OBJECT;
  }
  setup(builder) {
    const { geometry } = builder;
    const hasMorphPosition = geometry.morphAttributes.position !== void 0;
    const hasMorphNormals = geometry.hasAttribute("normal") && geometry.morphAttributes.normal !== void 0;
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    const { texture: bufferMap, stride, size } = getEntry(geometry);
    if (hasMorphPosition === true) positionLocal.mulAssign(this.morphBaseInfluence);
    if (hasMorphNormals === true) normalLocal.mulAssign(this.morphBaseInfluence);
    const width = int(size.width);
    Loop(morphTargetsCount, ({ i }) => {
      const influence = float(0).toVar();
      if (this.mesh.count > 1 && (this.mesh.morphTexture !== null && this.mesh.morphTexture !== void 0)) {
        influence.assign(textureLoad(this.mesh.morphTexture, ivec2(int(i).add(1), int(instanceIndex))).r);
      } else {
        influence.assign(reference("morphTargetInfluences", "float").element(i).toVar());
      }
      if (hasMorphPosition === true) {
        positionLocal.addAssign(getMorph({
          bufferMap,
          influence,
          stride,
          width,
          depth: i,
          offset: int(0)
        }));
      }
      if (hasMorphNormals === true) {
        normalLocal.addAssign(getMorph({
          bufferMap,
          influence,
          stride,
          width,
          depth: i,
          offset: int(1)
        }));
      }
    });
  }
  update() {
    const morphBaseInfluence = this.morphBaseInfluence;
    if (this.mesh.geometry.morphTargetsRelative) {
      morphBaseInfluence.value = 1;
    } else {
      morphBaseInfluence.value = 1 - this.mesh.morphTargetInfluences.reduce((a, b) => a + b, 0);
    }
  }
};
var morphReference = nodeProxy(MorphNode);
var LightingNode = class extends Node {
  static get type() {
    return "LightingNode";
  }
  constructor() {
    super("vec3");
    this.isLightingNode = true;
  }
  generate() {
    console.warn("Abstract function.");
  }
};
var AONode = class extends LightingNode {
  static get type() {
    return "AONode";
  }
  constructor(aoNode = null) {
    super();
    this.aoNode = aoNode;
  }
  setup(builder) {
    builder.context.ambientOcclusion.mulAssign(this.aoNode);
  }
};
var LightingContextNode = class extends ContextNode {
  static get type() {
    return "LightingContextNode";
  }
  constructor(node, lightingModel = null, backdropNode = null, backdropAlphaNode = null) {
    super(node);
    this.lightingModel = lightingModel;
    this.backdropNode = backdropNode;
    this.backdropAlphaNode = backdropAlphaNode;
    this._value = null;
  }
  getContext() {
    const { backdropNode, backdropAlphaNode } = this;
    const directDiffuse = vec3().toVar("directDiffuse"), directSpecular = vec3().toVar("directSpecular"), indirectDiffuse = vec3().toVar("indirectDiffuse"), indirectSpecular = vec3().toVar("indirectSpecular");
    const reflectedLight = {
      directDiffuse,
      directSpecular,
      indirectDiffuse,
      indirectSpecular
    };
    const context2 = {
      radiance: vec3().toVar("radiance"),
      irradiance: vec3().toVar("irradiance"),
      iblIrradiance: vec3().toVar("iblIrradiance"),
      ambientOcclusion: float(1).toVar("ambientOcclusion"),
      reflectedLight,
      backdrop: backdropNode,
      backdropAlpha: backdropAlphaNode
    };
    return context2;
  }
  setup(builder) {
    this.value = this._value || (this._value = this.getContext());
    this.value.lightingModel = this.lightingModel || builder.context.lightingModel;
    return super.setup(builder);
  }
};
var lightingContext = nodeProxy(LightingContextNode);
var IrradianceNode = class extends LightingNode {
  static get type() {
    return "IrradianceNode";
  }
  constructor(node) {
    super();
    this.node = node;
  }
  setup(builder) {
    builder.context.irradiance.addAssign(this.node);
  }
};
var screenSizeVec;
var viewportVec;
var ScreenNode = class _ScreenNode extends Node {
  static get type() {
    return "ScreenNode";
  }
  constructor(scope) {
    super();
    this.scope = scope;
    this.isViewportNode = true;
  }
  getNodeType() {
    if (this.scope === _ScreenNode.VIEWPORT) return "vec4";
    else return "vec2";
  }
  getUpdateType() {
    let updateType = NodeUpdateType.NONE;
    if (this.scope === _ScreenNode.SIZE || this.scope === _ScreenNode.VIEWPORT) {
      updateType = NodeUpdateType.RENDER;
    }
    this.updateType = updateType;
    return updateType;
  }
  update({ renderer }) {
    const renderTarget = renderer.getRenderTarget();
    if (this.scope === _ScreenNode.VIEWPORT) {
      if (renderTarget !== null) {
        viewportVec.copy(renderTarget.viewport);
      } else {
        renderer.getViewport(viewportVec);
        viewportVec.multiplyScalar(renderer.getPixelRatio());
      }
    } else {
      if (renderTarget !== null) {
        screenSizeVec.width = renderTarget.width;
        screenSizeVec.height = renderTarget.height;
      } else {
        renderer.getDrawingBufferSize(screenSizeVec);
      }
    }
  }
  setup() {
    const scope = this.scope;
    let output2 = null;
    if (scope === _ScreenNode.SIZE) {
      output2 = uniform(screenSizeVec || (screenSizeVec = new Vector22()));
    } else if (scope === _ScreenNode.VIEWPORT) {
      output2 = uniform(viewportVec || (viewportVec = new Vector4()));
    } else {
      output2 = vec2(screenCoordinate.div(screenSize));
    }
    return output2;
  }
  generate(builder) {
    if (this.scope === _ScreenNode.COORDINATE) {
      let coord = builder.getFragCoord();
      if (builder.isFlipY()) {
        const size = builder.getNodeProperties(screenSize).outputNode.build(builder);
        coord = `${builder.getType("vec2")}( ${coord}.x, ${size}.y - ${coord}.y )`;
      }
      return coord;
    }
    return super.generate(builder);
  }
};
ScreenNode.COORDINATE = "coordinate";
ScreenNode.VIEWPORT = "viewport";
ScreenNode.SIZE = "size";
ScreenNode.UV = "uv";
var screenUV = nodeImmutable(ScreenNode, ScreenNode.UV);
var screenSize = nodeImmutable(ScreenNode, ScreenNode.SIZE);
var screenCoordinate = nodeImmutable(ScreenNode, ScreenNode.COORDINATE);
var viewport = nodeImmutable(ScreenNode, ScreenNode.VIEWPORT);
var viewportSize = viewport.zw;
var viewportCoordinate = screenCoordinate.sub(viewport.xy);
var viewportUV = viewportCoordinate.div(viewportSize);
var viewportResolution = Fn(() => {
  console.warn('TSL.ViewportNode: "viewportResolution" is deprecated. Use "screenSize" instead.');
  return screenSize;
}, "vec2").once()();
var viewportTopLeft = Fn(() => {
  console.warn('TSL.ViewportNode: "viewportTopLeft" is deprecated. Use "screenUV" instead.');
  return screenUV;
}, "vec2").once()();
var viewportBottomLeft = Fn(() => {
  console.warn('TSL.ViewportNode: "viewportBottomLeft" is deprecated. Use "screenUV.flipY()" instead.');
  return screenUV.flipY();
}, "vec2").once()();
var _size$4 = new Vector22();
var ViewportTextureNode = class extends TextureNode {
  static get type() {
    return "ViewportTextureNode";
  }
  constructor(uvNode = screenUV, levelNode = null, framebufferTexture = null) {
    if (framebufferTexture === null) {
      framebufferTexture = new FramebufferTexture();
      framebufferTexture.minFilter = LinearMipmapLinearFilter;
    }
    super(framebufferTexture, uvNode, levelNode);
    this.generateMipmaps = false;
    this.isOutputTextureNode = true;
    this.updateBeforeType = NodeUpdateType.FRAME;
  }
  updateBefore(frame) {
    const renderer = frame.renderer;
    renderer.getDrawingBufferSize(_size$4);
    const framebufferTexture = this.value;
    if (framebufferTexture.image.width !== _size$4.width || framebufferTexture.image.height !== _size$4.height) {
      framebufferTexture.image.width = _size$4.width;
      framebufferTexture.image.height = _size$4.height;
      framebufferTexture.needsUpdate = true;
    }
    const currentGenerateMipmaps = framebufferTexture.generateMipmaps;
    framebufferTexture.generateMipmaps = this.generateMipmaps;
    renderer.copyFramebufferToTexture(framebufferTexture);
    framebufferTexture.generateMipmaps = currentGenerateMipmaps;
  }
  clone() {
    const viewportTextureNode = new this.constructor(this.uvNode, this.levelNode, this.value);
    viewportTextureNode.generateMipmaps = this.generateMipmaps;
    return viewportTextureNode;
  }
};
var viewportTexture = nodeProxy(ViewportTextureNode);
var viewportMipTexture = nodeProxy(ViewportTextureNode, null, null, { generateMipmaps: true });
var sharedDepthbuffer = null;
var ViewportDepthTextureNode = class extends ViewportTextureNode {
  static get type() {
    return "ViewportDepthTextureNode";
  }
  constructor(uvNode = screenUV, levelNode = null) {
    if (sharedDepthbuffer === null) {
      sharedDepthbuffer = new DepthTexture();
    }
    super(uvNode, levelNode, sharedDepthbuffer);
  }
};
var viewportDepthTexture = nodeProxy(ViewportDepthTextureNode);
var ViewportDepthNode = class _ViewportDepthNode extends Node {
  static get type() {
    return "ViewportDepthNode";
  }
  constructor(scope, valueNode = null) {
    super("float");
    this.scope = scope;
    this.valueNode = valueNode;
    this.isViewportDepthNode = true;
  }
  generate(builder) {
    const { scope } = this;
    if (scope === _ViewportDepthNode.DEPTH_BASE) {
      return builder.getFragDepth();
    }
    return super.generate(builder);
  }
  setup({ camera }) {
    const { scope } = this;
    const value = this.valueNode;
    let node = null;
    if (scope === _ViewportDepthNode.DEPTH_BASE) {
      if (value !== null) {
        node = depthBase().assign(value);
      }
    } else if (scope === _ViewportDepthNode.DEPTH) {
      if (camera.isPerspectiveCamera) {
        node = viewZToPerspectiveDepth(positionView.z, cameraNear, cameraFar);
      } else {
        node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
      }
    } else if (scope === _ViewportDepthNode.LINEAR_DEPTH) {
      if (value !== null) {
        if (camera.isPerspectiveCamera) {
          const viewZ = perspectiveDepthToViewZ(value, cameraNear, cameraFar);
          node = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
        } else {
          node = value;
        }
      } else {
        node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
      }
    }
    return node;
  }
};
ViewportDepthNode.DEPTH_BASE = "depthBase";
ViewportDepthNode.DEPTH = "depth";
ViewportDepthNode.LINEAR_DEPTH = "linearDepth";
var viewZToOrthographicDepth = (viewZ, near, far) => viewZ.add(near).div(near.sub(far));
var viewZToPerspectiveDepth = (viewZ, near, far) => near.add(viewZ).mul(far).div(far.sub(near).mul(viewZ));
var perspectiveDepthToViewZ = (depth2, near, far) => near.mul(far).div(far.sub(near).mul(depth2).sub(far));
var perspectiveDepthToLogarithmicDepth = (perspectiveW, near, far) => {
  near = near.max(1e-6).toVar();
  const numerator = log2(perspectiveW.div(near).add(1));
  const denominator = log2(far.div(near).add(1));
  return numerator.div(denominator);
};
var depthBase = nodeProxy(ViewportDepthNode, ViewportDepthNode.DEPTH_BASE);
var depth = nodeImmutable(ViewportDepthNode, ViewportDepthNode.DEPTH);
var linearDepth = nodeProxy(ViewportDepthNode, ViewportDepthNode.LINEAR_DEPTH);
var viewportLinearDepth = linearDepth(viewportDepthTexture());
depth.assign = (value) => depthBase(value);
var ClippingNode = class _ClippingNode extends Node {
  static get type() {
    return "ClippingNode";
  }
  constructor(scope = _ClippingNode.DEFAULT) {
    super();
    this.scope = scope;
  }
  setup(builder) {
    super.setup(builder);
    const clippingContext = builder.clippingContext;
    const { localClipIntersection, localClippingCount, globalClippingCount } = clippingContext;
    const numClippingPlanes = globalClippingCount + localClippingCount;
    const numUnionClippingPlanes = localClipIntersection ? numClippingPlanes - localClippingCount : numClippingPlanes;
    if (this.scope === _ClippingNode.ALPHA_TO_COVERAGE) {
      return this.setupAlphaToCoverage(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
    } else {
      return this.setupDefault(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
    }
  }
  setupAlphaToCoverage(planes, numClippingPlanes, numUnionClippingPlanes) {
    return Fn(() => {
      const clippingPlanes = uniformArray(planes);
      const distanceToPlane = property("float", "distanceToPlane");
      const distanceGradient = property("float", "distanceToGradient");
      const clipOpacity = property("float", "clipOpacity");
      clipOpacity.assign(1);
      let plane;
      Loop(numUnionClippingPlanes, ({ i }) => {
        plane = clippingPlanes.element(i);
        distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
        distanceGradient.assign(distanceToPlane.fwidth().div(2));
        clipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane));
        clipOpacity.equal(0).discard();
      });
      if (numUnionClippingPlanes < numClippingPlanes) {
        const unionClipOpacity = property("float", "unionclipOpacity");
        unionClipOpacity.assign(1);
        Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
          plane = clippingPlanes.element(i);
          distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
          distanceGradient.assign(distanceToPlane.fwidth().div(2));
          unionClipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane).oneMinus());
        });
        clipOpacity.mulAssign(unionClipOpacity.oneMinus());
      }
      diffuseColor.a.mulAssign(clipOpacity);
      diffuseColor.a.equal(0).discard();
    })();
  }
  setupDefault(planes, numClippingPlanes, numUnionClippingPlanes) {
    return Fn(() => {
      const clippingPlanes = uniformArray(planes);
      let plane;
      Loop(numUnionClippingPlanes, ({ i }) => {
        plane = clippingPlanes.element(i);
        positionView.dot(plane.xyz).greaterThan(plane.w).discard();
      });
      if (numUnionClippingPlanes < numClippingPlanes) {
        const clipped = property("bool", "clipped");
        clipped.assign(true);
        Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
          plane = clippingPlanes.element(i);
          clipped.assign(positionView.dot(plane.xyz).greaterThan(plane.w).and(clipped));
        });
        clipped.discard();
      }
    })();
  }
};
ClippingNode.ALPHA_TO_COVERAGE = "alphaToCoverage";
ClippingNode.DEFAULT = "default";
var clipping = () => nodeObject(new ClippingNode());
var clippingAlpha = () => nodeObject(new ClippingNode(ClippingNode.ALPHA_TO_COVERAGE));
var ALPHA_HASH_SCALE = 0.05;
var hash2D = Fn(([value]) => {
  return fract(mul(1e4, sin(mul(17, value.x).add(mul(0.1, value.y)))).mul(add(0.1, abs(sin(mul(13, value.y).add(value.x))))));
});
var hash3D = Fn(([value]) => {
  return hash2D(vec2(hash2D(value.xy), value.z));
});
var getAlphaHashThreshold = Fn(([position]) => {
  const maxDeriv = max$1(
    length(dFdx(position.xyz)),
    length(dFdy(position.xyz))
  ).toVar("maxDeriv");
  const pixScale = float(1).div(float(ALPHA_HASH_SCALE).mul(maxDeriv)).toVar("pixScale");
  const pixScales = vec2(
    exp2(floor(log2(pixScale))),
    exp2(ceil(log2(pixScale)))
  ).toVar("pixScales");
  const alpha = vec2(
    hash3D(floor(pixScales.x.mul(position.xyz))),
    hash3D(floor(pixScales.y.mul(position.xyz)))
  ).toVar("alpha");
  const lerpFactor = fract(log2(pixScale)).toVar("lerpFactor");
  const x = add(mul(lerpFactor.oneMinus(), alpha.x), mul(lerpFactor, alpha.y)).toVar("x");
  const a = min$1(lerpFactor, lerpFactor.oneMinus()).toVar("a");
  const cases = vec3(
    x.mul(x).div(mul(2, a).mul(sub(1, a))),
    x.sub(mul(0.5, a)).div(sub(1, a)),
    sub(1, sub(1, x).mul(sub(1, x)).div(mul(2, a).mul(sub(1, a))))
  ).toVar("cases");
  const threshold = x.lessThan(a.oneMinus()).select(x.lessThan(a).select(cases.x, cases.y), cases.z);
  return clamp(threshold, 1e-6, 1);
});
var NodeMaterial = class extends Material {
  static get type() {
    return "NodeMaterial";
  }
  constructor() {
    super();
    this.isNodeMaterial = true;
    this.type = this.constructor.type;
    this.forceSinglePass = false;
    this.fog = true;
    this.lights = false;
    this.lightsNode = null;
    this.envNode = null;
    this.aoNode = null;
    this.colorNode = null;
    this.normalNode = null;
    this.opacityNode = null;
    this.backdropNode = null;
    this.backdropAlphaNode = null;
    this.alphaTestNode = null;
    this.positionNode = null;
    this.geometryNode = null;
    this.depthNode = null;
    this.shadowNode = null;
    this.shadowPositionNode = null;
    this.outputNode = null;
    this.mrtNode = null;
    this.fragmentNode = null;
    this.vertexNode = null;
  }
  customProgramCacheKey() {
    return this.type + getCacheKey$1(this);
  }
  build(builder) {
    this.setup(builder);
  }
  setupObserver(builder) {
    return new NodeMaterialObserver(builder);
  }
  setup(builder) {
    builder.context.setupNormal = () => this.setupNormal(builder);
    builder.addStack();
    builder.stack.outputNode = this.vertexNode || this.setupPosition(builder);
    if (this.geometryNode !== null) {
      builder.stack.outputNode = builder.stack.outputNode.bypass(this.geometryNode);
    }
    builder.addFlow("vertex", builder.removeStack());
    builder.addStack();
    let resultNode;
    const clippingNode = this.setupClipping(builder);
    if (this.depthWrite === true) this.setupDepth(builder);
    if (this.fragmentNode === null) {
      this.setupDiffuseColor(builder);
      this.setupVariants(builder);
      const outgoingLightNode = this.setupLighting(builder);
      if (clippingNode !== null) builder.stack.add(clippingNode);
      const basicOutput = vec4(outgoingLightNode, diffuseColor.a).max(0);
      resultNode = this.setupOutput(builder, basicOutput);
      output.assign(resultNode);
      if (this.outputNode !== null) resultNode = this.outputNode;
      const renderTarget = builder.renderer.getRenderTarget();
      if (renderTarget !== null) {
        const mrt2 = builder.renderer.getMRT();
        const materialMRT = this.mrtNode;
        if (mrt2 !== null) {
          resultNode = mrt2;
          if (materialMRT !== null) {
            resultNode = mrt2.merge(materialMRT);
          }
        } else if (materialMRT !== null) {
          resultNode = materialMRT;
        }
      }
    } else {
      let fragmentNode = this.fragmentNode;
      if (fragmentNode.isOutputStructNode !== true) {
        fragmentNode = vec4(fragmentNode);
      }
      resultNode = this.setupOutput(builder, fragmentNode);
    }
    builder.stack.outputNode = resultNode;
    builder.addFlow("fragment", builder.removeStack());
    builder.monitor = this.setupObserver(builder);
  }
  setupClipping(builder) {
    if (builder.clippingContext === null) return null;
    const { globalClippingCount, localClippingCount } = builder.clippingContext;
    let result = null;
    if (globalClippingCount || localClippingCount) {
      const samples = builder.renderer.samples;
      if (this.alphaToCoverage && samples > 1) {
        result = clippingAlpha();
      } else {
        builder.stack.add(clipping());
      }
    }
    return result;
  }
  setupDepth(builder) {
    const { renderer, camera } = builder;
    let depthNode = this.depthNode;
    if (depthNode === null) {
      const mrt2 = renderer.getMRT();
      if (mrt2 && mrt2.has("depth")) {
        depthNode = mrt2.get("depth");
      } else if (renderer.logarithmicDepthBuffer === true) {
        if (camera.isPerspectiveCamera) {
          depthNode = perspectiveDepthToLogarithmicDepth(modelViewProjection().w, cameraNear, cameraFar);
        } else {
          depthNode = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
        }
      }
    }
    if (depthNode !== null) {
      depth.assign(depthNode).append();
    }
  }
  setupPosition(builder) {
    const { object } = builder;
    const geometry = object.geometry;
    builder.addStack();
    if (geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color) {
      morphReference(object).append();
    }
    if (object.isSkinnedMesh === true) {
      skinningReference(object).append();
    }
    if (this.displacementMap) {
      const displacementMap = materialReference("displacementMap", "texture");
      const displacementScale = materialReference("displacementScale", "float");
      const displacementBias = materialReference("displacementBias", "float");
      positionLocal.addAssign(normalLocal.normalize().mul(displacementMap.x.mul(displacementScale).add(displacementBias)));
    }
    if (object.isBatchedMesh) {
      batch(object).append();
    }
    if (object.instanceMatrix && object.instanceMatrix.isInstancedBufferAttribute === true) {
      instance(object).append();
    }
    if (this.positionNode !== null) {
      positionLocal.assign(this.positionNode);
    }
    const mvp = modelViewProjection();
    builder.context.vertex = builder.removeStack();
    builder.context.mvp = mvp;
    return mvp;
  }
  setupDiffuseColor({ object, geometry }) {
    let colorNode = this.colorNode ? vec4(this.colorNode) : materialColor;
    if (this.vertexColors === true && geometry.hasAttribute("color")) {
      colorNode = vec4(colorNode.xyz.mul(attribute("color", "vec3")), colorNode.a);
    }
    if (object.instanceColor) {
      const instanceColor = varyingProperty("vec3", "vInstanceColor");
      colorNode = instanceColor.mul(colorNode);
    }
    if (object.isBatchedMesh && object._colorsTexture) {
      const batchColor = varyingProperty("vec3", "vBatchColor");
      colorNode = batchColor.mul(colorNode);
    }
    diffuseColor.assign(colorNode);
    const opacityNode = this.opacityNode ? float(this.opacityNode) : materialOpacity;
    diffuseColor.a.assign(diffuseColor.a.mul(opacityNode));
    if (this.alphaTestNode !== null || this.alphaTest > 0) {
      const alphaTestNode = this.alphaTestNode !== null ? float(this.alphaTestNode) : materialAlphaTest;
      diffuseColor.a.lessThanEqual(alphaTestNode).discard();
    }
    if (this.alphaHash === true) {
      diffuseColor.a.lessThan(getAlphaHashThreshold(positionLocal)).discard();
    }
    if (this.transparent === false && this.blending === NormalBlending && this.alphaToCoverage === false) {
      diffuseColor.a.assign(1);
    }
  }
  setupVariants() {
  }
  setupOutgoingLight() {
    return this.lights === true ? vec3(0) : diffuseColor.rgb;
  }
  setupNormal() {
    return this.normalNode ? vec3(this.normalNode) : materialNormal;
  }
  setupEnvironment() {
    let node = null;
    if (this.envNode) {
      node = this.envNode;
    } else if (this.envMap) {
      node = this.envMap.isCubeTexture ? materialReference("envMap", "cubeTexture") : materialReference("envMap", "texture");
    }
    return node;
  }
  setupLightMap(builder) {
    let node = null;
    if (builder.material.lightMap) {
      node = new IrradianceNode(materialLightMap);
    }
    return node;
  }
  setupLights(builder) {
    const materialLightsNode = [];
    const envNode = this.setupEnvironment(builder);
    if (envNode && envNode.isLightingNode) {
      materialLightsNode.push(envNode);
    }
    const lightMapNode = this.setupLightMap(builder);
    if (lightMapNode && lightMapNode.isLightingNode) {
      materialLightsNode.push(lightMapNode);
    }
    if (this.aoNode !== null || builder.material.aoMap) {
      const aoNode = this.aoNode !== null ? this.aoNode : materialAOMap;
      materialLightsNode.push(new AONode(aoNode));
    }
    let lightsN = this.lightsNode || builder.lightsNode;
    if (materialLightsNode.length > 0) {
      lightsN = builder.renderer.lighting.createNode([...lightsN.getLights(), ...materialLightsNode]);
    }
    return lightsN;
  }
  setupLightingModel() {
  }
  setupLighting(builder) {
    const { material } = builder;
    const { backdropNode, backdropAlphaNode, emissiveNode } = this;
    const lights = this.lights === true || this.lightsNode !== null;
    const lightsNode = lights ? this.setupLights(builder) : null;
    let outgoingLightNode = this.setupOutgoingLight(builder);
    if (lightsNode && lightsNode.getScope().hasLights) {
      const lightingModel = this.setupLightingModel(builder);
      outgoingLightNode = lightingContext(lightsNode, lightingModel, backdropNode, backdropAlphaNode);
    } else if (backdropNode !== null) {
      outgoingLightNode = vec3(backdropAlphaNode !== null ? mix(outgoingLightNode, backdropNode, backdropAlphaNode) : backdropNode);
    }
    if (emissiveNode && emissiveNode.isNode === true || material.emissive && material.emissive.isColor === true) {
      emissive.assign(vec3(emissiveNode ? emissiveNode : materialEmissive));
      outgoingLightNode = outgoingLightNode.add(emissive);
    }
    return outgoingLightNode;
  }
  setupOutput(builder, outputNode) {
    if (this.fog === true) {
      const fogNode = builder.fogNode;
      if (fogNode) outputNode = vec4(fogNode.mix(outputNode.rgb, fogNode.colorNode), outputNode.a);
    }
    return outputNode;
  }
  setDefaultValues(material) {
    for (const property2 in material) {
      const value = material[property2];
      if (this[property2] === void 0) {
        this[property2] = value;
        if (value && value.clone) this[property2] = value.clone();
      }
    }
    const descriptors = Object.getOwnPropertyDescriptors(material.constructor.prototype);
    for (const key in descriptors) {
      if (Object.getOwnPropertyDescriptor(this.constructor.prototype, key) === void 0 && descriptors[key].get !== void 0) {
        Object.defineProperty(this.constructor.prototype, key, descriptors[key]);
      }
    }
  }
  toJSON(meta) {
    const isRoot = meta === void 0 || typeof meta === "string";
    if (isRoot) {
      meta = {
        textures: {},
        images: {},
        nodes: {}
      };
    }
    const data = Material.prototype.toJSON.call(this, meta);
    const nodeChildren = getNodeChildren(this);
    data.inputNodes = {};
    for (const { property: property2, childNode } of nodeChildren) {
      data.inputNodes[property2] = childNode.toJSON(meta).uuid;
    }
    function extractFromCache(cache2) {
      const values = [];
      for (const key in cache2) {
        const data2 = cache2[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRoot) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const nodes = extractFromCache(meta.nodes);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
      if (nodes.length > 0) data.nodes = nodes;
    }
    return data;
  }
  copy(source) {
    this.lightsNode = source.lightsNode;
    this.envNode = source.envNode;
    this.colorNode = source.colorNode;
    this.normalNode = source.normalNode;
    this.opacityNode = source.opacityNode;
    this.backdropNode = source.backdropNode;
    this.backdropAlphaNode = source.backdropAlphaNode;
    this.alphaTestNode = source.alphaTestNode;
    this.positionNode = source.positionNode;
    this.geometryNode = source.geometryNode;
    this.depthNode = source.depthNode;
    this.shadowNode = source.shadowNode;
    this.shadowPositionNode = source.shadowPositionNode;
    this.outputNode = source.outputNode;
    this.mrtNode = source.mrtNode;
    this.fragmentNode = source.fragmentNode;
    this.vertexNode = source.vertexNode;
    return super.copy(source);
  }
};
var _defaultValues$e = new PointsMaterial();
var _defaultValues$d = new LineBasicMaterial();
var _defaultValues$c = new LineDashedMaterial();
var _defaultValues$b = new LineDashedMaterial();
var _defaultValues$a = new MeshNormalMaterial();
var EquirectUVNode = class extends TempNode {
  static get type() {
    return "EquirectUVNode";
  }
  constructor(dirNode = positionWorldDirection) {
    super("vec2");
    this.dirNode = dirNode;
  }
  setup() {
    const dir = this.dirNode;
    const u = dir.z.atan2(dir.x).mul(1 / (Math.PI * 2)).add(0.5);
    const v = dir.y.clamp(-1, 1).asin().mul(1 / Math.PI).add(0.5);
    return vec2(u, v);
  }
};
var equirectUV = nodeProxy(EquirectUVNode);
var CubeRenderTarget = class extends WebGLCubeRenderTarget {
  constructor(size = 1, options = {}) {
    super(size, options);
    this.isCubeRenderTarget = true;
  }
  fromEquirectangularTexture(renderer, texture$1) {
    const currentMinFilter = texture$1.minFilter;
    const currentGenerateMipmaps = texture$1.generateMipmaps;
    texture$1.generateMipmaps = true;
    this.texture.type = texture$1.type;
    this.texture.colorSpace = texture$1.colorSpace;
    this.texture.generateMipmaps = texture$1.generateMipmaps;
    this.texture.minFilter = texture$1.minFilter;
    this.texture.magFilter = texture$1.magFilter;
    const geometry = new BoxGeometry(5, 5, 5);
    const uvNode = equirectUV(positionWorldDirection);
    const material = new NodeMaterial();
    material.colorNode = texture(texture$1, uvNode, 0);
    material.side = BackSide;
    material.blending = NoBlending;
    const mesh = new Mesh2(geometry, material);
    const scene = new Scene();
    scene.add(mesh);
    if (texture$1.minFilter === LinearMipmapLinearFilter) texture$1.minFilter = LinearFilter;
    const camera = new CubeCamera(1, 10, this);
    const currentMRT = renderer.getMRT();
    renderer.setMRT(null);
    camera.update(renderer, scene);
    renderer.setMRT(currentMRT);
    texture$1.minFilter = currentMinFilter;
    texture$1.currentGenerateMipmaps = currentGenerateMipmaps;
    mesh.geometry.dispose();
    mesh.material.dispose();
    return this;
  }
};
var _cache$1 = /* @__PURE__ */ new WeakMap();
var CubeMapNode = class extends TempNode {
  static get type() {
    return "CubeMapNode";
  }
  constructor(envNode) {
    super("vec3");
    this.envNode = envNode;
    this._cubeTexture = null;
    this._cubeTextureNode = cubeTexture();
    const defaultTexture = new CubeTexture();
    defaultTexture.isRenderTargetTexture = true;
    this._defaultTexture = defaultTexture;
    this.updateBeforeType = NodeUpdateType.RENDER;
  }
  updateBefore(frame) {
    const { renderer, material } = frame;
    const envNode = this.envNode;
    if (envNode.isTextureNode || envNode.isMaterialReferenceNode) {
      const texture2 = envNode.isTextureNode ? envNode.value : material[envNode.property];
      if (texture2 && texture2.isTexture) {
        const mapping = texture2.mapping;
        if (mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping) {
          if (_cache$1.has(texture2)) {
            const cubeMap = _cache$1.get(texture2);
            mapTextureMapping(cubeMap, texture2.mapping);
            this._cubeTexture = cubeMap;
          } else {
            const image = texture2.image;
            if (isEquirectangularMapReady$1(image)) {
              const renderTarget = new CubeRenderTarget(image.height);
              renderTarget.fromEquirectangularTexture(renderer, texture2);
              mapTextureMapping(renderTarget.texture, texture2.mapping);
              this._cubeTexture = renderTarget.texture;
              _cache$1.set(texture2, renderTarget.texture);
              texture2.addEventListener("dispose", onTextureDispose);
            } else {
              this._cubeTexture = this._defaultTexture;
            }
          }
          this._cubeTextureNode.value = this._cubeTexture;
        } else {
          this._cubeTextureNode = this.envNode;
        }
      }
    }
  }
  setup(builder) {
    this.updateBefore(builder);
    return this._cubeTextureNode;
  }
};
function isEquirectangularMapReady$1(image) {
  if (image === null || image === void 0) return false;
  return image.height > 0;
}
function onTextureDispose(event) {
  const texture2 = event.target;
  texture2.removeEventListener("dispose", onTextureDispose);
  const renderTarget = _cache$1.get(texture2);
  if (renderTarget !== void 0) {
    _cache$1.delete(texture2);
    renderTarget.dispose();
  }
}
function mapTextureMapping(texture2, mapping) {
  if (mapping === EquirectangularReflectionMapping) {
    texture2.mapping = CubeReflectionMapping;
  } else if (mapping === EquirectangularRefractionMapping) {
    texture2.mapping = CubeRefractionMapping;
  }
}
var cubeMapNode = nodeProxy(CubeMapNode);
var _defaultValues$9 = new MeshBasicMaterial();
var F_Schlick = Fn(({ f0, f90, dotVH }) => {
  const fresnel = dotVH.mul(-5.55473).sub(6.98316).mul(dotVH).exp2();
  return f0.mul(fresnel.oneMinus()).add(f90.mul(fresnel));
});
var BRDF_Lambert = Fn((inputs) => {
  return inputs.diffuseColor.mul(1 / Math.PI);
});
var G_BlinnPhong_Implicit = () => float(0.25);
var D_BlinnPhong = Fn(({ dotNH }) => {
  return shininess.mul(float(0.5)).add(1).mul(float(1 / Math.PI)).mul(dotNH.pow(shininess));
});
var BRDF_BlinnPhong = Fn(({ lightDirection }) => {
  const halfDir = lightDirection.add(positionViewDirection).normalize();
  const dotNH = transformedNormalView.dot(halfDir).clamp();
  const dotVH = positionViewDirection.dot(halfDir).clamp();
  const F = F_Schlick({ f0: specularColor, f90: 1, dotVH });
  const G = G_BlinnPhong_Implicit();
  const D = D_BlinnPhong({ dotNH });
  return F.mul(G).mul(D);
});
var _defaultValues$8 = new MeshLambertMaterial();
var _defaultValues$7 = new MeshPhongMaterial();
var getGeometryRoughness = Fn((builder) => {
  if (builder.geometry.hasAttribute("normal") === false) {
    return float(0);
  }
  const dxy = normalView.dFdx().abs().max(normalView.dFdy().abs());
  const geometryRoughness = dxy.x.max(dxy.y).max(dxy.z);
  return geometryRoughness;
});
var getRoughness = Fn((inputs) => {
  const { roughness: roughness2 } = inputs;
  const geometryRoughness = getGeometryRoughness();
  let roughnessFactor = roughness2.max(0.0525);
  roughnessFactor = roughnessFactor.add(geometryRoughness);
  roughnessFactor = roughnessFactor.min(1);
  return roughnessFactor;
});
var V_GGX_SmithCorrelated = Fn(({ alpha, dotNL, dotNV }) => {
  const a2 = alpha.pow2();
  const gv = dotNL.mul(a2.add(a2.oneMinus().mul(dotNV.pow2())).sqrt());
  const gl = dotNV.mul(a2.add(a2.oneMinus().mul(dotNL.pow2())).sqrt());
  return div(0.5, gv.add(gl).max(EPSILON));
}).setLayout({
  name: "V_GGX_SmithCorrelated",
  type: "float",
  inputs: [
    { name: "alpha", type: "float" },
    { name: "dotNL", type: "float" },
    { name: "dotNV", type: "float" }
  ]
});
var V_GGX_SmithCorrelated_Anisotropic = Fn(({ alphaT: alphaT2, alphaB, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL }) => {
  const gv = dotNL.mul(vec3(alphaT2.mul(dotTV), alphaB.mul(dotBV), dotNV).length());
  const gl = dotNV.mul(vec3(alphaT2.mul(dotTL), alphaB.mul(dotBL), dotNL).length());
  const v = div(0.5, gv.add(gl));
  return v.saturate();
}).setLayout({
  name: "V_GGX_SmithCorrelated_Anisotropic",
  type: "float",
  inputs: [
    { name: "alphaT", type: "float", qualifier: "in" },
    { name: "alphaB", type: "float", qualifier: "in" },
    { name: "dotTV", type: "float", qualifier: "in" },
    { name: "dotBV", type: "float", qualifier: "in" },
    { name: "dotTL", type: "float", qualifier: "in" },
    { name: "dotBL", type: "float", qualifier: "in" },
    { name: "dotNV", type: "float", qualifier: "in" },
    { name: "dotNL", type: "float", qualifier: "in" }
  ]
});
var D_GGX = Fn(({ alpha, dotNH }) => {
  const a2 = alpha.pow2();
  const denom = dotNH.pow2().mul(a2.oneMinus()).oneMinus();
  return a2.div(denom.pow2()).mul(1 / Math.PI);
}).setLayout({
  name: "D_GGX",
  type: "float",
  inputs: [
    { name: "alpha", type: "float" },
    { name: "dotNH", type: "float" }
  ]
});
var RECIPROCAL_PI = float(1 / Math.PI);
var D_GGX_Anisotropic = Fn(({ alphaT: alphaT2, alphaB, dotNH, dotTH, dotBH }) => {
  const a2 = alphaT2.mul(alphaB);
  const v = vec3(alphaB.mul(dotTH), alphaT2.mul(dotBH), a2.mul(dotNH));
  const v2 = v.dot(v);
  const w22 = a2.div(v2);
  return RECIPROCAL_PI.mul(a2.mul(w22.pow2()));
}).setLayout({
  name: "D_GGX_Anisotropic",
  type: "float",
  inputs: [
    { name: "alphaT", type: "float", qualifier: "in" },
    { name: "alphaB", type: "float", qualifier: "in" },
    { name: "dotNH", type: "float", qualifier: "in" },
    { name: "dotTH", type: "float", qualifier: "in" },
    { name: "dotBH", type: "float", qualifier: "in" }
  ]
});
var BRDF_GGX = Fn((inputs) => {
  const { lightDirection, f0, f90, roughness: roughness2, f, USE_IRIDESCENCE, USE_ANISOTROPY } = inputs;
  const normalView2 = inputs.normalView || transformedNormalView;
  const alpha = roughness2.pow2();
  const halfDir = lightDirection.add(positionViewDirection).normalize();
  const dotNL = normalView2.dot(lightDirection).clamp();
  const dotNV = normalView2.dot(positionViewDirection).clamp();
  const dotNH = normalView2.dot(halfDir).clamp();
  const dotVH = positionViewDirection.dot(halfDir).clamp();
  let F = F_Schlick({ f0, f90, dotVH });
  let V, D;
  if (defined(USE_IRIDESCENCE)) {
    F = iridescence.mix(F, f);
  }
  if (defined(USE_ANISOTROPY)) {
    const dotTL = anisotropyT.dot(lightDirection);
    const dotTV = anisotropyT.dot(positionViewDirection);
    const dotTH = anisotropyT.dot(halfDir);
    const dotBL = anisotropyB.dot(lightDirection);
    const dotBV = anisotropyB.dot(positionViewDirection);
    const dotBH = anisotropyB.dot(halfDir);
    V = V_GGX_SmithCorrelated_Anisotropic({ alphaT, alphaB: alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL });
    D = D_GGX_Anisotropic({ alphaT, alphaB: alpha, dotNH, dotTH, dotBH });
  } else {
    V = V_GGX_SmithCorrelated({ alpha, dotNL, dotNV });
    D = D_GGX({ alpha, dotNH });
  }
  return F.mul(V).mul(D);
});
var DFGApprox = Fn(({ roughness: roughness2, dotNV }) => {
  const c0 = vec4(-1, -0.0275, -0.572, 0.022);
  const c1 = vec4(1, 0.0425, 1.04, -0.04);
  const r = roughness2.mul(c0).add(c1);
  const a004 = r.x.mul(r.x).min(dotNV.mul(-9.28).exp2()).mul(r.x).add(r.y);
  const fab = vec2(-1.04, 1.04).mul(a004).add(r.zw);
  return fab;
}).setLayout({
  name: "DFGApprox",
  type: "vec2",
  inputs: [
    { name: "roughness", type: "float" },
    { name: "dotNV", type: "vec3" }
  ]
});
var EnvironmentBRDF = Fn((inputs) => {
  const { dotNV, specularColor: specularColor2, specularF90: specularF902, roughness: roughness2 } = inputs;
  const fab = DFGApprox({ dotNV, roughness: roughness2 });
  return specularColor2.mul(fab.x).add(specularF902.mul(fab.y));
});
var Schlick_to_F0 = Fn(({ f, f90, dotVH }) => {
  const x = dotVH.oneMinus().saturate();
  const x2 = x.mul(x);
  const x5 = x.mul(x2, x2).clamp(0, 0.9999);
  return f.sub(vec3(f90).mul(x5)).div(x5.oneMinus());
}).setLayout({
  name: "Schlick_to_F0",
  type: "vec3",
  inputs: [
    { name: "f", type: "vec3" },
    { name: "f90", type: "float" },
    { name: "dotVH", type: "float" }
  ]
});
var D_Charlie = Fn(({ roughness: roughness2, dotNH }) => {
  const alpha = roughness2.pow2();
  const invAlpha = float(1).div(alpha);
  const cos2h = dotNH.pow2();
  const sin2h = cos2h.oneMinus().max(78125e-7);
  return float(2).add(invAlpha).mul(sin2h.pow(invAlpha.mul(0.5))).div(2 * Math.PI);
}).setLayout({
  name: "D_Charlie",
  type: "float",
  inputs: [
    { name: "roughness", type: "float" },
    { name: "dotNH", type: "float" }
  ]
});
var V_Neubelt = Fn(({ dotNV, dotNL }) => {
  return float(1).div(float(4).mul(dotNL.add(dotNV).sub(dotNL.mul(dotNV))));
}).setLayout({
  name: "V_Neubelt",
  type: "float",
  inputs: [
    { name: "dotNV", type: "float" },
    { name: "dotNL", type: "float" }
  ]
});
var BRDF_Sheen = Fn(({ lightDirection }) => {
  const halfDir = lightDirection.add(positionViewDirection).normalize();
  const dotNL = transformedNormalView.dot(lightDirection).clamp();
  const dotNV = transformedNormalView.dot(positionViewDirection).clamp();
  const dotNH = transformedNormalView.dot(halfDir).clamp();
  const D = D_Charlie({ roughness: sheenRoughness, dotNH });
  const V = V_Neubelt({ dotNV, dotNL });
  return sheen.mul(D).mul(V);
});
var LTC_Uv = Fn(({ N, V, roughness: roughness2 }) => {
  const LUT_SIZE = 64;
  const LUT_SCALE = (LUT_SIZE - 1) / LUT_SIZE;
  const LUT_BIAS = 0.5 / LUT_SIZE;
  const dotNV = N.dot(V).saturate();
  const uv2 = vec2(roughness2, dotNV.oneMinus().sqrt());
  uv2.assign(uv2.mul(LUT_SCALE).add(LUT_BIAS));
  return uv2;
}).setLayout({
  name: "LTC_Uv",
  type: "vec2",
  inputs: [
    { name: "N", type: "vec3" },
    { name: "V", type: "vec3" },
    { name: "roughness", type: "float" }
  ]
});
var LTC_ClippedSphereFormFactor = Fn(({ f }) => {
  const l = f.length();
  return max$1(l.mul(l).add(f.z).div(l.add(1)), 0);
}).setLayout({
  name: "LTC_ClippedSphereFormFactor",
  type: "float",
  inputs: [
    { name: "f", type: "vec3" }
  ]
});
var LTC_EdgeVectorFormFactor = Fn(({ v1, v2 }) => {
  const x = v1.dot(v2);
  const y = x.abs().toVar();
  const a = y.mul(0.0145206).add(0.4965155).mul(y).add(0.8543985).toVar();
  const b = y.add(4.1616724).mul(y).add(3.417594).toVar();
  const v = a.div(b);
  const theta_sintheta = x.greaterThan(0).select(v, max$1(x.mul(x).oneMinus(), 1e-7).inverseSqrt().mul(0.5).sub(v));
  return v1.cross(v2).mul(theta_sintheta);
}).setLayout({
  name: "LTC_EdgeVectorFormFactor",
  type: "vec3",
  inputs: [
    { name: "v1", type: "vec3" },
    { name: "v2", type: "vec3" }
  ]
});
var LTC_Evaluate = Fn(({ N, V, P, mInv, p0, p1, p2, p3 }) => {
  const v1 = p1.sub(p0).toVar();
  const v2 = p3.sub(p0).toVar();
  const lightNormal = v1.cross(v2);
  const result = vec3().toVar();
  If(lightNormal.dot(P.sub(p0)).greaterThanEqual(0), () => {
    const T1 = V.sub(N.mul(V.dot(N))).normalize();
    const T2 = N.cross(T1).negate();
    const mat = mInv.mul(mat3(T1, T2, N).transpose()).toVar();
    const coords0 = mat.mul(p0.sub(P)).normalize().toVar();
    const coords1 = mat.mul(p1.sub(P)).normalize().toVar();
    const coords2 = mat.mul(p2.sub(P)).normalize().toVar();
    const coords3 = mat.mul(p3.sub(P)).normalize().toVar();
    const vectorFormFactor = vec3(0).toVar();
    vectorFormFactor.addAssign(LTC_EdgeVectorFormFactor({ v1: coords0, v2: coords1 }));
    vectorFormFactor.addAssign(LTC_EdgeVectorFormFactor({ v1: coords1, v2: coords2 }));
    vectorFormFactor.addAssign(LTC_EdgeVectorFormFactor({ v1: coords2, v2: coords3 }));
    vectorFormFactor.addAssign(LTC_EdgeVectorFormFactor({ v1: coords3, v2: coords0 }));
    result.assign(vec3(LTC_ClippedSphereFormFactor({ f: vectorFormFactor })));
  });
  return result;
}).setLayout({
  name: "LTC_Evaluate",
  type: "vec3",
  inputs: [
    { name: "N", type: "vec3" },
    { name: "V", type: "vec3" },
    { name: "P", type: "vec3" },
    { name: "mInv", type: "mat3" },
    { name: "p0", type: "vec3" },
    { name: "p1", type: "vec3" },
    { name: "p2", type: "vec3" },
    { name: "p3", type: "vec3" }
  ]
});
var bC = 1 / 6;
var w0 = (a) => mul(bC, mul(a, mul(a, a.negate().add(3)).sub(3)).add(1));
var w1 = (a) => mul(bC, mul(a, mul(a, mul(3, a).sub(6))).add(4));
var w2 = (a) => mul(bC, mul(a, mul(a, mul(-3, a).add(3)).add(3)).add(1));
var w3 = (a) => mul(bC, pow(a, 3));
var g0 = (a) => w0(a).add(w1(a));
var g1 = (a) => w2(a).add(w3(a));
var h0 = (a) => add(-1, w1(a).div(w0(a).add(w1(a))));
var h1 = (a) => add(1, w3(a).div(w2(a).add(w3(a))));
var bicubic = (textureNode, texelSize, lod) => {
  const uv2 = textureNode.uvNode;
  const uvScaled = mul(uv2, texelSize.zw).add(0.5);
  const iuv = floor(uvScaled);
  const fuv = fract(uvScaled);
  const g0x = g0(fuv.x);
  const g1x = g1(fuv.x);
  const h0x = h0(fuv.x);
  const h1x = h1(fuv.x);
  const h0y = h0(fuv.y);
  const h1y = h1(fuv.y);
  const p0 = vec2(iuv.x.add(h0x), iuv.y.add(h0y)).sub(0.5).mul(texelSize.xy);
  const p1 = vec2(iuv.x.add(h1x), iuv.y.add(h0y)).sub(0.5).mul(texelSize.xy);
  const p2 = vec2(iuv.x.add(h0x), iuv.y.add(h1y)).sub(0.5).mul(texelSize.xy);
  const p3 = vec2(iuv.x.add(h1x), iuv.y.add(h1y)).sub(0.5).mul(texelSize.xy);
  const a = g0(fuv.y).mul(add(g0x.mul(textureNode.uv(p0).level(lod)), g1x.mul(textureNode.uv(p1).level(lod))));
  const b = g1(fuv.y).mul(add(g0x.mul(textureNode.uv(p2).level(lod)), g1x.mul(textureNode.uv(p3).level(lod))));
  return a.add(b);
};
var textureBicubic = Fn(([textureNode, lodNode = float(3)]) => {
  const fLodSize = vec2(textureNode.size(int(lodNode)));
  const cLodSize = vec2(textureNode.size(int(lodNode.add(1))));
  const fLodSizeInv = div(1, fLodSize);
  const cLodSizeInv = div(1, cLodSize);
  const fSample = bicubic(textureNode, vec4(fLodSizeInv, fLodSize), floor(lodNode));
  const cSample = bicubic(textureNode, vec4(cLodSizeInv, cLodSize), ceil(lodNode));
  return fract(lodNode).mix(fSample, cSample);
});
var getVolumeTransmissionRay = Fn(([n, v, thickness2, ior2, modelMatrix]) => {
  const refractionVector = vec3(refract(v.negate(), normalize(n), div(1, ior2)));
  const modelScale2 = vec3(
    length(modelMatrix[0].xyz),
    length(modelMatrix[1].xyz),
    length(modelMatrix[2].xyz)
  );
  return normalize(refractionVector).mul(thickness2.mul(modelScale2));
}).setLayout({
  name: "getVolumeTransmissionRay",
  type: "vec3",
  inputs: [
    { name: "n", type: "vec3" },
    { name: "v", type: "vec3" },
    { name: "thickness", type: "float" },
    { name: "ior", type: "float" },
    { name: "modelMatrix", type: "mat4" }
  ]
});
var applyIorToRoughness = Fn(([roughness2, ior2]) => {
  return roughness2.mul(clamp(ior2.mul(2).sub(2), 0, 1));
}).setLayout({
  name: "applyIorToRoughness",
  type: "float",
  inputs: [
    { name: "roughness", type: "float" },
    { name: "ior", type: "float" }
  ]
});
var viewportBackSideTexture = viewportMipTexture();
var viewportFrontSideTexture = viewportMipTexture();
var getTransmissionSample = Fn(([fragCoord, roughness2, ior2], { material }) => {
  const vTexture = material.side == BackSide ? viewportBackSideTexture : viewportFrontSideTexture;
  const transmissionSample = vTexture.uv(fragCoord);
  const lod = log2(screenSize.x).mul(applyIorToRoughness(roughness2, ior2));
  return textureBicubic(transmissionSample, lod);
});
var volumeAttenuation = Fn(([transmissionDistance, attenuationColor2, attenuationDistance2]) => {
  If(attenuationDistance2.notEqual(0), () => {
    const attenuationCoefficient = log(attenuationColor2).negate().div(attenuationDistance2);
    const transmittance = exp(attenuationCoefficient.negate().mul(transmissionDistance));
    return transmittance;
  });
  return vec3(1);
}).setLayout({
  name: "volumeAttenuation",
  type: "vec3",
  inputs: [
    { name: "transmissionDistance", type: "float" },
    { name: "attenuationColor", type: "vec3" },
    { name: "attenuationDistance", type: "float" }
  ]
});
var getIBLVolumeRefraction = Fn(([n, v, roughness2, diffuseColor2, specularColor2, specularF902, position, modelMatrix, viewMatrix, projMatrix, ior2, thickness2, attenuationColor2, attenuationDistance2, dispersion2]) => {
  let transmittedLight, transmittance;
  if (dispersion2) {
    transmittedLight = vec4().toVar();
    transmittance = vec3().toVar();
    const halfSpread = ior2.sub(1).mul(dispersion2.mul(0.025));
    const iors = vec3(ior2.sub(halfSpread), ior2, ior2.add(halfSpread));
    Loop({ start: 0, end: 3 }, ({ i }) => {
      const ior3 = iors.element(i);
      const transmissionRay = getVolumeTransmissionRay(n, v, thickness2, ior3, modelMatrix);
      const refractedRayExit = position.add(transmissionRay);
      const ndcPos = projMatrix.mul(viewMatrix.mul(vec4(refractedRayExit, 1)));
      const refractionCoords = vec2(ndcPos.xy.div(ndcPos.w)).toVar();
      refractionCoords.addAssign(1);
      refractionCoords.divAssign(2);
      refractionCoords.assign(vec2(refractionCoords.x, refractionCoords.y.oneMinus()));
      const transmissionSample = getTransmissionSample(refractionCoords, roughness2, ior3);
      transmittedLight.element(i).assign(transmissionSample.element(i));
      transmittedLight.a.addAssign(transmissionSample.a);
      transmittance.element(i).assign(diffuseColor2.element(i).mul(volumeAttenuation(length(transmissionRay), attenuationColor2, attenuationDistance2).element(i)));
    });
    transmittedLight.a.divAssign(3);
  } else {
    const transmissionRay = getVolumeTransmissionRay(n, v, thickness2, ior2, modelMatrix);
    const refractedRayExit = position.add(transmissionRay);
    const ndcPos = projMatrix.mul(viewMatrix.mul(vec4(refractedRayExit, 1)));
    const refractionCoords = vec2(ndcPos.xy.div(ndcPos.w)).toVar();
    refractionCoords.addAssign(1);
    refractionCoords.divAssign(2);
    refractionCoords.assign(vec2(refractionCoords.x, refractionCoords.y.oneMinus()));
    transmittedLight = getTransmissionSample(refractionCoords, roughness2, ior2);
    transmittance = diffuseColor2.mul(volumeAttenuation(length(transmissionRay), attenuationColor2, attenuationDistance2));
  }
  const attenuatedColor = transmittance.rgb.mul(transmittedLight.rgb);
  const dotNV = n.dot(v).clamp();
  const F = vec3(EnvironmentBRDF({
    // n, v, specularColor, specularF90, roughness
    dotNV,
    specularColor: specularColor2,
    specularF90: specularF902,
    roughness: roughness2
  }));
  const transmittanceFactor = transmittance.r.add(transmittance.g, transmittance.b).div(3);
  return vec4(F.oneMinus().mul(attenuatedColor), transmittedLight.a.oneMinus().mul(transmittanceFactor).oneMinus());
});
var XYZ_TO_REC709 = mat3(
  3.2404542,
  -0.969266,
  0.0556434,
  -1.5371385,
  1.8760108,
  -0.2040259,
  -0.4985314,
  0.041556,
  1.0572252
);
var Fresnel0ToIor = (fresnel0) => {
  const sqrtF0 = fresnel0.sqrt();
  return vec3(1).add(sqrtF0).div(vec3(1).sub(sqrtF0));
};
var IorToFresnel0 = (transmittedIor, incidentIor) => {
  return transmittedIor.sub(incidentIor).div(transmittedIor.add(incidentIor)).pow2();
};
var evalSensitivity = (OPD, shift) => {
  const phase = OPD.mul(2 * Math.PI * 1e-9);
  const val = vec3(54856e-17, 44201e-17, 52481e-17);
  const pos = vec3(1681e3, 1795300, 2208400);
  const VAR = vec3(43278e5, 93046e5, 66121e5);
  const x = float(9747e-17 * Math.sqrt(2 * Math.PI * 45282e5)).mul(phase.mul(2239900).add(shift.x).cos()).mul(phase.pow2().mul(-45282e5).exp());
  let xyz = val.mul(VAR.mul(2 * Math.PI).sqrt()).mul(pos.mul(phase).add(shift).cos()).mul(phase.pow2().negate().mul(VAR).exp());
  xyz = vec3(xyz.x.add(x), xyz.y, xyz.z).div(10685e-11);
  const rgb = XYZ_TO_REC709.mul(xyz);
  return rgb;
};
var evalIridescence = Fn(({ outsideIOR, eta2, cosTheta1, thinFilmThickness, baseF0 }) => {
  const iridescenceIOR2 = mix(outsideIOR, eta2, smoothstep(0, 0.03, thinFilmThickness));
  const sinTheta2Sq = outsideIOR.div(iridescenceIOR2).pow2().mul(cosTheta1.pow2().oneMinus());
  const cosTheta2Sq = sinTheta2Sq.oneMinus();
  If(cosTheta2Sq.lessThan(0), () => {
    return vec3(1);
  });
  const cosTheta2 = cosTheta2Sq.sqrt();
  const R0 = IorToFresnel0(iridescenceIOR2, outsideIOR);
  const R12 = F_Schlick({ f0: R0, f90: 1, dotVH: cosTheta1 });
  const T121 = R12.oneMinus();
  const phi12 = iridescenceIOR2.lessThan(outsideIOR).select(Math.PI, 0);
  const phi21 = float(Math.PI).sub(phi12);
  const baseIOR = Fresnel0ToIor(baseF0.clamp(0, 0.9999));
  const R1 = IorToFresnel0(baseIOR, iridescenceIOR2.toVec3());
  const R23 = F_Schlick({ f0: R1, f90: 1, dotVH: cosTheta2 });
  const phi23 = vec3(
    baseIOR.x.lessThan(iridescenceIOR2).select(Math.PI, 0),
    baseIOR.y.lessThan(iridescenceIOR2).select(Math.PI, 0),
    baseIOR.z.lessThan(iridescenceIOR2).select(Math.PI, 0)
  );
  const OPD = iridescenceIOR2.mul(thinFilmThickness, cosTheta2, 2);
  const phi = vec3(phi21).add(phi23);
  const R123 = R12.mul(R23).clamp(1e-5, 0.9999);
  const r123 = R123.sqrt();
  const Rs = T121.pow2().mul(R23).div(vec3(1).sub(R123));
  const C0 = R12.add(Rs);
  const I = C0.toVar();
  const Cm = Rs.sub(T121).toVar();
  Loop({ start: 1, end: 2, condition: "<=", name: "m" }, ({ m }) => {
    Cm.mulAssign(r123);
    const Sm = evalSensitivity(float(m).mul(OPD), float(m).mul(phi)).mul(2);
    I.addAssign(Cm.mul(Sm));
  });
  return I.max(vec3(0));
}).setLayout({
  name: "evalIridescence",
  type: "vec3",
  inputs: [
    { name: "outsideIOR", type: "float" },
    { name: "eta2", type: "float" },
    { name: "cosTheta1", type: "float" },
    { name: "thinFilmThickness", type: "float" },
    { name: "baseF0", type: "vec3" }
  ]
});
var IBLSheenBRDF = Fn(({ normal: normal2, viewDir, roughness: roughness2 }) => {
  const dotNV = normal2.dot(viewDir).saturate();
  const r2 = roughness2.pow2();
  const a = select(
    roughness2.lessThan(0.25),
    float(-339.2).mul(r2).add(float(161.4).mul(roughness2)).sub(25.9),
    float(-8.48).mul(r2).add(float(14.3).mul(roughness2)).sub(9.95)
  );
  const b = select(
    roughness2.lessThan(0.25),
    float(44).mul(r2).sub(float(23.7).mul(roughness2)).add(3.26),
    float(1.97).mul(r2).sub(float(3.27).mul(roughness2)).add(0.72)
  );
  const DG = select(roughness2.lessThan(0.25), 0, float(0.1).mul(roughness2).sub(0.025)).add(a.mul(dotNV).add(b).exp());
  return DG.mul(1 / Math.PI).saturate();
});
var clearcoatF0 = vec3(0.04);
var clearcoatF90 = float(1);
var cubeUV_r0 = float(1);
var cubeUV_m0 = float(-2);
var cubeUV_r1 = float(0.8);
var cubeUV_m1 = float(-1);
var cubeUV_r4 = float(0.4);
var cubeUV_m4 = float(2);
var cubeUV_r5 = float(0.305);
var cubeUV_m5 = float(3);
var cubeUV_r6 = float(0.21);
var cubeUV_m6 = float(4);
var cubeUV_minMipLevel = float(4);
var cubeUV_minTileSize = float(16);
var getFace = Fn(([direction2]) => {
  const absDirection = vec3(abs(direction2)).toVar();
  const face = float(-1).toVar();
  If(absDirection.x.greaterThan(absDirection.z), () => {
    If(absDirection.x.greaterThan(absDirection.y), () => {
      face.assign(select(direction2.x.greaterThan(0), 0, 3));
    }).Else(() => {
      face.assign(select(direction2.y.greaterThan(0), 1, 4));
    });
  }).Else(() => {
    If(absDirection.z.greaterThan(absDirection.y), () => {
      face.assign(select(direction2.z.greaterThan(0), 2, 5));
    }).Else(() => {
      face.assign(select(direction2.y.greaterThan(0), 1, 4));
    });
  });
  return face;
}).setLayout({
  name: "getFace",
  type: "float",
  inputs: [
    { name: "direction", type: "vec3" }
  ]
});
var getUV = Fn(([direction2, face]) => {
  const uv2 = vec2().toVar();
  If(face.equal(0), () => {
    uv2.assign(vec2(direction2.z, direction2.y).div(abs(direction2.x)));
  }).ElseIf(face.equal(1), () => {
    uv2.assign(vec2(direction2.x.negate(), direction2.z.negate()).div(abs(direction2.y)));
  }).ElseIf(face.equal(2), () => {
    uv2.assign(vec2(direction2.x.negate(), direction2.y).div(abs(direction2.z)));
  }).ElseIf(face.equal(3), () => {
    uv2.assign(vec2(direction2.z.negate(), direction2.y).div(abs(direction2.x)));
  }).ElseIf(face.equal(4), () => {
    uv2.assign(vec2(direction2.x.negate(), direction2.z).div(abs(direction2.y)));
  }).Else(() => {
    uv2.assign(vec2(direction2.x, direction2.y).div(abs(direction2.z)));
  });
  return mul(0.5, uv2.add(1));
}).setLayout({
  name: "getUV",
  type: "vec2",
  inputs: [
    { name: "direction", type: "vec3" },
    { name: "face", type: "float" }
  ]
});
var roughnessToMip = Fn(([roughness2]) => {
  const mip = float(0).toVar();
  If(roughness2.greaterThanEqual(cubeUV_r1), () => {
    mip.assign(cubeUV_r0.sub(roughness2).mul(cubeUV_m1.sub(cubeUV_m0)).div(cubeUV_r0.sub(cubeUV_r1)).add(cubeUV_m0));
  }).ElseIf(roughness2.greaterThanEqual(cubeUV_r4), () => {
    mip.assign(cubeUV_r1.sub(roughness2).mul(cubeUV_m4.sub(cubeUV_m1)).div(cubeUV_r1.sub(cubeUV_r4)).add(cubeUV_m1));
  }).ElseIf(roughness2.greaterThanEqual(cubeUV_r5), () => {
    mip.assign(cubeUV_r4.sub(roughness2).mul(cubeUV_m5.sub(cubeUV_m4)).div(cubeUV_r4.sub(cubeUV_r5)).add(cubeUV_m4));
  }).ElseIf(roughness2.greaterThanEqual(cubeUV_r6), () => {
    mip.assign(cubeUV_r5.sub(roughness2).mul(cubeUV_m6.sub(cubeUV_m5)).div(cubeUV_r5.sub(cubeUV_r6)).add(cubeUV_m5));
  }).Else(() => {
    mip.assign(float(-2).mul(log2(mul(1.16, roughness2))));
  });
  return mip;
}).setLayout({
  name: "roughnessToMip",
  type: "float",
  inputs: [
    { name: "roughness", type: "float" }
  ]
});
var getDirection = Fn(([uv_immutable, face]) => {
  const uv2 = uv_immutable.toVar();
  uv2.assign(mul(2, uv2).sub(1));
  const direction2 = vec3(uv2, 1).toVar();
  If(face.equal(0), () => {
    direction2.assign(direction2.zyx);
  }).ElseIf(face.equal(1), () => {
    direction2.assign(direction2.xzy);
    direction2.xz.mulAssign(-1);
  }).ElseIf(face.equal(2), () => {
    direction2.x.mulAssign(-1);
  }).ElseIf(face.equal(3), () => {
    direction2.assign(direction2.zyx);
    direction2.xz.mulAssign(-1);
  }).ElseIf(face.equal(4), () => {
    direction2.assign(direction2.xzy);
    direction2.xy.mulAssign(-1);
  }).ElseIf(face.equal(5), () => {
    direction2.z.mulAssign(-1);
  });
  return direction2;
}).setLayout({
  name: "getDirection",
  type: "vec3",
  inputs: [
    { name: "uv", type: "vec2" },
    { name: "face", type: "float" }
  ]
});
var textureCubeUV = Fn(([envMap, sampleDir_immutable, roughness_immutable, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP]) => {
  const roughness2 = float(roughness_immutable);
  const sampleDir = vec3(sampleDir_immutable);
  const mip = clamp(roughnessToMip(roughness2), cubeUV_m0, CUBEUV_MAX_MIP);
  const mipF = fract(mip);
  const mipInt = floor(mip);
  const color0 = vec3(bilinearCubeUV(envMap, sampleDir, mipInt, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP)).toVar();
  If(mipF.notEqual(0), () => {
    const color1 = vec3(bilinearCubeUV(envMap, sampleDir, mipInt.add(1), CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP)).toVar();
    color0.assign(mix(color0, color1, mipF));
  });
  return color0;
});
var bilinearCubeUV = Fn(([envMap, direction_immutable, mipInt_immutable, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP]) => {
  const mipInt = float(mipInt_immutable).toVar();
  const direction2 = vec3(direction_immutable);
  const face = float(getFace(direction2)).toVar();
  const filterInt = float(max$1(cubeUV_minMipLevel.sub(mipInt), 0)).toVar();
  mipInt.assign(max$1(mipInt, cubeUV_minMipLevel));
  const faceSize = float(exp2(mipInt)).toVar();
  const uv2 = vec2(getUV(direction2, face).mul(faceSize.sub(2)).add(1)).toVar();
  If(face.greaterThan(2), () => {
    uv2.y.addAssign(faceSize);
    face.subAssign(3);
  });
  uv2.x.addAssign(face.mul(faceSize));
  uv2.x.addAssign(filterInt.mul(mul(3, cubeUV_minTileSize)));
  uv2.y.addAssign(mul(4, exp2(CUBEUV_MAX_MIP).sub(faceSize)));
  uv2.x.mulAssign(CUBEUV_TEXEL_WIDTH);
  uv2.y.mulAssign(CUBEUV_TEXEL_HEIGHT);
  return envMap.uv(uv2).grad(vec2(), vec2());
});
var getSample = Fn(({ envMap, mipInt, outputDirection: outputDirection2, theta, axis, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP }) => {
  const cosTheta = cos(theta);
  const sampleDirection = outputDirection2.mul(cosTheta).add(axis.cross(outputDirection2).mul(sin(theta))).add(axis.mul(axis.dot(outputDirection2).mul(cosTheta.oneMinus())));
  return bilinearCubeUV(envMap, sampleDirection, mipInt, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP);
});
var blur = Fn(({ n, latitudinal, poleAxis, outputDirection: outputDirection2, weights, samples, dTheta, mipInt, envMap, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP }) => {
  const axis = vec3(select(latitudinal, poleAxis, cross(poleAxis, outputDirection2))).toVar();
  If(all(axis.equals(vec3(0))), () => {
    axis.assign(vec3(outputDirection2.z, 0, outputDirection2.x.negate()));
  });
  axis.assign(normalize(axis));
  const gl_FragColor = vec3().toVar();
  gl_FragColor.addAssign(weights.element(int(0)).mul(getSample({ theta: 0, axis, outputDirection: outputDirection2, mipInt, envMap, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP })));
  Loop({ start: int(1), end: n }, ({ i }) => {
    If(i.greaterThanEqual(samples), () => {
      Break();
    });
    const theta = float(dTheta.mul(float(i))).toVar();
    gl_FragColor.addAssign(weights.element(i).mul(getSample({ theta: theta.mul(-1), axis, outputDirection: outputDirection2, mipInt, envMap, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP })));
    gl_FragColor.addAssign(weights.element(i).mul(getSample({ theta, axis, outputDirection: outputDirection2, mipInt, envMap, CUBEUV_TEXEL_WIDTH, CUBEUV_TEXEL_HEIGHT, CUBEUV_MAX_MIP })));
  });
  return vec4(gl_FragColor, 1);
});
var _generator = null;
var _cache = /* @__PURE__ */ new WeakMap();
function _generateCubeUVSize(imageHeight) {
  const maxMip = Math.log2(imageHeight) - 2;
  const texelHeight = 1 / imageHeight;
  const texelWidth = 1 / (3 * Math.max(Math.pow(2, maxMip), 7 * 16));
  return { texelWidth, texelHeight, maxMip };
}
function _getPMREMFromTexture(texture2) {
  let cacheTexture = _cache.get(texture2);
  const pmremVersion = cacheTexture !== void 0 ? cacheTexture.pmremVersion : -1;
  if (pmremVersion !== texture2.pmremVersion) {
    const image = texture2.image;
    if (texture2.isCubeTexture) {
      if (isCubeMapReady(image)) {
        cacheTexture = _generator.fromCubemap(texture2, cacheTexture);
      } else {
        return null;
      }
    } else {
      if (isEquirectangularMapReady(image)) {
        cacheTexture = _generator.fromEquirectangular(texture2, cacheTexture);
      } else {
        return null;
      }
    }
    cacheTexture.pmremVersion = texture2.pmremVersion;
    _cache.set(texture2, cacheTexture);
  }
  return cacheTexture.texture;
}
var PMREMNode = class extends TempNode {
  static get type() {
    return "PMREMNode";
  }
  constructor(value, uvNode = null, levelNode = null) {
    super("vec3");
    this._value = value;
    this._pmrem = null;
    this.uvNode = uvNode;
    this.levelNode = levelNode;
    this._generator = null;
    const defaultTexture = new Texture();
    defaultTexture.isRenderTargetTexture = true;
    this._texture = texture(defaultTexture);
    this._width = uniform(0);
    this._height = uniform(0);
    this._maxMip = uniform(0);
    this.updateBeforeType = NodeUpdateType.RENDER;
  }
  set value(value) {
    this._value = value;
    this._pmrem = null;
  }
  get value() {
    return this._value;
  }
  updateFromTexture(texture2) {
    const cubeUVSize = _generateCubeUVSize(texture2.image.height);
    this._texture.value = texture2;
    this._width.value = cubeUVSize.texelWidth;
    this._height.value = cubeUVSize.texelHeight;
    this._maxMip.value = cubeUVSize.maxMip;
  }
  updateBefore() {
    let pmrem = this._pmrem;
    const pmremVersion = pmrem ? pmrem.pmremVersion : -1;
    const texture2 = this._value;
    if (pmremVersion !== texture2.pmremVersion) {
      if (texture2.isPMREMTexture === true) {
        pmrem = texture2;
      } else {
        pmrem = _getPMREMFromTexture(texture2);
      }
      if (pmrem !== null) {
        this._pmrem = pmrem;
        this.updateFromTexture(pmrem);
      }
    }
  }
  setup(builder) {
    if (_generator === null) {
      _generator = builder.createPMREMGenerator();
    }
    this.updateBefore(builder);
    let uvNode = this.uvNode;
    if (uvNode === null && builder.context.getUV) {
      uvNode = builder.context.getUV(this);
    }
    const texture2 = this.value;
    if (builder.renderer.coordinateSystem === WebGLCoordinateSystem && texture2.isPMREMTexture !== true && texture2.isRenderTargetTexture === true) {
      uvNode = vec3(uvNode.x.negate(), uvNode.yz);
    }
    let levelNode = this.levelNode;
    if (levelNode === null && builder.context.getTextureLevel) {
      levelNode = builder.context.getTextureLevel(this);
    }
    return textureCubeUV(this._texture, uvNode, levelNode, this._width, this._height, this._maxMip);
  }
};
function isCubeMapReady(image) {
  if (image === null || image === void 0) return false;
  let count = 0;
  const length2 = 6;
  for (let i = 0; i < length2; i++) {
    if (image[i] !== void 0) count++;
  }
  return count === length2;
}
function isEquirectangularMapReady(image) {
  if (image === null || image === void 0) return false;
  return image.height > 0;
}
var pmremTexture = nodeProxy(PMREMNode);
var _defaultValues$6 = new MeshStandardMaterial();
var _defaultValues$5 = new MeshPhysicalMaterial();
var getGradientIrradiance = Fn(({ normal: normal2, lightDirection, builder }) => {
  const dotNL = normal2.dot(lightDirection);
  const coord = vec2(dotNL.mul(0.5).add(0.5), 0);
  if (builder.material.gradientMap) {
    const gradientMap = materialReference("gradientMap", "texture").context({ getUV: () => coord });
    return vec3(gradientMap.r);
  } else {
    const fw = coord.fwidth().mul(0.5);
    return mix(vec3(0.7), vec3(1), smoothstep(float(0.7).sub(fw.x), float(0.7).add(fw.x), coord.x));
  }
});
var _defaultValues$4 = new MeshToonMaterial();
var MatcapUVNode = class extends TempNode {
  static get type() {
    return "MatcapUVNode";
  }
  constructor() {
    super("vec2");
  }
  setup() {
    const x = vec3(positionViewDirection.z, 0, positionViewDirection.x.negate()).normalize();
    const y = positionViewDirection.cross(x);
    return vec2(x.dot(transformedNormalView), y.dot(transformedNormalView)).mul(0.495).add(0.5);
  }
};
var matcapUV = nodeImmutable(MatcapUVNode);
var _defaultValues$3 = new MeshMatcapMaterial();
var _defaultValues$2 = new PointsMaterial();
var RotateNode = class extends TempNode {
  static get type() {
    return "RotateNode";
  }
  constructor(positionNode, rotationNode) {
    super();
    this.positionNode = positionNode;
    this.rotationNode = rotationNode;
  }
  getNodeType(builder) {
    return this.positionNode.getNodeType(builder);
  }
  setup(builder) {
    const { rotationNode, positionNode } = this;
    const nodeType = this.getNodeType(builder);
    if (nodeType === "vec2") {
      const cosAngle = rotationNode.cos();
      const sinAngle = rotationNode.sin();
      const rotationMatrix = mat2(
        cosAngle,
        sinAngle,
        sinAngle.negate(),
        cosAngle
      );
      return rotationMatrix.mul(positionNode);
    } else {
      const rotation = rotationNode;
      const rotationXMatrix = mat4(vec4(1, 0, 0, 0), vec4(0, cos(rotation.x), sin(rotation.x).negate(), 0), vec4(0, sin(rotation.x), cos(rotation.x), 0), vec4(0, 0, 0, 1));
      const rotationYMatrix = mat4(vec4(cos(rotation.y), 0, sin(rotation.y), 0), vec4(0, 1, 0, 0), vec4(sin(rotation.y).negate(), 0, cos(rotation.y), 0), vec4(0, 0, 0, 1));
      const rotationZMatrix = mat4(vec4(cos(rotation.z), sin(rotation.z).negate(), 0, 0), vec4(sin(rotation.z), cos(rotation.z), 0, 0), vec4(0, 0, 1, 0), vec4(0, 0, 0, 1));
      return rotationXMatrix.mul(rotationYMatrix).mul(rotationZMatrix).mul(vec4(positionNode, 1)).xyz;
    }
  }
};
var rotate = nodeProxy(RotateNode);
var _defaultValues$1 = new SpriteMaterial();
var _defaultValues = new ShadowMaterial();
var normal = Fn(({ texture: texture2, uv: uv2 }) => {
  const epsilon = 1e-4;
  const ret = vec3().toVar();
  If(uv2.x.lessThan(epsilon), () => {
    ret.assign(vec3(1, 0, 0));
  }).ElseIf(uv2.y.lessThan(epsilon), () => {
    ret.assign(vec3(0, 1, 0));
  }).ElseIf(uv2.z.lessThan(epsilon), () => {
    ret.assign(vec3(0, 0, 1));
  }).ElseIf(uv2.x.greaterThan(1 - epsilon), () => {
    ret.assign(vec3(-1, 0, 0));
  }).ElseIf(uv2.y.greaterThan(1 - epsilon), () => {
    ret.assign(vec3(0, -1, 0));
  }).ElseIf(uv2.z.greaterThan(1 - epsilon), () => {
    ret.assign(vec3(0, 0, -1));
  }).Else(() => {
    const step2 = 0.01;
    const x = texture2.uv(uv2.add(vec3(-step2, 0, 0))).r.sub(texture2.uv(uv2.add(vec3(step2, 0, 0))).r);
    const y = texture2.uv(uv2.add(vec3(0, -step2, 0))).r.sub(texture2.uv(uv2.add(vec3(0, step2, 0))).r);
    const z = texture2.uv(uv2.add(vec3(0, 0, -step2))).r.sub(texture2.uv(uv2.add(vec3(0, 0, step2))).r);
    ret.assign(vec3(x, y, z));
  });
  return ret.normalize();
});
var Texture3DNode = class extends TextureNode {
  static get type() {
    return "Texture3DNode";
  }
  constructor(value, uvNode = null, levelNode = null) {
    super(value, uvNode, levelNode);
    this.isTexture3DNode = true;
  }
  getInputType() {
    return "texture3D";
  }
  getDefaultUV() {
    return vec3(0.5, 0.5, 0.5);
  }
  setUpdateMatrix() {
  }
  // Ignore .updateMatrix for 3d TextureNode
  setupUV(builder, uvNode) {
    return uvNode;
  }
  generateUV(builder, uvNode) {
    return uvNode.build(builder, "vec3");
  }
  normal(uvNode) {
    return normal({ texture: this, uv: uvNode });
  }
};
var texture3D = nodeProxy(Texture3DNode);
var _plane = new Plane();
var _size$3 = new Vector32();
var Color4 = class extends Color2 {
  constructor(r, g, b, a = 1) {
    super(r, g, b);
    this.a = a;
  }
  set(r, g, b, a = 1) {
    this.a = a;
    return super.set(r, g, b);
  }
  copy(color2) {
    if (color2.a !== void 0) this.a = color2.a;
    return super.copy(color2);
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b, this.a);
  }
};
var StackNode = class extends Node {
  static get type() {
    return "StackNode";
  }
  constructor(parent = null) {
    super();
    this.nodes = [];
    this.outputNode = null;
    this.parent = parent;
    this._currentCond = null;
    this.isStackNode = true;
  }
  getNodeType(builder) {
    return this.outputNode ? this.outputNode.getNodeType(builder) : "void";
  }
  add(node) {
    this.nodes.push(node);
    return this;
  }
  If(boolNode, method) {
    const methodNode = new ShaderNode(method);
    this._currentCond = select(boolNode, methodNode);
    return this.add(this._currentCond);
  }
  ElseIf(boolNode, method) {
    const methodNode = new ShaderNode(method);
    const ifNode = select(boolNode, methodNode);
    this._currentCond.elseNode = ifNode;
    this._currentCond = ifNode;
    return this;
  }
  Else(method) {
    this._currentCond.elseNode = new ShaderNode(method);
    return this;
  }
  build(builder, ...params) {
    const previousStack = getCurrentStack();
    setCurrentStack(this);
    for (const node of this.nodes) {
      node.build(builder, "void");
    }
    setCurrentStack(previousStack);
    return this.outputNode ? this.outputNode.build(builder, ...params) : super.build(builder, ...params);
  }
  //
  else(...params) {
    console.warn("TSL.StackNode: .else() has been renamed to .Else().");
    return this.Else(...params);
  }
  elseif(...params) {
    console.warn("TSL.StackNode: .elseif() has been renamed to .ElseIf().");
    return this.ElseIf(...params);
  }
};
var stack = nodeProxy(StackNode);
var StructTypeNode = class extends Node {
  static get type() {
    return "StructTypeNode";
  }
  constructor(types) {
    super();
    this.types = types;
    this.isStructTypeNode = true;
  }
  getMemberTypes() {
    return this.types;
  }
};
var OutputStructNode = class extends Node {
  static get type() {
    return "OutputStructNode";
  }
  constructor(...members) {
    super();
    this.members = members;
    this.isOutputStructNode = true;
  }
  setup(builder) {
    super.setup(builder);
    const members = this.members;
    const types = [];
    for (let i = 0; i < members.length; i++) {
      types.push(members[i].getNodeType(builder));
    }
    this.nodeType = builder.getStructTypeFromNode(new StructTypeNode(types)).name;
  }
  generate(builder, output2) {
    const propertyName = builder.getOutputStructName();
    const members = this.members;
    const structPrefix = propertyName !== "" ? propertyName + "." : "";
    for (let i = 0; i < members.length; i++) {
      const snippet = members[i].build(builder, output2);
      builder.addLineFlowCode(`${structPrefix}m${i} = ${snippet}`, this);
    }
    return propertyName;
  }
};
var outputStruct = nodeProxy(OutputStructNode);
function getTextureIndex(textures, name) {
  for (let i = 0; i < textures.length; i++) {
    if (textures[i].name === name) {
      return i;
    }
  }
  return -1;
}
var MRTNode = class extends OutputStructNode {
  static get type() {
    return "MRTNode";
  }
  constructor(outputNodes) {
    super();
    this.outputNodes = outputNodes;
    this.isMRTNode = true;
  }
  has(name) {
    return this.outputNodes[name] !== void 0;
  }
  get(name) {
    return this.outputNodes[name];
  }
  merge(mrtNode) {
    const outputs = { ...this.outputNodes, ...mrtNode.outputNodes };
    return mrt(outputs);
  }
  setup(builder) {
    const outputNodes = this.outputNodes;
    const mrt2 = builder.renderer.getRenderTarget();
    const members = [];
    const textures = mrt2.textures;
    for (const name in outputNodes) {
      const index = getTextureIndex(textures, name);
      members[index] = vec4(outputNodes[name]);
    }
    this.members = members;
    return super.setup(builder);
  }
};
var mrt = nodeProxy(MRTNode);
var hash = Fn(([seed]) => {
  const state = seed.toUint().mul(747796405).add(2891336453);
  const word = state.shiftRight(state.shiftRight(28).add(4)).bitXor(state).mul(277803737);
  const result = word.shiftRight(22).bitXor(word);
  return result.toFloat().mul(1 / 2 ** 32);
});
var tri = Fn(([x]) => {
  return x.fract().sub(0.5).abs();
}).setLayout({
  name: "tri",
  type: "float",
  inputs: [
    { name: "x", type: "float" }
  ]
});
var tri3 = Fn(([p]) => {
  return vec3(tri(p.z.add(tri(p.y.mul(1)))), tri(p.z.add(tri(p.x.mul(1)))), tri(p.y.add(tri(p.x.mul(1)))));
}).setLayout({
  name: "tri3",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec3" }
  ]
});
var triNoise3D = Fn(([p_immutable, spd, time2]) => {
  const p = vec3(p_immutable).toVar();
  const z = float(1.4).toVar();
  const rz = float(0).toVar();
  const bp = vec3(p).toVar();
  Loop({ start: float(0), end: float(3), type: "float", condition: "<=" }, () => {
    const dg = vec3(tri3(bp.mul(2))).toVar();
    p.addAssign(dg.add(time2.mul(float(0.1).mul(spd))));
    bp.mulAssign(1.8);
    z.mulAssign(1.5);
    p.mulAssign(1.2);
    const t = float(tri(p.z.add(tri(p.x.add(tri(p.y)))))).toVar();
    rz.addAssign(t.div(z));
    bp.addAssign(0.14);
  });
  return rz;
}).setLayout({
  name: "triNoise3D",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "spd", type: "float" },
    { name: "time", type: "float" }
  ]
});
var FunctionOverloadingNode = class extends Node {
  static get type() {
    return "FunctionOverloadingNode";
  }
  constructor(functionNodes = [], ...parametersNodes) {
    super();
    this.functionNodes = functionNodes;
    this.parametersNodes = parametersNodes;
    this._candidateFnCall = null;
    this.global = true;
  }
  getNodeType() {
    return this.functionNodes[0].shaderNode.layout.type;
  }
  setup(builder) {
    const params = this.parametersNodes;
    let candidateFnCall = this._candidateFnCall;
    if (candidateFnCall === null) {
      let candidateFn = null;
      let candidateScore = -1;
      for (const functionNode of this.functionNodes) {
        const shaderNode = functionNode.shaderNode;
        const layout = shaderNode.layout;
        if (layout === null) {
          throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");
        }
        const inputs = layout.inputs;
        if (params.length === inputs.length) {
          let score = 0;
          for (let i = 0; i < params.length; i++) {
            const param = params[i];
            const input = inputs[i];
            if (param.getNodeType(builder) === input.type) {
              score++;
            } else {
              score = 0;
            }
          }
          if (score > candidateScore) {
            candidateFn = functionNode;
            candidateScore = score;
          }
        }
      }
      this._candidateFnCall = candidateFnCall = candidateFn(...params);
    }
    return candidateFnCall;
  }
};
var overloadingBaseFn = nodeProxy(FunctionOverloadingNode);
var overloadingFn = (functionNodes) => (...params) => overloadingBaseFn(functionNodes, ...params);
var time = uniform(0).setGroup(renderGroup).onRenderUpdate((frame) => frame.time);
var deltaTime = uniform(0).setGroup(renderGroup).onRenderUpdate((frame) => frame.deltaTime);
var frameId = uniform(0, "uint").setGroup(renderGroup).onRenderUpdate((frame) => frame.frameId);
var rotateUV = Fn(([uv2, rotation, center = vec2(0.5)]) => {
  return rotate(uv2.sub(center), rotation).add(center);
});
var spherizeUV = Fn(([uv2, strength, center = vec2(0.5)]) => {
  const delta = uv2.sub(center);
  const delta2 = delta.dot(delta);
  const delta4 = delta2.mul(delta2);
  const deltaOffset = delta4.mul(strength);
  return uv2.add(delta.mul(deltaOffset));
});
var billboarding = Fn(({ position = null, horizontal = true, vertical = false }) => {
  let worldMatrix;
  if (position !== null) {
    worldMatrix = modelWorldMatrix.toVar();
    worldMatrix[3][0] = position.x;
    worldMatrix[3][1] = position.y;
    worldMatrix[3][2] = position.z;
  } else {
    worldMatrix = modelWorldMatrix;
  }
  const modelViewMatrix2 = cameraViewMatrix.mul(worldMatrix);
  if (defined(horizontal)) {
    modelViewMatrix2[0][0] = modelWorldMatrix[0].length();
    modelViewMatrix2[0][1] = 0;
    modelViewMatrix2[0][2] = 0;
  }
  if (defined(vertical)) {
    modelViewMatrix2[1][0] = 0;
    modelViewMatrix2[1][1] = modelWorldMatrix[1].length();
    modelViewMatrix2[1][2] = 0;
  }
  modelViewMatrix2[2][0] = 0;
  modelViewMatrix2[2][1] = 0;
  modelViewMatrix2[2][2] = 1;
  return cameraProjectionMatrix.mul(modelViewMatrix2).mul(positionLocal);
});
var viewportSafeUV = Fn(([uv2 = null]) => {
  const depth2 = linearDepth();
  const depthDiff = linearDepth(viewportDepthTexture(uv2)).sub(depth2);
  const finalUV = depthDiff.lessThan(0).select(screenUV, uv2);
  return finalUV;
});
var SpriteSheetUVNode = class extends Node {
  static get type() {
    return "SpriteSheetUVNode";
  }
  constructor(countNode, uvNode = uv(), frameNode = float(0)) {
    super("vec2");
    this.countNode = countNode;
    this.uvNode = uvNode;
    this.frameNode = frameNode;
  }
  setup() {
    const { frameNode, uvNode, countNode } = this;
    const { width, height } = countNode;
    const frameNum = frameNode.mod(width.mul(height)).floor();
    const column = frameNum.mod(width);
    const row = height.sub(frameNum.add(1).div(width).ceil());
    const scale = countNode.reciprocal();
    const uvFrameOffset = vec2(column, row);
    return uvNode.add(uvFrameOffset).mul(scale);
  }
};
var spritesheetUV = nodeProxy(SpriteSheetUVNode);
var TriplanarTexturesNode = class extends Node {
  static get type() {
    return "TriplanarTexturesNode";
  }
  constructor(textureXNode, textureYNode = null, textureZNode = null, scaleNode = float(1), positionNode = positionLocal, normalNode = normalLocal) {
    super("vec4");
    this.textureXNode = textureXNode;
    this.textureYNode = textureYNode;
    this.textureZNode = textureZNode;
    this.scaleNode = scaleNode;
    this.positionNode = positionNode;
    this.normalNode = normalNode;
  }
  setup() {
    const { textureXNode, textureYNode, textureZNode, scaleNode, positionNode, normalNode } = this;
    let bf = normalNode.abs().normalize();
    bf = bf.div(bf.dot(vec3(1)));
    const tx = positionNode.yz.mul(scaleNode);
    const ty = positionNode.zx.mul(scaleNode);
    const tz = positionNode.xy.mul(scaleNode);
    const textureX = textureXNode.value;
    const textureY = textureYNode !== null ? textureYNode.value : textureX;
    const textureZ = textureZNode !== null ? textureZNode.value : textureX;
    const cx = texture(textureX, tx).mul(bf.x);
    const cy = texture(textureY, ty).mul(bf.y);
    const cz = texture(textureZ, tz).mul(bf.z);
    return add(cx, cy, cz);
  }
};
var triplanarTextures = nodeProxy(TriplanarTexturesNode);
var _reflectorPlane = new Plane();
var _normal = new Vector32();
var _reflectorWorldPosition = new Vector32();
var _cameraWorldPosition = new Vector32();
var _rotationMatrix = new Matrix4();
var _lookAtPosition = new Vector32(0, 0, -1);
var clipPlane = new Vector4();
var _view = new Vector32();
var _target = new Vector32();
var _q = new Vector4();
var _size$2 = new Vector22();
var _defaultRT = new RenderTarget();
var _defaultUV = screenUV.flipX();
_defaultRT.depthTexture = new DepthTexture(1, 1);
var _inReflector = false;
var ReflectorNode = class _ReflectorNode extends TextureNode {
  static get type() {
    return "ReflectorNode";
  }
  constructor(parameters = {}) {
    super(parameters.defaultTexture || _defaultRT.texture, _defaultUV);
    this._reflectorBaseNode = parameters.reflector || new ReflectorBaseNode(this, parameters);
    this._depthNode = null;
    this.setUpdateMatrix(false);
  }
  get reflector() {
    return this._reflectorBaseNode;
  }
  get target() {
    return this._reflectorBaseNode.target;
  }
  getDepthNode() {
    if (this._depthNode === null) {
      if (this._reflectorBaseNode.depth !== true) {
        throw new Error("THREE.ReflectorNode: Depth node can only be requested when the reflector is created with { depth: true }. ");
      }
      this._depthNode = nodeObject(new _ReflectorNode({
        defaultTexture: _defaultRT.depthTexture,
        reflector: this._reflectorBaseNode
      }));
    }
    return this._depthNode;
  }
  setup(builder) {
    if (!builder.object.isQuadMesh) this._reflectorBaseNode.build(builder);
    return super.setup(builder);
  }
  clone() {
    const texture2 = new this.constructor(this.reflectorNode);
    texture2._reflectorBaseNode = this._reflectorBaseNode;
    return texture2;
  }
};
var ReflectorBaseNode = class extends Node {
  static get type() {
    return "ReflectorBaseNode";
  }
  constructor(textureNode, parameters = {}) {
    super();
    const {
      target = new Object3D(),
      resolution = 1,
      generateMipmaps = false,
      bounces = true,
      depth: depth2 = false
    } = parameters;
    this.textureNode = textureNode;
    this.target = target;
    this.resolution = resolution;
    this.generateMipmaps = generateMipmaps;
    this.bounces = bounces;
    this.depth = depth2;
    this.updateBeforeType = bounces ? NodeUpdateType.RENDER : NodeUpdateType.FRAME;
    this.virtualCameras = /* @__PURE__ */ new WeakMap();
    this.renderTargets = /* @__PURE__ */ new WeakMap();
  }
  _updateResolution(renderTarget, renderer) {
    const resolution = this.resolution;
    renderer.getDrawingBufferSize(_size$2);
    renderTarget.setSize(Math.round(_size$2.width * resolution), Math.round(_size$2.height * resolution));
  }
  setup(builder) {
    this._updateResolution(_defaultRT, builder.renderer);
    return super.setup(builder);
  }
  getVirtualCamera(camera) {
    let virtualCamera = this.virtualCameras.get(camera);
    if (virtualCamera === void 0) {
      virtualCamera = camera.clone();
      this.virtualCameras.set(camera, virtualCamera);
    }
    return virtualCamera;
  }
  getRenderTarget(camera) {
    let renderTarget = this.renderTargets.get(camera);
    if (renderTarget === void 0) {
      renderTarget = new RenderTarget(0, 0, { type: HalfFloatType });
      if (this.generateMipmaps === true) {
        renderTarget.texture.minFilter = LinearMipMapLinearFilter;
        renderTarget.texture.generateMipmaps = true;
      }
      if (this.depth === true) {
        renderTarget.depthTexture = new DepthTexture();
      }
      this.renderTargets.set(camera, renderTarget);
    }
    return renderTarget;
  }
  updateBefore(frame) {
    if (this.bounces === false && _inReflector) return;
    _inReflector = true;
    const { scene, camera, renderer, material } = frame;
    const { target } = this;
    const virtualCamera = this.getVirtualCamera(camera);
    const renderTarget = this.getRenderTarget(virtualCamera);
    renderer.getDrawingBufferSize(_size$2);
    this._updateResolution(renderTarget, renderer);
    _reflectorWorldPosition.setFromMatrixPosition(target.matrixWorld);
    _cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
    _rotationMatrix.extractRotation(target.matrixWorld);
    _normal.set(0, 0, 1);
    _normal.applyMatrix4(_rotationMatrix);
    _view.subVectors(_reflectorWorldPosition, _cameraWorldPosition);
    if (_view.dot(_normal) > 0) return;
    _view.reflect(_normal).negate();
    _view.add(_reflectorWorldPosition);
    _rotationMatrix.extractRotation(camera.matrixWorld);
    _lookAtPosition.set(0, 0, -1);
    _lookAtPosition.applyMatrix4(_rotationMatrix);
    _lookAtPosition.add(_cameraWorldPosition);
    _target.subVectors(_reflectorWorldPosition, _lookAtPosition);
    _target.reflect(_normal).negate();
    _target.add(_reflectorWorldPosition);
    virtualCamera.coordinateSystem = camera.coordinateSystem;
    virtualCamera.position.copy(_view);
    virtualCamera.up.set(0, 1, 0);
    virtualCamera.up.applyMatrix4(_rotationMatrix);
    virtualCamera.up.reflect(_normal);
    virtualCamera.lookAt(_target);
    virtualCamera.near = camera.near;
    virtualCamera.far = camera.far;
    virtualCamera.updateMatrixWorld();
    virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
    _reflectorPlane.setFromNormalAndCoplanarPoint(_normal, _reflectorWorldPosition);
    _reflectorPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
    clipPlane.set(_reflectorPlane.normal.x, _reflectorPlane.normal.y, _reflectorPlane.normal.z, _reflectorPlane.constant);
    const projectionMatrix = virtualCamera.projectionMatrix;
    _q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
    _q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
    _q.z = -1;
    _q.w = (1 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
    clipPlane.multiplyScalar(1 / clipPlane.dot(_q));
    const clipBias = 0;
    projectionMatrix.elements[2] = clipPlane.x;
    projectionMatrix.elements[6] = clipPlane.y;
    projectionMatrix.elements[10] = renderer.coordinateSystem === WebGPUCoordinateSystem ? clipPlane.z - clipBias : clipPlane.z + 1 - clipBias;
    projectionMatrix.elements[14] = clipPlane.w;
    this.textureNode.value = renderTarget.texture;
    if (this.depth === true) {
      this.textureNode.getDepthNode().value = renderTarget.depthTexture;
    }
    material.visible = false;
    const currentRenderTarget = renderer.getRenderTarget();
    const currentMRT = renderer.getMRT();
    renderer.setMRT(null);
    renderer.setRenderTarget(renderTarget);
    renderer.render(scene, virtualCamera);
    renderer.setMRT(currentMRT);
    renderer.setRenderTarget(currentRenderTarget);
    material.visible = true;
    _inReflector = false;
  }
};
var reflector = (parameters) => nodeObject(new ReflectorNode(parameters));
var _camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
var QuadGeometry = class extends BufferGeometry {
  constructor(flipY = false) {
    super();
    const uv2 = flipY === false ? [0, -1, 0, 1, 2, 1] : [0, 2, 0, 0, 2, 0];
    this.setAttribute("position", new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
    this.setAttribute("uv", new Float32BufferAttribute(uv2, 2));
  }
};
var _geometry = new QuadGeometry();
var QuadMesh = class extends Mesh2 {
  constructor(material = null) {
    super(_geometry, material);
    this.camera = _camera;
    this.isQuadMesh = true;
  }
  renderAsync(renderer) {
    return renderer.renderAsync(this, _camera);
  }
  render(renderer) {
    renderer.render(this, _camera);
  }
};
var _size$1 = new Vector22();
var getViewPosition = Fn(([screenPosition, depth2, projectionMatrixInverse], builder) => {
  let clipSpacePosition;
  if (builder.renderer.coordinateSystem === WebGPUCoordinateSystem) {
    screenPosition = vec2(screenPosition.x, screenPosition.y.oneMinus()).mul(2).sub(1);
    clipSpacePosition = vec4(vec3(screenPosition, depth2), 1);
  } else {
    clipSpacePosition = vec4(vec3(screenPosition.x, screenPosition.y.oneMinus(), depth2).mul(2).sub(1), 1);
  }
  const viewSpacePosition = vec4(projectionMatrixInverse.mul(clipSpacePosition));
  return viewSpacePosition.xyz.div(viewSpacePosition.w);
});
var getScreenPosition = Fn(([viewPosition, projectionMatrix]) => {
  const sampleClipPos = projectionMatrix.mul(vec4(viewPosition, 1));
  const sampleUv = sampleClipPos.xy.div(sampleClipPos.w).mul(0.5).add(0.5).toVar();
  return vec2(sampleUv.x, sampleUv.y.oneMinus());
});
var getNormalFromDepth = Fn(([uv2, depthTexture, projectionMatrixInverse]) => {
  const size = textureSize(textureLoad(depthTexture));
  const p = ivec2(uv2.mul(size)).toVar();
  const c0 = textureLoad(depthTexture, p).toVar();
  const l2 = textureLoad(depthTexture, p.sub(ivec2(2, 0))).toVar();
  const l1 = textureLoad(depthTexture, p.sub(ivec2(1, 0))).toVar();
  const r1 = textureLoad(depthTexture, p.add(ivec2(1, 0))).toVar();
  const r2 = textureLoad(depthTexture, p.add(ivec2(2, 0))).toVar();
  const b2 = textureLoad(depthTexture, p.add(ivec2(0, 2))).toVar();
  const b1 = textureLoad(depthTexture, p.add(ivec2(0, 1))).toVar();
  const t1 = textureLoad(depthTexture, p.sub(ivec2(0, 1))).toVar();
  const t2 = textureLoad(depthTexture, p.sub(ivec2(0, 2))).toVar();
  const dl = abs(sub(float(2).mul(l1).sub(l2), c0)).toVar();
  const dr = abs(sub(float(2).mul(r1).sub(r2), c0)).toVar();
  const db = abs(sub(float(2).mul(b1).sub(b2), c0)).toVar();
  const dt = abs(sub(float(2).mul(t1).sub(t2), c0)).toVar();
  const ce = getViewPosition(uv2, c0, projectionMatrixInverse).toVar();
  const dpdx = dl.lessThan(dr).select(ce.sub(getViewPosition(uv2.sub(vec2(float(1).div(size.x), 0)), l1, projectionMatrixInverse)), ce.negate().add(getViewPosition(uv2.add(vec2(float(1).div(size.x), 0)), r1, projectionMatrixInverse)));
  const dpdy = db.lessThan(dt).select(ce.sub(getViewPosition(uv2.add(vec2(0, float(1).div(size.y))), b1, projectionMatrixInverse)), ce.negate().add(getViewPosition(uv2.sub(vec2(0, float(1).div(size.y))), t1, projectionMatrixInverse)));
  return normalize(cross(dpdx, dpdy));
});
var PointUVNode = class extends Node {
  static get type() {
    return "PointUVNode";
  }
  constructor() {
    super("vec2");
    this.isPointUVNode = true;
  }
  generate() {
    return "vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )";
  }
};
var pointUV = nodeImmutable(PointUVNode);
var _e1 = new Euler();
var _m1 = new Matrix4();
var SceneNode = class _SceneNode extends Node {
  static get type() {
    return "SceneNode";
  }
  constructor(scope = _SceneNode.BACKGROUND_BLURRINESS, scene = null) {
    super();
    this.scope = scope;
    this.scene = scene;
  }
  setup(builder) {
    const scope = this.scope;
    const scene = this.scene !== null ? this.scene : builder.scene;
    let output2;
    if (scope === _SceneNode.BACKGROUND_BLURRINESS) {
      output2 = reference("backgroundBlurriness", "float", scene);
    } else if (scope === _SceneNode.BACKGROUND_INTENSITY) {
      output2 = reference("backgroundIntensity", "float", scene);
    } else if (scope === _SceneNode.BACKGROUND_ROTATION) {
      output2 = uniform("mat4").label("backgroundRotation").setGroup(renderGroup).onRenderUpdate(() => {
        const background = scene.background;
        if (background !== null && background.isTexture && background.mapping !== UVMapping) {
          _e1.copy(scene.backgroundRotation);
          _e1.x *= -1;
          _e1.y *= -1;
          _e1.z *= -1;
          _m1.makeRotationFromEuler(_e1);
        } else {
          _m1.identity();
        }
        return _m1;
      });
    } else {
      console.error("THREE.SceneNode: Unknown scope:", scope);
    }
    return output2;
  }
};
SceneNode.BACKGROUND_BLURRINESS = "backgroundBlurriness";
SceneNode.BACKGROUND_INTENSITY = "backgroundIntensity";
SceneNode.BACKGROUND_ROTATION = "backgroundRotation";
var backgroundBlurriness = nodeImmutable(SceneNode, SceneNode.BACKGROUND_BLURRINESS);
var backgroundIntensity = nodeImmutable(SceneNode, SceneNode.BACKGROUND_INTENSITY);
var backgroundRotation = nodeImmutable(SceneNode, SceneNode.BACKGROUND_ROTATION);
var StorageArrayElementNode = class extends ArrayElementNode {
  static get type() {
    return "StorageArrayElementNode";
  }
  constructor(storageBufferNode, indexNode) {
    super(storageBufferNode, indexNode);
    this.isStorageArrayElementNode = true;
  }
  set storageBufferNode(value) {
    this.node = value;
  }
  get storageBufferNode() {
    return this.node;
  }
  setup(builder) {
    if (builder.isAvailable("storageBuffer") === false) {
      if (this.node.bufferObject === true) {
        builder.setupPBO(this.node);
      }
    }
    return super.setup(builder);
  }
  generate(builder, output2) {
    let snippet;
    const isAssignContext = builder.context.assign;
    if (builder.isAvailable("storageBuffer") === false) {
      if (this.node.bufferObject === true && isAssignContext !== true) {
        snippet = builder.generatePBO(this);
      } else {
        snippet = this.node.build(builder);
      }
    } else {
      snippet = super.generate(builder);
    }
    if (isAssignContext !== true) {
      const type = this.getNodeType(builder);
      snippet = builder.format(snippet, type, output2);
    }
    return snippet;
  }
};
var storageElement = nodeProxy(StorageArrayElementNode);
var GPUStorageTextureAccess = {
  WriteOnly: "write-only",
  ReadOnly: "read-only",
  ReadWrite: "read-write"
};
var StorageTextureNode = class extends TextureNode {
  static get type() {
    return "StorageTextureNode";
  }
  constructor(value, uvNode, storeNode = null) {
    super(value, uvNode);
    this.storeNode = storeNode;
    this.isStorageTextureNode = true;
    this.access = GPUStorageTextureAccess.WriteOnly;
  }
  getInputType() {
    return "storageTexture";
  }
  setup(builder) {
    super.setup(builder);
    const properties = builder.getNodeProperties(this);
    properties.storeNode = this.storeNode;
  }
  setAccess(value) {
    this.access = value;
    return this;
  }
  generate(builder, output2) {
    let snippet;
    if (this.storeNode !== null) {
      snippet = this.generateStore(builder);
    } else {
      snippet = super.generate(builder, output2);
    }
    return snippet;
  }
  toReadOnly() {
    return this.setAccess(GPUStorageTextureAccess.ReadOnly);
  }
  toWriteOnly() {
    return this.setAccess(GPUStorageTextureAccess.WriteOnly);
  }
  generateStore(builder) {
    const properties = builder.getNodeProperties(this);
    const { uvNode, storeNode } = properties;
    const textureProperty = super.generate(builder, "property");
    const uvSnippet = uvNode.build(builder, "uvec2");
    const storeSnippet = storeNode.build(builder, "vec4");
    const snippet = builder.generateTextureStore(builder, textureProperty, uvSnippet, storeSnippet);
    builder.addLineFlowCode(snippet, this);
  }
};
var storageTexture = nodeProxy(StorageTextureNode);
var _objectData = /* @__PURE__ */ new WeakMap();
var VelocityNode = class extends TempNode {
  static get type() {
    return "VelocityNode";
  }
  constructor() {
    super("vec2");
    this.projectionMatrix = null;
    this.updateType = NodeUpdateType.OBJECT;
    this.updateAfterType = NodeUpdateType.OBJECT;
    this.previousModelWorldMatrix = uniform(new Matrix4());
    this.previousProjectionMatrix = uniform(new Matrix4()).setGroup(renderGroup);
    this.previousCameraViewMatrix = uniform(new Matrix4());
  }
  setProjectionMatrix(projectionMatrix) {
    this.projectionMatrix = projectionMatrix;
  }
  update({ frameId: frameId2, camera, object }) {
    const previousModelMatrix = getPreviousMatrix(object);
    this.previousModelWorldMatrix.value.copy(previousModelMatrix);
    const cameraData = getData(camera);
    if (cameraData.frameId !== frameId2) {
      cameraData.frameId = frameId2;
      if (cameraData.previousProjectionMatrix === void 0) {
        cameraData.previousProjectionMatrix = new Matrix4();
        cameraData.previousCameraViewMatrix = new Matrix4();
        cameraData.currentProjectionMatrix = new Matrix4();
        cameraData.currentCameraViewMatrix = new Matrix4();
        cameraData.previousProjectionMatrix.copy(this.projectionMatrix || camera.projectionMatrix);
        cameraData.previousCameraViewMatrix.copy(camera.matrixWorldInverse);
      } else {
        cameraData.previousProjectionMatrix.copy(cameraData.currentProjectionMatrix);
        cameraData.previousCameraViewMatrix.copy(cameraData.currentCameraViewMatrix);
      }
      cameraData.currentProjectionMatrix.copy(this.projectionMatrix || camera.projectionMatrix);
      cameraData.currentCameraViewMatrix.copy(camera.matrixWorldInverse);
      this.previousProjectionMatrix.value.copy(cameraData.previousProjectionMatrix);
      this.previousCameraViewMatrix.value.copy(cameraData.previousCameraViewMatrix);
    }
  }
  updateAfter({ object }) {
    getPreviousMatrix(object).copy(object.matrixWorld);
  }
  setup() {
    const projectionMatrix = this.projectionMatrix === null ? cameraProjectionMatrix : uniform(this.projectionMatrix);
    const previousModelViewMatrix = this.previousCameraViewMatrix.mul(this.previousModelWorldMatrix);
    const clipPositionCurrent = projectionMatrix.mul(modelViewMatrix).mul(positionLocal);
    const clipPositionPrevious = this.previousProjectionMatrix.mul(previousModelViewMatrix).mul(positionPrevious);
    const ndcPositionCurrent = clipPositionCurrent.xy.div(clipPositionCurrent.w);
    const ndcPositionPrevious = clipPositionPrevious.xy.div(clipPositionPrevious.w);
    const velocity2 = sub(ndcPositionCurrent, ndcPositionPrevious);
    return velocity2;
  }
};
function getData(object) {
  let objectData = _objectData.get(object);
  if (objectData === void 0) {
    objectData = {};
    _objectData.set(object, objectData);
  }
  return objectData;
}
function getPreviousMatrix(object, index = 0) {
  const objectData = getData(object);
  let matrix = objectData[index];
  if (matrix === void 0) {
    objectData[index] = matrix = new Matrix4();
  }
  return matrix;
}
var velocity = nodeImmutable(VelocityNode);
var burn = Fn(([base, blend]) => {
  return min$1(1, base.oneMinus().div(blend)).oneMinus();
}).setLayout({
  name: "burnBlend",
  type: "vec3",
  inputs: [
    { name: "base", type: "vec3" },
    { name: "blend", type: "vec3" }
  ]
});
var dodge = Fn(([base, blend]) => {
  return min$1(base.div(blend.oneMinus()), 1);
}).setLayout({
  name: "dodgeBlend",
  type: "vec3",
  inputs: [
    { name: "base", type: "vec3" },
    { name: "blend", type: "vec3" }
  ]
});
var screen = Fn(([base, blend]) => {
  return base.oneMinus().mul(blend.oneMinus()).oneMinus();
}).setLayout({
  name: "screenBlend",
  type: "vec3",
  inputs: [
    { name: "base", type: "vec3" },
    { name: "blend", type: "vec3" }
  ]
});
var overlay = Fn(([base, blend]) => {
  return mix(base.mul(2).mul(blend), base.oneMinus().mul(2).mul(blend.oneMinus()).oneMinus(), step(0.5, base));
}).setLayout({
  name: "overlayBlend",
  type: "vec3",
  inputs: [
    { name: "base", type: "vec3" },
    { name: "blend", type: "vec3" }
  ]
});
var grayscale = Fn(([color2]) => {
  return luminance(color2.rgb);
});
var saturation = Fn(([color2, adjustment = float(1)]) => {
  return adjustment.mix(luminance(color2.rgb), color2.rgb);
});
var vibrance = Fn(([color2, adjustment = float(1)]) => {
  const average = add(color2.r, color2.g, color2.b).div(3);
  const mx = color2.r.max(color2.g.max(color2.b));
  const amt = mx.sub(average).mul(adjustment).mul(-3);
  return mix(color2.rgb, mx, amt);
});
var hue = Fn(([color2, adjustment = float(1)]) => {
  const k = vec3(0.57735, 0.57735, 0.57735);
  const cosAngle = adjustment.cos();
  return vec3(color2.rgb.mul(cosAngle).add(k.cross(color2.rgb).mul(adjustment.sin()).add(k.mul(dot(k, color2.rgb).mul(cosAngle.oneMinus())))));
});
var luminance = (color2, luminanceCoefficients = vec3(ColorManagement.getLuminanceCoefficients(new Vector32()))) => dot(color2, luminanceCoefficients);
var cdl = Fn(([
  color2,
  slope = vec3(1),
  offset = vec3(0),
  power = vec3(1),
  saturation2 = float(1),
  // ASC CDL v1.2 explicitly requires Rec. 709 luminance coefficients.
  luminanceCoefficients = vec3(ColorManagement.getLuminanceCoefficients(new Vector32(), LinearSRGBColorSpace))
]) => {
  const luma = color2.rgb.dot(vec3(luminanceCoefficients));
  const v = max$1(color2.rgb.mul(slope).add(offset), 0).toVar();
  const pv = v.pow(power).toVar();
  If(v.r.greaterThan(0), () => {
    v.r.assign(pv.r);
  });
  If(v.g.greaterThan(0), () => {
    v.g.assign(pv.g);
  });
  If(v.b.greaterThan(0), () => {
    v.b.assign(pv.b);
  });
  v.assign(luma.add(v.sub(luma).mul(saturation2)));
  return vec4(v.rgb, color2.a);
});
var PosterizeNode = class extends TempNode {
  static get type() {
    return "PosterizeNode";
  }
  constructor(sourceNode, stepsNode) {
    super();
    this.sourceNode = sourceNode;
    this.stepsNode = stepsNode;
  }
  setup() {
    const { sourceNode, stepsNode } = this;
    return sourceNode.mul(stepsNode).floor().div(stepsNode);
  }
};
var posterize = nodeProxy(PosterizeNode);
var _sharedFramebuffer = null;
var ViewportSharedTextureNode = class extends ViewportTextureNode {
  static get type() {
    return "ViewportSharedTextureNode";
  }
  constructor(uvNode = screenUV, levelNode = null) {
    if (_sharedFramebuffer === null) {
      _sharedFramebuffer = new FramebufferTexture();
    }
    super(uvNode, levelNode, _sharedFramebuffer);
  }
  updateReference() {
    return this;
  }
};
var viewportSharedTexture = nodeProxy(ViewportSharedTextureNode);
var _size = new Vector22();
var PassTextureNode = class extends TextureNode {
  static get type() {
    return "PassTextureNode";
  }
  constructor(passNode, texture2) {
    super(texture2);
    this.passNode = passNode;
    this.setUpdateMatrix(false);
  }
  setup(builder) {
    if (builder.object.isQuadMesh) this.passNode.build(builder);
    return super.setup(builder);
  }
  clone() {
    return new this.constructor(this.passNode, this.value);
  }
};
var PassMultipleTextureNode = class extends PassTextureNode {
  static get type() {
    return "PassMultipleTextureNode";
  }
  constructor(passNode, textureName, previousTexture = false) {
    super(passNode, null);
    this.textureName = textureName;
    this.previousTexture = previousTexture;
  }
  updateTexture() {
    this.value = this.previousTexture ? this.passNode.getPreviousTexture(this.textureName) : this.passNode.getTexture(this.textureName);
  }
  setup(builder) {
    this.updateTexture();
    return super.setup(builder);
  }
  clone() {
    return new this.constructor(this.passNode, this.textureName, this.previousTexture);
  }
};
var PassNode = class _PassNode extends TempNode {
  static get type() {
    return "PassNode";
  }
  constructor(scope, scene, camera, options = {}) {
    super("vec4");
    this.scope = scope;
    this.scene = scene;
    this.camera = camera;
    this.options = options;
    this._pixelRatio = 1;
    this._width = 1;
    this._height = 1;
    const depthTexture = new DepthTexture();
    depthTexture.isRenderTargetTexture = true;
    depthTexture.name = "depth";
    const renderTarget = new RenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: HalfFloatType, ...options });
    renderTarget.texture.name = "output";
    renderTarget.depthTexture = depthTexture;
    this.renderTarget = renderTarget;
    this.updateBeforeType = NodeUpdateType.FRAME;
    this._textures = {
      output: renderTarget.texture,
      depth: depthTexture
    };
    this._textureNodes = {};
    this._linearDepthNodes = {};
    this._viewZNodes = {};
    this._previousTextures = {};
    this._previousTextureNodes = {};
    this._cameraNear = uniform(0);
    this._cameraFar = uniform(0);
    this._mrt = null;
    this.isPassNode = true;
  }
  setMRT(mrt2) {
    this._mrt = mrt2;
    return this;
  }
  getMRT() {
    return this._mrt;
  }
  isGlobal() {
    return true;
  }
  getTexture(name) {
    let texture2 = this._textures[name];
    if (texture2 === void 0) {
      const refTexture = this.renderTarget.texture;
      texture2 = refTexture.clone();
      texture2.isRenderTargetTexture = true;
      texture2.name = name;
      this._textures[name] = texture2;
      this.renderTarget.textures.push(texture2);
    }
    return texture2;
  }
  getPreviousTexture(name) {
    let texture2 = this._previousTextures[name];
    if (texture2 === void 0) {
      texture2 = this.getTexture(name).clone();
      texture2.isRenderTargetTexture = true;
      this._previousTextures[name] = texture2;
    }
    return texture2;
  }
  toggleTexture(name) {
    const prevTexture = this._previousTextures[name];
    if (prevTexture !== void 0) {
      const texture2 = this._textures[name];
      const index = this.renderTarget.textures.indexOf(texture2);
      this.renderTarget.textures[index] = prevTexture;
      this._textures[name] = prevTexture;
      this._previousTextures[name] = texture2;
      this._textureNodes[name].updateTexture();
      this._previousTextureNodes[name].updateTexture();
    }
  }
  getTextureNode(name = "output") {
    let textureNode = this._textureNodes[name];
    if (textureNode === void 0) {
      textureNode = nodeObject(new PassMultipleTextureNode(this, name));
      textureNode.updateTexture();
      this._textureNodes[name] = textureNode;
    }
    return textureNode;
  }
  getPreviousTextureNode(name = "output") {
    let textureNode = this._previousTextureNodes[name];
    if (textureNode === void 0) {
      if (this._textureNodes[name] === void 0) this.getTextureNode(name);
      textureNode = nodeObject(new PassMultipleTextureNode(this, name, true));
      textureNode.updateTexture();
      this._previousTextureNodes[name] = textureNode;
    }
    return textureNode;
  }
  getViewZNode(name = "depth") {
    let viewZNode = this._viewZNodes[name];
    if (viewZNode === void 0) {
      const cameraNear2 = this._cameraNear;
      const cameraFar2 = this._cameraFar;
      this._viewZNodes[name] = viewZNode = perspectiveDepthToViewZ(this.getTextureNode(name), cameraNear2, cameraFar2);
    }
    return viewZNode;
  }
  getLinearDepthNode(name = "depth") {
    let linearDepthNode = this._linearDepthNodes[name];
    if (linearDepthNode === void 0) {
      const cameraNear2 = this._cameraNear;
      const cameraFar2 = this._cameraFar;
      const viewZNode = this.getViewZNode(name);
      this._linearDepthNodes[name] = linearDepthNode = viewZToOrthographicDepth(viewZNode, cameraNear2, cameraFar2);
    }
    return linearDepthNode;
  }
  setup({ renderer }) {
    this.renderTarget.samples = this.options.samples === void 0 ? renderer.samples : this.options.samples;
    if (renderer.backend.isWebGLBackend === true) {
      this.renderTarget.samples = 0;
    }
    this.renderTarget.depthTexture.isMultisampleRenderTargetTexture = this.renderTarget.samples > 1;
    return this.scope === _PassNode.COLOR ? this.getTextureNode() : this.getLinearDepthNode();
  }
  updateBefore(frame) {
    const { renderer } = frame;
    const { scene, camera } = this;
    this._pixelRatio = renderer.getPixelRatio();
    const size = renderer.getSize(_size);
    this.setSize(size.width, size.height);
    const currentRenderTarget = renderer.getRenderTarget();
    const currentMRT = renderer.getMRT();
    this._cameraNear.value = camera.near;
    this._cameraFar.value = camera.far;
    for (const name in this._previousTextures) {
      this.toggleTexture(name);
    }
    renderer.setRenderTarget(this.renderTarget);
    renderer.setMRT(this._mrt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(currentRenderTarget);
    renderer.setMRT(currentMRT);
  }
  setSize(width, height) {
    this._width = width;
    this._height = height;
    const effectiveWidth = this._width * this._pixelRatio;
    const effectiveHeight = this._height * this._pixelRatio;
    this.renderTarget.setSize(effectiveWidth, effectiveHeight);
  }
  setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
    this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget.dispose();
  }
};
PassNode.COLOR = "color";
PassNode.DEPTH = "depth";
var linearToneMapping = Fn(([color2, exposure]) => {
  return color2.mul(exposure).clamp();
}).setLayout({
  name: "linearToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var reinhardToneMapping = Fn(([color2, exposure]) => {
  color2 = color2.mul(exposure);
  return color2.div(color2.add(1)).clamp();
}).setLayout({
  name: "reinhardToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var cineonToneMapping = Fn(([color2, exposure]) => {
  color2 = color2.mul(exposure);
  color2 = color2.sub(4e-3).max(0);
  const a = color2.mul(color2.mul(6.2).add(0.5));
  const b = color2.mul(color2.mul(6.2).add(1.7)).add(0.06);
  return a.div(b).pow(2.2);
}).setLayout({
  name: "cineonToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var RRTAndODTFit = Fn(([color2]) => {
  const a = color2.mul(color2.add(0.0245786)).sub(90537e-9);
  const b = color2.mul(color2.add(0.432951).mul(0.983729)).add(0.238081);
  return a.div(b);
});
var acesFilmicToneMapping = Fn(([color2, exposure]) => {
  const ACESInputMat = mat3(
    0.59719,
    0.35458,
    0.04823,
    0.076,
    0.90834,
    0.01566,
    0.0284,
    0.13383,
    0.83777
  );
  const ACESOutputMat = mat3(
    1.60475,
    -0.53108,
    -0.07367,
    -0.10208,
    1.10813,
    -605e-5,
    -327e-5,
    -0.07276,
    1.07602
  );
  color2 = color2.mul(exposure).div(0.6);
  color2 = ACESInputMat.mul(color2);
  color2 = RRTAndODTFit(color2);
  color2 = ACESOutputMat.mul(color2);
  return color2.clamp();
}).setLayout({
  name: "acesFilmicToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var LINEAR_REC2020_TO_LINEAR_SRGB = mat3(vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -83e-4, 1.1187));
var LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.088), vec3(0.0433, 0.0113, 0.8956));
var agxDefaultContrastApprox = Fn(([x_immutable]) => {
  const x = vec3(x_immutable).toVar();
  const x2 = vec3(x.mul(x)).toVar();
  const x4 = vec3(x2.mul(x2)).toVar();
  return float(15.5).mul(x4.mul(x2)).sub(mul(40.14, x4.mul(x))).add(mul(31.96, x4).sub(mul(6.868, x2.mul(x))).add(mul(0.4298, x2).add(mul(0.1191, x).sub(232e-5))));
});
var agxToneMapping = Fn(([color2, exposure]) => {
  const colortone = vec3(color2).toVar();
  const AgXInsetMatrix = mat3(vec3(0.856627153315983, 0.137318972929847, 0.11189821299995), vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903), vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));
  const AgXOutsetMatrix = mat3(vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826), vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294), vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));
  const AgxMinEv = float(-12.47393);
  const AgxMaxEv = float(4.026069);
  colortone.mulAssign(exposure);
  colortone.assign(LINEAR_SRGB_TO_LINEAR_REC2020.mul(colortone));
  colortone.assign(AgXInsetMatrix.mul(colortone));
  colortone.assign(max$1(colortone, 1e-10));
  colortone.assign(log2(colortone));
  colortone.assign(colortone.sub(AgxMinEv).div(AgxMaxEv.sub(AgxMinEv)));
  colortone.assign(clamp(colortone, 0, 1));
  colortone.assign(agxDefaultContrastApprox(colortone));
  colortone.assign(AgXOutsetMatrix.mul(colortone));
  colortone.assign(pow(max$1(vec3(0), colortone), vec3(2.2)));
  colortone.assign(LINEAR_REC2020_TO_LINEAR_SRGB.mul(colortone));
  colortone.assign(clamp(colortone, 0, 1));
  return colortone;
}).setLayout({
  name: "agxToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var neutralToneMapping = Fn(([color2, exposure]) => {
  const StartCompression = float(0.8 - 0.04);
  const Desaturation = float(0.15);
  color2 = color2.mul(exposure);
  const x = min$1(color2.r, min$1(color2.g, color2.b));
  const offset = select(x.lessThan(0.08), x.sub(mul(6.25, x.mul(x))), 0.04);
  color2.subAssign(offset);
  const peak = max$1(color2.r, max$1(color2.g, color2.b));
  If(peak.lessThan(StartCompression), () => {
    return color2;
  });
  const d = sub(1, StartCompression);
  const newPeak = sub(1, d.mul(d).div(peak.add(d.sub(StartCompression))));
  color2.mulAssign(newPeak.div(peak));
  const g = sub(1, div(1, Desaturation.mul(peak.sub(newPeak)).add(1)));
  return mix(color2, vec3(newPeak), g);
}).setLayout({
  name: "neutralToneMapping",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" },
    { name: "exposure", type: "float" }
  ]
});
var CodeNode = class extends Node {
  static get type() {
    return "CodeNode";
  }
  constructor(code2 = "", includes = [], language = "") {
    super("code");
    this.isCodeNode = true;
    this.code = code2;
    this.language = language;
    this.includes = includes;
  }
  isGlobal() {
    return true;
  }
  setIncludes(includes) {
    this.includes = includes;
    return this;
  }
  getIncludes() {
    return this.includes;
  }
  generate(builder) {
    const includes = this.getIncludes(builder);
    for (const include of includes) {
      include.build(builder);
    }
    const nodeCode = builder.getCodeFromNode(this, this.getNodeType(builder));
    nodeCode.code = this.code;
    return nodeCode.code;
  }
  serialize(data) {
    super.serialize(data);
    data.code = this.code;
    data.language = this.language;
  }
  deserialize(data) {
    super.deserialize(data);
    this.code = data.code;
    this.language = data.language;
  }
};
var code = nodeProxy(CodeNode);
var ScriptableValueNode = class extends Node {
  static get type() {
    return "ScriptableValueNode";
  }
  constructor(value = null) {
    super();
    this._value = value;
    this._cache = null;
    this.inputType = null;
    this.outpuType = null;
    this.events = new EventDispatcher();
    this.isScriptableValueNode = true;
  }
  get isScriptableOutputNode() {
    return this.outputType !== null;
  }
  set value(val) {
    if (this._value === val) return;
    if (this._cache && this.inputType === "URL" && this.value.value instanceof ArrayBuffer) {
      URL.revokeObjectURL(this._cache);
      this._cache = null;
    }
    this._value = val;
    this.events.dispatchEvent({ type: "change" });
    this.refresh();
  }
  get value() {
    return this._value;
  }
  refresh() {
    this.events.dispatchEvent({ type: "refresh" });
  }
  getValue() {
    const value = this.value;
    if (value && this._cache === null && this.inputType === "URL" && value.value instanceof ArrayBuffer) {
      this._cache = URL.createObjectURL(new Blob([value.value]));
    } else if (value && value.value !== null && value.value !== void 0 && ((this.inputType === "URL" || this.inputType === "String") && typeof value.value === "string" || this.inputType === "Number" && typeof value.value === "number" || this.inputType === "Vector2" && value.value.isVector2 || this.inputType === "Vector3" && value.value.isVector3 || this.inputType === "Vector4" && value.value.isVector4 || this.inputType === "Color" && value.value.isColor || this.inputType === "Matrix3" && value.value.isMatrix3 || this.inputType === "Matrix4" && value.value.isMatrix4)) {
      return value.value;
    }
    return this._cache || value;
  }
  getNodeType(builder) {
    return this.value && this.value.isNode ? this.value.getNodeType(builder) : "float";
  }
  setup() {
    return this.value && this.value.isNode ? this.value : float();
  }
  serialize(data) {
    super.serialize(data);
    if (this.value !== null) {
      if (this.inputType === "ArrayBuffer") {
        data.value = arrayBufferToBase64(this.value);
      } else {
        data.value = this.value ? this.value.toJSON(data.meta).uuid : null;
      }
    } else {
      data.value = null;
    }
    data.inputType = this.inputType;
    data.outputType = this.outputType;
  }
  deserialize(data) {
    super.deserialize(data);
    let value = null;
    if (data.value !== null) {
      if (data.inputType === "ArrayBuffer") {
        value = base64ToArrayBuffer(data.value);
      } else if (data.inputType === "Texture") {
        value = data.meta.textures[data.value];
      } else {
        value = data.meta.nodes[data.value] || null;
      }
    }
    this.value = value;
    this.inputType = data.inputType;
    this.outputType = data.outputType;
  }
};
var scriptableValue = nodeProxy(ScriptableValueNode);
var Resources = class extends Map {
  get(key, callback = null, ...params) {
    if (this.has(key)) return super.get(key);
    if (callback !== null) {
      const value = callback(...params);
      this.set(key, value);
      return value;
    }
  }
};
var Parameters = class {
  constructor(scriptableNode) {
    this.scriptableNode = scriptableNode;
  }
  get parameters() {
    return this.scriptableNode.parameters;
  }
  get layout() {
    return this.scriptableNode.getLayout();
  }
  getInputLayout(id) {
    return this.scriptableNode.getInputLayout(id);
  }
  get(name) {
    const param = this.parameters[name];
    const value = param ? param.getValue() : null;
    return value;
  }
};
var ScriptableNodeResources = new Resources();
var ScriptableNode = class extends Node {
  static get type() {
    return "ScriptableNode";
  }
  constructor(codeNode = null, parameters = {}) {
    super();
    this.codeNode = codeNode;
    this.parameters = parameters;
    this._local = new Resources();
    this._output = scriptableValue();
    this._outputs = {};
    this._source = this.source;
    this._method = null;
    this._object = null;
    this._value = null;
    this._needsOutputUpdate = true;
    this.onRefresh = this.onRefresh.bind(this);
    this.isScriptableNode = true;
  }
  get source() {
    return this.codeNode ? this.codeNode.code : "";
  }
  setLocal(name, value) {
    return this._local.set(name, value);
  }
  getLocal(name) {
    return this._local.get(name);
  }
  onRefresh() {
    this._refresh();
  }
  getInputLayout(id) {
    for (const element2 of this.getLayout()) {
      if (element2.inputType && (element2.id === id || element2.name === id)) {
        return element2;
      }
    }
  }
  getOutputLayout(id) {
    for (const element2 of this.getLayout()) {
      if (element2.outputType && (element2.id === id || element2.name === id)) {
        return element2;
      }
    }
  }
  setOutput(name, value) {
    const outputs = this._outputs;
    if (outputs[name] === void 0) {
      outputs[name] = scriptableValue(value);
    } else {
      outputs[name].value = value;
    }
    return this;
  }
  getOutput(name) {
    return this._outputs[name];
  }
  getParameter(name) {
    return this.parameters[name];
  }
  setParameter(name, value) {
    const parameters = this.parameters;
    if (value && value.isScriptableNode) {
      this.deleteParameter(name);
      parameters[name] = value;
      parameters[name].getDefaultOutput().events.addEventListener("refresh", this.onRefresh);
    } else if (value && value.isScriptableValueNode) {
      this.deleteParameter(name);
      parameters[name] = value;
      parameters[name].events.addEventListener("refresh", this.onRefresh);
    } else if (parameters[name] === void 0) {
      parameters[name] = scriptableValue(value);
      parameters[name].events.addEventListener("refresh", this.onRefresh);
    } else {
      parameters[name].value = value;
    }
    return this;
  }
  getValue() {
    return this.getDefaultOutput().getValue();
  }
  deleteParameter(name) {
    let valueNode = this.parameters[name];
    if (valueNode) {
      if (valueNode.isScriptableNode) valueNode = valueNode.getDefaultOutput();
      valueNode.events.removeEventListener("refresh", this.onRefresh);
    }
    return this;
  }
  clearParameters() {
    for (const name of Object.keys(this.parameters)) {
      this.deleteParameter(name);
    }
    this.needsUpdate = true;
    return this;
  }
  call(name, ...params) {
    const object = this.getObject();
    const method = object[name];
    if (typeof method === "function") {
      return method(...params);
    }
  }
  async callAsync(name, ...params) {
    const object = this.getObject();
    const method = object[name];
    if (typeof method === "function") {
      return method.constructor.name === "AsyncFunction" ? await method(...params) : method(...params);
    }
  }
  getNodeType(builder) {
    return this.getDefaultOutputNode().getNodeType(builder);
  }
  refresh(output2 = null) {
    if (output2 !== null) {
      this.getOutput(output2).refresh();
    } else {
      this._refresh();
    }
  }
  getObject() {
    if (this.needsUpdate) this.dispose();
    if (this._object !== null) return this._object;
    const refresh = () => this.refresh();
    const setOutput = (id, value) => this.setOutput(id, value);
    const parameters = new Parameters(this);
    const THREE = ScriptableNodeResources.get("THREE");
    const TSL = ScriptableNodeResources.get("TSL");
    const method = this.getMethod(this.codeNode);
    const params = [parameters, this._local, ScriptableNodeResources, refresh, setOutput, THREE, TSL];
    this._object = method(...params);
    const layout = this._object.layout;
    if (layout) {
      if (layout.cache === false) {
        this._local.clear();
      }
      this._output.outputType = layout.outputType || null;
      if (Array.isArray(layout.elements)) {
        for (const element2 of layout.elements) {
          const id = element2.id || element2.name;
          if (element2.inputType) {
            if (this.getParameter(id) === void 0) this.setParameter(id, null);
            this.getParameter(id).inputType = element2.inputType;
          }
          if (element2.outputType) {
            if (this.getOutput(id) === void 0) this.setOutput(id, null);
            this.getOutput(id).outputType = element2.outputType;
          }
        }
      }
    }
    return this._object;
  }
  deserialize(data) {
    super.deserialize(data);
    for (const name in this.parameters) {
      let valueNode = this.parameters[name];
      if (valueNode.isScriptableNode) valueNode = valueNode.getDefaultOutput();
      valueNode.events.addEventListener("refresh", this.onRefresh);
    }
  }
  getLayout() {
    return this.getObject().layout;
  }
  getDefaultOutputNode() {
    const output2 = this.getDefaultOutput().value;
    if (output2 && output2.isNode) {
      return output2;
    }
    return float();
  }
  getDefaultOutput() {
    return this._exec()._output;
  }
  getMethod() {
    if (this.needsUpdate) this.dispose();
    if (this._method !== null) return this._method;
    const parametersProps = ["parameters", "local", "global", "refresh", "setOutput", "THREE", "TSL"];
    const interfaceProps = ["layout", "init", "main", "dispose"];
    const properties = interfaceProps.join(", ");
    const declarations = "var " + properties + "; var output = {};\n";
    const returns = "\nreturn { ...output, " + properties + " };";
    const code2 = declarations + this.codeNode.code + returns;
    this._method = new Function(...parametersProps, code2);
    return this._method;
  }
  dispose() {
    if (this._method === null) return;
    if (this._object && typeof this._object.dispose === "function") {
      this._object.dispose();
    }
    this._method = null;
    this._object = null;
    this._source = null;
    this._value = null;
    this._needsOutputUpdate = true;
    this._output.value = null;
    this._outputs = {};
  }
  setup() {
    return this.getDefaultOutputNode();
  }
  getCacheKey(force) {
    const values = [hashString(this.source), this.getDefaultOutputNode().getCacheKey(force)];
    for (const param in this.parameters) {
      values.push(this.parameters[param].getCacheKey(force));
    }
    return hashArray(values);
  }
  set needsUpdate(value) {
    if (value === true) this.dispose();
  }
  get needsUpdate() {
    return this.source !== this._source;
  }
  _exec() {
    if (this.codeNode === null) return this;
    if (this._needsOutputUpdate === true) {
      this._value = this.call("main");
      this._needsOutputUpdate = false;
    }
    this._output.value = this._value;
    return this;
  }
  _refresh() {
    this.needsUpdate = true;
    this._exec();
    this._output.refresh();
  }
};
var scriptable = nodeProxy(ScriptableNode);
var FogNode = class extends Node {
  static get type() {
    return "FogNode";
  }
  constructor(colorNode, factorNode) {
    super("float");
    this.isFogNode = true;
    this.colorNode = colorNode;
    this.factorNode = factorNode;
  }
  getViewZNode(builder) {
    let viewZ;
    const getViewZ = builder.context.getViewZ;
    if (getViewZ !== void 0) {
      viewZ = getViewZ(this);
    }
    return (viewZ || positionView.z).negate();
  }
  setup() {
    return this.factorNode;
  }
};
var fog = nodeProxy(FogNode);
var FogRangeNode = class extends FogNode {
  static get type() {
    return "FogRangeNode";
  }
  constructor(colorNode, nearNode, farNode) {
    super(colorNode);
    this.isFogRangeNode = true;
    this.nearNode = nearNode;
    this.farNode = farNode;
  }
  setup(builder) {
    const viewZ = this.getViewZNode(builder);
    return smoothstep(this.nearNode, this.farNode, viewZ);
  }
};
var rangeFog = nodeProxy(FogRangeNode);
var FogExp2Node = class extends FogNode {
  static get type() {
    return "FogExp2Node";
  }
  constructor(colorNode, densityNode) {
    super(colorNode);
    this.isFogExp2Node = true;
    this.densityNode = densityNode;
  }
  setup(builder) {
    const viewZ = this.getViewZNode(builder);
    const density = this.densityNode;
    return density.mul(density, viewZ, viewZ).negate().exp().oneMinus();
  }
};
var densityFog = nodeProxy(FogExp2Node);
var min = null;
var max = null;
var RangeNode = class extends Node {
  static get type() {
    return "RangeNode";
  }
  constructor(minNode = float(), maxNode = float()) {
    super();
    this.minNode = minNode;
    this.maxNode = maxNode;
  }
  getVectorLength(builder) {
    const minLength = builder.getTypeLength(getValueType(this.minNode.value));
    const maxLength = builder.getTypeLength(getValueType(this.maxNode.value));
    return minLength > maxLength ? minLength : maxLength;
  }
  getNodeType(builder) {
    return builder.object.count > 1 ? builder.getTypeFromLength(this.getVectorLength(builder)) : "float";
  }
  setup(builder) {
    const object = builder.object;
    let output2 = null;
    if (object.count > 1) {
      const minValue = this.minNode.value;
      const maxValue = this.maxNode.value;
      const minLength = builder.getTypeLength(getValueType(minValue));
      const maxLength = builder.getTypeLength(getValueType(maxValue));
      min = min || new Vector4();
      max = max || new Vector4();
      min.setScalar(0);
      max.setScalar(0);
      if (minLength === 1) min.setScalar(minValue);
      else if (minValue.isColor) min.set(minValue.r, minValue.g, minValue.b);
      else min.set(minValue.x, minValue.y, minValue.z || 0, minValue.w || 0);
      if (maxLength === 1) max.setScalar(maxValue);
      else if (maxValue.isColor) max.set(maxValue.r, maxValue.g, maxValue.b);
      else max.set(maxValue.x, maxValue.y, maxValue.z || 0, maxValue.w || 0);
      const stride = 4;
      const length2 = stride * object.count;
      const array = new Float32Array(length2);
      for (let i = 0; i < length2; i++) {
        const index = i % stride;
        const minElementValue = min.getComponent(index);
        const maxElementValue = max.getComponent(index);
        array[i] = MathUtils.lerp(minElementValue, maxElementValue, Math.random());
      }
      const nodeType = this.getNodeType(builder);
      if (object.count <= 4096) {
        output2 = buffer(array, "vec4", object.count).element(instanceIndex).convert(nodeType);
      } else {
        const bufferAttribute2 = new InstancedBufferAttribute(array, 4);
        builder.geometry.setAttribute("__range" + this.id, bufferAttribute2);
        output2 = instancedBufferAttribute(bufferAttribute2).convert(nodeType);
      }
    } else {
      output2 = float(0);
    }
    return output2;
  }
};
var range = nodeProxy(RangeNode);
var ComputeBuiltinNode = class extends Node {
  static get type() {
    return "ComputeBuiltinNode";
  }
  constructor(builtinName, nodeType) {
    super(nodeType);
    this._builtinName = builtinName;
  }
  getHash(builder) {
    return this.getBuiltinName(builder);
  }
  getNodeType() {
    return this.nodeType;
  }
  setBuiltinName(builtinName) {
    this._builtinName = builtinName;
    return this;
  }
  getBuiltinName() {
    return this._builtinName;
  }
  hasBuiltin(builder) {
    builder.hasBuiltin(this._builtinName);
  }
  generate(builder, output2) {
    const builtinName = this.getBuiltinName(builder);
    const nodeType = this.getNodeType(builder);
    if (builder.shaderStage === "compute") {
      return builder.format(builtinName, nodeType, output2);
    } else {
      console.warn(`ComputeBuiltinNode: Compute built-in value ${builtinName} can not be accessed in the ${builder.shaderStage} stage`);
      return builder.generateConst(nodeType);
    }
  }
  serialize(data) {
    super.serialize(data);
    data.global = this.global;
    data._builtinName = this._builtinName;
  }
  deserialize(data) {
    super.deserialize(data);
    this.global = data.global;
    this._builtinName = data._builtinName;
  }
};
var computeBuiltin = (name, nodeType) => nodeObject(new ComputeBuiltinNode(name, nodeType));
var numWorkgroups = computeBuiltin("numWorkgroups", "uvec3");
var workgroupId = computeBuiltin("workgroupId", "uvec3");
var localId = computeBuiltin("localId", "uvec3");
var subgroupSize = computeBuiltin("subgroupSize", "uint");
var BarrierNode = class extends Node {
  constructor(scope) {
    super();
    this.scope = scope;
  }
  generate(builder) {
    const { scope } = this;
    const { renderer } = builder;
    if (renderer.backend.isWebGLBackend === true) {
      builder.addFlowCode(`	// ${scope}Barrier 
`);
    } else {
      builder.addLineFlowCode(`${scope}Barrier()`, this);
    }
  }
};
var barrier = nodeProxy(BarrierNode);
var AtomicFunctionNode = class extends TempNode {
  static get type() {
    return "AtomicFunctionNode";
  }
  constructor(method, pointerNode, valueNode, storeNode = null) {
    super("uint");
    this.method = method;
    this.pointerNode = pointerNode;
    this.valueNode = valueNode;
    this.storeNode = storeNode;
  }
  getInputType(builder) {
    return this.pointerNode.getNodeType(builder);
  }
  getNodeType(builder) {
    return this.getInputType(builder);
  }
  generate(builder) {
    const method = this.method;
    const type = this.getNodeType(builder);
    const inputType = this.getInputType(builder);
    const a = this.pointerNode;
    const b = this.valueNode;
    const params = [];
    params.push(`&${a.build(builder, inputType)}`);
    params.push(b.build(builder, inputType));
    const methodSnippet = `${builder.getMethod(method, type)}( ${params.join(", ")} )`;
    if (this.storeNode !== null) {
      const varSnippet = this.storeNode.build(builder, inputType);
      builder.addLineFlowCode(`${varSnippet} = ${methodSnippet}`, this);
    } else {
      builder.addLineFlowCode(methodSnippet, this);
    }
  }
};
AtomicFunctionNode.ATOMIC_LOAD = "atomicLoad";
AtomicFunctionNode.ATOMIC_STORE = "atomicStore";
AtomicFunctionNode.ATOMIC_ADD = "atomicAdd";
AtomicFunctionNode.ATOMIC_SUB = "atomicSub";
AtomicFunctionNode.ATOMIC_MAX = "atomicMax";
AtomicFunctionNode.ATOMIC_MIN = "atomicMin";
AtomicFunctionNode.ATOMIC_AND = "atomicAnd";
AtomicFunctionNode.ATOMIC_OR = "atomicOr";
AtomicFunctionNode.ATOMIC_XOR = "atomicXor";
var atomicNode = nodeProxy(AtomicFunctionNode);
var sortLights = (lights) => {
  return lights.sort((a, b) => a.id - b.id);
};
var getLightNodeById = (id, lightNodes) => {
  for (const lightNode of lightNodes) {
    if (lightNode.isAnalyticLightNode && lightNode.light.id === id) {
      return lightNode;
    }
  }
  return null;
};
var _lightsNodeRef = /* @__PURE__ */ new WeakMap();
var LightsNode = class extends Node {
  static get type() {
    return "LightsNode";
  }
  constructor() {
    super("vec3");
    this.totalDiffuseNode = vec3().toVar("totalDiffuse");
    this.totalSpecularNode = vec3().toVar("totalSpecular");
    this.outgoingLightNode = vec3().toVar("outgoingLight");
    this._lights = [];
    this._lightNodes = null;
    this._lightNodesHash = null;
    this.global = true;
  }
  getHash(builder) {
    if (this._lightNodesHash === null) {
      if (this._lightNodes === null) this.setupLightsNode(builder);
      const hash2 = [];
      for (const lightNode of this._lightNodes) {
        hash2.push(lightNode.getSelf().getHash());
      }
      this._lightNodesHash = "lights-" + hash2.join(",");
    }
    return this._lightNodesHash;
  }
  analyze(builder) {
    const properties = builder.getDataFromNode(this);
    for (const node of properties.nodes) {
      node.build(builder);
    }
  }
  setupLightsNode(builder) {
    const lightNodes = [];
    const previousLightNodes = this._lightNodes;
    const lights = sortLights(this._lights);
    const nodeLibrary = builder.renderer.library;
    for (const light of lights) {
      if (light.isNode) {
        lightNodes.push(nodeObject(light));
      } else {
        let lightNode = null;
        if (previousLightNodes !== null) {
          lightNode = getLightNodeById(light.id, previousLightNodes);
        }
        if (lightNode === null) {
          const lightNodeClass = nodeLibrary.getLightNodeClass(light.constructor);
          if (lightNodeClass === null) {
            console.warn(`LightsNode.setupNodeLights: Light node not found for ${light.constructor.name}`);
            continue;
          }
          let lightNode2 = null;
          if (!_lightsNodeRef.has(light)) {
            lightNode2 = nodeObject(new lightNodeClass(light));
            _lightsNodeRef.set(light, lightNode2);
          } else {
            lightNode2 = _lightsNodeRef.get(light);
          }
          lightNodes.push(lightNode2);
        }
      }
    }
    this._lightNodes = lightNodes;
  }
  setupLights(builder, lightNodes) {
    for (const lightNode of lightNodes) {
      lightNode.build(builder);
    }
  }
  setup(builder) {
    if (this._lightNodes === null) this.setupLightsNode(builder);
    const context2 = builder.context;
    const lightingModel = context2.lightingModel;
    let outgoingLightNode = this.outgoingLightNode;
    if (lightingModel) {
      const { _lightNodes, totalDiffuseNode, totalSpecularNode } = this;
      context2.outgoingLight = outgoingLightNode;
      const stack2 = builder.addStack();
      const properties = builder.getDataFromNode(this);
      properties.nodes = stack2.nodes;
      lightingModel.start(context2, stack2, builder);
      this.setupLights(builder, _lightNodes);
      lightingModel.indirect(context2, stack2, builder);
      const { backdrop, backdropAlpha } = context2;
      const { directDiffuse, directSpecular, indirectDiffuse, indirectSpecular } = context2.reflectedLight;
      let totalDiffuse = directDiffuse.add(indirectDiffuse);
      if (backdrop !== null) {
        if (backdropAlpha !== null) {
          totalDiffuse = vec3(backdropAlpha.mix(totalDiffuse, backdrop));
        } else {
          totalDiffuse = vec3(backdrop);
        }
        context2.material.transparent = true;
      }
      totalDiffuseNode.assign(totalDiffuse);
      totalSpecularNode.assign(directSpecular.add(indirectSpecular));
      outgoingLightNode.assign(totalDiffuseNode.add(totalSpecularNode));
      lightingModel.finish(context2, stack2, builder);
      outgoingLightNode = outgoingLightNode.bypass(builder.removeStack());
    }
    return outgoingLightNode;
  }
  setLights(lights) {
    this._lights = lights;
    this._lightNodes = null;
    this._lightNodesHash = null;
    return this;
  }
  getLights() {
    return this._lights;
  }
  get hasLights() {
    return this._lights.length > 0;
  }
};
var BasicShadowMap = Fn(({ depthTexture, shadowCoord }) => {
  return texture(depthTexture, shadowCoord.xy).compare(shadowCoord.z);
});
var PCFShadowMap = Fn(({ depthTexture, shadowCoord, shadow }) => {
  const depthCompare = (uv2, compare) => texture(depthTexture, uv2).compare(compare);
  const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
  const radius = reference("radius", "float", shadow).setGroup(renderGroup);
  const texelSize = vec2(1).div(mapSize);
  const dx0 = texelSize.x.negate().mul(radius);
  const dy0 = texelSize.y.negate().mul(radius);
  const dx1 = texelSize.x.mul(radius);
  const dy1 = texelSize.y.mul(radius);
  const dx2 = dx0.div(2);
  const dy2 = dy0.div(2);
  const dx3 = dx1.div(2);
  const dy3 = dy1.div(2);
  return add(
    depthCompare(shadowCoord.xy.add(vec2(dx0, dy0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(0, dy0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx1, dy0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx2, dy2)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(0, dy2)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx3, dy2)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx0, 0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx2, 0)), shadowCoord.z),
    depthCompare(shadowCoord.xy, shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx3, 0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx1, 0)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx2, dy3)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(0, dy3)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx3, dy3)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx0, dy1)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(0, dy1)), shadowCoord.z),
    depthCompare(shadowCoord.xy.add(vec2(dx1, dy1)), shadowCoord.z)
  ).mul(1 / 17);
});
var PCFSoftShadowMap = Fn(({ depthTexture, shadowCoord, shadow }) => {
  const depthCompare = (uv3, compare) => texture(depthTexture, uv3).compare(compare);
  const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
  const texelSize = vec2(1).div(mapSize);
  const dx = texelSize.x;
  const dy = texelSize.y;
  const uv2 = shadowCoord.xy;
  const f = fract(uv2.mul(mapSize).add(0.5));
  uv2.subAssign(f.mul(texelSize));
  return add(
    depthCompare(uv2, shadowCoord.z),
    depthCompare(uv2.add(vec2(dx, 0)), shadowCoord.z),
    depthCompare(uv2.add(vec2(0, dy)), shadowCoord.z),
    depthCompare(uv2.add(texelSize), shadowCoord.z),
    mix(
      depthCompare(uv2.add(vec2(dx.negate(), 0)), shadowCoord.z),
      depthCompare(uv2.add(vec2(dx.mul(2), 0)), shadowCoord.z),
      f.x
    ),
    mix(
      depthCompare(uv2.add(vec2(dx.negate(), dy)), shadowCoord.z),
      depthCompare(uv2.add(vec2(dx.mul(2), dy)), shadowCoord.z),
      f.x
    ),
    mix(
      depthCompare(uv2.add(vec2(0, dy.negate())), shadowCoord.z),
      depthCompare(uv2.add(vec2(0, dy.mul(2))), shadowCoord.z),
      f.y
    ),
    mix(
      depthCompare(uv2.add(vec2(dx, dy.negate())), shadowCoord.z),
      depthCompare(uv2.add(vec2(dx, dy.mul(2))), shadowCoord.z),
      f.y
    ),
    mix(
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), dy.negate())), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), dy.negate())), shadowCoord.z),
        f.x
      ),
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), dy.mul(2))), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), dy.mul(2))), shadowCoord.z),
        f.x
      ),
      f.y
    )
  ).mul(1 / 9);
});
var VSMShadowMapNode = Fn(({ depthTexture, shadowCoord }) => {
  const occlusion = float(1).toVar();
  const distribution = texture(depthTexture).uv(shadowCoord.xy).rg;
  const hardShadow = step(shadowCoord.z, distribution.x);
  If(hardShadow.notEqual(float(1)), () => {
    const distance2 = shadowCoord.z.sub(distribution.x);
    const variance = max$1(0, distribution.y.mul(distribution.y));
    let softnessProbability = variance.div(variance.add(distance2.mul(distance2)));
    softnessProbability = clamp(sub(softnessProbability, 0.3).div(0.95 - 0.3));
    occlusion.assign(clamp(max$1(hardShadow, softnessProbability)));
  });
  return occlusion;
});
var VSMPassVertical = Fn(({ samples, radius, size, shadowPass }) => {
  const mean = float(0).toVar();
  const squaredMean = float(0).toVar();
  const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
  const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
  Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
    const uvOffset = uvStart.add(float(i).mul(uvStride));
    const depth2 = shadowPass.uv(add(screenCoordinate.xy, vec2(0, uvOffset).mul(radius)).div(size)).x;
    mean.addAssign(depth2);
    squaredMean.addAssign(depth2.mul(depth2));
  });
  mean.divAssign(samples);
  squaredMean.divAssign(samples);
  const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
  return vec2(mean, std_dev);
});
var VSMPassHorizontal = Fn(({ samples, radius, size, shadowPass }) => {
  const mean = float(0).toVar();
  const squaredMean = float(0).toVar();
  const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
  const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
  Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
    const uvOffset = uvStart.add(float(i).mul(uvStride));
    const distribution = shadowPass.uv(add(screenCoordinate.xy, vec2(uvOffset, 0).mul(radius)).div(size));
    mean.addAssign(distribution.x);
    squaredMean.addAssign(add(distribution.y.mul(distribution.y), distribution.x.mul(distribution.x)));
  });
  mean.divAssign(samples);
  squaredMean.divAssign(samples);
  const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
  return vec2(mean, std_dev);
});
var _quadMesh$1 = new QuadMesh();
var getDistanceAttenuation = Fn((inputs) => {
  const { lightDistance, cutoffDistance, decayExponent } = inputs;
  const distanceFalloff = lightDistance.pow(decayExponent).max(0.01).reciprocal();
  return cutoffDistance.greaterThan(0).select(
    distanceFalloff.mul(lightDistance.div(cutoffDistance).pow4().oneMinus().clamp().pow2()),
    distanceFalloff
  );
});
var directPointLight = Fn(({ color: color2, lightViewPosition, cutoffDistance, decayExponent }, builder) => {
  const lightingModel = builder.context.lightingModel;
  const lVector = lightViewPosition.sub(positionView);
  const lightDirection = lVector.normalize();
  const lightDistance = lVector.length();
  const lightAttenuation = getDistanceAttenuation({
    lightDistance,
    cutoffDistance,
    decayExponent
  });
  const lightColor = color2.mul(lightAttenuation);
  const reflectedLight = builder.context.reflectedLight;
  lightingModel.direct({
    lightDirection,
    lightColor,
    reflectedLight
  }, builder.stack, builder);
});
var checker = Fn(([coord = uv()]) => {
  const uv2 = coord.mul(2);
  const cx = uv2.x.floor();
  const cy = uv2.y.floor();
  const result = cx.add(cy).mod(2);
  return result.sign();
});
var mx_select = Fn(([b_immutable, t_immutable, f_immutable]) => {
  const f = float(f_immutable).toVar();
  const t = float(t_immutable).toVar();
  const b = bool(b_immutable).toVar();
  return select(b, t, f);
}).setLayout({
  name: "mx_select",
  type: "float",
  inputs: [
    { name: "b", type: "bool" },
    { name: "t", type: "float" },
    { name: "f", type: "float" }
  ]
});
var mx_negate_if = Fn(([val_immutable, b_immutable]) => {
  const b = bool(b_immutable).toVar();
  const val = float(val_immutable).toVar();
  return select(b, val.negate(), val);
}).setLayout({
  name: "mx_negate_if",
  type: "float",
  inputs: [
    { name: "val", type: "float" },
    { name: "b", type: "bool" }
  ]
});
var mx_floor = Fn(([x_immutable]) => {
  const x = float(x_immutable).toVar();
  return int(floor(x));
}).setLayout({
  name: "mx_floor",
  type: "int",
  inputs: [
    { name: "x", type: "float" }
  ]
});
var mx_floorfrac = Fn(([x_immutable, i]) => {
  const x = float(x_immutable).toVar();
  i.assign(mx_floor(x));
  return x.sub(float(i));
});
var mx_bilerp_0 = Fn(([v0_immutable, v1_immutable, v2_immutable, v3_immutable, s_immutable, t_immutable]) => {
  const t = float(t_immutable).toVar();
  const s = float(s_immutable).toVar();
  const v3 = float(v3_immutable).toVar();
  const v2 = float(v2_immutable).toVar();
  const v1 = float(v1_immutable).toVar();
  const v0 = float(v0_immutable).toVar();
  const s1 = float(sub(1, s)).toVar();
  return sub(1, t).mul(v0.mul(s1).add(v1.mul(s))).add(t.mul(v2.mul(s1).add(v3.mul(s))));
}).setLayout({
  name: "mx_bilerp_0",
  type: "float",
  inputs: [
    { name: "v0", type: "float" },
    { name: "v1", type: "float" },
    { name: "v2", type: "float" },
    { name: "v3", type: "float" },
    { name: "s", type: "float" },
    { name: "t", type: "float" }
  ]
});
var mx_bilerp_1 = Fn(([v0_immutable, v1_immutable, v2_immutable, v3_immutable, s_immutable, t_immutable]) => {
  const t = float(t_immutable).toVar();
  const s = float(s_immutable).toVar();
  const v3 = vec3(v3_immutable).toVar();
  const v2 = vec3(v2_immutable).toVar();
  const v1 = vec3(v1_immutable).toVar();
  const v0 = vec3(v0_immutable).toVar();
  const s1 = float(sub(1, s)).toVar();
  return sub(1, t).mul(v0.mul(s1).add(v1.mul(s))).add(t.mul(v2.mul(s1).add(v3.mul(s))));
}).setLayout({
  name: "mx_bilerp_1",
  type: "vec3",
  inputs: [
    { name: "v0", type: "vec3" },
    { name: "v1", type: "vec3" },
    { name: "v2", type: "vec3" },
    { name: "v3", type: "vec3" },
    { name: "s", type: "float" },
    { name: "t", type: "float" }
  ]
});
var mx_bilerp = overloadingFn([mx_bilerp_0, mx_bilerp_1]);
var mx_trilerp_0 = Fn(([v0_immutable, v1_immutable, v2_immutable, v3_immutable, v4_immutable, v5_immutable, v6_immutable, v7_immutable, s_immutable, t_immutable, r_immutable]) => {
  const r = float(r_immutable).toVar();
  const t = float(t_immutable).toVar();
  const s = float(s_immutable).toVar();
  const v7 = float(v7_immutable).toVar();
  const v6 = float(v6_immutable).toVar();
  const v5 = float(v5_immutable).toVar();
  const v4 = float(v4_immutable).toVar();
  const v3 = float(v3_immutable).toVar();
  const v2 = float(v2_immutable).toVar();
  const v1 = float(v1_immutable).toVar();
  const v0 = float(v0_immutable).toVar();
  const s1 = float(sub(1, s)).toVar();
  const t1 = float(sub(1, t)).toVar();
  const r1 = float(sub(1, r)).toVar();
  return r1.mul(t1.mul(v0.mul(s1).add(v1.mul(s))).add(t.mul(v2.mul(s1).add(v3.mul(s))))).add(r.mul(t1.mul(v4.mul(s1).add(v5.mul(s))).add(t.mul(v6.mul(s1).add(v7.mul(s))))));
}).setLayout({
  name: "mx_trilerp_0",
  type: "float",
  inputs: [
    { name: "v0", type: "float" },
    { name: "v1", type: "float" },
    { name: "v2", type: "float" },
    { name: "v3", type: "float" },
    { name: "v4", type: "float" },
    { name: "v5", type: "float" },
    { name: "v6", type: "float" },
    { name: "v7", type: "float" },
    { name: "s", type: "float" },
    { name: "t", type: "float" },
    { name: "r", type: "float" }
  ]
});
var mx_trilerp_1 = Fn(([v0_immutable, v1_immutable, v2_immutable, v3_immutable, v4_immutable, v5_immutable, v6_immutable, v7_immutable, s_immutable, t_immutable, r_immutable]) => {
  const r = float(r_immutable).toVar();
  const t = float(t_immutable).toVar();
  const s = float(s_immutable).toVar();
  const v7 = vec3(v7_immutable).toVar();
  const v6 = vec3(v6_immutable).toVar();
  const v5 = vec3(v5_immutable).toVar();
  const v4 = vec3(v4_immutable).toVar();
  const v3 = vec3(v3_immutable).toVar();
  const v2 = vec3(v2_immutable).toVar();
  const v1 = vec3(v1_immutable).toVar();
  const v0 = vec3(v0_immutable).toVar();
  const s1 = float(sub(1, s)).toVar();
  const t1 = float(sub(1, t)).toVar();
  const r1 = float(sub(1, r)).toVar();
  return r1.mul(t1.mul(v0.mul(s1).add(v1.mul(s))).add(t.mul(v2.mul(s1).add(v3.mul(s))))).add(r.mul(t1.mul(v4.mul(s1).add(v5.mul(s))).add(t.mul(v6.mul(s1).add(v7.mul(s))))));
}).setLayout({
  name: "mx_trilerp_1",
  type: "vec3",
  inputs: [
    { name: "v0", type: "vec3" },
    { name: "v1", type: "vec3" },
    { name: "v2", type: "vec3" },
    { name: "v3", type: "vec3" },
    { name: "v4", type: "vec3" },
    { name: "v5", type: "vec3" },
    { name: "v6", type: "vec3" },
    { name: "v7", type: "vec3" },
    { name: "s", type: "float" },
    { name: "t", type: "float" },
    { name: "r", type: "float" }
  ]
});
var mx_trilerp = overloadingFn([mx_trilerp_0, mx_trilerp_1]);
var mx_gradient_float_0 = Fn(([hash_immutable, x_immutable, y_immutable]) => {
  const y = float(y_immutable).toVar();
  const x = float(x_immutable).toVar();
  const hash2 = uint(hash_immutable).toVar();
  const h = uint(hash2.bitAnd(uint(7))).toVar();
  const u = float(mx_select(h.lessThan(uint(4)), x, y)).toVar();
  const v = float(mul(2, mx_select(h.lessThan(uint(4)), y, x))).toVar();
  return mx_negate_if(u, bool(h.bitAnd(uint(1)))).add(mx_negate_if(v, bool(h.bitAnd(uint(2)))));
}).setLayout({
  name: "mx_gradient_float_0",
  type: "float",
  inputs: [
    { name: "hash", type: "uint" },
    { name: "x", type: "float" },
    { name: "y", type: "float" }
  ]
});
var mx_gradient_float_1 = Fn(([hash_immutable, x_immutable, y_immutable, z_immutable]) => {
  const z = float(z_immutable).toVar();
  const y = float(y_immutable).toVar();
  const x = float(x_immutable).toVar();
  const hash2 = uint(hash_immutable).toVar();
  const h = uint(hash2.bitAnd(uint(15))).toVar();
  const u = float(mx_select(h.lessThan(uint(8)), x, y)).toVar();
  const v = float(mx_select(h.lessThan(uint(4)), y, mx_select(h.equal(uint(12)).or(h.equal(uint(14))), x, z))).toVar();
  return mx_negate_if(u, bool(h.bitAnd(uint(1)))).add(mx_negate_if(v, bool(h.bitAnd(uint(2)))));
}).setLayout({
  name: "mx_gradient_float_1",
  type: "float",
  inputs: [
    { name: "hash", type: "uint" },
    { name: "x", type: "float" },
    { name: "y", type: "float" },
    { name: "z", type: "float" }
  ]
});
var mx_gradient_float = overloadingFn([mx_gradient_float_0, mx_gradient_float_1]);
var mx_gradient_vec3_0 = Fn(([hash_immutable, x_immutable, y_immutable]) => {
  const y = float(y_immutable).toVar();
  const x = float(x_immutable).toVar();
  const hash2 = uvec3(hash_immutable).toVar();
  return vec3(mx_gradient_float(hash2.x, x, y), mx_gradient_float(hash2.y, x, y), mx_gradient_float(hash2.z, x, y));
}).setLayout({
  name: "mx_gradient_vec3_0",
  type: "vec3",
  inputs: [
    { name: "hash", type: "uvec3" },
    { name: "x", type: "float" },
    { name: "y", type: "float" }
  ]
});
var mx_gradient_vec3_1 = Fn(([hash_immutable, x_immutable, y_immutable, z_immutable]) => {
  const z = float(z_immutable).toVar();
  const y = float(y_immutable).toVar();
  const x = float(x_immutable).toVar();
  const hash2 = uvec3(hash_immutable).toVar();
  return vec3(mx_gradient_float(hash2.x, x, y, z), mx_gradient_float(hash2.y, x, y, z), mx_gradient_float(hash2.z, x, y, z));
}).setLayout({
  name: "mx_gradient_vec3_1",
  type: "vec3",
  inputs: [
    { name: "hash", type: "uvec3" },
    { name: "x", type: "float" },
    { name: "y", type: "float" },
    { name: "z", type: "float" }
  ]
});
var mx_gradient_vec3 = overloadingFn([mx_gradient_vec3_0, mx_gradient_vec3_1]);
var mx_gradient_scale2d_0 = Fn(([v_immutable]) => {
  const v = float(v_immutable).toVar();
  return mul(0.6616, v);
}).setLayout({
  name: "mx_gradient_scale2d_0",
  type: "float",
  inputs: [
    { name: "v", type: "float" }
  ]
});
var mx_gradient_scale3d_0 = Fn(([v_immutable]) => {
  const v = float(v_immutable).toVar();
  return mul(0.982, v);
}).setLayout({
  name: "mx_gradient_scale3d_0",
  type: "float",
  inputs: [
    { name: "v", type: "float" }
  ]
});
var mx_gradient_scale2d_1 = Fn(([v_immutable]) => {
  const v = vec3(v_immutable).toVar();
  return mul(0.6616, v);
}).setLayout({
  name: "mx_gradient_scale2d_1",
  type: "vec3",
  inputs: [
    { name: "v", type: "vec3" }
  ]
});
var mx_gradient_scale2d = overloadingFn([mx_gradient_scale2d_0, mx_gradient_scale2d_1]);
var mx_gradient_scale3d_1 = Fn(([v_immutable]) => {
  const v = vec3(v_immutable).toVar();
  return mul(0.982, v);
}).setLayout({
  name: "mx_gradient_scale3d_1",
  type: "vec3",
  inputs: [
    { name: "v", type: "vec3" }
  ]
});
var mx_gradient_scale3d = overloadingFn([mx_gradient_scale3d_0, mx_gradient_scale3d_1]);
var mx_rotl32 = Fn(([x_immutable, k_immutable]) => {
  const k = int(k_immutable).toVar();
  const x = uint(x_immutable).toVar();
  return x.shiftLeft(k).bitOr(x.shiftRight(int(32).sub(k)));
}).setLayout({
  name: "mx_rotl32",
  type: "uint",
  inputs: [
    { name: "x", type: "uint" },
    { name: "k", type: "int" }
  ]
});
var mx_bjmix = Fn(([a, b, c]) => {
  a.subAssign(c);
  a.bitXorAssign(mx_rotl32(c, int(4)));
  c.addAssign(b);
  b.subAssign(a);
  b.bitXorAssign(mx_rotl32(a, int(6)));
  a.addAssign(c);
  c.subAssign(b);
  c.bitXorAssign(mx_rotl32(b, int(8)));
  b.addAssign(a);
  a.subAssign(c);
  a.bitXorAssign(mx_rotl32(c, int(16)));
  c.addAssign(b);
  b.subAssign(a);
  b.bitXorAssign(mx_rotl32(a, int(19)));
  a.addAssign(c);
  c.subAssign(b);
  c.bitXorAssign(mx_rotl32(b, int(4)));
  b.addAssign(a);
});
var mx_bjfinal = Fn(([a_immutable, b_immutable, c_immutable]) => {
  const c = uint(c_immutable).toVar();
  const b = uint(b_immutable).toVar();
  const a = uint(a_immutable).toVar();
  c.bitXorAssign(b);
  c.subAssign(mx_rotl32(b, int(14)));
  a.bitXorAssign(c);
  a.subAssign(mx_rotl32(c, int(11)));
  b.bitXorAssign(a);
  b.subAssign(mx_rotl32(a, int(25)));
  c.bitXorAssign(b);
  c.subAssign(mx_rotl32(b, int(16)));
  a.bitXorAssign(c);
  a.subAssign(mx_rotl32(c, int(4)));
  b.bitXorAssign(a);
  b.subAssign(mx_rotl32(a, int(14)));
  c.bitXorAssign(b);
  c.subAssign(mx_rotl32(b, int(24)));
  return c;
}).setLayout({
  name: "mx_bjfinal",
  type: "uint",
  inputs: [
    { name: "a", type: "uint" },
    { name: "b", type: "uint" },
    { name: "c", type: "uint" }
  ]
});
var mx_bits_to_01 = Fn(([bits_immutable]) => {
  const bits = uint(bits_immutable).toVar();
  return float(bits).div(float(uint(int(4294967295))));
}).setLayout({
  name: "mx_bits_to_01",
  type: "float",
  inputs: [
    { name: "bits", type: "uint" }
  ]
});
var mx_fade = Fn(([t_immutable]) => {
  const t = float(t_immutable).toVar();
  return t.mul(t).mul(t).mul(t.mul(t.mul(6).sub(15)).add(10));
}).setLayout({
  name: "mx_fade",
  type: "float",
  inputs: [
    { name: "t", type: "float" }
  ]
});
var mx_hash_int_0 = Fn(([x_immutable]) => {
  const x = int(x_immutable).toVar();
  const len = uint(uint(1)).toVar();
  const seed = uint(uint(int(3735928559)).add(len.shiftLeft(uint(2))).add(uint(13))).toVar();
  return mx_bjfinal(seed.add(uint(x)), seed, seed);
}).setLayout({
  name: "mx_hash_int_0",
  type: "uint",
  inputs: [
    { name: "x", type: "int" }
  ]
});
var mx_hash_int_1 = Fn(([x_immutable, y_immutable]) => {
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const len = uint(uint(2)).toVar();
  const a = uint().toVar(), b = uint().toVar(), c = uint().toVar();
  a.assign(b.assign(c.assign(uint(int(3735928559)).add(len.shiftLeft(uint(2))).add(uint(13)))));
  a.addAssign(uint(x));
  b.addAssign(uint(y));
  return mx_bjfinal(a, b, c);
}).setLayout({
  name: "mx_hash_int_1",
  type: "uint",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" }
  ]
});
var mx_hash_int_2 = Fn(([x_immutable, y_immutable, z_immutable]) => {
  const z = int(z_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const len = uint(uint(3)).toVar();
  const a = uint().toVar(), b = uint().toVar(), c = uint().toVar();
  a.assign(b.assign(c.assign(uint(int(3735928559)).add(len.shiftLeft(uint(2))).add(uint(13)))));
  a.addAssign(uint(x));
  b.addAssign(uint(y));
  c.addAssign(uint(z));
  return mx_bjfinal(a, b, c);
}).setLayout({
  name: "mx_hash_int_2",
  type: "uint",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "z", type: "int" }
  ]
});
var mx_hash_int_3 = Fn(([x_immutable, y_immutable, z_immutable, xx_immutable]) => {
  const xx = int(xx_immutable).toVar();
  const z = int(z_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const len = uint(uint(4)).toVar();
  const a = uint().toVar(), b = uint().toVar(), c = uint().toVar();
  a.assign(b.assign(c.assign(uint(int(3735928559)).add(len.shiftLeft(uint(2))).add(uint(13)))));
  a.addAssign(uint(x));
  b.addAssign(uint(y));
  c.addAssign(uint(z));
  mx_bjmix(a, b, c);
  a.addAssign(uint(xx));
  return mx_bjfinal(a, b, c);
}).setLayout({
  name: "mx_hash_int_3",
  type: "uint",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "z", type: "int" },
    { name: "xx", type: "int" }
  ]
});
var mx_hash_int_4 = Fn(([x_immutable, y_immutable, z_immutable, xx_immutable, yy_immutable]) => {
  const yy = int(yy_immutable).toVar();
  const xx = int(xx_immutable).toVar();
  const z = int(z_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const len = uint(uint(5)).toVar();
  const a = uint().toVar(), b = uint().toVar(), c = uint().toVar();
  a.assign(b.assign(c.assign(uint(int(3735928559)).add(len.shiftLeft(uint(2))).add(uint(13)))));
  a.addAssign(uint(x));
  b.addAssign(uint(y));
  c.addAssign(uint(z));
  mx_bjmix(a, b, c);
  a.addAssign(uint(xx));
  b.addAssign(uint(yy));
  return mx_bjfinal(a, b, c);
}).setLayout({
  name: "mx_hash_int_4",
  type: "uint",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "z", type: "int" },
    { name: "xx", type: "int" },
    { name: "yy", type: "int" }
  ]
});
var mx_hash_int = overloadingFn([mx_hash_int_0, mx_hash_int_1, mx_hash_int_2, mx_hash_int_3, mx_hash_int_4]);
var mx_hash_vec3_0 = Fn(([x_immutable, y_immutable]) => {
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const h = uint(mx_hash_int(x, y)).toVar();
  const result = uvec3().toVar();
  result.x.assign(h.bitAnd(int(255)));
  result.y.assign(h.shiftRight(int(8)).bitAnd(int(255)));
  result.z.assign(h.shiftRight(int(16)).bitAnd(int(255)));
  return result;
}).setLayout({
  name: "mx_hash_vec3_0",
  type: "uvec3",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" }
  ]
});
var mx_hash_vec3_1 = Fn(([x_immutable, y_immutable, z_immutable]) => {
  const z = int(z_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const h = uint(mx_hash_int(x, y, z)).toVar();
  const result = uvec3().toVar();
  result.x.assign(h.bitAnd(int(255)));
  result.y.assign(h.shiftRight(int(8)).bitAnd(int(255)));
  result.z.assign(h.shiftRight(int(16)).bitAnd(int(255)));
  return result;
}).setLayout({
  name: "mx_hash_vec3_1",
  type: "uvec3",
  inputs: [
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "z", type: "int" }
  ]
});
var mx_hash_vec3 = overloadingFn([mx_hash_vec3_0, mx_hash_vec3_1]);
var mx_perlin_noise_float_0 = Fn(([p_immutable]) => {
  const p = vec2(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar();
  const fx = float(mx_floorfrac(p.x, X)).toVar();
  const fy = float(mx_floorfrac(p.y, Y)).toVar();
  const u = float(mx_fade(fx)).toVar();
  const v = float(mx_fade(fy)).toVar();
  const result = float(mx_bilerp(mx_gradient_float(mx_hash_int(X, Y), fx, fy), mx_gradient_float(mx_hash_int(X.add(int(1)), Y), fx.sub(1), fy), mx_gradient_float(mx_hash_int(X, Y.add(int(1))), fx, fy.sub(1)), mx_gradient_float(mx_hash_int(X.add(int(1)), Y.add(int(1))), fx.sub(1), fy.sub(1)), u, v)).toVar();
  return mx_gradient_scale2d(result);
}).setLayout({
  name: "mx_perlin_noise_float_0",
  type: "float",
  inputs: [
    { name: "p", type: "vec2" }
  ]
});
var mx_perlin_noise_float_1 = Fn(([p_immutable]) => {
  const p = vec3(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar(), Z = int().toVar();
  const fx = float(mx_floorfrac(p.x, X)).toVar();
  const fy = float(mx_floorfrac(p.y, Y)).toVar();
  const fz = float(mx_floorfrac(p.z, Z)).toVar();
  const u = float(mx_fade(fx)).toVar();
  const v = float(mx_fade(fy)).toVar();
  const w = float(mx_fade(fz)).toVar();
  const result = float(mx_trilerp(mx_gradient_float(mx_hash_int(X, Y, Z), fx, fy, fz), mx_gradient_float(mx_hash_int(X.add(int(1)), Y, Z), fx.sub(1), fy, fz), mx_gradient_float(mx_hash_int(X, Y.add(int(1)), Z), fx, fy.sub(1), fz), mx_gradient_float(mx_hash_int(X.add(int(1)), Y.add(int(1)), Z), fx.sub(1), fy.sub(1), fz), mx_gradient_float(mx_hash_int(X, Y, Z.add(int(1))), fx, fy, fz.sub(1)), mx_gradient_float(mx_hash_int(X.add(int(1)), Y, Z.add(int(1))), fx.sub(1), fy, fz.sub(1)), mx_gradient_float(mx_hash_int(X, Y.add(int(1)), Z.add(int(1))), fx, fy.sub(1), fz.sub(1)), mx_gradient_float(mx_hash_int(X.add(int(1)), Y.add(int(1)), Z.add(int(1))), fx.sub(1), fy.sub(1), fz.sub(1)), u, v, w)).toVar();
  return mx_gradient_scale3d(result);
}).setLayout({
  name: "mx_perlin_noise_float_1",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" }
  ]
});
var mx_perlin_noise_float = overloadingFn([mx_perlin_noise_float_0, mx_perlin_noise_float_1]);
var mx_perlin_noise_vec3_0 = Fn(([p_immutable]) => {
  const p = vec2(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar();
  const fx = float(mx_floorfrac(p.x, X)).toVar();
  const fy = float(mx_floorfrac(p.y, Y)).toVar();
  const u = float(mx_fade(fx)).toVar();
  const v = float(mx_fade(fy)).toVar();
  const result = vec3(mx_bilerp(mx_gradient_vec3(mx_hash_vec3(X, Y), fx, fy), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y), fx.sub(1), fy), mx_gradient_vec3(mx_hash_vec3(X, Y.add(int(1))), fx, fy.sub(1)), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y.add(int(1))), fx.sub(1), fy.sub(1)), u, v)).toVar();
  return mx_gradient_scale2d(result);
}).setLayout({
  name: "mx_perlin_noise_vec3_0",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec2" }
  ]
});
var mx_perlin_noise_vec3_1 = Fn(([p_immutable]) => {
  const p = vec3(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar(), Z = int().toVar();
  const fx = float(mx_floorfrac(p.x, X)).toVar();
  const fy = float(mx_floorfrac(p.y, Y)).toVar();
  const fz = float(mx_floorfrac(p.z, Z)).toVar();
  const u = float(mx_fade(fx)).toVar();
  const v = float(mx_fade(fy)).toVar();
  const w = float(mx_fade(fz)).toVar();
  const result = vec3(mx_trilerp(mx_gradient_vec3(mx_hash_vec3(X, Y, Z), fx, fy, fz), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y, Z), fx.sub(1), fy, fz), mx_gradient_vec3(mx_hash_vec3(X, Y.add(int(1)), Z), fx, fy.sub(1), fz), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y.add(int(1)), Z), fx.sub(1), fy.sub(1), fz), mx_gradient_vec3(mx_hash_vec3(X, Y, Z.add(int(1))), fx, fy, fz.sub(1)), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y, Z.add(int(1))), fx.sub(1), fy, fz.sub(1)), mx_gradient_vec3(mx_hash_vec3(X, Y.add(int(1)), Z.add(int(1))), fx, fy.sub(1), fz.sub(1)), mx_gradient_vec3(mx_hash_vec3(X.add(int(1)), Y.add(int(1)), Z.add(int(1))), fx.sub(1), fy.sub(1), fz.sub(1)), u, v, w)).toVar();
  return mx_gradient_scale3d(result);
}).setLayout({
  name: "mx_perlin_noise_vec3_1",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec3" }
  ]
});
var mx_perlin_noise_vec3 = overloadingFn([mx_perlin_noise_vec3_0, mx_perlin_noise_vec3_1]);
var mx_cell_noise_float_0 = Fn(([p_immutable]) => {
  const p = float(p_immutable).toVar();
  const ix = int(mx_floor(p)).toVar();
  return mx_bits_to_01(mx_hash_int(ix));
}).setLayout({
  name: "mx_cell_noise_float_0",
  type: "float",
  inputs: [
    { name: "p", type: "float" }
  ]
});
var mx_cell_noise_float_1 = Fn(([p_immutable]) => {
  const p = vec2(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  return mx_bits_to_01(mx_hash_int(ix, iy));
}).setLayout({
  name: "mx_cell_noise_float_1",
  type: "float",
  inputs: [
    { name: "p", type: "vec2" }
  ]
});
var mx_cell_noise_float_2 = Fn(([p_immutable]) => {
  const p = vec3(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  const iz = int(mx_floor(p.z)).toVar();
  return mx_bits_to_01(mx_hash_int(ix, iy, iz));
}).setLayout({
  name: "mx_cell_noise_float_2",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" }
  ]
});
var mx_cell_noise_float_3 = Fn(([p_immutable]) => {
  const p = vec4(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  const iz = int(mx_floor(p.z)).toVar();
  const iw = int(mx_floor(p.w)).toVar();
  return mx_bits_to_01(mx_hash_int(ix, iy, iz, iw));
}).setLayout({
  name: "mx_cell_noise_float_3",
  type: "float",
  inputs: [
    { name: "p", type: "vec4" }
  ]
});
var mx_cell_noise_float$1 = overloadingFn([mx_cell_noise_float_0, mx_cell_noise_float_1, mx_cell_noise_float_2, mx_cell_noise_float_3]);
var mx_cell_noise_vec3_0 = Fn(([p_immutable]) => {
  const p = float(p_immutable).toVar();
  const ix = int(mx_floor(p)).toVar();
  return vec3(mx_bits_to_01(mx_hash_int(ix, int(0))), mx_bits_to_01(mx_hash_int(ix, int(1))), mx_bits_to_01(mx_hash_int(ix, int(2))));
}).setLayout({
  name: "mx_cell_noise_vec3_0",
  type: "vec3",
  inputs: [
    { name: "p", type: "float" }
  ]
});
var mx_cell_noise_vec3_1 = Fn(([p_immutable]) => {
  const p = vec2(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  return vec3(mx_bits_to_01(mx_hash_int(ix, iy, int(0))), mx_bits_to_01(mx_hash_int(ix, iy, int(1))), mx_bits_to_01(mx_hash_int(ix, iy, int(2))));
}).setLayout({
  name: "mx_cell_noise_vec3_1",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec2" }
  ]
});
var mx_cell_noise_vec3_2 = Fn(([p_immutable]) => {
  const p = vec3(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  const iz = int(mx_floor(p.z)).toVar();
  return vec3(mx_bits_to_01(mx_hash_int(ix, iy, iz, int(0))), mx_bits_to_01(mx_hash_int(ix, iy, iz, int(1))), mx_bits_to_01(mx_hash_int(ix, iy, iz, int(2))));
}).setLayout({
  name: "mx_cell_noise_vec3_2",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec3" }
  ]
});
var mx_cell_noise_vec3_3 = Fn(([p_immutable]) => {
  const p = vec4(p_immutable).toVar();
  const ix = int(mx_floor(p.x)).toVar();
  const iy = int(mx_floor(p.y)).toVar();
  const iz = int(mx_floor(p.z)).toVar();
  const iw = int(mx_floor(p.w)).toVar();
  return vec3(mx_bits_to_01(mx_hash_int(ix, iy, iz, iw, int(0))), mx_bits_to_01(mx_hash_int(ix, iy, iz, iw, int(1))), mx_bits_to_01(mx_hash_int(ix, iy, iz, iw, int(2))));
}).setLayout({
  name: "mx_cell_noise_vec3_3",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec4" }
  ]
});
var mx_cell_noise_vec3 = overloadingFn([mx_cell_noise_vec3_0, mx_cell_noise_vec3_1, mx_cell_noise_vec3_2, mx_cell_noise_vec3_3]);
var mx_fractal_noise_float$1 = Fn(([p_immutable, octaves_immutable, lacunarity_immutable, diminish_immutable]) => {
  const diminish = float(diminish_immutable).toVar();
  const lacunarity = float(lacunarity_immutable).toVar();
  const octaves = int(octaves_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const result = float(0).toVar();
  const amplitude = float(1).toVar();
  Loop(octaves, () => {
    result.addAssign(amplitude.mul(mx_perlin_noise_float(p)));
    amplitude.mulAssign(diminish);
    p.mulAssign(lacunarity);
  });
  return result;
}).setLayout({
  name: "mx_fractal_noise_float",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "octaves", type: "int" },
    { name: "lacunarity", type: "float" },
    { name: "diminish", type: "float" }
  ]
});
var mx_fractal_noise_vec3$1 = Fn(([p_immutable, octaves_immutable, lacunarity_immutable, diminish_immutable]) => {
  const diminish = float(diminish_immutable).toVar();
  const lacunarity = float(lacunarity_immutable).toVar();
  const octaves = int(octaves_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const result = vec3(0).toVar();
  const amplitude = float(1).toVar();
  Loop(octaves, () => {
    result.addAssign(amplitude.mul(mx_perlin_noise_vec3(p)));
    amplitude.mulAssign(diminish);
    p.mulAssign(lacunarity);
  });
  return result;
}).setLayout({
  name: "mx_fractal_noise_vec3",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "octaves", type: "int" },
    { name: "lacunarity", type: "float" },
    { name: "diminish", type: "float" }
  ]
});
var mx_fractal_noise_vec2$1 = Fn(([p_immutable, octaves_immutable, lacunarity_immutable, diminish_immutable]) => {
  const diminish = float(diminish_immutable).toVar();
  const lacunarity = float(lacunarity_immutable).toVar();
  const octaves = int(octaves_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  return vec2(mx_fractal_noise_float$1(p, octaves, lacunarity, diminish), mx_fractal_noise_float$1(p.add(vec3(int(19), int(193), int(17))), octaves, lacunarity, diminish));
}).setLayout({
  name: "mx_fractal_noise_vec2",
  type: "vec2",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "octaves", type: "int" },
    { name: "lacunarity", type: "float" },
    { name: "diminish", type: "float" }
  ]
});
var mx_fractal_noise_vec4$1 = Fn(([p_immutable, octaves_immutable, lacunarity_immutable, diminish_immutable]) => {
  const diminish = float(diminish_immutable).toVar();
  const lacunarity = float(lacunarity_immutable).toVar();
  const octaves = int(octaves_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const c = vec3(mx_fractal_noise_vec3$1(p, octaves, lacunarity, diminish)).toVar();
  const f = float(mx_fractal_noise_float$1(p.add(vec3(int(19), int(193), int(17))), octaves, lacunarity, diminish)).toVar();
  return vec4(c, f);
}).setLayout({
  name: "mx_fractal_noise_vec4",
  type: "vec4",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "octaves", type: "int" },
    { name: "lacunarity", type: "float" },
    { name: "diminish", type: "float" }
  ]
});
var mx_worley_distance_0 = Fn(([p_immutable, x_immutable, y_immutable, xoff_immutable, yoff_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const yoff = int(yoff_immutable).toVar();
  const xoff = int(xoff_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  const tmp2 = vec3(mx_cell_noise_vec3(vec2(x.add(xoff), y.add(yoff)))).toVar();
  const off = vec2(tmp2.x, tmp2.y).toVar();
  off.subAssign(0.5);
  off.mulAssign(jitter);
  off.addAssign(0.5);
  const cellpos = vec2(vec2(float(x), float(y)).add(off)).toVar();
  const diff = vec2(cellpos.sub(p)).toVar();
  If(metric.equal(int(2)), () => {
    return abs(diff.x).add(abs(diff.y));
  });
  If(metric.equal(int(3)), () => {
    return max$1(abs(diff.x), abs(diff.y));
  });
  return dot(diff, diff);
}).setLayout({
  name: "mx_worley_distance_0",
  type: "float",
  inputs: [
    { name: "p", type: "vec2" },
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "xoff", type: "int" },
    { name: "yoff", type: "int" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_distance_1 = Fn(([p_immutable, x_immutable, y_immutable, z_immutable, xoff_immutable, yoff_immutable, zoff_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const zoff = int(zoff_immutable).toVar();
  const yoff = int(yoff_immutable).toVar();
  const xoff = int(xoff_immutable).toVar();
  const z = int(z_immutable).toVar();
  const y = int(y_immutable).toVar();
  const x = int(x_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const off = vec3(mx_cell_noise_vec3(vec3(x.add(xoff), y.add(yoff), z.add(zoff)))).toVar();
  off.subAssign(0.5);
  off.mulAssign(jitter);
  off.addAssign(0.5);
  const cellpos = vec3(vec3(float(x), float(y), float(z)).add(off)).toVar();
  const diff = vec3(cellpos.sub(p)).toVar();
  If(metric.equal(int(2)), () => {
    return abs(diff.x).add(abs(diff.y)).add(abs(diff.z));
  });
  If(metric.equal(int(3)), () => {
    return max$1(max$1(abs(diff.x), abs(diff.y)), abs(diff.z));
  });
  return dot(diff, diff);
}).setLayout({
  name: "mx_worley_distance_1",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "x", type: "int" },
    { name: "y", type: "int" },
    { name: "z", type: "int" },
    { name: "xoff", type: "int" },
    { name: "yoff", type: "int" },
    { name: "zoff", type: "int" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_distance = overloadingFn([mx_worley_distance_0, mx_worley_distance_1]);
var mx_worley_noise_float_0 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar();
  const localpos = vec2(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y)).toVar();
  const sqdist = float(1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      const dist = float(mx_worley_distance(localpos, x, y, X, Y, jitter, metric)).toVar();
      sqdist.assign(min$1(sqdist, dist));
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_float_0",
  type: "float",
  inputs: [
    { name: "p", type: "vec2" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_vec2_0 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar();
  const localpos = vec2(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y)).toVar();
  const sqdist = vec2(1e6, 1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      const dist = float(mx_worley_distance(localpos, x, y, X, Y, jitter, metric)).toVar();
      If(dist.lessThan(sqdist.x), () => {
        sqdist.y.assign(sqdist.x);
        sqdist.x.assign(dist);
      }).ElseIf(dist.lessThan(sqdist.y), () => {
        sqdist.y.assign(dist);
      });
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_vec2_0",
  type: "vec2",
  inputs: [
    { name: "p", type: "vec2" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_vec3_0 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar();
  const localpos = vec2(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y)).toVar();
  const sqdist = vec3(1e6, 1e6, 1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      const dist = float(mx_worley_distance(localpos, x, y, X, Y, jitter, metric)).toVar();
      If(dist.lessThan(sqdist.x), () => {
        sqdist.z.assign(sqdist.y);
        sqdist.y.assign(sqdist.x);
        sqdist.x.assign(dist);
      }).ElseIf(dist.lessThan(sqdist.y), () => {
        sqdist.z.assign(sqdist.y);
        sqdist.y.assign(dist);
      }).ElseIf(dist.lessThan(sqdist.z), () => {
        sqdist.z.assign(dist);
      });
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_vec3_0",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec2" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_float_1 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar(), Z = int().toVar();
  const localpos = vec3(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y), mx_floorfrac(p.z, Z)).toVar();
  const sqdist = float(1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      Loop({ start: -1, end: int(1), name: "z", condition: "<=" }, ({ z }) => {
        const dist = float(mx_worley_distance(localpos, x, y, z, X, Y, Z, jitter, metric)).toVar();
        sqdist.assign(min$1(sqdist, dist));
      });
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_float_1",
  type: "float",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_float$1 = overloadingFn([mx_worley_noise_float_0, mx_worley_noise_float_1]);
var mx_worley_noise_vec2_1 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar(), Z = int().toVar();
  const localpos = vec3(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y), mx_floorfrac(p.z, Z)).toVar();
  const sqdist = vec2(1e6, 1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      Loop({ start: -1, end: int(1), name: "z", condition: "<=" }, ({ z }) => {
        const dist = float(mx_worley_distance(localpos, x, y, z, X, Y, Z, jitter, metric)).toVar();
        If(dist.lessThan(sqdist.x), () => {
          sqdist.y.assign(sqdist.x);
          sqdist.x.assign(dist);
        }).ElseIf(dist.lessThan(sqdist.y), () => {
          sqdist.y.assign(dist);
        });
      });
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_vec2_1",
  type: "vec2",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_vec2$1 = overloadingFn([mx_worley_noise_vec2_0, mx_worley_noise_vec2_1]);
var mx_worley_noise_vec3_1 = Fn(([p_immutable, jitter_immutable, metric_immutable]) => {
  const metric = int(metric_immutable).toVar();
  const jitter = float(jitter_immutable).toVar();
  const p = vec3(p_immutable).toVar();
  const X = int().toVar(), Y = int().toVar(), Z = int().toVar();
  const localpos = vec3(mx_floorfrac(p.x, X), mx_floorfrac(p.y, Y), mx_floorfrac(p.z, Z)).toVar();
  const sqdist = vec3(1e6, 1e6, 1e6).toVar();
  Loop({ start: -1, end: int(1), name: "x", condition: "<=" }, ({ x }) => {
    Loop({ start: -1, end: int(1), name: "y", condition: "<=" }, ({ y }) => {
      Loop({ start: -1, end: int(1), name: "z", condition: "<=" }, ({ z }) => {
        const dist = float(mx_worley_distance(localpos, x, y, z, X, Y, Z, jitter, metric)).toVar();
        If(dist.lessThan(sqdist.x), () => {
          sqdist.z.assign(sqdist.y);
          sqdist.y.assign(sqdist.x);
          sqdist.x.assign(dist);
        }).ElseIf(dist.lessThan(sqdist.y), () => {
          sqdist.z.assign(sqdist.y);
          sqdist.y.assign(dist);
        }).ElseIf(dist.lessThan(sqdist.z), () => {
          sqdist.z.assign(dist);
        });
      });
    });
  });
  If(metric.equal(int(0)), () => {
    sqdist.assign(sqrt(sqdist));
  });
  return sqdist;
}).setLayout({
  name: "mx_worley_noise_vec3_1",
  type: "vec3",
  inputs: [
    { name: "p", type: "vec3" },
    { name: "jitter", type: "float" },
    { name: "metric", type: "int" }
  ]
});
var mx_worley_noise_vec3$1 = overloadingFn([mx_worley_noise_vec3_0, mx_worley_noise_vec3_1]);
var mx_hsvtorgb = Fn(([hsv]) => {
  const s = hsv.y;
  const v = hsv.z;
  const result = vec3().toVar();
  If(s.lessThan(1e-4), () => {
    result.assign(vec3(v, v, v));
  }).Else(() => {
    let h = hsv.x;
    h = h.sub(floor(h)).mul(6).toVar();
    const hi = int(trunc(h));
    const f = h.sub(float(hi));
    const p = v.mul(s.oneMinus());
    const q = v.mul(s.mul(f).oneMinus());
    const t = v.mul(s.mul(f.oneMinus()).oneMinus());
    If(hi.equal(int(0)), () => {
      result.assign(vec3(v, t, p));
    }).ElseIf(hi.equal(int(1)), () => {
      result.assign(vec3(q, v, p));
    }).ElseIf(hi.equal(int(2)), () => {
      result.assign(vec3(p, v, t));
    }).ElseIf(hi.equal(int(3)), () => {
      result.assign(vec3(p, q, v));
    }).ElseIf(hi.equal(int(4)), () => {
      result.assign(vec3(t, p, v));
    }).Else(() => {
      result.assign(vec3(v, p, q));
    });
  });
  return result;
}).setLayout({
  name: "mx_hsvtorgb",
  type: "vec3",
  inputs: [
    { name: "hsv", type: "vec3" }
  ]
});
var mx_rgbtohsv = Fn(([c_immutable]) => {
  const c = vec3(c_immutable).toVar();
  const r = float(c.x).toVar();
  const g = float(c.y).toVar();
  const b = float(c.z).toVar();
  const mincomp = float(min$1(r, min$1(g, b))).toVar();
  const maxcomp = float(max$1(r, max$1(g, b))).toVar();
  const delta = float(maxcomp.sub(mincomp)).toVar();
  const h = float().toVar(), s = float().toVar(), v = float().toVar();
  v.assign(maxcomp);
  If(maxcomp.greaterThan(0), () => {
    s.assign(delta.div(maxcomp));
  }).Else(() => {
    s.assign(0);
  });
  If(s.lessThanEqual(0), () => {
    h.assign(0);
  }).Else(() => {
    If(r.greaterThanEqual(maxcomp), () => {
      h.assign(g.sub(b).div(delta));
    }).ElseIf(g.greaterThanEqual(maxcomp), () => {
      h.assign(add(2, b.sub(r).div(delta)));
    }).Else(() => {
      h.assign(add(4, r.sub(g).div(delta)));
    });
    h.mulAssign(1 / 6);
    If(h.lessThan(0), () => {
      h.addAssign(1);
    });
  });
  return vec3(h, s, v);
}).setLayout({
  name: "mx_rgbtohsv",
  type: "vec3",
  inputs: [
    { name: "c", type: "vec3" }
  ]
});
var mx_srgb_texture_to_lin_rec709 = Fn(([color_immutable]) => {
  const color2 = vec3(color_immutable).toVar();
  const isAbove = bvec3(greaterThan(color2, vec3(0.04045))).toVar();
  const linSeg = vec3(color2.div(12.92)).toVar();
  const powSeg = vec3(pow(max$1(color2.add(vec3(0.055)), vec3(0)).div(1.055), vec3(2.4))).toVar();
  return mix(linSeg, powSeg, isAbove);
}).setLayout({
  name: "mx_srgb_texture_to_lin_rec709",
  type: "vec3",
  inputs: [
    { name: "color", type: "vec3" }
  ]
});
var getParallaxCorrectNormal = Fn(([normal2, cubeSize, cubePos]) => {
  const nDir = normalize(normal2).toVar("nDir");
  const rbmax = sub(float(0.5).mul(cubeSize.sub(cubePos)), positionWorld).div(nDir).toVar("rbmax");
  const rbmin = sub(float(-0.5).mul(cubeSize.sub(cubePos)), positionWorld).div(nDir).toVar("rbmin");
  const rbminmax = vec3().toVar("rbminmax");
  rbminmax.x = nDir.x.greaterThan(float(0)).select(rbmax.x, rbmin.x);
  rbminmax.y = nDir.y.greaterThan(float(0)).select(rbmax.y, rbmin.y);
  rbminmax.z = nDir.z.greaterThan(float(0)).select(rbmax.z, rbmin.z);
  const correction = min$1(min$1(rbminmax.x, rbminmax.y), rbminmax.z).toVar("correction");
  const boxIntersection = positionWorld.add(nDir.mul(correction)).toVar("boxIntersection");
  return boxIntersection.sub(cubePos);
});
var getShIrradianceAt = Fn(([normal2, shCoefficients]) => {
  const x = normal2.x, y = normal2.y, z = normal2.z;
  let result = shCoefficients.element(0).mul(0.886227);
  result = result.add(shCoefficients.element(1).mul(2 * 0.511664).mul(y));
  result = result.add(shCoefficients.element(2).mul(2 * 0.511664).mul(z));
  result = result.add(shCoefficients.element(3).mul(2 * 0.511664).mul(x));
  result = result.add(shCoefficients.element(4).mul(2 * 0.429043).mul(x).mul(y));
  result = result.add(shCoefficients.element(5).mul(2 * 0.429043).mul(y).mul(z));
  result = result.add(shCoefficients.element(6).mul(z.mul(z).mul(0.743125).sub(0.247708)));
  result = result.add(shCoefficients.element(7).mul(2 * 0.429043).mul(x).mul(z));
  result = result.add(shCoefficients.element(8).mul(0.429043).mul(mul(x, x).sub(mul(y, y))));
  return result;
});
var _clearColor$1 = new Color4();
var _flatCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
var _cubeCamera = new PerspectiveCamera(90, 1);
var _clearColor = new Color2();
var PHI = (1 + Math.sqrt(5)) / 2;
var INV_PHI = 1 / PHI;
var _axisDirections = [
  new Vector32(-PHI, INV_PHI, 0),
  new Vector32(PHI, INV_PHI, 0),
  new Vector32(-INV_PHI, 0, PHI),
  new Vector32(INV_PHI, 0, PHI),
  new Vector32(0, PHI, -INV_PHI),
  new Vector32(0, PHI, INV_PHI),
  new Vector32(-1, 1, -1),
  new Vector32(1, 1, -1),
  new Vector32(-1, 1, 1),
  new Vector32(1, 1, 1)
];
var direction = getDirection(uv(), attribute("faceIndex")).normalize();
var outputDirection = vec3(direction.x, direction.y.negate(), direction.z);
var NodeFunctionInput = class {
  constructor(type, name, count = null, qualifier = "", isConst = false) {
    this.type = type;
    this.name = name;
    this.count = count;
    this.qualifier = qualifier;
    this.isConst = isConst;
  }
};
NodeFunctionInput.isNodeFunctionInput = true;
var _matrix41 = new Matrix4();
var _matrix42 = new Matrix4();
var NodeFunction = class {
  constructor(type, inputs, name = "", precision = "") {
    this.type = type;
    this.inputs = inputs;
    this.name = name;
    this.precision = precision;
  }
  getCode() {
    console.warn("Abstract function.");
  }
};
NodeFunction.isNodeFunction = true;
var _defaultLights = new LightsNode();
var _scene = new Scene();
var _drawingBufferSize = new Vector22();
var _screen = new Vector4();
var _frustum = new Frustum();
var _projScreenMatrix = new Matrix4();
var _vector4 = new Vector4();
var _compareToWebGPU = {
  [NeverCompare]: "never",
  [LessCompare]: "less",
  [EqualCompare]: "equal",
  [LessEqualCompare]: "less-equal",
  [GreaterCompare]: "greater",
  [GreaterEqualCompare]: "greater-equal",
  [AlwaysCompare]: "always",
  [NotEqualCompare]: "not-equal"
};
var GPUShaderStage = self.GPUShaderStage;
var gpuShaderStageLib = {
  "vertex": GPUShaderStage ? GPUShaderStage.VERTEX : 1,
  "fragment": GPUShaderStage ? GPUShaderStage.FRAGMENT : 2,
  "compute": GPUShaderStage ? GPUShaderStage.COMPUTE : 4
};
var wgslPolyfill = {
  tsl_xor: new CodeNode("fn tsl_xor( a : bool, b : bool ) -> bool { return ( a || b ) && !( a && b ); }"),
  mod_float: new CodeNode("fn tsl_mod_float( x : f32, y : f32 ) -> f32 { return x - y * floor( x / y ); }"),
  mod_vec2: new CodeNode("fn tsl_mod_vec2( x : vec2f, y : vec2f ) -> vec2f { return x - y * floor( x / y ); }"),
  mod_vec3: new CodeNode("fn tsl_mod_vec3( x : vec3f, y : vec3f ) -> vec3f { return x - y * floor( x / y ); }"),
  mod_vec4: new CodeNode("fn tsl_mod_vec4( x : vec4f, y : vec4f ) -> vec4f { return x - y * floor( x / y ); }"),
  equals_bool: new CodeNode("fn tsl_equals_bool( a : bool, b : bool ) -> bool { return a == b; }"),
  equals_bvec2: new CodeNode("fn tsl_equals_bvec2( a : vec2f, b : vec2f ) -> vec2<bool> { return vec2<bool>( a.x == b.x, a.y == b.y ); }"),
  equals_bvec3: new CodeNode("fn tsl_equals_bvec3( a : vec3f, b : vec3f ) -> vec3<bool> { return vec3<bool>( a.x == b.x, a.y == b.y, a.z == b.z ); }"),
  equals_bvec4: new CodeNode("fn tsl_equals_bvec4( a : vec4f, b : vec4f ) -> vec4<bool> { return vec4<bool>( a.x == b.x, a.y == b.y, a.z == b.z, a.w == b.w ); }"),
  repeatWrapping: new CodeNode(
    /* wgsl */
    `
fn tsl_repeatWrapping( uv : vec2<f32>, dimension : vec2<u32> ) -> vec2<u32> {

	let uvScaled = vec2<u32>( uv * vec2<f32>( dimension ) );

	return ( ( uvScaled % dimension ) + dimension ) % dimension;

}
`
  ),
  biquadraticTexture: new CodeNode(
    /* wgsl */
    `
fn tsl_biquadraticTexture( map : texture_2d<f32>, coord : vec2f, level : i32 ) -> vec4f {

	let iRes = vec2i( textureDimensions( map, level ) );
	let res = vec2f( iRes );

	let uvScaled = coord * res;
	let uvWrapping = ( ( uvScaled % res ) + res ) % res;

	// https://www.shadertoy.com/view/WtyXRy

	let uv = uvWrapping - 0.5;
	let iuv = floor( uv );
	let f = fract( uv );

	let rg1 = textureLoad( map, vec2i( iuv + vec2( 0.5, 0.5 ) ) % iRes, level );
	let rg2 = textureLoad( map, vec2i( iuv + vec2( 1.5, 0.5 ) ) % iRes, level );
	let rg3 = textureLoad( map, vec2i( iuv + vec2( 0.5, 1.5 ) ) % iRes, level );
	let rg4 = textureLoad( map, vec2i( iuv + vec2( 1.5, 1.5 ) ) % iRes, level );

	return mix( mix( rg1, rg2, f.x ), mix( rg3, rg4, f.x ), f.y );

}
`
  )
};
var wgslMethods = {
  dFdx: "dpdx",
  dFdy: "- dpdy",
  mod_float: "tsl_mod_float",
  mod_vec2: "tsl_mod_vec2",
  mod_vec3: "tsl_mod_vec3",
  mod_vec4: "tsl_mod_vec4",
  equals_bool: "tsl_equals_bool",
  equals_bvec2: "tsl_equals_bvec2",
  equals_bvec3: "tsl_equals_bvec3",
  equals_bvec4: "tsl_equals_bvec4",
  inversesqrt: "inverseSqrt",
  bitcast: "bitcast<f32>"
};
if (/Windows/g.test(navigator.userAgent)) {
  wgslPolyfill.pow_float = new CodeNode("fn tsl_pow_float( a : f32, b : f32 ) -> f32 { return select( -pow( -a, b ), pow( a, b ), a > 0.0 ); }");
  wgslPolyfill.pow_vec2 = new CodeNode("fn tsl_pow_vec2( a : vec2f, b : vec2f ) -> vec2f { return vec2f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ) ); }", [wgslPolyfill.pow_float]);
  wgslPolyfill.pow_vec3 = new CodeNode("fn tsl_pow_vec3( a : vec3f, b : vec3f ) -> vec3f { return vec3f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ) ); }", [wgslPolyfill.pow_float]);
  wgslPolyfill.pow_vec4 = new CodeNode("fn tsl_pow_vec4( a : vec4f, b : vec4f ) -> vec4f { return vec4f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ), tsl_pow_float( a.w, b.w ) ); }", [wgslPolyfill.pow_float]);
  wgslMethods.pow_float = "tsl_pow_float";
  wgslMethods.pow_vec2 = "tsl_pow_vec2";
  wgslMethods.pow_vec3 = "tsl_pow_vec3";
  wgslMethods.pow_vec4 = "tsl_pow_vec4";
}
var diagnostics = "";
if (/Firefox|Deno/g.test(navigator.userAgent) !== true) {
  diagnostics += "diagnostic( off, derivative_uniformity );\n";
}
var _material = new NodeMaterial();
var _quadMesh = new QuadMesh(_material);
function saveRendererState(renderer, state = {}) {
  state.toneMapping = renderer.toneMapping;
  state.toneMappingExposure = renderer.toneMappingExposure;
  state.outputColorSpace = renderer.outputColorSpace;
  state.renderTarget = renderer.getRenderTarget();
  state.activeCubeFace = renderer.getActiveCubeFace();
  state.activeMipmapLevel = renderer.getActiveMipmapLevel();
  state.renderObjectFunction = renderer.getRenderObjectFunction();
  state.pixelRatio = renderer.getPixelRatio();
  state.mrt = renderer.getMRT();
  state.clearColor = renderer.getClearColor(state.clearColor || new Color2());
  state.clearAlpha = renderer.getClearAlpha();
  state.autoClear = renderer.autoClear;
  state.scissorTest = renderer.getScissorTest();
  return state;
}
function resetRendererState(renderer, state) {
  state = saveRendererState(renderer, state);
  renderer.setMRT(null);
  renderer.setRenderObjectFunction(null);
  renderer.setClearColor(0, 1);
  renderer.autoClear = true;
  return state;
}
function restoreRendererState(renderer, state) {
  renderer.toneMapping = state.toneMapping;
  renderer.toneMappingExposure = state.toneMappingExposure;
  renderer.outputColorSpace = state.outputColorSpace;
  renderer.setRenderTarget(state.renderTarget, state.activeCubeFace, state.activeMipmapLevel);
  renderer.setRenderObjectFunction(state.renderObjectFunction);
  renderer.setPixelRatio(state.pixelRatio);
  renderer.setMRT(state.mrt);
  renderer.setClearColor(state.clearColor, state.clearAlpha);
  renderer.autoClear = state.autoClear;
  renderer.setScissorTest(state.scissorTest);
}
function saveRendererAndSceneState(renderer, scene, state = {}) {
  state = saveRendererState(renderer, state);
  state.background = scene.background;
  state.backgroundNode = scene.backgroundNode;
  state.overrideMaterial = scene.overrideMaterial;
  return state;
}
function resetRendererAndSceneState(renderer, scene, state) {
  state = saveRendererAndSceneState(renderer, scene, state);
  scene.background = null;
  scene.backgroundNode = null;
  scene.overrideMaterial = null;
  return state;
}
function restoreRendererAndSceneState(renderer, scene, state) {
  restoreRendererState(renderer, state);
  scene.background = state.background;
  scene.backgroundNode = state.backgroundNode;
  scene.overrideMaterial = state.overrideMaterial;
}
var PostProcessingUtils = Object.freeze({
  __proto__: null,
  resetRendererAndSceneState,
  resetRendererState,
  restoreRendererAndSceneState,
  restoreRendererState,
  saveRendererAndSceneState,
  saveRendererState
});
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: REVISION
  } }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    console.warn("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = REVISION;
  }
}

// node_modules/three/examples/jsm/objects/Water2Mesh.js
var WaterMesh = class extends Mesh {
  constructor(geometry, options = {}) {
    const material = new NodeMaterial();
    super(geometry, material);
    this.isWater = true;
    material.fragmentNode = new WaterNode(options, this);
  }
};
var WaterNode = class extends TempNode {
  constructor(options, waterBody) {
    super("vec4");
    this.waterBody = waterBody;
    this.normalMap0 = texture(options.normalMap0);
    this.normalMap1 = texture(options.normalMap1);
    this.flowMap = texture(options.flowMap !== void 0 ? options.flowMap : null);
    this.color = uniform(options.color !== void 0 ? new Color(options.color) : new Color(16777215));
    this.flowDirection = uniform(options.flowDirection !== void 0 ? options.flowDirection : new Vector2(1, 0));
    this.flowSpeed = uniform(options.flowSpeed !== void 0 ? options.flowSpeed : 0.03);
    this.reflectivity = uniform(options.reflectivity !== void 0 ? options.reflectivity : 0.02);
    this.scale = uniform(options.scale !== void 0 ? options.scale : 1);
    this.flowConfig = uniform(new Vector3());
    this.updateBeforeType = NodeUpdateType.RENDER;
    this._cycle = 0.15;
    this._halfCycle = this._cycle * 0.5;
    this._USE_FLOW = options.flowMap !== void 0;
  }
  updateFlow(delta) {
    this.flowConfig.value.x += this.flowSpeed.value * delta;
    this.flowConfig.value.y = this.flowConfig.value.x + this._halfCycle;
    if (this.flowConfig.value.x >= this._cycle) {
      this.flowConfig.value.x = 0;
      this.flowConfig.value.y = this._halfCycle;
    } else if (this.flowConfig.value.y >= this._cycle) {
      this.flowConfig.value.y = this.flowConfig.value.y - this._cycle;
    }
    this.flowConfig.value.z = this._halfCycle;
  }
  updateBefore(frame) {
    this.updateFlow(frame.deltaTime);
  }
  setup() {
    const outputNode = Fn(() => {
      const flowMapOffset0 = this.flowConfig.x;
      const flowMapOffset1 = this.flowConfig.y;
      const halfCycle = this.flowConfig.z;
      const toEye = normalize(cameraPosition.sub(positionWorld));
      let flow;
      if (this._USE_FLOW === true) {
        flow = this.flowMap.rg.mul(2).sub(1);
      } else {
        flow = vec2(this.flowDirection.x, this.flowDirection.y);
      }
      flow.x.mulAssign(-1);
      const uvs = uv();
      const normalUv0 = uvs.mul(this.scale).add(flow.mul(flowMapOffset0));
      const normalUv1 = uvs.mul(this.scale).add(flow.mul(flowMapOffset1));
      const normalColor0 = this.normalMap0.uv(normalUv0);
      const normalColor1 = this.normalMap1.uv(normalUv1);
      const flowLerp = abs(halfCycle.sub(flowMapOffset0)).div(halfCycle);
      const normalColor = mix(normalColor0, normalColor1, flowLerp);
      const normal2 = normalize(vec3(normalColor.r.mul(2).sub(1), normalColor.b, normalColor.g.mul(2).sub(1)));
      const theta = max$1(dot(toEye, normal2), 0);
      const reflectance = pow(float(1).sub(theta), 5).mul(float(1).sub(this.reflectivity)).add(this.reflectivity);
      const offset = normal2.xz.mul(0.05).toVar();
      const reflectionSampler = reflector();
      this.waterBody.add(reflectionSampler.target);
      reflectionSampler.uvNode = reflectionSampler.uvNode.add(offset);
      const refractorUV = screenUV.add(offset);
      const refractionSampler = viewportSharedTexture(viewportSafeUV(refractorUV));
      return vec4(this.color, 1).mul(mix(refractionSampler, reflectionSampler, reflectance));
    })();
    return outputNode;
  }
};
export {
  WaterMesh
};
/*! Bundled license information:

three/build/three.webgpu.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=three_addons_objects_Water2Mesh__js.js.map

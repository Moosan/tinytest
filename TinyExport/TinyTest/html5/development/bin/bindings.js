/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.MainGroup = entities.game.MainGroup || {};
entities.game.MainGroup.Component = function() {
};
entities.game.MainGroup.Component.prototype = Object.create(null);
entities.game.MainGroup.Component.prototype.constructor = entities.game.MainGroup.Component;
Object.defineProperties(entities.game.MainGroup.Component.prototype, {
});
entities.game.MainGroup.Component._size = 1;
entities.game.MainGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MainGroup.Component.prototype);
  return v;
};
entities.game.MainGroup.Component._toPtr = function(ptr, v) {
};
entities.game.MainGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MainGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MainGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MainGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MainGroup.Component.StorageView.prototype = Object.create(null);
entities.game.MainGroup.Component.StorageView.prototype.constructor = entities.game.MainGroup.Component.StorageView;
entities.game.MainGroup.Component._view = entities.game.MainGroup.Component.StorageView;
entities.game.MainGroup.Component.StorageView._isSharedComp = entities.game.MainGroup.Component._isSharedComp = false;
entities.game.MainGroup.Component.StorageView._fromPtr = entities.game.MainGroup.Component._fromPtr;
entities.game.MainGroup.Component.StorageView._toPtr = entities.game.MainGroup.Component._toPtr;
entities.game.MainGroup.Component.StorageView._tempHeapPtr = entities.game.MainGroup.Component._tempHeapPtr;
entities.game.MainGroup.Component.StorageView._size = entities.game.MainGroup.Component._size;
entities.game.MainGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MainGroup.Component.StorageView.prototype, {
});
entities.game.MainGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MainGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.MainGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.MainGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MainGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.MainGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.MainGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MainGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MainGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.MainGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MainGroup.Component.cid; } } });
var game = game || {};
game.Akeome = function(arg0) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
};
game.Akeome.prototype = Object.create(null);
game.Akeome.prototype.constructor = game.Akeome;
Object.defineProperties(game.Akeome.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
});
game.Akeome._size = 4;
game.Akeome._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Akeome.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  return v;
};
game.Akeome._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
};
game.Akeome._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
};
game.Akeome._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Akeome._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Akeome.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Akeome.StorageView.prototype = Object.create(null);
game.Akeome.StorageView.prototype.constructor = game.Akeome.StorageView;
game.Akeome._view = game.Akeome.StorageView;
game.Akeome.StorageView._isSharedComp = game.Akeome._isSharedComp = false;
game.Akeome.StorageView._fromPtr = game.Akeome._fromPtr;
game.Akeome.StorageView._toPtr = game.Akeome._toPtr;
game.Akeome.StorageView._tempHeapPtr = game.Akeome._tempHeapPtr;
game.Akeome.StorageView._size = game.Akeome._size;
game.Akeome.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Akeome.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.Akeome._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Akeome is a POD type, so a JavaScript side copy constructor game.Akeome._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Akeome._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Akeome', 4, [
    {name: 'speed', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Akeome, { cid: { configurable: true, get: function() { delete game.Akeome.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Akeome.cid = Module._ut_component_register_cid_with_type(game.Akeome._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Akeome.StorageView, { cid: { configurable: true, get: function() { return game.Akeome.cid; } } });
game.Akeome.speed = { $ofs:0, $t:"float", $c:game.Akeome };
game.IsGround = function(arg0) {
  this._isGround = (arg0 ? true : false);
};
game.IsGround.prototype = Object.create(null);
game.IsGround.prototype.constructor = game.IsGround;
Object.defineProperties(game.IsGround.prototype, {
  isGround: {
    get: function() { return this._isGround; },
    set: function(v) { this._isGround = (v ? true : false); },
  },
});
game.IsGround._size = 1;
game.IsGround._fromPtr = function(ptr, v) {
  v = v || Object.create(game.IsGround.prototype);
  v._isGround = (HEAP8[ptr+0]?true:false);
  return v;
};
game.IsGround._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isGround)?1:0;
};
game.IsGround._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isGround)?1:0;
};
game.IsGround._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.IsGround._toTempHeapPtr(ptr, v);
  return ptr;
};
game.IsGround.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.IsGround.StorageView.prototype = Object.create(null);
game.IsGround.StorageView.prototype.constructor = game.IsGround.StorageView;
game.IsGround._view = game.IsGround.StorageView;
game.IsGround.StorageView._isSharedComp = game.IsGround._isSharedComp = false;
game.IsGround.StorageView._fromPtr = game.IsGround._fromPtr;
game.IsGround.StorageView._toPtr = game.IsGround._toPtr;
game.IsGround.StorageView._tempHeapPtr = game.IsGround._tempHeapPtr;
game.IsGround.StorageView._size = game.IsGround._size;
game.IsGround.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.IsGround.StorageView.prototype, {
  isGround: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
});
game.IsGround._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.IsGround is a POD type, so a JavaScript side copy constructor game.IsGround._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.IsGround._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.IsGround', 1, [
    {name: 'isGround', offset: 0, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.IsGround, { cid: { configurable: true, get: function() { delete game.IsGround.cid; var offsetsPtr = 0, offsetsCount = 0; return game.IsGround.cid = Module._ut_component_register_cid_with_type(game.IsGround._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.IsGround.StorageView, { cid: { configurable: true, get: function() { return game.IsGround.cid; } } });
game.IsGround.isGround = { $ofs:0, $t:"bool", $c:game.IsGround };
game.Move = function(arg0) {
  this._upForce = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._upForce.copy(arg0); };
};
game.Move.prototype = Object.create(null);
game.Move.prototype.constructor = game.Move;
Object.defineProperties(game.Move.prototype, {
  upForce: {
    get: function() { return this._upForce; },
    set: function(v) { this._upForce.copy(v); },
  },
});
game.Move._size = 8;
game.Move._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Move.prototype);
  v._upForce = ut._utils.vec2FromHeap(null, ptr+0);
  return v;
};
game.Move._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.upForce, ptr+0);
};
game.Move._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.upForce, ptr+0);
};
game.Move._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Move._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Move.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Move.StorageView.prototype = Object.create(null);
game.Move.StorageView.prototype.constructor = game.Move.StorageView;
game.Move._view = game.Move.StorageView;
game.Move.StorageView._isSharedComp = game.Move._isSharedComp = false;
game.Move.StorageView._fromPtr = game.Move._fromPtr;
game.Move.StorageView._toPtr = game.Move._toPtr;
game.Move.StorageView._tempHeapPtr = game.Move._tempHeapPtr;
game.Move.StorageView._size = game.Move._size;
game.Move.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Move.StorageView.prototype, {
  upForce: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
});
game.Move._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Move is a POD type, so a JavaScript side copy constructor game.Move._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Move._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Move', 8, [
    {name: 'upForce', offset: 0, type: ut.meta.getType('ut.Math.Vector2')}
  ]);
})();
Object.defineProperties(game.Move, { cid: { configurable: true, get: function() { delete game.Move.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Move.cid = Module._ut_component_register_cid_with_type(game.Move._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Move.StorageView, { cid: { configurable: true, get: function() { return game.Move.cid; } } });
game.Move.upForce = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Move };
game.Move.upForce.y = { $ofs:4, $t:"float", $c:game.Move };
game.Move.upForce.x = { $ofs:0, $t:"float", $c:game.Move };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.PostProcessing = function() {
};
ut.Core2D.layers.PostProcessing.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.prototype.constructor = ut.Core2D.layers.PostProcessing;
Object.defineProperties(ut.Core2D.layers.PostProcessing.prototype, {
});
ut.Core2D.layers.PostProcessing._size = 1;
ut.Core2D.layers.PostProcessing._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.PostProcessing.prototype);
  return v;
};
ut.Core2D.layers.PostProcessing._toPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.PostProcessing._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.PostProcessing.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.PostProcessing.StorageView.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.StorageView.prototype.constructor = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing._view = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing.StorageView._isSharedComp = ut.Core2D.layers.PostProcessing._isSharedComp = false;
ut.Core2D.layers.PostProcessing.StorageView._fromPtr = ut.Core2D.layers.PostProcessing._fromPtr;
ut.Core2D.layers.PostProcessing.StorageView._toPtr = ut.Core2D.layers.PostProcessing._toPtr;
ut.Core2D.layers.PostProcessing.StorageView._tempHeapPtr = ut.Core2D.layers.PostProcessing._tempHeapPtr;
ut.Core2D.layers.PostProcessing.StorageView._size = ut.Core2D.layers.PostProcessing._size;
ut.Core2D.layers.PostProcessing.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView.prototype, {
});
ut.Core2D.layers.PostProcessing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.PostProcessing is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.PostProcessing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.PostProcessing._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.PostProcessing', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.PostProcessing, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.PostProcessing.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.PostProcessing.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.PostProcessing._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.PostProcessing.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTile = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTile.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.prototype.constructor = ut.EditorExtensions.AssetReferenceTile;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTile._size = 24;
ut.EditorExtensions.AssetReferenceTile._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTile.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTile._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile._view = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTile._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTile.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTile._fromPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTile._toPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTile._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._size = ut.EditorExtensions.AssetReferenceTile._size;
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTile._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTile._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTile._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTile', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTile.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTile.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTile._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTile.cid; } } });
ut.EditorExtensions.AssetReferenceTile.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.AkeomeBehavior_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.AkeomeBehavior_State.prototype = Object.create(null);
game.AkeomeBehavior_State.prototype.constructor = game.AkeomeBehavior_State;
Object.defineProperties(game.AkeomeBehavior_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.AkeomeBehavior_State._size = 4;
game.AkeomeBehavior_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.AkeomeBehavior_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.AkeomeBehavior_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.AkeomeBehavior_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.AkeomeBehavior_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.AkeomeBehavior_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.AkeomeBehavior_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.AkeomeBehavior_State.StorageView.prototype = Object.create(null);
game.AkeomeBehavior_State.StorageView.prototype.constructor = game.AkeomeBehavior_State.StorageView;
game.AkeomeBehavior_State._view = game.AkeomeBehavior_State.StorageView;
game.AkeomeBehavior_State.StorageView._isSharedComp = game.AkeomeBehavior_State._isSharedComp = false;
game.AkeomeBehavior_State.StorageView._fromPtr = game.AkeomeBehavior_State._fromPtr;
game.AkeomeBehavior_State.StorageView._toPtr = game.AkeomeBehavior_State._toPtr;
game.AkeomeBehavior_State.StorageView._tempHeapPtr = game.AkeomeBehavior_State._tempHeapPtr;
game.AkeomeBehavior_State.StorageView._size = game.AkeomeBehavior_State._size;
game.AkeomeBehavior_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.AkeomeBehavior_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.AkeomeBehavior_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.AkeomeBehavior_State is a POD type, so a JavaScript side copy constructor game.AkeomeBehavior_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.AkeomeBehavior_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.AkeomeBehavior_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.AkeomeBehavior_State, { cid: { configurable: true, get: function() { delete game.AkeomeBehavior_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.AkeomeBehavior_State.cid = Module._ut_component_register_cid_with_type(game.AkeomeBehavior_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.AkeomeBehavior_State.StorageView, { cid: { configurable: true, get: function() { return game.AkeomeBehavior_State.cid; } } });
game.AkeomeBehavior_State.initialized = { $ofs:0, $t:"bool", $c:game.AkeomeBehavior_State };
game.AkeomeBehavior_State.enabled = { $ofs:1, $t:"bool", $c:game.AkeomeBehavior_State };
game.AkeomeBehavior_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.AkeomeBehavior_State };
game.AkeomeBehavior_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.AkeomeBehavior_State };
game.PlayerBehavior_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.PlayerBehavior_State.prototype = Object.create(null);
game.PlayerBehavior_State.prototype.constructor = game.PlayerBehavior_State;
Object.defineProperties(game.PlayerBehavior_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.PlayerBehavior_State._size = 4;
game.PlayerBehavior_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayerBehavior_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.PlayerBehavior_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.PlayerBehavior_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.PlayerBehavior_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.PlayerBehavior_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayerBehavior_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayerBehavior_State.StorageView.prototype = Object.create(null);
game.PlayerBehavior_State.StorageView.prototype.constructor = game.PlayerBehavior_State.StorageView;
game.PlayerBehavior_State._view = game.PlayerBehavior_State.StorageView;
game.PlayerBehavior_State.StorageView._isSharedComp = game.PlayerBehavior_State._isSharedComp = false;
game.PlayerBehavior_State.StorageView._fromPtr = game.PlayerBehavior_State._fromPtr;
game.PlayerBehavior_State.StorageView._toPtr = game.PlayerBehavior_State._toPtr;
game.PlayerBehavior_State.StorageView._tempHeapPtr = game.PlayerBehavior_State._tempHeapPtr;
game.PlayerBehavior_State.StorageView._size = game.PlayerBehavior_State._size;
game.PlayerBehavior_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.PlayerBehavior_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.PlayerBehavior_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayerBehavior_State is a POD type, so a JavaScript side copy constructor game.PlayerBehavior_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PlayerBehavior_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PlayerBehavior_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.PlayerBehavior_State, { cid: { configurable: true, get: function() { delete game.PlayerBehavior_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerBehavior_State.cid = Module._ut_component_register_cid_with_type(game.PlayerBehavior_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PlayerBehavior_State.StorageView, { cid: { configurable: true, get: function() { return game.PlayerBehavior_State.cid; } } });
game.PlayerBehavior_State.initialized = { $ofs:0, $t:"bool", $c:game.PlayerBehavior_State };
game.PlayerBehavior_State.enabled = { $ofs:1, $t:"bool", $c:game.PlayerBehavior_State };
game.PlayerBehavior_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.PlayerBehavior_State };
game.PlayerBehavior_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.PlayerBehavior_State };
game.AkeomeBehavior_OnEntityUpdateJS = ut.System.define({
  name: "game.AkeomeBehavior_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.PlayerBehavior_OnEntityUpdateJS = ut.System.define({
  name: "game.PlayerBehavior_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});




((function (ut) {

    var ComponentSystem = /** @class */ (function () {
        
        function ComponentSystem() {}

        ComponentSystem.prototype._MakeSystemFn = function () {
            var _this = this;
            return function (scheduler, world) {
                _this.scheduler = scheduler;
                _this.world = world;
                _this.OnUpdate();
            };
        };
        return ComponentSystem;
    }());
    ut.ComponentSystem = ComponentSystem;

    function executeAfter() { }
    ut.executeAfter = executeAfter;

    function executeBefore() { }
    ut.executeBefore = executeBefore;

    function requiredComponents() { }
    ut.requiredComponents = requiredComponents;

    function optionalComponents() { }
    ut.optionalComponents = optionalComponents;

    var EntityFilter = /** @class */ (function () {
        function EntityFilter() {}
        EntityFilter.prototype.Read = function (world, entity) {};
        EntityFilter.prototype.Reset = function () {};
        EntityFilter.prototype.ForEach = function (world, callback) {
            var _this = this;
            world.forEach(this.constructor._Components, function(entity) {
                _this.Read(world, entity);
                callback(entity);
                if (world.exists(entity)) {
                    _this.Write(world, entity);
                }
            });
        };
        return EntityFilter;
    }());
    ut.EntityFilter = EntityFilter;

    function usingFilters() { }
    ut.usingFilters = usingFilters;

    var ComponentBehaviour = /** @class */ (function () {
        function ComponentBehaviour() { }
        ComponentBehaviour.prototype.IsEnabled = function (world, entity) {
            var stateType = this.constructor._StateType;
            return world.hasComponent(entity, stateType) && world.getComponentData(entity, stateType).enabled;
        };
        ComponentBehaviour.prototype.Enable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (!state.enabled) {
                state.enabled = true;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype.Disable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (state.enabled) {
                state.enabled = false;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype._MakeOnEntityEnable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onEnableCalled && state.enabled) {
                            state.onEnableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityEnable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityUpdate = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                        if (hasState) {
                            _this.world.setComponentData(entity, state);
                        } else {
                            _this.world.addComponentData(entity, state);
                        }
                    }
                    if (state.enabled) {
                        _this.entity = entity;
                        _this.OnEntityUpdate();
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityDisable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onDisableCalled && !state.enabled) {
                            state.onDisableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityDisable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        return ComponentBehaviour;
    }());
    ut.ComponentBehaviour = ComponentBehaviour;


})(ut || (ut = {})));

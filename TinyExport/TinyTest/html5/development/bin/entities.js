﻿/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyTest
 */

entities.game.DreamGroup.name = "DreamGroup";
entities.game.DreamGroup.load = function(world) {
    var arch0 = world.createArchetype(game.Dream, this.Component, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Entity");
    var c0 = new game.Dream();
    world.setComponentData(e0, c0);
    return [e0];
}

entities.game.End.name = "End";
entities.game.End.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Sprite");
    var e1 = world.createEntity(arch0);
    world.setEntityName(e1, "Sprite1");
    var arch1 = world.createArchetype(game.ResultText, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.NativeFont, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleNativeFont)
    var e2 = world.createEntity(arch1);
    world.setEntityName(e2, "Sprite2");
    var arch2 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e3 = world.createEntity(arch2);
    world.setEntityName(e3, "Camera");
    var e4 = world.createEntity(arch0);
    world.setEntityName(e4, "Sprite3");
    var e5 = world.createEntity(arch0);
    world.setEntityName(e5, "Sprite4");
    var arch3 = world.createArchetype(game.SetDream, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleBitmapFont)
    var e6 = world.createEntity(arch3);
    world.setEntityName(e6, "Entity");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = 1.62;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Sprite2DRenderer();
    c4.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/yume_man');
    var s3 = new ut.Core2D.Color();
    s3.r = 1;
    s3.g = 1;
    s3.b = 1;
    s3.a = 1;
    c4.color = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Core2D.Sprite2DRendererOptions();
    var s4 = new ut.Math.Vector2();
    s4.x = 4.95;
    s4.y = 6.75;
    c5.size = s4;
    c5.drawMode = 2;
    world.setComponentData(e0, c5);
    var c6 = new ut.Core2D.LayerSorting();
    world.setComponentData(e0, c6);
    var c7 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.TransformLocalPosition();
    var s5 = new ut.Math.Vector3();
    s5.x = 0.71;
    s5.y = 3.26;
    s5.z = 0;
    c8.position = s5;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.TransformLocalRotation();
    var s6 = new ut.Math.Quaternion();
    s6.x = 0;
    s6.y = 0;
    s6.z = 0;
    s6.w = 1;
    c9.rotation = s6;
    world.setComponentData(e1, c9);
    var c10 = new ut.Core2D.TransformLocalScale();
    var s7 = new ut.Math.Vector3();
    s7.x = 1;
    s7.y = 1;
    s7.z = 1;
    c10.scale = s7;
    world.setComponentData(e1, c10);
    var c11 = new ut.Core2D.Sprite2DRenderer();
    c11.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/kid_job_boy_rich');
    var s8 = new ut.Core2D.Color();
    s8.r = 1;
    s8.g = 1;
    s8.b = 1;
    s8.a = 1;
    c11.color = s8;
    c11.blending = 0;
    world.setComponentData(e1, c11);
    var c12 = new ut.Core2D.Sprite2DRendererOptions();
    var s9 = new ut.Math.Vector2();
    s9.x = 1.288;
    s9.y = 1.6;
    c12.size = s9;
    c12.drawMode = 2;
    world.setComponentData(e1, c12);
    var c13 = new ut.Core2D.LayerSorting();
    c13.order = 1;
    world.setComponentData(e1, c13);
    var c14 = new ut.Core2D.TransformNode();
    world.setComponentData(e2, c14);
    var c15 = new ut.Core2D.TransformLocalPosition();
    var s10 = new ut.Math.Vector3();
    s10.x = 0;
    s10.y = -2.01;
    s10.z = 0;
    c15.position = s10;
    world.setComponentData(e2, c15);
    var c16 = new ut.Core2D.TransformLocalRotation();
    var s11 = new ut.Math.Quaternion();
    s11.x = 0;
    s11.y = 0;
    s11.z = 0;
    s11.w = 1;
    c16.rotation = s11;
    world.setComponentData(e2, c16);
    var c17 = new ut.Core2D.TransformLocalScale();
    var s12 = new ut.Math.Vector3();
    s12.x = 1;
    s12.y = 1;
    s12.z = 1;
    c17.scale = s12;
    world.setComponentData(e2, c17);
    var c18 = new ut.Text.Text2DRenderer();
    c18.style = e2;
    c18.text = "Result:10000Yen";
    var s13 = new ut.Math.Vector2();
    s13.x = 0.5;
    s13.y = 0.5;
    c18.pivot = s13;
    c18.blending = 0;
    world.setComponentData(e2, c18);
    var c19 = new ut.Text.Text2DStyle();
    var s14 = new ut.Core2D.Color();
    s14.r = 1;
    s14.g = 1;
    s14.b = 1;
    s14.a = 1;
    c19.color = s14;
    c19.size = 0.4;
    world.setComponentData(e2, c19);
    var c20 = new ut.Text.Text2DStyleNativeFont();
    c20.font = e2;
    c20.weight = 400;
    world.setComponentData(e2, c20);
    var c21 = new ut.Text.NativeFont();
    c21.name = 0;
    c21.worldUnitsToPt = 1;
    world.setComponentData(e2, c21);
    var c22 = new ut.Core2D.TransformNode();
    world.setComponentData(e3, c22);
    var c23 = new ut.Core2D.TransformLocalPosition();
    var s15 = new ut.Math.Vector3();
    s15.x = 0;
    s15.y = 0;
    s15.z = 0;
    c23.position = s15;
    world.setComponentData(e3, c23);
    var c24 = new ut.Core2D.TransformLocalRotation();
    var s16 = new ut.Math.Quaternion();
    s16.x = 0;
    s16.y = 0;
    s16.z = 0;
    s16.w = 1;
    c24.rotation = s16;
    world.setComponentData(e3, c24);
    var c25 = new ut.Core2D.TransformLocalScale();
    var s17 = new ut.Math.Vector3();
    s17.x = 1;
    s17.y = 1;
    s17.z = 1;
    c25.scale = s17;
    world.setComponentData(e3, c25);
    var c26 = new ut.Core2D.Camera2D();
    c26.halfVerticalSize = 5;
    var s18 = new ut.Math.Rect();
    s18.x = 0;
    s18.y = 0;
    s18.width = 1;
    s18.height = 1;
    c26.rect = s18;
    var s19 = new ut.Core2D.Color();
    s19.r = 0;
    s19.g = 0;
    s19.b = 0;
    s19.a = 1;
    c26.backgroundColor = s19;
    c26.clearFlags = 1;
    c26.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.PostProcessing.cid, ut.layers.Cutscene.cid];
    c26.cullingMode = 2;
    world.setComponentData(e3, c26);
    var c27 = new ut.EditorExtensions.CameraCullingMask();
    c27.mask = -1;
    world.setComponentData(e3, c27);
    var c28 = new ut.Core2D.TransformNode();
    world.setComponentData(e4, c28);
    var c29 = new ut.Core2D.TransformLocalPosition();
    var s20 = new ut.Math.Vector3();
    s20.x = -0.33;
    s20.y = 2.58;
    s20.z = 0;
    c29.position = s20;
    world.setComponentData(e4, c29);
    var c30 = new ut.Core2D.TransformLocalRotation();
    var s21 = new ut.Math.Quaternion();
    s21.x = 0;
    s21.y = 0;
    s21.z = -0.1261124;
    s21.w = 0.992016;
    c30.rotation = s21;
    world.setComponentData(e4, c30);
    var c31 = new ut.Core2D.TransformLocalScale();
    var s22 = new ut.Math.Vector3();
    s22.x = 1;
    s22.y = 1;
    s22.z = 1;
    c31.scale = s22;
    world.setComponentData(e4, c31);
    var c32 = new ut.Core2D.Sprite2DRenderer();
    c32.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/animal_inoshishi');
    var s23 = new ut.Core2D.Color();
    s23.r = 1;
    s23.g = 1;
    s23.b = 1;
    s23.a = 1;
    c32.color = s23;
    c32.blending = 0;
    world.setComponentData(e4, c32);
    var c33 = new ut.Core2D.Sprite2DRendererOptions();
    var s24 = new ut.Math.Vector2();
    s24.x = 0.98375;
    s24.y = 0.885;
    c33.size = s24;
    c33.drawMode = 2;
    world.setComponentData(e4, c33);
    var c34 = new ut.Core2D.LayerSorting();
    c34.order = 1;
    world.setComponentData(e4, c34);
    var c35 = new ut.Core2D.TransformNode();
    world.setComponentData(e5, c35);
    var c36 = new ut.Core2D.TransformLocalPosition();
    var s25 = new ut.Math.Vector3();
    s25.x = -0.51;
    s25.y = 3.69;
    s25.z = 0;
    c36.position = s25;
    world.setComponentData(e5, c36);
    var c37 = new ut.Core2D.TransformLocalRotation();
    var s26 = new ut.Math.Quaternion();
    s26.x = 0;
    s26.y = 0;
    s26.z = 0.03821344;
    s26.w = 0.9992696;
    c37.rotation = s26;
    world.setComponentData(e5, c37);
    var c38 = new ut.Core2D.TransformLocalScale();
    var s27 = new ut.Math.Vector3();
    s27.x = 1;
    s27.y = 1;
    s27.z = 1;
    c38.scale = s27;
    world.setComponentData(e5, c38);
    var c39 = new ut.Core2D.Sprite2DRenderer();
    c39.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/ichifuji_nitaka_sannasubi');
    var s28 = new ut.Core2D.Color();
    s28.r = 1;
    s28.g = 1;
    s28.b = 1;
    s28.a = 1;
    c39.color = s28;
    c39.blending = 0;
    world.setComponentData(e5, c39);
    var c40 = new ut.Core2D.LayerSorting();
    c40.order = 1;
    world.setComponentData(e5, c40);
    var c41 = new ut.Core2D.Sprite2DRendererOptions();
    var s29 = new ut.Math.Vector2();
    s29.x = 2;
    s29.y = 1.77;
    c41.size = s29;
    c41.drawMode = 2;
    world.setComponentData(e5, c41);
    var c42 = new ut.Core2D.TransformNode();
    world.setComponentData(e6, c42);
    var c43 = new ut.Core2D.TransformLocalPosition();
    var s30 = new ut.Math.Vector3();
    s30.x = 0;
    s30.y = -3.36;
    s30.z = 0;
    c43.position = s30;
    world.setComponentData(e6, c43);
    var c44 = new ut.Core2D.TransformLocalRotation();
    var s31 = new ut.Math.Quaternion();
    s31.x = 0;
    s31.y = 0;
    s31.z = 0;
    s31.w = 1;
    c44.rotation = s31;
    world.setComponentData(e6, c44);
    var c45 = new ut.Core2D.TransformLocalScale();
    var s32 = new ut.Math.Vector3();
    s32.x = 1;
    s32.y = 1;
    s32.z = 1;
    c45.scale = s32;
    world.setComponentData(e6, c45);
    var c46 = new ut.Text.Text2DRenderer();
    c46.style = e6;
    c46.text = "Have a Good Dream!";
    var s33 = new ut.Math.Vector2();
    s33.x = 0.5;
    s33.y = 0.5;
    c46.pivot = s33;
    c46.blending = 0;
    world.setComponentData(e6, c46);
    var c47 = new ut.Text.Text2DStyle();
    var s34 = new ut.Core2D.Color();
    s34.r = 0;
    s34.g = 1;
    s34.b = 0.6982074;
    s34.a = 1;
    c47.color = s34;
    c47.size = 0.6;
    world.setComponentData(e6, c47);
    var c48 = new ut.Text.Text2DStyleBitmapFont();
    c48.font = ut.EntityLookupCache.getByName(world, 'assets/fonts/Oswald Bold SDF');
    world.setComponentData(e6, c48);
    return [e0, e1, e2, e3, e4, e5, e6];
}

entities.game.MainGroup.name = "MainGroup";
entities.game.MainGroup.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(game.IsGround, game.Move, game.Player, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.HitBox2D.RectHitBox2D, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.NewColliderContacts, ut.Physics2D.RigidBody2D)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Player");
    var arch2 = world.createArchetype(game.Akeome, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e2 = world.createEntity(arch2);
    world.setEntityName(e2, "Akeome");
    var arch3 = world.createArchetype(this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e3 = world.createEntity(arch3);
    world.setEntityName(e3, "Ground");
    var arch4 = world.createArchetype(game.ScrollBackground, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformNode, ut.layers.Default)
    var e4 = world.createEntity(arch4);
    world.setEntityName(e4, "loopBackGround");
    var arch5 = world.createArchetype(this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e5 = world.createEntity(arch5);
    world.setEntityName(e5, "BackGround");
    var e6 = world.createEntity(arch5);
    world.setEntityName(e6, "BackGround");
    var e7 = world.createEntity(arch5);
    world.setEntityName(e7, "BackGround");
    var e8 = world.createEntity(arch5);
    world.setEntityName(e8, "BackGround");
    var e9 = world.createEntity(arch5);
    world.setEntityName(e9, "BackGround");
    var e10 = world.createEntity(arch5);
    world.setEntityName(e10, "BackGround");
    var arch6 = world.createArchetype(game.Spawner, this.Component, ut.layers.Default)
    var e11 = world.createEntity(arch6);
    world.setEntityName(e11, "Spawner");
    var e12 = world.createEntity(arch6);
    world.setEntityName(e12, "Spawner");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Camera2D();
    c1.halfVerticalSize = 5;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c1.rect = s0;
    var s1 = new ut.Core2D.Color();
    s1.r = 0;
    s1.g = 0;
    s1.b = 0;
    s1.a = 1;
    c1.backgroundColor = s1;
    c1.clearFlags = 1;
    c1.depth = -1;
    c1.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.PostProcessing.cid, ut.layers.Cutscene.cid];
    c1.cullingMode = 2;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.CameraCullingMask();
    c2.mask = -1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c3);
    var c4 = new ut.Core2D.TransformLocalPosition();
    var s2 = new ut.Math.Vector3();
    s2.x = -1.36;
    s2.y = -2.76;
    s2.z = 0;
    c4.position = s2;
    world.setComponentData(e1, c4);
    var c5 = new ut.Core2D.TransformLocalRotation();
    var s3 = new ut.Math.Quaternion();
    s3.x = 0;
    s3.y = 0;
    s3.z = 0;
    s3.w = 1;
    c5.rotation = s3;
    world.setComponentData(e1, c5);
    var c6 = new ut.Core2D.TransformLocalScale();
    var s4 = new ut.Math.Vector3();
    s4.x = 1;
    s4.y = 1;
    s4.z = 1;
    c6.scale = s4;
    world.setComponentData(e1, c6);
    var c7 = new ut.Core2D.Sprite2DRenderer();
    c7.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/animal_inoshishi');
    var s5 = new ut.Core2D.Color();
    s5.r = 1;
    s5.g = 1;
    s5.b = 1;
    s5.a = 1;
    c7.color = s5;
    c7.blending = 0;
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.Sprite2DRendererOptions();
    var s6 = new ut.Math.Vector2();
    s6.x = 2.5;
    s6.y = 2.5;
    c8.size = s6;
    c8.drawMode = 2;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.LayerSorting();
    c9.order = 4;
    world.setComponentData(e1, c9);
    var c10 = new ut.Physics2D.RigidBody2D();
    c10.bodyType = 2;
    c10.freezeRotation = true;
    world.setComponentData(e1, c10);
    var c11 = new ut.Physics2D.BoxCollider2D();
    var s7 = new ut.Math.Vector2();
    s7.x = 2.5;
    s7.y = 2.5;
    c11.size = s7;
    var s8 = new ut.Math.Vector2();
    s8.x = 0.5;
    s8.y = 0.5;
    c11.pivot = s8;
    world.setComponentData(e1, c11);
    var c12 = new game.Move();
    var s9 = new ut.Math.Vector2();
    s9.x = 0;
    s9.y = 15;
    c12.upForce = s9;
    world.setComponentData(e1, c12);
    var c13 = new game.IsGround();
    c13.isGround = true;
    world.setComponentData(e1, c13);
    var c14 = new ut.Physics2D.NewColliderContacts();
    world.setComponentData(e1, c14);
    var c15 = new ut.HitBox2D.RectHitBox2D();
    var s10 = new ut.Math.Rect();
    s10.x = -0.95;
    s10.y = -1;
    s10.width = 1.9;
    s10.height = 2;
    c15.box = s10;
    world.setComponentData(e1, c15);
    var c16 = new ut.Core2D.TransformNode();
    world.setComponentData(e2, c16);
    var c17 = new ut.Core2D.TransformLocalPosition();
    var s11 = new ut.Math.Vector3();
    s11.x = 0;
    s11.y = 3;
    s11.z = 0;
    c17.position = s11;
    world.setComponentData(e2, c17);
    var c18 = new ut.Core2D.TransformLocalRotation();
    var s12 = new ut.Math.Quaternion();
    s12.x = 0;
    s12.y = -0.7071068;
    s12.z = 0;
    s12.w = 0.7071068;
    c18.rotation = s12;
    world.setComponentData(e2, c18);
    var c19 = new ut.Core2D.TransformLocalScale();
    var s13 = new ut.Math.Vector3();
    s13.x = 1;
    s13.y = 1;
    s13.z = 1;
    c19.scale = s13;
    world.setComponentData(e2, c19);
    var c20 = new ut.Core2D.Sprite2DRenderer();
    c20.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/osyougatsu_akemashite_omedetou');
    var s14 = new ut.Core2D.Color();
    s14.r = 1;
    s14.g = 1;
    s14.b = 1;
    s14.a = 1;
    c20.color = s14;
    c20.blending = 0;
    world.setComponentData(e2, c20);
    var c21 = new ut.Core2D.LayerSorting();
    c21.order = 2;
    world.setComponentData(e2, c21);
    var c22 = new ut.Core2D.Sprite2DRendererOptions();
    var s15 = new ut.Math.Vector2();
    s15.x = 5.5;
    s15.y = 3;
    c22.size = s15;
    c22.drawMode = 2;
    world.setComponentData(e2, c22);
    var c23 = new game.Akeome();
    c23.speed = 0.01;
    world.setComponentData(e2, c23);
    var c24 = new ut.Core2D.TransformNode();
    world.setComponentData(e3, c24);
    var c25 = new ut.Core2D.TransformLocalPosition();
    var s16 = new ut.Math.Vector3();
    s16.x = 0;
    s16.y = -4.75;
    s16.z = 0;
    c25.position = s16;
    world.setComponentData(e3, c25);
    var c26 = new ut.Core2D.TransformLocalRotation();
    var s17 = new ut.Math.Quaternion();
    s17.x = 0;
    s17.y = 0;
    s17.z = 0;
    s17.w = 1;
    c26.rotation = s17;
    world.setComponentData(e3, c26);
    var c27 = new ut.Core2D.TransformLocalScale();
    var s18 = new ut.Math.Vector3();
    s18.x = 1;
    s18.y = 1;
    s18.z = 1;
    c27.scale = s18;
    world.setComponentData(e3, c27);
    var c28 = new ut.Physics2D.BoxCollider2D();
    var s19 = new ut.Math.Vector2();
    s19.x = 10;
    s19.y = 0.5;
    c28.size = s19;
    var s20 = new ut.Math.Vector2();
    s20.x = 0.5;
    s20.y = 0.5;
    c28.pivot = s20;
    world.setComponentData(e3, c28);
    var c29 = new ut.Physics2D.RigidBody2D();
    c29.bodyType = 0;
    c29.freezeRotation = true;
    world.setComponentData(e3, c29);
    var c30 = new ut.Core2D.TransformNode();
    world.setComponentData(e4, c30);
    var c31 = new ut.Core2D.TransformLocalPosition();
    var s21 = new ut.Math.Vector3();
    s21.x = 0;
    s21.y = 0;
    s21.z = 0;
    c31.position = s21;
    world.setComponentData(e4, c31);
    var c32 = new game.ScrollBackground();
    c32.speed = 5;
    c32.threshold = -28;
    c32.distance = 28;
    world.setComponentData(e4, c32);
    var c33 = new ut.Core2D.TransformNode();
    c33.parent = e4;
    world.setComponentData(e5, c33);
    var c34 = new ut.Core2D.TransformLocalPosition();
    var s22 = new ut.Math.Vector3();
    s22.x = 0;
    s22.y = 0;
    s22.z = 0;
    c34.position = s22;
    world.setComponentData(e5, c34);
    var c35 = new ut.Core2D.TransformLocalRotation();
    var s23 = new ut.Math.Quaternion();
    s23.x = 0;
    s23.y = 0;
    s23.z = 0;
    s23.w = 1;
    c35.rotation = s23;
    world.setComponentData(e5, c35);
    var c36 = new ut.Core2D.TransformLocalScale();
    var s24 = new ut.Math.Vector3();
    s24.x = 1;
    s24.y = 1;
    s24.z = 1;
    c36.scale = s24;
    world.setComponentData(e5, c36);
    var c37 = new ut.Core2D.Sprite2DRenderer();
    c37.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s25 = new ut.Core2D.Color();
    s25.r = 1;
    s25.g = 1;
    s25.b = 1;
    s25.a = 1;
    c37.color = s25;
    c37.blending = 0;
    world.setComponentData(e5, c37);
    var c38 = new ut.Core2D.LayerSorting();
    world.setComponentData(e5, c38);
    var c39 = new ut.Core2D.Sprite2DRendererOptions();
    var s26 = new ut.Math.Vector2();
    s26.x = 14;
    s26.y = 10;
    c39.size = s26;
    c39.drawMode = 2;
    world.setComponentData(e5, c39);
    var c40 = new ut.Core2D.TransformNode();
    c40.parent = e4;
    world.setComponentData(e6, c40);
    var c41 = new ut.Core2D.TransformLocalPosition();
    var s27 = new ut.Math.Vector3();
    s27.x = 14;
    s27.y = 0;
    s27.z = 0;
    c41.position = s27;
    world.setComponentData(e6, c41);
    var c42 = new ut.Core2D.TransformLocalRotation();
    var s28 = new ut.Math.Quaternion();
    s28.x = 0;
    s28.y = 0;
    s28.z = 0;
    s28.w = 1;
    c42.rotation = s28;
    world.setComponentData(e6, c42);
    var c43 = new ut.Core2D.TransformLocalScale();
    var s29 = new ut.Math.Vector3();
    s29.x = -1;
    s29.y = 1;
    s29.z = 1;
    c43.scale = s29;
    world.setComponentData(e6, c43);
    var c44 = new ut.Core2D.Sprite2DRenderer();
    c44.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s30 = new ut.Core2D.Color();
    s30.r = 1;
    s30.g = 1;
    s30.b = 1;
    s30.a = 1;
    c44.color = s30;
    c44.blending = 0;
    world.setComponentData(e6, c44);
    var c45 = new ut.Core2D.LayerSorting();
    world.setComponentData(e6, c45);
    var c46 = new ut.Core2D.Sprite2DRendererOptions();
    var s31 = new ut.Math.Vector2();
    s31.x = 14;
    s31.y = 10;
    c46.size = s31;
    c46.drawMode = 2;
    world.setComponentData(e6, c46);
    var c47 = new ut.Core2D.TransformNode();
    c47.parent = e4;
    world.setComponentData(e7, c47);
    var c48 = new ut.Core2D.TransformLocalPosition();
    var s32 = new ut.Math.Vector3();
    s32.x = 28;
    s32.y = 0;
    s32.z = 0;
    c48.position = s32;
    world.setComponentData(e7, c48);
    var c49 = new ut.Core2D.TransformLocalRotation();
    var s33 = new ut.Math.Quaternion();
    s33.x = 0;
    s33.y = 0;
    s33.z = 0;
    s33.w = 1;
    c49.rotation = s33;
    world.setComponentData(e7, c49);
    var c50 = new ut.Core2D.TransformLocalScale();
    var s34 = new ut.Math.Vector3();
    s34.x = 1;
    s34.y = 1;
    s34.z = 1;
    c50.scale = s34;
    world.setComponentData(e7, c50);
    var c51 = new ut.Core2D.Sprite2DRenderer();
    c51.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s35 = new ut.Core2D.Color();
    s35.r = 1;
    s35.g = 1;
    s35.b = 1;
    s35.a = 1;
    c51.color = s35;
    c51.blending = 0;
    world.setComponentData(e7, c51);
    var c52 = new ut.Core2D.LayerSorting();
    world.setComponentData(e7, c52);
    var c53 = new ut.Core2D.Sprite2DRendererOptions();
    var s36 = new ut.Math.Vector2();
    s36.x = 14;
    s36.y = 10;
    c53.size = s36;
    c53.drawMode = 2;
    world.setComponentData(e7, c53);
    var c54 = new ut.Core2D.TransformNode();
    c54.parent = e4;
    world.setComponentData(e8, c54);
    var c55 = new ut.Core2D.TransformLocalPosition();
    var s37 = new ut.Math.Vector3();
    s37.x = 42;
    s37.y = 0;
    s37.z = 0;
    c55.position = s37;
    world.setComponentData(e8, c55);
    var c56 = new ut.Core2D.TransformLocalRotation();
    var s38 = new ut.Math.Quaternion();
    s38.x = 0;
    s38.y = 0;
    s38.z = 0;
    s38.w = 1;
    c56.rotation = s38;
    world.setComponentData(e8, c56);
    var c57 = new ut.Core2D.TransformLocalScale();
    var s39 = new ut.Math.Vector3();
    s39.x = -1;
    s39.y = 1;
    s39.z = 1;
    c57.scale = s39;
    world.setComponentData(e8, c57);
    var c58 = new ut.Core2D.Sprite2DRenderer();
    c58.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s40 = new ut.Core2D.Color();
    s40.r = 1;
    s40.g = 1;
    s40.b = 1;
    s40.a = 1;
    c58.color = s40;
    c58.blending = 0;
    world.setComponentData(e8, c58);
    var c59 = new ut.Core2D.LayerSorting();
    world.setComponentData(e8, c59);
    var c60 = new ut.Core2D.Sprite2DRendererOptions();
    var s41 = new ut.Math.Vector2();
    s41.x = 14;
    s41.y = 10;
    c60.size = s41;
    c60.drawMode = 2;
    world.setComponentData(e8, c60);
    var c61 = new ut.Core2D.TransformNode();
    c61.parent = e4;
    world.setComponentData(e9, c61);
    var c62 = new ut.Core2D.TransformLocalPosition();
    var s42 = new ut.Math.Vector3();
    s42.x = -28;
    s42.y = 0;
    s42.z = 0;
    c62.position = s42;
    world.setComponentData(e9, c62);
    var c63 = new ut.Core2D.TransformLocalRotation();
    var s43 = new ut.Math.Quaternion();
    s43.x = 0;
    s43.y = 0;
    s43.z = 0;
    s43.w = 1;
    c63.rotation = s43;
    world.setComponentData(e9, c63);
    var c64 = new ut.Core2D.TransformLocalScale();
    var s44 = new ut.Math.Vector3();
    s44.x = 1;
    s44.y = 1;
    s44.z = 1;
    c64.scale = s44;
    world.setComponentData(e9, c64);
    var c65 = new ut.Core2D.Sprite2DRenderer();
    c65.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s45 = new ut.Core2D.Color();
    s45.r = 1;
    s45.g = 1;
    s45.b = 1;
    s45.a = 1;
    c65.color = s45;
    c65.blending = 0;
    world.setComponentData(e9, c65);
    var c66 = new ut.Core2D.LayerSorting();
    world.setComponentData(e9, c66);
    var c67 = new ut.Core2D.Sprite2DRendererOptions();
    var s46 = new ut.Math.Vector2();
    s46.x = 14;
    s46.y = 10;
    c67.size = s46;
    c67.drawMode = 2;
    world.setComponentData(e9, c67);
    var c68 = new ut.Core2D.TransformNode();
    c68.parent = e4;
    world.setComponentData(e10, c68);
    var c69 = new ut.Core2D.TransformLocalPosition();
    var s47 = new ut.Math.Vector3();
    s47.x = -14;
    s47.y = 0;
    s47.z = 0;
    c69.position = s47;
    world.setComponentData(e10, c69);
    var c70 = new ut.Core2D.TransformLocalRotation();
    var s48 = new ut.Math.Quaternion();
    s48.x = 0;
    s48.y = 0;
    s48.z = 0;
    s48.w = 1;
    c70.rotation = s48;
    world.setComponentData(e10, c70);
    var c71 = new ut.Core2D.TransformLocalScale();
    var s49 = new ut.Math.Vector3();
    s49.x = -1;
    s49.y = 1;
    s49.z = 1;
    c71.scale = s49;
    world.setComponentData(e10, c71);
    var c72 = new ut.Core2D.Sprite2DRenderer();
    c72.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/bg_natural_sougen');
    var s50 = new ut.Core2D.Color();
    s50.r = 1;
    s50.g = 1;
    s50.b = 1;
    s50.a = 1;
    c72.color = s50;
    c72.blending = 0;
    world.setComponentData(e10, c72);
    var c73 = new ut.Core2D.LayerSorting();
    world.setComponentData(e10, c73);
    var c74 = new ut.Core2D.Sprite2DRendererOptions();
    var s51 = new ut.Math.Vector2();
    s51.x = 14;
    s51.y = 10;
    c74.size = s51;
    c74.drawMode = 2;
    world.setComponentData(e10, c74);
    var c75 = new game.Spawner();
    c75.delay = 3.5;
    c75.isPaused = true;
    c75.spawnedGroup = "game.OtosidamaGroup";
    world.setComponentData(e11, c75);
    var c76 = new game.Spawner();
    c76.time = 2;
    c76.delay = 3.5;
    c76.isPaused = true;
    c76.spawnedGroup = "game.TakaGroup";
    world.setComponentData(e12, c76);
    return [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12];
}

entities.game.OkaneView.name = "OkaneView";
entities.game.OkaneView.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.NativeFont, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleNativeFont)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Sprite");
    var arch1 = world.createArchetype(game.MoneyUI, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.NativeFont, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleNativeFont)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Sprite");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = -1;
    s0.y = 1.23;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Text.Text2DRenderer();
    c4.style = e0;
    c4.text = "Otosidama";
    var s3 = new ut.Math.Vector2();
    s3.x = 0.5;
    s3.y = 0.5;
    c4.pivot = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Text.Text2DStyle();
    var s4 = new ut.Core2D.Color();
    s4.r = 1;
    s4.g = 0.9633025;
    s4.b = 0.6179246;
    s4.a = 1;
    c5.color = s4;
    c5.size = 0.5;
    world.setComponentData(e0, c5);
    var c6 = new ut.Text.Text2DStyleNativeFont();
    c6.font = e0;
    c6.weight = 400;
    world.setComponentData(e0, c6);
    var c7 = new ut.Text.NativeFont();
    c7.name = 0;
    c7.worldUnitsToPt = 1;
    world.setComponentData(e0, c7);
    var c8 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.TransformLocalPosition();
    var s5 = new ut.Math.Vector3();
    s5.x = 1.24;
    s5.y = 0.54;
    s5.z = 0;
    c9.position = s5;
    world.setComponentData(e1, c9);
    var c10 = new ut.Core2D.TransformLocalRotation();
    var s6 = new ut.Math.Quaternion();
    s6.x = 0;
    s6.y = 0;
    s6.z = 0;
    s6.w = 1;
    c10.rotation = s6;
    world.setComponentData(e1, c10);
    var c11 = new ut.Core2D.TransformLocalScale();
    var s7 = new ut.Math.Vector3();
    s7.x = 1;
    s7.y = 1;
    s7.z = 1;
    c11.scale = s7;
    world.setComponentData(e1, c11);
    var c12 = new ut.Text.Text2DRenderer();
    c12.style = e1;
    c12.text = "0Yen";
    var s8 = new ut.Math.Vector2();
    s8.x = 0.5;
    s8.y = 0.5;
    c12.pivot = s8;
    c12.blending = 0;
    world.setComponentData(e1, c12);
    var c13 = new ut.Text.Text2DStyle();
    var s9 = new ut.Core2D.Color();
    s9.r = 1;
    s9.g = 0.9633025;
    s9.b = 0.6179246;
    s9.a = 1;
    c13.color = s9;
    c13.size = 0.5;
    world.setComponentData(e1, c13);
    var c14 = new ut.Text.Text2DStyleNativeFont();
    c14.font = e1;
    c14.weight = 400;
    world.setComponentData(e1, c14);
    var c15 = new ut.Text.NativeFont();
    c15.name = 0;
    c15.worldUnitsToPt = 1;
    world.setComponentData(e1, c15);
    return [e0, e1];
}

entities.game.Oops.name = "Oops";
entities.game.Oops.load = function(world) {
    var arch0 = world.createArchetype(game.MissButton, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.NativeFont, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleNativeFont)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Sprite");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = -0.47;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Text.Text2DRenderer();
    c4.style = e0;
    c4.text = "Miss!";
    var s3 = new ut.Math.Vector2();
    s3.x = 0.5;
    s3.y = 0.5;
    c4.pivot = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Text.Text2DStyle();
    var s4 = new ut.Core2D.Color();
    s4.r = 1;
    s4.g = 1;
    s4.b = 1;
    s4.a = 1;
    c5.color = s4;
    c5.size = 1;
    world.setComponentData(e0, c5);
    var c6 = new ut.Text.Text2DStyleNativeFont();
    c6.font = e0;
    c6.italic = true;
    c6.weight = 400;
    world.setComponentData(e0, c6);
    var c7 = new ut.Text.NativeFont();
    c7.name = 0;
    c7.worldUnitsToPt = 1;
    world.setComponentData(e0, c7);
    return [e0];
}

entities.game.OtosidamaGroup.name = "OtosidamaGroup";
entities.game.OtosidamaGroup.load = function(world) {
    var arch0 = world.createArchetype(game.Boundaries, game.MoveSpeed, game.Otosidama, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.HitBox2D.RectHitBox2D, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Senen");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 14;
    s0.y = 0;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 0.1;
    s2.y = 0.1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Sprite2DRenderer();
    c4.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/money_1000');
    var s3 = new ut.Core2D.Color();
    s3.r = 1;
    s3.g = 1;
    s3.b = 1;
    s3.a = 1;
    c4.color = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Core2D.LayerSorting();
    c5.order = 3;
    world.setComponentData(e0, c5);
    var c6 = new game.Boundaries();
    c6.minX = -9;
    c6.maxX = 9;
    c6.minY = 2.5;
    c6.maxY = -1;
    world.setComponentData(e0, c6);
    var c7 = new game.MoveSpeed();
    c7.speed = 3;
    world.setComponentData(e0, c7);
    var c8 = new ut.HitBox2D.RectHitBox2D();
    var s4 = new ut.Math.Rect();
    s4.x = -4.655;
    s4.y = -2.19;
    s4.width = 9.31;
    s4.height = 4.38;
    c8.box = s4;
    world.setComponentData(e0, c8);
    return [e0];
}

entities.game.TakaGroup.name = "TakaGroup";
entities.game.TakaGroup.load = function(world) {
    var arch0 = world.createArchetype(game.Boundaries, game.ChangeOverTime, game.MoveSpeed, game.Taka, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.HitBox2D.RectHitBox2D, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Sprite");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = 0;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Sprite2DRenderer();
    c4.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/animal_taka');
    var s3 = new ut.Core2D.Color();
    s3.r = 1;
    s3.g = 1;
    s3.b = 1;
    s3.a = 1;
    c4.color = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Core2D.LayerSorting();
    c5.order = 5;
    world.setComponentData(e0, c5);
    var c6 = new game.MoveSpeed();
    c6.speed = 2.7;
    world.setComponentData(e0, c6);
    var c7 = new game.Boundaries();
    c7.minX = -9;
    c7.maxX = 9;
    c7.minY = 1;
    c7.maxY = 3;
    world.setComponentData(e0, c7);
    var c8 = new ut.Core2D.Sprite2DRendererOptions();
    var s4 = new ut.Math.Vector2();
    s4.x = 2;
    s4.y = 2;
    c8.size = s4;
    c8.drawMode = 2;
    world.setComponentData(e0, c8);
    var c9 = new game.ChangeOverTime();
    c9.changePerSecond = 0.05;
    world.setComponentData(e0, c9);
    var c10 = new ut.HitBox2D.RectHitBox2D();
    var s5 = new ut.Math.Rect();
    s5.x = -1;
    s5.y = -0.5;
    s5.width = 1;
    s5.height = 1;
    c10.box = s5;
    world.setComponentData(e0, c10);
    return [e0];
}


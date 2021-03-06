﻿using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.Physics2D;
using UTiny.HitBox2D;
using UTiny.UILayout;
using UTiny.Text;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace DreamGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace End
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace OkaneView
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Oops
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace OtosidamaGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TakaGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Akeome : IComponentData
    {
        public float speed;
    }
    public struct Boundaries : IComponentData
    {
        public float minX;
        public float maxX;
        public float minY;
        public float maxY;
    }
    public struct ChangeOverTime : IComponentData
    {
        public float changePerSecond;
    }
    public struct Dream : IComponentData
    {
        public bool isDream;
    }
    public struct IsGround : IComponentData
    {
        public bool isGround;
    }
    public struct MissButton : IComponentData
    {
    }
    public struct MoneyUI : IComponentData
    {
    }
    public struct Move : IComponentData
    {
        public Vector2 upForce;
    }
    public struct MoveSpeed : IComponentData
    {
        public float speed;
    }
    public struct Otosidama : IComponentData
    {
    }
    public struct Player : IComponentData
    {
    }
    public struct ResultText : IComponentData
    {
    }
    public struct ScrollBackground : IComponentData
    {
        public float speed;
        public float threshold;
        public float distance;
    }
    public struct SetDream : IComponentData
    {
    }
    public struct Spawner : IComponentData
    {
        public float time;
        public float delay;
        public bool isPaused;
        public string spawnedGroup;
    }
    public struct Taka : IComponentData
    {
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTile : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.Physics2D
{
}

namespace ut.HitBox2D
{
}

namespace ut.UILayout
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}
namespace game
{
    public struct AkeomeBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct DreamBehavior_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct OkaneBehavir_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct PlayerBehavior_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct Result_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct ScrollBackgroundBehavior_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct TakaBehavior_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public class CollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MissButtonSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SetDreamSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnSystemJS : IComponentSystem
    {
    }
}
namespace ut
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeStart))]
    public class TimeJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class AkeomeBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class DreamBehavior_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class DreamBehavior_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class OkaneBehavir_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class OkaneBehavir_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PlayerBehavior_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class Result_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class ScrollBackgroundBehavior_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class ScrollBackgroundBehavior_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class TakaBehavior_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class TakaBehavior_OnEntityUpdateJS : IComponentSystem
    {
    }
}

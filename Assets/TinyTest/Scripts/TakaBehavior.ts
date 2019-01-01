
namespace game {

    export class TakaBehaviorFilter extends ut.EntityFilter {
        entity: ut.Entity;
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
		speed: game.MoveSpeed;
		bounds: game.Boundaries;
		speedChange: game.ChangeOverTime;
		taka: game.Taka;
    }

    export class TakaBehavior extends ut.ComponentBehaviour {

        data: TakaBehaviorFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the TakaBehaviorFilter signature, once when enabled
        OnEntityEnable():void {
			let randomY = getRandom(this.data.bounds.minY, this.data.bounds.maxY);
			let newPos = new Vector3(this.data.bounds.maxX, randomY, 0);
			
			this.data.position.position = newPos;
			
			let totalTime = ut.Time.time();
			let newSpeed = this.data.speed.speed + (this.data.speedChange.changePerSecond * totalTime);
			
			this.data.speed.speed = newSpeed;
		}
        
        // this method is called for each entity matching the TakaBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
			
			
			let localPosition = this.data.position.position;
			localPosition.x -= this.data.speed.speed * ut.Time.deltaTime();
			this.data.position.position = localPosition;
			if(localPosition.x <= this.data.bounds.minX){
				this.world.destroyEntity(this.data.entity);
				return;
			}
		}

        // this method is called for each entity matching the TakaBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
	function getRandom(min, max) 
	{
		return Math.random() * (max - min + 1) + min;
	}
}
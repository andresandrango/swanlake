// -----JS CODE-----


//const bta = global.scene.getRootObject().getComponent();
//
//print("Hello");
//print(bta);

//const localPosition = script.getSceneObject().getTransform().getWorldTransform();

const jointsCount = script.getSceneObject().getChildrenCount();
if (jointsCount != 18) {
    print("ERROR: expected 18 tracking body joints"); // assert
}

const body = {};
for (var i = 0; i < jointsCount; i+=1) {
    const joint = script.getSceneObject().getChild(i); 
    const pos = joint.getTransform().getWorldPosition();
    body[joint.name] = "(" + pos.x + ", " + pos.z + ")";     //`(${pos.x}, ${pos.y})`;
}
print(JSON.stringify(body));

//print(script.getSceneObject().name + ":" + localPosition);


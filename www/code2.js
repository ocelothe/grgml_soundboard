gdjs.Page2Code = {};


gdjs.Page2Code.GDbgObjects1= [];
gdjs.Page2Code.GDbgObjects2= [];
gdjs.Page2Code.GDtitlesObjects1= [];
gdjs.Page2Code.GDtitlesObjects2= [];
gdjs.Page2Code.GDoryginalnaseriaObjects1= [];
gdjs.Page2Code.GDoryginalnaseriaObjects2= [];
gdjs.Page2Code.GDpowagaObjects1= [];
gdjs.Page2Code.GDpowagaObjects2= [];
gdjs.Page2Code.GDpodsumowanieObjects1= [];
gdjs.Page2Code.GDpodsumowanieObjects2= [];
gdjs.Page2Code.GDkomplementyObjects1= [];
gdjs.Page2Code.GDkomplementyObjects2= [];
gdjs.Page2Code.GDscreenchanger_95leftObjects1= [];
gdjs.Page2Code.GDscreenchanger_95leftObjects2= [];
gdjs.Page2Code.GDscreenchanger_95rightObjects1= [];
gdjs.Page2Code.GDscreenchanger_95rightObjects2= [];

gdjs.Page2Code.conditionTrue_0 = {val:false};
gdjs.Page2Code.condition0IsTrue_0 = {val:false};
gdjs.Page2Code.condition1IsTrue_0 = {val:false};

gdjs.Page2Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Page2Code.GDbgObjects1.length = 0;
gdjs.Page2Code.GDbgObjects2.length = 0;
gdjs.Page2Code.GDtitlesObjects1.length = 0;
gdjs.Page2Code.GDtitlesObjects2.length = 0;
gdjs.Page2Code.GDoryginalnaseriaObjects1.length = 0;
gdjs.Page2Code.GDoryginalnaseriaObjects2.length = 0;
gdjs.Page2Code.GDpowagaObjects1.length = 0;
gdjs.Page2Code.GDpowagaObjects2.length = 0;
gdjs.Page2Code.GDpodsumowanieObjects1.length = 0;
gdjs.Page2Code.GDpodsumowanieObjects2.length = 0;
gdjs.Page2Code.GDkomplementyObjects1.length = 0;
gdjs.Page2Code.GDkomplementyObjects2.length = 0;
gdjs.Page2Code.GDscreenchanger_95leftObjects1.length = 0;
gdjs.Page2Code.GDscreenchanger_95leftObjects2.length = 0;
gdjs.Page2Code.GDscreenchanger_95rightObjects1.length = 0;
gdjs.Page2Code.GDscreenchanger_95rightObjects2.length = 0;


{



}


{

gdjs.Page2Code.GDoryginalnaseriaObjects1.createFrom(runtimeScene.getObjects("oryginalnaseria"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("oryginalnaseria", gdjs.Page2Code.GDoryginalnaseriaObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDoryginalnaseriaObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDoryginalnaseriaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDoryginalnaseriaObjects1.createFrom(runtimeScene.getObjects("oryginalnaseria"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("oryginalnaseria", gdjs.Page2Code.GDoryginalnaseriaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDoryginalnaseriaObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDoryginalnaseriaObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDoryginalnaseriaObjects2.createFrom(gdjs.Page2Code.GDoryginalnaseriaObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDoryginalnaseriaObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDoryginalnaseriaObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "orginalna serial.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page2Code.GDpowagaObjects1.createFrom(runtimeScene.getObjects("powaga"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("powaga", gdjs.Page2Code.GDpowagaObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpowagaObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDpowagaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDpowagaObjects1.createFrom(runtimeScene.getObjects("powaga"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("powaga", gdjs.Page2Code.GDpowagaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpowagaObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDpowagaObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDpowagaObjects2.createFrom(gdjs.Page2Code.GDpowagaObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpowagaObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDpowagaObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "powaga.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page2Code.GDpodsumowanieObjects1.createFrom(runtimeScene.getObjects("podsumowanie"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("podsumowanie", gdjs.Page2Code.GDpodsumowanieObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpodsumowanieObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDpodsumowanieObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDpodsumowanieObjects1.createFrom(runtimeScene.getObjects("podsumowanie"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("podsumowanie", gdjs.Page2Code.GDpodsumowanieObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpodsumowanieObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDpodsumowanieObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDpodsumowanieObjects2.createFrom(gdjs.Page2Code.GDpodsumowanieObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDpodsumowanieObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDpodsumowanieObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "podsumowanie.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page2Code.GDkomplementyObjects1.createFrom(runtimeScene.getObjects("komplementy"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("komplementy", gdjs.Page2Code.GDkomplementyObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDkomplementyObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDkomplementyObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDkomplementyObjects1.createFrom(runtimeScene.getObjects("komplementy"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("komplementy", gdjs.Page2Code.GDkomplementyObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDkomplementyObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDkomplementyObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDkomplementyObjects2.createFrom(gdjs.Page2Code.GDkomplementyObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDkomplementyObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDkomplementyObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "komplementy.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page2Code.GDscreenchanger_95leftObjects1.createFrom(runtimeScene.getObjects("screenchanger_left"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("screenchanger_left", gdjs.Page2Code.GDscreenchanger_95leftObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95leftObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95leftObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDscreenchanger_95leftObjects1.createFrom(runtimeScene.getObjects("screenchanger_left"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("screenchanger_left", gdjs.Page2Code.GDscreenchanger_95leftObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95leftObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95leftObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDscreenchanger_95leftObjects2.createFrom(gdjs.Page2Code.GDscreenchanger_95leftObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95leftObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95leftObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Page1", false);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page2Code.GDscreenchanger_95rightObjects1.createFrom(runtimeScene.getObjects("screenchanger_right"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("screenchanger_right", gdjs.Page2Code.GDscreenchanger_95rightObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95rightObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95rightObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page2Code.GDscreenchanger_95rightObjects1.createFrom(runtimeScene.getObjects("screenchanger_right"));

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("screenchanger_right", gdjs.Page2Code.GDscreenchanger_95rightObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95rightObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95rightObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page2Code.GDscreenchanger_95rightObjects2.createFrom(gdjs.Page2Code.GDscreenchanger_95rightObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page2Code.GDscreenchanger_95rightObjects2.length ;i < len;++i) {
    gdjs.Page2Code.GDscreenchanger_95rightObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Page3", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Page2Code']= gdjs.Page2Code;

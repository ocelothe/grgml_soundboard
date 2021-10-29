gdjs.Page1Code = {};


gdjs.Page1Code.GDwnioskiObjects1= [];
gdjs.Page1Code.GDwnioskiObjects2= [];
gdjs.Page1Code.GDButtonObjects1= [];
gdjs.Page1Code.GDButtonObjects2= [];
gdjs.Page1Code.GDbackObjects1= [];
gdjs.Page1Code.GDbackObjects2= [];
gdjs.Page1Code.GDnamesObjects1= [];
gdjs.Page1Code.GDnamesObjects2= [];
gdjs.Page1Code.GDjezuObjects1= [];
gdjs.Page1Code.GDjezuObjects2= [];
gdjs.Page1Code.GDPrzeztenfilmObjects1= [];
gdjs.Page1Code.GDPrzeztenfilmObjects2= [];
gdjs.Page1Code.GDscenechangerbutt_95rightObjects1= [];
gdjs.Page1Code.GDscenechangerbutt_95rightObjects2= [];

gdjs.Page1Code.conditionTrue_0 = {val:false};
gdjs.Page1Code.condition0IsTrue_0 = {val:false};
gdjs.Page1Code.condition1IsTrue_0 = {val:false};

gdjs.Page1Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Page1Code.GDwnioskiObjects1.length = 0;
gdjs.Page1Code.GDwnioskiObjects2.length = 0;
gdjs.Page1Code.GDButtonObjects1.length = 0;
gdjs.Page1Code.GDButtonObjects2.length = 0;
gdjs.Page1Code.GDbackObjects1.length = 0;
gdjs.Page1Code.GDbackObjects2.length = 0;
gdjs.Page1Code.GDnamesObjects1.length = 0;
gdjs.Page1Code.GDnamesObjects2.length = 0;
gdjs.Page1Code.GDjezuObjects1.length = 0;
gdjs.Page1Code.GDjezuObjects2.length = 0;
gdjs.Page1Code.GDPrzeztenfilmObjects1.length = 0;
gdjs.Page1Code.GDPrzeztenfilmObjects2.length = 0;
gdjs.Page1Code.GDscenechangerbutt_95rightObjects1.length = 0;
gdjs.Page1Code.GDscenechangerbutt_95rightObjects2.length = 0;


{



}


{

gdjs.Page1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Button", gdjs.Page1Code.GDButtonObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page1Code.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Button", gdjs.Page1Code.GDButtonObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page1Code.GDButtonObjects2.createFrom(gdjs.Page1Code.GDButtonObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDButtonObjects2.length ;i < len;++i) {
    gdjs.Page1Code.GDButtonObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "czy to sie dzieje naprawde.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page1Code.GDwnioskiObjects1.createFrom(runtimeScene.getObjects("wnioski"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("wnioski", gdjs.Page1Code.GDwnioskiObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDwnioskiObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDwnioskiObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page1Code.GDwnioskiObjects1.createFrom(runtimeScene.getObjects("wnioski"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("wnioski", gdjs.Page1Code.GDwnioskiObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDwnioskiObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDwnioskiObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page1Code.GDwnioskiObjects2.createFrom(gdjs.Page1Code.GDwnioskiObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDwnioskiObjects2.length ;i < len;++i) {
    gdjs.Page1Code.GDwnioskiObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wnioski.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page1Code.GDjezuObjects1.createFrom(runtimeScene.getObjects("jezu"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("jezu", gdjs.Page1Code.GDjezuObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDjezuObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDjezuObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page1Code.GDjezuObjects1.createFrom(runtimeScene.getObjects("jezu"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("jezu", gdjs.Page1Code.GDjezuObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDjezuObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDjezuObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page1Code.GDjezuObjects2.createFrom(gdjs.Page1Code.GDjezuObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDjezuObjects2.length ;i < len;++i) {
    gdjs.Page1Code.GDjezuObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jezu.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page1Code.GDPrzeztenfilmObjects1.createFrom(runtimeScene.getObjects("Przeztenfilm"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Przeztenfilm", gdjs.Page1Code.GDPrzeztenfilmObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDPrzeztenfilmObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDPrzeztenfilmObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page1Code.GDPrzeztenfilmObjects1.createFrom(runtimeScene.getObjects("Przeztenfilm"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Przeztenfilm", gdjs.Page1Code.GDPrzeztenfilmObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDPrzeztenfilmObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDPrzeztenfilmObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page1Code.GDPrzeztenfilmObjects2.createFrom(gdjs.Page1Code.GDPrzeztenfilmObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDPrzeztenfilmObjects2.length ;i < len;++i) {
    gdjs.Page1Code.GDPrzeztenfilmObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Przez ten film, chce sie zabic.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page1Code.GDscenechangerbutt_95rightObjects1.createFrom(runtimeScene.getObjects("scenechangerbutt_right"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenechangerbutt_right", gdjs.Page1Code.GDscenechangerbutt_95rightObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDscenechangerbutt_95rightObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDscenechangerbutt_95rightObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page1Code.GDscenechangerbutt_95rightObjects1.createFrom(runtimeScene.getObjects("scenechangerbutt_right"));

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenechangerbutt_right", gdjs.Page1Code.GDscenechangerbutt_95rightObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDscenechangerbutt_95rightObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDscenechangerbutt_95rightObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page1Code.GDscenechangerbutt_95rightObjects2.createFrom(gdjs.Page1Code.GDscenechangerbutt_95rightObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page1Code.GDscenechangerbutt_95rightObjects2.length ;i < len;++i) {
    gdjs.Page1Code.GDscenechangerbutt_95rightObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Page2", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Page1Code']= gdjs.Page1Code;

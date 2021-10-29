gdjs.Page3Code = {};


gdjs.Page3Code.GDbggObjects1= [];
gdjs.Page3Code.GDbggObjects2= [];
gdjs.Page3Code.GDtitlesObjects1= [];
gdjs.Page3Code.GDtitlesObjects2= [];
gdjs.Page3Code.GDzcObjects1= [];
gdjs.Page3Code.GDzcObjects2= [];
gdjs.Page3Code.GDjedzenieObjects1= [];
gdjs.Page3Code.GDjedzenieObjects2= [];
gdjs.Page3Code.GDumiarObjects1= [];
gdjs.Page3Code.GDumiarObjects2= [];
gdjs.Page3Code.GDscenariuszObjects1= [];
gdjs.Page3Code.GDscenariuszObjects2= [];
gdjs.Page3Code.GDscenechanger_95leftObjects1= [];
gdjs.Page3Code.GDscenechanger_95leftObjects2= [];

gdjs.Page3Code.conditionTrue_0 = {val:false};
gdjs.Page3Code.condition0IsTrue_0 = {val:false};
gdjs.Page3Code.condition1IsTrue_0 = {val:false};

gdjs.Page3Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Page3Code.GDbggObjects1.length = 0;
gdjs.Page3Code.GDbggObjects2.length = 0;
gdjs.Page3Code.GDtitlesObjects1.length = 0;
gdjs.Page3Code.GDtitlesObjects2.length = 0;
gdjs.Page3Code.GDzcObjects1.length = 0;
gdjs.Page3Code.GDzcObjects2.length = 0;
gdjs.Page3Code.GDjedzenieObjects1.length = 0;
gdjs.Page3Code.GDjedzenieObjects2.length = 0;
gdjs.Page3Code.GDumiarObjects1.length = 0;
gdjs.Page3Code.GDumiarObjects2.length = 0;
gdjs.Page3Code.GDscenariuszObjects1.length = 0;
gdjs.Page3Code.GDscenariuszObjects2.length = 0;
gdjs.Page3Code.GDscenechanger_95leftObjects1.length = 0;
gdjs.Page3Code.GDscenechanger_95leftObjects2.length = 0;


{



}


{

gdjs.Page3Code.GDzcObjects1.createFrom(runtimeScene.getObjects("zc"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("zc", gdjs.Page3Code.GDzcObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDzcObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDzcObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page3Code.GDzcObjects1.createFrom(runtimeScene.getObjects("zc"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("zc", gdjs.Page3Code.GDzcObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDzcObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDzcObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page3Code.GDzcObjects2.createFrom(gdjs.Page3Code.GDzcObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDzcObjects2.length ;i < len;++i) {
    gdjs.Page3Code.GDzcObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jak byc zabawnym czlowiekiem.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page3Code.GDjedzenieObjects1.createFrom(runtimeScene.getObjects("jedzenie"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("jedzenie", gdjs.Page3Code.GDjedzenieObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDjedzenieObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDjedzenieObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page3Code.GDjedzenieObjects1.createFrom(runtimeScene.getObjects("jedzenie"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("jedzenie", gdjs.Page3Code.GDjedzenieObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDjedzenieObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDjedzenieObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page3Code.GDjedzenieObjects2.createFrom(gdjs.Page3Code.GDjedzenieObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDjedzenieObjects2.length ;i < len;++i) {
    gdjs.Page3Code.GDjedzenieObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jedzenie.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page3Code.GDumiarObjects1.createFrom(runtimeScene.getObjects("umiar"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("umiar", gdjs.Page3Code.GDumiarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDumiarObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDumiarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page3Code.GDumiarObjects1.createFrom(runtimeScene.getObjects("umiar"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("umiar", gdjs.Page3Code.GDumiarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDumiarObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDumiarObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page3Code.GDumiarObjects2.createFrom(gdjs.Page3Code.GDumiarObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDumiarObjects2.length ;i < len;++i) {
    gdjs.Page3Code.GDumiarObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "stosowaćz umiarem.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page3Code.GDscenariuszObjects1.createFrom(runtimeScene.getObjects("scenariusz"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenariusz", gdjs.Page3Code.GDscenariuszObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenariuszObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDscenariuszObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page3Code.GDscenariuszObjects1.createFrom(runtimeScene.getObjects("scenariusz"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenariusz", gdjs.Page3Code.GDscenariuszObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenariuszObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDscenariuszObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page3Code.GDscenariuszObjects2.createFrom(gdjs.Page3Code.GDscenariuszObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenariuszObjects2.length ;i < len;++i) {
    gdjs.Page3Code.GDscenariuszObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "scenariusz.ogg", false, 100, 1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.Page3Code.GDscenechanger_95leftObjects1.createFrom(runtimeScene.getObjects("scenechanger_left"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenechanger_left", gdjs.Page3Code.GDscenechanger_95leftObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenechanger_95leftObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDscenechanger_95leftObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Page3Code.GDscenechanger_95leftObjects1.createFrom(runtimeScene.getObjects("scenechanger_left"));

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("scenechanger_left", gdjs.Page3Code.GDscenechanger_95leftObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenechanger_95leftObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDscenechanger_95leftObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Page3Code.GDscenechanger_95leftObjects2.createFrom(gdjs.Page3Code.GDscenechanger_95leftObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Page3Code.GDscenechanger_95leftObjects2.length ;i < len;++i) {
    gdjs.Page3Code.GDscenechanger_95leftObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Page2", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Page3Code']= gdjs.Page3Code;

gdjs.MENUCode = {};


gdjs.MENUCode.GDbggObjects1= [];
gdjs.MENUCode.GDbggObjects2= [];
gdjs.MENUCode.GDbutObjects1= [];
gdjs.MENUCode.GDbutObjects2= [];
gdjs.MENUCode.GDtw_95buttonObjects1= [];
gdjs.MENUCode.GDtw_95buttonObjects2= [];
gdjs.MENUCode.GDyt_95buttonObjects1= [];
gdjs.MENUCode.GDyt_95buttonObjects2= [];
gdjs.MENUCode.GDcreditObjects1= [];
gdjs.MENUCode.GDcreditObjects2= [];

gdjs.MENUCode.conditionTrue_0 = {val:false};
gdjs.MENUCode.condition0IsTrue_0 = {val:false};
gdjs.MENUCode.condition1IsTrue_0 = {val:false};

gdjs.MENUCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MENUCode.GDbggObjects1.length = 0;
gdjs.MENUCode.GDbggObjects2.length = 0;
gdjs.MENUCode.GDbutObjects1.length = 0;
gdjs.MENUCode.GDbutObjects2.length = 0;
gdjs.MENUCode.GDtw_95buttonObjects1.length = 0;
gdjs.MENUCode.GDtw_95buttonObjects2.length = 0;
gdjs.MENUCode.GDyt_95buttonObjects1.length = 0;
gdjs.MENUCode.GDyt_95buttonObjects2.length = 0;
gdjs.MENUCode.GDcreditObjects1.length = 0;
gdjs.MENUCode.GDcreditObjects2.length = 0;


{



}


{

gdjs.MENUCode.GDbutObjects1.createFrom(runtimeScene.getObjects("but"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("but", gdjs.MENUCode.GDbutObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDbutObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MENUCode.GDbutObjects1.createFrom(runtimeScene.getObjects("but"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("but", gdjs.MENUCode.GDbutObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDbutObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.MENUCode.GDbutObjects2.createFrom(gdjs.MENUCode.GDbutObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDbutObjects2.length ;i < len;++i) {
    gdjs.MENUCode.GDbutObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Page1", false);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.MENUCode.GDtw_95buttonObjects1.createFrom(runtimeScene.getObjects("tw_button"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("tw_button", gdjs.MENUCode.GDtw_95buttonObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDtw_95buttonObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDtw_95buttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MENUCode.GDtw_95buttonObjects1.createFrom(runtimeScene.getObjects("tw_button"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("tw_button", gdjs.MENUCode.GDtw_95buttonObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDtw_95buttonObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDtw_95buttonObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.MENUCode.GDtw_95buttonObjects2.createFrom(gdjs.MENUCode.GDtw_95buttonObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDtw_95buttonObjects2.length ;i < len;++i) {
    gdjs.MENUCode.GDtw_95buttonObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://twitter.com/ocelothe2k1");
}}

}

} //End of subevents
}

}


{



}


{

gdjs.MENUCode.GDyt_95buttonObjects1.createFrom(runtimeScene.getObjects("yt_button"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("yt_button", gdjs.MENUCode.GDyt_95buttonObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDyt_95buttonObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDyt_95buttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MENUCode.GDyt_95buttonObjects1.createFrom(runtimeScene.getObjects("yt_button"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("yt_button", gdjs.MENUCode.GDyt_95buttonObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDyt_95buttonObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDyt_95buttonObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.MENUCode.GDyt_95buttonObjects2.createFrom(gdjs.MENUCode.GDyt_95buttonObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MENUCode.GDyt_95buttonObjects2.length ;i < len;++i) {
    gdjs.MENUCode.GDyt_95buttonObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("www.youtube.com/channel/UC3Q0ctvlGjx3d8raHm399Vw");
}}

}

} //End of subevents
}

}

return;
}
gdjs['MENUCode']= gdjs.MENUCode;

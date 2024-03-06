function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63XzlEr7gHF":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer()

// General Varaibles
player.SetVar("Language","Arabic");
player.SetVar("Num_Qestions","5");

// Question 1
player.SetVar("Q_1","أنشئتْ في المملكة العربية السعودية جمعية باسم جمعية الهلال الأحمر السعودي<br> بموجب المرسوم الملكي رقم 1 في عام  ..........  هجري.");
player.SetVar("Q_1_Option_1", "1386");
player.SetVar("Q_1_Option_2", "1378");
player.SetVar("Q_1_Option_3", "1372");
player.SetVar("Q_1_Option_N4", "1375");
player.SetVar("Q_1_Option_5", "1383");

// Question 2
player.SetVar("Q_2","مركز هيئة الهلال الأحمر السعودي الرئيسي في مدينة .......");
player.SetVar("Q_2_Option_1", "الدمام");
player.SetVar("Q_2_Option_N2", "الرياض");
player.SetVar("Q_2_Option_3", "أبها");
player.SetVar("Q_2_Option_4", "مكة");
player.SetVar("Q_2_Option_5", "جدة");

// Question 3
player.SetVar("Q_3","تم تحويل مسمى الجمعية إلى هيئة الهلال الأحمر السعودي بقرار مجلس الوزراء <br>رقم 371 وتاريخ  ............  هجري.");
player.SetVar("Q_3_Option_1", "1425");
player.SetVar("Q_3_Option_2", "1398");
player.SetVar("Q_3_Option_N3", "1429");
player.SetVar("Q_3_Option_4", "1403");
player.SetVar("Q_3_Option_5", "1410");

// Question 4
player.SetVar("QN_4","كم يبلغ عدد متطوعين خبراء الهيئة؟");
player.SetVar("Q_4_Option_1", "+53 ألف");
player.SetVar("Q_4_Option_2", "+57 ألف");
player.SetVar("Q_4_Option_3", "+54 ألف");
player.SetVar("Q_4_Option_4", "+06 ألف");
player.SetVar("Q_4_Option_N5", "+56 ألف");

// Question 5
player.SetVar("Q_5","كم يبلغ عدد حالات القسطرة القلبية؟");
player.SetVar("Q_5_Option_N1", "+250");
player.SetVar("Q_5_Option_2", "+200");
player.SetVar("Q_5_Option_3", "+150");
player.SetVar("Q_5_Option_4", "+100");
player.SetVar("Q_5_Option_5", "+300");

// Question 6
player.SetVar("Q_6","###");
player.SetVar("Q_6_Option_1", "###");
player.SetVar("Q_6_Option_2", "###");
player.SetVar("Q_6_Option_3", "###");
player.SetVar("Q_6_Option_4", "###");
player.SetVar("Q_6_Option_N5", "###");

// Question 7
player.SetVar("Q_7","###");
player.SetVar("Q_7_Option_1", "###");
player.SetVar("Q_7_Option_2", "###");
player.SetVar("Q_7_Option_3", "###");
player.SetVar("Q_7_Option_N4", "###");
player.SetVar("Q_7_Option_5", "###");

// Question 8
player.SetVar("QN_8","###");
player.SetVar("Q_8_Option_1", "###");
player.SetVar("Q_8_Option_2", "###");
player.SetVar("Q_8_Option_3", "###");
player.SetVar("Q_8_Option_4", "###");
player.SetVar("Q_8_Option_N5", "###");

// Question 9
player.SetVar("Q_9","###");
player.SetVar("Q_9_Option_1", "###");
player.SetVar("Q_9_Option_N2", "###");
player.SetVar("Q_9_Option_3", "###");
player.SetVar("Q_9_Option_4", "###");
player.SetVar("Q_9_Option_5", "###");

// Question 10
player.SetVar("Q_10","###");
player.SetVar("Q_10_Option_1", "###");
player.SetVar("Q_10_Option_2", "###");
player.SetVar("Q_10_Option_3", "###");
player.SetVar("Q_10_Option_N4", "###");
player.SetVar("Q_10_Option_5", "###");
}

};

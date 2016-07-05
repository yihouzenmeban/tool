<?php
error_reporting(0); //隐藏所有报错信息
$con = mysql_connect("localhost","root","liwei"); //链接数据库，主机，数据库账号，密码
//判断是否连接成功，如果不成功则终止流程并且输出错误信息。
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

/*
//创建库，成功则输出已经创建，失败则输出错误信息。
if (mysql_query("CREATE DATABASE mememetest", $con)) {
    echo "Database created";
} else {
    echo 'Error creating database: ' . mysql_error();
}
*/

//连接建立的库
mysql_select_db("mememetest", $con);


/*
//赋值sql语句，创建一张表
//如果是空的自动加一
//主键唯一
$sql = "CREATE TABLE Persons
    (
        personID int(10) NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(personID),
        FirstName varchar(15),
        LastName varchar(15),
        Age int(3)
    )";

//使用mysql_query执行sql语句。
mysql_query($sql, $con);
*/

/*
//插入数据
mysql_query("INSERT INTO Persons (FirstName, LastName, Age)
    VALUES ('Peter', 'Griffin', '35')");
*/

/*
//根据接收的数据进行插入
$sql = "INSERT INTO Persons (FirstName, LastName, Age)
    VALUES ('$_POST[firstname]', '$_POST[lastname]', '$_POST[age]')";
*/

/*
//删除Persons这张表
$sql = "DROP TABLE Persons";
*/

/*//条件判断 FirstName='Peter'
$result = mysql_query("SELECT * FROM Persons WHERE FirstName='Peter'");*/

/*
//DESC由高到底排序，去掉则由低到高。
$result = mysql_query("SELECT * FROM Persons ORDER BY age");
*/

/*echo "<table border='1'>
<tr>
<th>FirstName</th>
<th>LastName</th>
<th>Age</th>
</tr>";

while($row = mysql_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['FirstName'] . "</td>";
    echo "<td>" . $row['LastName'] . "</td>";
    echo "<td>" . $row['Age'] . "</td>";
    echo "</tr>";
}

echo "</table>";*/

/*
//根据条件进行修改
mysql_query("UPDATE Persons SET Age = '36' WHERE FirstName = 'Peter' AND LastName = 'Griffin'");
*/

/*
//根据条件进行删除
mysql_query("DELETE FROM Persons WHERE Age = '13'");
*/

/*
//判断如果无法执行该语句，则中断并且输出错误信息
if (!mysql_query($sql, $con)) {
    die('Error: ' . mysql_error());
}
echo "1 record added";
*/

mysql_close($con);
?>
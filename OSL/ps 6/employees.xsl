<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">

<html>
<head>
    <title>Employee Salary</title>
</head>

<body>
<h2>Employee Salary Details</h2>

<table border="1">
<tr>
    <th>Name</th>
    <th>ID</th>
    <th>Department</th>
    <th>Salary/Day</th>
    <th>Working Days</th>
    <th>Total Salary</th>
</tr>

<xsl:for-each select="employees/employee">
<tr>
    <td><xsl:value-of select="name"/></td>
    <td><xsl:value-of select="id"/></td>
    <td><xsl:value-of select="department"/></td>
    <td><xsl:value-of select="salaryPerDay"/></td>
    <td><xsl:value-of select="workingDays"/></td>

    <td>
        <xsl:value-of select="salaryPerDay * workingDays"/>
    </td>
</tr>
</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>
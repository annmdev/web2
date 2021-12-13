<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Web2: result</title>
    <link href="${pageContext.request.contextPath}/result.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="main-container">
    <div class="form-link-container">
        <a class="form-link" href="${pageContext.request.contextPath}/form">
            <img class="img_back" src="${pageContext.request.contextPath}/icons8-назад-64.png" alt="back">
        </a>
    </div>
    <div class="result-table-container">
        <table class="table-result">
            <tr>
                <th id="r-col">Параметр R</th>
                <th id="x-col">Координата X</th>
                <th id="y-col">Координата Y</th>
                <th id="res-col">Результат</th>
            </tr>
            <tr>
                <td><c:out value="${param.get('arg-r')}"/></td>
                <td><c:out value="${param.get('arg-x')}"/></td>
                <td><c:out value="${param.get('arg-y')}"/></td>
                <td><c:out value="${requestScope.get('result')}"/></td>
            </tr>

        </table>
    </div>
</div>
</body>
</html>
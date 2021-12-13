<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Web2</title>
    <link href="${pageContext.request.contextPath}/index.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<header>
    <div class="header-container">
        <div class="header-data">
            <div id="header-name">Студент: Анна Михайлова</div>
            <div id="header-group">Группа: P3232</div>
            <div id="header-variant">Вариант: 32720</div>
        </div>
    </div>
</header>

<table class="main-container">

    <tr>
        <td id="up-space" colspan="4"></td>
    </tr>

    <tr>
        <td id="left-space" rowspan="2"></td>
        <td id="left-column">
            <canvas id="coord-plane">Чо</canvas>

        </td>

        <td id="right-column">
            <div class="main-form-container">
                <div class="next-text">Следующий запрос:</div>
                <form class="form-args" id="coordinate-form" action="${pageContext.request.contextPath}/main" method="post">
                    <label>
                        Изменение R:
                        <input type="text" name="arg-r">
                    </label>
                    <label>
                        Изменение X:
                        <select size="1" form="coordinate-form" name="arg-x" id="select_x">
                            <option disabled>Выберете X</option>
                            <option value="-2">-2</option>
                            <option value="-1.5">-1.5</option>
                            <option value="-1">-1</option>
                            <option value="-0.5">-0.5</option>
                            <option value="0">0</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                        </select>
                    </label>
                    <label>
                        Изменение Y:
                        <input type="text" name="arg-y">
                    </label>
                    <input class="submit-btn" type="submit" value="Отправить">
                </form>
            </div>
        </td>
        <td id="right-space" rowspan="2"></td>
    </tr>

    <tr>
        <td colspan="2" id="data-table-column">
            <div class="container-table-history">
                <div class="table-name">История результатов</div>
                <table class="table-history">
                    <tr>
                        <th id="num-col">Номер запроса</th>
                        <th id="r-col">Параметр R</th>
                        <th id="x-col">Координата X</th>
                        <th id="y-col">Координата Y</th>
                        <th id="res-col">Результат</th>
                    </tr>

                    <c:if test="${resultList.size() > 0}">
                        <c:forEach begin="0" end="${resultList.size()-1}" varStatus="loop">
                            <tr class="table-history-row">
                                <td>${loop.index+1}</td>
                                <td><c:out value="${resultList.get(loop.index).r}"/></td>
                                <td><c:out value="${resultList.get(loop.index).x}"/></td>
                                <td><c:out value="${resultList.get(loop.index).y}"/></td>
                                <td><c:out value="${resultList.get(loop.index).result}"/></td>
                            </tr>
                        </c:forEach>

                    </c:if>
                </table>
            </div>
        </td>
    </tr>
</table>

<script type="text/javascript" src="${pageContext.request.contextPath}/validate_form.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/canvas_ondraw.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/canvas_onclick.js"></script>


</body>
</html>
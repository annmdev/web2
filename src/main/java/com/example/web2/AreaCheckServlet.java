package com.example.web2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        float r = Float.parseFloat(req.getParameter("arg-r"));
        float x = Float.parseFloat(req.getParameter("arg-x"));
        float y = Float.parseFloat(req.getParameter("arg-y"));

        AreaShot areaShot = Checker.newShot(r, x, y);
        ((ArrayList<AreaShot>)getServletContext().getAttribute("resultList")).add(areaShot);

        req.setAttribute("result", areaShot.isResult());
        RequestDispatcher requestDispatcher = getServletContext().getRequestDispatcher("/result");
        requestDispatcher.forward(req, resp);

    }

}

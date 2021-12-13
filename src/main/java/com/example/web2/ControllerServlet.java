package com.example.web2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        if (getServletContext().getAttribute("resultList") == null) {
            getServletContext().setAttribute("resultList", new ArrayList<AreaShot>());
        }
        if (req.getParameter("arg-r") != null && req.getParameter("arg-x") != null
                && req.getParameter("arg-y") != null) {
            forward(req, resp, "/check");
            return;
        }
        forward(req, resp, "/form");

    }

    private void forward(HttpServletRequest req, HttpServletResponse resp, String path) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = getServletContext().getRequestDispatcher(path);
        requestDispatcher.forward(req, resp);
    }
}

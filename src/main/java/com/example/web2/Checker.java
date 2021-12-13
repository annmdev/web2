package com.example.web2;

public class Checker {

    public static AreaShot newShot(float r, float x, float y){
        AreaShot areaShot = new AreaShot();
        boolean result = (x >= 0 && y >= 0 && x <= r && y <= r)
                || (x >= 0 && y <= 0 && y >= (x - r / 2))
                || (x <= 0 && y >= 0 && (x * x + y * y) <= (r / 2) * (r / 2));
        areaShot.setR(r);
        areaShot.setX(x);
        areaShot.setY(y);
        areaShot.setResult(result);

        return areaShot;
    }
}

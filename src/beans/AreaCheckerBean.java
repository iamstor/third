package beans;

import model.Point;
import model.PointHistoryElement;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;
import java.io.IOException;
import java.io.Serializable;




public class AreaCheckerBean implements Serializable {
    private Double x;
    private Double y;
    private Double xCanvas;
    private Double yCanvas;
    private String resizeResult;
    private Double r;

    private DataBean bean;
    private UserNameBean userNameBean;

    @PostConstruct
    public void postConstruct() {
        try {
            if (userNameBean.getName() == null || userNameBean.getName().equals("")) {
                FacesContext.getCurrentInstance().getExternalContext().redirect("index.xhtml");
            }
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }

    }

    public Double getxCanvas() {
        return xCanvas;
    }

    public void setxCanvas(Double xCanvas) {
        this.xCanvas = xCanvas;
    }

    public Double getyCanvas() {
        return yCanvas;
    }

    public void setyCanvas(Double yCanvas) {
        this.yCanvas = yCanvas;
    }

    public AreaCheckerBean() {
        r = 1.0;
        x = -3.0;
        y = -3.0;
    }

    public Double getX() {
        return x;
    }


    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public String getResizeResult() {
        return resizeResult;
    }

    public void setResizeResult(String resizeResult) {
        this.resizeResult = resizeResult;
    }

    public void check() {
        Point p = new Point(getX(), getY(), userNameBean.getName());
        PointHistoryElement element = new PointHistoryElement(p, getR());
        p.addHistoryElement(element);
        bean.addPoint(p);
        bean.addElement(element);
        resizeResult = p.getIsCheck();
    }

    public void canvasCheck() {
        System.out.println("New dotXXX"+getX());
        System.out.println("New dotYYY"+getY());
        Point p = new Point(xCanvas, yCanvas, userNameBean.getName());
        PointHistoryElement element = new PointHistoryElement(p, r);
        p.addHistoryElement(element);
        bean.addPoint(p);
        bean.addElement(element);
        resizeResult = p.getIsCheck();
    }

    public void resizeCheck() {
        Point p = new Point(xCanvas, yCanvas, userNameBean.getName());
        p.addHistoryElement(new PointHistoryElement(p, r));
        resizeResult = p.getIsCheck();
    }

    public void setBean(DataBean bean) {
        this.bean = bean;
    }

    public boolean getReady() {
        return x != null && y != null && r != null;
    }



    public void setUserNameBean(UserNameBean userNameBean) {
        this.userNameBean = userNameBean;
    }

    public UserNameBean getUserNameBean() {
        return userNameBean;
    }

}
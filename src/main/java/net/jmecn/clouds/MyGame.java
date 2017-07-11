package net.jmecn.clouds;

import com.jme3.app.SimpleApplication;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Quad;

/**
 * An simple 2d dynamic clouds example.
 * 
 * http://www.iquilezles.org/www/articles/dynclouds/dynclouds.htm
 * 
 * @author yanmaoyuan
 *
 */
public class MyGame extends SimpleApplication {

    @Override
    public void simpleInitApp() {
        // Sky color
        viewPort.setBackgroundColor(new ColorRGBA(0.6f, 0.8f, 0.9f, 1.0f));
        
        // Load the cloud material
        Material mat = assetManager.loadMaterial("Materials/Clouds.j3m");
        
        Geometry geom = new Geometry("Quad", new Quad(10, 10));
        geom.setMaterial(mat);
        geom.center();
        
        rootNode.attachChild(geom);
    }

    public static void main(String[] args) {
        MyGame app = new MyGame();
        app.start();
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */

import javaapplication1.Grader;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Hamzah Manzoor
 */
public class GradeUitTest {
    
    public GradeUitTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @BeforeClass
    public static void setUp() {
    }
    
    @AfterClass
    public static void tearDown() {
    }
    
    @Test
    public void testEvaluateGrade (){
        assertTrue("A".equals(Grader.evaluateGrade(90)));
        assertTrue("A".equals(Grader.evaluateGrade(100)));
        assertTrue("B".equals(Grader.evaluateGrade(89)));
        assertTrue("B".equals(Grader.evaluateGrade(80)));
        assertTrue("C".equals(Grader.evaluateGrade(75)));
        assertTrue("D".equals(Grader.evaluateGrade(60)));
        assertTrue("E".equals(Grader.evaluateGrade(55)));
        assertTrue("F".equals(Grader.evaluateGrade(3)));
        assertTrue("A".equals(Grader.evaluateGrade(92)));
        assertTrue("Not In Range".equals(Grader.evaluateGrade(2)));
        
        
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
}

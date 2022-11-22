/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.mycompany.junitclass;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class JunitClassTest {
    
    public JunitClassTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
        System.out.println("before Class");
    }
    
    @AfterAll
    public static void tearDownClass() {
        System.out.println("After Class");
    }
    
    @BeforeEach
    public void setUp() {
        System.out.println("before Each test");
    }
    
    @AfterEach
    public void tearDown() {
        System.out.println("After Each test");
    }

    /**
     * Test of MultiplyNumber method, of class JunitClass.
     */
    @Test
    public void testMultiplyNumber() {
        System.out.println("MultiplyNumber");
        int a = 3;
        int b = 5;
        JunitClass instance = new JunitClass();
        int expResult = 15;
        int result = instance.MultiplyNumber(a, b);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of divide method, of class JunitClass.
     */
    @Test
    public void testDivide() {
        System.out.println("divide");
        int num1 = 7;
        int num2 = 1;
        JunitClass instance = new JunitClass();
        int expResult = 7;
        int result = instance.divide(num1, num2);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of main method, of class JunitClass.
     */
    @Test
    public void testMain() {
        System.out.println("main");
        String[] args = null;
        JunitClass.main(args);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }
    
}

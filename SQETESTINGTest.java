/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package sqetesting;


import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author l2013
 */
public class SQETESTINGTest {
    
   
    @Test
    public void testTesting() {
      
           assertEquals(4,SQETESTING.findMax(new int[]{1,3,4,2}));  
    // assertEquals(-1,SQETESTING.findMax(new int[]{-12,-1,-3,-4,-2}));
    }
    
}

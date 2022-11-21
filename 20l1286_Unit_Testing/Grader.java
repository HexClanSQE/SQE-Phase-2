/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication1;

/**
 *
 * @author Hamzah Manzoor
 */
public class Grader {
    public static String evaluateGrade (int marks){
        if (marks < 0 || marks > 100){
            return "Not In Range";
        }
        
        if (marks >=90){
            return "A";
        } else if (marks >= 80){
            return "B";
        } else if (marks >= 70) {
            return "C";
        } else if (marks >= 60){
            return "D";
        } else if (marks >= 50) {
            return "E";
        } else {
            return "F";
        }
    } 


}

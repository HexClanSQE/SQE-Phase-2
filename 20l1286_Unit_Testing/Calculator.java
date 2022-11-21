/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication1;

/**
 *
 * @author Hamzah Manzoor
 */
public class Calculator {
    public static int calculate (int arg1, int arg2, char oper){
        switch(oper){
            case '+':
                return arg1 + arg2;
            case '*':
                return arg1 * arg2;
            case '-':
                return arg1 - arg2;
            case '/':
                return arg1 / arg2;
            default:
                return -1;
        }
    } 
}

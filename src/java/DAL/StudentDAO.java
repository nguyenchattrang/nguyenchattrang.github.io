/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAL;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.ArrayList;
import java.util.Date;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Student;

/**
 *
 * @author ADMIN
 */
public class StudentDAO {

    Random rd = new Random();

    public ArrayList<Student> Students(int n) {
        ArrayList<Student> students = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            students.add(new Student(i + 1, randomName(), rd.nextBoolean(), randomDate()));
        }
        return students;
    }

    public String randomName() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        int n = rd.nextInt(3) + 4;
        StringBuilder sb = new StringBuilder(n);
        for (int i = 0; i < n; i++) {
            sb.append(chars.charAt(rd.nextInt(chars.length())));
        }
        return sb.toString();
    }

    public Date randomDate() {           
        Date date = new Date((rd.nextInt(70) + 1950)-1900, (rd.nextInt(12) + 0), (rd.nextInt(31) + 1));
        return date;
    }
}

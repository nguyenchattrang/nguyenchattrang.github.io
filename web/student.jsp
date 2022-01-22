<%-- 
    Document   : student.jsp
    Created on : Jan 18, 2022, 11:42:37 AM
    Author     : ADMIN
--%>

<%@page import="java.text.DateFormat"%>
<%@page import="java.time.format.DateTimeFormatterBuilder"%>
<%@page import="java.time.format.DateTimeFormatter"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.time.LocalDate"%>
<%@page import="java.nio.charset.Charset"%>
<%@page import="java.util.Random"%>
<%@page import="java.util.ArrayList"%>
<%@page import="model.Student"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Lab 2</title>
        <%
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
            String num = (String) request.getAttribute("num");
            if (num == null) {
                num = "";
            }
            ArrayList<Student> students = (ArrayList<Student>) request.getAttribute("students");
        %>    
    </head>
    <body>
        <form action="StudentServlet" method="post">
            <label for="num" > Number of Students </label>
            <input type="text" style="border-color: lightblue;" id="num" name="num" pattern="[0-9]+" value="<%=num%>"/>
            <input type="submit" value="generate"/>

        </form>
        <table   <%if (num.equals("") || num.equals("0")) {
            %> style="display: none;" <%}%>  border = "1"
            > <th>
                ID</th
            > <th>
                Name</th
            > <th>
                Gender</th
            > <th>
                DOB</th
            > <%
                for (Student s : students) {%>
            <tr>
                <td>
                    <%=s.getId()%>
                </td>
                <td>
                    <%= s.getName()%>
                </td>
                <td>
                    <input type="checkbox" style=" filter:  hue-rotate(180deg) brightness(1.7);" <%=s.isGender()%>
                           <%if (s.isGender()) {
                           %> checked
                           <%
                               }
                           %> 
                           />  
                </td>
                <td>
                    <%= simpleDateFormat.format(s.getDOB())%>
                    <%};%>
                </td>
            </tr>
        </table>
    </body>
</html>

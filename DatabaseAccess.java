import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DatabaseAccess
 */
@WebServlet("/DatabaseAccess")
public class DatabaseAccess extends HttpServlet {
    private static final long serialVersionUID = 1L;
    // JDBC 驱动名及数据库 URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://120.79.89.4:3306/music";
    
    // 数据库的用户名与密码，需要根据自己的设置
    static final String USER = "guest";
    static final String PASS = "Rao614614614@"; 
    public DatabaseAccess() {
        super();   
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Connection conn = null;
        Statement stmt = null;
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String title = "恭喜您注册成功";
         String name =new String(request.getParameter("name").getBytes("ISO8859-1"),"UTF-8");
        String password =new String(request.getParameter("password").getBytes("ISO8859-1"),"UTF-8");
        String password1 =new String(request.getParameter("password1").getBytes("ISO8859-1"),"UTF-8");
        String email =new String(request.getParameter("email").getBytes("ISO8859-1"),"UTF-8");
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
            System.out.println(conn);
            stmt = conn.createStatement();
            System.out.println(stmt);
            String sql;
            sql = "INSERT INTO user_info VALUES ('9','"+name+"','"+password+"','"+email+"')";
            System.out.println(sql);
            stmt.executeUpdate(sql);
            stmt.close();
            conn.close();
        } catch(SQLException se) {
            // 处理 JDBC 错误
            se.printStackTrace();
        } catch(Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 最后是用于关闭资源的块
            try{
                if(stmt!=null)
                stmt.close();
            }catch(SQLException se2){
            }
            try{
                if(conn!=null)
                conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
       String docType = "<!DOCTYPE html> \n";
        out.println(docType +
            "<html>\n" +
            "<head><title>" + title + "</title></head>\n" +
            "<body bgcolor=\"#f0f0f0\">\n" +
            "<h1 align=\"center\">" + name+ "</h1>\n" +
            "<ul>\n" +
            "  <li><b>密码</b>："
            + password + "\n" +
            "  <li><b>邮箱</b>："
            + email + "\n" +
            "</ul>\n" +
            "</body></html>");
       
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
}
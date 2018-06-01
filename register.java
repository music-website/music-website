import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




public class register extends HttpServlet {
    private static final long serialVersionUID = 1L;
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://120.79.89.4:3306/music";
    static final String USER = "root";
    static final String PASS = "Huang614614614@"; 

    public register() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
        Connection conn = null;
        Statement stmt = null;
        PrintWriter out = response.getWriter();
        String title = "恭喜您注册成功";
        String name =new String(request.getParameter("name").getBytes("ISO8859-1"),"UTF-8");
        String password =new String(request.getParameter("password").getBytes("ISO8859-1"),"UTF-8");
        String password1 =new String(request.getParameter("password1").getBytes("ISO8859-1"),"UTF-8");
        String email =new String(request.getParameter("email").getBytes("ISO8859-1"),"UTF-8");
                try{
            Class.forName("com.mysql.jdbc.Driver");
            
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
            stmt = conn.createStatement();
            String sql;
            sql = "INSERT INTO user_info values ('2','name','password','email')";
            ResultSet rs = stmt.executeQuery(sql);
            rs.close();
            stmt.close();
            conn.close();
        } catch(SQLException se) {
          
            se.printStackTrace();
        } catch(Exception e) {
         
            e.printStackTrace();
        }finally{
       
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
    
    // 处理 POST 方法请求的方法
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}